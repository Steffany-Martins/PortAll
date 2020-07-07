import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import App from "./pages/App";
import Cadastro from "./pages/Cadastro";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Cadastro} path="/Cadastro" />
    </BrowserRouter>
  );
};

export default Routes;
