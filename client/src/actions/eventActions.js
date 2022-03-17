import axios from "axios";
import {
  FETCH_ALL,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  LOADING,
  ERROR,
  FETCH_SINGLE_EVENT,
} from "./actionTypes";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await axios.get("http://localhost:5000/api/events");
      const data = response.data.data;
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const createEvent = (event) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/new-event",
        event
      );
      const data = response.data.data;
      dispatch({ type: CREATE_EVENT, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      dispatch({ type: DELETE_EVENT, payload: id });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const updateEvent = (id, newEvent) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = axios.patch(
        `http://localhost:5000/api/events/${id}/edit`,
        newEvent
      );
      const data = response.data.data;
      dispatch({ type: UPDATE_EVENT, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const getSingleEvent = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await axios.get(
        `http://localhost:5000/api/events/${id}`
      );
      const event = response.data.data;
      dispatch({ type: FETCH_SINGLE_EVENT, payload: event });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
