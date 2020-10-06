import { createSelector } from "reselect";
const restaurantsSelector = state => state.restaurants;
const ordersSelector = state => state.order;

export const orderSelector = createSelector(restaurantsSelector, ordersSelector, (restaurants, order) => {
    const allProducts = restaurants.flatMap(
        restaurant => restaurant.menu
    );
    return Object.keys(order)
        .filter(productId => order[productId] > 0)
        .map(productId => allProducts.find(product => +product.id === +productId))
        .map(product => ({
            product,
            amount: order[product.id],
            subtotal: order[product.id] * (+product.price)
        }));
});

export const totalSelector = createSelector(orderSelector, (order) => {
    return order.reduce((acc, { subtotal }) => acc + subtotal, 0);
});


