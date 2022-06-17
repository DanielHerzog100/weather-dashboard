var apiKey = "051fc8dd93f8f02bd1aa6c78e2aaff5e";
var url = (cityName) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;

  var currentEL = document.querySelector("#city-card")

$(document).ready(function () {
  $("#submit-btn").click(function () {
    var city = $("#city-input").val();
    fetch(url(city))
      .then((response) => response.json())
      .then((data) => {
    getWeather(data[0])
      });
  });
}); 

function getWeather(data) {
  var lat = data.lat 
  var long = data.lon
  var city = data.name
  var url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
fetch(url)
.then((response) => response.json())
      .then((data) => {
        console.log(data);
currentWeather(city,data)
    
      })
}

function dataGrabber(city,dataObject) {
  // Filtering through the list to get one entry for each day
  var forecast = [];
  var today = new Date();
  for (var i = 0; i <= 5; i++) {
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    for (var listi = 0; listi < dataObject.daily.length-4; listi++) {
      var entry = dataObject.daily[listi];
      var entryDate = new Date(entry.dt * 1000);
      if (
        entryDate.getFullYear() === year &&
        entryDate.getMonth() === month &&
        entryDate.getDate() === date
      ) {
        forecast.push(entry);
        break;
      }
    }
    today.setDate(today.getDate());
  }
  console.log(forecast)
}

function currentWeather(city,dataObject) {
var tempEl = document.createElement("p")
var windEl = document.createElement("p")
var humidityEl = document.createElement("p")
var uviEl = document.createElement("p")
tempEl.textContent = dataObject.current.temp
windEl.textContent = dataObject.current.wind_speed
humidityEl.textContent = dataObject.current.humidity
uviEl.textContent = dataObject.current.uvi 
currentEL.append(tempEl, windEl,humidityEl,uviEl)
futureWeather(city, dataObject) 
}

function futureWeather(city,dataObject) {
var day2Temp = document.createElement("p")
var day2windEl = document.createElement("p")
var day2humidity = document.createElement("p")
var uviEl = document


ar day3Temp =document.createElement("p")

day2Temp.textContent = dataObject.daily[0].temp

}





