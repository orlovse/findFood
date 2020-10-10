import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button,
    Grid, 
    IconButton, 
    Paper, 
    makeStyles 
} from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { addMenuItem, removeMenuItem, deleteMenuItem } from "../../redux/order/actions";
import { totalSelector, orderSelector } from "../../redux/order/selectors";


const useStyles = makeStyles(() => ({
    paper: {
        padding: "40px",
        textAlign: "center",
        position: "fixed",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            position: "relative"
        }
    },
    paperCheckout: {
        padding: "40px",
        textAlign: "center",
    },
    bluColor: {
        color: "#3F51B5"
    },
    redColor: {
        color: "#e84d32"
    },
    buttonsPadding: {
        padding: 5
    }
}));

const BasketProducts = ({ addMenuItem, removeMenuItem, deleteMenuItem, orderProducts, total, checkout = false}) => {
    const classes = useStyles();

    const paperClass = checkout ? classes.paperCheckout : classes.paper;

    const basket = total
        ? (
            <div >
                {orderProducts.map((item, i) => (
                    <Grid container key={i} justify="space-between" alignItems="center" spacing={3}> 
                        <Grid item>
                            {item.product.name} * {item.amount} = <span className={classes.bluColor}>{item.subtotal} $</span> 
                        </Grid>
                        <Grid item>
                            <IconButton color="primary"  className={classes.buttonsPadding} onClick={() => removeMenuItem(item.restaurantId, item.product.menu_order)}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>    
                            <IconButton color="primary"  className={classes.buttonsPadding} onClick={() => addMenuItem(item.restaurantId, item.product.menu_order)}>
                                <ControlPointOutlinedIcon />
                            </IconButton>
                            <IconButton className={classes.redColor} onClick={() => deleteMenuItem(item.restaurantId, item.product.menu_order)}>
                                <HighlightOffIcon />
                            </IconButton>  
                        </Grid>
            
                    </Grid>
                ))}
                <h2>
                    total: <span className={classes.bluColor}>{total} $</span>
                </h2>
                <Link to="/checkout" style={{textDecoration : "none"}}>
                    <Button variant="contained" color="primary">
                        Buy
                    </Button>
                </Link>
            </div>
        )
        : <div>Select a meal</div>;

    return (
        <Paper elevation={3} className={paperClass}>
            <h2>User Basket</h2> 
            {basket}
        </Paper>
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