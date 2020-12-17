import React, { useState, useEffect } from "react";
import Post from "./home/Post";
import { Home, Loading } from "../style";
import { getPosts } from "../data/request";
import Pagination from "./Pagination";

const Render = () => {
  const [posts, setPosts] = useState(false);

  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const number = 10;
    getPosts(index, number).then((response) => {
      setPosts(response.result);
      setMax(Math.ceil(response.count / number) - 1);
    });
  }, [setPosts, index]);
  return (
    <Home>
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

      <Pagination index={index} setIndex={setIndex} lenght={max} />
    </Home>
  );
};

export default Render;
