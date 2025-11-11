// Replace placeholders with API Key and actual data variables
const apiKey = "373b3d04e45c1d3487f4b8ae7373713a";
let weatherData; // Store fetched weather data

// Fetch weather data from OpenWeatherMap API (simplified)
function fetchWeatherData() {
  const cityName = 'Dschang';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      weatherData = data;
      displayWeatherData();
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Display fetched weather data and advice
function displayWeatherData() {
  const city = document.getElementById("city");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const adviceText = document.getElementById("advice-text");

  city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
  description.textContent = `Description: ${weatherData.weather[0].description}`;

  const rainForecast = checkRainForecast(); // Check for rain

  if (rainForecast) {
    adviceText.textContent = "It will rain in the next few days. Consider postponing activities like planting or applying pesticides.";
  } else {
    adviceText.textContent = "No rain expected in the next few days. This is a good time for activities like planting, weeding, and applying fertilizers.";
  }
}

// Check if rain is expected in the next few days (optional)
function checkRainForecast() {
  if (!weatherData.list) { // Check if forecast data is available
    console.log('Forecast data not available.');
    return false;
  }

  return weatherData.list.some(item => {
    return item.weather.some(weather => {
      return weather.main.toLowerCase().includes('rain');
    });
  });
}

// Fetch data and display on page load
fetchWeatherData();








// Define estimated nutrient content for each type of waste
const nutrientContent = {
  tomatoes: { nitrogen: 0.02, phosphorus: 0.01, potassium: 0.03 },
  fowlDung: { nitrogen: 0.05, phosphorus: 0.03, potassium: 0.02 },
  cowDung: { nitrogen: 0.03, phosphorus: 0.02, potassium: 0.04 },
  pigDung: { nitrogen: 0.04, phosphorus: 0.02, potassium: 0.03 },
  oranges: { nitrogen: 0.01, phosphorus: 0.005, potassium: 0.02 }
};

// Define the target nutrient values for maize
const targetNutrients = { nitrogen: 0.03, phosphorus: 0.02, potassium: 0.04 };

// Calculate the proportions of each waste in the mixture
const proportions = {};
let totalNutrients = { nitrogen: 0, phosphorus: 0, potassium: 0 };
for (const waste in nutrientContent) {
  for (const nutrient in nutrientContent[waste]) {
    totalNutrients[nutrient] += nutrientContent[waste][nutrient];
  }
}
for (const waste in nutrientContent) {
  proportions[waste] = {};
  for (const nutrient in nutrientContent[waste]) {
    proportions[waste][nutrient] = (nutrientContent[waste][nutrient] / totalNutrients[nutrient]) * 100;
  }
}

// Output the proportions in a table
console.log("Proportions of Waste for Maize Fertilizer:");
console.log("---------------------------------------------------------");
console.log("| Waste     | Nitrogen (%) | Phosphorus (%) | Potassium (%) |");
console.log("---------------------------------------------------------");
for (const waste in proportions) {
  const { nitrogen, phosphorus, potassium } = proportions[waste];
  console.log(`| ${waste.padEnd(10)}| ${nitrogen.toFixed(2).padStart(13)} | ${phosphorus.toFixed(2).padStart(15)} | ${potassium.toFixed(2).padStart(13)} |`);
}
console.log("---------------------------------------------------------");









