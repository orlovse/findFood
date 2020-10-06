import { ADD_MENU_ITEM, REMOVE_MENU_ITEM, DELETE_MENU_ITEM } from "./types";

export const addMenuItem = (id) => ({
    type: ADD_MENU_ITEM,
    payload: { id }
});

export const removeMenuItem = (id) => ({
    type: REMOVE_MENU_ITEM,
    payload: { id }
});

export const deleteMenuItem = (id) => ({
    type: DELETE_MENU_ITEM,
    payload: { id }
});