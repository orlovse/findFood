import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchRestaurantsAsync } from "../../redux/restaurants/action";
import { NewsCard, RestaurantCard } from "../../components";

import { Grid } from "@material-ui/core";


const Main = ({actions, restaurants}) => {
    useEffect(() => {
        actions.fetchRestaurantsAsync();
    }, [actions]);

    console.log("restaurants",restaurants)
    return (
        <div>
            Main
            <NewsCard />
            <Grid container spacing={3}>
                {restaurants.map(restaurant => 
                    <Grid item xs={12} sm={6} md={4} key={restaurant.restaurant_id}>
                        <RestaurantCard restaurant={restaurant}>
                            {restaurant.restaurant_name}
                        </RestaurantCard>
                    </Grid>
                )}
            </Grid>

        </div>
    );
};

const mapStateToProps = (state) => ({
    restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ fetchRestaurantsAsync }, dispatch)
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Main);