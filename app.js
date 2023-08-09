// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("nav-bar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
