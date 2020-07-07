import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Welcome from "./components/Welcome";
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById("root")
);
