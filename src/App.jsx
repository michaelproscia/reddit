import { useState, useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import SubredditNav from "./components/SubredditNav";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subreddits, setSubreddits] = useState([]);
  const [darkMode, setDarkMode] = useState(
    localStorage?.getItem("theme") || "light"
  );

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

  useEffect(() => {
    if (darkMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Header
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
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

export default App;
