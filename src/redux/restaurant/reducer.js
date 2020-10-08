import { FILL_RESTAURANT } from "./types";


export const restaurantReducer = (state = {}, action) => {
    const { payload, type} = action;
    switch(type) {
        case FILL_RESTAURANT:
            return payload;

        default: 
            return state;
    };
};