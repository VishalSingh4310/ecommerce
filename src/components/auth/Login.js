import React, { useState } from "react";
import {
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  withStyles,
  Button,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { orange, grey } from "@material-ui/core/colors";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as AuthActions from "../../store/actions/auth";
import { useHistory } from "react-router-dom";
import SimpleSnackbar from "./SimpleAlert";
import { useSelector } from "react-redux";

import "./Login.css";
import { useDispatch } from "react-redux";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: orange[900],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: orange[900],
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: orange[900],
      },
      "&.Mui-focused fieldset": {
        borderColor: orange[900],
      },
    },
  },
})(TextField);

const useStyles = makeStyles({
  login_btn: {
    background: "red",
  },
});
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[900]),
    backgroundColor: orange[800],
    "&:hover": {
      backgroundColor: orange[800],
    },
  },
}))(Button);

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const SignInHandler = async () => {
    setError(false);
    setErrorMess("");
    try {
      await dispatch(AuthActions.signIn(email, password));
      if (token !== "") {
        history.push("/");
      }
      window.addEventListener("popstate", () => {
        history.go(1);
      });
    } catch (err) {
      setError(true);
      setErrorMess(err.message);
      // console.log(err.message);
    }
  };
  return (
    <div className="auth-parent-1">
      <SimpleSnackbar active={error} error={errorMess} />
      <div className="auth-subContainer">
        <div className="heading-parent">
          <Typography variant="body1" component="h3" className="heading">
            WELCOME TO
          </Typography>

          <img
            src="/Images/new_ecommerLogo.png"
            className="auth-logo"
            alt="auth-logo"
          />

          <Typography variant="body2" component="h5" className="heading-para">
            Log in to get the moment updates on the things that interests you.
          </Typography>
        </div>
        <div>
          <div>
            <CssTextField
              style={{ marginBottom: "1rem" }}
              autoFocus
              variant="outlined"
              size="small"
              className="username-input"
              label="Email"
              fullWidth
              value={email}
              type="email"
              onChange={(text) => setEmail(text.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon style={{ color: grey[400] }} />
                  </InputAdornment>
                ),
              }}
            />
            <CssTextField
              value={password}
              variant="outlined"
              size="small"
              className="password-input"
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              onChange={(text) => setPassword(text.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: grey[400] }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="login_btn">
            {/* <Link to="/"> */}
            <ColorButton fullWidth variant="contained" onClick={SignInHandler}>
              SIGN IN
            </ColorButton>
            {/* </Link> */}
          </div>
        </div>
        <div>
          <Typography
            variant="body2"
            component="p"
            className="auth-option-para"
          >
            Don't have an account ?{" "}
            <Typography
              variant="body2"
              component="span"
              className="auth-option-toggle"
              onClick={() => props.active()}
            >
              Sign Up Now
            </Typography>
          </Typography>
          {/* <div className="auth-option">
            <span>
              <Divider variant="middle" />
            </span>
            <span>Or</span>
            <span>
              <Divider variant="middle" />
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
