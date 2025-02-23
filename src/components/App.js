import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./../styles/App.css";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  return (
    <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
};

export default App;
