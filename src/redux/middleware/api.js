import { SUCCESS, REQUEST, FAILURE } from "../constants";

const ROOT_URL = "https://us-restaurant-menus.p.rapidapi.com";
const HOST = process.env.REACT_APP_HOST_RAPID;
const KEY = process.env.REACT_APP_KEY_RAPID;

export default state => next => async action => {
    if(!action.CallAPI) return next(action);

    const {CallAPI, type, ...rest} = action;

    next({...rest, type: type + REQUEST});

    // try {
    //     const response = await fetch(ROOT_URL + CallAPI, {
    //         method: "GET",
    //         headers: {
    //             "x-rapidapi-host": HOST,
    //             "x-rapidapi-key": KEY
    //         }
    //     }).then(res => res.json());
    //     next({...rest, type: type + SUCCESS, response});
    // } catch (error) {
    //     next({...rest, type: type + FAILURE, error});
    // }


    let response = [];
    if(CallAPI === "/restaurants/search") {
        
        response = [
                {
                    id: 1, 
                    name: "Aaaa",
                    geo:{
                        longitude: "9.1973839",
                        latitude: "45.4816707"
                    },
                    address:{
                        street:"Via Vincenzo Viviani, 2",
                        postalCode:"20124",
                        locality:"Milan",
                        country:"Italy",
                    },
                    currenciesAccepted:"EUR",
                },
                {
                    id: 2, 
                    name: "Bbbb",
                    address: "2aaa",
                },
                {
                    id: 3, 
                    name: "Ccccc",
                    address: "3aaa",
                },
                {
                    id: 4, 
                    name: "Dddddd",
                    address: "4aaa",
                },
                {
                    id: 5, 
                    name: "Eeeee",
                    address: "5aaa",
                },
                {
                    id: 6, 
                    name: "Fffff",
                    address: "6aaa",
                },
            ]
    }

    if(CallAPI === "/restaurant/1"){
        response = {
            id: 1, 
            name: "Aaaa",
            geo:{
                longitude: 9.1973839,
                latitude: 45.4816707
            },
            address:{
                street:"Via Vincenzo Viviani, 2",
                postalCode:"20124",
                locality:"Milan",
                country:"Italy",
            },
            currenciesAccepted:"EUR",
        }
    }

    if(CallAPI === "/menu/1"){
        console.log("render test")
        response = [
            {
                menu_order: 111,
                name: "Pizza" ,
                description: "Pizza with chize and tomatos",
                price: "20",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 112,
                name: "Burger" ,
                description: "Pizza with chize and tomatos",
                price: "24",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 113,
                name: "Susi" ,
                description: "Pizza with chize and tomatos",
                price: "31",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 114,
                name: "Pasta" ,
                description: "Pizza with chize and tomatos",
                price: "18",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 115,
                name: "Pita" ,
                description: "Pizza with chize and tomatos",
                price: "16",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 116,
                name: "Chips" ,
                description: "Pizza with chize and tomatos",
                price: "10",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 117,
                name: "Shnitzel" ,
                description: "Pizza with chize and tomatos",
                price: "22",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            },
            {
                menu_order: 118,
                name: "Salad" ,
                description: "Pizza with chize and tomatos",
                price: "16",
                img: "https://timesofaddu.com/wp-content/uploads/2020/08/a.jpg"
            }
        ]
    }

    next({...rest, type: type + SUCCESS, response});
}