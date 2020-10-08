import { LOAD_MENU, REQUEST, SUCCESS, FAILURE } from "../constants";

const initState = {
    entities: [],
    loading: false,
    loaded: false,
    error: null
};

export const menuReducer = (state = initState, action) => {
    const { type, response, error } = action;
    switch(type) {
        case LOAD_MENU + REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOAD_MENU + SUCCESS:
            return {
                ...state,
                entities: response,
                loading: false,
                loaded: true
            };
        case LOAD_MENU + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            }
        default:
            return state;
    }
};