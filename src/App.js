import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Maggie",
      animal: "Dog",
      breed: "Wheaton Terrior"
    }),
    React.createElement(Pet, {
      name: "Spot",
      animal: "Dog",
      breed: "Golden Retriever"
    }),
    React.createElement(Pet, {
      name: "Stacy",
      animal: "Cat",
      breed: "IDK?"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root")); // tell it WHAT to render, WHERE to render
