import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const link = [
    {
      name: "Sup de Vinci",
      link: "/",
    },
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
    <header>
      <nav>
        <ul>
          {link.map((el, index) => (
            <li key={index}>
              <Link to={el.link}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
