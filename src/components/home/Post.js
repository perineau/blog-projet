import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { format } from "date-fns";

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
      <sub>{format(new Date(props.date), "MMMM do',' u 'at' ppp")}</sub>
    </ArticleList>
  );
};

export default Render;
