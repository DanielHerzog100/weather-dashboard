var apiKey = "051fc8dd93f8f02bd1aa6c78e2aaff5e";
var url = (cityName) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

$(document).ready(function () {
  $("#submit-btn").click(function () {
    var city = $("#city-input").val();
    fetch(url(city))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dataGrabber(data);
      });
  });
});

function dataGrabber(dataObject) {
  // Filtering through the list to get one entry for each day
  var forecast = [];
  var today = new Date();
  for (var i = 0; i <= 5; i++) {
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    for (var listi = 0; listi < dataObject.list.length; listi++) {
      var entry = dataObject.list[listi];
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
    today.setDate(today.getDate() + 1);
  }
  console.log(forecast)
}
