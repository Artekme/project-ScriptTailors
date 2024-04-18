import axios from "axios";
import Swiper from "swiper";
import {Navigation, Keyboard, Mousewheel} from 'swiper/modules';
import 'swiper/css'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let swiper;
const reviewsList = document.querySelector('.review-list')

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
        handleError(error);
    }
}

function handleError(error) {
    iziToast.show({
        fontSize: 'large',
        position: 'topRight',
        messageColor: 'white',
        timeout: 6000,
        backgroundColor: '#ED3B44',
        theme: 'dark',
        progressBar: false,
        message: 'Something went wrong',
    });
    reviewsList.insertAdjacentHTML("beforeend", `<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`);
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
    const swiperWrapper = document.querySelector('.reviews .swiper-wrapper')

    if(swiperWrapper){
        swiperWrapper.innerHTML = reviewsHTML;
        initSwiper()
    }else{
        console.log("Swiper wrapper not found");
    }
    
    
}

function initSwiper() {
    swiper = new Swiper('.reviews .swiper-container', {
        modules: [Navigation, Keyboard, Mousewheel],
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        navigation: {
            nextEl: '.reviews .swiper-button-next',
            prevEl: '.reviews .swiper-button-prev'
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
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
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            1440: {
                slidesPerView: 4,
                slidesPerGroup: 1,
            }
        }
        
});

    swiper.on('slideChange', ()=> {
        updateNavigationButtons()
    })
}

function updateNavigationButtons(){
    let prevButton = document.querySelector('.reviews .swiper-button-prev');
    let nextButton = document.querySelector('.reviews .swiper-button-next');
    prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
}



