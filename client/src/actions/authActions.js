import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNOUT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "./authActionTypes";
import axios from "axios";

export const signup = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        credentials
      );
      const user = response.data.data;
      const message = response.data.message;
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { user: user, authMessage: message },
      });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    }
  };
};

export const login = (credential) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        credential
      );
      const user = response.data.data;
      const message = response.data.message;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: user, authMessage: message },
      });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: SIGNOUT });
  };
};
