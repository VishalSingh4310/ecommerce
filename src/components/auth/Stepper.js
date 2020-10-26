import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import InputComponent from "./InputComponent";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { orange, grey } from "@material-ui/core/colors";
import ButtonContained from "./ButtonContained";
import ButtonOutlined from "./ButtonOutlined";
import LockIcon from "@material-ui/icons/Lock";
import * as AuthActions from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SimpleSnackbar from "./SimpleAlert";

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: orange[500],
        },
        "&$active": {
          color: orange[900],
        },
      },
      active: {},
      completed: {},
    },
  },
});

const useStyles = makeStyles((theme) => ({
  "& .MuiStepIcon-root.MuiStepIcon-active": {
    color: "red",
  },
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Create new account", "Email Confirmation"];
}

export default function StepperComponent(props) {
  const [isUser, setIsUser] = useState("");
  const [pass, setPass] = useState("");
  const [isemail, setIsEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const Signuphandler = async () => {
    setError(false);
    setErrorMess("");
    if (pass !== "" && isUser !== "" && isemail !== "") {
      try {
        await dispatch(AuthActions.signupHandler(isUser, isemail, pass));
        history.push("/");
        // handleNext();
      } catch (err) {
        console.log(err);
        setError(true);
        setErrorMess(err.message);
      }
    } else {
      setError(true);
      setErrorMess("Invalid Username");
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    if (isemail !== "" && pass !== "") {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const LoginHandler = async () => {
    setError(false);
    setErrorMess("");
    try {
      await dispatch(AuthActions.signIn(isemail, pass));
      history.push("/");
    } catch (err) {
      // console.log(err);
      setError(true);
      setErrorMess(err.message);
    }
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <InputComponent
              label="Email"
              type="email"
              value={isemail}
              onChange={(text) => setIsEmail(text.target.value)}
              startIcon1={<EmailIcon style={{ color: grey[400] }} />}
            />
            <InputComponent
              value={pass}
              label="Password"
              onChange={(text) => setPass(text.target.value)}
              startIcon1={<LockIcon style={{ color: grey[400] }} />}
              hide={true}
            />
          </>
        );
      case 1:
        return (
          <>
            <InputComponent
              label="Username"
              value={isUser}
              onChange={(text) => setIsUser(text.target.value)}
              startIcon1={<AccountCircleIcon style={{ color: grey[400] }} />}
            />
            {/* <InputComponent
              label="OTP"
              startIcon1={<VpnKeyIcon style={{ color: grey[400] }} />}
            /> */}
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <div className={classes.root}>
      <SimpleSnackbar active={error} error={errorMess} />
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </ThemeProvider>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              className={classes.instructions}
              style={{ color: grey[500], padding: "1rem" }}
            >
              If you're verified the email then welcome to Login
            </Typography>
            {/* <Link to="/"> */}
            <ButtonContained
              style={{ marginBottom: "1rem" }}
              fullWidth
              text={activeStep === steps.length ? "LOGIN" : "Next"}
              variant="contained"
              color="primary"
              onClick={LoginHandler}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </ButtonContained>
            {/* </Link> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <ButtonContained
                style={{ marginBottom: "1rem" }}
                fullWidth
                text={
                  activeStep === steps.length - 1
                    ? "SEND VERIFICATION EMAIL LINK"
                    : "Next"
                }
                variant="contained"
                color="primary"
                onClick={
                  activeStep === steps.length - 1 ? Signuphandler : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </ButtonContained>
              <ButtonOutlined
                disabled={activeStep === 0}
                onClick={handleBack}
                text="BACK"
                fullWidth
                variant="outlined"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
