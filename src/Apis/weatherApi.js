/** @format */

import axios from "axios";
let baseURL = "https://api.openweathermap.org/data/2.5";
let apiKey = "a2e6113ea75155225ff8f0f04ddc7b8f";

export default axios.create({
  baseURL,
  params: {
    appid: apiKey,
    units: "metric",
  },
});
