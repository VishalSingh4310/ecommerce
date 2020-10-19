import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import StarHalf from "@material-ui/icons/StarHalf";
import "./ProductCard.css";
import Truncate from "react-truncate";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // height: "60vh",
  },
  media: {
    height: 200,
    width: "60%",
    objectFit: "contain",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div
          style={{
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <CardMedia
            className={classes.media}
            image={props.item.ImageUrl}
            title={props.item.title}
          />
        </div>
        <CardContent style={{ textAlign: "left" }}>
          <Typography gutterBottom variant="body1" component="h4">
            <Truncate lines={3}>{props.item.title}</Truncate>
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="body2"
            component="p"
          >
            ${props.item.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Black Color
          </Typography>
          <div>
            <ul className="rating-icon">
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarHalf />
              </li>
              <li>
                <StarBorder />
              </li>
            </ul>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
