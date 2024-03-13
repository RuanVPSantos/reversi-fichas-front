import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./home"; // Importe seus componentes de tela
import Demografia from "./demografia";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Demografia} path="/demografia" exact />
    </BrowserRouter>
  );
};

export default Routes;
