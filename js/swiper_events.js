const mySwiper = new Swiper('.section-events__swiper', {

  autoHeight: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // spaceBetween: 50,

  slidesPerView: 3,

  slidesPerGroup: 3,

  // grid: {
  //   rows: 3,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 27,
      // grid: {
      //   rows: 1,
      // },
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

