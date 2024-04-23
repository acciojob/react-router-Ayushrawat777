import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
      <li> <NavLink to="/">Home</NavLink></li> 
      <li> <NavLink to="/about">About</NavLink></li> 
      </ul>

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
