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

const MenuItem = ({menuItem, amount, addMenuItem, removeMenuItem}) => {

    return (
        <Card key={menuItem.id} style={{margin: "20px"}}>
            <Grid container>
                <Grid item xs={8}>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {menuItem.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {menuItem.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            <Grid container justify="space-between" alignItems="center">                              
                                <Grid item>
                                    {menuItem.price} $
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => addMenuItem(menuItem.id)}>
                                        <ControlPointOutlinedIcon />
                                    </IconButton>
                                    {amount} 
                                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => removeMenuItem(menuItem.id)}>
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>

                        </Typography>


                    </CardContent>
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

const mapStateToProps = (state, ownProps) => ({
        amount: state.order[ownProps.menuItem.id] || 0
});

const mapDispatchToProps = ({
    addMenuItem,
    removeMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);