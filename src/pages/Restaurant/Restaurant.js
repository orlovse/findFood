import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { loadRestaurant } from "../../redux/restaurant/action"
import { loadMenu } from "../../redux/menu/action";
import { menuSelector, menuLoadingSelector } from "../../redux/menu/selectors";
import { restaurantSelector, restaurantLoadingSelector } from "../../redux/restaurant/selectors";

import { BasketProducts ,MenuItem } from "../../components";

const Restaurant = ({restaurant, menu, loadRestaurant, loadMenu, restaurantLoading, menuLoading}) => {
    const { id } = useParams();
    useEffect(() => {
        loadRestaurant(id);
    }, [])

    useEffect(() => {
        loadMenu(id)
    }, [])


    // let name = "";
    // let restaurant_phone = "";
    // if(restaurant) {
    //     name = restaurant.name;
    //     restaurant_phone = restaurant.restaurant_phone;
    // } else {
    //     return <div>loading...</div>
    // }

    const restaurantElem = restaurantLoading
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

    const menuElem = menuLoading
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
        menu: menuSelector(state),
        menuLoading: menuLoadingSelector(state)
}); 

export default connect(mapStateToProps, {loadRestaurant, loadMenu })(Restaurant)

