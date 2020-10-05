import { FETCH_RESTAURANTS_ASYNC, FILL_RESTAURANTS } from "./types";
import { api } from "../REST/api";

export const fillRestaurants = (restaurants) => {
    return {
        type: FILL_RESTAURANTS,
        payload: restaurants
    };
};

export const fetchRestaurantsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_RESTAURANTS_ASYNC
    })
    const response = await api.restaurants.fetch();
    const { result }  = await response.json();

    dispatch(fillRestaurants(result));
};