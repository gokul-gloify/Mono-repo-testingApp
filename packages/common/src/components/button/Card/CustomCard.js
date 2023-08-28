import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CardImage1 from "../../../assets/Varunastra-card.png";
import CardImage2 from "../../../assets/Vayavastra-card.png";
import CardImage3 from "../../../assets/Vishoshanastra-card.png";


export default function CustomCard({ name, img }) {

    const renderImg = (cardImg) => {
        if(cardImg === "card1") {
            return CardImage1
        }
        else if(cardImg === "card2") {
            return CardImage2
        }
        else if(cardImg === "card3") {
            return CardImage3
        }
    }
  return (
    <Card sx={{ maxWidth: 345, margin: "auto auto 20px auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={renderImg(img)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}