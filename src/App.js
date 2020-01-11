import React from "react";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Match from "./Match";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/match" component={Match}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
