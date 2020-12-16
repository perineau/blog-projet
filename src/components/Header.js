import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../style";

const Render = () => {
  const link = [
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Our authors",
      link: "/authors",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];

  return (
    <Header>
      <nav>
        <h1>
          <Link to="/">Sup de Vinci</Link>
        </h1>
        <ul>
          {link.map((el, index) => (
            <li key={index}>
              <Link to={el.link}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
  );
};

export default Render;
