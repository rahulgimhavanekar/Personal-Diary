import {
  FETCH_ALL,
  FETCH_SINGLE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  LOADING,
  ERROR,
} from "../actions/eventActionTypes";

const intialState = {
  events: [],
  event: {},
  totalEvents: 0,
  loading: false,
  error: null,
};

const eventReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        events: action.payload,
        totalEvents: action.payload.length,
        loading: false,
        error: null,
      };
    case FETCH_SINGLE_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        totalEvents: state.totalEvents - 1,
        loading: false,
        error: null,
      };
    case UPDATE_EVENT:
      const existingEvents = state.events.map((event) =>
        event.id !== action.payload.id ? event : action.payload
      );
      return {
        ...state,
        events: existingEvents,
        loading: false,
        error: null,
      };
    case DELETE_EVENT:
      const newEventsList = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        ...state,
        events: newEventsList,
        totalEvents: state.totalEvents - 1,
        loading: false,
        error: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
