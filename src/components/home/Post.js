import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";

const ArticleList = styled.div`
  h1 {
  }
  sub {
    color: gray;
  }

  a {
    text-decoration: none;
  }
`;

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
