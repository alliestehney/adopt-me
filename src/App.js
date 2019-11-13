import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "babel-polyfill";
import Navbar from "./Navbar";
import ThemeContext from "./ThemeContext";

// will not load until details is rendered for the first time
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

// fallback in suspense is used to show something if the details
// component isn't ready yet

// for codesplitting --> at least 30kb+

const App = () => {
  const themeHook = useState("darkblue"); // grab whole array
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Navbar />
          </header>
          <Suspense fallback={<h1>Loading Route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root")); // tell it WHAT to render, WHERE to render
