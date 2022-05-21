import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";







const App = () => {
  return (
    <><Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    </>
  );
};

export default App;
