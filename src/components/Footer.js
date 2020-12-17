import React from "react";
import styled from "@emotion/styled/macro";

const Footer = styled.footer`
  /* reset */
  * {
    padding: 0px;
    margin: 0px;
  }

  display: flex;
  justify-content: center;
  padding: 10px;
  border-top: 1px black solid;
`;

const Render = () => {
  return (
    <Footer>
      <p>
        <b>Sup de vinci</b> - All right reserved 2020
      </p>
    </Footer>
  );
};

export default Render;
