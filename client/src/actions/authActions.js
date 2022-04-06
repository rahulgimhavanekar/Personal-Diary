import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});

export const signup = (credentials, router) => {
  return async (dispatch) => {
    try {
      console.log(credentials);
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        credentials
      );
      const user = response.data.data;
      const message = response.data.message;

      localStorage.setItem("token", response.data.token);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { user: user, message: message },
      });

      router.push("/events");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      dispatch({ type: SIGNUP_FAILURE, payload: error.response.data.message });
    }
  };
};

export const login = (credentials, router) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        credentials
      );
      const user = response.data.data;
      const message = response.data.message;

      localStorage.setItem("token", response.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: user, authMessage: message },
      });
      router.push("/events");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
  };
};

export const logout = (router) => {
  return async (dispatch) => {
    try {
      localStorage.clear();
      dispatch({ type: LOGOUT });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
