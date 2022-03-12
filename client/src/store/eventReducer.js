import {
  FETCH_ALL,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../actions/eventActionTypes";

const intialState = {
  events: [],
  totalEvents: 0,
};

const eventReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        events: action.payload,
        totalEvents: action.payload.length,
      };
    case CREATE_EVENT:
      return {
        events: [...state.events, action.payload],
        totalEvents: state.totalEvents - 1,
      };
    case UPDATE_EVENT:
      const existingEvents = state.events.map((event) =>
        event.id !== action.payload.id ? event : action.payload
      );
      return {
        ...state,
        events: existingEvents,
      };
    case DELETE_EVENT:
      const newEventsList = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        events: newEventsList,
        totalEvents: state.totalEvents - 1,
      };
    default:
      return state;
  }
};

export default eventReducer;
