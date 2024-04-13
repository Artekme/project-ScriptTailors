import Accordion from 'accordion-js';


const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
  showMultiple: true,
  duration: 400
});