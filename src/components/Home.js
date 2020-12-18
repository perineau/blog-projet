import styled from "@emotion/styled/macro";
import React, { useState, useEffect } from "react";

import { getPosts } from "../data/request";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Post from "./home/Post";

const Home = styled.main`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  > ul > li {
    list-style: none;
    margin-top: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      {!posts && <Loading />}
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
