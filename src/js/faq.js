import Accordion from 'accordion-js';


const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
  showMultiple: true,
  duration: 400
});

accordion.addEventListener("click", rotateIcon);
function rotateIcon(e) {
  const btn = e.target.closest("button");
  if (btn && btn.tagName === 'BUTTON') {
    if (btn.id === "acc-first-btn-faq") {
      iconList[0].classList.toggle('clicked');
    } else if
      (btn.id === "acc-second-btn-faq") {
      iconList[1].classList.toggle('clicked');
    } else if
      (btn.id === "acc-third-btn-faq") {
      iconList[2].classList.toggle('clicked');
    } else if
      (btn.id === "acc-fourth-btn-faq") {
      iconList[3].classList.toggle('clicked');
    } else if
      (btn.id === "acc-fifth-btn-faq") {
      iconList[4].classList.toggle('clicked');
    } else if
      (btn.id === "acc-sixth-btn-faq") {
      iconList[5].classList.toggle('clicked');
    }
  }
}