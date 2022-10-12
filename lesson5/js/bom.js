const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// function doMyButtonThing(){}

button.addEventListener('click', () => {
	const myItem = input.value;
    input.value = '';

// Create an li (and span) element
	const listItem = document.createElement('li');
    const listText = document.createElement('span');

// Create a delete button
	const listBtn = document.createElement('button');

// Populate the li elements textContent or innerHTML with the input
    listItem.appendChild(listText);
    listText.textContent = myItem;

// Append the li element with the delete button
    listItem.appendChild(listBtn);

// Populate the button textContent with an ❌
    listBtn.textContent = "❌";

// Append the list element with the li element just created
// and appended with text and the delete button
	list.appendChild(listItem);

// Add an event listener to the delete button that removes 
// the li element when clicked
    listBtn.addEventListener('click', () => {
		list.removeChild(listItem);
	});

// Send the focus to the input element
	input.focus();

// Clean up the successful add of a chapter by changing the 
// input to nothing or the empty string and setting the focus 
// to the input
// myInput.value="";

});