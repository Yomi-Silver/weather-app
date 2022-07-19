const city = document.getElementById("cityName")
const temperature = document.getElementById("temp")
const sky = document.getElementById("sky")
const wind = document.getElementById("wind")
const desc = document.getElementById("desc")
submit = document.getElementById("submit")
const api_key = "245679502405a3c9223df03491dcd799"
//call a function for the clicked button


submit.addEventListener("click", function(event) {
     console.log("clicked")})

  
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${"245679502405a3c9223df03491dcd799"}`)
// .then((res =>  response.json))


fetchWeather = () => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key"`)
.then((response) => response.json())
.then((data) => {
     console.log("data")
     city.innerHTML = data.city
     temperature.innerHTML = data.city
     sky.innerHTML = data.sky
     wind.innerHTML = data.wind
     desc.innerHTML = data.description
}
) }









// fetch weather data from api
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`)
//      .then(response => response.json())
//      .then(data =>{
//           temperature.innerHTML = `${Math.round(tempF)}&deg;`
//           wind.innerHTML = `${Math.round(windSpeed)} mph`
//      })
     // create new variable called Temped



