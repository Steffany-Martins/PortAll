import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Welcome from "./components/Welcome";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
