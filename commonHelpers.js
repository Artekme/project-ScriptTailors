import{A as y,S as d,N as u,K as m,M as p,a as q,i as k}from"./assets/vendor-f9e3a663.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const C=document.querySelector(".title-navigation"),f=document.querySelector(".list-navigation");C.addEventListener("click",B);function B(e){e.preventDefault(),f.classList.contains("hidden")?f.classList.remove("hidden"):f.classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hero"),t=document.createElement("div");t.classList.add("blinds-container");function n(i){t.innerHTML="";for(let a=0;a<i;a++){const b=document.createElement("div");b.classList.add("blind"),t.appendChild(b)}}function r(){const i=window.innerWidth;i>=1280?n(30):i>=768?n(15):n(10)}e.appendChild(t);const o=document.createElement("style");o.textContent=`.hero {
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
    }`,document.head.appendChild(o),r(),window.addEventListener("resize",r)});const w=document.querySelectorAll(".accordion-button-icon"),L=document.querySelector(".accordion-container"),P=new y(L,{showMultiple:!0});P.open(0);L.addEventListener("click",x);function x(e){const t=e.target.closest("button");t&&t.tagName==="BUTTON"&&(t.id==="acc-first-btn"?w[0].classList.toggle("clicked"):t.id==="acc-second-btn"?w[1].classList.toggle("clicked"):t.id==="acc-third-btn"&&w[2].classList.toggle("clicked"))}const z=document.querySelector(".swiper"),M=document.querySelector(".swiper-button-next");new d(z,{modules:[u,m,p],direction:"horizontal",spaceBetween:0,navigation:{nextEl:M},slidesPerView:2,initialSlide:1,updateOnWindowResize:!0,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});new d(".projects .swiper",{modules:[u,m,p],direction:"horizontal",spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0}});const T=document.querySelector(".accordion-container");new y(T,{showMultiple:!0,duration:400});d.use([u,m,p]);let c;const N=document.querySelector(".review-list");document.addEventListener("DOMContentLoaded",function(){R()});async function O(){const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await q.get(e,{headers:{accept:"application/json"}})).data}catch{V()}}function V(e){k.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),N.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}function D({author:e,avatar_url:t,review:n}){return`<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${t}"
            alt = "review from ${e}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${e}</h3>
        <p class="reviews-paragraph">${n}</p>
    </li>`}async function R(){const t=(await O()).map(D).join(""),n=document.querySelector(".swiper-wrapper");n?(n.innerHTML=t,j()):console.log("Swiper wrapper not found")}function j(){c=new d(".swiper-container",{modules:[u,m,p],direction:"horizontal",loop:!1,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}}),h(),c.on("slideChange",()=>{h()})}function h(){let e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");c.isBeginning?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled"),c.isEnd?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled")}const S=document.querySelector("body"),A=document.querySelector(".btn-submit"),g=document.querySelector(".modal-background"),E=document.querySelector(".modal-close"),H=document.querySelector(".modal");E.addEventListener("click",l);A.addEventListener("click",e=>{const t=s.elements.email.value.trim(),n=s.elements.comments.value.trim();(!t||!n)&&(e.preventDefault(),iziToast.warning({message:"Please fill out all fields",progressBar:!1,position:"bottomCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"}))});function l(e){(e.type==="click"&&e.currentTarget===E||e.keyCode===27||e.type==="click"&&!H.contains(e.target))&&(g.classList.remove("visible"),document.removeEventListener("keydown",l),S.classList.remove("modal-open"),s.classList.remove("success-email"))}const s=document.querySelector(".footer-form"),v=document.querySelector('input[name="email"]');s.addEventListener("submit",I);function I(e){e.preventDefault();const t=e.target.email.value.trim(),n=e.target.comments.value.trim();if(t&&n){const r={email:t,comment:n};postRequestPortfolioApi(r).then(()=>{s.reset(),g.classList.add("visible"),document.addEventListener("keydown",l),g.addEventListener("click",l),S.classList.add("modal-open")}).catch(()=>{iziToast.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}}v.addEventListener("focus",()=>{s.classList.contains("success-email")&&s.classList.remove("success-email"),s.classList.contains("failed-email")&&s.classList.remove("failed-email")});v.addEventListener("blur",()=>{v.checkValidity()?s.classList.add("success-email"):s.classList.add("failed-email")});
//# sourceMappingURL=commonHelpers.js.map
