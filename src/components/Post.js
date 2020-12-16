import React from "react";

const Render = (props) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};

export default Render;
