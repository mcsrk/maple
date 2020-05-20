import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Theme from "./misc/AppTheme";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <ThemeProvider theme={Theme}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    </div>
  );
};

export default App;
