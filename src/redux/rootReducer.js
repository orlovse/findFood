import { combineReducers } from "redux";
import { menuReducer as menu } from "./menu/reducer";
import {orderReducer as order} from "./order/reducer";
import { restaurantsReducer as restaurants } from "./restaurants/reducer";
import { restaurantReducer as restaurant} from "./restaurant/reducer";

export default combineReducers({menu, order, restaurants, restaurant});