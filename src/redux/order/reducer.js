import { ADD_MENU_ITEM, REMOVE_MENU_ITEM, DELETE_MENU_ITEM } from "./types";

const initState = {};

export const orderReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_MENU_ITEM:
            return { 
                ...state, 
                [payload.id]: (state[payload.id] || 0 ) + 1
            };
        case REMOVE_MENU_ITEM:
            return { 
                ...state, 
                [payload.id]: Math.max((state[payload.id] || 0 ) - 1, 0 )
            };
        case DELETE_MENU_ITEM:
            return {
                ...state,
                [payload.id]: 0
            }
        default: 
            return state;
    }
}