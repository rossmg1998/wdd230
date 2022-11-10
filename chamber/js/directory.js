let cardselector = document.querySelector("#cardselect");
let tableselector = document.querySelector("#tableselect");
let cardview = document.querySelector("#cardview");
let tableview = document.querySelector("#tableview");

cardselector.addEventListener("click", ()=> {
    cardview.style.display="grid";
    tableview.style.display="none";
    cardselector.style.opacity=1.0;
    tableselector.style.opacity=0.5;
});

tableselector.addEventListener("click", ()=> {
    cardview.style.display="none";
    tableview.style.display="block";
    cardselector.style.opacity=0.5;
    tableselector.style.opacity=1.0;
});

// Display Table
function displayTable(company) {  // Create elements to add to the document
    let table = document.createElement("tr");
    table.innerHTML=`<td>${company.name}</td>
    <td>${company.address} ${company.citystatezip}</td>
    <td>${company.phonenumber}</td>
    <td><a href="${company.websiteurl}">${company.websiteurl}</a></td>`;

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#tableview table').appendChild(table);
  }


// Display Cards
function displayCard(company) {  // Create elements to add to the document
    let card = document.createElement("div");
    card.innerHTML=`<img src="${company.imageurl}">
        <p>${company.address}<br>${company.citystatezip}</p>
        <p>${company.phonenumber}</p>
        <p><a href="${company.websiteurl}">${company.websiteurl}</a></p>`;
    cardview.appendChild(card);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cardview').appendChild(card);
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
        const companies = jsonObject['companies']; 
        companies.forEach(displayCard); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time
        companies.forEach(displayTable); 
    });