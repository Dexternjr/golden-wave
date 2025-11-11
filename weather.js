// Replace with your OpenWeatherMap API key
const apiKey = "373b3d04e45c1d3487f4b8ae7373713a";

// Get user location (optional)
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  fetchWeatherData(latitude, longitude);
}

function error() {
  // Handle location access error (optional)
  console.error("Error getting user location");
  fetchWeatherData(4.5833, 10.1333); // Sample coordinates for Dschang
}

function fetchWeatherData(latitude, longitude) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => console.error(error));
}

function displayWeatherData(data) {
  // Access and display desired weather data from the response object
  const city = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  // Example: Update HTML elements with weather data
  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = temperature + " °C";
  document.getElementById("description").textContent = description;
}
