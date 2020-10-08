import { LOAD_MENU } from "../constants";

export const loadMenu = (id) => ({
    type: LOAD_MENU,
    CallAPI: "/menu/" + id
});
