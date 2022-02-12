const swiper = new Swiper('.section-gallery__swiper', {

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

  grid: {
    rows: 2,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      grid: {
        rows: 1,
      },
    },

    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1600: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
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

