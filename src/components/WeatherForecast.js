/** @format */

import React, { useState, useEffect } from "react";
import "../Style/WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import weatherApi from "../Apis/weatherApi";

const WeatherForecast = ({ coord }) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  const handleResponse = (Response) => {
    setForecast(Response.data.daily);
    setLoaded(true);
  };

  const searchForecast = async () => {
    await weatherApi
      .get("/onecall", {
        params: {
          lat: coord.lat,
          lon: coord.lon,
        },
      })
      .then((res) => {
        handleResponse(res);
      })
      .catch("sorry try later");
  };

  useEffect(() => {
    setLoaded(false);
  }, [coord]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
};

export default WeatherForecast;
