import{A,S,N as E,K as q,M,E as _,P as Y,a as x,i as k}from"./assets/vendor-deff1ef9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const J=document.querySelector(".title-navigation"),I=document.querySelector(".list-navigation"),Q=document.querySelectorAll(".link-item-navigation");J.addEventListener("click",X);function X(e){e.preventDefault(),I.classList.toggle("show-menu")}Q.forEach(function(e){e.addEventListener("click",function(){I.classList.toggle("show-menu")})});const Z=document.querySelectorAll(".link-item-navigation-mobile-menu"),P=document.querySelector(".mobile-menu-wrapper"),ee=document.querySelector(".mobile-menu-open-btn"),te=document.querySelector(".mobile-menu-close-btn"),ne=document.querySelector(".link-order_project-navigation-mobile-menu");document.querySelector(".link-order_project-navigation-mobile-menu");ee.addEventListener("click",oe);te.addEventListener("click",g);function oe(){P.classList.add("modal-open")}function g(){P.classList.remove("modal-open")}Z.forEach(function(e){e.addEventListener("click",function(){g()})});ne.addEventListener("click",function(){g()});window.addEventListener("scroll",function(e){let t=window.pageYOffset||document.documentElement.scrollTop;P.classList.contains("modal-open")&&t>lastScrollTop&&g(),lastScrollTop=t},{passive:!0});function re(e){const t=parseInt(e.slice(1),16),n=t>>16&255,r=t>>8&255,o=t&255;return Math.sqrt(.299*n*n+.587*r*r+.114*o*o)>200}function se(e){const t=parseInt(e.slice(1),16),n=t>>16&255,r=t>>8&255,o=t&255,s=Math.max(n,r,o),c=Math.min(n,r,o);return s-c<15}function ie(e){if(re(e)||se(e)){const t=parseInt(e.slice(1),16);let n=(t>>16&255)+20,r=(t>>8&255)+20,o=(t&255)+20;return n=Math.min(255,n),r=Math.min(255,r),o=Math.min(255,o),n=Math.round(n).toString(16).padStart(2,"0"),r=Math.round(r).toString(16).padStart(2,"0"),o=Math.round(o).toString(16).padStart(2,"0"),`#${n}${r}${o}`}return e}function w(e,t,n){return e+(t-e)*n}function j(e,t,n){const r=parseInt(e.slice(1),16),o=parseInt(t.slice(1),16),s=r>>16&255,c=r>>8&255,R=r&255,F=o>>16&255,G=o>>8&255,z=o&255,K=Math.round(w(s,F,n)),U=Math.round(w(c,G,n)),W=Math.round(w(R,z,n));return`rgb(${K}, ${U}, ${W})`}let l;function N(){const e=Date.now(),t=(e-h)/50;t>=b?(h=e,T=d,d=(d+1)%a.length,m=0):m=t/b;const n=document.querySelector(".background-wrapper");n.style.background=j(a[T],a[d],m),n.style.background,l=requestAnimationFrame(N)}const a=["#ED3B44","#C6E327","#0041E8"].map(e=>ie(e)),ce=document.querySelector(".background-wrapper");ce.style.background=j(a[0],a[1],0);let T=0,d=1,m=0;const b=15;let h=Date.now();const u=document.querySelector(".hero");function B(){l||(h=Date.now()-b*m*50,l=requestAnimationFrame(()=>N()))}function O(){cancelAnimationFrame(l),l=null}u.addEventListener("mouseenter",B);u.addEventListener("touchstart",B);u.addEventListener("touchmove",B);document.addEventListener("touchend",function(e){u.contains(e.target)||O()});u.addEventListener("mouseleave",O);const v=document.querySelectorAll(".accordion-button-icon-about-me"),H=document.querySelector(".accordion-container-about-me"),ae=new A(H,{showMultiple:!0,duration:250});ae.open(0);H.addEventListener("click",le);function le(e){const t=e.target.closest("button");t&&t.tagName==="BUTTON"&&(t.id==="ac-trigger-0"?v[0].classList.toggle("clicked"):t.id==="ac-trigger-1"?v[1].classList.toggle("clicked"):t.id==="ac-trigger-2"&&v[2].classList.toggle("clicked"))}const ue=document.querySelector(".swiper2"),de=document.querySelector(".swiper-button-next-about-me");new S(ue,{modules:[E,q,M],direction:"horizontal",spaceBetween:0,navigation:{nextEl:de},slidesPerView:2,initialSlide:1,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});new S(".projects .swiper",{slidesPerView:1,speed:1200,direction:"horizontal",spaceBetween:32,navigation:{nextEl:".projects .swiper-button-next",prevEl:".projects .swiper-button-prev"},modules:[E,q,M,_,Y],mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},effect:"creative",creativeEffect:{limitProgress:1,perspective:!0,progressMultiplier:1,shadowPerProgress:!1,next:{translate:["120%",0,0],rotate:[0,0,15],scale:.5,origin:"center center"},prev:{translate:["-120%",0,0],rotate:[0,0,-15],scale:.5,origin:"center center"}},parallax:!0});const me=document.querySelector(".accordion-container");new A(me,{showMultiple:!0,duration:400});const pe=document.querySelectorAll(".marquee-inner"),D=()=>{const e=window.innerHeight/2;for(const t of pe)t.getBoundingClientRect().top<e?t.classList.add("show"):t.classList.remove("show")};D();window.addEventListener("scroll",D);window.addEventListener("load",function(){(t=>{const n=document.querySelector(t),r=n.innerHTML;n.insertAdjacentHTML("afterbegin",r),n.insertAdjacentHTML("afterbegin",r),n.insertAdjacentHTML("afterbegin",r),n.insertAdjacentHTML("beforeend",r),n.insertAdjacentHTML("beforeend",r),n.insertAdjacentHTML("beforeend",r),new IntersectionObserver(s=>{s[0].isIntersecting?n.classList.add("marquee"):n.classList.remove("marquee")}).observe(n)})(".list-covers")});let p;const fe=document.querySelector(".review-list");document.addEventListener("DOMContentLoaded",function(){be()});async function ge(){const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await x.get(e,{headers:{accept:"application/json"}})).data}catch{we()}}function we(e){k.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),fe.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}function ve({author:e,avatar_url:t,review:n}){return`<li class="review-card swiper-slide"> 
        <img class="card-image"
            src= "${t}"
            alt = "review from ${e}"
            width = "48"
            height = "48"
            loading = "lazy"
        />
        <h3 class="card-title">${e}</h3>
        <p class="reviews-paragraph">${n}</p>
    </li>`}async function be(){const t=(await ge()).map(ve).join(""),n=document.querySelector(".reviews .swiper-wrapper");n?(n.innerHTML=t,he()):console.log("Swiper wrapper not found")}function he(){p=new S(".reviews .swiper-container",{modules:[E,q,M],direction:"horizontal",loop:!1,autoHeight:!0,navigation:{nextEl:".reviews .swiper-button-next",prevEl:".reviews .swiper-button-prev"},slidesPerView:1,slidesPerGroup:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,invert:!0},speed:1200,simulateTouch:!0,updateOnWindowResize:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1400:{slidesPerView:4,slidesPerGroup:1}}}),C(),p.on("slideChange",()=>{C()})}function C(){let e=document.querySelector(".reviews .swiper-button-prev"),t=document.querySelector(".reviews .swiper-button-next");e.classList.toggle("swiper-button-disabled",p.isBeginning),t.classList.toggle("swiper-button-disabled",p.isEnd)}const V=document.querySelector("body"),ye=document.querySelector(".btn-submit"),y=document.querySelector(".modal-background"),$=document.querySelector(".modal-close-btn"),Le=document.querySelector(".modal");$.addEventListener("click",f);ye.addEventListener("click",e=>{const t=i.elements.email.value.trim(),n=i.elements.comments.value.trim();(!t||!n)&&(e.preventDefault(),k.warning({message:"Please fill out all fields",progressBar:!1,position:"bottomCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"}))});function f(e){(e.type==="click"&&e.currentTarget===$||e.keyCode===27||e.type==="click"&&!Le.contains(e.target))&&(y.classList.remove("visible"),document.removeEventListener("keydown",f),V.classList.remove("modal-open"),i.classList.remove("success-email"))}const i=document.querySelector(".footer-form"),L=document.querySelector('input[name="email"]');i.addEventListener("submit",Se);function Se(e){e.preventDefault();const t=e.target.email.value.trim(),n=e.target.comments.value.trim();t&&n&&Ee({email:t,comment:n}).then(()=>{i.reset(),y.classList.add("visible"),document.addEventListener("keydown",f),y.addEventListener("click",f),V.classList.add("modal-open")}).catch(()=>{k.error({title:"Oops!",message:"Something went wrong",progressBar:!1,position:"topCenter",color:"#1c1d20",messageColor:"#fafafa",titleColor:"#fafafa"})})}L.addEventListener("focus",()=>{i.classList.contains("success-email")&&i.classList.remove("success-email"),i.classList.contains("failed-email")&&i.classList.remove("failed-email")});L.addEventListener("blur",()=>{L.checkValidity()?i.classList.add("success-email"):i.classList.add("failed-email")});let Ee=async e=>await x.post("https://portfolio-js.b.goit.study/api/requests",e).then(t=>t.data);
//# sourceMappingURL=commonHelpers.js.map
