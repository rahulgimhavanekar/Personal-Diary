import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNOUT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../actions/authActionTypes";

const initialState = {
  loggedIn: false,
  user: {},
  authMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload.user,
        authMessage: action.payload.message,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authMessage: action.payload.message,
      };
    case SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload.user,
        authMessage: action.payload.message,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        authMessage: action.payload.message,
      };
    case SIGNOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {},
        authMessage: null,
      };
    }
    default:
      return state;
  }
};
