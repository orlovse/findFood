import { ADD_MENU_ITEM, REMOVE_MENU_ITEM, DELETE_MENU_ITEM } from "../constants";

export const addMenuItem = (restaurantId, menuOrder) => ({
    type: ADD_MENU_ITEM,
    payload: { restaurantId,  menuOrder }
});

export const removeMenuItem = (restaurantId, menuOrder) => ({
    type: REMOVE_MENU_ITEM,
    payload: { restaurantId,  menuOrder }
});

export const deleteMenuItem = (restaurantId, menuOrder) => ({
    type: DELETE_MENU_ITEM,
    payload: { restaurantId,  menuOrder }
});