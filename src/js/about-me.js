import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import Accordion from 'accordion-js';


const iconList = document.querySelectorAll('.accordion-button-icon');
const accordion = document.querySelector('.accordion-container');

const accordionBySection = new Accordion(accordion, {
  showMultiple: true,
});
accordionBySection.open(0);


accordion.addEventListener("click", rotateIcon);
function rotateIcon(e) {
  const btn = e.target.closest("button");
  if (btn && btn.tagName === 'BUTTON') {
    if (btn.id === "acc-first-btn") {
      iconList[0].classList.toggle('clicked');
    } else if
      (btn.id === "acc-second-btn") {
      iconList[1].classList.toggle('clicked');
    } else if
      (btn.id === "acc-third-btn") {
      iconList[2].classList.toggle('clicked');
    }
  } 
}

const swiperEl = document.querySelector('.swiper-container');
const buttonEl = document.querySelector('.swiper-button-next');

const swiper = new Swiper(swiperEl, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    },
  slidesPerView: 2,
  initialSlide: 1,
  updateOnWindowResize: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  allowTouchMove: true,
  followFinger: true,
  simulateTouch: true,
});


