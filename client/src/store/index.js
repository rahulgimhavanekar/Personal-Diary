import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
