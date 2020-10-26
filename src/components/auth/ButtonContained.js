import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[900]),
    backgroundColor: orange[800],
    "&:hover": {
      backgroundColor: orange[800],
    },
  },
}))(Button);
const ButtonContained = (props) => {
  return <ColorButton {...props}>{props.text}</ColorButton>;
};

export default ButtonContained;
