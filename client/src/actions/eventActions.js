import axios from "axios";
import {
  FETCH_ALL,
  CREATE_EVENT,
  //   UPDATE_EVENT,
  DELETE_EVENT,
  LOADING,
  ERROR,
} from "../actions/eventActionTypes";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await axios.get("http://localhost:5000/api/events");
      const data = response.data.data;
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      dispatch({ type: DELETE_EVENT, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getSingleEvent = (id) => {
//   return async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/events/${id}`
//       );
//       const event = response.data.data;
//       return event;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
