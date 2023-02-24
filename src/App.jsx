import { useState, useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import SubredditNav from "./components/SubredditNav";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  useEffect(() => {
    fetch("https://www.reddit.com/subreddits/default.json")
      .then((res) => res.json())
      .then((subArr) => setSubreddits(subArr.data.children));
  }, []);

  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <div className="flex justify-center">
        <div className="mx-4">
          {posts.map((post) => (
            <Post
              key={post.data.id}
              subredditName={post.data.subreddit_name_prefix}
              title={post.data.title}
              score={post.data.score}
              author={post.data.author}
              numComments={post.data.num_comments}
              created={post.data.created_utc}
              postImage={post.data.url_overridden_by_dest}
            />
          ))}
        </div>
        {isOpen && <SubredditNav subreddits={subreddits} />}
      </div>
    </div>
  );
}

export default App;
