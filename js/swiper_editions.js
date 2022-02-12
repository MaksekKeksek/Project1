const swiperMy = new Swiper('.section-editions__swiper', {

  autoHeight: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

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
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 4,
      },
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    1621: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
