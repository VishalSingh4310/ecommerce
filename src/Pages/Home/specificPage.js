import React, { useState } from "react";
import {
  Grid,
  Breadcrumbs,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { Link } from "react-router-dom";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import "../../components/nav/HeaderBody";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "../../components/home/BrowseFilter.css";
import ProductCard from "../../components/detailPage/ProductCard";
import { orange } from "@material-ui/core/colors";
const useStyles = makeStyles({
  root: {
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
});

const SpecificPage = (props) => {
  console.log(props);
  const classes = useStyles();
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const [noOfPages] = useState(
    Math.ceil(props.location.state.array.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };
  const IncrementHandler = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev + 1);
    }
  };
  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Grid
      container
      justify="center"
      direction="row"
      style={{ paddingTop: "1rem", paddingBottom: "2rem" }}
    >
      <Grid item xs={10} lg={10} style={{ paddingBottom: "1rem" }}>
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
          <Typography color="textPrimary">{props.match.params.name}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={10} lg={5} md={5}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: "80%",
              height: "100%",
            }}
            src={props.location.state.selected.ImageUrl}
            alt={props.location.state.selected.title}
          />
        </div>
      </Grid>
      <Grid
        item
        xs={10}
        lg={5}
        md={5}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ width: "80%", textAlign: "left", paddingTop: "1rem" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: 600, marginBottom: "1rem" }}
            component="h6"
          >
            {props.location.state.selected.title}
          </Typography>
          <div>Reviews {props.location.state.selected.ratings}</div>
          <Typography variant="body1" component="h1">
            Your Price:{" "}
            <span style={{ fontWeight: 600 }}>
              ${props.location.state.selected.price}
            </span>
          </Typography>
          <Typography variant="body2" component="h1">
            Availability: <span style={{ color: "#dbdbdb" }}>Black Red</span>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0.5rem 0",
            }}
          >
            <Typography
              variant="body2"
              component="span"
              style={{ marginRight: "1rem" }}
            >
              Quantity
            </Typography>
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
          <Link
            to={{
              pathname: `/${props.match.params.id}/${props.match.params.name}/cart`,
              state: {
                itemData: props.location.state.selected,
                Quantity: quantity,
              },
            }}
          >
            <Button
              className={classes.root}
              variant="contained"
              startIcon={<ShoppingCart />}
            >
              Add To Cart
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid
        container
        xs={10}
        style={{ marginTop: "2.5rem", marginBottom: "1rem" }}
        spacing={3}
      >
        <Grid item xs={12} lg={10} md={10} style={{ marginBottom: "1.5rem" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", textAlign: "left" }}
            className="filter-heading"
            component="div"
          >
            RELATED ITEMS
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
        {props.location.state.array.length !== 0 &&
          props.location.state.array
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((projectItem, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={projectItem.item}>
                  {/* <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="tothetop"
                    to={`/${props.match.params.id}/${projectItem.item}`}
                  > */}
                  <Link
                    className="tothetop"
                    onClick={() => window.scrollTo(0, 0)}
                    to={{
                      pathname: `/${props.match.params.id}/${index}`,
                      state: {
                        selected: projectItem,
                        array: props.location.state.array,
                      },
                    }}
                  >
                    <ProductCard
                      item={projectItem}
                      previousRoute={props.match.params.id}
                    />
                  </Link>
                </Grid>
              );
            })}
      </Grid>
      <Grid
        xs={10}
        lg={12}
        item
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          style={{
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SpecificPage;
