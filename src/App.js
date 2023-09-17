import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./i18n";
import Home from "./components/Home";
import About from "./components/About";
import LanguageSwitcher from "./components/LanguageSwitcher";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <LanguageSwitcher />
        <nav>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
