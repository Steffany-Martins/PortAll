import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import App from "./pages/App";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={App} path="/Pages" />
    </BrowserRouter>
  );
};

export default Routes;
