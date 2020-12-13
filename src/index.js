import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./ui/index.css";
import Menu from "./ui/Menu";
import Footer from "./ui/Footer";
import App from "./ui/App";
import Icons from "./ui/icons";
import Iconlist from "./ui/iconlist";
import Start from "./ui/start";
import About from "./ui/about";
import reportWebVitals from "./reportWebVitals";

window.React = React;

ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <Menu />
              <App />
              <Footer />
            </div>
          )}
        />
        <Route
          path="/start"
          component={() => (
            <div>
              <Menu />
              <Start />
              <Footer />
            </div>
          )}
        />
        <Route
          path="/icons"
          component={() => (
            <div>
              <Menu />
              <Icons />
              <Iconlist />
              <Footer />
            </div>
          )}
        />
        <Route
          path="/about"
          component={() => (
            <div>
              <Menu />
              <About />
              <Footer />
            </div>
          )}
        />
        <Route
          path="/list"
          component={() => (
            <div>
              <Iconlist />
            </div>
          )}
        />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
