// Display/declare all DOM elements
const city = document.getElementById("cityName");
const temperature = document.getElementById("temp");
const sky = document.getElementById("sky");
const icon = document.getElementById("icon");
const wind = document.getElementById("wind");
const desc = document.getElementById("desc");
const submit = document.getElementById("submit");
const searchEnter = document.getElementById("input");
// Adding event listeners to the input bar

searchEnter.addEventListener("keypress", stash);
function stash(e) {
  console.log("stashed!");
  if (e.keyCode == 13) {
    getData(searchEnter.value);
  }
}
// Adding event listeners to the submit button

submit.addEventListener("click", block);
function block(value) {
  console.log("submit clicked");
  getData();
}
//fetching data from the API

function getData(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=" +value+ "&appid=245679502405a3c9223df03491dcd799`
  )
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = "Weather in " + data.city;
      temp.innerHTML = "temperature: " + data.temperature;
      sky.innerHTML = "Sky: " + data.sky;
      icon.textContent = data.icon;
      wind.innerHTML = "Wind Speed: " + data.wind;
      desc.innerHTML = data.description;
    })
    .catch((err) => console.log("error"));
}
