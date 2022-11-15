// Lazy Load Images

const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const source = img.getAttribute("data-src");
    if(!source) {
        return;
    }

    img.src = source; // change the src from placeholder to data-src of image
}

const options = {
    threshold: 0.3 // 100% into viewport 
};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => {
        io.observe(image)
    });



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