import { LOAD_RESTAURANTS } from "./constants";

export const restaurantsReducer = (state = [], action) => {
    const { type, response } = action;

    switch(type) {
        case LOAD_RESTAURANTS:
            return response;
        default:
            return state;
    }
}