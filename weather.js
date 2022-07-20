// const city = document.getElementById("cityName")
// const temperature = document.getElementById("temp")
// const sky = document.getElementById("sky")
// const wind = document.getElementById("wind")
// const desc = document.getElementById("desc")
// const submit = document.getElementById("submit")

// submit.addEventListener("click", function(event) {
//      console.log("clicked")})

// let weather = {
//      api_key : "245679502405a3c9223df03491dcd799"
//      }
// fetchWeather = (city) => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key"`)
//     .then((response) => response.json())
//     .then((data) =>this.displayWeather(data));

//   displayWeather: (data) => {
//     const { name } = data;
//     const { desc } = data.weather;
//     const { sky } = data.sky;
//     const { wind } = data.wind;
//     const { temp } = data.temperature;
//     console.log(name, desc, temp, wind);
//   };
//   city.innerHTML = "Weather in " + data.city;
//   temp.innerHTML = data.temperature;
//   sky.innerHTML = data.sky;
//   wind.innerHTML = data.wind;
//   desc.innerHTML = data.description;
// };
