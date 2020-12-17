import React from "react";
import Markdown from "../Markdown";
import styled from "@emotion/styled/macro";

const Comment = styled.div`
  > h1 {
    padding: 0px;
    margin: 0px;
  }

  .markdown {
    margin-top: 20px;
    flex-basis: 100%;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

const Render = (props) => {
  return (
    <Comment>
      <h1>{props.author}</h1>
      <sub>{props.date}</sub>
      <Markdown className="markdown">{props.content}</Markdown>
    </Comment>
  );
};

export default Render;
