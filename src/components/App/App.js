import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Restaurant } from "../../pages";
import { Container } from "@material-ui/core";

export const App = () => {
  return (
    <Container>
      App
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/restaurants/:id" component={Restaurant} />
      </Switch>
    </Container>
  );
}