import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { logger } from "./logger";

const __DEV__ = true;

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleware = [thunk];

if(__DEV__) {
  middleware.push(logger);
}

const composeEnhancers = __DEV__ && devtools ? devtools : compose;

export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));