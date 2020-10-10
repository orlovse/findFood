import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  icon: {
    color: "red",
    fontSize: "50px"
  },
}));

export const LocationPin = ({ text }) => {
  const classes = useStyles();
  return (
    <div>
      <RoomIcon className={classes.icon} />
      <h3>{text}</h3> 
    </div>
  );
}; 