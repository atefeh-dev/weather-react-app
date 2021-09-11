/** @format */
import React, { StrictMode } from "react";
import reactDom from "react-dom";

import App from "./App";

reactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
