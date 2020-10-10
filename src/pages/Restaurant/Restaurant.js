import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import { loadRestaurant } from "../../redux/restaurant/action"
import { loadMenu } from "../../redux/menu/action";
import { menuSelector, menuLoadingSelector, menuLoadedSelector } from "../../redux/menu/selectors";
import { restaurantSelector, restaurantLoadingSelector, restaurantLoadedSelector } from "../../redux/restaurant/selectors";

import { BasketProducts, Map ,MenuItem } from "../../components";

const Restaurant = ({
        loadRestaurant, 
        loadMenu, 
        restaurantLoading, 
        menuLoading, 
        restaurantLoaded, 
        menuLoaded,
        restaurant, 
        menu
    }) => {

    const { id } = useParams();

    useEffect(() => {
        if(!restaurantLoading && !restaurantLoaded) loadRestaurant(id); // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(!menuLoading && !menuLoaded) loadMenu(id) // eslint-disable-next-line
    }, []);

    // restaurantLoading = true;
    const restaurantElem = restaurantLoading || !restaurantLoaded
        ? (
            <>
                <Typography component="div" variant={"h2"}>
                    <Skeleton />
                </Typography>
                <Skeleton />
                <Typography component="div" variant={"h2"}>
                    <Skeleton />
                </Typography>
                <Skeleton />
                <Skeleton />
            </>
        ): (
            <>
                <h2>Address</h2>
                <p>{restaurant.address.street}</p>
                <h2>Time working</h2>
                <p>12-24</p>
                <p>Restaurant {restaurant.name} </p>
            </>
        );

    // menuLoading = true;
    const menuElem = menuLoading || !menuLoaded
        ? [1,2,3,4].map(skeletonItem => (
                    <Card key={skeletonItem} style={{margin: "20px"}}>
                        <Grid container>
                            <Grid item xs={8}>
                                <CardContent>
                                    <Typography component="h5" variant="h5">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        <Skeleton />
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={4}>
                                <Skeleton variant="rect" height={"100%"} />
                            </Grid>
                        </Grid>
                    </Card>                  
                ))
        : menu.map((menuItem, i) => <MenuItem menuItem={menuItem} restaurantId={restaurant.id} key={i} /> )

        console.log("restaurant.address", restaurant, restaurant.address, restaurant.geo)
    return (
        <>
            <Map location={restaurant.geo} address={restaurant.address}/>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} lg={3} style={{textAlign: "center"}}>
                    {restaurantElem}
                </Grid>
                <Grid item xs={12} sm={7} lg={6} style={{textAlign: "center"}}>
                    {menuElem}
                </Grid>
                <Grid item xs={12} sm={5} lg={3} style={{textAlign: "center"}}>
                    <BasketProducts />
                </Grid>
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => ({
        restaurant: restaurantSelector(state),
        restaurantLoading: restaurantLoadingSelector(state),
        restaurantLoaded: restaurantLoadedSelector(state),
        menu: menuSelector(state),
        menuLoading: menuLoadingSelector(state),
        menuLoaded: menuLoadedSelector(state)
}); 

export default connect(mapStateToProps, {loadRestaurant, loadMenu })(Restaurant)

