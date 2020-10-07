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
    const { address, name, id } = restaurant;
    return (
      <Card elevation={3}>
        <CardActionArea>
          <Link to={`/restaurants/${id}`}>
            <CardMedia
              component="img"
              alt={name}
              height="140"
              image="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
              title={name}
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                { address.formatted }
            </Typography>
          </CardContent>

        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant="outlined">
            Share
          </Button>
          <Button size="small" color="primary" variant="outlined">
            Learn More
          </Button>
        </CardActions>
      </Card>        
    );
}