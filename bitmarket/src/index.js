import reactDom from "react-dom";
import React from "react";
import App from "./App";
import Context from "./Context";
reactDom.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
