import React from "react";
import { connect } from "react-redux";
import { 
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Grid 
} from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';

import { addMenuItem, removeMenuItem } from "../../redux/order/actions";

const MenuItem = ({menuItem, amount, addMenuItem, removeMenuItem, restaurantId}) => {

    return (
        <Card key={menuItem.menu_order} style={{margin: "20px"}}>
            <Grid container>
                <Grid item xs={8}>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {menuItem.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {menuItem.description}
                        </Typography>
                    </CardContent>
                    <Typography variant="subtitle1" color="primary">
                            <Grid container justify="space-around" alignItems="center">                              
                                <Grid item>
                                    {menuItem.price} $
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => removeMenuItem(restaurantId, menuItem.menu_order)}>
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                    {amount} 
                                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => addMenuItem(restaurantId, menuItem.menu_order)}>
                                        <ControlPointOutlinedIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        image={menuItem.img}
                        title="Live from space album cover"
                        style={{height: "100%"}}
                    />
                </Grid>
            </Grid>
        </Card>  
    );
};

const mapStateToProps = (state, ownProps) => {
    const restaurantId = ownProps.restaurantId || null;
    const menu_order = ownProps.menuItem.menu_order || null;
    let order = 0;
    if(state.order && state.order[restaurantId] && state.order[restaurantId][menu_order]) {
        order = state.order[restaurantId][menu_order] || 0
    }

    return {
        amount: order
    }



};

const mapDispatchToProps = ({
    addMenuItem,
    removeMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);