import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const reducer = combineReducers({})

let initialState = {}

const middleware = [thunk]
const store = create(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;