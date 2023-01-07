const shop = document.querySelector('.shop');
const dropdown = document.querySelector('.dropdown'); 

// shop.addEventListener('click', () => {
//   dropdown.style.left = '0%';
// })


$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});