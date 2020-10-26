import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: orange[900],
    borderColor: orange[900],
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "tranparent",
    },
  },
}))(Button);
const ButtonOutlined = (props) => {
  return <ColorButton {...props}>{props.text}</ColorButton>;
};

export default ButtonOutlined;
