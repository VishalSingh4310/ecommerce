import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  //   Redirect,
  Route,
} from "react-router-dom";
import CartPage from "../Pages/Home/CartPage";
import DetailPage from "../Pages/Home/DetailPage";
import HomePage from "../Pages/Home/HomePage";
import SpecificPage from "../Pages/Home/specificPage";
import AuthPage from "../Pages/Home/AuthPage";
import { useSelector, useDispatch } from "react-redux";
import { authentication } from "../Database/db";
import * as AuthActions from "../store/actions/auth";

const Navigator = () => {
  const token = useSelector((state) => state.auth.token);
  const verified = useSelector((state) => state.auth.verified);

  const dispatch = useDispatch();
  authentication.onAuthStateChanged((user) => {
    if (user) {
      dispatch(AuthActions.loggedIn(user));
    }
  });
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        {!token && !verified && (
          <Route path="/auth" component={AuthPage} exact />
        )}
        <Route path="/cart" component={CartPage} exact />
        <Route path="/:id" component={DetailPage} exact />
        <Route path="/:id/:name" component={SpecificPage} exact />
      </Switch>
    </Router>
  );
};

export default Navigator;
