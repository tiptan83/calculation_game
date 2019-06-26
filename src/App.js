import React from "react";
import Header from "./Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Game from "./Game";
import About from "./About";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Game} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
