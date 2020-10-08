import { LOAD_RESTAURANTS } from "../constants";

export const loadRestaurants = () => ({
    type: LOAD_RESTAURANTS,
    CallAPI: "/restaurants/search"
});
