/** @format */

import axios from "axios";
let baseURL = "https://api.openweathermap.org/data/2.5";
let apiKey = "9a0dbd34d408afc39cd18f58e015864d";

export default axios.create({
  baseURL,
  params: {
    appid: apiKey,
    units: "metric",
  },
});
