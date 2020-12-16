import React from "react";

const render = (props) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};

export default render;
