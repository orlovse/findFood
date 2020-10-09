import React from "react";
import { Card, 
         CardActions,
         CardContent,
         CardMedia,
         IconButton,
         Grid,
         Typography
} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const NewsCard = () => {
    return (
      <Card elevation={3}>
        <Grid container>
          <Grid item sm={8}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height={400}
                image="https://discovery-cdn.wolt.com/s/yJ3qJ62mipTbsB_E7q2hvQ9evA1JATP5vhyGWduStiM/cities/tel-aviv/sections/140b8798-7118-11ea-ba09-0a58647f833a_WhatsApp%20Image%202020-03-28%20at%2014.17.18.jpeg"
                title="Contemplative Reptile"
              />
          </Grid>
          <Grid item sm={4}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>      
            <CardActions>
              <IconButton color="primary" aria-label="upload picture" component="span">
                <ArrowBackIcon />
              </IconButton> 
              <IconButton color="primary" aria-label="upload picture" component="span">
                <ArrowForwardIcon />
              </IconButton>  
            </CardActions>    
          </Grid>
        </Grid>




      </Card>        
    );
}