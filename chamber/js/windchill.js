function setWindchill(temp, ws) {
    // Reference to DOM elements
    let tempObj = document.querySelector("#temp");
    let wsObj = document.querySelector("#ws");
    let wcObj = document.querySelector("#wc");

    // Calculate windspeed if necessary
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

setWindchill(49, 10);