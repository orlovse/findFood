import React from "react";
import { connect } from "react-redux";
import { orderSelector, totalSelector} from "../../redux/order/selectors";

import { BasketProducts } from "../../components";

const Checkout = ({total, orderProducts}) => {
    return (
        <BasketProducts checkout />
    );
};

const mapStateToProps = (state) => ({
    total: totalSelector(state),
    orderProducts: orderSelector(state)
})

export default connect(mapStateToProps)(Checkout)