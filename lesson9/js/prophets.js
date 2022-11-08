// Pointer to JSON file
// Store the resource, the URL of the JSON file into a const variable to start
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');

    // Change the textContent property of the h2 element to contain the prophet's full name
    let h2 = document.createElement('h2');    
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Change the textContent property of the p element to contain the prophet's dob
    let dob = document.createElement('p');    
    dob.textContent = `Date of Birth: ${prophet.birthdate}`;

    // Change the textContent property of the p element to contain the prophet's pob
    let pob = document.createElement('p');    
    pob.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Change the textContent property of the img element to contain the prophet's img
    let img = document.createElement('img');  
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', prophet.name + ' ' + prophet.lastname + ' - ' + prophet.order);

    // Add/append the section(card) with the h2, p, and img elements
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

// Gets the information from the JSON file into the required argument
fetch(requestURL)

// Returns a Promise which response to work with as an argument to an anonymous function
.then(function (response) {
    return response.json();
})

// Setup to work with the converted response data in JavaScript object format
.then(function (jsonObject) {
    console.table(jsonObject);  // Temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets']; 
    prophets.forEach(displayProphets); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time
});