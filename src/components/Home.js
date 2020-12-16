import React from "react";
import Article from "./home/Article";
import { Home } from "../style";

const render = () => {
  const article = [
    { id: 1, name: "article 1", date: new Date(Date.now()) },
    { id: 2, name: "article 2", date: new Date(Date.now()) },
    { id: 3, name: "article 3", date: new Date(Date.now()) },
  ];

  return (
    <Home>
      <div>
        <h1>Latest Posts</h1>
        <ul>
          {article.map((el) => (
            <li key={el.id}>
              <Article {...el} />
            </li>
          ))}
        </ul>
      </div>
    </Home>
  );
};

export default render;
