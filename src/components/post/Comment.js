import React from "react";
import { Markdown } from "../../style";
import ReactMarkdown from "react-markdown";

const Render = (props) => {
  return (
    <div>
      <h1>{props.author}</h1>
      <sub>{props.created_at}</sub>
      <Markdown>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </Markdown>
    </div>
  );
};

export default Render;
