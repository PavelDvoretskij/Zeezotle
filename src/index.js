import "./index.html";
import "./index.scss";
import "./js/form";
import "./js/modal";
import "./js/mobMenu";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },

  slidesPerView: 1,
});

const swiper2 = new Swiper(".gallery__swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },

  centeredSlides: true,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});
