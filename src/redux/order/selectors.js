import { createSelector } from "reselect";
import { menuSelector } from "../menu/selectors";

const ordersSelector = state => state.order;

export const orderSelector = createSelector(menuSelector, ordersSelector, (menu, order) => {
    return Object.keys(order).flatMap(restaurantId => {
        return Object.keys(order[restaurantId]).map(menuOrder => {
            const product = menu.find(item => +item.menu_order === +menuOrder)
            const price = product ? +product.price : 0
            return {
                restaurantId,
                product: product,
                amount: order[restaurantId][menuOrder],
                subtotal: order[restaurantId][menuOrder] * price
            }
        }).filter(item => item.amount > 0);
    })
});

export const totalSelector = createSelector(orderSelector, (order) => {
    return order.reduce((acc, { subtotal }) => acc + subtotal, 0);
});


