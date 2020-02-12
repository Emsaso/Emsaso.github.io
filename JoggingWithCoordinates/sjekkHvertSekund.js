window.setInterval(repeatEverySecond, 1000);
let latitude = document.createElement("div");
document.body.appendChild(latitude);
let longitude = document.createElement("div");
document.body.appendChild(longitude);
let seconds = document.createElement("div");
document.body.appendChild(seconds);

let startTime = Date.now();

function repeatEverySecond() {
    let secondsSinceStart = Math.floor((Date.now() - startTime) / 1000);
    let result = getLatLonOnce(secondsSinceStart, calculateProwess("pro"), calculateRain("clearWeather"));
    latitude.innerHTML = "Lat: " + result[0];
    longitude.innerHTML = "Lon: " + result[1];
    seconds.innerHTML = "Seconds since start: " + secondsSinceStart;
}