import React, { useState, useEffect } from "react";
import Post from "./home/Post";
import { Home, Loading } from "../style";
import { getPosts } from "../data/request";

const Render = () => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    getPosts(0).then((response) => {
      setPosts(response);
    });
  }, [setPosts]);

  return (
    <Home>
      <div>
        <h1>Latest Posts</h1>
        {!posts && <Loading>Loading ...</Loading>}
        {posts && (
          <ul>
            {posts.map((el) => (
              <li key={el.id}>
                <Post {...el} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Home>
  );
};

export default Render;
