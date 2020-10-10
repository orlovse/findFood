import React from "react";
import { Link } from "react-router-dom";
import { Card, 
         CardActionArea, 
         CardContent,
         CardMedia,
         Typography,
         makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  img: {
    transition: "2s",
    "&:hover": {
        transform:"scale(1.1, 1.1)"
    },
  },

  imgWrapper: {
    overflow: "hidden",
  }
}))

export const RestaurantCard = ({ restaurant }) => {
    const { address, name, id } = restaurant;
    const classes = useStyles();
    return (
      <Card elevation={3}>
        <CardActionArea>
          <Link to={`/restaurants/${id}`}>
            <div className={classes.imgWrapper}>
              <CardMedia
                component="img"
                alt={name}
                height="140"
                image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
                title={name}
                className={classes.img}
              />
            </div>
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { address.street }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>        
    );
};