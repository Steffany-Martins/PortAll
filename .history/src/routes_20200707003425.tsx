import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
