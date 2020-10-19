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
import { Link } from "react-router-dom";
import * as cartActions from "../../store/actions/cart";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const classes = useStyles();
  const addItemHandler = async (item, quantity) => {
    console.log("ok");
    await dispatch(cartActions.addCartItem(item, quantity));
    props.alert();
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          to={{
            pathname: `/${props.previousRoute}/${props.index}`,
            state: {
              selected: props.selected,
              array: props.array,
              // alertEvent: props.alert,
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
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
        </Link>
        <CardContent style={{ textAlign: "left", height: "28vh" }}>
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
        <Link to="/cart">
          <Button
            size="small"
            color="primary"
            onClick={addItemHandler.bind(this, props.item, 1)}
          >
            Buy Now
          </Button>
        </Link>
        {/* <Link
          to={{
            pathname: `/${props.previousRoute}/${props.index}/cart`,
          }}
        > */}
        <Button
          size="small"
          color="primary"
          onClick={addItemHandler.bind(this, props.item, 1)}
        >
          Add To Cart
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}
