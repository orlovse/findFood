export const ROOT_URL = "https://us-restaurant-menus.p.rapidapi.com";
export const MAIN_URL = `${ROOT_URL}/restaurants/search`;
const HOST = process.env.REACT_APP_HOST_RAPID;
const KEY = process.env.REACT_APP_KEY_RAPID;

export const api = {
    restaurants: {
        fetch () {
            return fetch(MAIN_URL, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": HOST,
                    "x-rapidapi-key": KEY,
                    "useQueryString": true
                }
            });
        }
    }
}