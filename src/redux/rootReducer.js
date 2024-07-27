import { combineReducers } from "redux";
import { homeReducer } from "./reducers/homeReducers";

// combining all the reducers
const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
