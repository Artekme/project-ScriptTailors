import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import Accordion from 'accordion-js';

const iconListByAccordion = document.querySelectorAll('.accordion-button-icon-about-me');
const myAccordion = document.querySelector('.accordion-container-about-me');
const accordionBySection = new Accordion(myAccordion, {
  showMultiple: true,
  duration: 250
});

accordionBySection.open(0);
myAccordion.addEventListener("click", rotateIcon);
function rotateIcon(e) {
  const btn = e.target.closest("button");
  if (btn && btn.tagName === 'BUTTON') {
    if (btn.id === "ac-trigger-0") {
      iconListByAccordion[0].classList.toggle('clicked');
    } else if
    (btn.id === "ac-trigger-1") {
      iconListByAccordion[1].classList.toggle('clicked');
    } else if
    (btn.id === "ac-trigger-2") {
      iconListByAccordion[2].classList.toggle('clicked');
    }
  }
}
const swiperEl = document.querySelector('.swiper2');
const buttonEl = document.querySelector('.swiper-button-next-about-me');
const swiperBySection = new Swiper(swiperEl, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
    nextEl: buttonEl,
  },
  slidesPerView: 2,
  initialSlide: 0,
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

