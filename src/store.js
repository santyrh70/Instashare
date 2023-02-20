import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pexelsReducer from "./reducers/pexelsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import savedImagesReducer from "./reducers/savedImagesReducer";
import firebaseReducer from "./reducers/firebaseReducer";

const reducer = combineReducers({
  pexelsApi: pexelsReducer,
  savedImages: savedImagesReducer,
  fireBase: firebaseReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;