const boxes = document.querySelector('.list-covers');
window.addEventListener('scroll', checBoxes);
const checBoxes = () => {
    const triger = window.innerHeight/2;
    for ( const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top;
        if (topOfBox < triger) {
            box.classList.add('show');
        } else { 
            box.classList.remove('show');
        }
    }
};

checBoxes();