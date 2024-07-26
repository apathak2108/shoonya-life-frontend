import { combineReducers } from "redux";
import { homeReducer } from "./reducers/homeReducers";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
