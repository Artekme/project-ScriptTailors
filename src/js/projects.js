// import Swiper JS
import Swiper from 'swiper';

import {
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCreative,
  Parallax,
} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.projects .swiper', {
  slidesPerView: 1,
  speed: 1200,
  direction: 'horizontal',
  spaceBetween: 32,
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },

  modules: [Navigation, Keyboard, Mousewheel, EffectCreative, Parallax],

  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,

    onlyInViewport: true,
  },

  effect: 'creative',
  creativeEffect: {
    limitProgress: 1,
    perspective: true,
    progressMultiplier: 1,
    shadowPerProgress: false,
    next: {
      translate: ['120%', 0, 0],
      rotate: [0, 0, 15],
      scale: 0.5,
      origin: 'center center',
    },
    prev: {
      translate: ['-120%', 0, 0],
      rotate: [0, 0, -15],
      scale: 0.5,
      origin: 'center center',
    },
  },

  parallax: true,
});
