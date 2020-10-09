import React from "react";
import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    container: {
        marginTop: "50px",
        width: "100vw",
        height: "150px",
        backgroundColor: "#ededed",
    }
}));

export const Bottom = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            test
        </div>
    );
};