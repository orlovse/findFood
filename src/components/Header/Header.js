import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar, 
    Button, 
    Container,
    Toolbar, 
    IconButton, 
    Typography, 
    makeStyles 
  } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  app: {
    marging: 0,
    padding: 0
  },
  header: {
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.header}>
      <Container>
        <Toolbar className={classes.app}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              FindFood
            </Link>
          </Typography>
          <IconButton edge="start" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          <Button>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};