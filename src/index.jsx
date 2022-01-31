import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getNews } from "./actions/news.action";
import { getCountry, loadingToggleAction } from "./actions/country.action";
/* import { MutatingDots } from "react-loader-spinner"; */

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Chargement des données des l'ouverture de l'application
store.dispatch(loadingToggleAction(true));
store.dispatch(getCountry());
store.dispatch(getNews());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
