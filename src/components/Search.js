/** @format */

import React, { useState, useEffect } from "react";
import weatherApi from "../Apis/weatherApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "../Style/Search.css";
import WeatherInfo from "./WeatherInfo";

const Search = () => {
  const [term, setTerm] = useState("paris");
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term) {
        searchWeather();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const searchWeather = async () => {
    await weatherApi
      .get("/weather", {
        params: {
          q: term,
        },
      })
      .then((res) => {
        handleResponse(res.data);
      });
  };

  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coordinates: response.coord,
      temperature: response.main.temp,
      humidity: response.main.humidity,
      date: new Date(response.dt * 1000),
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      wind: response.wind.speed,
      city: response.name,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchWeather();
  };

  if (weatherData.ready) {
    return (
      <div>
        <form className="mb-3" onSubmit={onFormSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="type a city ..."
                autoFocus="on"
                onChange={(e) => setTerm(e.target.value) && e.preventDefault()}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100 "
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchWeather();
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
};

export default Search;
