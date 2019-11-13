import React from "react";
import { hydrate } from "react-dom";

import App from "./App";

// any other browser only things

hydrate(<App />, document.getElementById("root"));

// hydrate does NOT re-render; take the mark up that is already there
