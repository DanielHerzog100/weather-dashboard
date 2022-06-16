$(document).ready(
    function() {
$(".btn").click(function() {
console.log("hello")
})
    
})

var url = 'http://api.openweathermap.org/geo/1.0/direct?q={country code}&limit={limit}&appid={157d4a2241e5468c370d3ce08422061e}

fetch(url)
.then(response => response.json())
.then(data => {
    dataGrabber (data.response)
});

function dataGrabber (dataObject) {
var longitude = dataObject.lon;
var latitude =dataObject.lat;

let weatherUrl = 
fetch (weatherUrl)
.then(response => response.json())
.then(data => {
dataGrabber (data.response)

})};
