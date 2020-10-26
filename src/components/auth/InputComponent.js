import React, { useState } from "react";
import {
  IconButton,
  TextField,
  InputAdornment,
  withStyles,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./Login.css";
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

const InputComponent = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <CssTextField
      {...props}
      style={{ marginBottom: "1rem" }}
      variant="outlined"
      size="small"
      className="username-input"
      fullWidth
      type={props.hide === true ? (showPassword ? "text" : "password") : "text"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{props.startIcon1}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {props.hide && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputComponent;
