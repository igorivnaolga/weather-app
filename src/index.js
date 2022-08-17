let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinnute = now.getMinutes();

let currentDate = `${currentDay} ${currentHour}:${currentMinnute}`;

console.log(currentDate);
let date = document.querySelector("#current-date");
date.innerHTML = currentDate;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-button");
//

searchForm.addEventListener("click", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
