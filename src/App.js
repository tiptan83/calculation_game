import React from "react";
import Header from "./Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Layout} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
