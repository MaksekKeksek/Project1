const swiperP = new Swiper('.proj', {

  autoHeight: false,

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    enabled: 'true',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },


  spaceBetween: 50,

  slidesPerView: 3,

  slidesPerGroup: 3,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    1600: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
