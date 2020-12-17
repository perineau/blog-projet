import React from "react";
import { Markdown, Comment } from "../../style";
import ReactMarkdown from "react-markdown";

const Render = (props) => {
  return (
    <Comment>
      <h1>{props.author}</h1>
      <sub>{props.created_at}</sub>
      <Markdown>
        <ReactMarkdown children={props.content} />
      </Markdown>
    </Comment>
  );
};

export default Render;
