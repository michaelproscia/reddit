import { useState, useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import SubredditNav from "./components/SubredditNav";

function App() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center relative">
        <div className="mx-4">
          {posts.map((post) => (
            <Post
              key={post.data.id}
              title={post.data.title}
              score={post.data.score}
              author={post.data.author}
              numComments={post.data.num_comments}
              created={post.data.created_utc}
            />
          ))}
        </div>
        <div>
          <div
            className="p-4 space-y-1.5 bg-white rounded max-h-12 shadow shadow-slate-500 hover:bg-slate-200 hover:cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
            <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
            <div className="block w-8 h-0.5 max-h-0.5 min-h-0.5 bg-gray-700"></div>
          </div>
        </div>
        {isOpen && <SubredditNav />}
      </div>
    </div>
  );
}

export default App;
