import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import eventReducer from "./eventReducer";

const store = createStore(eventReducer, applyMiddleware(logger, thunk));

export default store;
