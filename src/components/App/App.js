import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";

import { Main, Restaurant } from "../../pages";
import { Header } from "../Header";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/restaurants/:id" component={Restaurant} />
        </Switch>
      </Container>
    </>
  );
}