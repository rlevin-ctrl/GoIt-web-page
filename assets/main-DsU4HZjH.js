import{a as f}from"./vendor-CLb_lYsF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const z="https://your-energy.b.goit.study/api";f.defaults.baseURL=z;const J=async e=>{const{data:t}=await f.post("/subscription",{email:e});return t},W=async e=>{try{const{message:t}=await J(e);return t}catch(t){const o=t==null?void 0:t.status,n=(t==null?void 0:t.message)||`Unexpected error (${o||"unknown"})`;throw{code:o,message:n}}},b={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},a={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.getElementById("closeModalBtn")},d={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")},T={paginationContainer:document.getElementById("pagination")},c={cardsContainer:document.querySelector(".cards-container"),filterButtons:document.querySelectorAll(".filter-btn"),sectionTitle:document.querySelector(".home-title"),sectionSubTitle:document.querySelector(".current-category-name"),searchInput:document.querySelector(".search")};function G(){const e=window.innerHeight/4;window.scrollY>e?b.scrollToTopBtn.classList.remove("invisible"):b.scrollToTopBtn.classList.add("invisible")}function V(){window.scrollTo({top:0,behavior:"smooth"})}const K=e=>{const t=e.getAttribute("href");if(!t||t.startsWith("#"))return null;try{return new URL(t,window.location.origin).pathname}catch{return null}},X=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(o=>{const n=K(o);n&&n===t?o.classList.add("active"):o.classList.remove("active")})},Z=()=>{document.body.style.overflow="hidden"},Y=()=>{document.body.style.overflow=""},ee=()=>{d.backdrop.style.visibility="visible",d.backdrop.style.opacity=1,d.mobileMenu.style.transform="translateX(0%)",Z()},te=e=>{e.target===d.backdrop&&L()},oe=e=>{e.key==="Escape"&&d.mobileMenu.style.transform==="translateX(0%)"&&L()},ne=()=>{L()},L=()=>{d.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{d.backdrop.style.opacity=0,d.backdrop.style.visibility="hidden",Y()},300)},ae=()=>window.innerWidth<768?{categoryLimit:9,exerciseLimit:8}:{categoryLimit:12,exerciseLimit:10},{categoryLimit:M,exerciseLimit:R}=ae(),se=async e=>{const{data:t}=await f.get("/filters",{params:e});return t},re=async e=>{try{return await se(e)}catch(t){throw console.error("Error loading filters:",t),t}};class ie{constructor({size:t=200,color:o="#ffffff",timeout:n=1e3}={}){this._defaultSize=t,this._defaultColor=o,this._defaultTimeout=n,this._instances=new Map}_resolveTarget(t){return typeof t=="string"?document.getElementById(t):t}async show(t,{size:o,color:n,timeout:s}={}){const r=this._resolveTarget(t);if(!r)throw new Error("Target not found");if(this._instances.has(r))return;const i=o??this._defaultSize,l=n??this._defaultColor,u=s??this._defaultTimeout;getComputedStyle(r).position==="static"&&(r.style.position="relative");const h=document.createElement("div");h.classList="loader-wrapper",h.style.cssText=`
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
    `;const B=document.createElement("div");B.style.cssText=`
      width: ${i*.4}px;
      height: ${i*.4}px;
      border: 6px solid rgba(255,255,255,0.3);
      border-top-color: ${l};
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    `,h.appendChild(B),r.appendChild(h),this._instances.set(r,{wrapper:h,timeout:u}),u&&await new Promise(j=>setTimeout(j,u))}async hide(t){const o=this._resolveTarget(t);if(!o||!this._instances.has(o))return;const{wrapper:n}=this._instances.get(o);n.remove(),this._instances.delete(o)}}const P=document.createElement("style");P.textContent=`
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;document.head.appendChild(P);const $=({totalPages:e,onPageChange:t,query:o})=>{const n=o.page;if(T.paginationContainer.innerHTML="",e<=1)return;const s=(l,u)=>{const m=document.createElement("button");return m.textContent=u,m.classList.add("page-button"),u===n?m.classList.add("active"):m.addEventListener("click",()=>t(u)),m},r=Math.max(1,n-2),i=Math.min(e,n+2);for(let l=r;l<=i;l+=1)T.paginationContainer.appendChild(s(o,l))},U=()=>{T.paginationContainer.innerHTML=""},v=e=>e.charAt(0).toUpperCase()+e.slice(1),_=e=>e.replace(/\s+/g,""),ce=async e=>{const{data:t}=await f.get("/exercises",{params:e});return t},le=async(e,t)=>{const{data:o}=await f.patch(`/exercises/${e}/rating`,{...t});return o},de=async e=>{const{data:t}=await f.get(`/exercises/${e}`);return t},ue=async e=>{try{return await ce(e)}catch(t){throw console.error("Error loading exercises by filters:",t),t}},me=async(e,t)=>{try{const o=await le(e,t);return console.log("Rating updated successfully"),o}catch(o){throw console.error("Error updating exercise rating:",o),o}},ge=async e=>{try{return await de(e)}catch(t){throw console.error("Error loading exercise by ID:",t),t}},pe=e=>`${Math.floor(e)}.0`;async function S(e,t){c.cardsContainer.innerHTML="",U();try{t&&(e.keyword=t),await y.show(c.cardsContainer.id);const o=await ue(e);await y.hide(c.cardsContainer.id);const{page:n,perPage:s,totalPages:r,results:i}=o;if(i.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No exercises found for this filter.</p>';return}fe(i),$({totalPages:r,query:e,onPageChange:u=>{const m={...e,page:u};S(m)}})}catch{c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}}const fe=async e=>{D(!0);const t=e.map(he).join("");c.cardsContainer.innerHTML=t};function he(e){return`
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${pe(e.rating)}</span>
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
  `}const q=e=>{e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(!t)return;const o=document.querySelector(".filter-btn.active").textContent,n={[_(o).toLowerCase()]:c.sectionSubTitle.textContent.toLowerCase(),page:1,limit:R};S(n,t),e.target.reset()},y=new ie({size:200}),I=async e=>{c.cardsContainer.innerHTML="",U();try{await y.show(c.cardsContainer.id);const t=await re(e);await y.hide(c.cardsContainer.id);const{totalPages:o,results:n}=t;if(n.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No categories found for this filter.</p>';return}ye(n),$({totalPages:o,query:e,onPageChange:r=>{const i={...e,page:r};I(i)}})}catch(t){console.error("Error loading categories:",t),c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}},ye=e=>{c.sectionTitle.textContent="Exercises",c.sectionSubTitle.textContent="",D(!1);const t=e.map(we).join("");c.cardsContainer.innerHTML=t,ve()},ve=()=>{document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,o=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();be(t,o)})})},we=e=>`
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
  `,be=(e,t)=>{c.searchInput.value="",c.sectionTitle.textContent="Exercises /",c.sectionSubTitle.textContent=`${v(e)}`;const o={[_(t)]:e,page:1,limit:R};S(o)},D=e=>{const t=c.searchInput;t.style.display=e?"block":"none",e?t.addEventListener("submit",q):t.removeEventListener("submit",q)},Ee=()=>{Le();const t={filter:document.querySelector(".filter-btn.active").textContent.trim(),page:1,limit:M};I(t)},Le=()=>{c.filterButtons.forEach(e=>{e.addEventListener("click",Ce)})},Ce=e=>{const t=e.target;xe(t);const n={filter:t.textContent.trim(),page:1,limit:M};I(n)},xe=e=>{c.filterButtons.forEach(t=>t.classList.remove("active")),e.classList.add("active")};function Te(e,t,o=!0){if(!t||t.length===0){e.innerHTML="";return}const n=t.map(s=>`
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
    `).join("");e.innerHTML=n}const ke=document.querySelector(".workout-list");function A(){a.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function F(){a.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function Se(e,t){const o=e.findIndex(n=>n._id===t._id);o===-1?(e.push(t),F()):(e.splice(o,1),A()),localStorage.setItem("favorites",JSON.stringify(e))}function Ie(e){const t=e.target.closest(".js-delete-button").dataset.exerciseId,o=localStorage.getItem("favorites"),s=JSON.parse(o).filter(r=>r._id!==t);localStorage.setItem("favorites",JSON.stringify(s)),H()}async function H(){try{const e=localStorage.getItem("favorites"),t=JSON.parse(e);if(Te(ke,t),t&&t.length>0)document.querySelectorAll(".js-delete-button").forEach(o=>{o.addEventListener("click",n=>{Ie(n)})});else{const o=document.querySelector(".not-items-message");o.style.display="block"}}catch{}}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Be(e){a.modalRating.exerciseData=e,a.modalTitle.textContent=w(e.name),a.modalRatingValue.textContent=e.rating,a.modalImage.src=e.gifUrl,a.modalImage.alt=e.name,a.modalTarget.textContent=w(e.target),a.modalBodyPart.textContent=w(e.bodyPart),a.modalEquipment.textContent=w(e.equipment),a.modalPopular.textContent=e.popularity,a.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,a.modalDescription.textContent=e.description,a.stars.forEach((r,i)=>{i<Math.floor(e.rating)?r.classList.add("filled"):r.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]");t.some(r=>r._id===e._id)?F():A();const n=()=>Se(t,e);a.favoriteButton.addEventListener("click",n),a.closeModalBtn.addEventListener("click",k);const s=r=>{r.target===a.modalExercises?k():r.target===a.modalRating&&E()};window.addEventListener("click",s),a.modalExercises._windowClickHandler=s,a.modalExercises._favoriteClickHandler=n,qe(a.modalExercises),a.ratingButton.addEventListener("click",E)}function qe(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function E(){a.modalExercises.classList.toggle("hidden"),a.modalExercises.classList.toggle("show"),a.modalRating.classList.toggle("hidden"),a.modalRating.classList.toggle("show")}function k(){a.modalExercises.classList.remove("show"),setTimeout(()=>{a.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",a.closeModalBtn.removeEventListener("click",k),a.favoriteButton.removeEventListener("click",a.modalExercises._favoriteClickHandler),a.ratingButton.removeEventListener("click",E),window.removeEventListener("click",a.modalExercises._windowClickHandler),a.modalTitle.textContent="",a.modalRatingValue.textContent="",a.modalImage.src="",a.modalImage.alt="",a.modalTarget.textContent="",a.modalBodyPart.textContent="",a.modalEquipment.textContent="",a.modalPopular.textContent="",a.modalCalories.textContent="",a.modalDescription.textContent=""}b.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const o=t.dataset.exerciseId;if(o)try{const n=await ge(o);Be(n)}catch(n){console.error("Error fetching exercise:",n)}finally{}}});const g=document.querySelector('[data-modal="rating"]'),p=g==null?void 0:g.querySelector("form"),C=p==null?void 0:p.querySelectorAll('input[name="rating"]'),Oe=p==null?void 0:p.querySelector(".rating-value"),x=g==null?void 0:g.querySelector("[data-modal-close]");C==null||C.forEach(e=>{e.addEventListener("change",()=>{Oe.textContent=e.value+".0"})});p==null||p.addEventListener("submit",Me);async function Me(e){var i;e.preventDefault();const t=e.target,o=+((i=t.querySelector('[name="rating"]:checked'))==null?void 0:i.value)||0,n=t.querySelector('[name="email"]').value.trim(),s=t.querySelector('[name="comment"]').value.trim();if(!o||!n||!s){iziToast.error({title:"Please fiil in all fields"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){iziToast.error({title:"Type valid email"});return}try{const l=a.modalRating.exerciseData;if(!l)throw new Error("Exercise data is not available.");const u=l._id,h=await me(u,{rate:o,email:n,review:s});Q()}catch{}finally{}}x==null||x.addEventListener("click",Q);function Q(){g==null||g.classList.add("hidden"),E()}const Re="GoIt-web-page",Pe="1.0.0",$e="module",Ue={dev:"vite",build:"vite build --base=/GoIt-web-page/",preview:"vite preview"},_e={glob:"^11.0.0",postcss:"^8.4.41","postcss-sort-media-queries":"^5.2.0",vite:"^5.4.21"},De="Alexander Repeta <alexander.repeta@gmail.com>",Ae="ISC",Fe={axios:"^1.13.4","vite-plugin-full-reload":"^1.2.0","vite-plugin-html-inject":"^1.1.2"},He={name:Re,private:!0,version:Pe,type:$e,scripts:Ue,devDependencies:_e,author:De,license:Ae,dependencies:Fe},O=`${window.location.origin}${He.homepage||""}`,Qe=document.querySelectorAll('a[href^="/"]');function Ne(){O&&Qe.forEach(e=>{const t=e.getAttribute("href"),o=`${O}${t}`;e.href=new URL(o)})}const je=async()=>{const{data:e}=await f.get("/quote");return e},N=()=>new Date().toISOString().split("T")[0],ze=async()=>{try{const e=await je();console.log("[QUOTE API] Raw API response:",e);const t=N(),o={...e,date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(e){throw console.error("Error fetching quote of the day:",e),{code:e.status||500,message:e.message||"Unexpected error"}}};async function Je(){console.log("QUOTE FUNCTION STARTED"),console.log("[QUOTE] renderQuoteOfTheDay() started");const e=document.querySelector(".quote-day-card-text"),t=document.querySelector(".quote-day-card-author");if(console.log("[QUOTE] DOM elements:",{quoteTextcontainer:e,quoteAuthorContainer:t}),!e||!t){console.warn("[QUOTE] DOM elements NOT FOUND — quote cannot be rendered");return}try{const o=localStorage.getItem("quoteOfTheDay");console.log("[QUOTE] Raw LS data:",o);const n=JSON.parse(o),s=N();console.log("[QUOTE] Today date:",s),console.log("[QUOTE] Parsed LS data:",n);let r,i;if(n&&n.date===s)console.log("[QUOTE] Using cached quote from localStorage"),r=n.author,i=n.quote;else{console.log("[QUOTE] Fetching new quote from API...");const l=await ze();console.log("[QUOTE] API response:",l),r=l==null?void 0:l.author,i=l==null?void 0:l.quote,console.log("[QUOTE] Saving new quote to localStorage"),localStorage.setItem("quoteOfTheDay",JSON.stringify({date:s,author:r,quote:i}))}console.log("[QUOTE] Final quote:",{authorName:r,authorQuote:i}),e.textContent=i||"No quote available",t.textContent=r||"Unknown author",console.log("[QUOTE] Quote successfully rendered")}catch(o){console.error("[QUOTE] Error loading quote of the day:",o)}}function We(){Ne(),Je(),document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;(e==="/"||e.endsWith("/GoIt-web-page/")||e.endsWith("/GoIt-web-page"))&&Ee(),(e.endsWith("/favorites")||e.endsWith("/GoIt-web-page/favorites"))&&H(),X();const t=document.querySelector("#subscribe-form");t&&t.addEventListener("submit",async o=>{o.preventDefault();try{const n=t.email.value;await W(n),t.reset()}catch(n){console.log(n)}})}),d.burgerButton.addEventListener("click",ee),d.closeButton.addEventListener("click",L),d.backdrop.addEventListener("click",te),document.addEventListener("keydown",oe),d.navLinks.forEach(e=>e.addEventListener("click",ne)),window.addEventListener("scroll",G),b.scrollToTopBtn.addEventListener("click",V)}We();
//# sourceMappingURL=main-DsU4HZjH.js.map
