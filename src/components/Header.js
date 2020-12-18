import styled from "@emotion/styled/macro";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled.header`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
    margin: 0px 10px;
  }

  padding: 10px;
  border-bottom: 2px black solid;
`;

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
