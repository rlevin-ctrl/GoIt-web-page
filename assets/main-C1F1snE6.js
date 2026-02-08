import{a as f}from"./vendor-CLb_lYsF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const W="https://your-energy.b.goit.study/api";f.defaults.baseURL=W;const J=async e=>{const{data:t}=await f.post("/subscription",{email:e});return t},V=async e=>{try{const{message:t}=await J(e);return t}catch(t){const o=t==null?void 0:t.status,n=(t==null?void 0:t.message)||`Unexpected error (${o||"unknown"})`;throw{code:o,message:n}}},b={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},r={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.getElementById("closeModalBtn")},d={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")},k={paginationContainer:document.getElementById("pagination")},c={cardsContainer:document.querySelector(".cards-container"),filterButtons:document.querySelectorAll(".filter-btn"),sectionTitle:document.querySelector(".home-title"),sectionSubTitle:document.querySelector(".current-category-name"),searchInput:document.querySelector(".search")};function K(){const e=window.innerHeight/4;window.scrollY>e?b.scrollToTopBtn.classList.remove("invisible"):b.scrollToTopBtn.classList.add("invisible")}function X(){window.scrollTo({top:0,behavior:"smooth"})}const Z=e=>{const t=e.getAttribute("href");if(!t||t.startsWith("#"))return null;try{return new URL(t,window.location.origin).pathname}catch{return null}},$=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname.replace("/GoIt-web-page","").replace(/\/index\.html$/,"/").replace(/\/$/,"/index.html");e.forEach(o=>{let n=Z(o);n&&(n=n.replace("/GoIt-web-page","").replace(/\/index\.html$/,"/").replace(/\/$/,"/index.html"),n===t?o.classList.add("active"):o.classList.remove("active"))})},Y=()=>{document.body.style.overflow="hidden"},ee=()=>{document.body.style.overflow=""},te=()=>{d.backdrop.style.visibility="visible",d.backdrop.style.opacity=1,d.mobileMenu.style.transform="translateX(0%)",Y()},oe=e=>{e.target===d.backdrop&&L()},ne=e=>{e.key==="Escape"&&d.mobileMenu.style.transform==="translateX(0%)"&&L()},ae=()=>{L()},L=()=>{d.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{d.backdrop.style.opacity=0,d.backdrop.style.visibility="hidden",ee()},300)},re=()=>window.innerWidth<768?{categoryLimit:9,exerciseLimit:8}:{categoryLimit:12,exerciseLimit:10},{categoryLimit:P,exerciseLimit:R}=re(),se=async e=>{const{data:t}=await f.get("/filters",{params:e});return t},ie=async e=>{try{return await se(e)}catch(t){throw console.error("Error loading filters:",t),t}};class ce{constructor({size:t=200,color:o="#ffffff",timeout:n=1e3}={}){this._defaultSize=t,this._defaultColor=o,this._defaultTimeout=n,this._instances=new Map}_resolveTarget(t){return typeof t=="string"?document.getElementById(t):t}async show(t,{size:o,color:n,timeout:s}={}){const a=this._resolveTarget(t);if(!a)throw new Error("Target not found");if(this._instances.has(a))return;const i=o??this._defaultSize,l=n??this._defaultColor,u=s??this._defaultTimeout;getComputedStyle(a).position==="static"&&(a.style.position="relative");const h=document.createElement("div");h.classList="loader-wrapper",h.style.cssText=`
      width: ${i}px;
      height: ${i}px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    `;const q=document.createElement("div");q.style.cssText=`
      width: ${i*.4}px;
      height: ${i*.4}px;
      border: 6px solid rgba(255,255,255,0.3);
      border-top-color: ${l};
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    `,h.appendChild(q),a.appendChild(h),this._instances.set(a,{wrapper:h,timeout:u}),u&&await new Promise(G=>setTimeout(G,u))}async hide(t){const o=this._resolveTarget(t);if(!o||!this._instances.has(o))return;const{wrapper:n}=this._instances.get(o);n.remove(),this._instances.delete(o)}}const U=document.createElement("style");U.textContent=`
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;document.head.appendChild(U);const _=({totalPages:e,onPageChange:t,query:o})=>{const n=o.page;if(k.paginationContainer.innerHTML="",e<=1)return;const s=(l,u)=>{const m=document.createElement("button");return m.textContent=u,m.classList.add("page-button"),u===n?m.classList.add("active"):m.addEventListener("click",()=>t(u)),m},a=Math.max(1,n-2),i=Math.min(e,n+2);for(let l=a;l<=i;l+=1)k.paginationContainer.appendChild(s(o,l))},D=()=>{k.paginationContainer.innerHTML=""},v=e=>e.charAt(0).toUpperCase()+e.slice(1),A=e=>e.replace(/\s+/g,""),le=async e=>{const{data:t}=await f.get("/exercises",{params:e});return t},de=async(e,t)=>{const{data:o}=await f.patch(`/exercises/${e}/rating`,{...t});return o},ue=async e=>{const{data:t}=await f.get(`/exercises/${e}`);return t},me=async e=>{try{return await le(e)}catch(t){throw console.error("Error loading exercises by filters:",t),t}},ge=async(e,t)=>{try{const o=await de(e,t);return console.log("Rating updated successfully"),o}catch(o){throw console.error("Error updating exercise rating:",o),o}},pe=async e=>{try{return await ue(e)}catch(t){throw console.error("Error loading exercise by ID:",t),t}},fe=e=>`${Math.floor(e)}.0`;async function I(e,t){c.cardsContainer.innerHTML="",D();try{t&&(e.keyword=t),await y.show(c.cardsContainer.id);const o=await me(e);await y.hide(c.cardsContainer.id);const{page:n,perPage:s,totalPages:a,results:i}=o;if(i.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No exercises found for this filter.</p>';return}he(i),_({totalPages:a,query:e,onPageChange:u=>{const m={...e,page:u};I(m)}})}catch{c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}}const he=async e=>{F(!0);const t=e.map(ye).join("");c.cardsContainer.innerHTML=t};function ye(e){return`
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${fe(e.rating)}</span>
          <img class="star-icon"
              src="./img/star.svg"
              width="18"
              height="18"
              alt="Star Icon"
          >
        </div>

        <button class="start-button" type="button" data-exercise-id="${e._id}">
          Start <img class="start-icon"
              src="./img/arrow-right.svg"
              width="16"
              height="16"
              alt="Arrow right Icon"
            >
        </button>
      </div>

      <div class="workout-body">
        <img class="running-icon"
              src="./img/runner.svg"
              width="24"
              height="24"
              alt="Running Man Icon"
        >

        <h3 class="workout-name">${v(e.name)}</h3>
      </div>

      <div class="workout-stats">
        <div class="workout-stats-item stats-calories">
        <p class="workout-stats-text">Burned calories:</p>
          <span class="workout-stats-value">${e.burnedCalories} / ${e.time} min</span>
        </div>
        <div class="workout-stats-item stats-part">
        <p class="workout-stats-text">Body part:</p><span class="workout-stats-value">${v(e.bodyPart)}</span></div>
        <div class="workout-stats-item stats-target"><p class="workout-stats-text">Target:</p><span class="workout-stats-value">${v(e.target)}</span></div>
      </div>
    </li>
  `}const O=e=>{e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(!t)return;const o=document.querySelector(".filter-btn.active").textContent,n={[A(o).toLowerCase()]:c.sectionSubTitle.textContent.toLowerCase(),page:1,limit:R};I(n,t),e.target.reset()},y=new ce({size:200}),B=async e=>{c.cardsContainer.innerHTML="",D();try{await y.show(c.cardsContainer.id);const t=await ie(e);await y.hide(c.cardsContainer.id);const{totalPages:o,results:n}=t;if(n.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No categories found for this filter.</p>';return}ve(n),_({totalPages:o,query:e,onPageChange:a=>{const i={...e,page:a};B(i)}})}catch(t){console.error("Error loading categories:",t),c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}},ve=e=>{c.sectionTitle.textContent="Exercises",c.sectionSubTitle.textContent="",F(!1);const t=e.map(be).join("");c.cardsContainer.innerHTML=t,we()},we=()=>{document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,o=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();Ee(t,o)})})},be=e=>`
    <li
      class="category-card"
      data-name="${e.name}"
      data-type="${e.filter}"
      data-id="${e.id}"
      style="
        background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url('${e.imgURL}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      "
    >
      <div class="category-card-text">
        <h3 class="category-card-title">${v(e.name)}</h3>
        <p class="category-card-sub">${e.filter}</p>
      </div>
    </li>
  `,Ee=(e,t)=>{c.searchInput.value="",c.sectionTitle.textContent="Exercises /",c.sectionSubTitle.textContent=`${v(e)}`;const o={[A(t)]:e,page:1,limit:R};I(o)},F=e=>{const t=c.searchInput;t.style.display=e?"block":"none",e?t.addEventListener("submit",O):t.removeEventListener("submit",O)},Le=()=>{xe();const t={filter:document.querySelector(".filter-btn.active").textContent.trim(),page:1,limit:P};B(t)},xe=()=>{c.filterButtons.forEach(e=>{e.addEventListener("click",Ce)})},Ce=e=>{const t=e.target;Te(t);const n={filter:t.textContent.trim(),page:1,limit:P};B(n)},Te=e=>{c.filterButtons.forEach(t=>t.classList.remove("active")),e.classList.add("active")};function ke(e,t,o=!0){if(!t||t.length===0){e.innerHTML="";return}const n=t.map(s=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${o?`
            <button class="delete-button js-delete-button" aria-label="Delete workout" data-exercise-id=${s._id}>
              <img src="./img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${s._id}>Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="./img/quote_icon_1.svg"
              width="24"
              height="24"
              alt="Running Icon"
            >
          </span>
          <h3 class="workout-name">${s.name}</h3>
          <p class="workout-stats">
            Burned calories: ${s.burnedCalories} / ${s.time} min
            <br>
            Body part: ${s.bodyPart} <br>  Target: ${s.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");e.innerHTML=n}const Se=document.querySelector(".workout-list");function H(){r.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function Q(){r.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function Ie(e,t){const o=e.findIndex(n=>n._id===t._id);o===-1?(e.push(t),Q()):(e.splice(o,1),H()),localStorage.setItem("favorites",JSON.stringify(e))}function Be(e){const t=e.target.closest(".js-delete-button").dataset.exerciseId,o=localStorage.getItem("favorites"),s=JSON.parse(o).filter(a=>a._id!==t);localStorage.setItem("favorites",JSON.stringify(s)),N()}async function N(){try{const e=localStorage.getItem("favorites"),t=JSON.parse(e);if(ke(Se,t),t&&t.length>0)document.querySelectorAll(".js-delete-button").forEach(o=>{o.addEventListener("click",n=>{Be(n)})});else{const o=document.querySelector(".not-items-message");o.style.display="block"}}catch{}}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe(e){r.modalRating.exerciseData=e,r.modalTitle.textContent=w(e.name),r.modalRatingValue.textContent=e.rating,r.modalImage.src=e.gifUrl,r.modalImage.alt=e.name,r.modalTarget.textContent=w(e.target),r.modalBodyPart.textContent=w(e.bodyPart),r.modalEquipment.textContent=w(e.equipment),r.modalPopular.textContent=e.popularity,r.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,r.modalDescription.textContent=e.description,r.stars.forEach((a,i)=>{i<Math.floor(e.rating)?a.classList.add("filled"):a.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]");t.some(a=>a._id===e._id)?Q():H();const n=()=>Ie(t,e);r.favoriteButton.addEventListener("click",n),r.closeModalBtn.addEventListener("click",S);const s=a=>{a.target===r.modalExercises?S():a.target===r.modalRating&&E()};window.addEventListener("click",s),r.modalExercises._windowClickHandler=s,r.modalExercises._favoriteClickHandler=n,Oe(r.modalExercises),r.ratingButton.addEventListener("click",E)}function Oe(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function E(){r.modalExercises.classList.toggle("hidden"),r.modalExercises.classList.toggle("show"),r.modalRating.classList.toggle("hidden"),r.modalRating.classList.toggle("show")}function S(){r.modalExercises.classList.remove("show"),setTimeout(()=>{r.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",r.closeModalBtn.removeEventListener("click",S),r.favoriteButton.removeEventListener("click",r.modalExercises._favoriteClickHandler),r.ratingButton.removeEventListener("click",E),window.removeEventListener("click",r.modalExercises._windowClickHandler),r.modalTitle.textContent="",r.modalRatingValue.textContent="",r.modalImage.src="",r.modalImage.alt="",r.modalTarget.textContent="",r.modalBodyPart.textContent="",r.modalEquipment.textContent="",r.modalPopular.textContent="",r.modalCalories.textContent="",r.modalDescription.textContent=""}b.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const o=t.dataset.exerciseId;if(o)try{const n=await pe(o);qe(n)}catch(n){console.error("Error fetching exercise:",n)}finally{}}});const g=document.querySelector('[data-modal="rating"]'),p=g==null?void 0:g.querySelector("form"),x=p==null?void 0:p.querySelectorAll('input[name="rating"]'),Me=p==null?void 0:p.querySelector(".rating-value"),C=g==null?void 0:g.querySelector("[data-modal-close]");x==null||x.forEach(e=>{e.addEventListener("change",()=>{Me.textContent=e.value+".0"})});p==null||p.addEventListener("submit",$e);async function $e(e){var i;e.preventDefault();const t=e.target,o=+((i=t.querySelector('[name="rating"]:checked'))==null?void 0:i.value)||0,n=t.querySelector('[name="email"]').value.trim(),s=t.querySelector('[name="comment"]').value.trim();if(!o||!n||!s){iziToast.error({title:"Please fiil in all fields"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){iziToast.error({title:"Type valid email"});return}try{const l=r.modalRating.exerciseData;if(!l)throw new Error("Exercise data is not available.");const u=l._id,h=await ge(u,{rate:o,email:n,review:s});j()}catch{}finally{}}C==null||C.addEventListener("click",j);function j(){g==null||g.classList.add("hidden"),E()}const Pe="GoIt-web-page",Re="1.0.0",Ue="module",_e={dev:"vite",build:"vite build --base=/GoIt-web-page/",preview:"vite preview"},De={glob:"^11.0.0",postcss:"^8.4.41","postcss-sort-media-queries":"^5.2.0",vite:"^5.4.21"},Ae="Alexander Repeta <alexander.repeta@gmail.com>",Fe="ISC",He={axios:"^1.13.4","vite-plugin-full-reload":"^1.2.0","vite-plugin-html-inject":"^1.1.2"},Qe={name:Pe,private:!0,version:Re,type:Ue,scripts:_e,devDependencies:De,author:Ae,license:Fe,dependencies:He},M=`${window.location.origin}${Qe.homepage||""}`,Ne=document.querySelectorAll('a[href^="/"]');function je(){M&&Ne.forEach(e=>{const t=e.getAttribute("href"),o=`${M}${t}`;e.href=new URL(o)})}const ze=async()=>{const{data:e}=await f.get("/quote");return e},z=()=>new Date().toISOString().split("T")[0],Ge=async()=>{try{const e=await ze();console.log("[QUOTE API] Raw API response:",e);const t=z(),o={...e,date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(e){throw console.error("Error fetching quote of the day:",e),{code:e.status||500,message:e.message||"Unexpected error"}}};async function We(){console.log("QUOTE FUNCTION STARTED"),console.log("[QUOTE] renderQuoteOfTheDay() started");const e=document.querySelector(".quote-day-card-text"),t=document.querySelector(".quote-day-card-author");if(console.log("[QUOTE] DOM elements:",{quoteTextcontainer:e,quoteAuthorContainer:t}),!e||!t){console.warn("[QUOTE] DOM elements NOT FOUND — quote cannot be rendered");return}try{const o=localStorage.getItem("quoteOfTheDay");console.log("[QUOTE] Raw LS data:",o);const n=JSON.parse(o),s=z();console.log("[QUOTE] Today date:",s),console.log("[QUOTE] Parsed LS data:",n);let a,i;if(n&&n.date===s)console.log("[QUOTE] Using cached quote from localStorage"),a=n.author,i=n.quote;else{console.log("[QUOTE] Fetching new quote from API...");const l=await Ge();console.log("[QUOTE] API response:",l),a=l==null?void 0:l.author,i=l==null?void 0:l.quote,console.log("[QUOTE] Saving new quote to localStorage"),localStorage.setItem("quoteOfTheDay",JSON.stringify({date:s,author:a,quote:i}))}console.log("[QUOTE] Final quote:",{authorName:a,authorQuote:i}),e.textContent=i||"No quote available",t.textContent=a||"Unknown author",console.log("[QUOTE] Quote successfully rendered")}catch(o){console.error("[QUOTE] Error loading quote of the day:",o)}}function T(){const e=window.location.pathname,t=e==="/"||e.endsWith("/index.html")||e.endsWith("/GoIt-web-page/")||e.endsWith("/GoIt-web-page/index.html"),o=e.endsWith("/favorites.html")||e.endsWith("/GoIt-web-page/favorites.html");t&&Le(),o&&N(),$();const n=document.querySelector("#subscribe-form");n&&!n.dataset.bound&&(n.dataset.bound="true",n.addEventListener("submit",async s=>{s.preventDefault();try{const a=n.email.value;await V(a),n.reset()}catch(a){console.log(a)}}))}function Je(){je(),We(),new MutationObserver(()=>{document.querySelector(".nav-link")&&$()}).observe(document.body,{childList:!0,subtree:!0});const t=()=>T();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t,{once:!0}):t(),window.addEventListener("popstate",T),window.addEventListener("app:navigated",T),d.burgerButton.addEventListener("click",te),d.closeButton.addEventListener("click",L),d.backdrop.addEventListener("click",oe),document.addEventListener("keydown",ne),d.navLinks.forEach(o=>o.addEventListener("click",ae)),window.addEventListener("scroll",K),b.scrollToTopBtn.addEventListener("click",X)}Je();
//# sourceMappingURL=main-C1F1snE6.js.map
