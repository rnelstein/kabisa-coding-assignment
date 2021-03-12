import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";
import { Home } from "./Home";
import { LikedQuotes } from "./LikedQuotes";
import { NavBar } from "./NavBar";
import { Slideshow } from "./Slideshow";
import "./App.css";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/slideshow">
              <Slideshow />
            </Route>
            <Route exact path="/likedquotes">
              <LikedQuotes />
            </Route>
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  );
}
