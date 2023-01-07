// Fixed Navigation
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (scrollY >= 80) {
    nav.classList.add("fixedNav");
  } else {
    nav.classList.remove("fixedNav");
  }
});

// Navigation Toggle
const navMenu = document.getElementById("nav-menu");
const toggleBtn = document.querySelector(".toggleBtn");
const toggleIcon = document.querySelector(".toggle__icon");
console.log(toggleIcon);

toggleBtn.addEventListener("click", () => {
  if (toggleIcon.className == 'bx bx-menu toggle__icon') {
    toggleIcon.className = "bx bx-x toggle__icon";
    navMenu.style.width = '100%';
    navMenu.style.left = '0';
    navMenu.style.paddingLeft = '5vw';
  } else {
    toggleIcon.className = "bx bx-menu toggle__icon";
    navMenu.style.width = '0';
    navMenu.style.left = '-20%';
    navMenu.style.paddingLeft = '0';
  }
});
