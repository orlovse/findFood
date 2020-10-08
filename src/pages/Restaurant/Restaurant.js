import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";

import { BasketProducts ,MenuItem } from "../../components";
import { loadRestaurant } from "../../redux/restaurant/action"
import { loadMenu } from "../../redux/menu/action";

const Restaurant = ({restaurant, menu, loadRestaurant, loadMenu}) => {
    const { id } = useParams();
    useEffect(() => {
        loadRestaurant(id);
    }, [])

    useEffect(() => {
        loadMenu(id)
    }, [])


    let name = "";
    let restaurant_phone = "";
    if(restaurant) {
        name = restaurant.name;
        restaurant_phone = restaurant.restaurant_phone;
    } else {
        return <div>loading...</div>
    }


    if(menu){
        console.log("menu", menu)
    }


    return (
        <>
            <h1>{name} </h1>

        <Grid container spacing={5}>
            <Grid item md={3}>
                <BasketProducts />
            </Grid>
            <Grid item md={6}>
                {menu.map((menuItem, i) => <MenuItem menuItem={menuItem} restaurantId={restaurant.id} key={i} /> )}
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
        restaurant: state.restaurant,
        menu: state.menu
}); 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({ fetchRestaurantAsync , fetchMenuAsync}, dispatch)
//     }
// };

export default connect(mapStateToProps, {loadRestaurant, loadMenu })(Restaurant)

