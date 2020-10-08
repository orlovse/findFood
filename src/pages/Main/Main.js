import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadRestaurants } from "../../redux/restaurants/action";
import { NewsCard, RestaurantCard } from "../../components";

import { Grid } from "@material-ui/core";


const Main = ({loadRestaurants, restaurants}) => {
    useEffect(() => {
        loadRestaurants();
    }, []);
    
    console.log("restaurants",restaurants)
    const r = restaurants
        ? restaurants.map(restaurant => 
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                <RestaurantCard restaurant={restaurant}>
                    {restaurant.name}
                </RestaurantCard>
            </Grid>
        )
        : <div>loading...</div>


    return (
        <div>
            Main
            <NewsCard />
            <Grid container spacing={3}>
                {r}
            </Grid>

        </div>
    );
};

const mapStateToProps = (state) => ({
    restaurants: state.restaurants
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({ loadRestaurants }, dispatch)
//     }
// };

export default connect(mapStateToProps ,{loadRestaurants})(Main);