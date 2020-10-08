import { FILL_RESTAURANTS } from "./types";

export const restaurantsReducer = (state = [], action) => {
    console.log("restaurants reducer", action.payload)
    switch(action.type) {
        case FILL_RESTAURANTS:
            return action.payload;
        default:
            return state;
    }
}