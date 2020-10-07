import {FILL_MENU, FETCH_MENU_ASYNC} from "./types";
import { api } from "../REST/api";

export const fillMenu = (menu) => {
    return {
        type: FILL_MENU,
        payload: menu
    };
};

export const fetchMenuAsync = (id) => async (dispatch) => {
    const result = api.menu.fetch();
    dispatch(fillMenu(result))
};