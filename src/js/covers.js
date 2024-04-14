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