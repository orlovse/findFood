import { FILL_RESTAURANT } from "./types";
import { api } from "../REST/api";

export const fillRestaurant = (restaurant) => {
    return {
        type: FILL_RESTAURANT,
        payload: restaurant
    };
};

export const fetchRestaurantAsync = (id) => async (dispatch) => {
    // const response = await api.restaurant.fetch(id);
    // const {result} = await response.json();
    // console.log("result", result)

    const result =  api.restaurant.fetch(id);
    dispatch(fillRestaurant(result));
};