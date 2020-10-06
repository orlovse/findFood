import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";

import { BasketProducts ,MenuItem } from "../../components";
import { fetchRestaurantAsync } from "../../redux/restaurant/action"

const Restaurant = ({restaurant, actions}) => {
    const { id } = useParams();
    useEffect(() => {
        console.log("useEff2");
        actions.fetchRestaurantAsync(id);
    }, [id, actions])


    let restaurant_name = "";
    let restaurant_phone = "";
    if(restaurant) {
        restaurant_name = restaurant.restaurant_name;
        restaurant_phone = restaurant.restaurant_phone;
    } else {
        return <div>loading...</div>
    }


    return (
        <>
            <h1>{restaurant_name} </h1>

        <Grid container spacing={5}>
            <Grid item md={3}>
                <BasketProducts />
            </Grid>
            <Grid item md={6}>
                {restaurant.menu.map((menuItem, i) => <MenuItem menuItem={menuItem} key={i} /> )}
            </Grid>
            <Grid item md={3}>
                <h2>Address</h2>
                <p>Tel aviv</p>
                <h2>Time working</h2>
                <p>12-24</p>
                <p>Restaurant {restaurant_phone} </p>
            </Grid>
        </Grid>


        </>
    );
};

const mapStateToProps = (state) => ({
        restaurant: state.restaurant.restaurant
}); 

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ fetchRestaurantAsync }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)

