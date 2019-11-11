import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "babel-polyfill";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Navbar from "./Navbar";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue"); // grab whole array
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Navbar />
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root")); // tell it WHAT to render, WHERE to render
