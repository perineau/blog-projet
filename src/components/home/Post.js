import React from "react";
import { Link } from "react-router-dom";
import { ArticleList } from "../../style";

const render = (props) => {
  return (
    <ArticleList>
      <h1>
        <Link to={`/post/${props.id}`}>{props.name}</Link>
      </h1>
      <sub>{props.date.toString()}</sub>
    </ArticleList>
  );
};

export default render;
