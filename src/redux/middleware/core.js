import { applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

export const enhancedStore = composeWithDevTools(applyMiddleware(...middleware));