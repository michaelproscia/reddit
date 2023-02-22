import { useState, useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((postsArr) => setPosts(postsArr.data.children));
  }, []);

  return (
    <div>
      <Header />
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
  );
}

export default App;
