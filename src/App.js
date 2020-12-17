import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import styled from "@emotion/styled/macro";

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Render = () => {
  return (
    <Router>
      <Header />
      <Center>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
      </Center>
      <Footer />
    </Router>
  );
};

export default Render;
