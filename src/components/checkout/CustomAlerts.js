import React, { useState, useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CustomAlerts = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  console.log(open);
  useEffect(() => {
    console.log("time");
    if (props.active == true) {
      setTimeout(() => {
        handleClick();
      }, 2000);
      handleClose();
    }
  }, [open]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={props.Inactive}>
      <Alert onClose={handleClose} severity="success">
        Your item is added to cart!
      </Alert>
    </Snackbar>
  );
};

export default CustomAlerts;
