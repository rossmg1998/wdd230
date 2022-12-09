// Display Cards
function displayTemple(temple) {  
    // Create elements to add to the document
    let card = document.createElement("section");

    // Change the textContent property of the h2 element to contain the full name of the temple
    let name = document.createElement('h2');
    name.textContent = `${temple.name}`;

    // Change the textContent property of the img element to contain the temple img
    let img = document.createElement('img');  
    img.setAttribute('src', temple.imageurl);
    img.setAttribute('alt', temple.name);

    // Change the textContent property of the p element to contain temple address
    let address = document.createElement('p'); 
    address.textContent = `${temple.address} ${temple.citystatezip}`;

    // Change the textContent property of the p element to contain temple phone number
    let telephone = document.createElement('p'); 
    telephone.textContent = `${temple.telephone}`;

    // Change the textContent property of the ul and li elements to contain the list of temple services
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

    // Change the textContent property of the ul and li elements to contain the list of temple closures
    let closedate = document.createElement('ul');
    closedate.textContent = `Temple Closures: `;

    let closedate0 = document.createElement('li');
    closedate0.textContent = `${temple.closurechedule[0]}`;

    let closedate1 = document.createElement('li');
    closedate1.textContent = `${temple.closurechedule[1]}`;

    // Change the textContent property of the ul and li elements to contain the list of temple milestones
    let milestone = document.createElement('ul');
    milestone.textContent = `Milestones: `;

    // Change the textContent property of the temple announced date
    let announced = document.createElement('li');
    announced.textContent = `${temple.milestones[0]}`;

    // Change the textContent property of the temple groundbreaking date
    let groundbreak = document.createElement('li');
    groundbreak.textContent = `${temple.milestones[1]}`;

    // Change the textContent property of the temple dedication date
    let dedicated = document.createElement('li');
    dedicated.textContent = `${temple.milestones[2]}`;

    let templelike = document.createElement('input');
    templelike.setAttribute('type', 'checkbox');
    templelike.id='check-${temple.id}';
    templelike.setAttribute('onclick', 'likeTemple(this)');

    let templeliketext = document.createElement('label');
    templeliketext.textContent = 'Like This Temple';

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

    card.appendChild(templelike);
    card.appendChild(templeliketext);

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
})
.then(()=>{
    // Turn the string value from local storage into a Java array
    let likeslist = JSON.parse(likes_string);
    likeslist.forEach(displayLike);
});


// LocaleStorage

// Check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// Upon page reload, the list of individual items (by id) is checked.
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

