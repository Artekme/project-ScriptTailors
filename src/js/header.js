const titleNavigation = document.querySelector('.title-navigation');
const listNavigation = document.querySelector('.list-navigation');

titleNavigation.addEventListener('click', titleNavigationHendler);

function titleNavigationHendler(event) {
  event.preventDefault();
  if (listNavigation.classList.contains('hidden')) {
    listNavigation.classList.remove('hidden');
  } else {
    listNavigation.classList.add('hidden');
  }
}
