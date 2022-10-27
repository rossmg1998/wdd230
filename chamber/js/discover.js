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


// Last Visit to the Page

// window.localStorage.setItem("last-visit", new Date("09/25/2022"));

const visit = document.querySelector(".visits");

let visitMessage = "This is your first visit to the page.";
let present = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((present.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));
    visitMessage = `You last visited the page ${dateDifference} days ago.`;
}

visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", present.toString());