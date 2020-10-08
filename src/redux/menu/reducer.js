import { LOAD_MENU } from "./constants";

export const menuReducer = (state = [], action) => {
    const {type, response} = action;
    switch(type) {
        case LOAD_MENU:
            return response;
        default:
            return state;
    }
};