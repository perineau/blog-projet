import React from "react";
import ReactMarkdown from "react-markdown";

const Render = (props) => {
  return (
    <div className={props.className}>
      <ReactMarkdown children={props.children} />
    </div>
  );
};

export default Render;
