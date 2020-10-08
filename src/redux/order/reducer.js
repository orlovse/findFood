import produce from "immer";
import { ADD_MENU_ITEM, REMOVE_MENU_ITEM, DELETE_MENU_ITEM } from "./types";

export const orderReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch(type) {
        case ADD_MENU_ITEM:
            return produce(state, draft => {
                    if(!draft[payload.restaurantId]) {
                        draft[payload.restaurantId] = {};
                    }

                    if(!draft[payload.restaurantId][payload.menuOrder]) {
                        draft[payload.restaurantId][payload.menuOrder] = 0;
                    }
                    
                    draft[payload.restaurantId][payload.menuOrder] = draft[payload.restaurantId][payload.menuOrder] + 1;
            });
        case REMOVE_MENU_ITEM:
            return produce(state, draft => {
                    if(!draft[payload.restaurantId]) {
                        draft[payload.restaurantId] = {};
                    }

                    if(!draft[payload.restaurantId][payload.menuOrder]) {
                        draft[payload.restaurantId][payload.menuOrder] = 0;
                    }
                    
                    draft[payload.restaurantId][payload.menuOrder] = Math.max(draft[payload.restaurantId][payload.menuOrder] - 1, 0);
            });
        case DELETE_MENU_ITEM:
            return produce(state, draft => {
                if(!draft[payload.restaurantId]) {
                    draft[payload.restaurantId] = {};
                }

                if(!draft[payload.restaurantId][payload.menuOrder]) {
                    draft[payload.restaurantId][payload.menuOrder] = 0;
                }
                
                draft[payload.restaurantId][payload.menuOrder] = 0;
            });
        default: 
            return state;
    }
};