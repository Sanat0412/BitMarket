import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context";
import "react-alice-carousel/lib/alice-carousel.css";
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
