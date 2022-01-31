import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";
export const LOADING_TOGGLE_ACTION = "LOADING_TOGGLE_ACTION";

const url_country =
  "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag,flags";

export const getCountry = () => {
  return (dispatch) => {
    return axios
      .get(url_country)
      .then((resp) => {
        dispatch({ type: GET_COUNTRY, payload: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadingToggleAction = (status) => {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
};
