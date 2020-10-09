import React from "react";
import {
    AppBar, 
    Button, 
    Toolbar, 
    IconButton, 
    Typography, 
    makeStyles 
  } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="white">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          FindFood
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AccountCircleIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};