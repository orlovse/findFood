import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import { loadRestaurants } from "../../redux/restaurants/action";
import { restaurantsSelector, restaurantsLoadingSelector } from "../../redux/restaurants/selectors";
import { NewsCard, RestaurantCard } from "../../components";




const Main = ({loadRestaurants, restaurants, loading}) => {
    useEffect(() => {
        loadRestaurants();
    }, []);
    
    if(loading) return <div>Loading...</div>
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
    restaurants: restaurantsSelector(state),
    loading: restaurantsLoadingSelector(state)
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators({ loadRestaurants }, dispatch)
//     }
// };

export default connect(mapStateToProps ,{loadRestaurants})(Main);