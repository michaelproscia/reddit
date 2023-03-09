import { useState, useEffect } from "react";
import Post from "../components/Post";
import SubredditNav from "../components/SubredditNav";
import Reddit from "../utils/Reddit";

function Home({ isOpen, setIsOpen }) {
  const [posts, setPosts] = useState([]);
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
      <div className="relative flex flex-col justify-center md:flex-row-reverse dark:bg-slate-800">
        {isOpen && <SubredditNav subreddits={subreddits} />}
        <div className="mx-4 mt-8">
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
      </div>
    </div>
  );
}

export default Home;
