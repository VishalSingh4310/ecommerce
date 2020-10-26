import React from "react";
import "./App.css";
import Footer from "./components/nav/Footer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import Navigator from "./navigation/Navigator";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import authReducer from "./store/reducers/auth";

const font = "'Open Sans', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      font,
      "Nunito",
      "Roboto",
      "Open-sans",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navigator />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
