import React, { useEffect } from "react";
import { NewsCard } from "../../components";
import { connect } from "react-redux";
import { fetchRestaurantsAsync } from "../../redux/restaurants/action";
import { bindActionCreators } from "redux";

const Main = ({actions, restaurants}) => {
    useEffect(() => {
        console.log("useEff");
        actions.fetchRestaurantsAsync();
    }, [actions]);
    return (
        <div>
            Main
            <NewsCard />
            {restaurants.map(item => <div key={item.restaurant_id}>{item.restaurant_name}</div>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ fetchRestaurantsAsync }, dispatch)
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Main);