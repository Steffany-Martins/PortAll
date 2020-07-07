import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Cadastro from "./pages/Cadastro";
import SalaDeAula from "./pages/SalaDeAula";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Welcome} path="/" exact />
      <Route component={Cadastro} path="/Cadastro" />
      <Route component={SalaDeAula} path="/SalaDeAula" />
    </BrowserRouter>
  );
};

export default Routes;
