import React from "react";

const Render = (props) => {
  return (
    <div>
      <h1>{props.author}</h1>
      <sub>{props.created_at}</sub>
      <p>{props.content}</p>
    </div>
  );
};

export default Render;
