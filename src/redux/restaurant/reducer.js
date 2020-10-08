import { LOAD_RESTAURANT } from "./constants";

export const restaurantReducer = (state = {}, action) => {
    const { payload, type, response} = action;
    switch(type) {
        case LOAD_RESTAURANT:
            return response;
        default: 
            return state;
    };
};