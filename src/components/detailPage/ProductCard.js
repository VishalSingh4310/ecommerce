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

  let newArray = [];
  let newArray2 = [];
  for (
    let i = 0;
    i < Math.floor(props.item.ratings.split(" ")[0].split(".")[0]);
    i++
  ) {
    newArray.push(
      <li>
        <StarIcon style={{ width: "1.3rem" }} />
      </li>
    );
  }

  for (
    let i = 0;
    i < 5 - Math.floor(props.item.ratings.split(" ")[0].split(".")[0]);
    i++
  ) {
    if (5 - Math.floor(props.item.ratings.split(" ")[0].split(".")[0]) >= 2) {
      newArray2.push(
        <li>
          <StarBorder style={{ width: "1.3rem" }} />
        </li>
      );
    }
  }

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
            className="card-div"
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
        <CardContent
          style={{ textAlign: "left", height: "28vh" }}
          className="card-content"
        >
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
              {newArray}
              {Math.floor(props.item.ratings.split(" ")[0].split(".")[1]) !==
              0 ? (
                <li>
                  <StarHalf style={{ width: "1.3rem" }} />
                </li>
              ) : (
                <li>
                  <StarBorder style={{ width: "1.3rem" }} />
                </li>
              )}
              {newArray2.splice(newArray2.length - 1)}
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
