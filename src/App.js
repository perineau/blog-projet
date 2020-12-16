import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";

const Render = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
      <Footer />
    </Router>
  );
};

export default Render;
