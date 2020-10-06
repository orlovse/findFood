// import { fromJS } from "immutable";
import { FILL_RESTAURANT } from "./types";

// const initState = fromJS({});

export const restaurantReducer = (state = {}, action) => {
    switch(action.type) {
        case FILL_RESTAURANT:
            return {
                ...state, 
                restaurant: action.payload
            }

        default: 
            return state;
    };
};