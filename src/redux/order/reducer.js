import { ADD_MENU_ITEM, REMOVE_MENU_ITEM, DELETE_MENU_ITEM } from "./types";

const initState = {};

export const orderReducer = (state = initState, action) => {
    const { type, payload } = action;

    let amount = 0;
    if(payload){
        amount = state[payload.restaurantId]
        ? state[payload.restaurantId][payload.menuOrder] 
            ? state[payload.restaurantId][payload.menuOrder] 
            : 0
        : 0
    }

    switch(type) {
        case ADD_MENU_ITEM:

            return { 
                ...state, 
                [payload.restaurantId]: {
                    ...state[payload.restaurantId],
                    [payload.menuOrder]: amount + 1
                }
            };
        case REMOVE_MENU_ITEM:
            return { 
                ...state, 
                [payload.restaurantId]: {
                    ...state[payload.restaurantId],
                    [payload.menuOrder]: Math.max(amount - 1, 0 )
                }
            };
        case DELETE_MENU_ITEM:
            return {
                ...state,
                [payload.restaurantId]: {
                    ...state[payload.restaurantId],
                    [payload.menuOrder]: 0
                }
            }
        default: 
            return state;
    }
}