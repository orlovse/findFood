export const ROOT_URL = "https://us-restaurant-menus.p.rapidapi.com";
export const MAIN_URL = `${ROOT_URL}/restaurants/search`;

export const api = {
    posts: {
        fetch () {
            return fetch(MAIN_URL, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": process.env.HOST,
                    "x-rapidapi-key": process.env.KEY,
                    "useQueryString": true
                }
            })
        }
    }
}