import { authentication } from "../../Database/db";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const LOGGED_IN = "LOGGED_IN";
export const LOGOUT = "LOGOUT";

export const signupHandler = (user, email, password) => {
  return async (dispatch) => {
    try {
      await authentication.createUserWithEmailAndPassword(email, password);
      await dispatch(UpdateProfile(user));
      await dispatch(authVerification());
    } catch (error) {
      // console.log(error.message);
      throw error;
    }
  };
};

export const UpdateProfile = (userName) => {
  return async (dispatch) => {
    await authentication.onAuthStateChanged(function (user) {
      if (user) {
        // Updates the user attributes:

        user
          .updateProfile({
            // <-- Update Method here

            displayName: userName,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
          .then(
            function () {},
            function (error) {
              // An error happened.
              throw error;
            }
          );
      }
    });
  };
};

export const authVerification = () => {
  return async (dispatch) => {
    var user = await authentication.currentUser;
    await user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
        // console.log("sent");
      })
      .catch(function (error) {
        // An error happened.
        throw new Error("Something went wrong!");
      });
    //   return user;
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      await authentication.setPersistence("session");
      await authentication.signInWithEmailAndPassword(email, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        throw new Error("Wrong password");
      } else {
        throw new Error(errorMessage);
      }
    }
  };
};

export const loggedIn = (user) => {
  return {
    type: LOGGED_IN,
    user: user,
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await authentication.signOut();
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };
};
