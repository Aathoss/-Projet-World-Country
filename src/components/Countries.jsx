import React, { useState } from "react";
import Card from "./Card";
import { isEmpty } from "./../components/Utils";
import { useSelector } from "react-redux";

const Countries = () => {
  const countryData = useSelector((state) => state.countryReducer.data);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Europe", "Asia", "Oceania"];

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={() => setSelectedRadio("")}>Annuler la recherche</h5>
        )}
      </div>

      <ul className="countries-list">
        {!isEmpty(countryData) &&
          countryData
            .filter((country) => country.region.includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .filter((country, index) => index < rangeValue)
            .map((country, idx) => <Card country={country} key={idx} />)}
      </ul>
    </div>
  );
};

export default Countries;
