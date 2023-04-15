import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
});