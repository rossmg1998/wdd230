// Pointer to JSON file
// Store the resource, the URL of the JSON file into a const variable to start
const requestURL = 'https://rossmg1998.github.io/wdd230/chamber/data.json';

// Display Table
function displayTable(company) {  // Create elements to add to the document
    let table = document.createElement('tr');

    // Change the textContent property of the td element to contain the company's full name
    let name = document.createElement('td');    
    name.textContent = `${company.name}`;

    // Change the textContent property of the td element to contain the company's local address
    let address = document.createElement('td');    
    address.textContent = `${company.address}`;

    // Change the textContent property of the td element to contain the company's local phone number
    let phone = document.createElement('td');    
    phone.textContent = `${company.phonenumber}`;

    // Change the textContent property of the a element to contain the company's website
    let website = document.createElement('a');    
    website.setAttribute('href', company.websiteurl);

    // Add/append the section(card) with the h2, p, and img elements
    table.appendChild(name);
    table.appendChild(address);
    table.appendChild(phone);
    table.appendChild(website);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('table').appendChild(table);
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
    const companies = jsonObject['companies']; 
    companies.forEach(displayTable); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time
});


// Display Cards
function displayCards(company) {  // Create elements to add to the document
    let card = document.createElement('section');

    // Change the textContent property of the img element to contain the company's img
    let img = document.createElement('img');  
    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', company.name);

    // Change the textContent property of the p element to contain the company's local address
    let address = document.createElement('p');    
    address.textContent = `${company.address}`;

    // Change the textContent property of the p element to contain the company's local phone number
    let phone = document.createElement('p');    
    phone.textContent = `${company.phonenumber}`;

    // Change the textContent property of the a element to contain the company's website
    let website = document.createElement('a');    
    website.setAttribute('href', company.websiteurl);

    // Add/append the section(card) with the img, p, and a elements
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

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
    const companies = jsonObject['companies']; 
    companies.forEach(displayCards); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time
});