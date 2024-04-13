document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const blindsContainer = document.createElement('div');
    blindsContainer.classList.add('blinds-container');

    // Функція для створення жалюзі
    function createBlinds(numberOfBlinds) {
        blindsContainer.innerHTML = ''; // Очищення попередніх жалюзі
        for (let i = 0; i < numberOfBlinds; i++) {
            const blind = document.createElement('div');
            blind.classList.add('blind');
            blindsContainer.appendChild(blind);
        }
    }


    // Визначення кількості жалюзі в залежності від ширини екрану
    function adjustBlindsForScreenSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1280) { // Для desktop екранів
            createBlinds(30); // Кількість жалюзі для desktop
        } else if (screenWidth >= 768) { // Для tablet екранів
            createBlinds(15); // Кількість жалюзі для tablet
        } else { // Для mobile екранів
            createBlinds(10); // Кількість жалюзі для mobile
        }
    }

    hero.appendChild(blindsContainer);


    // Додавання стилів для жалюзі
    const style = document.createElement('style');
    style.textContent =
        `.hero {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .blinds-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      pointer-events: none;
    }

    .blind {
      background-image:linear-gradient(90deg,
      rgba(105, 41, 45, 0.95),
      rgba(237, 59, 68, 0.65));
      flex: 1;
      opacity: 100%;
      margin-left: 2px;
      transition: transform 0.5s ease;
      transform-origin: right;
      pointer-events: auto;
    }

    .hero:hover .blind {
      transform: scaleX(0);
      transition-duration: 500ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }`;

    document.head.appendChild(style);


    // Виклик функції при завантаженні сторінки
    adjustBlindsForScreenSize();


    // Виклик функції при зміні розміру вікна
    window.addEventListener('resize', adjustBlindsForScreenSize);
});