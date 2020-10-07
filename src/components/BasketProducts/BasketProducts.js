import React from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { addMenuItem, removeMenuItem, deleteMenuItem } from "../../redux/order/actions";
import { totalSelector, orderSelector } from "../../redux/order/selectors";

const BasketProducts = ({ addMenuItem, removeMenuItem, deleteMenuItem, orderProducts, total=10}) => {
    const items = orderProducts
        ? orderProducts.map(item => (
            <div key={item.product.menu_order}> 
                {item.product.name} - {item.amount} - {item.subtotal}
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => addMenuItem(item.restaurantId, item.product.menu_order)}>
                    <ControlPointOutlinedIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => removeMenuItem(item.restaurantId, item.product.menu_order)}>
                    <RemoveCircleOutlineIcon />
                </IconButton>    
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => deleteMenuItem(item.restaurantId, item.product.menu_order)}>
                    <HighlightOffIcon />
                </IconButton>              
            </div>
          ))
        : (
            <div>
                !Basket empty!
            </div>
        )
    
    const basket = total
        ? (
            <div>
                {items}
                total: {total} $
            </div>
        )
        :  (<div>!Basket empty!</div>);

    return (
        <div>
            Basket
            {basket}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        total: totalSelector(state),
        orderProducts: orderSelector(state)
    };
};

const mapDispatchToProps = ({
    addMenuItem, 
    removeMenuItem,
    deleteMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketProducts);