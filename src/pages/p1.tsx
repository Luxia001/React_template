import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";

function P1() {
  return (
    <div className=" text-green-400">
      <p>New Page Link</p>
      <h1>Meterial UI activate</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86VVXXFkrJaK0rDLRnsZsRkKvRElzSVvhBq88v-FDjwQtbNaP-2CdrV2actLTzCceINCiGmIdewe3tp9uxprHSg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <h1>Bootstrap</h1>
      <div
        className="card"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86VVXXFkrJaK0rDLRnsZsRkKvRElzSVvhBq88v-FDjwQtbNaP-2CdrV2actLTzCceINCiGmIdewe3tp9uxprHSg"
          alt="green iguana"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default P1;
