// Display Cards
function displayTemple(temple) {  // Create elements to add to the document
    let card = document.createElement("section");

    let name = document.createElement('h2');
    name.textContent = `${temple.name}`;

    let img = document.createElement('img');  
    img.setAttribute('src', temple.imageurl);
    img.setAttribute('alt', temple.name);

    let address = document.createElement('p'); 
    address.textContent = `${temple.address} ${temple.citystatezip}`;

    let telephone = document.createElement('p'); 
    telephone.textContent = `${temple.telephone}`;

    let service = document.createElement('ul');
    service.textContent = `Services: `;

    let service0 = document.createElement('li');
    service0.textContent = `${temple.services[0]}`;

    let service1 = document.createElement('li');
    service1.textContent = `${temple.services[1]}`;

    let service2 = document.createElement('li');
    service2.textContent = `${temple.services[2]}`;

    let service3 = document.createElement('li');
    service3.textContent = `${temple.services[3]}`;

    let closedate = document.createElement('ul');
    closedate.textContent = `Temple Closures: `;

    let closedate0 = document.createElement('li');
    closedate0.textContent = `${temple.closurechedule[0]}`;

    let closedate1 = document.createElement('li');
    closedate1.textContent = `${temple.closurechedule[1]}`;

    let milestone = document.createElement('ul');
    milestone.textContent = `Milestones: `;

    let announced = document.createElement('li');
    announced.textContent = `${temple.milestones[0]}`;

    let groundbreak = document.createElement('li');
    groundbreak.textContent = `${temple.milestones[1]}`;

    let dedicated = document.createElement('li');
    dedicated.textContent = `${temple.milestones[2]}`;

    // Add/append the section(card) with each of the elements
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(telephone);

    card.appendChild(service);
    card.appendChild(service0);
    card.appendChild(service1);
    card.appendChild(service2);
    card.appendChild(service3);

    card.appendChild(closedate);
    card.appendChild(closedate0);
    card.appendChild(closedate1);

    card.appendChild(milestone);
    card.appendChild(announced);
    card.appendChild(groundbreak);
    card.appendChild(dedicated);

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
    console.log(temples);
    temples.forEach(displayTemple); // In order to produce the output, loop through every record and process each one into its own 'card' (HTML output), one at a time 
});