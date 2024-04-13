import{A as y,S as d,N as u,K as m,M as p,a as B,i as C}from"./assets/vendor-f9e3a663.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const k=document.querySelector(".title-navigation"),f=document.querySelector(".list-navigation");k.addEventListener("click",x);function x(t){t.preventDefault(),f.classList.contains("hidden")?f.classList.remove("hidden"):f.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero"),e=document.createElement("div");e.classList.add("blinds-container");function i(n){e.innerHTML="";for(let a=0;a<n;a++){const v=document.createElement("div");v.classList.add("blind"),e.appendChild(v)}}function r(){const n=window.innerWidth;n>=1280?i(30):n>=768?i(15):i(10)}t.appendChild(e);const o=document.createElement("style");o.textContent=`.hero {
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
    }`,document.head.appendChild(o),r(),window.addEventListener("resize",r)});const w=document.querySelectorAll(".accordion-button-icon"),L=document.querySelector(".accordion-container"),P=new y(L,{showMultiple:!0});P.open(0);L.addEventListener("click",O);function O(t){const e=t.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="acc-first-btn"?w[0].classList.toggle("clicked"):e.id==="acc-second-btn"?w[1].classList.toggle("clicked"):e.id==="acc-third-btn"&&w[2].classList.toggle("clicked"))}const z=document.querySelector(".swiper"),M=document.querySelector(".swiper-button-next");new d(z,{modules:[u,m,p],direction:"horizontal",spaceBetween:0,navigation:{nextEl:M},slidesPerView:2,initialSlide:1,updateOnWindowResize:!0,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});new d(".projects .swiper",{modules:[u,m,p],direction:"horizontal",spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0}});const T=document.querySelector(".accordion-container");new y(T,{showMultiple:!0,duration:400});const N=document.querySelectorAll(".marquee-inner"),S=()=>{const t=window.innerHeight/2;for(const e of N)e.getBoundingClientRect().top<t?e.classList.add("show"):e.classList.remove("show")};S();window.addEventListener("scroll",S);d.use([u,m,p]);let c;const V=document.querySelector(".review-list");document.addEventListener("DOMContentLoaded",function(){H()});async function D(){const t="https://portfolio-js.b.goit.study/api/reviews";try{return(await B.get(t,{headers:{accept:"application/json"}})).data}catch{R()}}function R(t){C.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),V.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}function A({author:t,avatar_url:e,review:i}){return`<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${e}"
            alt = "review from ${t}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${t}</h3>
        <p class="reviews-paragraph">${i}</p>
    </li>`}async function H(){const e=(await D()).map(A).join(""),i=document.querySelector(".swiper-wrapper");i?(i.innerHTML=e,j()):console.log("Swiper wrapper not found")}function j(){c=new d(".swiper-container",{modules:[u,m,p],direction:"horizontal",loop:!1,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}}),b(),c.on("slideChange",()=>{b()})}function b(){let t=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");c.isBeginning?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled"),c.isEnd?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled")}const E=document.querySelector("body"),I=document.querySelector(".btn-submit"),g=document.querySelector(".modal-background"),q=document.querySelector(".modal-close"),F=document.querySelector(".modal");q.addEventListener("click",l);I.addEventListener("click",t=>{const e=s.elements.email.value.trim(),i=s.elements.comments.value.trim();(!e||!i)&&(t.preventDefault(),iziToast.warning({message:"Please fill out all fields",progressBar:!1,position:"bottomCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"}))});function l(t){(t.type==="click"&&t.currentTarget===q||t.keyCode===27||t.type==="click"&&!F.contains(t.target))&&(g.classList.remove("visible"),document.removeEventListener("keydown",l),E.classList.remove("modal-open"),s.classList.remove("success-email"))}const s=document.querySelector(".footer-form"),h=document.querySelector('input[name="email"]');s.addEventListener("submit",W);function W(t){t.preventDefault();const e=t.target.email.value.trim(),i=t.target.comments.value.trim();if(e&&i){const r={email:e,comment:i};postRequestPortfolioApi(r).then(()=>{s.reset(),g.classList.add("visible"),document.addEventListener("keydown",l),g.addEventListener("click",l),E.classList.add("modal-open")}).catch(()=>{iziToast.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}}h.addEventListener("focus",()=>{s.classList.contains("success-email")&&s.classList.remove("success-email"),s.classList.contains("failed-email")&&s.classList.remove("failed-email")});h.addEventListener("blur",()=>{h.checkValidity()?s.classList.add("success-email"):s.classList.add("failed-email")});
//# sourceMappingURL=commonHelpers.js.map
