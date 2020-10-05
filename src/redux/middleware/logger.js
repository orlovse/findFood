import {createLogger} from "redux-logger";

export const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => "blue",
        error: () => "red"
    }
});