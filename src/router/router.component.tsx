import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { switchRoutes } from "./routes";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";

export const RouterComponent: React.FC = () => {
  const { root, home, login } = switchRoutes;

  return (
    <Router>
      <Switch>
        <Route exact={true} path={root} component={HomeComponent} />
        <Route exact={true} path={home} component={HomeComponent} />
        <Route exact={true} path={login} component={LoginComponent} />
      </Switch>
    </Router>
  );
};
