import { createStore, combineReducers } from "redux";
import firstReducer from "./reducers/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  countData: firstReducer,
})
const store = createStore(reducer, composeWithDevTools());

export default store;