import { useState, useEffect } from "react";
import Reddit from "../utils/Reddit";

function Subreddit() {
  const [sub, setSub] = useState(null);

  useEffect(() => {
    Reddit.getSubReddit()
      .then((res) => res.json())
      .then((data) => setSub(data));
  }, []);

  return <div>{JSON.stringify(sub)}</div>;
}
export default Subreddit;
