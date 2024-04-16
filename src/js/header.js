const titleNavigation = document.querySelector('.title-navigation');
const listNavigation = document.querySelector('.list-navigation');
const linkItemNavigation = document.querySelectorAll('.link-item-navigation');

titleNavigation.addEventListener('click', titleNavigationHendler);

function titleNavigationHendler(event) {
  event.preventDefault();

  listNavigation.classList.toggle('show-menu');
}

linkItemNavigation.forEach(function (item) {
  item.addEventListener('click', function () {
    listNavigation.classList.toggle('show-menu');
  });
});

/*Section hendler mobile menu*/
const mobileMenuItems = document.querySelectorAll(
  '.link-item-navigation-mobile-menu'
);
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const burgerMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
const burgerMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const orderProjectLinkMobile = document.querySelector(
  '.link-order_project-navigation-mobile-menu'
);
const workTogetherSection = document.querySelector(
  '.link-order_project-navigation-mobile-menu'
);

burgerMenuOpenBtn.addEventListener('click', openMobileMenu);
burgerMenuCloseBtn.addEventListener('click', closeMobileMenu);

function openMobileMenu() {
  mobileMenuWrapper.classList.add('modal-open');
}

function closeMobileMenu() {
  mobileMenuWrapper.classList.remove('modal-open');
}

mobileMenuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    closeMobileMenu();
  });
});

orderProjectLinkMobile.addEventListener('click', function () {
  closeMobileMenu(); // Закриваємо мобільне меню
});

// Додаємо обробник події прокрутки для мобільної версії
window.addEventListener('touchmove' && 'scroll', function (event) {
  // Отримуємо поточну позицію прокрутки
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Перевіряємо, чи видно модальне вікно та напрямок прокрутки
  if (mobileMenuWrapper.classList.contains('modal-open') && scrollTop > lastScrollTop) {
    closeMobileMenu();
  }

  // Зберігаємо поточну позицію прокрутки
  lastScrollTop = scrollTop;
}, { passive: true });