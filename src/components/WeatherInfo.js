/** @format */

import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import "../Style/WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  return (
    <div className="overview">
      <h1>{data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={data.date} />
        </li>
        <li>{data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="weather-temperature">
            <div>
              {" "}
              <div className="float-left">
                <WeatherIcon code={data.icon} size={48} />
              </div>
            </div>
            <div></div>
            <div className="float-left">
              <WeatherTemperature temp={data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {data.humidity}</li>
            <li>Wind: {data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
