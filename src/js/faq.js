import Accordion from 'accordion-js';

const iconListByAccFaq = document.querySelectorAll('.icon-arrow-down');
const containerAccFaq = document.querySelector('.faq .accordion-container');
const accordionFaq = new Accordion(containerAccFaq, {
  showMultiple: true,
  duration: 250
});

containerAccFaq.addEventListener("click", rotateIconFaq);
function rotateIconFaq(e) {
  const btn = e.target.closest("button");
  if (btn && btn.tagName === 'BUTTON') {
    if (btn.id === "ac-trigger-6") {
      iconListByAccFaq[3].classList.toggle('clicked');
    } else if
      (btn.id === "ac-trigger-7") {
      iconListByAccFaq[4].classList.toggle('clicked');
    } else if
      (btn.id === "ac-trigger-8") {
      iconListByAccFaq[5].classList.toggle('clicked');
    } else if
      (btn.id === "ac-trigger-3") {
      iconListByAccFaq[0].classList.toggle('clicked');
    } else if
      (btn.id === "ac-trigger-4") {
      iconListByAccFaq[1].classList.toggle('clicked');
    } else if
      (btn.id === "ac-trigger-5") {
      iconListByAccFaq[2].classList.toggle('clicked');
    }
  }
}