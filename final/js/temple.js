// Display Cards
function displayCard(temple) {  // Create elements to add to the document
    let card = document.createElement("div");
    card.innerHTML=`<img src="${temple.imageurl}">
        <p>${temple.address}<br>${temple.citystatezip}</p>
        <p>${temple.phonenumber}</p>
        <p><a href="${temple.websiteurl}">${temple.websiteurl}</a></p>`;
    card.appendChild(card);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }

// Pointer to JSON file
// Store the resource, the URL of the JSON file into a const variable to start
const requestURL = 'https://rossmg1998.github.io/wdd230/chamber/data.json';

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