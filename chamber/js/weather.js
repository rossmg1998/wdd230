function setWindchill(temp, ws) {
    // Reference to DOM elements
    let tempObj = document.querySelector("#temp");
    let wsObj = document.querySelector("#ws");
    let wcObj = document.querySelector("#wc");

    // Calculate wind speed if necessary
    let wcMsg = "N/A";

    if (temp <= 50 && ws > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));
        wcMsg = `${chill}&deg; F`;
    }

    // Populate the DOM
    tempObj.textContent = temp;
    wsObj.textContent = ws;
    wcObj.innerHTML = wcMsg;
}

// Comment out later
// setWindchill(49, 10);


const LAT = "36.2695";
const LON = "-95.8547";
const APIKEY = "eb22837494a17e8cbf77eb2a0275a86e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
    
function showWeather(obj){
    let currenttemp = document.querySelector("#temp");
    let iconpath = document.querySelector("#icon-src");
    let weathericon = document.querySelector("#weathericon");
    let figurecaption = document.querySelector("figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = Math.round(obj.main.temp);
    // iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt",obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
    setWindchill(obj.main.temp, obj.wind.speed);
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
});