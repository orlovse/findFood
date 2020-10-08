import { LOAD_RESTAURANT, REQUEST, SUCCESS, FAILURE } from "../constants";

const initState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
};

export const restaurantReducer = (state = initState, action) => {
    const { type, response, error} = action;
    switch(type) {
        case LOAD_RESTAURANT + REQUEST:
            return {
                ...state, 
                loading: true,
                error: null
            };
        case LOAD_RESTAURANT + SUCCESS:
            return {
                ...state, 
                entities: response,
                loading: false,
                loaded: true
            };
        case LOAD_RESTAURANT + FAILURE:
            return {
                ...state, 
                loading: false,
                loaded: false,
                error
            };
        default: 
            return state;
    };
};