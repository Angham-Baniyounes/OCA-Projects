import React from "react";
import "weather-icons/css/weather-icons.css";
import "../../S-Style/Weather.scss";
const Weather = (props) => {
  return (
    <div className="Weather-Container">
      <div className="Card-Weather">
        <h1 className="Item">
          {props.city},{props.country}
        </h1>
        <h5 className="Item">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
        <h1 className="Item"> {props.temp_celsius}&deg;</h1>
        {/** show max and in temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="Item">{min}&deg;</span>
      <span className="Item">{max}&deg;</span>
    </h3>
  );
}
export default Weather;
