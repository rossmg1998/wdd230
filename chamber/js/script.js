function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const date_area = document.querySelector('#todaydate')
const date_now = new Date();
const full_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(date_now);
date_area.innerHTML = `<em>${full_date}</em>`

msg = document.querySelector("#msg-box")
date = new Date()
day = date.getDay()

if (day == 1 || day == 2) {

msg.style.display = "block"

}

const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;