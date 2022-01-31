import { GET_COUNTRY, LOADING_TOGGLE_ACTION } from "../actions/country.action";

const initialState = {
  data: [],
  showLoading: false,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        showLoading: false,
        data: action.payload,
      };
    case LOADING_TOGGLE_ACTION:
      return {
        ...state,
        showLoading: action.payload,
      };
    default:
      return state;
  }
}
