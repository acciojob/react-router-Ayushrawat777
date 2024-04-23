import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
