/** @format */

import React, { useState } from "react";
const WeatherTemperature = ({ temp }) => {
  const [unit, setUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(temp);

  const Fahrenheit = () => {
    return (temp * 9) / 5 + 32;
  };
  const celsiusOnClickHandle = (e) => {
    e.preventDefault();
    setUnit("celsius");
    setTemperature(temp);
  };
  const FahrenheitOnClickHandle = (e) => {
    e.preventDefault();
    setUnit("Fahrenheit");
    setTemperature(Fahrenheit());
  };

  return (
    <div>
      <strong>{Math.round(temperature)}</strong>
      <span className="units ml-1">
        <a href="/" onClick={celsiusOnClickHandle}>
          °C |{" "}
        </a>
        <a href="/" onClick={FahrenheitOnClickHandle}>
          °F
        </a>
      </span>
    </div>
  );
};

export default WeatherTemperature;
