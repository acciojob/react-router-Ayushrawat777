import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <Router>
      <ul>
      <li> <NavLink to="/">Home</NavLink></li> 
      <li> <NavLink to="/about">About</NavLink></li> 
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
};

export default App;
