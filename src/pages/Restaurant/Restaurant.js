import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { loadRestaurant } from "../../redux/restaurant/action"
import { loadMenu } from "../../redux/menu/action";
import { menuSelector, menuLoadingSelector, menuLoadedSelector } from "../../redux/menu/selectors";
import { restaurantSelector, restaurantLoadingSelector, restaurantLoadedSelector } from "../../redux/restaurant/selectors";

import { BasketProducts ,MenuItem } from "../../components";

const Restaurant = ({restaurant, menu, loadRestaurant, loadMenu, restaurantLoading, menuLoading, restaurantLoaded, menuLoaded}) => {
    const { id } = useParams();

    useEffect(() => {
        if(!restaurantLoading && !restaurantLoaded) loadRestaurant(id);
    }, []);

    useEffect(() => {
        if(!menuLoading && !menuLoaded) loadMenu(id)
    }, []);

    const restaurantElem = restaurantLoading || !restaurantLoaded
        ? <div>Restaurant loading...</div>
        : (
            <>
            <h2>Address</h2>
                <p>{restaurant.address}</p>
                <h2>Time working</h2>
                <p>12-24</p>
                <p>Restaurant {restaurant.name} </p>
            </>
        );

    const menuElem = menuLoading || !menuLoaded
        ? <div>Menu loading...</div>
        : menu.map((menuItem, i) => <MenuItem menuItem={menuItem} restaurantId={restaurant.id} key={i} /> )

    return (
        <>
            <Grid container spacing={5}>
                <Grid item md={3}>
                    <BasketProducts />
                </Grid>
                <Grid item md={6}>
                    {menuElem}
                </Grid>
                <Grid item md={3}>
                    {restaurantElem}
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

