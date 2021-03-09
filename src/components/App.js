import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Slideshow } from "./Slideshow";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/slideshow">
            <Slideshow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
