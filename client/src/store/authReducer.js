import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  PROFILE,
} from "../actions/actionTypes";

const token = localStorage.getItem("token");

const initialState = {
  loggedIn: token ? true : false,
  user: {},
  authMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        authMessage: action.payload.message,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authMessage: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        authMessage: action.payload.message,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        authMessage: action.payload.message,
      };
    case LOGOUT: {
      localStorage.clear();

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

export default authReducer;
