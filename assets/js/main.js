// Fixed Navigation
const nav = document.querySelector(".nav");
window.addEventListener('scroll', () => {
  if (scrollY >= 80) {
    nav.classList.add('fixedNav');
  } else {
    nav.classList.remove('fixedNav');
  }
});


