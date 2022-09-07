import React from "react";
import axios from "axios";

export default function Weather() {
  let city = "New York";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28d1bc668482ed61803072514627074f&units=metric`;
  axios.get(url).then(showWeather);
  function showWeather(response) {
    alert(response.data.main.temp);
  }
}
