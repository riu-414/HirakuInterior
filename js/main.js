'use strict'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.0,
  spaceBetween: 19,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3.5,
    }
  }

});