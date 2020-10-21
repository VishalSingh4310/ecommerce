import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (props.active == true) {
      // handleClick();
      console.log("clicked");
    }
  }, [open]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      action={props.action}
    >
      <Alert onClose={handleClose} severity="success">
        Your item is added to cart!
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
