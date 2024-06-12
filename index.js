const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const menu = document.querySelector(".nav-links-for-mob");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("fade-in");
  overlay.classList.remove("fade-out");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.add("fade-out");
  overlay.classList.remove("fade-in");
});
