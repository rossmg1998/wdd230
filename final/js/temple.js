// Display Cards
function displayCard(temple) {  // Create elements to add to the document
    let card = document.createElement("div");
    card.innerHTML= `<h2>${temple.name}</h2>
        <img src="${temple.imageurl}">
        <h3>${temple.address}<br>${temple.citystatezip}</h3>
        <h3>${temple.telephone}</h3>
        <h3>${temple.services}</h3>
        <h3>${temple.closurechedule}</h3>
        <h3>${temple.milestones}</h3>`;
    card.appendChild(card);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }

// Pointer to JSON file
// Store the resource, the URL of the JSON file into a const variable to start
const requestURL = 'https://rossmg1998.github.io/wdd230/final/temple.json';

    // Gets the information from the JSON file into the required argument
    fetch(requestURL)

    // Returns a Promise which response to work with as an argument to an anonymous function
    .then(function (response) {
        return response.json();
    })

    // Setup to work with the converted response data in JavaScript object format
    .then(function (jsonObject) {
        console.table(jsonObject);  // Temporary checking for valid response and data parsing
        const temples = jsonObject['temples']; 
        temples.forEach(displayCard); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time 
    });