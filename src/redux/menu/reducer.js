import { FILL_MENU } from "./types";

export const menuReducer = (state = [], action) => {
    switch(action.type) {
        case FILL_MENU:
            return action.payload;
        default:
            return state;
    }
};