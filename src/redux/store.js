import { createStore } from "redux";
import reducer from "./rootReducer";
import { enhancedStore } from "./middleware/core";

export const store = createStore(reducer, enhancedStore);