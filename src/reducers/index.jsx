import { combineReducers } from "redux";
import newsReducer from "./news.reducer";
import countryReducer from "./country.reducer";

export default combineReducers({
  newsReducer,
  countryReducer,
});
