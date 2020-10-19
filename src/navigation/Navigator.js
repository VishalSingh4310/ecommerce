import React from "react";
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

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:id" component={DetailPage} exact />
        <Route path="/:id/:name" component={SpecificPage} exact />
        <Route path="/:id/:name/cart" component={CartPage} exact />
      </Switch>
    </Router>
  );
};

export default Navigator;
