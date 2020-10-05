import { combineReducers } from "redux";
import { restaurantsReducer as restaurants } from "./restaurants/reducer";

export default combineReducers({restaurants});