"use strict";

const input = $(".weather__search");
input.value = "";

getWeather("ha noi");

input.onkeyup = (e) => {
  if (e.key == "Enter") {
    getWeather(e.target.value);
  }
};

function getWeather(input) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error calling GET method" + response.status);
      }
    })
    .then((weather) => {
      changeWeatherUI(weather);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function changeWeatherUI(weather) {
  $(".name__city").innerHTML = weather.name;
  $(".name__country").innerHTML = weather.sys.country;
  $(".time").innerHTML = new Date().toLocaleString();
  $(".short-desc").innerHTML = weather.weather[0].main;

  const temp = Math.round(weather.main.temp);
  $(".temperature__value").innerHTML = temp;
  temp >= 18
    ? (document.body.className = "hot")
    : (document.body.className = "cold");

  $(".more-desc__visibility span").innerHTML = weather.visibility + " (m)";
  $(".more-desc__wind span").innerHTML = weather.wind.speed + " (m/s)";
  $(".more-desc__cloud span").innerHTML = weather.clouds.all + " (%)";
}
