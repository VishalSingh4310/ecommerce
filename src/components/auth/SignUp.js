import React from "react";
import { Typography } from "@material-ui/core";
import StepperComponent from "./Stepper";
// import "./Login.css";

const SignUp = (props) => {
  const handle = () => {
    props.active();
  };

  return (
    <div className="auth-parent-1">
      <div className="auth-subContainer-signup">
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
            Sign Up to get the moment updates on the things that interests you.
          </Typography>
        </div>
        <div style={{ width: "100%" }}>
          <StepperComponent LoginActive={handle} props={props.props} />
        </div>

        <div>
          <Typography
            variant="body2"
            component="p"
            className="auth-option-para"
          >
            Already have an account ?{" "}
            <Typography
              variant="body2"
              component="span"
              className="auth-option-toggle"
              onClick={() => props.active()}
            >
              Sign In Now
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

export default SignUp;
