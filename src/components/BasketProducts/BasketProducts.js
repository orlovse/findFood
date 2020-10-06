import React from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { addMenuItem, removeMenuItem, deleteMenuItem } from "../../redux/order/actions";


const BasketProducts = ({ addMenuItem, removeMenuItem, deleteMenuItem, total, orderProducts}) => {
    console.log("orderProducts", orderProducts)
    const items = orderProducts
        ? orderProducts.map(item => (
            <div key={item.product.id}> 
                {item.product.name} - {item.amount} - {item.subtotal}
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => addMenuItem(item.product.id)}>
                    <ControlPointOutlinedIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => removeMenuItem(item.product.id)}>
                    <RemoveCircleOutlineIcon />
                </IconButton>    
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => deleteMenuItem(item.product.id)}>
                    <HighlightOffIcon />
                </IconButton>              
            </div>
          ))
        : null

    return (
        <div>
            Basket
            {items}
            total: {total} $
        </div>
    );
};

const mapStateToProps = (state) => {
    const allProducts = state.restaurants.flatMap(
        restaurant => restaurant.menu
    );

    const orderProducts = Object.keys(state.order)
        .filter(productId => state.order[productId] > 0)
        .map(productId => {
            console.log("productId", productId)
            return allProducts.find(product => +product.id === +productId)
            

        })
        .map(product => {
            console.log("product", product)
            return {
                product,
                amount: state.order[product.id],
                subtotal: state.order[product.id] * (+product.price)
            }

        });
    const total = orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0);
    return {
        total,
        orderProducts
    };

};

const mapDispatchToProps = ({
    addMenuItem, 
    removeMenuItem,
    deleteMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketProducts);