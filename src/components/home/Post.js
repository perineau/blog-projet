import React from "react";
import { Link } from "react-router-dom";
import { ArticleList } from "../../style";

const Render = (props) => {
  return (
    <ArticleList>
      <h1>
        <Link to={`/post/${props.id}`}>{props.title}</Link>
      </h1>
      <sub>{props.created_at.toString()}</sub>
    </ArticleList>
  );
};

export default Render;
