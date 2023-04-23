import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
         
        },
  pagination: {
    el: '.slider-numbers',
    type: 'fraction',
        },
        mousewheel: {
          invert: true,
        },
      });