import { LOAD_RESTAURANT } from "./constants";

export const loadRestaurant = (id) => ({
    type: LOAD_RESTAURANT,
    CallAPI: "/restaurant/" + id

});