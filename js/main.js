const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;

// const lastModified = new Date(document.lastModified);
// document.getElementById("lastupdatedate").textContent = `${lastModified.getDate()}/${lastModified.getMonth()}/${lastModified.getFullYear()}`;