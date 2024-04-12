import axios from "axios";
import Swiper from "swiper";
import {Navigation, Keyboard, Mousewheel} from 'swiper/modules';
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
Swiper.use([Navigation, Keyboard, Mousewheel]);


let swiper;

document.addEventListener('DOMContentLoaded', function(){
    renderReviews()
})

async function fetchReviews() {
    const url = 'https://portfolio-js.b.goit.study/api/reviews';
    try {
        const response = await axios.get(url, {
            headers: { accept: 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function renderReview({author, avatar_url, review}) {
    return `<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${avatar_url}"
            alt = "review from ${author}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${author}</h3>
        <p class="reviews-paragraph">${review}</p>
    </li>`
}

async function renderReviews() {
    const reviewsData = await fetchReviews();
    const reviewsHTML = reviewsData.map(renderReview).join("");
    const swiperWrapper = document.querySelector('.swiper-wrapper')

    if(swiperWrapper){
        swiperWrapper.innerHTML = reviewsHTML;
        initSwiper()
    }else{
        console.log("Swiper wrapper not found");
    }
    
    
}

function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        // centerInsufficientSlides: true,
        modules: [Navigation, Keyboard, Mousewheel],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1,
        spaceBetween: 16,
        // freeMode: true,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
            pageUpDown: true
        },
        mousewheel: {
            enabled: true,
            invert: true
        },
        speed: 1200,
        simulateTouch: true,
        updateOnWindowResize: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                // slidesPerGroup: 1,
                spaceBetween: 16,
                // width: '704px'
            },
            1400: {
                slidesPerView: 4,
                // slidesPerGroup: 1,
                spaceBetween: 16,
                // width: '1376px'
            }
        },
        // breakpointsBase: 'container',
        
})
    updateNavigationButtons();

    swiper.on('slideChange', ()=> {
        updateNavigationButtons()
    })
}

function updateNavigationButtons(){
    let prevButton = document.querySelector('.swiper-button-prev');
    let nextButton = document.querySelector('.swiper-button-next');
    if (swiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
    } else {
        prevButton.classList.remove('swiper-button-disabled');
    }
    if (swiper.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
    } else {
        nextButton.classList.remove('swiper-button-disabled');
    }
}



