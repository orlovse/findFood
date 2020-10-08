import { LOAD_RESTAURANTS, SUCCESS, REQUEST, FAILURE } from "../constants";

const initState = {
    entities: [],
    loading: false,
    loaded: false,
    error: null,
};

export const restaurantsReducer = (state = initState, action) => {
    const { type, response, error } = action;

    switch(type) {
        case LOAD_RESTAURANTS + REQUEST:
            return {
                ...state, 
                loading: true,
                error: null
            };
        case LOAD_RESTAURANTS + SUCCESS:
            return {
                ...state, 
                entities: response,
                loading: false,
                loaded: true
            };
        case LOAD_RESTAURANTS + FAILURE:
            return {
                ...state, 
                loading: false,
                loaded: false,
                error
            };
        default:
            return state;
    }
}