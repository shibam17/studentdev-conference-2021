import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import "./Cards.css";

function Cards() {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia height='400' image='/image/card-img.jpg' component='img' />
        {/* <img src="./image/card-img.jpg" height='550px' width="100%" alt="" /> */}

        {/* </CardMedia> */}
        <CardContent className='card--title'>Hello</CardContent>
        <Typography className='card--des'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          ducimus doloremque doloribus corrupti quisquam corporis!
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
