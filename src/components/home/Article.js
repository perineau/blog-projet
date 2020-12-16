import React from "react";
import { Link } from "react-router-dom";

export const Article = (prop) => {
  return (
    <>
      <Link to={`/article/${prop.id}`}>
        <h1>{prop.name}</h1>
      </Link>
      <sub>{prop.date.toString()}</sub>
    </>
  );
};
