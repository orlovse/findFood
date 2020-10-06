
export const orderSelector = state => {
    const allProducts = state.restaurants.flatMap(
        restaurant => restaurant.menu
    );
    
    return Object.keys(state.order)
        .filter(productId => state.order[productId] > 0)
        .map(productId => allProducts.find(product => +product.id === +productId))
        .map(product => ({
            product,
            amount: state.order[product.id],
            subtotal: state.order[product.id] * (+product.price)
        }));
};

export const totalSelector = state => orderSelector(state).reduce((acc, { subtotal }) => acc + subtotal, 0);

