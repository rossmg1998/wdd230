// Lazy Load Images

// Gather the images to load
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Set up the load images function which switches the src and the data-src attributes
const loadImages = (image) => {
image.setAttribute("src", image.getAttribute("data-src"));
image.onload = () => {
    image.removeAttribute("data-src");
};
};

// Load all the images
//imagesToLoad.forEach((img) => {
//loadImages(img);
//});

// Add an intersection observer if supported by the browser
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}

// If the browser doesn't support intersection observers, then just load the images
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
});
}


// Number of Visits

// Initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// Get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// Increment the number of visits.
numVisits++;
// Store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// Show todays date.
todayDisplay.textContent = Date.now();