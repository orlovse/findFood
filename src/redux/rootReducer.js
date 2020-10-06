import { combineReducers } from "redux";
import {orderReducer as order} from "./order/reducer";
import { restaurantsReducer as restaurants } from "./restaurants/reducer";
import { restaurantReducer as restaurant} from "./restaurant/reducer";

export default combineReducers({order, restaurants, restaurant});