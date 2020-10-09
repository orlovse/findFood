import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Grid, makeStyles } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { loadRestaurants } from "../../redux/restaurants/action";
import { restaurantsSelector, restaurantsLoadingSelector, restaurantsLoadedSelector } from "../../redux/restaurants/selectors";
import { NewsCard, RestaurantCard } from "../../components";

const useStyles = makeStyles(() => ({
    restaurants: {
        margin: 0,
        width: "100%",
        marginTop: "50px",
    }
}));

const Main = ({
        loadRestaurants, 
        restaurants, 
        restaurantsLoading, 
        restaurantsLoaded
    }) => {

    const classes = useStyles();

    useEffect(() => {
       if(!restaurantsLoading && !restaurantsLoaded) loadRestaurants(); // eslint-disable-next-line
    }, []); 

    // restaurantsLoading = true;
    const restaurantsElement = !restaurantsLoading || restaurantsLoaded
        ? (
            <Grid container spacing={3}>
                {restaurants.map(restaurant => 
                    <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                        <RestaurantCard restaurant={restaurant}>
                            {restaurant.name}
                        </RestaurantCard>
                    </Grid>
                )}
            </Grid>
        ) : (
            <Grid container spacing={3}>
                {[1,2,3,4,5,6].map(skeletonItem => (
                    <Grid item xs={12} sm={6} md={4} key={skeletonItem}>
                        <Skeleton variant="rect" height={140} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Grid>
                ))}
            </Grid>        
        );

    return (
        <>
            <NewsCard />
            <Grid container spacing={3} className={classes.restaurants}>
                {restaurantsElement}
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => ({
    restaurants: restaurantsSelector(state),
    restaurantsLoading: restaurantsLoadingSelector(state),
    restaurantsLoaded: restaurantsLoadedSelector(state),
});

export default connect(mapStateToProps ,{loadRestaurants})(Main);