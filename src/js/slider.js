import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        mousewheel: {
          invert: true,
        },
      });