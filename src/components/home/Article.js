import React from "react";
import { Link } from "react-router-dom";
import { ArticleList } from "../../style";

const render = (prop) => {
  return (
    <ArticleList>
      <h1>
        <Link to={`/article/${prop.id}`}>{prop.name}</Link>
      </h1>
      <sub>{prop.date.toString()}</sub>
    </ArticleList>
  );
};

export default render;
