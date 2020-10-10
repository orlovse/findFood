import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container, makeStyles } from "@material-ui/core";

import { Checkout, Main, Restaurant } from "../../pages";
import { Header } from "../Header";
import { Bottom } from "../Bottom";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "100px",
  }
}));

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/restaurants/:id" component={Restaurant} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Container>
      <Bottom />
    </>
  );
}