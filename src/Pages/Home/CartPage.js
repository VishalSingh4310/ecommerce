import React, { useState } from "react";
import "../../components/home/BrowseFilter.css";
import { orange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";
import {
  Grid,
  Typography,
  IconButton,
  Button,
  makeStyles,
  Breadcrumbs,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  checkout: {
    // background: "#7c6d3b",
    width: "100%",
    marginTop: "1rem",
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
});

const CartPage = (props) => {
  console.log(props);
  const classes = useStyles();
  const [quantity, setQuantity] = useState(props.location.state.Quantity);
  const [total, setTotal] = useState(
    parseInt(props.location.state.itemData.price)
  );

  const IncrementHandler = () => {
    if (quantity > 0 && total >= 0) {
      setQuantity((prev) => prev + 1);
      setTotal((prev) => prev + parseInt(props.location.state.itemData.price));
    }
  };
  const decrementHandler = () => {
    if (quantity > 1 && total >= 0) {
      setQuantity((prev) => prev - 1);
      setTotal((prev) => prev - parseInt(props.location.state.itemData.price));
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid xs={10} lg={10} container style={{ minHeight: "60vh" }}>
        <div style={{ width: "100%" }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}
          >
            <Link color="#dbdbdb" to="/">
              Home
            </Link>
            <Link color="#dbdbdb" to={`/${props.match.params.id}`}>
              {props.match.params.id}
            </Link>
            {/* <Link
              color="#dbdbdb"
              to={`/${props.match.params.id}/${props.match.params.name}`}
            >
              {props.match.params.name}
            </Link> */}
            <Typography color="textPrimary">
              {props.match.params.name}
            </Typography>
          </Breadcrumbs>
        </div>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{ margin: "1rem 0", fontWeight: "bold", textAlign: "left" }}
            className="filter-heading"
          >
            SHOPPING CART
            <Typography
              style={{ width: "10%", background: "#000", zIndex: 40 }}
              component="span"
            ></Typography>
            <span
              style={{
                width: "100%",
                height: "2px",
                background: "#f7f7f7",
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></span>
          </Typography>
        </Grid>
        <Grid container style={{ marginBottom: "1rem" }}>
          <Grid item xs={8} lg={8} md={8}>
            <div
              style={{
                padding: "1rem",
                border: "1px solid #dbdbdb",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                alignItems: "center",
                textAlign: "left",
                columnGap: "1rem",
              }}
            >
              <img
                src={props.location.state.itemData.ImageUrl}
                alt="cart"
                style={{ width: "100px", height: "80px", objectFit: "cover" }}
              />
              <div style={{ minWidth: "100px" }}>
                <Typography variant="body1" component="p">
                  <Truncate lines={3}>
                    {props.location.state.itemData.title}
                  </Truncate>
                </Typography>
              </div>
              <div>
                <Typography variant="body1" component="p">
                  ${props.location.state.itemData.price}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={IncrementHandler}
                  aria-label="add"
                  style={{ marginRight: "0.3rem" }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
                <span className="quantity-box">{quantity}</span>
                <IconButton
                  onClick={decrementHandler}
                  aria-label="delete"
                  style={{ marginRight: "0.3rem" }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
              </div>
              <div>
                <Typography variant="body1" component="p">
                  ${total}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} lg={4} md={4}>
            <div
              style={{
                padding: "1rem",
                marginLeft: "1rem",
                border: "1px solid #dbdbdb",
              }}
            >
              <Typography
                variant="h6"
                component="h1"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                ORDER SUMMARY
              </Typography>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  //   style={{ color: "#dbdbdb" }}
                  variant="body2"
                  component="h3"
                  color="textSecondary"
                >
                  SUBTOTAL
                </Typography>
                <Typography
                  variant="body2"
                  component="h3"
                  color="textSecondary"
                >
                  ${props.location.state.itemData.price}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  variant="body1"
                  component="h4"
                  style={{ fontWeight: "bold" }}
                >
                  TOTAL
                </Typography>
                <Typography
                  variant="body1"
                  component="h4"
                  style={{ fontWeight: "bold" }}
                >
                  ${total}
                </Typography>
              </div>
              <Button variant="contained" className={classes.checkout}>
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartPage;
