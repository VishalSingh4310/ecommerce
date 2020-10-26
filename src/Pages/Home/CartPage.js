import React, { useState } from "react";
import "../../components/home/BrowseFilter.css";
import { orange } from "@material-ui/core/colors";
import { Divider } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../store/actions/cart";
import CancelIcon from "@material-ui/icons/Cancel";
import SubHeader from "../../components/nav/SubHeader";
import NewHeader from "../../components/nav/NewHeader";
import ButtonContained from "../../components/auth/ButtonContained";
import * as AuthActions from "../../store/actions/auth";
import SimpleSnackbar from "../../components/auth/SimpleAlert";

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const [error, setError] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const verified = useSelector((state) => state.auth.verified);
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const IncrementHandler = async (item, count) => {
    await dispatch(cartActions.IncreaseCartItem(item, count));
  };
  const decrementHandler = async (item, count) => {
    if (totalAmount >= 0) {
      await dispatch(cartActions.DecreaseCartItem(item, count));
    }
  };
  const removeItem = async (item, total) => {
    await dispatch(cartActions.RemoveCartItem(item, total));
  };

  const verification = async () => {
    setSent(false);
    setErrorMess("");
    setError(false);
    try {
      await dispatch(AuthActions.authVerification());
      setSent(true);
    } catch (err) {
      setError(true);
      setErrorMess(err.message);
    }
  };

  return (
    <>
      <SimpleSnackbar error="Confirmation link sent" active={sent} />
      <SimpleSnackbar error={errorMess} active={error} />
      <NewHeader />
      <SubHeader />
      {token !== null ? (
        verified !== false ? (
          <>
            {cartItems.length == 0 && (
              <div className="cart-empty-parent">
                <img
                  className="cart-empty"
                  src="/Images/empty_cart.svg"
                  alt="cart-empty"
                />
                <Typography
                  variant="body1"
                  component="h2"
                  color="textSecondary"
                >
                  Why not try something to buy !!
                </Typography>
              </div>
            )}
            {cartItems.length !== 0 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Grid xs={10} lg={10} container style={{ minHeight: "60vh" }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      style={{
                        margin: "1rem 0",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
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
                      {cartItems.length !== 0 &&
                        cartItems.map((items) => {
                          return (
                            <div
                              style={{
                                padding: "1rem",
                                border: "1px solid #dbdbdb",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                                alignItems: "center",
                                textAlign: "left",
                                columnGap: "1rem",
                                position: "relative",
                                marginBottom: "1rem",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                  transform: "translate(22px, -22px)",
                                }}
                              >
                                <IconButton
                                  onClick={removeItem.bind(
                                    this,
                                    items.data,
                                    items.Total
                                  )}
                                >
                                  <CancelIcon style={{ color: "#5f5f5f" }} />
                                </IconButton>
                              </div>
                              <img
                                src={items.data.ImageUrl}
                                alt={items.data.title}
                                style={{
                                  width: "100px",
                                  height: "80px",
                                  objectFit: "cover",
                                }}
                              />
                              <div style={{ minWidth: "100px" }}>
                                <Typography variant="body1" component="p">
                                  <Truncate lines={3}>
                                    {items.data.title}
                                  </Truncate>
                                </Typography>
                              </div>
                              <div>
                                <Typography variant="body1" component="p">
                                  ${items.data.price}
                                </Typography>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <IconButton
                                  onClick={IncrementHandler.bind(
                                    this,
                                    items.data,
                                    items.quantity
                                  )}
                                  aria-label="add"
                                  style={{ marginRight: "0.3rem" }}
                                >
                                  <AddIcon fontSize="small" />
                                </IconButton>
                                <span className="quantity-box">
                                  {items.quantity}
                                </span>
                                <IconButton
                                  onClick={decrementHandler.bind(
                                    this,
                                    items.data,
                                    items.quantity
                                  )}
                                  aria-label="delete"
                                  style={{ marginRight: "0.3rem" }}
                                >
                                  <RemoveIcon fontSize="small" />
                                </IconButton>
                              </div>
                              <div>
                                <Typography variant="body1" component="p">
                                  ${items.Total}
                                </Typography>
                              </div>
                            </div>
                          );
                        })}
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
                        {cartItems.length !== 0 &&
                          cartItems.map((items) => {
                            return (
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
                                  variant="body1"
                                  component="h1"
                                  color="textSecondary"
                                  style={{ maxWidth: "100px" }}
                                >
                                  <Truncate lines={1}>
                                    {items.data.title}
                                  </Truncate>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  component="h3"
                                  color="textSecondary"
                                >
                                  ${items.Total}
                                </Typography>
                              </div>
                            );
                          })}
                        <Divider />
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                            marginTop: "1rem",
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
                            ${totalAmount}
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
                            ${totalAmount}
                          </Typography>
                        </div>
                        <Button
                          variant="contained"
                          className={classes.checkout}
                        >
                          PROCEED TO CHECKOUT
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Typography
                variant="body2"
                component="div"
                style={{ margin: "1rem 0" }}
              >
                Email is not verified
              </Typography>
              <ButtonContained
                variant="contained"
                text="Send me Link again"
                onClick={verification}
              >
                Send me link again
              </ButtonContained>
            </div>
          </div>
        )
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/auth">
            <ButtonContained
              variant="contained"
              text="Login"
              onClick={() => history.push("/auth")}
            >
              Login
            </ButtonContained>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
