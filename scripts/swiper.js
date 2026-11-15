const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints:{
    768:{
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1152:{
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});
