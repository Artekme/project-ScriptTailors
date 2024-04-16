const boxes = document.querySelectorAll('.marquee-inner');



const checBoxes = () => {
    const trigger = window.innerHeight/2;
    for ( const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top;
        if (topOfBox < trigger) {
            box.classList.add('show');
        } else { 
            box.classList.remove('show');
        }
    }
};

checBoxes();

window.addEventListener('scroll', checBoxes);


window.addEventListener('load', function () {
      const marquee = selector => {
      const parentSelector = document.querySelector(selector);
      const clone = parentSelector.innerHTML;
      parentSelector.insertAdjacentHTML('afterbegin', clone);
      parentSelector.insertAdjacentHTML('afterbegin', clone);
      parentSelector.insertAdjacentHTML('afterbegin', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          parentSelector.classList.add('marquee');
        } else {
          parentSelector.classList.remove('marquee');
        }
      });
      observer.observe(parentSelector);
    };
  
    marquee('.list-covers');
});
