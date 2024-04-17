const titleNavigation = document.querySelectorAll('.menu-trigger');
const mobileMenuWrapper = document.body;

titleNavigation.forEach(function (item) {
  item.addEventListener('click', function (event) {
    menuToggler(event);
  });
});

function menuToggler(event) {
  mobileMenuWrapper.classList.toggle('show-menu');
}

//Додамо обробник кліків на всю сторінку
document.addEventListener('click', function (event) {
  // Перевіряємо, чи клікнули не на елемент меню або кнопки відкриття/закриття меню
  if (
    !event.target.closest('.title-navigation') &&
    !event.target.closest('.link-item-navigation') &&
    mobileMenuWrapper.classList.contains('show-menu') &&
    !event.target.closest('.menu-trigger')
  ) {
    menuToggler(event);
  }
});

// Додаємо обробник події прокрутки для мобільної версії
window.addEventListener('touchmove' && 'scroll', function (event) {
  mobileMenuWrapper.classList.remove('show-menu');
});
