import React from "react";
import { useParams } from "react-router-dom";
import { Home } from "../style";

const render = (props) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};

export default render;
