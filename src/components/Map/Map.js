import React from "react";
import GoogleMapReact from 'google-map-react';
import { LocationPin } from "./LocationPin";

import { Skeleton } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core";

const classStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "30vh", 
};

const useStyles = makeStyles(() => ({
  map: {
    position: "absolute",
    left: 0,
    top: 64,
    width: "100%",
    height: "38vh", 
  },
  container: {
    position: "relative",
    width: "100%",
    height: "38vh", 
  },
}));

export const Map = ({location, address, zoom = 17}) => {
  
    const classes = useStyles();
    if(!location || !address) return <Skeleton variant="rect" className={classes.map} />

    return (
      <>
        <div className={classes.map}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_APIKEY }}
            defaultCenter={{lat: location.latitude, lng: location.longitude}}
            defaultZoom={zoom}
          >
            <LocationPin
              lat={location.latitude}
              lng={location.longitude}
              text={address.street}
            />
          </GoogleMapReact>
        </div>
        <div className={classes.container}></div>
      </>
    );
};