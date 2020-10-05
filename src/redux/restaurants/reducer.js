import { List } from "immutable";
import { FILL_RESTAURANTS } from "./types";

const initState = List();

export const restaurantsReducer = (state = initState, action) => {
    switch(action.type) {
        case FILL_RESTAURANTS:
            return List(action.payload.data);
        default:
            return state;
    }
}