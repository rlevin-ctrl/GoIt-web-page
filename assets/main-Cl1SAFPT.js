import{a as f}from"./vendor-CLb_lYsF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const W="https://your-energy.b.goit.study/api";f.defaults.baseURL=W;const J=async e=>{const{data:t}=await f.post("/subscription",{email:e});return t},G=async e=>{try{const{message:t}=await J(e);return t}catch(t){const o=t==null?void 0:t.status,n=(t==null?void 0:t.message)||`Unexpected error (${o||"unknown"})`;throw{code:o,message:n}}},b={scrollToTopBtn:document.querySelector(".js-scroll-to-top-btn"),exercisesContainer:document.getElementById("exercise-cards-container")},s={modalExercises:document.getElementById("exerciseModal"),modalRating:document.getElementById("ratingModal"),modalTitle:document.getElementById("modalTitle"),modalRatingValue:document.getElementById("modalRating"),modalImage:document.getElementById("modalImage"),modalTarget:document.getElementById("modalTarget"),modalBodyPart:document.getElementById("modalBodyPart"),modalEquipment:document.getElementById("modalEquipment"),modalPopular:document.getElementById("modalPopular"),modalCalories:document.getElementById("modalCalories"),modalDescription:document.getElementById("modalDescription"),stars:document.querySelectorAll(".star"),favoriteButton:document.getElementById("favoriteButton"),ratingButton:document.getElementById("ratingButton"),closeModalBtn:document.getElementById("closeModalBtn")},d={burgerButton:document.querySelector(".js-burger-button"),mobileMenu:document.querySelector(".mobile-menu-js"),backdrop:document.querySelector(".mobile-backdrop-js"),closeButton:document.querySelector(".mobile-menu-close-js"),navLinks:document.querySelectorAll(".nav-links.mobile-menu .nav-link")},k={paginationContainer:document.getElementById("pagination")},c={cardsContainer:document.querySelector(".cards-container"),filterButtons:document.querySelectorAll(".filter-btn"),sectionTitle:document.querySelector(".home-title"),sectionSubTitle:document.querySelector(".current-category-name"),searchInput:document.querySelector(".search")};function V(){const e=window.innerHeight/4;window.scrollY>e?b.scrollToTopBtn.classList.remove("invisible"):b.scrollToTopBtn.classList.add("invisible")}function K(){window.scrollTo({top:0,behavior:"smooth"})}const X=e=>{const t=e.getAttribute("href");if(!t||t.startsWith("#"))return null;try{return new URL(t,window.location.origin).pathname}catch{return null}},Z=()=>{const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(o=>{const n=X(o);n&&n===t?o.classList.add("active"):o.classList.remove("active")})},Y=()=>{document.body.style.overflow="hidden"},ee=()=>{document.body.style.overflow=""},te=()=>{d.backdrop.style.visibility="visible",d.backdrop.style.opacity=1,d.mobileMenu.style.transform="translateX(0%)",Y()},oe=e=>{e.target===d.backdrop&&L()},ne=e=>{e.key==="Escape"&&d.mobileMenu.style.transform==="translateX(0%)"&&L()},ae=()=>{L()},L=()=>{d.mobileMenu.style.transform="translateX(100%)",setTimeout(()=>{d.backdrop.style.opacity=0,d.backdrop.style.visibility="hidden",ee()},300)},se=()=>window.innerWidth<768?{categoryLimit:9,exerciseLimit:8}:{categoryLimit:12,exerciseLimit:10},{categoryLimit:P,exerciseLimit:R}=se(),re=async e=>{const{data:t}=await f.get("/filters",{params:e});return t},ie=async e=>{try{return await re(e)}catch(t){throw console.error("Error loading filters:",t),t}};class ce{constructor({size:t=200,color:o="#ffffff",timeout:n=1e3}={}){this._defaultSize=t,this._defaultColor=o,this._defaultTimeout=n,this._instances=new Map}_resolveTarget(t){return typeof t=="string"?document.getElementById(t):t}async show(t,{size:o,color:n,timeout:r}={}){const a=this._resolveTarget(t);if(!a)throw new Error("Target not found");if(this._instances.has(a))return;const i=o??this._defaultSize,l=n??this._defaultColor,u=r??this._defaultTimeout;getComputedStyle(a).position==="static"&&(a.style.position="relative");const h=document.createElement("div");h.classList="loader-wrapper",h.style.cssText=`
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
    `,h.appendChild(q),a.appendChild(h),this._instances.set(a,{wrapper:h,timeout:u}),u&&await new Promise(z=>setTimeout(z,u))}async hide(t){const o=this._resolveTarget(t);if(!o||!this._instances.has(o))return;const{wrapper:n}=this._instances.get(o);n.remove(),this._instances.delete(o)}}const $=document.createElement("style");$.textContent=`
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;document.head.appendChild($);const U=({totalPages:e,onPageChange:t,query:o})=>{const n=o.page;if(k.paginationContainer.innerHTML="",e<=1)return;const r=(l,u)=>{const m=document.createElement("button");return m.textContent=u,m.classList.add("page-button"),u===n?m.classList.add("active"):m.addEventListener("click",()=>t(u)),m},a=Math.max(1,n-2),i=Math.min(e,n+2);for(let l=a;l<=i;l+=1)k.paginationContainer.appendChild(r(o,l))},_=()=>{k.paginationContainer.innerHTML=""},v=e=>e.charAt(0).toUpperCase()+e.slice(1),D=e=>e.replace(/\s+/g,""),le=async e=>{const{data:t}=await f.get("/exercises",{params:e});return t},de=async(e,t)=>{const{data:o}=await f.patch(`/exercises/${e}/rating`,{...t});return o},ue=async e=>{const{data:t}=await f.get(`/exercises/${e}`);return t},me=async e=>{try{return await le(e)}catch(t){throw console.error("Error loading exercises by filters:",t),t}},ge=async(e,t)=>{try{const o=await de(e,t);return console.log("Rating updated successfully"),o}catch(o){throw console.error("Error updating exercise rating:",o),o}},pe=async e=>{try{return await ue(e)}catch(t){throw console.error("Error loading exercise by ID:",t),t}},fe=e=>`${Math.floor(e)}.0`;async function I(e,t){c.cardsContainer.innerHTML="",_();try{t&&(e.keyword=t),await y.show(c.cardsContainer.id);const o=await me(e);await y.hide(c.cardsContainer.id);const{page:n,perPage:r,totalPages:a,results:i}=o;if(i.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No exercises found for this filter.</p>';return}he(i),U({totalPages:a,query:e,onPageChange:u=>{const m={...e,page:u};I(m)}})}catch{c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}}const he=async e=>{A(!0);const t=e.map(ye).join("");c.cardsContainer.innerHTML=t};function ye(e){return`
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
  `}const O=e=>{e.preventDefault();const t=e.target.elements.search.value.trim().toLowerCase();if(!t)return;const o=document.querySelector(".filter-btn.active").textContent,n={[D(o).toLowerCase()]:c.sectionSubTitle.textContent.toLowerCase(),page:1,limit:R};I(n,t),e.target.reset()},y=new ce({size:200}),B=async e=>{c.cardsContainer.innerHTML="",_();try{await y.show(c.cardsContainer.id);const t=await ie(e);await y.hide(c.cardsContainer.id);const{totalPages:o,results:n}=t;if(n.length<=0){c.cardsContainer.innerHTML='<p class="not-items-message">No categories found for this filter.</p>';return}ve(n),U({totalPages:o,query:e,onPageChange:a=>{const i={...e,page:a};B(i)}})}catch(t){console.error("Error loading categories:",t),c.cardsContainer.innerHTML=""}finally{await y.hide(c.cardsContainer.id)}},ve=e=>{c.sectionTitle.textContent="Exercises",c.sectionSubTitle.textContent="",A(!1);const t=e.map(be).join("");c.cardsContainer.innerHTML=t,we()},we=()=>{document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{var n;const t=e.dataset.name,o=(n=e.dataset.type)==null?void 0:n.toLowerCase().trim();Ee(t,o)})})},be=e=>`
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
  `,Ee=(e,t)=>{c.searchInput.value="",c.sectionTitle.textContent="Exercises /",c.sectionSubTitle.textContent=`${v(e)}`;const o={[D(t)]:e,page:1,limit:R};I(o)},A=e=>{const t=c.searchInput;t.style.display=e?"block":"none",e?t.addEventListener("submit",O):t.removeEventListener("submit",O)},Le=()=>{xe();const t={filter:document.querySelector(".filter-btn.active").textContent.trim(),page:1,limit:P};B(t)},xe=()=>{c.filterButtons.forEach(e=>{e.addEventListener("click",Ce)})},Ce=e=>{const t=e.target;Te(t);const n={filter:t.textContent.trim(),page:1,limit:P};B(n)},Te=e=>{c.filterButtons.forEach(t=>t.classList.remove("active")),e.classList.add("active")};function ke(e,t,o=!0){if(!t||t.length===0){e.innerHTML="";return}const n=t.map(r=>`
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${o?`
            <button class="delete-button js-delete-button" aria-label="Delete workout" data-exercise-id=${r._id}>
              <img src="./img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `:""}
          <button class="start-button" data-exercise-id=${r._id}>Start ➔</button>
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
          <h3 class="workout-name">${r.name}</h3>
          <p class="workout-stats">
            Burned calories: ${r.burnedCalories} / ${r.time} min
            <br>
            Body part: ${r.bodyPart} <br>  Target: ${r.target}
          </p>
        </div>
      </div>
    </li>
    `).join("");e.innerHTML=n}const Se=document.querySelector(".workout-list");function F(){s.favoriteButton.innerHTML=`
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`}function H(){s.favoriteButton.innerHTML=`
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`}function Ie(e,t){const o=e.findIndex(n=>n._id===t._id);o===-1?(e.push(t),H()):(e.splice(o,1),F()),localStorage.setItem("favorites",JSON.stringify(e))}function Be(e){const t=e.target.closest(".js-delete-button").dataset.exerciseId,o=localStorage.getItem("favorites"),r=JSON.parse(o).filter(a=>a._id!==t);localStorage.setItem("favorites",JSON.stringify(r)),Q()}async function Q(){try{const e=localStorage.getItem("favorites"),t=JSON.parse(e);if(ke(Se,t),t&&t.length>0)document.querySelectorAll(".js-delete-button").forEach(o=>{o.addEventListener("click",n=>{Be(n)})});else{const o=document.querySelector(".not-items-message");o.style.display="block"}}catch{}}function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe(e){s.modalRating.exerciseData=e,s.modalTitle.textContent=w(e.name),s.modalRatingValue.textContent=e.rating,s.modalImage.src=e.gifUrl,s.modalImage.alt=e.name,s.modalTarget.textContent=w(e.target),s.modalBodyPart.textContent=w(e.bodyPart),s.modalEquipment.textContent=w(e.equipment),s.modalPopular.textContent=e.popularity,s.modalCalories.textContent=`${e.burnedCalories}/${e.time} min`,s.modalDescription.textContent=e.description,s.stars.forEach((a,i)=>{i<Math.floor(e.rating)?a.classList.add("filled"):a.classList.remove("filled")});const t=JSON.parse(localStorage.getItem("favorites")||"[]");t.some(a=>a._id===e._id)?H():F();const n=()=>Ie(t,e);s.favoriteButton.addEventListener("click",n),s.closeModalBtn.addEventListener("click",S);const r=a=>{a.target===s.modalExercises?S():a.target===s.modalRating&&E()};window.addEventListener("click",r),s.modalExercises._windowClickHandler=r,s.modalExercises._favoriteClickHandler=n,Oe(s.modalExercises),s.ratingButton.addEventListener("click",E)}function Oe(e){e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("show")},10),document.body.style.overflow="hidden"}function E(){s.modalExercises.classList.toggle("hidden"),s.modalExercises.classList.toggle("show"),s.modalRating.classList.toggle("hidden"),s.modalRating.classList.toggle("show")}function S(){s.modalExercises.classList.remove("show"),setTimeout(()=>{s.modalExercises.classList.add("hidden"),document.body.style.overflow=""},300),document.body.style.overflow="",s.closeModalBtn.removeEventListener("click",S),s.favoriteButton.removeEventListener("click",s.modalExercises._favoriteClickHandler),s.ratingButton.removeEventListener("click",E),window.removeEventListener("click",s.modalExercises._windowClickHandler),s.modalTitle.textContent="",s.modalRatingValue.textContent="",s.modalImage.src="",s.modalImage.alt="",s.modalTarget.textContent="",s.modalBodyPart.textContent="",s.modalEquipment.textContent="",s.modalPopular.textContent="",s.modalCalories.textContent="",s.modalDescription.textContent=""}b.exercisesContainer.addEventListener("click",async function(e){const t=e.target.closest(".start-button");if(t){const o=t.dataset.exerciseId;if(o)try{const n=await pe(o);qe(n)}catch(n){console.error("Error fetching exercise:",n)}finally{}}});const g=document.querySelector('[data-modal="rating"]'),p=g==null?void 0:g.querySelector("form"),x=p==null?void 0:p.querySelectorAll('input[name="rating"]'),Me=p==null?void 0:p.querySelector(".rating-value"),C=g==null?void 0:g.querySelector("[data-modal-close]");x==null||x.forEach(e=>{e.addEventListener("change",()=>{Me.textContent=e.value+".0"})});p==null||p.addEventListener("submit",Pe);async function Pe(e){var i;e.preventDefault();const t=e.target,o=+((i=t.querySelector('[name="rating"]:checked'))==null?void 0:i.value)||0,n=t.querySelector('[name="email"]').value.trim(),r=t.querySelector('[name="comment"]').value.trim();if(!o||!n||!r){iziToast.error({title:"Please fiil in all fields"});return}if(!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n)){iziToast.error({title:"Type valid email"});return}try{const l=s.modalRating.exerciseData;if(!l)throw new Error("Exercise data is not available.");const u=l._id,h=await ge(u,{rate:o,email:n,review:r});N()}catch{}finally{}}C==null||C.addEventListener("click",N);function N(){g==null||g.classList.add("hidden"),E()}const Re="GoIt-web-page",$e="1.0.0",Ue="module",_e={dev:"vite",build:"vite build --base=/GoIt-web-page/",preview:"vite preview"},De={glob:"^11.0.0",postcss:"^8.4.41","postcss-sort-media-queries":"^5.2.0",vite:"^5.4.21"},Ae="Alexander Repeta <alexander.repeta@gmail.com>",Fe="ISC",He={axios:"^1.13.4","vite-plugin-full-reload":"^1.2.0","vite-plugin-html-inject":"^1.1.2"},Qe={name:Re,private:!0,version:$e,type:Ue,scripts:_e,devDependencies:De,author:Ae,license:Fe,dependencies:He},M=`${window.location.origin}${Qe.homepage||""}`,Ne=document.querySelectorAll('a[href^="/"]');function je(){M&&Ne.forEach(e=>{const t=e.getAttribute("href"),o=`${M}${t}`;e.href=new URL(o)})}const ze=async()=>{const{data:e}=await f.get("/quote");return e},j=()=>new Date().toISOString().split("T")[0],We=async()=>{try{const e=await ze();console.log("[QUOTE API] Raw API response:",e);const t=j(),o={...e,date:t};return localStorage.setItem("quoteOfTheDay",JSON.stringify(o)),o}catch(e){throw console.error("Error fetching quote of the day:",e),{code:e.status||500,message:e.message||"Unexpected error"}}};async function Je(){console.log("QUOTE FUNCTION STARTED"),console.log("[QUOTE] renderQuoteOfTheDay() started");const e=document.querySelector(".quote-day-card-text"),t=document.querySelector(".quote-day-card-author");if(console.log("[QUOTE] DOM elements:",{quoteTextcontainer:e,quoteAuthorContainer:t}),!e||!t){console.warn("[QUOTE] DOM elements NOT FOUND — quote cannot be rendered");return}try{const o=localStorage.getItem("quoteOfTheDay");console.log("[QUOTE] Raw LS data:",o);const n=JSON.parse(o),r=j();console.log("[QUOTE] Today date:",r),console.log("[QUOTE] Parsed LS data:",n);let a,i;if(n&&n.date===r)console.log("[QUOTE] Using cached quote from localStorage"),a=n.author,i=n.quote;else{console.log("[QUOTE] Fetching new quote from API...");const l=await We();console.log("[QUOTE] API response:",l),a=l==null?void 0:l.author,i=l==null?void 0:l.quote,console.log("[QUOTE] Saving new quote to localStorage"),localStorage.setItem("quoteOfTheDay",JSON.stringify({date:r,author:a,quote:i}))}console.log("[QUOTE] Final quote:",{authorName:a,authorQuote:i}),e.textContent=i||"No quote available",t.textContent=a||"Unknown author",console.log("[QUOTE] Quote successfully rendered")}catch(o){console.error("[QUOTE] Error loading quote of the day:",o)}}function T(){const e=window.location.pathname,t=e==="/"||e.endsWith("/index.html")||e.endsWith("/GoIt-web-page/")||e.endsWith("/GoIt-web-page/index.html"),o=e.endsWith("/favorites.html")||e.endsWith("/GoIt-web-page/favorites.html");t&&Le(),o&&Q(),Z();const n=document.querySelector("#subscribe-form");n&&!n.dataset.bound&&(n.dataset.bound="true",n.addEventListener("submit",async r=>{r.preventDefault();try{const a=n.email.value;await G(a),n.reset()}catch(a){console.log(a)}}))}function Ge(){je(),Je();const e=()=>T();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),window.addEventListener("popstate",T),window.addEventListener("app:navigated",T),d.burgerButton.addEventListener("click",te),d.closeButton.addEventListener("click",L),d.backdrop.addEventListener("click",oe),document.addEventListener("keydown",ne),d.navLinks.forEach(t=>t.addEventListener("click",ae)),window.addEventListener("scroll",V),b.scrollToTopBtn.addEventListener("click",K)}Ge();
//# sourceMappingURL=main-Cl1SAFPT.js.map
