import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import classesReducer from "./reducers/classesReducer";
import attendeesReducer from "./reducers/attendeesReducer";
import userReducer from "./reducers/userReducer";

export const middlewares = [thunk, logger];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);

export const rootReducer = combineReducers({
  classes: classesReducer,
  attendees: attendeesReducer,
  user: userReducer,
});

const store = createStoreWithMiddlewares(rootReducer);

export default store;
