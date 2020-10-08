import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import api from "./api";

export const enhancedStore = composeWithDevTools(applyMiddleware(thunk, api));