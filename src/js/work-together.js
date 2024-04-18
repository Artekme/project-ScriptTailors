import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import axios from 'axios';
// DOM Elements
const body = document.querySelector('body');
const modalBack = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close-btn');
const btnSubmit = document.querySelector('.btn-submit');
const form = document.querySelector('.footer-form');
const emailInput = document.querySelector('input[name="email"]');

// Event Listeners
modalClose.addEventListener('click', closeModal);
modalBack.addEventListener('click', closeModal);
btnSubmit.addEventListener('click', handleSubmit);
emailInput.addEventListener('focus', handleEmailFocus);
emailInput.addEventListener('blur', handleEmailBlur);

// Functions
function handleSubmit(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value.trim();
  const userComment = form.elements.comments.value.trim();

  if (userEmail && userComment) {
    const options = { email: userEmail, comment: userComment };
    postRequestPortfolioApi(options)
      .then(() => {
        form.reset(); // Clear input fields
        showModal();
      })
      .catch(() => {
        showErrorToast();
      });
  } else {
    showWarningToast();
  }
}
function closeModal(ev) {
  if (
    (ev.type === 'click' && ev.currentTarget === modalClose) ||
    ev.keyCode === 27 ||
    (ev.type === 'click' && !modal.contains(ev.target))
  ) {
    modalBack.classList.remove('visible');
    document.removeEventListener('keydown', closeModal);
    body.classList.remove('modal-open');
    form.classList.remove('success-email');
  }
}

function showModal() {
  modalBack.classList.add('visible');
  body.classList.add('modal-open');
  modal.classList.add('visible');
}

function handleEmailFocus() {
  if (form.classList.contains('success-email')) {
    form.classList.remove('success-email');
  }
  if (form.classList.contains('failed-email')) {
    form.classList.remove('failed-email');
  }
}

function handleEmailBlur() {
  if (emailInput.checkValidity()) {
    form.classList.add('success-email');
  } else {
    form.classList.add('failed-email');
  }
}

async function postRequestPortfolioApi(data) {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function showWarningToast() {
  iziToast.warning({
    message: 'Please fill out all fields',
    progressBar: false,
    position: 'bottomCenter',
    color: '#1c1d20',
    messageColor: '#fafafa',
    titleColor: '#fafafa',
  });
}

function showErrorToast() {
  iziToast.error({
    title: 'Oops!',
    message: 'Something went wrong',
    progressBar: false,
    position: 'topCenter',
    color: '#1c1d20',
    messageColor: '#fafafa',
    titleColor: '#fafafa',
  });
}
