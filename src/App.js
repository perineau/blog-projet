import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";

const render = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/article/:id" component={Article} />
      <Footer />
    </Router>
  );
};

export default render;
