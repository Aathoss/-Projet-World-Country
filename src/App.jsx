import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import News from "./pages/News";

import { connect } from "react-redux";
import { MutatingDots } from "react-loader-spinner";

const App = (props) => {
  return (
    <React.StrictMode>
      {props.showLoading && (
        <MutatingDots
          ariaLabel="loading-indicator"
          wrapperClass="loading-indicator"
          radius="20"
          height="100"
          width="100"
          color="#3ACEEF"
          secondaryColor="#EFA83A"
        />
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>

    /* {console.log(mapStateToProps.showLoading)}
      {mapStateToProps.showLoading && (
        
      )} */
  );
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.countryReducer.showLoading,
  };
};

export default connect(mapStateToProps)(App);
