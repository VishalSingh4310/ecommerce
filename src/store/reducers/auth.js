import { SIGN_IN, LOGGED_IN, LOGOUT } from "../actions/auth";
const initialState = {
  verified: false,
  email: null,
  username: null,
  token: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        verified: action.verified,
        email: action.Email,
        username: action.username,
        token: action.token,
      };
    case LOGGED_IN:
      return {
        verified: action.user.emailVerified,
        email: action.user.email,
        username: action.user.displayName,
        token: action.user.refreshToken,
      };
    case LOGOUT:
      return {
        verified: null,
        email: null,
        username: null,
        token: null,
      };
    default:
      return state;
  }
};
export default authReducer;
