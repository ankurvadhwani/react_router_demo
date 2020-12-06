import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
