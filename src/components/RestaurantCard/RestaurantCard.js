import React from "react";
import { Link } from "react-router-dom";
import { Button,
         Card, 
         CardActionArea, 
         CardActions,
         CardContent,
         CardMedia,
         Typography
} from "@material-ui/core"

export const RestaurantCard = ({ restaurant }) => {
    const { address, restaurant_name, restaurant_id } = restaurant;
    return (
      <Card elevation={3}>
        <CardActionArea>
          <Link to={`/restaurants/${restaurant_id}`}>
            <CardMedia
              component="img"
              alt={restaurant_name}
              height="140"
              image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
              title={restaurant_name}
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {restaurant_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                { address.formatted }
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary" variant="outlined">
            Share
          </Button>
          <Button size="small" color="primary" variant="outlined">
            Learn More
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>        
    );
}