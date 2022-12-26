function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.c656b272.js","lp5u4":"sprite.8ba11ac9.svg","7mVsD":"index.6a2204c4.css"}')),document.body.onload=function(){setTimeout((function(){const e=document.querySelector("#preloader");e.classList.contains("done")||e.classList.add("done")}),1500)};const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}].reduce(((e,{id:t,name:n})=>(e[t]=n,e)),{other:"Other"});function a(e){return e.length>3&&e.splice(2,e.length-2,"other"),e.map((e=>o[e]))}function l({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){let o=a(r);const l=`https://image.tmdb.org/t/p/w400/${t}`,c=i?i.slice(0,4):"",u=o.join(", "),d=s.toFixed(1);return null===t?`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <span class="card-rating">${d}</span>\n  <div class="card_no-img">\n  <p class="no-poster">Poster coming soon</p>\n</div>\n  </a>\n      <div class="card-wrap">\n        <h3 class="card-name">${n}</h3>\n        <p class="card-genres">${u} | ${c}</p>\n      </div>\n  </article>\n  </li>`:`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <span class="card-rating">${d}</span>\n  <a href="" class="card_link">\n  <img class="card_img" width="394" src=${l} alt=${n} loading="lazy">\n  </a>\n      <div class="card-wrap">\n        <h3 class="card-name">${n}</h3>\n        <p class="card-genres">${u} | ${c}</p>\n      </div>\n  </article>\n  </li>`}const c={galleryList:document.querySelector(".collection_list"),formSearch:document.querySelector(".search-form"),arrow:document.querySelector(".arrow-ref"),header:document.querySelector(".header"),logo:document.querySelector(".header .logo"),homeLink:document.querySelector("#home-link"),myLibraryLink:document.querySelector("#my-library-link"),headerButtons:document.querySelectorAll(".header-button"),loginButton:document.querySelector('[data-action="login"]'),logoutButton:document.querySelector('[data-action="logout"]'),watchedButton:document.querySelector('[data-activ="watched"]'),queueButton:document.querySelector('[data-activ="queue"]'),searchErrorMessage:document.querySelector("#search-form p"),searchButton:document.querySelector('[data-activ="search"]'),movieModalContainer:document.querySelector(".movie-modal__container"),movieModalBackDrop:document.querySelector(".movie-backdrop"),movieModalCloseBtn:document.querySelector(".modal-close-btn"),modalCardItem:document.querySelector(".cardItem__image"),trailerBtn:document.querySelector(".trailer-button"),trailerVideo:document.querySelector(".trailer"),modalWatchedButton:document.querySelector("[data-action-modal-watched]"),modalQueueButton:document.querySelector("[data-action-modal-queue]"),auth:document.querySelector(".auth"),authForm:document.querySelector(".auth__form"),authCancelButton:document.querySelector('.auth [data-action="cancel"]'),openModalBtn:document.querySelector("[data-team-modal-open]"),closeModalBtn:document.querySelector("[data-team-modal-close]"),modalTeam:document.querySelector("[data-team-modal]"),galleryWatchedBtn:document.querySelector('button[data-activ="watched"]'),libMenu:document.querySelector("[data-modal]"),libMenuCloseBtn:document.querySelector(".lib_modal-close-btn"),bestCardContainer:document.querySelector(".proposed-card"),galleryQueueBtn:document.querySelector('button[data-activ="queue"]'),addToQueueBtn:document.querySelector(".addToQueue"),galleryContainer:document.querySelector(".gallery-container"),plug:document.querySelector(".plug"),pagin_box:document.querySelector(".pagin_box"),pagin_button_el_1:document.querySelector(".pagin_button_el_1"),pagin_button_el_2:document.querySelector(".pagin_button_el_2"),pagin_button_el_3:document.querySelector(".pagin_button_el_3"),pagin_button_el_4:document.querySelector(".pagin_button_el_4"),pagin_button_el_5:document.querySelector(".pagin_button_el_5"),pagin_button_el_6:document.querySelector(".pagin_button_el_6"),pagin_button_el_7:document.querySelector(".pagin_button_el_7"),pagin_button_el_8:document.querySelector(".pagin_button_el_8"),pagin_button_el_9:document.querySelector(".pagin_button_el_9"),pagin_button_el_10:document.querySelector(".pagin_button_el_10"),pagin_button_el_11:document.querySelector(".pagin_button_el_11"),themeToggle:document.querySelector(".theme-toggle"),HTML:document.querySelector("html")};function u(e){let t=e.map(l).join("");c.galleryList.innerHTML="",c.galleryList.insertAdjacentHTML("beforeend",t)}function d({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){let o=a(r);const l=`https://image.tmdb.org/t/p/w400/${t}`,c=i?i.slice(0,4):"",u=o.join(", "),d=s.toFixed(1);return null===t?`<li class="collection_item">\n    <article class="card" data-id=${e}>\n    <div class="card_no-img">\n    <p class="no-poster">Poster coming soon</p>\n  </div>\n    <div class="library-card-wrap-info">\n          <h3 class="card-name">${n}</h3>\n          <p class="library-card-genres">${u} | ${c}<span class="library-card-rating">${d}</span></p>\n        </div>\n    </article>\n    </li>`:`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <a href="" class="card_link">\n  <img class="card_img" width="394" src=${l} alt=${n} loading="lazy">\n  </a>\n  <div class="library-card-wrap-info">\n        <h3 class="card-name">${n}</h3>\n        <p class="library-card-genres">${u} | ${c}<span class="library-card-rating">${d}</span></p>\n      </div>\n  </article>\n  </li>`}function h(e){let t=e.map(d).join("");c.galleryList.innerHTML="",c.galleryList.insertAdjacentHTML("beforeend",t)}function f(e){e.currentTarget!==c.closeModalBtn&&e.currentTarget!==e.target&&"Escape"!==e.code||(c.modalTeam.classList.add("visually-team-hidden"),document.body.classList.remove("modal-open-team"),c.openModalBtn.removeAttribute("disabled",""),c.modalTeam.removeEventListener("mousedown",f),document.removeEventListener("keydown",f))}c.openModalBtn.addEventListener("click",(function(){c.modalTeam.classList.toggle("visually-team-hidden"),document.body.classList.add("modal-open-team"),c.openModalBtn.setAttribute("disabled",""),c.closeModalBtn.addEventListener("click",f),c.modalTeam.addEventListener("mousedown",f),document.addEventListener("keydown",f)}));let p=e=>{};let g=1,m=g-4,_=g-3,v=g-2,b=g-1,y=g+1,w=g+2,I=g+3,E=g+4,C=1;function T(){window.scrollTo(0,0),k(),0===C||1===C?S():2===C?1===g?(c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_8.classList.contains("hidden")||c.pagin_button_el_8.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`):2===g&&(c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_8.classList.contains("hidden")||c.pagin_button_el_8.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`):3===C?1===g?(c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`):2===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`,c.pagin_button_el_8.innerHTML=`${y}`):3===g&&(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_8.classList.add("pagin_accent"),c.pagin_button_el_6.innerHTML=`${v}`,c.pagin_button_el_7.innerHTML=`${b}`,c.pagin_button_el_8.innerHTML=`${g}`):4===C?1===g?(c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_5.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${g}`,c.pagin_button_el_6.innerHTML=`${y}`,c.pagin_button_el_7.innerHTML=`${w}`,c.pagin_button_el_8.innerHTML=`${I}`):2===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`):3===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${v}`,c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`,c.pagin_button_el_8.innerHTML=`${y}`):4===g&&(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.add("hidden"),c.pagin_button_el_8.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${_}`,c.pagin_button_el_6.innerHTML=`${v}`,c.pagin_button_el_7.innerHTML=`${b}`,c.pagin_button_el_8.innerHTML=`${g}`):5===C?1===g?(c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_4.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${g}`,c.pagin_button_el_5.innerHTML=`${y}`,c.pagin_button_el_6.innerHTML=`${w}`,c.pagin_button_el_7.innerHTML=`${I}`,c.pagin_button_el_8.innerHTML=`${E}`):2===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_5.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${b}`,c.pagin_button_el_5.innerHTML=`${g}`,c.pagin_button_el_6.innerHTML=`${y}`,c.pagin_button_el_7.innerHTML=`${w}`,c.pagin_button_el_8.innerHTML=`${I}`):3===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${v}`,c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`):4===g?(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${_}`,c.pagin_button_el_5.innerHTML=`${v}`,c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`,c.pagin_button_el_8.innerHTML=`${y}`):5===g&&(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.add("hidden"),c.pagin_button_el_8.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${m}`,c.pagin_button_el_5.innerHTML=`${_}`,c.pagin_button_el_6.innerHTML=`${v}`,c.pagin_button_el_7.innerHTML=`${b}`,c.pagin_button_el_8.innerHTML=`${g}`):6===C?1===g?(L(),R(),c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_4.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${g}`,c.pagin_button_el_5.innerHTML=`${y}`,c.pagin_button_el_6.innerHTML=`${w}`,c.pagin_button_el_7.innerHTML=`${I}`,c.pagin_button_el_8.innerHTML=`${E}`,c.pagin_button_el_10.innerHTML=`${C}`):2===g?(R(),L(),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_5.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${b}`,c.pagin_button_el_5.innerHTML=`${g}`,c.pagin_button_el_6.innerHTML=`${y}`,c.pagin_button_el_7.innerHTML=`${w}`,c.pagin_button_el_8.innerHTML=`${I}`):3===g?(R(),L(),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_5.innerHTML=`${v}`,c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`):4===g||5===g?(R(),L(),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${_}`,c.pagin_button_el_5.innerHTML=`${v}`,c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`,c.pagin_button_el_8.innerHTML=`${y}`,c.pagin_button_el_10.innerHTML=`${C}`):g===C&&(R(),L(),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.add("hidden"),c.pagin_button_el_8.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${m}`,c.pagin_button_el_5.innerHTML=`${_}`,c.pagin_button_el_6.innerHTML=`${v}`,c.pagin_button_el_7.innerHTML=`${b}`,c.pagin_button_el_8.innerHTML=`${g}`):C>6&&(1===g?(L(),R(),c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${g}`,c.pagin_button_el_5.innerHTML=`${y}`,c.pagin_button_el_6.innerHTML=`${w}`,c.pagin_button_el_7.innerHTML=`${I}`,c.pagin_button_el_8.innerHTML=`${E}`,c.pagin_button_el_10.innerHTML=`${C}`):2===g?(R(),L(),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_5.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${b}`,c.pagin_button_el_5.innerHTML=`${g}`,c.pagin_button_el_6.innerHTML=`${y}`,c.pagin_button_el_7.innerHTML=`${w}`,c.pagin_button_el_8.innerHTML=`${I}`,c.pagin_button_el_10.innerHTML=`${C}`):3===g?(R(),L(),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${v}`,c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`,c.pagin_button_el_10.innerHTML=`${C}`):g>=4&&g<=C-3?(R(),L(),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_2.innerHTML="1",c.pagin_button_el_4.innerHTML=`${v}`,c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`,c.pagin_button_el_10.innerHTML=`${C}`):g===C-2?(R(),L(),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_6.classList.add("pagin_accent"),c.pagin_button_el_4.innerHTML=`${v}`,c.pagin_button_el_5.innerHTML=`${b}`,c.pagin_button_el_6.innerHTML=`${g}`,c.pagin_button_el_7.innerHTML=`${y}`,c.pagin_button_el_8.innerHTML=`${w}`,c.pagin_button_el_10.innerHTML=`${C}`):g===C-1?(R(),L(),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_7.classList.add("pagin_accent"),c.pagin_button_el_2.innerHTML="1",c.pagin_button_el_4.innerHTML=`${_}`,c.pagin_button_el_5.innerHTML=`${v}`,c.pagin_button_el_6.innerHTML=`${b}`,c.pagin_button_el_7.innerHTML=`${g}`,c.pagin_button_el_8.innerHTML=`${y}`):g===C&&(R(),L(),c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_8.classList.add("pagin_accent"),c.pagin_button_el_2.innerHTML="1",c.pagin_button_el_4.innerHTML=`${m}`,c.pagin_button_el_5.innerHTML=`${_}`,c.pagin_button_el_6.innerHTML=`${v}`,c.pagin_button_el_7.innerHTML=`${b}`,c.pagin_button_el_8.innerHTML=`${g}`)),window.innerWidth<480&&(c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"))}function S(){c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.add("hidden"),c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.add("hidden"),c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.add("hidden"),c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.add("hidden"),c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.add("hidden"),c.pagin_button_el_6.classList.contains("hidden")||c.pagin_button_el_6.classList.add("hidden"),c.pagin_button_el_7.classList.contains("hidden")||c.pagin_button_el_7.classList.add("hidden"),c.pagin_button_el_8.classList.contains("hidden")||c.pagin_button_el_8.classList.add("hidden"),c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.add("hidden"),c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.add("hidden"),c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.add("hidden")}function k(){m=g-4,_=g-3,v=g-2,b=g-1,y=g+1,w=g+2,I=g+3,E=g+4}function L(){!1===c.pagin_button_el_1.classList.contains("hidden")||c.pagin_button_el_1.classList.remove("hidden"),!1===c.pagin_button_el_2.classList.contains("hidden")||c.pagin_button_el_2.classList.remove("hidden"),!1===c.pagin_button_el_3.classList.contains("hidden")||c.pagin_button_el_3.classList.remove("hidden"),!1===c.pagin_button_el_4.classList.contains("hidden")||c.pagin_button_el_4.classList.remove("hidden"),!1===c.pagin_button_el_5.classList.contains("hidden")||c.pagin_button_el_5.classList.remove("hidden"),!1===c.pagin_button_el_6.classList.contains("hidden")||c.pagin_button_el_6.classList.remove("hidden"),!1===c.pagin_button_el_7.classList.contains("hidden")||c.pagin_button_el_7.classList.remove("hidden"),!1===c.pagin_button_el_8.classList.contains("hidden")||c.pagin_button_el_8.classList.remove("hidden"),!1===c.pagin_button_el_9.classList.contains("hidden")||c.pagin_button_el_9.classList.remove("hidden"),!1===c.pagin_button_el_10.classList.contains("hidden")||c.pagin_button_el_10.classList.remove("hidden"),!1===c.pagin_button_el_11.classList.contains("hidden")||c.pagin_button_el_11.classList.remove("hidden")}function R(){!1===c.pagin_button_el_1.classList.contains("pagin_accent")||c.pagin_button_el_1.classList.remove("pagin_accent"),!1===c.pagin_button_el_2.classList.contains("pagin_accent")||c.pagin_button_el_2.classList.remove("pagin_accent"),!1===c.pagin_button_el_3.classList.contains("pagin_accent")||c.pagin_button_el_3.classList.remove("pagin_accent"),!1===c.pagin_button_el_4.classList.contains("pagin_accent")||c.pagin_button_el_4.classList.remove("pagin_accent"),!1===c.pagin_button_el_5.classList.contains("pagin_accent")||c.pagin_button_el_5.classList.remove("pagin_accent"),!1===c.pagin_button_el_6.classList.contains("pagin_accent")||c.pagin_button_el_6.classList.remove("pagin_accent"),!1===c.pagin_button_el_7.classList.contains("pagin_accent")||c.pagin_button_el_7.classList.remove("pagin_accent"),!1===c.pagin_button_el_8.classList.contains("pagin_accent")||c.pagin_button_el_8.classList.remove("pagin_accent"),!1===c.pagin_button_el_9.classList.contains("pagin_accent")||c.pagin_button_el_9.classList.remove("pagin_accent"),!1===c.pagin_button_el_10.classList.contains("pagin_accent")||c.pagin_button_el_10.classList.remove("pagin_accent"),!1===c.pagin_button_el_11.classList.contains("pagin_accent")||c.pagin_button_el_11.classList.remove("pagin_accent")}function A(){const e=document.querySelector("#preloader");e.classList.contains("done")&&(e.classList.remove("done"),e.style.backgroundColor="#ffffff00")}function P(){const e=document.querySelector("#preloader");e.classList.contains("done")||e.classList.add("done")}c.pagin_box.addEventListener("click",(function(e){if("submit"===e.target.type)return Number(g)===Number(e.target.innerText)?e.target.blur():e.target.classList.contains("pagin_button_left")?(g--,k(),p(g),T(),e.target.blur()):e.target.classList.contains("pagin_button_el_11")?(g++,k(),p(g),T(),e.target.blur()):(g=Number(e.target.innerText),k(),p(g),T(),e.target.blur());e.target.blur()}));var N={};function O(e,t){return function(){return e.apply(t,arguments)}}e(N,"default",(function(){return ce}),(function(e){return ce=e}));const{toString:M}=Object.prototype,{getPrototypeOf:x}=Object,D=(U=Object.create(null),e=>{const t=M.call(e);return U[t]||(U[t]=t.slice(8,-1).toLowerCase())});var U;const F=e=>(e=e.toLowerCase(),t=>D(t)===e),B=e=>t=>typeof t===e,{isArray:j}=Array,H=B("undefined");const q=F("ArrayBuffer");const $=B("string"),V=B("function"),W=B("number"),z=e=>null!==e&&"object"==typeof e,K=e=>{if("object"!==D(e))return!1;const t=x(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},G=F("Date"),Y=F("File"),J=F("Blob"),X=F("FileList"),Q=F("URLSearchParams");function Z(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),j(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const te="undefined"==typeof self?void 0===t?void 0:t:self,ne=e=>!H(e)&&e!==te;const ie=(re="undefined"!=typeof Uint8Array&&x(Uint8Array),e=>re&&e instanceof re);var re;const se=F("HTMLFormElement"),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ae=F("RegExp"),le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Z(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var ce={isArray:j,isArrayBuffer:q,isBuffer:function(e){return null!==e&&!H(e)&&null!==e.constructor&&!H(e.constructor)&&V(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||M.call(e)===t||V(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&q(e.buffer),t},isString:$,isNumber:W,isBoolean:e=>!0===e||!1===e,isObject:z,isPlainObject:K,isUndefined:H,isDate:G,isFile:Y,isBlob:J,isRegExp:ae,isFunction:V,isStream:e=>z(e)&&V(e.pipe),isURLSearchParams:Q,isTypedArray:ie,isFileList:X,forEach:Z,merge:function e(){const{caseless:t}=ne(this)&&this||{},n={},i=(i,r)=>{const s=t&&ee(n,r)||r;K(n[s])&&K(i)?n[s]=e(n[s],i):K(i)?n[s]=e({},i):j(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Z(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(Z(t,((t,i)=>{n&&V(t)?e[i]=O(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&x(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:D,kindOfTest:F,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!W(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:se,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:le,freezeMethods:e=>{le(e,((t,n)=>{if(V(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];V(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return j(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:ee,global:te,isContextDefined:ne,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(z(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=j(e)?[]:{};return Z(e,((e,t)=>{const s=n(e,i+1);!H(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function ue(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}N.default.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const de=ue.prototype,he={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{he[e]={value:e}})),Object.defineProperties(ue,he),Object.defineProperty(de,"isAxiosError",{value:!0}),ue.from=(e,t,n,i,r,s)=>{const o=Object.create(de);return N.default.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ue.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var fe,pe,ge,me=ue,_e=n("object"==typeof self?self.FormData:window.FormData);pe=function(e){var t,n,i=Se(e),r=i[0],s=i[1],o=new Ie(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=we[e.charCodeAt(n)]<<18|we[e.charCodeAt(n+1)]<<12|we[e.charCodeAt(n+2)]<<6|we[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=we[e.charCodeAt(n)]<<2|we[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=we[e.charCodeAt(n)]<<10|we[e.charCodeAt(n+1)]<<4|we[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},ge=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(ke(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(ye[t>>2]+ye[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(ye[t>>10]+ye[t>>4&63]+ye[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var ve,be,ye=[],we=[],Ie="undefined"!=typeof Uint8Array?Uint8Array:Array,Ee="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ce=0,Te=Ee.length;Ce<Te;++Ce)ye[Ce]=Ee[Ce],we[Ee.charCodeAt(Ce)]=Ce;function Se(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ke(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(ye[(r=i)>>18&63]+ye[r>>12&63]+ye[r>>6&63]+ye[63&r]);return s.join("")}we["-".charCodeAt(0)]=62,we["_".charCodeAt(0)]=63,ve=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?r-1:0,h=n?-1:1,f=e[t+d];for(d+=h,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+d],d+=h,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c}return(f?-1:1)*o*Math.pow(2,s-i)},be=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,d=u>>1,h=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(a=0,o=u):o+d>=1?(a=(t*l-1)*Math.pow(2,r),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g};const Le="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;fe=Ae;function Re(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Ae.prototype),t}function Ae(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Oe(e)}return Pe(e,t,n)}function Pe(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Ae.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Ue(e,t);let i=Re(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(mt(e,Uint8Array)){const t=new Uint8Array(e);return xe(t.buffer,t.byteOffset,t.byteLength)}return Me(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(mt(e,ArrayBuffer)||e&&mt(e.buffer,ArrayBuffer))return xe(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(mt(e,SharedArrayBuffer)||e&&mt(e.buffer,SharedArrayBuffer)))return xe(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Ae.from(i,t,n);const r=function(e){if(Ae.isBuffer(e)){const t=0|De(e.length),n=Re(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||_t(e.length)?Re(0):Me(e);if("Buffer"===e.type&&Array.isArray(e.data))return Me(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Ae.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Ne(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Oe(e){return Ne(e),Re(e<0?0:0|De(e))}function Me(e){const t=e.length<0?0:0|De(e.length),n=Re(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function xe(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Ae.prototype),i}function De(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Ue(e,t){if(Ae.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||mt(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ft(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return pt(e).length;default:if(r)return i?-1:ft(e).length;t=(""+t).toLowerCase(),r=!0}}function Fe(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Xe(this,t,n);case"utf8":case"utf-8":return Ge(this,t,n);case"ascii":return Ye(this,t,n);case"latin1":case"binary":return Je(this,t,n);case"base64":return Ke(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qe(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function Be(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function je(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),_t(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=Ae.from(t,i)),Ae.isBuffer(t))return 0===t.length?-1:He(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):He(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function He(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function qe(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(_t(i))return o;e[n+o]=i}return o}function $e(e,t,n,i){return gt(ft(t,e.length-n),e,n,i)}function Ve(e,t,n,i){return gt(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function We(e,t,n,i){return gt(pt(t),e,n,i)}function ze(e,t,n,i){return gt(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function Ke(e,t,n){return 0===t&&n===e.length?ge(e):ge(e.slice(t,n))}function Ge(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}Ae.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Ae.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Ae.prototype,"parent",{enumerable:!0,get:function(){if(Ae.isBuffer(this))return this.buffer}}),Object.defineProperty(Ae.prototype,"offset",{enumerable:!0,get:function(){if(Ae.isBuffer(this))return this.byteOffset}}),Ae.poolSize=8192,Ae.from=function(e,t,n){return Pe(e,t,n)},Object.setPrototypeOf(Ae.prototype,Uint8Array.prototype),Object.setPrototypeOf(Ae,Uint8Array),Ae.alloc=function(e,t,n){return function(e,t,n){return Ne(e),e<=0?Re(e):void 0!==t?"string"==typeof n?Re(e).fill(t,n):Re(e).fill(t):Re(e)}(e,t,n)},Ae.allocUnsafe=function(e){return Oe(e)},Ae.allocUnsafeSlow=function(e){return Oe(e)},Ae.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Ae.prototype},Ae.compare=function(e,t){if(mt(e,Uint8Array)&&(e=Ae.from(e,e.offset,e.byteLength)),mt(t,Uint8Array)&&(t=Ae.from(t,t.offset,t.byteLength)),!Ae.isBuffer(e)||!Ae.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},Ae.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ae.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Ae.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Ae.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(mt(t,Uint8Array))r+t.length>i.length?(Ae.isBuffer(t)||(t=Ae.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!Ae.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},Ae.byteLength=Ue,Ae.prototype._isBuffer=!0,Ae.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Be(this,t,t+1);return this},Ae.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Be(this,t,t+3),Be(this,t+1,t+2);return this},Ae.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Be(this,t,t+7),Be(this,t+1,t+6),Be(this,t+2,t+5),Be(this,t+3,t+4);return this},Ae.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ge(this,0,e):Fe.apply(this,arguments)},Ae.prototype.toLocaleString=Ae.prototype.toString,Ae.prototype.equals=function(e){if(!Ae.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Ae.compare(this,e)},Ae.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Le&&(Ae.prototype[Le]=Ae.prototype.inspect),Ae.prototype.compare=function(e,t,n,i,r){if(mt(e,Uint8Array)&&(e=Ae.from(e,e.offset,e.byteLength)),!Ae.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},Ae.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Ae.prototype.indexOf=function(e,t,n){return je(this,e,t,n,!0)},Ae.prototype.lastIndexOf=function(e,t,n){return je(this,e,t,n,!1)},Ae.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return qe(this,e,t,n);case"utf8":case"utf-8":return $e(this,e,t,n);case"ascii":case"latin1":case"binary":return Ve(this,e,t,n);case"base64":return We(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ze(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Ae.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ye(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Je(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Xe(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=vt[e[i]];return r}function Qe(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Ze(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function et(e,t,n,i,r,s){if(!Ae.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function tt(e,t,n,i,r){ct(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function nt(e,t,n,i,r){ct(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function it(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function rt(e,t,n,i,r){return t=+t,n>>>=0,r||it(e,0,n,4),be(e,t,n,i,23,4),n+4}function st(e,t,n,i,r){return t=+t,n>>>=0,r||it(e,0,n,8),be(e,t,n,i,52,8),n+8}Ae.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Ae.prototype),i},Ae.prototype.readUintLE=Ae.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ze(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},Ae.prototype.readUintBE=Ae.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ze(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},Ae.prototype.readUint8=Ae.prototype.readUInt8=function(e,t){return e>>>=0,t||Ze(e,1,this.length),this[e]},Ae.prototype.readUint16LE=Ae.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ze(e,2,this.length),this[e]|this[e+1]<<8},Ae.prototype.readUint16BE=Ae.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ze(e,2,this.length),this[e]<<8|this[e+1]},Ae.prototype.readUint32LE=Ae.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Ae.prototype.readUint32BE=Ae.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Ae.prototype.readBigUInt64LE=bt((function(e){ut(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dt(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Ae.prototype.readBigUInt64BE=bt((function(e){ut(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dt(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Ae.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ze(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},Ae.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ze(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},Ae.prototype.readInt8=function(e,t){return e>>>=0,t||Ze(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Ae.prototype.readInt16LE=function(e,t){e>>>=0,t||Ze(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Ae.prototype.readInt16BE=function(e,t){e>>>=0,t||Ze(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Ae.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Ae.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Ae.prototype.readBigInt64LE=bt((function(e){ut(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dt(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Ae.prototype.readBigInt64BE=bt((function(e){ut(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dt(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Ae.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),ve(this,e,!0,23,4)},Ae.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ze(e,4,this.length),ve(this,e,!1,23,4)},Ae.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ze(e,8,this.length),ve(this,e,!0,52,8)},Ae.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ze(e,8,this.length),ve(this,e,!1,52,8)},Ae.prototype.writeUintLE=Ae.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){et(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},Ae.prototype.writeUintBE=Ae.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){et(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},Ae.prototype.writeUint8=Ae.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,1,255,0),this[t]=255&e,t+1},Ae.prototype.writeUint16LE=Ae.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Ae.prototype.writeUint16BE=Ae.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Ae.prototype.writeUint32LE=Ae.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Ae.prototype.writeUint32BE=Ae.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ae.prototype.writeBigUInt64LE=bt((function(e,t=0){return tt(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ae.prototype.writeBigUInt64BE=bt((function(e,t=0){return nt(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ae.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);et(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Ae.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);et(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Ae.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Ae.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Ae.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Ae.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Ae.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||et(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ae.prototype.writeBigInt64LE=bt((function(e,t=0){return tt(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ae.prototype.writeBigInt64BE=bt((function(e,t=0){return nt(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ae.prototype.writeFloatLE=function(e,t,n){return rt(this,e,t,!0,n)},Ae.prototype.writeFloatBE=function(e,t,n){return rt(this,e,t,!1,n)},Ae.prototype.writeDoubleLE=function(e,t,n){return st(this,e,t,!0,n)},Ae.prototype.writeDoubleBE=function(e,t,n){return st(this,e,t,!1,n)},Ae.prototype.copy=function(e,t,n,i){if(!Ae.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},Ae.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Ae.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=Ae.isBuffer(e)?e:Ae.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const ot={};function at(e,t,n){ot[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function lt(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function ct(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new ot.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){ut(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||dt(t,e.length-(n+1))}(i,r,s)}function ut(e,t){if("number"!=typeof e)throw new ot.ERR_INVALID_ARG_TYPE(t,"number",e)}function dt(e,t,n){if(Math.floor(e)!==e)throw ut(e,n),new ot.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new ot.ERR_BUFFER_OUT_OF_BOUNDS;throw new ot.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}at("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),at("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),at("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=lt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=lt(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const ht=/[^+/0-9A-Za-z-_]/g;function ft(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function pt(e){return pe(function(e){if((e=(e=e.split("=")[0]).trim().replace(ht,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function gt(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function mt(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function _t(e){return e!=e}const vt=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function bt(e){return"undefined"==typeof BigInt?yt:e}function yt(){throw new Error("BigInt not supported")}var wt=fe;function It(e){return N.default.isPlainObject(e)||N.default.isArray(e)}function Et(e){return N.default.endsWith(e,"[]")?e.slice(0,-2):e}function Ct(e,t,n){return e?e.concat(t).map((function(e,t){return e=Et(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Tt=N.default.toFlatObject(N.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var St=function(e,t,n){if(!N.default.isObject(e))throw new TypeError("target must be an object");t=t||new(_e||FormData);const i=(n=N.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!N.default.isUndefined(t[e])}))).metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=t)&&N.default.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!N.default.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(N.default.isDate(e))return e.toISOString();if(!a&&N.default.isBlob(e))throw new me("Blob is not supported. Use a Buffer instead.");return N.default.isArrayBuffer(e)||N.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):wt.from(e):e}function u(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(N.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(N.default.isArray(e)&&function(e){return N.default.isArray(e)&&!e.some(It)}(e)||N.default.isFileList(e)||N.default.endsWith(n,"[]")&&(a=N.default.toArray(e)))return n=Et(n),a.forEach((function(e,i){!N.default.isUndefined(e)&&null!==e&&t.append(!0===o?Ct([n],i,s):null===o?n:n+"[]",c(e))})),!1;return!!It(e)||(t.append(Ct(r,n,s),c(e)),!1)}const d=[],h=Object.assign(Tt,{defaultVisitor:u,convertValue:c,isVisitable:It});if(!N.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!N.default.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+i.join("."));d.push(n),N.default.forEach(n,(function(n,s){!0===(!(N.default.isUndefined(n)||null===n)&&r.call(t,n,N.default.isString(s)?s.trim():s,i,h))&&e(n,i?i.concat(s):[s])})),d.pop()}}(e),t};function kt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Lt(e,t){this._pairs=[],e&&St(e,this,t)}const Rt=Lt.prototype;Rt.append=function(e,t){this._pairs.push([e,t])},Rt.toString=function(e){const t=e?function(t){return e.call(this,t,kt)}:kt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var At=Lt;function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nt(e,t,n){if(!t)return e;const i=n&&n.encode||Pt,r=n&&n.serialize;let s;if(s=r?r(t,n):N.default.isURLSearchParams(t)?t.toString():new At(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Ot=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xt="undefined"!=typeof URLSearchParams?URLSearchParams:At,Dt=FormData;const Ut=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),Ft="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Bt={isBrowser:!0,classes:{URLSearchParams:xt,FormData:Dt,Blob:Blob},isStandardBrowserEnv:Ut,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function jt(e,t){return St(e,new Bt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return Bt.isNode&&N.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var Ht=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&N.default.isArray(i)?i.length:s,a)return N.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&N.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&N.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(N.default.isFormData(e)&&N.default.isFunction(e.entries)){const n={};return N.default.forEachEntry(e,((e,i)=>{t(function(e){return N.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const qt={"Content-Type":void 0};const $t={transitional:Mt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=N.default.isObject(e);r&&N.default.isHTMLForm(e)&&(e=new FormData(e));if(N.default.isFormData(e))return i&&i?JSON.stringify(Ht(e)):e;if(N.default.isArrayBuffer(e)||N.default.isBuffer(e)||N.default.isStream(e)||N.default.isFile(e)||N.default.isBlob(e))return e;if(N.default.isArrayBufferView(e))return e.buffer;if(N.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return jt(e,this.formSerializer).toString();if((s=N.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return St(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(N.default.isString(e))try{return(t||JSON.parse)(e),N.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||$t.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&N.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw me.from(e,me.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bt.classes.FormData,Blob:Bt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};N.default.forEach(["delete","get","head"],(function(e){$t.headers[e]={}})),N.default.forEach(["post","put","patch"],(function(e){$t.headers[e]=N.default.merge(qt)}));var Vt=$t;const Wt=N.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var zt=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&Wt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Kt=Symbol("internals");function Gt(e){return e&&String(e).trim().toLowerCase()}function Yt(e){return!1===e||null==e?e:N.default.isArray(e)?e.map(Yt):String(e)}function Jt(e,t,n,i){return N.default.isFunction(i)?i.call(this,t,n):N.default.isString(t)?N.default.isString(i)?-1!==t.indexOf(i):N.default.isRegExp(i)?i.test(t):void 0:void 0}let Xt=Symbol.iterator,Qt=Symbol.toStringTag;class Zt{set(e,t,n){const i=this;function r(e,t,n){const r=Gt(t);if(!r)throw new Error("header name must be a non-empty string");const s=N.default.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=Yt(e))}const s=(e,t)=>N.default.forEach(e,((e,n)=>r(e,n,t)));return N.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):N.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(zt(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Gt(e)){const n=N.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(N.default.isFunction(t))return t.call(this,e,n);if(N.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Gt(e)){const n=N.default.findKey(this,e);return!(!n||t&&!Jt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Gt(e)){const r=N.default.findKey(n,e);!r||t&&!Jt(0,n[r],r,t)||(delete n[r],i=!0)}}return N.default.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return N.default.forEach(this,((i,r)=>{const s=N.default.findKey(n,r);if(s)return t[s]=Yt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=Yt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return N.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&N.default.isArray(n)?n.join(", "):n)})),t}[Xt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Qt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Kt]=this[Kt]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Gt(e);t[i]||(!function(e,t){const n=N.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return N.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),N.default.freezeMethods(Zt.prototype),N.default.freezeMethods(Zt);var en=Zt;function tn(e,t){const n=this||Vt,i=t||n,r=en.from(i.headers);let s=i.data;return N.default.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function nn(e){return!(!e||!e.__CANCEL__)}function rn(e,t,n){me.call(this,null==e?"canceled":e,me.ERR_CANCELED,t,n),this.name="CanceledError"}N.default.inherits(rn,me,{__CANCEL__:!0});var sn=rn;function on(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var an=Bt.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),N.default.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),N.default.isString(i)&&o.push("path="+i),N.default.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function cn(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?ln(e,t):t}var un=Bt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=N.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var hn=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-r<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function fn(e,t){let n=0;const i=hn(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var pn="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=en.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}N.default.isFormData(i)&&(Bt.isStandardBrowserEnv||Bt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=cn(e.baseURL,e.url);function u(){if(!l)return;const i=en.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());on((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Nt(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new me("Request aborted",me.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new me("Network Error",me.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Mt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new me(t,i.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,l)),l=null},Bt.isStandardBrowserEnv){const t=(e.withCredentials||un(c))&&e.xsrfCookieName&&an.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&N.default.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),N.default.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",fn(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",fn(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new sn(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=dn(c);d&&-1===Bt.protocols.indexOf(d)?n(new me("Unsupported protocol "+d+":",me.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const gn={http:null,xhr:pn};N.default.forEach(gn,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var mn={getAdapter:e=>{e=N.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=N.default.isString(n)?gn[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new me(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(N.default.hasOwnProp(gn,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!N.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:gn};function _n(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new sn(null,e)}function vn(e){_n(e),e.headers=en.from(e.headers),e.data=tn.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return mn.getAdapter(e.adapter||Vt.adapter)(e).then((function(t){return _n(e),t.data=tn.call(e,e.transformResponse,t),t.headers=en.from(t.headers),t}),(function(t){return nn(t)||(_n(e),t&&t.response&&(t.response.data=tn.call(e,e.transformResponse,t.response),t.response.headers=en.from(t.response.headers))),Promise.reject(t)}))}const bn=e=>e instanceof en?e.toJSON():e;function yn(e,t){t=t||{};const n={};function i(e,t,n){return N.default.isPlainObject(e)&&N.default.isPlainObject(t)?N.default.merge.call({caseless:n},e,t):N.default.isPlainObject(t)?N.default.merge({},t):N.default.isArray(t)?t.slice():t}function r(e,t,n){return N.default.isUndefined(t)?N.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!N.default.isUndefined(t))return i(void 0,t)}function o(e,t){return N.default.isUndefined(t)?N.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(bn(e),bn(t),!0)};return N.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=l[i]||r,o=s(e[i],t[i],i);N.default.isUndefined(o)&&s!==a||(n[i]=o)})),n}const wn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{wn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const In={};wn.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new me(i(r," has been removed"+(t?" in "+t:"")),me.ERR_DEPRECATED);return t&&!In[r]&&(In[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var En={assertOptions:function(e,t,n){if("object"!=typeof e)throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new me("option "+s+" must be "+n,me.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new me("Unknown option "+s,me.ERR_BAD_OPTION)}},validators:wn};const Cn=En.validators;class Tn{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=yn(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&En.assertOptions(n,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean)},!1),void 0!==i&&En.assertOptions(i,{encode:Cn.function,serialize:Cn.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&N.default.merge(r.common,r[t.method]),s&&N.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=en.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[vn.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=o.length;let h=t;for(d=0;d<u;){const e=o[d++],t=o[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{c=vn.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return Nt(cn((e=yn(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Ot,response:new Ot}}}N.default.forEach(["delete","get","head","options"],(function(e){Tn.prototype[e]=function(t,n){return this.request(yn(n||{},{method:e,url:t,data:(n||{}).data}))}})),N.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(yn(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Tn.prototype[e]=t(),Tn.prototype[e+"Form"]=t(!0)}));var Sn=Tn;class kn{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new kn((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new sn(e,i,r),t(n.reason))}))}}var Ln=kn;const Rn=function e(t){const n=new Sn(t),i=O(Sn.prototype.request,n);return N.default.extend(i,Sn.prototype,n,{allOwnKeys:!0}),N.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(yn(t,n))},i}(Vt);Rn.Axios=Sn,Rn.CanceledError=sn,Rn.CancelToken=Ln,Rn.isCancel=nn,Rn.VERSION="1.2.1",Rn.toFormData=St,Rn.AxiosError=me,Rn.Cancel=Rn.CanceledError,Rn.all=function(e){return Promise.all(e)},Rn.spread=function(e){return function(t){return e.apply(null,t)}},Rn.isAxiosError=function(e){return N.default.isObject(e)&&!0===e.isAxiosError},Rn.mergeConfig=yn,Rn.AxiosHeaders=en,Rn.formToJSON=e=>Ht(N.default.isHTMLForm(e)?new FormData(e):e),Rn.default=Rn;var An=Rn;const{Axios:Pn,AxiosError:Nn,CanceledError:On,isCancel:Mn,CancelToken:xn,VERSION:Dn,all:Un,Cancel:Fn,isAxiosError:Bn,spread:jn,toFormData:Hn,AxiosHeaders:qn,formToJSON:$n,mergeConfig:Vn}=An;An.defaults.baseURL="https://api.themoviedb.org/3/";class Wn{async getTrendingFilms(){return(await An.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getTrendingFilmsByPage(e){return await An.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmBySearch(){return(await An.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getFilmSearchByPage(e){return await An.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmById(e){return await An.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>e.data))}async getFilmMassiveById(e){if(0===e.length)return[];let t=e.map((e=>this.getFilmById(e)));return t=await Promise.allSettled(t),t=t.filter((({status:e})=>"fulfilled"===e)).map((({value:e})=>e)),t}async getGenres(){return(await An.get(`/genre/movie/list?api_key=${this.KEY}&language=en-US`).then((e=>data))).genres}async getTrailer(e){return(await An.get(`/movie/${e}/videos?api_key=${this.KEY}&language=en-US`).then((e=>e.data))).results.filter((e=>"Official Trailer"===e.name))[0]}async getFilmById(e){return await An.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>e.data))}constructor(){this.KEY="c23d7755b502540a74ef819e02a6a593",this.page=1,this.query="",this.id=null}}const zn=new Wn;var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0}),Kn.default=function(e,t){var n=Gn.default(e,t,"get");return Yn.default(e,n)};var Gn=Jn(s("fExtF")),Yn=Jn(s("iaRLo"));function Jn(e){return e&&e.__esModule?e:{default:e}}var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0}),Xn.default=function(e,t,n){Zn.default(e,t),t.set(e,n)};var Qn,Zn=(Qn=s("7K24o"))&&Qn.__esModule?Qn:{default:Qn};var ei={};Object.defineProperty(ei,"__esModule",{value:!0}),ei.default=function(e,t,n){var i=ti.default(e,t,"set");return ni.default(e,i,n),n};var ti=ii(s("fExtF")),ni=ii(s("3LGG3"));function ii(e){return e&&e.__esModule?e:{default:e}}var ri={};e(ri,"_DEFAULT_ENTRY_NAME",(function(){return Gr})),e(ri,"_apps",(function(){return Jr})),e(ri,"_components",(function(){return Xr})),e(ri,"_addComponent",(function(){return Qr})),e(ri,"_addOrOverwriteComponent",(function(){return Zr})),e(ri,"_registerComponent",(function(){return es})),e(ri,"_getProvider",(function(){return ts})),e(ri,"_removeServiceInstance",(function(){return ns})),e(ri,"_clearComponents",(function(){return is})),e(ri,"SDK_VERSION",(function(){return os})),e(ri,"initializeApp",(function(){return as})),e(ri,"getApp",(function(){return ls})),e(ri,"getApps",(function(){return cs})),e(ri,"deleteApp",(function(){return us})),e(ri,"registerVersion",(function(){return ds})),e(ri,"onLog",(function(){return hs})),e(ri,"setLogLevel",(function(){return fs})),e(ri,"FirebaseError",(function(){return zi}));var si,oi,ai,li=si={};function ci(){throw new Error("setTimeout has not been defined")}function ui(){throw new Error("clearTimeout has not been defined")}function di(e){if(oi===setTimeout)return setTimeout(e,0);if((oi===ci||!oi)&&setTimeout)return oi=setTimeout,setTimeout(e,0);try{return oi(e,0)}catch(t){try{return oi.call(null,e,0)}catch(t){return oi.call(this,e,0)}}}!function(){try{oi="function"==typeof setTimeout?setTimeout:ci}catch(e){oi=ci}try{ai="function"==typeof clearTimeout?clearTimeout:ui}catch(e){ai=ui}}();var hi,fi=[],pi=!1,gi=-1;function mi(){pi&&hi&&(pi=!1,hi.length?fi=hi.concat(fi):gi=-1,fi.length&&_i())}function _i(){if(!pi){var e=di(mi);pi=!0;for(var t=fi.length;t;){for(hi=fi,fi=[];++gi<t;)hi&&hi[gi].run();gi=-1,t=fi.length}hi=null,pi=!1,function(e){if(ai===clearTimeout)return clearTimeout(e);if((ai===ui||!ai)&&clearTimeout)return ai=clearTimeout,clearTimeout(e);try{ai(e)}catch(t){try{return ai.call(null,e)}catch(t){return ai.call(this,e)}}}(e)}}function vi(e,t){this.fun=e,this.array=t}function bi(){}li.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];fi.push(new vi(e,t)),1!==fi.length||pi||di(_i)},vi.prototype.run=function(){this.fun.apply(null,this.array)},li.title="browser",li.browser=!0,li.env={},li.argv=[],li.version="",li.versions={},li.on=bi,li.addListener=bi,li.once=bi,li.off=bi,li.removeListener=bi,li.removeAllListeners=bi,li.emit=bi,li.prependListener=bi,li.prependOnceListener=bi,li.listeners=function(e){return[]},li.binding=function(e){throw new Error("process.binding is not supported")},li.cwd=function(){return"/"},li.chdir=function(e){throw new Error("process.chdir is not supported")},li.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yi=!1,wi=!1,Ii="${JSCORE_VERSION}",Ei=function(e,t){if(!e)throw Ci(t)},Ci=function(e){return new Error("Firebase Database ("+Ii+") INTERNAL ASSERT FAILED: "+e)},Ti=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Si={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),i.push(n[c],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ti(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ki=function(e){const t=Ti(e);return Si.encodeByteArray(t,!0)},Li=function(e){return ki(e).replace(/\./g,"")},Ri=function(e){try{return Si.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ai(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ni(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pi())}function Oi(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function Mi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function xi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Di(){const e=Pi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ui(){return!0===yi||!0===wi}function Fi(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ji=()=>{try{return Bi()||(()=>{if(void 0===si||void 0===si.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ri(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Hi=e=>{var t,n;return null===(n=null===(t=ji())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},qi=e=>{const t=Hi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},$i=e=>{var t;return null===(t=ji())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Li(JSON.stringify({alg:"none",type:"JWT"})),Li(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Gi,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new zi(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Gi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){return JSON.parse(e)}function Ji(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Yi(Ri(s[0])||""),n=Yi(Ri(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Qi=function(e){const t=Xi(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Zi=function(e){const t=Xi(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function tr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function nr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ir(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function rr(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(sr(n)&&sr(s)){if(!rr(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function sr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function or(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ar(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function ur(e,t){const n=new dr(e,t);return n.subscribe.bind(n)}class dr{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=hr),void 0===i.error&&(i.error=hr),void 0===i.complete&&(i.complete=hr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function hr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Ei(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},gr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mr(e){return e&&e._delegate?e._delegate:e}class _r{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Vi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class br{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=[];var wr,Ir;(Ir=wr||(wr={}))[Ir.DEBUG=0]="DEBUG",Ir[Ir.VERBOSE=1]="VERBOSE",Ir[Ir.INFO=2]="INFO",Ir[Ir.WARN=3]="WARN",Ir[Ir.ERROR=4]="ERROR",Ir[Ir.SILENT=5]="SILENT";const Er={debug:wr.DEBUG,verbose:wr.VERBOSE,info:wr.INFO,warn:wr.WARN,error:wr.ERROR,silent:wr.SILENT},Cr=wr.INFO,Tr={[wr.DEBUG]:"log",[wr.VERBOSE]:"log",[wr.INFO]:"info",[wr.WARN]:"warn",[wr.ERROR]:"error"},Sr=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Tr[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class kr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in wr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Er[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,wr.DEBUG,...e),this._logHandler(this,wr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,wr.VERBOSE,...e),this._logHandler(this,wr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,wr.INFO,...e),this._logHandler(this,wr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,wr.WARN,...e),this._logHandler(this,wr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,wr.ERROR,...e),this._logHandler(this,wr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Cr,this._logHandler=Sr,this._userLogHandler=null,yr.push(this)}}function Lr(e,t){for(const n of yr){let i=null;t&&t.level&&(i=Er[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:wr[n].toLowerCase(),message:s,args:r,type:t.name})}}}let Rr,Ar;const Pr=new WeakMap,Nr=new WeakMap,Or=new WeakMap,Mr=new WeakMap,xr=new WeakMap;let Dr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Nr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Or.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ur(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ar||(Ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(jr(this),t),Br(Pr.get(this))}:function(...t){return Br(e.apply(jr(this),t))}:function(t,...n){const i=e.call(jr(this),t,...n);return Or.set(i,t.sort?t.sort():[t]),Br(i)}}function Fr(e){return"function"==typeof e?Ur(e):(e instanceof IDBTransaction&&function(e){if(Nr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Nr.set(e,t)}(e),t=e,(Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Dr):e);var t}function Br(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Br(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Pr.set(t,e)})).catch((()=>{})),xr.set(t,e),t}(e);if(Mr.has(e))return Mr.get(e);const t=Fr(e);return t!==e&&(Mr.set(e,t),xr.set(t,e)),t}const jr=e=>xr.get(e);function Hr(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Br(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Br(o.result),e.oldVersion,e.newVersion,Br(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const qr=["get","getKey","getAll","getAllKeys","count"],$r=["put","add","delete","clear"],Vr=new Map;function Wr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Vr.get(t))return Vr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=$r.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!qr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Vr.set(t,s),s}Dr=(e=>({...e,get:(t,n,i)=>Wr(t,n)||e.get(t,n,i),has:(t,n)=>!!Wr(t,n)||e.has(t,n)}))(Dr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Kr=new kr("@firebase/app"),Gr="[DEFAULT]",Yr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Jr=new Map,Xr=new Map;function Qr(e,t){try{e.container.addComponent(t)}catch(n){Kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zr(e,t){e.container.addOrOverwriteComponent(t)}function es(e){const t=e.name;if(Xr.has(t))return Kr.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,e);for(const t of Jr.values())Qr(t,e);return!0}function ts(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ns(e,t,n=Gr){ts(e,t).clearInstance(n)}function is(){Xr.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Ki("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _r("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="9.15.0";function as(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw rs.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=ji())||void 0===s?void 0:s.config),!n)throw rs.create("no-options");const o=Jr.get(r);if(o){if(rr(n,o.options)&&rr(i,o.config))return o;throw rs.create("duplicate-app",{appName:r})}const a=new br(r);for(const e of Xr.values())a.addComponent(e);const l=new ss(n,i,a);return Jr.set(r,l),l}function ls(e=Gr){const t=Jr.get(e);if(!t&&e===Gr)return as();if(!t)throw rs.create("no-app",{appName:e});return t}function cs(){return Array.from(Jr.values())}async function us(e){const t=e.name;Jr.has(t)&&(Jr.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ds(e,t,n){var i;let r=null!==(i=Yr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Kr.warn(e.join(" "))}es(new _r(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function hs(e,t){if(null!==e&&"function"!=typeof e)throw rs.create("invalid-log-argument");Lr(e,t)}function fs(e){var t;t=e,yr.forEach((e=>{e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps=null;function gs(){return ps||(ps=Hr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw rs.create("idb-open",{originalErrorMessage:e.message})}))),ps}async function ms(e,t){try{const n=(await gs()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,_s(e)),n.done}catch(e){if(e instanceof zi)Kr.warn(e.message);else{const t=rs.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Kr.warn(t.message)}}}function _s(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=bs();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=bs(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ws(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ws(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Li(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ys(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function bs(){return(new Date).toISOString().substring(0,10)}class ys{async runIndexedDBEnvironmentCheck(){return!!Fi()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await gs()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(_s(e))}catch(e){if(e instanceof zi)Kr.warn(e.message);else{const t=rs.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Kr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ms(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ms(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ws(e){return Li(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Is;Is="",es(new _r("platform-logger",(e=>new zr(e)),"PRIVATE")),es(new _r("heartbeat",(e=>new vs(e)),"PRIVATE")),ds("@firebase/app","0.9.0",Is),ds("@firebase/app","0.9.0","esm2017"),ds("fire-js","");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ji(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Yi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Cs(t)}}catch(e){}return new Ts},ks=Ss("localStorage"),Ls=Ss("sessionStorage"),Rs=new kr("@firebase/database"),As=function(){let e=1;return function(){return e++}}(),Ps=function(e){const t=pr(e),n=new cr;n.update(t);const i=n.digest();return Si.encodeByteArray(i)},Ns=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Ns.apply(null,i):t+="object"==typeof i?Ji(i):i,t+=" "}return t};let Os=null,Ms=!0;const xs=function(e,t){Ei(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Rs.logLevel=wr.VERBOSE,Os=Rs.log.bind(Rs),t&&Ls.set("logging_enabled",!0)):"function"==typeof e?Os=e:(Os=null,Ls.remove("logging_enabled"))},Ds=function(...e){if(!0===Ms&&(Ms=!1,null===Os&&!0===Ls.get("logging_enabled")&&xs(!0)),Os){const t=Ns.apply(null,e);Os(t)}},Us=function(e){return function(...t){Ds(e,...t)}},Fs=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ns(...e);Rs.error(t)},Bs=function(...e){const t=`FIREBASE FATAL ERROR: ${Ns(...e)}`;throw Rs.error(t),new Error(t)},js=function(...e){const t="FIREBASE WARNING: "+Ns(...e);Rs.warn(t)},Hs=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},qs=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Js(e),i=Js(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},$s=function(e,t){return e===t?0:e<t?-1:1},Vs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ji(t))},Ws=function(e){if("object"!=typeof e||null===e)return Ji(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Ji(t[i]),n+=":",n+=Ws(e[t[i]]);return n+="}",n},zs=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ks(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Gs=function(e){Ei(!Hs(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ys=new RegExp("^-?(0*)\\d{1,10}$"),Js=function(e){if(Ys.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Xs=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw js("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Qs=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){js(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ds("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',js(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class to{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}to.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const no=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+e)||this._host}}function ro(e,t,n){let i;if(Ei("string"==typeof t,"typeof type must == string"),Ei("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ks(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{incrementCounter(e,t=1){er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ai(void 0,this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={},ao={};function lo(e){const t=e.toString();return oo[t]||(oo[t]=new so),oo[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Xs((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new co(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ui()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ho(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&no.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){uo.forceAllow_=!0}static forceDisallow(){uo.forceDisallow_=!0}static isAvailable(){return!Ui()&&(!!uo.forceAllow_||!(uo.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ji(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ki(t),i=zs(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ui())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ji(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=lo(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ro(t,"long_polling",e))}}class ho{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ds("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ui()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ds("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ui())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=As(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ho.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Ds("frame writing exception"),e.stack&&Ds(e.stack),Ds(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo=null;"undefined"!=typeof MozWebSocket?fo=MozWebSocket:"undefined"!=typeof WebSocket&&(fo=WebSocket);class po{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!Ui()&&"undefined"!=typeof location&&location.hostname&&no.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),ro(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let e;if(Ui()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Es}/${si.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new fo(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){po.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==fo&&!po.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||!0===ks.get("previous_websocket_failure")}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Yi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ei(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ji(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=zs(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=lo(t),this.connURL=po.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}po.responsesRequiredToBeHealthy=2,po.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{static get ALL_TRANSPORTS(){return[uo,po]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=po&&po.isAvailable();let n=t&&!po.previouslyFailed();if(e.webSocketOnly&&(t||js("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[po];else{const e=this.transports_=[];for(const t of go.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}go.globalTransportInitialized_=!1;class mo{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qs((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vs("t",e),n=Vs("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vs("t",e),n=Vs("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vs("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Fs("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&js("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qs((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new go(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Ei(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Ei(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends vo{static getInstance(){return new bo}getInitialEvent(e){return Ei("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ni()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function wo(){return new yo("")}function Io(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Eo(e){return e.pieces_.length-e.pieceNum_}function Co(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new yo(e.pieces_,t)}function To(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function So(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ko(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new yo(t,0)}function Lo(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof yo)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new yo(n,0)}function Ro(e){return e.pieceNum_>=e.pieces_.length}function Ao(e,t){const n=Io(e),i=Io(t);if(null===n)return t;if(n===i)return Ao(Co(e),Co(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Po(e,t){const n=So(e,0),i=So(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=qs(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function No(e,t){if(Eo(e)!==Eo(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Oo(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Eo(e)>Eo(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Mo{constructor(e,t){this.errorPrefix_=t,this.parts_=So(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=gr(this.parts_[e]);xo(this)}}function xo(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Do(e))}function Do(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends vo{static getInstance(){return new Uo}getInitialEvent(e){return Ei("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends _o{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ji(r)),Ei(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Vi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Ei(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ei(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Fo.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&er(e,"w")){const n=tr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();js(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Zi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Qi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ei(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ji(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Fs("Unrecognized action received from server: "+Ji(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ei(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fo.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Ei(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Ds("getToken() completed but was canceled"):(Ds("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new mo(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{js(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&js(e),a())}}}interrupt(e){Ds("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ds("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nr(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ws(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new yo(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Ds("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ds("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ui()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Es.replace(/\./g,"-")]=1,Ni()?e["framework.cordova"]=1:xi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return nr(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Fo.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ui())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uo.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bo.getInstance().on("online",this.onOnline_,this)}}Fo.nextPersistentConnectionId_=0,Fo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{static Wrap(e,t){return new Bo(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Bo("[MIN_NAME]",e),i=new Bo("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Bo.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;class qo extends jo{static get __EMPTY_NODE(){return Ho}static set __EMPTY_NODE(e){Ho=e}compare(e,t){return qs(e.name,t.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Bo.MIN}maxPost(){return new Bo("[MAX_NAME]",Ho)}makePost(e,t){return Ei("string"==typeof e,"KeyIndex indexValue must always be a string."),new Bo(e,Ho)}toString(){return".key"}}const $o=new qo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Wo{copy(e,t,n,i,r){return new Wo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zo.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zo.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Wo.RED,this.left=null!=i?i:zo.EMPTY_NODE,this.right=null!=r?r:zo.EMPTY_NODE}}Wo.RED=!0,Wo.BLACK=!1;class zo{insert(e,t){return new zo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wo.BLACK,null,null))}remove(e){return new zo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vo(this.root_,null,this.comparator_,!0,e)}constructor(e,t=zo.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e,t){return qs(e.name,t.name)}function Go(e,t){return qs(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;zo.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Wo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Jo=function(e){return"number"==typeof e?"number:"+Gs(e):"string:"+e},Xo=function(e){if(e.isLeafNode()){const t=e.val();Ei("string"==typeof t||"number"==typeof t||"object"==typeof t&&er(t,".sv"),"Priority must be a string or number.")}else Ei(e===Yo||e.isEmpty(),"priority of unexpected type.");Ei(e===Yo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qo,Zo,ea;class ta{static set __childrenNodeConstructor(e){Qo=e}static get __childrenNodeConstructor(){return Qo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ta(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ta.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ro(e)?this:".priority"===Io(e)?this.priorityNode_:ta.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ta.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Io(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Ei(".priority"!==n||1===Eo(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ta.__childrenNodeConstructor.EMPTY_NODE.updateChild(Co(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Gs(this.value_):this.value_,this.lazyHash_=Ps(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ta.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ta.__childrenNodeConstructor?-1:(Ei(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ta.VALUE_TYPE_ORDER.indexOf(t),r=ta.VALUE_TYPE_ORDER.indexOf(n);return Ei(i>=0,"Unknown leaf type: "+t),Ei(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=ta.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ei(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xo(this.priorityNode_)}}ta.VALUE_TYPE_ORDER=["object","boolean","number","string"];const na=new class extends jo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?qs(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Bo.MIN}maxPost(){return new Bo("[MAX_NAME]",new ta("[PRIORITY-POST]",ea))}makePost(e,t){const n=Zo(e);return new Bo(t,new ta("[PRIORITY-POST]",n))}toString(){return".priority"}},ia=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ia,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const sa=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Wo(a,o.node,Wo.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Wo(a,o.node,Wo.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],d=n?n(u):u;l(new Wo(d,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wo.BLACK):(a(i,Wo.BLACK),a(i,Wo.RED))}return s}(new ra(e.length));return new zo(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const aa={};class la{static get Default(){return Ei(aa&&na,"ChildrenNode.ts has not been loaded"),oa=oa||new la({".priority":aa},{".priority":na}),oa}get(e){const t=tr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zo?t:null}hasIndex(e){return er(this.indexSet_,e.toString())}addIndex(e,t){Ei(e!==$o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Bo.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?sa(n,e.getCompare()):aa;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new la(c,l)}addToIndexes(e,t){const n=ir(this.indexes_,((n,i)=>{const r=tr(this.indexSet_,i);if(Ei(r,"Missing index implementation for "+i),n===aa){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Bo.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),sa(n,r.getCompare())}return aa}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Bo(e.name,i))),r.insert(e,e.node)}}));return new la(n,this.indexSet_)}removeFromIndexes(e,t){const n=ir(this.indexes_,(n=>{if(n===aa)return n;{const i=t.get(e.name);return i?n.remove(new Bo(e.name,i)):n}}));return new la(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class ua{static get EMPTY_NODE(){return ca||(ca=new ua(new zo(Go),null,la.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(e){return this.children_.isEmpty()?this:new ua(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ca:t}}getChild(e){const t=Io(e);return null===t?this:this.getImmediateChild(t).getChild(Co(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Ei(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Bo(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?ca:this.priorityNode_;return new ua(i,s,r)}}updateChild(e,t){const n=Io(e);if(null===n)return t;{Ei(".priority"!==Io(e)||1===Eo(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Co(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(na,((s,o)=>{t[s]=o.val(e),n++,r&&ua.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jo(this.getPriority().val())+":"),this.forEachChild(na,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ps(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Bo(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Bo(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Bo(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Bo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Bo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===da?-1:0}withIndex(e){if(e===$o||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ua(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$o||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(na),n=t.getIterator(na);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===$o?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xo(this.priorityNode_),this.children_.isEmpty()&&Ei(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ua.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const da=new class extends ua{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ua.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new zo(Go),ua.EMPTY_NODE,la.Default)}};Object.defineProperties(Bo,{MIN:{value:new Bo("[MIN_NAME]",ua.EMPTY_NODE)},MAX:{value:new Bo("[MAX_NAME]",da)}}),qo.__EMPTY_NODE=ua.EMPTY_NODE,ta.__childrenNodeConstructor=ua,Yo=da,function(e){ea=e}(da);function ha(e,t=null){if(null===e)return ua.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Ei(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ta(e,ha(t))}if(e instanceof Array){let n=ua.EMPTY_NODE;return Ks(e,((t,i)=>{if(er(e,t)&&"."!==t.substring(0,1)){const e=ha(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ha(t))}{const n=[];let i=!1;if(Ks(e,((e,t)=>{if("."!==e.substring(0,1)){const r=ha(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Bo(e,r)))}})),0===n.length)return ua.EMPTY_NODE;const r=sa(n,Ko,(e=>e.name),Go);if(i){const e=sa(n,na.getCompare());return new ua(r,ha(t),new la({".priority":e},{".priority":na}))}return new ua(r,ha(t),la.Default)}}!function(e){Zo=e}(ha);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa extends jo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?qs(e.name,t.name):r}makePost(e,t){const n=ha(e),i=ua.EMPTY_NODE.updateChild(this.indexPath_,n);return new Bo(t,i)}maxPost(){const e=ua.EMPTY_NODE.updateChild(this.indexPath_,da);return new Bo("[MAX_NAME]",e)}toString(){return So(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Ei(!Ro(e)&&".priority"!==Io(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new class extends jo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?qs(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Bo.MIN}maxPost(){return Bo.MAX}makePost(e,t){const n=ha(e);return new Bo(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){return{type:"value",snapshotNode:e}}function ma(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function _a(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function va(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{updateChild(e,t,n,i,r,s){Ei(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(_a(t,o)):Ei(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(ma(t,n)):s.trackChildChange(va(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(na,((e,i)=>{t.hasChild(e)||n.trackChildChange(_a(e,i))})),t.isLeafNode()||t.forEachChild(na,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(va(t,i,r))}else n.trackChildChange(ma(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ua.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Bo(t,n))||(n=ua.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ua.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ua.EMPTY_NODE);const r=this;return t.forEachChild(na,((e,t)=>{r.matches(new Bo(e,t))||(i=i.updateImmediateChild(e,ua.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new ba(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ya.getStartPost_(e),this.endPost_=ya.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Bo(t,n))||(n=ua.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ua.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ua.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ua.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ua.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Ei(o.numChildren()===this.limit_,"");const a=new Bo(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const d=null==u?1:s(u,a);if(c&&!n.isEmpty()&&d>=0)return null!=r&&r.trackChildChange(va(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(_a(t,e));const n=o.updateImmediateChild(t,ua.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(ma(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(_a(l.name,l.node)),r.trackChildChange(ma(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,ua.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ya(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ei(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ei(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Ei(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ei(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ei(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===na}copy(){const e=new Ia;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=na}}function Ea(e){const t={};if(e.isDefault())return t;let n;if(e.index_===na?n="$priority":e.index_===pa?n="$value":e.index_===$o?n="$key":(Ei(e.index_ instanceof fa,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ji(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Ji(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Ji(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Ji(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Ji(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ca(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==na&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends _o{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Ei(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Ta.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ea(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),tr(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ta.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ea(e._queryParams),n=e._path.toString(),i=new Vi;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+or(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Yi(o.responseText)}catch(e){js("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&js("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=ua.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return{value:null,children:new Map}}function La(e,t,n){if(Ro(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Io(t);e.children.has(i)||e.children.set(i,ka());La(e.children.get(i),t=Co(t),n)}}function Ra(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ra(i,new yo(t.toString()+"/"+e),n)}))}class Aa{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ks(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ks(e,((e,i)=>{i>0&&er(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Qs(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Aa(e);const n=1e4+2e4*Math.random();Qs(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na,Oa;function Ma(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Oa=Na||(Na={}))[Oa.OVERWRITE=0]="OVERWRITE",Oa[Oa.MERGE=1]="MERGE",Oa[Oa.ACK_USER_WRITE=2]="ACK_USER_WRITE",Oa[Oa.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class xa{operationForChild(e){if(Ro(this.path)){if(null!=this.affectedTree.value)return Ei(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yo(e));return new xa(wo(),t,this.revert)}}return Ei(Io(this.path)===e,"operationForChild called for unrelated child."),new xa(Co(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Na.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{operationForChild(e){return Ro(this.path)?new Da(this.source,wo()):new Da(this.source,Co(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Na.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{operationForChild(e){return Ro(this.path)?new Ua(this.source,wo(),this.snap.getImmediateChild(e)):new Ua(this.source,Co(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Na.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{operationForChild(e){if(Ro(this.path)){const t=this.children.subtree(new yo(e));return t.isEmpty()?null:t.value?new Ua(this.source,wo(),t.value):new Fa(this.source,wo(),t)}return Ei(Io(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fa(this.source,Co(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Na.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ro(e))return this.isFullyInitialized()&&!this.filtered_;const t=Io(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ha(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ci("Should only compare child_ events.");const i=new Bo(t.childName,t.snapshotNode),r=new Bo(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function qa(e,t){return{eventCache:e,serverCache:t}}function $a(e,t,n,i){return qa(new Ba(t,n,i),e.serverCache)}function Va(e,t,n,i){return qa(e.eventCache,new Ba(t,n,i))}function Wa(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function za(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;class Ga{static fromObject(e){let t=new Ga(null);return Ks(e,((e,n)=>{t=t.set(new yo(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:wo(),value:this.value};if(Ro(e))return null;{const n=Io(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Co(e),t);if(null!=r){return{path:Lo(new yo(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ro(e))return this;{const t=Io(e),n=this.children.get(t);return null!==n?n.subtree(Co(e)):new Ga(null)}}set(e,t){if(Ro(e))return new Ga(t,this.children);{const n=Io(e),i=(this.children.get(n)||new Ga(null)).set(Co(e),t),r=this.children.insert(n,i);return new Ga(this.value,r)}}remove(e){if(Ro(e))return this.children.isEmpty()?new Ga(null):new Ga(null,this.children);{const t=Io(e),n=this.children.get(t);if(n){const i=n.remove(Co(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ga(null):new Ga(this.value,r)}return this}}get(e){if(Ro(e))return this.value;{const t=Io(e),n=this.children.get(t);return n?n.get(Co(e)):null}}setTree(e,t){if(Ro(e))return t;{const n=Io(e),i=(this.children.get(n)||new Ga(null)).setTree(Co(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ga(this.value,r)}}fold(e){return this.fold_(wo(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Lo(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,wo(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ro(e))return null;{const i=Io(e),r=this.children.get(i);return r?r.findOnPath_(Co(e),Lo(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,wo(),t)}foreachOnPath_(e,t,n){if(Ro(e))return this;{this.value&&n(t,this.value);const i=Io(e),r=this.children.get(i);return r?r.foreachOnPath_(Co(e),Lo(t,i),n):new Ga(null)}}foreach(e){this.foreach_(wo(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Lo(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ka||(Ka=new zo($s)),Ka))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{static empty(){return new Ya(new Ga(null))}constructor(e){this.writeTree_=e}}function Ja(e,t,n){if(Ro(t))return new Ya(new Ga(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Ao(r,t);return s=s.updateChild(o,n),new Ya(e.writeTree_.set(r,s))}{const i=new Ga(n),r=e.writeTree_.setTree(t,i);return new Ya(r)}}}function Xa(e,t,n){let i=e;return Ks(n,((e,n)=>{i=Ja(i,Lo(t,e),n)})),i}function Qa(e,t){if(Ro(t))return Ya.empty();{const n=e.writeTree_.setTree(t,new Ga(null));return new Ya(n)}}function Za(e,t){return null!=el(e,t)}function el(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ao(n.path,t)):null}function tl(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(na,((e,n)=>{t.push(new Bo(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Bo(e,n.value))})),t}function nl(e,t){if(Ro(t))return e;{const n=el(e,t);return new Ya(null!=n?new Ga(n):e.writeTree_.subtree(t))}}function il(e){return e.writeTree_.isEmpty()}function rl(e,t){return sl(wo(),e.writeTree_,t)}function sl(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Ei(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=sl(Lo(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Lo(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e,t){return bl(t,e)}function al(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Ei(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&ll(t,i.path)?r=!1:Oo(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=ul(e.allWrites,cl,wo()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Qa(e.visibleWrites,i.path);else{Ks(i.children,(t=>{e.visibleWrites=Qa(e.visibleWrites,Lo(i.path,t))}))}return!0}return!1}function ll(e,t){if(e.snap)return Oo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Oo(Lo(e.path,n),t))return!0;return!1}function cl(e){return e.visible}function ul(e,t,n){let i=Ya.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Oo(n,e)?(t=Ao(n,e),i=Ja(i,t,s.snap)):Oo(e,n)&&(t=Ao(e,n),i=Ja(i,wo(),s.snap.getChild(t)));else{if(!s.children)throw Ci("WriteRecord should have .snap or .children");if(Oo(n,e))t=Ao(n,e),i=Xa(i,t,s.children);else if(Oo(e,n))if(t=Ao(e,n),Ro(t))i=Xa(i,wo(),s.children);else{const e=tr(s.children,Io(t));if(e){const n=e.getChild(Co(t));i=Ja(i,wo(),n)}}}}}return i}function dl(e,t,n,i,r){if(i||r){const s=nl(e.visibleWrites,t);if(!r&&il(s))return n;if(r||null!=n||Za(s,wo())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Oo(e.path,t)||Oo(t,e.path))};return rl(ul(e.allWrites,s,t),n||ua.EMPTY_NODE)}return null}{const i=el(e.visibleWrites,t);if(null!=i)return i;{const i=nl(e.visibleWrites,t);if(il(i))return n;if(null!=n||Za(i,wo())){return rl(i,n||ua.EMPTY_NODE)}return null}}}function hl(e,t,n,i){return dl(e.writeTree,e.treePath,t,n,i)}function fl(e,t){return function(e,t,n){let i=ua.EMPTY_NODE;const r=el(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(na,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=nl(e.visibleWrites,t);return n.forEachChild(na,((e,t)=>{const n=rl(nl(r,new yo(e)),t);i=i.updateImmediateChild(e,n)})),tl(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return tl(nl(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function pl(e,t,n,i){return function(e,t,n,i,r){Ei(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Lo(t,n);if(Za(e.visibleWrites,s))return null;{const t=nl(e.visibleWrites,s);return il(t)?r.getChild(n):rl(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function gl(e,t){return function(e,t){return el(e.visibleWrites,t)}(e.writeTree,Lo(e.treePath,t))}function ml(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=nl(e.visibleWrites,t),c=el(l,wo());if(null!=c)a=c;else{if(null==n)return[];a=rl(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function _l(e,t,n){return function(e,t,n,i){const r=Lo(t,n),s=el(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return rl(nl(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function vl(e,t){return bl(Lo(e.treePath,t),e.writeTree)}function bl(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{trackChildChange(e){const t=e.type,n=e.childName;Ei("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ei(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,va(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,_a(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ma(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Ci("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,va(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Il{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ba(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _l(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:za(this.viewCache_),r=ml(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e,t,n,i,r){const s=new yl;let o,a;if(n.type===Na.OVERWRITE){const l=n;l.source.fromUser?o=Sl(e,t,l.path,l.snap,i,r,s):(Ei(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ro(l.path),o=Tl(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Na.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Lo(n,i);kl(t,Io(c))&&(a=Sl(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Lo(n,i);kl(t,Io(c))||(a=Sl(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(Ei(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Rl(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Na.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=gl(i,n))return t;{const a=new Il(i,t,r),l=t.eventCache.getNode();let c;if(Ro(n)||".priority"===Io(n)){let n;if(t.serverCache.isFullyInitialized())n=hl(i,za(t));else{const e=t.serverCache.getNode();Ei(e instanceof ua,"serverChildren would be complete if leaf node"),n=fl(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=Io(n);let u=_l(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,Co(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,ua.EMPTY_NODE,Co(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=hl(i,za(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=gl(i,wo()),$a(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=gl(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ro(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tl(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Ro(n)){let i=new Ga(null);return l.getNode().forEachChild($o,((e,t)=>{i=i.set(new yo(e),t)})),Rl(e,t,n,i,r,s,a,o)}return t}{let c=new Ga(null);return i.foreach(((e,t)=>{const i=Lo(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Rl(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Na.LISTEN_COMPLETE)throw Ci("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Va(t,s.getNode(),s.isFullyInitialized()||Ro(n),s.isFiltered());return Cl(e,o,n,i,wl,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Wa(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(ga(Wa(t)))}}(t,o,l),{viewCache:o,changes:l}}function Cl(e,t,n,i,r,s){const o=t.eventCache;if(null!=gl(i,n))return t;{let a,l;if(Ro(n))if(Ei(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=za(t),r=fl(i,n instanceof ua?n:ua.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=hl(i,za(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Io(n);if(".priority"===c){Ei(1===Eo(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=pl(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=Co(n);let d;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=pl(i,n,o.getNode(),l);d=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else d=_l(i,c,t.serverCache);a=null!=d?e.filter.updateChild(o.getNode(),c,d,u,r,s):o.getNode()}}return $a(t,a,o.isFullyInitialized()||Ro(n),e.filter.filtersNodes())}}function Tl(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ro(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Io(n);if(!l.isCompleteForPath(n)&&Eo(n)>1)return t;const r=Co(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,r,wl,null)}const d=Va(t,c,l.isFullyInitialized()||Ro(n),u.filtersNodes());return Cl(e,d,n,r,new Il(r,d,s),a)}function Sl(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new Il(r,t,s);if(Ro(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=$a(t,c,!0,e.filter.filtersNodes());else{const r=Io(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=$a(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Co(n),c=a.getNode().getImmediateChild(r);let d;if(Ro(s))d=i;else{const e=u.getCompleteChild(r);d=null!=e?".priority"===To(s)&&e.getChild(ko(s)).isEmpty()?e:e.updateChild(s,i):ua.EMPTY_NODE}if(c.equals(d))l=t;else{l=$a(t,e.filter.updateChild(a.getNode(),r,d,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function kl(e,t){return e.eventCache.isCompleteForChild(t)}function Ll(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Rl(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ro(n)?i:new Ga(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Ll(0,t.serverCache.getNode().getImmediateChild(n),i);c=Tl(e,c,new yo(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=Ll(0,t.serverCache.getNode().getImmediateChild(n),i);c=Tl(e,c,new yo(n),l,r,s,o,a)}})),c}class Al{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ba(n.getIndex()),r=(s=n).loadsAllData()?new ba(s.getIndex()):s.hasLimit()?new wa(s):new ya(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ua.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ua.EMPTY_NODE,a.getNode(),null),u=new Ba(l,o.isFullyInitialized(),i.filtersNodes()),d=new Ba(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=qa(d,u),this.eventGenerator_=new ja(this.query_)}}function Pl(e,t){const n=za(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ro(t)&&!n.getImmediateChild(Io(t)).isEmpty())?n.getChild(t):null}function Nl(e){return 0===e.eventRegistrations_.length}function Ol(e,t,n){const i=[];if(n){Ei(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Ml(e,t,n,i){t.type===Na.MERGE&&null!==t.source.queryId&&(Ei(za(e.viewCache_),"We should always have a full cache before handling merges"),Ei(Wa(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=El(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Ei(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Ei(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Ei(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,xl(e,s.changes,s.viewCache.eventCache.getNode(),null)}function xl(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ha(e,r,"child_removed",t,i,n),Ha(e,r,"child_added",t,i,n),Ha(e,r,"child_moved",s,i,n),Ha(e,r,"child_changed",t,i,n),Ha(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl,Ul;class Fl{constructor(){this.views=new Map}}function Bl(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Ei(null!=s,"SyncTree gave us an op for an invalid query."),Ml(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Ml(s,t,n,i));return r}}function jl(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=hl(n,r?i:null),s=!1;e?s=!0:i instanceof ua?(e=fl(n,i),s=!1):(e=ua.EMPTY_NODE,s=!1);const o=qa(new Ba(e,s,!1),new Ba(i,r,!1));return new Al(t,o)}return o}function Hl(e,t,n,i,r,s){const o=jl(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(na,((e,t)=>{i.push(ma(e,t))}));return n.isFullyInitialized()&&i.push(ga(n.getNode())),xl(e,i,n.getNode(),t)}(o,n)}function ql(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Kl(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Ol(r,n,i)),Nl(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Ol(t,n,i)),Nl(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Kl(e)&&s.push(new(Ei(Dl,"Reference.ts has not been loaded"),Dl)(t._repo,t._path)),{removed:s,events:o}}function $l(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Vl(e,t){let n=null;for(const i of e.views.values())n=n||Pl(i,t);return n}function Wl(e,t){if(t._queryParams.loadsAllData())return Gl(e);{const n=t._queryIdentifier;return e.views.get(n)}}function zl(e,t){return null!=Wl(e,t)}function Kl(e){return null!=Gl(e)}function Gl(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl=1;class Jl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ga(null),this.pendingWriteTree_={visibleWrites:Ya.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xl(e,t,n,i,r){return function(e,t,n,i,r){Ei(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ja(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?oc(e,new Ua({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ql(e,t,n,i){!function(e,t,n,i){Ei(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Xa(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=Ga.fromObject(n);return oc(e,new Fa({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Zl(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(al(e.pendingWriteTree_,t)){let t=new Ga(null);return null!=i.snap?t=t.set(wo(),!0):Ks(i.children,(e=>{t=t.set(new yo(e),!0)})),oc(e,new xa(i.path,t,n))}return[]}function ec(e,t,n){return oc(e,new Ua({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function tc(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||zl(o,t))){const l=ql(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Kl(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Kl(t)){return[Gl(t)]}{let e=[];return t&&(e=$l(t)),Ks(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=cc(e,i);e.listenProvider_.startListening(gc(r),uc(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(gc(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(dc(t));e.listenProvider_.stopListening(gc(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=dc(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function nc(e,t,n,i){const r=hc(e,i);if(null!=r){const i=fc(r),s=i.path,o=i.queryId,a=Ao(s,t);return pc(e,s,new Ua(Ma(o),a,n))}return[]}function ic(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ao(e,r);s=s||Vl(t,n),o=o||Kl(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||Kl(l),s=s||Vl(l,wo())):(l=new Fl,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=ua.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Vl(t,wo());n&&(s=s.updateImmediateChild(e,n))}))}const c=zl(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=dc(t);Ei(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Yl++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Hl(l,t,n,ol(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!i){const n=Wl(l,t);u=u.concat(function(e,t,n){const i=t._path,r=uc(e,t),s=cc(e,n),o=e.listenProvider_.startListening(gc(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)Ei(!Kl(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ro(e)&&t&&Kl(t))return[Gl(t).query];{let e=[];return t&&(e=e.concat($l(t).map((e=>e.query)))),Ks(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(gc(i),uc(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function rc(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Vl(n,Ao(e,t));if(i)return i}));return dl(i,t,r,n,!0)}function sc(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Ao(e,n);i=i||Vl(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Vl(r,wo()):(r=new Fl,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Ba(i,!0,!1):null;return function(e){return Wa(e.viewCache_)}(jl(r,t,ol(e.pendingWriteTree_,t._path),s?o.getNode():ua.EMPTY_NODE,s))}function oc(e,t){return ac(t,e.syncPointTree_,null,ol(e.pendingWriteTree_,wo()))}function ac(e,t,n,i){if(Ro(e.path))return lc(e,t,n,i);{const r=t.get(wo());null==n&&null!=r&&(n=Vl(r,wo()));let s=[];const o=Io(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=vl(i,o);s=s.concat(ac(a,l,e,t))}return r&&(s=s.concat(Bl(r,e,i,n))),s}}function lc(e,t,n,i){const r=t.get(wo());null==n&&null!=r&&(n=Vl(r,wo()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=vl(i,t),l=e.operationForChild(t);l&&(s=s.concat(lc(l,r,o,a)))})),r&&(s=s.concat(Bl(r,e,i,n))),s}function cc(e,t){const n=t.query,i=uc(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ua.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=hc(e,n);if(i){const n=fc(i),r=n.path,s=n.queryId,o=Ao(r,t);return pc(e,r,new Da(Ma(s),o))}return[]}(e,n._path,i):function(e,t){return oc(e,new Da({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return tc(e,n,null,i)}}}}function uc(e,t){const n=dc(t);return e.queryToTagMap.get(n)}function dc(e){return e._path.toString()+"$"+e._queryIdentifier}function hc(e,t){return e.tagToQueryMap.get(t)}function fc(e){const t=e.indexOf("$");return Ei(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new yo(e.substr(0,t))}}function pc(e,t,n){const i=e.syncPointTree_.get(t);Ei(i,"Missing sync point for query tag that we're tracking");return Bl(i,n,ol(e.pendingWriteTree_,t),null)}function gc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ei(Ul,"Reference.ts has not been loaded"),Ul)(e._repo,e._path):e}class mc{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mc(t)}node(){return this.node_}constructor(e){this.node_=e}}class _c{getImmediateChild(e){const t=Lo(this.path_,e);return new _c(this.syncTree_,t)}node(){return rc(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const vc=function(e,t,n){return e&&"object"==typeof e?(Ei(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?bc(e[".sv"],t,n):"object"==typeof e[".sv"]?yc(e[".sv"],t):void Ei(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},bc=function(e,t,n){if("timestamp"===e)return n.timestamp;Ei(!1,"Unexpected server value: "+e)},yc=function(e,t,n){e.hasOwnProperty("increment")||Ei(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Ei(!1,"Unexpected increment value: "+i);const r=t.node();if(Ei(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},wc=function(e,t,n,i){return Ec(t,new _c(n,e),i)},Ic=function(e,t,n){return Ec(e,new mc(t),n)};function Ec(e,t,n){const i=e.getPriority().val(),r=vc(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=vc(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new ta(s,ha(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new ta(r))),i.forEachChild(na,((e,i)=>{const r=Ec(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Tc(e,t){let n=t instanceof yo?t:new yo(t),i=e,r=Io(n);for(;null!==r;){const e=tr(i.node.children,r)||{children:{},childCount:0};i=new Cc(r,i,e),n=Co(n),r=Io(n)}return i}function Sc(e){return e.node.value}function kc(e,t){e.node.value=t,Nc(e)}function Lc(e){return e.node.childCount>0}function Rc(e,t){Ks(e.node.children,((n,i)=>{t(new Cc(n,e,i))}))}function Ac(e,t,n,i){n&&!i&&t(e),Rc(e,(e=>{Ac(e,t,!0,i)})),n&&i&&t(e)}function Pc(e){return new yo(null===e.parent?e.name:Pc(e.parent)+"/"+e.name)}function Nc(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Sc(e)&&!Lc(e)}(n),r=er(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Nc(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Nc(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Oc=/[\[\].#$\/\u0000-\u001F\u007F]/,Mc=/[\[\].#$\u0000-\u001F\u007F]/,xc=function(e){return"string"==typeof e&&0!==e.length&&!Oc.test(e)},Dc=function(e){return"string"==typeof e&&0!==e.length&&!Mc.test(e)},Uc=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Hs(e)||e&&"object"==typeof e&&er(e,".sv")},Fc=function(e,t,n,i){i&&void 0===t||Bc(fr(e,"value"),t,n)},Bc=function(e,t,n){const i=n instanceof yo?new Mo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Do(i));if("function"==typeof t)throw new Error(e+"contains a function "+Do(i)+" with contents = "+t.toString());if(Hs(t))throw new Error(e+"contains "+t.toString()+" "+Do(i));if("string"==typeof t&&t.length>10485760/3&&gr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Do(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ks(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!xc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Do(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=gr(a),xo(o),Bc(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=gr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Do(i)+" in addition to actual children.")}},jc=function(e,t,n,i){if(i&&void 0===t)return;const r=fr(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];Ks(t,((e,t)=>{const i=new yo(e);if(Bc(r,t,Lo(n,i)),".priority"===To(i)&&!Uc(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=So(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!xc(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Po);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Oo(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)},Hc=function(e,t,n,i){if(!(i&&void 0===n||Dc(n)))throw new Error(fr(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},qc=function(e,t){if(".info"===Io(t))throw new Error(e+" failed = Can't modify data under /.info/")},$c=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!xc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Dc(e)}(n))throw new Error(fr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wc(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||No(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function zc(e,t,n){Wc(e,n),Kc(e,(e=>Oo(e,t)||Oo(t,e)))}function Kc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Gc(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Gc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Os&&Ds("event: "+n.toString()),Xs(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ka(),this.transactionQueueTree_=new Cc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Jc(e,t,n){if(e.stats_=lo(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ta(e.repoInfo_,((t,n,i,r)=>{Zc(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>eu(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ji(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Fo(e.repoInfo_,t,((t,n,i,r)=>{Zc(e,t,n,i,r)}),(t=>{eu(e,t)}),(t=>{!function(e,t){Ks(t,((t,n)=>{tu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ao[n]||(ao[n]=t()),ao[n]}(e.repoInfo_,(()=>new Pa(e.stats_,e.server_))),e.infoData_=new Sa,e.infoSyncTree_=new Jl({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ec(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),tu(e,"connected",!1),e.serverSyncTree_=new Jl({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);zc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xc(e){const t=e.infoData_.getNode(new yo(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Qc(e){return(t=(t={timestamp:Xc(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Zc(e,t,n,i,r){e.dataUpdateCount++;const s=new yo(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=ir(n,(e=>ha(e)));o=function(e,t,n,i){const r=hc(e,i);if(r){const i=fc(r),s=i.path,o=i.queryId,a=Ao(s,t),l=Ga.fromObject(n);return pc(e,s,new Fa(Ma(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ha(n);o=nc(e.serverSyncTree_,s,t,r)}else if(i){const t=ir(n,(e=>ha(e)));o=function(e,t,n){const i=Ga.fromObject(n);return oc(e,new Fa({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ha(n);o=ec(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=cu(e,s)),zc(e.eventQueue_,a,o)}function eu(e,t){tu(e,"connected",t),!1===t&&function(e){su(e,"onDisconnectEvents");const t=Qc(e),n=ka();Ra(e.onDisconnect_,wo(),((i,r)=>{const s=wc(i,r,e.serverSyncTree_,t);La(n,i,s)}));let i=[];Ra(n,wo(),((t,n)=>{i=i.concat(ec(e.serverSyncTree_,t,n));const r=pu(e,t);cu(e,r)})),e.onDisconnect_=ka(),zc(e.eventQueue_,wo(),i)}(e)}function tu(e,t,n){const i=new yo("/.info/"+t),r=ha(n);e.infoData_.updateSnapshot(i,r);const s=ec(e.infoSyncTree_,i,r);zc(e.eventQueue_,i,s)}function nu(e){return e.nextWriteId_++}function iu(e,t,n,i,r){su(e,"set",{path:t.toString(),value:n,priority:i});const s=Qc(e),o=ha(n,i),a=rc(e.serverSyncTree_,t),l=Ic(o,a,s),c=nu(e),u=Xl(e.serverSyncTree_,t,l,c,!0);Wc(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||js("set at "+t+" failed: "+n);const o=Zl(e.serverSyncTree_,c,!s);zc(e.eventQueue_,t,o),ou(e,r,n,i)}));const d=pu(e,t);cu(e,d),zc(e.eventQueue_,d,[])}function ru(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function su(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ds(n,...t)}function ou(e,t,n,i){t&&Xs((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function au(e,t,n){return rc(e.serverSyncTree_,t,n)||ua.EMPTY_NODE}function lu(e,t=e.transactionQueueTree_){if(t||fu(e,t),Sc(t)){const n=du(e,t);Ei(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=au(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Ei(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Ao(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{su(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Zl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();fu(e,Tc(e.transactionQueueTree_,t)),lu(e,e.transactionQueueTree_),zc(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Xs(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{js("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}cu(e,t)}}),o)}(e,Pc(t),n)}else Lc(t)&&Rc(t,(t=>{lu(e,t)}))}function cu(e,t){const n=uu(e,t),i=Pc(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Ao(n,l.path);let u,d=!1;if(Ei(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(Zl(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",r=r.concat(Zl(e.serverSyncTree_,l.currentWriteId,!0));else{const n=au(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Bc("transaction failed: Data returned ",i,l.path);let t=ha(i);"object"==typeof i&&null!=i&&er(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Qc(e),c=Ic(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=nu(e),s.splice(s.indexOf(o),1),r=r.concat(Xl(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(Zl(e.serverSyncTree_,o,!0))}else d=!0,u="nodata",r=r.concat(Zl(e.serverSyncTree_,l.currentWriteId,!0))}zc(e.eventQueue_,n,r),r=[],d&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;fu(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Xs(i[e]);lu(e,e.transactionQueueTree_)}(e,du(e,n),i),i}function uu(e,t){let n,i=e.transactionQueueTree_;for(n=Io(t);null!==n&&void 0===Sc(i);)i=Tc(i,n),n=Io(t=Co(t));return i}function du(e,t){const n=[];return hu(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function hu(e,t,n){const i=Sc(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Rc(t,(t=>{hu(e,t,n)}))}function fu(e,t){const n=Sc(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,kc(t,n.length>0?n:void 0)}Rc(t,(t=>{fu(e,t)}))}function pu(e,t){const n=Pc(uu(e,t)),i=Tc(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{gu(e,t)})),gu(e,i),Ac(i,(t=>{gu(e,t)})),n}function gu(e,t){const n=Sc(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Ei(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Ei(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Zl(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?kc(t,void 0):n.length=s+1,zc(e.eventQueue_,Pc(t),r);for(let e=0;e<i.length;e++)Xs(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(e,t){const n=_u(e),i=n.namespace;"firebase.com"===n.domain&&Bs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Bs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&js("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new io(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new yo(n.pathString)}},_u=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):js(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ji(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class bu{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Ei(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{get key(){return Ro(this._path)?null:To(this._path)}get ref(){return new Iu(this._repo,this._path)}get _queryIdentifier(){const e=Ca(this._queryParams),t=Ws(e);return"{}"===t?"default":t}get _queryObject(){return Ca(this._queryParams)}isEqual(e){if(!((e=mr(e))instanceof wu))return!1;const t=this._repo===e._repo,n=No(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Iu extends wu{get parent(){const e=ko(this._path);return null===e?null:new Iu(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Ia,!1)}}class Eu{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new yo(e),n=Tu(this.ref,e);return new Eu(this._node.getChild(t),n,na)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Eu(n,Tu(this.ref,t),na))))}hasChild(e){const t=new yo(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Cu(e,t){return(e=mr(e))._checkNotDeleted("ref"),void 0!==t?Tu(e._root,t):e._root}function Tu(e,t){var n,i,r,s;return null===Io((e=mr(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Hc(n,i,r,s)):Hc("child","path",t,!1),new Iu(e._repo,Lo(e._path,t))}function Su(e,t){e=mr(e),qc("set",e._path),Fc("set",t,e._path,!1);const n=new Vi;return iu(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function ku(e,t){jc("update",t,e._path,!1);const n=new Vi;return function(e,t,n,i){su(e,"update",{path:t.toString(),value:n});let r=!0;const s=Qc(e),o={};if(Ks(n,((n,i)=>{r=!1,o[n]=wc(Lo(t,n),ha(i),e.serverSyncTree_,s)})),r)Ds("update() called with empty data.  Don't do anything."),ou(0,i,"ok",void 0);else{const r=nu(e),s=Ql(e.serverSyncTree_,t,o,r);Wc(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||js("update at "+t+" failed: "+n);const a=Zl(e.serverSyncTree_,r,!o),l=a.length>0?cu(e,t):t;zc(e.eventQueue_,l,a),ou(0,i,n,s)})),Ks(n,(n=>{const i=pu(e,Lo(t,n));cu(e,i)})),zc(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Lu(e){e=mr(e);const t=new yu((()=>{})),n=new Ru(t);return function(e,t,n){const i=sc(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=ha(i).withIndex(t._queryParams.getIndex());let s;if(ic(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ec(e.serverSyncTree_,t._path,r);else{const n=uc(e.serverSyncTree_,t);s=nc(e.serverSyncTree_,t._path,r,n)}return zc(e.eventQueue_,t._path,s),tc(e.serverSyncTree_,t,n,null,!0),r}),(n=>(su(e,"get for query "+Ji(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Eu(t,new Iu(e._repo,e._path),e._queryParams.getIndex())))}class Ru{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new vu("value",this,new Eu(e.snapshotNode,new Iu(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bu(this,e,t):null}matches(e){return e instanceof Ru&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){Ei(!Dl,"__referenceConstructor has already been defined"),Dl=e}(Iu),function(e){Ei(!Ul,"__referenceConstructor has already been defined"),Ul=e}(Iu);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Au={};let Pu=!1;function Nu(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Bs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ds("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=mu(s,r),c=l.repoInfo;void 0!==si&&si.env&&(a=si.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=mu(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new to(to.OWNER):new eo(e.name,e.options,t);$c("Invalid Firebase Database URL",l),Ro(l.path)||Bs("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Au[t.name];r||(r={},Au[t.name]=r);let s=r[e.toURLString()];s&&Bs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Yc(e,Pu,n,i),r[e.toURLString()]=s,s}(c,e,u,new Zs(e.name,n));return new Ou(d,e)}class Ou{get _repo(){return this._instanceStarted||(Jc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Iu(this._repo,wo())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Au[t];n&&n[e.key]===e||Bs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ru(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Bs("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Fo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Fo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Es=os,es(new _r("database",((e,{instanceIdentifier:t})=>Nu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ds("@firebase/database","0.14.0",e),ds("@firebase/database","0.14.0","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ds("firebase","9.15.0","app");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mu{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),us(this._delegate))))}_getService(e,t=Gr){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Qr(this._delegate,e)}_addOrOverwriteComponent(e){Zr(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,Qr(e,new _r("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Ki("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Du=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,r={}){const s=as(i,r);if(er(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:i,registerVersion:ds,setLogLevel:fs,onLog:hs,apps:null,SDK_VERSION:os,INTERNAL:{registerComponent:function(t){const r=t.name,s=r.replace("-compat","");if(es(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[s])throw xu.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&Ai(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:ri}};function i(e){if(!er(t,e=e||Gr))throw xu.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),i.App=e,n}(Mu);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Ai(t,e)},createSubscribe:ur,ErrorFactory:Ki,deepExtend:Ai}),t}(),Uu=new kr("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Uu.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Uu.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Fu=Du;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ds("@firebase/app-compat","0.2.0",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fu.registerVersion("firebase","9.15.0","app-compat");function Bu(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ju="facebook.com",Hu="github.com",qu="google.com",$u="password",Vu="twitter.com",Wu="EMAIL_SIGNIN",zu="PASSWORD_RESET",Ku="RECOVER_EMAIL",Gu="REVERT_SECOND_FACTOR_ADDITION",Yu="VERIFY_AND_CHANGE_EMAIL",Ju="VERIFY_EMAIL";function Xu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qu=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},Zu=Xu,ed=new Ki("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),td=new kr("@firebase/auth");function nd(e,...t){td.logLevel<=wr.ERROR&&td.error(`Auth (${os}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e,...t){throw ad(e,...t)}function rd(e,...t){return ad(e,...t)}function sd(e,t,n){const i=Object.assign(Object.assign({},Zu()),{[t]:n});return new Ki("auth","Firebase",i).create(t,{appName:e.name})}function od(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&id(e,"argument-error"),sd(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ad(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ed.create(e,...t)}function ld(e,t,...n){if(!e)throw ad(t,...n)}function cd(e){const t="INTERNAL ASSERTION FAILED: "+e;throw nd(t),new Error(t)}function ud(e,t){e||cd(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map;function hd(e){ud(e instanceof Function,"Expected a class definition");let t=dd.get(e);return t?(ud(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,dd.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function pd(){return"http:"===gd()||"https:"===gd()}function gd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class md{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(pd()||Mi()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,ud(t>e,"Short delay should be less than long delay!"),this.isMobile=Ni()||xi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e,t){ud(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},yd=new md(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Id(e,t,n,i,r={}){return Ed(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=or(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),vd.fetch()(Td(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ed(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},bd),t);try{const t=new Sd(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw kd(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kd(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw kd(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw kd(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw sd(e,a,o);id(e,a)}}catch(t){if(t instanceof zi)throw t;id(e,"network-request-failed")}}async function Cd(e,t,n,i,r={}){const s=await Id(e,t,n,i,r);return"mfaPendingCredential"in s&&id(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Td(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?_d(e.config,r):`${e.config.apiScheme}://${r}`}class Sd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(rd(this.auth,"network-request-failed"))),yd.get())}))}}function kd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=rd(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ld(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(e){return 1e3*Number(e)}function Ad(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return nd("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ri(n);return e?JSON.parse(e):(nd("Failed to decode base64 JWT payload"),null)}catch(e){return nd("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pd(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof zi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Nd{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{_initializeTime(){this.lastSignInTime=Ld(this.lastLoginAt),this.creationTime=Ld(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Pd(e,async function(e,t){return Id(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ld(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Bu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Od(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ld(e.idToken,"internal-error"),ld(void 0!==e.idToken,"internal-error"),ld(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ad(e);return ld(t,"internal-error"),ld(void 0!==t.exp,"internal-error"),ld(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ld(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ed(e,{},(async()=>{const n=or({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Td(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",vd.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new xd;return n&&(ld("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ld("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(ld("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xd,this.toJSON())}_performRefresh(){return cd("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(e,t){ld("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ud{async getIdToken(e){const t=await Pd(this,this.stsTokenManager.getToken(this.auth,e));return ld(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=mr(e),i=await n.getIdToken(t),r=Ad(i);ld(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ld(Rd(r.auth_time)),issuedAtTime:Ld(Rd(r.iat)),expirationTime:Ld(Rd(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=mr(e);await Md(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ld(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ud(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ld(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Md(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pd(this,async function(e,t){return Id(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:y,providerData:w,stsTokenManager:I}=t;ld(v&&I,e,"internal-error");const E=xd.fromJSON(this.name,I);ld("string"==typeof v,e,"internal-error"),Dd(u,e.name),Dd(d,e.name),ld("boolean"==typeof b,e,"internal-error"),ld("boolean"==typeof y,e,"internal-error"),Dd(h,e.name),Dd(f,e.name),Dd(p,e.name),Dd(g,e.name),Dd(m,e.name),Dd(_,e.name);const C=new Ud({uid:v,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:y,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:_});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new xd;i.updateFromServerResponse(t);const r=new Ud({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Md(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Od(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Fd.type="NONE";const Bd=Fd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e,t,n){return`firebase:${e}:${t}:${n}`}class Hd{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ud._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hd(hd(Bd),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||hd(Bd);const s=jd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Ud._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Hd(r,e,n)):new Hd(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=jd(this.userKey,i.apiKey,r),this.fullPersistenceKey=jd("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($d(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gd(t))return"Blackberry";if(Yd(t))return"Webos";if(Vd(t))return"Safari";if((t.includes("chrome/")||Wd(t))&&!t.includes("edge/"))return"Chrome";if(Kd(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function $d(e=Pi()){return/firefox\//i.test(e)}function Vd(e=Pi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wd(e=Pi()){return/crios\//i.test(e)}function zd(e=Pi()){return/iemobile/i.test(e)}function Kd(e=Pi()){return/android/i.test(e)}function Gd(e=Pi()){return/blackberry/i.test(e)}function Yd(e=Pi()){return/webos/i.test(e)}function Jd(e=Pi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xd(e=Pi()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Qd(e=Pi()){return Jd(e)||Kd(e)||Yd(e)||Gd(e)||/windows phone/i.test(e)||zd(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zd(e,t=[]){let n;switch(e){case"Browser":n=qd(Pi());break;case"Worker":n=`${qd(Pi())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hd(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Hd.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ld(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Md(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?mr(e):null;return t&&ld(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ld(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(hd(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hd(e)||this._popupRedirectResolver;ld(t,this,"argument-error"),this.redirectPersistenceManager=await Hd.create(this,[hd(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ld(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ld(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ih(this),this.idTokenSubscription=new ih(this),this.beforeStateQueue=new eh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function nh(e){return mr(e)}class ih{get next(){return ld(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=ur((e=>this.observer=e))}}function rh(e,t,n){const i=nh(e);ld(i._canInitEmulator,i,"emulator-config-failed"),ld(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=sh(t),{host:o,port:a}=function(e){const t=sh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:oh(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:oh(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function sh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function oh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ah{toJSON(){return cd("not implemented")}_getIdTokenResponse(e){return cd("not implemented")}_linkToIdToken(e,t){return cd("not implemented")}_getReauthenticationResolver(e){return cd("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(e,t){return Id(e,"POST","/v1/accounts:resetPassword",wd(e,t))}async function ch(e,t){return Id(e,"POST","/v1/accounts:update",t)}async function uh(e,t){return Id(e,"POST","/v1/accounts:sendOobCode",wd(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh extends ah{static _fromEmailAndPassword(e,t){return new dh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithPassword",wd(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithEmailLink",wd(e,t))}(e,{email:this._email,oobCode:this._password});default:id(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ch(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithEmailLink",wd(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:id(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(e,t){return Cd(e,"POST","/v1/accounts:signInWithIdp",wd(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends ah{static _fromParams(e){const t=new fh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):id("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Bu(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new fh(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return hh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=or(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh extends ah{static _fromVerification(e,t){return new gh({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gh({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithPhoneNumber",wd(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Cd(e,"POST","/v1/accounts:signInWithPhoneNumber",wd(e,t));if(n.temporaryProof)throw kd(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithPhoneNumber",wd(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ph)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new gh({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{static parseLink(e){const t=function(e){const t=ar(lr(e)).link,n=t?ar(lr(t)).deep_link_id:null,i=ar(lr(e)).deep_link_id;return(i?ar(lr(i)).link:null)||i||n||t||e}(e);try{return new mh(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=ar(lr(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ld(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{static credential(e,t){return dh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mh.parseLink(t);return ld(n,"argument-error"),dh._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=_h.PROVIDER_ID}}_h.PROVIDER_ID="password",_h.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_h.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends vh{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class yh extends bh{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return ld("providerId"in t&&"signInMethod"in t,"argument-error"),fh._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ld(e.idToken||e.accessToken,"argument-error"),fh._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return yh.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yh.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!(n||i||t||r))return null;if(!o)return null;try{return new yh(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends bh{static credential(e){return fh._fromParams({providerId:wh.PROVIDER_ID,signInMethod:wh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wh.credentialFromTaggedObject(e)}static credentialFromError(e){return wh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wh.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}wh.FACEBOOK_SIGN_IN_METHOD="facebook.com",wh.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ih extends bh{static credential(e,t){return fh._fromParams({providerId:Ih.PROVIDER_ID,signInMethod:Ih.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ih.credentialFromTaggedObject(e)}static credentialFromError(e){return Ih.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ih.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ih.GOOGLE_SIGN_IN_METHOD="google.com",Ih.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh extends bh{static credential(e){return fh._fromParams({providerId:Eh.PROVIDER_ID,signInMethod:Eh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Eh.credentialFromTaggedObject(e)}static credentialFromError(e){return Eh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Eh.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Eh.GITHUB_SIGN_IN_METHOD="github.com",Eh.PROVIDER_ID="github.com";class Ch extends ah{_getIdTokenResponse(e){return hh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hh(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Ch(n,r):null}static _create(e,t){return new Ch(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends vh{static credentialFromResult(e){return Th.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Th.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ch.fromJSON(e);return ld(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ch._create(n,t)}catch(e){return null}}constructor(e){ld(e.startsWith("saml."),"argument-error"),super(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends bh{static credential(e,t){return fh._fromParams({providerId:Sh.PROVIDER_ID,signInMethod:Sh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sh.credentialFromTaggedObject(e)}static credentialFromError(e){return Sh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sh.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kh(e,t){return Cd(e,"POST","/v1/accounts:signUp",wd(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sh.TWITTER_SIGN_IN_METHOD="twitter.com",Sh.PROVIDER_ID="twitter.com";class Lh{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ud._fromIdTokenResponse(e,n,i),s=Rh(n);return new Lh({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Rh(n);return new Lh({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Rh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ah extends zi{static _fromErrorAndOperation(e,t,n,i){return new Ah(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ph(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ah._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(e,t){const n=mr(e);await xh(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return Id(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Nh(i||[]);return n.providerData=n.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Mh(e,t,n=!1){const i=await Pd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Lh._forOperation(e,"link",i)}async function xh(e,t,n){await Md(t);const i=!1===e?"provider-already-linked":"no-such-provider";ld(Nh(t.providerData).has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Pd(e,Ph(i,r,t,e),n);ld(s.idToken,i,"internal-error");const o=Ad(s.idToken);ld(o,i,"internal-error");const{sub:a}=o;return ld(e.uid===a,i,"user-mismatch"),Lh._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&id(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(e,t,n=!1){const i="signIn",r=await Ph(e,i,t),s=await Lh._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Fh(e,t){return Uh(nh(e),t)}async function Bh(e,t){const n=mr(e);return await xh(!1,n,t.providerId),Mh(n,t)}async function jh(e,t){return Dh(mr(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hh(e,t){const n=nh(e),i=await async function(e,t){return Cd(e,"POST","/v1/accounts:signInWithCustomToken",wd(e,t))}(n,{token:t,returnSecureToken:!0}),r=await Lh._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{static _fromServerResponse(e,t){return"phoneInfo"in t?$h._fromServerResponse(e,t):id(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class $h extends qh{static _fromServerResponse(e,t){return new $h(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e,t,n){var i;ld((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),ld(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ld(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(ld(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(e,t,n){const i=mr(e),r={requestType:"PASSWORD_RESET",email:t};n&&Vh(i,r,n),await async function(e,t){return uh(e,t)}(i,r)}async function zh(e,t){await async function(e,t){return Id(e,"POST","/v1/accounts:update",wd(e,t))}(mr(e),{oobCode:t})}async function Kh(e,t){const n=mr(e),i=await lh(n,{oobCode:t}),r=i.requestType;switch(ld(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ld(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ld(i.mfaInfo,n,"internal-error");default:ld(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=qh._fromServerResponse(nh(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gh(e,t,n){const i=mr(e),r={requestType:"EMAIL_SIGNIN",email:t};ld(n.handleCodeInApp,i,"argument-error"),n&&Vh(i,r,n),await async function(e,t){return uh(e,t)}(i,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yh(e,t){const n={identifier:t,continueUri:pd()?fd():"http://localhost"},{signinMethods:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Id(e,"POST","/v1/accounts:createAuthUri",wd(e,t))}(mr(e),n);return i||[]}async function Jh(e,t){const n=mr(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Vh(n.auth,i,t);const{email:r}=await async function(e,t){return uh(e,t)}(n.auth,i);r!==e.email&&await e.reload()}async function Xh(e,t,n){const i=mr(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Vh(i.auth,r,n);const{email:s}=await async function(e,t){return uh(e,t)}(i.auth,r);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qh(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=mr(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Pd(i,async function(e,t){return Id(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}async function Zh(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const s=await Pd(e,ch(i,r));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class tf extends ef{constructor(e,t,n,i){super(e,t,n),this.username=i}}class nf extends ef{constructor(e,t){super(e,"facebook.com",t)}}class rf extends tf{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class sf extends ef{constructor(e,t){super(e,"google.com",t)}}class of extends tf{constructor(e,t,n){super(e,"twitter.com",t,n)}}function af(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=Ad(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new ef(s,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new nf(s,r);case"github.com":return new rf(s,r);case"google.com":return new sf(s,r);case"twitter.com":return new of(s,r,e.screenName||null);case"custom":case"anonymous":return new ef(s,null);default:return new ef(s,i,r)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static _fromIdtoken(e,t){return new lf("enroll",e,t)}static _fromMfaPendingCredential(e){return new lf("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return lf._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return lf._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{static _fromError(e,t){const n=nh(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>qh._fromServerResponse(n,e)));ld(i.mfaPendingCredential,n,"internal-error");const s=lf._fromMfaPendingCredential(i.mfaPendingCredential);return new cf(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Lh._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return ld(t.user,n,"internal-error"),Lh._forOperation(t.user,t.operationType,o);default:id(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}class uf{static _fromUser(e){return new uf(e)}async getSession(){return lf._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await Pd(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),i=await Pd(this.user,(r=this.user.auth,s={idToken:n,mfaEnrollmentId:t},Id(r,"POST","/v2/accounts/mfaEnrollment:withdraw",wd(r,s))));var r,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==e?void 0:e.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>qh._fromServerResponse(e.auth,t))))}))}}const df=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hf{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends hf{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Di()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Pi();return Vd(e)||Jd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qd(),this._shouldAllowMigration=!0}}ff.type="LOCAL";const pf=ff;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends hf{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}gf.type="SESSION";const mf=gf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _f{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _f(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_f.receivers=[];class bf{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=vf("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wf(){return void 0!==yf().WorkerGlobalScope&&"function"==typeof yf().importScripts}class If{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Ef(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Cf(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new If(e).toPromise()}(),t(await Cf()))}))}))}async function Tf(e,t,n){const i=Ef(e,!0).put({fbase_key:t,value:n});return new If(i).toPromise()}function Sf(e,t){const n=Ef(e,!0).delete(t);return new If(n).toPromise()}class kf{async _openDb(){return this.db||(this.db=await Cf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_f._getInstance(wf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new bf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Tf(e,"__sak","1"),await Sf(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Tf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ef(e,!1).get(t),i=await new If(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Sf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ef(e,!1).getAll();return new If(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}kf.type="LOCAL";const Lf=kf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=rd("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Af(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{render(e,t){const n=this.counter;return this._widgets.set(n,new Nf(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}}class Nf{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;ld(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const Of=Af("rcb"),Mf=new md(3e4,6e4);class xf{load(e,t=""){return ld(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(yf().grecaptcha):new Promise(((n,i)=>{const r=yf().setTimeout((()=>{i(rd(e,"network-request-failed"))}),Mf.get());yf()[Of]=()=>{yf().clearTimeout(r),delete yf()[Of];const s=yf().grecaptcha;if(!s)return void i(rd(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Rf(`https://www.google.com/recaptcha/api.js??${or({onload:Of,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),i(rd(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=yf().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=yf().grecaptcha)||void 0===e?void 0:e.render)}}class Df{async load(e){return new Pf(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={theme:"light",type:"image"};class Ff{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){ld(!this.parameters.sitekey,this.auth,"argument-error"),ld(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ld("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=yf()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){ld(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ld(pd()&&!wf(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await Id(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);ld(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ld(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},Uf),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=nh(n),this.isInvisible="invisible"===this.parameters.size,ld("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;ld(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Df:new xf,this.validateStartingState()}}class Bf{confirm(e){const t=gh._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function jf(e,t,n){var i;const r=await n.verify();try{let s;if(ld("string"==typeof r,e,"argument-error"),ld("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){ld("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Id(e,"POST","/v2/accounts/mfaEnrollment:start",wd(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ld("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;ld(n,e,"missing-multi-factor-info");const o=await function(e,t){return Id(e,"POST","/v2/accounts/mfaSignIn:start",wd(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Id(e,"POST","/v1/accounts:sendVerificationCode",wd(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hf{verifyPhoneNumber(e,t){return jf(this.auth,e,mr(t))}static credential(e,t){return gh._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hf.credentialFromTaggedObject(t)}static credentialFromError(e){return Hf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gh._fromTokenResponse(t,n):null}constructor(e){this.providerId=Hf.PROVIDER_ID,this.auth=nh(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qf(e,t){return t?hd(t):(ld(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hf.PROVIDER_ID="phone",Hf.PHONE_SIGN_IN_METHOD="phone";class $f extends ah{_getIdTokenResponse(e){return hh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Vf(e){return Uh(e.auth,new $f(e),e.bypassAuthState)}function Wf(e){const{auth:t,user:n}=e;return ld(n,t,"internal-error"),Dh(n,new $f(e),e.bypassAuthState)}async function zf(e){const{auth:t,user:n}=e;return ld(n,t,"internal-error"),Mh(n,new $f(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vf;case"linkViaPopup":case"linkViaRedirect":return zf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:id(this.auth,"internal-error")}}resolve(e){ud(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ud(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new md(2e3,1e4);class Yf extends Kf{async executeNotNull(){const e=await this.execute();return ld(e,this.auth,"internal-error"),e}async onExecution(){ud(1===this.filter.length,"Popup operations only handle one event");const e=vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(rd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(rd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(rd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Gf.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Yf.currentPopupAction&&Yf.currentPopupAction.cancel(),Yf.currentPopupAction=this}}Yf.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jf=new Map;class Xf extends Kf{async execute(){let e=Jf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=tp(t),i=ep(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Jf.set(this.auth._key(),e)}return this.bypassAuthState||Jf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Qf(e,t){return ep(e)._set(tp(t),"true")}function Zf(e,t){Jf.set(e._key(),t)}function ep(e){return hd(e._redirectPersistence)}function tp(e){return jd("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e,t,n){return async function(e,t,n){const i=nh(e);od(e,t,vh);const r=qf(i,n);return await Qf(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function ip(e,t,n){return async function(e,t,n){const i=mr(e);od(i.auth,t,vh);const r=qf(i.auth,n);await Qf(r,i.auth);const s=await op(i);return r._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)}function rp(e,t,n){return async function(e,t,n){const i=mr(e);od(i.auth,t,vh);const r=qf(i.auth,n);await xh(!1,i,t.providerId),await Qf(r,i.auth);const s=await op(i);return r._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)}async function sp(e,t,n=!1){const i=nh(e),r=qf(i,t),s=new Xf(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function op(e){const t=vf(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cp(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!cp(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(rd(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(lp(e))}saveEventToCache(e){this.cachedEventUids.add(lp(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function lp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function cp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function up(e,t={}){return Id(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hp=/^https?/;function fp(e){const t=fd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!hp.test(n))return!1;if(dp.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new md(3e4,6e4);function gp(){const e=yf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let mp=null;function _p(e){return mp=mp||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(rd(e,"network-request-failed"))},timeout:pp.get()})}if(null===(r=null===(i=yf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=yf().gapi)||void 0===s?void 0:s.load)){const t=Af("iframefcb");return yf()[t]=()=>{gapi.load?o():n(rd(e,"network-request-failed"))},Rf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw mp=null,e}))}(e),mp}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new md(5e3,15e3),bp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wp(e){const t=e.config;ld(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_d(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:os},r=yp.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${or(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ep{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Cp(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ip),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Pi().toLowerCase();n&&(a=Wd(c)?"_blank":n),$d(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Pi()){var t;return Jd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ep(null);const d=window.open(t||"",a,u);ld(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ep(d)}function Tp(e,t,n,i,r,s){ld(e.config.authDomain,e,"auth-domain-config-required"),ld(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:os,eventId:r};if(t instanceof vh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nr(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof bh){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?_d(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${or(a).slice(1)}`}const Sp=class{async _openPopup(e,t,n,i){var r;ud(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Cp(e,Tp(e,t,n,fd(),i),vf())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Tp(e,t,n,fd(),i),yf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ud(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await _p(e),n=yf().gapi;return ld(n,e,"internal-error"),t.open({where:document.body,url:wp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=rd(e,"network-request-failed"),s=yf().setTimeout((()=>{i(r)}),vp.get());function o(){yf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new ap(e);return t.register("authEvent",(t=>{ld(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),id(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await up(e);for(const e of t)try{if(fp(e))return}catch(e){}id(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qd()||Vd()||Jd()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mf,this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}};class kp extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return cd("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new kp(e)}_finalizeEnroll(e,t,n){return function(e,t){return Id(e,"POST","/v2/accounts/mfaEnrollment:finalize",wd(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Id(e,"POST","/v2/accounts/mfaSignIn:finalize",wd(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class Lp{static assertion(e){return kp._fromCredential(e)}constructor(){}}Lp.FACTOR_ID="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rp{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ld(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ap=$i("authIdTokenMaxAge")||300;let Pp=null;var Np;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Op(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Np="Browser",es(new _r("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{ld(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ld(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Np,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zd(Np)},o=new th(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(hd);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),es(new _r("auth-internal",(e=>{const t=nh(e.getProvider("auth").getImmediate());return new Rp(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ds("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Np)),ds("@firebase/auth","0.21.0","esm2017");async function Mp(e,t,n){var i;const{BuildInfo:r}=Op();ud(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(ud(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return Jd()?o.ibi=r.packageName:Kd()?o.apn=r.packageName:id(e,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,Tp(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}function xp(e){const{cordova:t}=Op();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Xd()?"_blank":"_system","location=yes"),n(r)}))}))}class Dp extends ap{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function Up(e){const t=await jp()._get(Hp(e));return t&&await jp()._remove(Hp(e)),t}function Fp(e,t){var n,i;const r=function(e){const t=qp(e),n=t.link?decodeURIComponent(t.link):void 0,i=qp(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return qp(r).link||r||i||n||e}(t);if(r.includes("/__/auth/callback")){const t=qp(r),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(i=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?rd(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function Bp(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function jp(){return hd(pf)}function Hp(e){return jd("authEvent",e.config.apiKey,e.name)}function qp(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return ar(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Dp(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){id(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,r,s,o,a,l,c,u;const d=Op();ld("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ld(void 0!==(null===(n=null==d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ld("function"==typeof(null===(s=null===(r=null===(i=null==d?void 0:d.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ld("function"==typeof(null===(l=null===(a=null===(o=null==d?void 0:d.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ld("function"==typeof(null===(u=null===(c=null==d?void 0:d.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Jf.clear(),await this._originValidation(e);const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Bp(),postBody:null,tenantId:e.tenantId,error:rd(e,"no-auth-event")}}(e,n,i);await function(e,t){return jp()._set(Hp(e),t)}(e,s);const o=await Mp(e,s,t);return async function(e,t,n){const{cordova:i}=Op();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function l(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function c(){a||(a=window.setTimeout((()=>{o(rd(e,"redirect-cancelled-by-user"))}),2e3))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(l),document.addEventListener("resume",c,!1),Kd()&&document.addEventListener("visibilitychange",u,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{r()}}(e,r,await xp(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=Op(),n={};Jd()?n.iosBundleId=t.packageName:Kd()?n.androidPackageName=t.packageName:id(e,"operation-not-supported-in-this-environment"),await up(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Op(),s=setTimeout((async()=>{await Up(e),t.onEvent(Vp())}),500),o=async n=>{clearTimeout(s);const i=await Up(e);let r=null;i&&(null==n?void 0:n.url)&&(r=Fp(i,n.url)),t.onEvent(r||Vp())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=i,l=`${r.packageName.toLowerCase()}://`;Op().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=mf,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}};function Vp(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:rd("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function zp(e=Pi()){return!("file:"!==Wp()&&"ionic:"!==Wp()&&"capacitor:"!==Wp()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Kp(e=Pi()){return Di()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Pi()){return/Edge\/\d+/.test(e)}(e)}function Gp(){try{const e=self.localStorage,t=vf();if(e)return e.setItem(t,"1"),e.removeItem(t),!Kp()||Fi()}catch(e){return Yp()&&Fi()}return!1}function Yp(){return void 0!==t&&"WorkerGlobalScope"in t&&"importScripts"in t}function Jp(){return("http:"===Wp()||"https:"===Wp()||Mi()||zp())&&!(xi()||Oi())&&Gp()&&!Yp()}function Xp(){return zp()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qp={LOCAL:"local",NONE:"none",SESSION:"session"},Zp=ld;async function eg(e){await e._initializationPromise;const t=tg(),n=jd("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function tg(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=ld;class ig{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Xp()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ng(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!Xp()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=hd(Sp),this.cordovaResolver=hd($p),this.underlyingResolver=null,this._redirectPersistence=mf,this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){return e.unwrap()}function sg(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new cg(e,function(e,t){var n;const i=mr(e),r=t;return ld(t.customData.operationType,i,"argument-error"),ld(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),cf._fromError(i,r)}(e,t))}else if(i){const e=og(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function og(e){const{_tokenResponse:t}=e instanceof zi?e.customData:e;if(!t)return null;if(!(e instanceof zi)&&"temporaryProof"in t&&"phoneNumber"in t)return Hf.credentialFromResult(e);const n=t.providerId;if(!n||n===$u)return null;let i;switch(n){case qu:i=Ih;break;case ju:i=wh;break;case Hu:i=Eh;break;case Vu:i=Sh;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return r||s||e||o?o?n.startsWith("saml.")?Ch._create(n,o):fh._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:r}):new yh(n).credential({idToken:e,accessToken:r,rawNonce:a}):null}return e instanceof zi?i.credentialFromError(e):i.credentialFromResult(e)}function ag(e,t){return t.catch((t=>{throw t instanceof zi&&sg(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,og(i)),additionalUserInfo:af(e),user:ug.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i}))}async function lg(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ag(e,n.confirm(t))}}class cg{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ag(rg(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static getOrCreate(e){return ug.USER_MAP.has(e)||ug.USER_MAP.set(e,new ug(e)),ug.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ag(this.auth,Bh(this._delegate,e))}async linkWithPhoneNumber(e,t){return lg(this.auth,async function(e,t,n){const i=mr(e);await xh(!1,i,"phone");const r=await jf(i.auth,t,mr(n));return new Bf(r,(e=>Bh(i,e)))}(this._delegate,e,t))}async linkWithPopup(e){return ag(this.auth,async function(e,t,n){const i=mr(e);od(i.auth,t,vh);const r=qf(i.auth,n);return new Yf(i.auth,"linkViaPopup",t,r,i).executeNotNull()}(this._delegate,e,ig))}async linkWithRedirect(e){return await eg(nh(this.auth)),rp(this._delegate,e,ig)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ag(this.auth,jh(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return lg(this.auth,async function(e,t,n){const i=mr(e),r=await jf(i.auth,t,mr(n));return new Bf(r,(e=>jh(i,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return ag(this.auth,async function(e,t,n){const i=mr(e);od(i.auth,t,vh);const r=qf(i.auth,n);return new Yf(i.auth,"reauthViaPopup",t,r,i).executeNotNull()}(this._delegate,e,ig))}async reauthenticateWithRedirect(e){return await eg(nh(this.auth)),ip(this._delegate,e,ig)}sendEmailVerification(e){return Jh(this._delegate,e)}async unlink(e){return await Oh(this._delegate,e),this}updateEmail(e){return function(e,t){return Zh(mr(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return Zh(mr(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await Mh(mr(e),t)}(this._delegate,e)}updateProfile(e){return Qh(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Xh(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=function(e){const t=mr(e);return df.has(t)||df.set(t,uf._fromUser(t)),df.get(t)}(e)}}ug.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dg=ld;class hg{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ug.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rh(this._delegate,e,t)}applyActionCode(e){return zh(this._delegate,e)}checkActionCode(e){return Kh(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await lh(mr(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ag(this._delegate,async function(e,t,n){const i=nh(e),r=await kh(i,{returnSecureToken:!0,email:t,password:n}),s=await Lh._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Yh(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=mh.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){dg(Jp(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await nh(e)._initializationPromise,sp(e,t,!1)}(this._delegate,ig);return e?ag(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){nh(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=fg(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=fg(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return Gh(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Wh(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){Zp(Object.values(Qp).includes(t),e,"invalid-persistence-type"),xi()?Zp(t!==Qp.SESSION,e,"unsupported-persistence-type"):Oi()?Zp(t===Qp.NONE,e,"unsupported-persistence-type"):Yp()?Zp(t===Qp.NONE||t===Qp.LOCAL&&Fi(),e,"unsupported-persistence-type"):Zp(t===Qp.NONE||Gp(),e,"unsupported-persistence-type")}(this._delegate,e),e){case Qp.SESSION:t=mf;break;case Qp.LOCAL:t=await hd(Lf)._isAvailable()?Lf:pf;break;case Qp.NONE:t=Bd;break;default:return id("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ag(this._delegate,async function(e){var t;const n=nh(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Lh({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await kh(n,{returnSecureToken:!0}),r=await Lh._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return ag(this._delegate,Fh(this._delegate,e))}signInWithCustomToken(e){return ag(this._delegate,Hh(this._delegate,e))}signInWithEmailAndPassword(e,t){return ag(this._delegate,function(e,t,n){return Fh(mr(e),_h.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return ag(this._delegate,async function(e,t,n){const i=mr(e),r=_h.credentialWithLink(t,n||fd());return ld(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Fh(i,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return lg(this._delegate,async function(e,t,n){const i=nh(e),r=await jf(i,t,mr(n));return new Bf(r,(e=>Fh(i,e)))}(this._delegate,e,t))}async signInWithPopup(e){return dg(Jp(),this._delegate,"operation-not-supported-in-this-environment"),ag(this._delegate,async function(e,t,n){const i=nh(e);od(e,t,vh);const r=qf(i,n);return new Yf(i,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,ig))}async signInWithRedirect(e){return dg(Jp(),this._delegate,"operation-not-supported-in-this-environment"),await eg(this._delegate),np(this._delegate,e,ig)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await Kh(mr(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;dg(n,"invalid-api-key",{appName:e.name}),dg(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?ig:void 0;this._delegate=t.initialize({options:{persistence:pg(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Qu),this.linkUnderlyingAuth()}}function fg(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&ug.getOrCreate(e)),error:t,complete:n}}function pg(e,t){const n=function(e,t){const n=tg();if(!n)return[];const i=jd("persistence",e,t);switch(n.getItem(i)){case Qp.NONE:return[Bd];case Qp.LOCAL:return[Lf,mf];case Qp.SESSION:return[mf];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(Lf)||n.push(Lf),"undefined"!=typeof window)for(const e of[pf,mf])n.includes(e)||n.push(e);return n.includes(Bd)||n.push(Bd),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hg.Persistence=Qp;class gg{static credential(e,t){return Hf.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new Hf(rg(Fu.auth()))}}gg.PHONE_SIGN_IN_METHOD=Hf.PHONE_SIGN_IN_METHOD,gg.PROVIDER_ID=Hf.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mg=ld;class _g{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=Fu.app()){var i;mg(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ff(e,t,n.auth()),this.type=this._delegate.type}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vg;(vg=Fu).INTERNAL.registerComponent(new _r("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new hg(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Wu,PASSWORD_RESET:zu,RECOVER_EMAIL:Ku,REVERT_SECOND_FACTOR_ADDITION:Gu,VERIFY_AND_CHANGE_EMAIL:Yu,VERIFY_EMAIL:Ju}},EmailAuthProvider:_h,FacebookAuthProvider:wh,GithubAuthProvider:Eh,GoogleAuthProvider:Ih,OAuthProvider:yh,SAMLAuthProvider:Th,PhoneAuthProvider:gg,PhoneMultiFactorGenerator:Lp,RecaptchaVerifier:_g,TwitterAuthProvider:Sh,Auth:hg,AuthCredential:ah,Error:zi}).setInstantiationMode("LAZY").setMultipleInstances(!1)),vg.registerVersion("@firebase/auth-compat","0.3.0");var bg={};!function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function n(e){e&&e.blur&&e!==document.body&&e.blur()}function i(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var s="DOMNodeRemoved";n|=r.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),o.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}n(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!o.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,o.needsCentering(this.dialog_)?(o.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var n=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var o={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],r=null;try{r=n.cssRules}catch(e){}if(r)for(var s=0;s<r.length;++s){var o=r[s],a=null;try{a=document.querySelectorAll(o.selectorText)}catch(e){}if(a&&i(a,e)){var l=o.style.getPropertyValue("top"),c=o.style.getPropertyValue("bottom");if(l&&"auto"!==l||c&&"auto"!==c)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!o.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||o.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(o.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},o.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},o.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},o.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var n,i=0;n=this.pendingDialogStack[i];++i)if(n.dialog===e)return 0===i;e=e.parentElement}return!1},o.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),n(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},o.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var n=new e("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},o.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},o.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},o.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},o.dm=new o.DialogManager,o.formSubmitter=null,o.useValue=null,void 0===window.HTMLDialogElement){var a=document.createElement("form");if(a.setAttribute("method","dialog"),"dialog"!==a.method){var l=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(l){var c=l.get;l.get=function(){return r(this)?"dialog":c.call(this)};var u=l.set;l.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):u.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",l)}}document.addEventListener("click",(function(e){if(o.formSubmitter=null,o.useValue=null,!e.defaultPrevented){var n=e.target;if(n&&r(n.form)){if(!("submit"===n.type&&["button","input"].indexOf(n.localName)>-1)){if("input"!==n.localName||"image"!==n.type)return;o.useValue=e.offsetX+","+e.offsetY}t(n)&&(o.formSubmitter=n)}}}),!1);var d=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return d.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var n=e.target;if(r(n)){e.preventDefault();var i=t(n);if(i){var s=o.formSubmitter;s&&s.form===n?i.close(o.useValue||s.value):i.close(),o.formSubmitter=null}}}),!0)}o.forceRegisterDialog=o.forceRegisterDialog,o.registerDialog=o.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return o})):"object"==typeof bg?bg=o:window.dialogPolyfill=o}();
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yg,wg,Ig,Eg,Cg={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};Cg=function(){var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==r(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function a(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)a(e[r].className,e[r].cssClass);else{var s=t;if(void 0===n){var o=i(s);o&&(n=o.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)l(c[u],s)}}function l(a,l){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var u=r(a),d=[];if(l)s(a,l)||d.push(i(l));else{var h=a.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!s(a,e.className)&&d.push(e)}))}for(var f,p=0,g=d.length;p<g;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");u.push(f.className),a.setAttribute("data-upgraded",u.join(","));var m=new f.classConstructor(a);m[n]=f,t.push(m);for(var _=0,v=f.callbacks.length;_<v;_++)f.callbacks[_](a);f.widget&&(a[f.className]=m);var b=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function c(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),s=r.indexOf(e[n].classAsString);r.splice(s,1),e.element_.setAttribute("data-upgraded",r.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:l,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(l(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}(),Cg.ComponentConfigPublic,Cg.ComponentConfig,Cg.Component,Cg.upgradeDom=Cg.upgradeDom,Cg.upgradeElement=Cg.upgradeElement,Cg.upgradeElements=Cg.upgradeElements,Cg.upgradeAllRegistered=Cg.upgradeAllRegistered,Cg.registerUpgradedCallback=Cg.registerUpgradedCallback,Cg.register=Cg.register,Cg.downgradeElements=Cg.downgradeElements,window.componentHandler=Cg,window.componentHandler=Cg,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Cg.upgradeAllRegistered()):(Cg.upgradeElement=function(){},Cg.register=function(){})})),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
yg=function(e){this.element_=e,this.init()},window.MaterialButton=yg,yg.prototype.Constant_={},yg.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},yg.prototype.blurHandler_=function(e){e&&this.element_.blur()},yg.prototype.disable=function(){this.element_.disabled=!0},yg.prototype.disable=yg.prototype.disable,yg.prototype.enable=function(){this.element_.disabled=!1},yg.prototype.enable=yg.prototype.enable,yg.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:yg,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wg=function(e){this.element_=e,this.init()},window.MaterialProgress=wg,wg.prototype.Constant_={},wg.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},wg.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},wg.prototype.setProgress=wg.prototype.setProgress,wg.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},wg.prototype.setBuffer=wg.prototype.setBuffer,wg.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:wg,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ig=function(e){this.element_=e,this.init()},window.MaterialSpinner=Ig,Ig.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},Ig.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},Ig.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var s=[n,i,r],o=0;o<s.length;o++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),s[o].appendChild(a)}t.appendChild(n),t.appendChild(i),t.appendChild(r),this.element_.appendChild(t)},Ig.prototype.createLayer=Ig.prototype.createLayer,Ig.prototype.stop=function(){this.element_.classList.remove("is-active")},Ig.prototype.stop=Ig.prototype.stop,Ig.prototype.start=function(){this.element_.classList.add("is-active")},Ig.prototype.start=Ig.prototype.start,Ig.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Ig,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Eg=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Eg,Eg.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Eg.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Eg.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Eg.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Eg.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Eg.prototype.onReset_=function(e){this.updateClasses_()},Eg.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Eg.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Eg.prototype.checkDisabled=Eg.prototype.checkDisabled,Eg.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Eg.prototype.checkFocus=Eg.prototype.checkFocus,Eg.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Eg.prototype.checkValidity=Eg.prototype.checkValidity,Eg.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Eg.prototype.checkDirty=Eg.prototype.checkDirty,Eg.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Eg.prototype.disable=Eg.prototype.disable,Eg.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Eg.prototype.enable=Eg.prototype.enable,Eg.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Eg.prototype.change=Eg.prototype.change,Eg.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Eg,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var e,n,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;e:{var s={};try{s.__proto__={xb:!0},r=s.xb;break e}catch(Xe){}r=!1}n=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var o=n;function a(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,o)o(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},c="undefined"!=typeof window&&window===this?this:void 0!==t&&null!=t?t:this;function u(e,t){if(t){var n=c;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&l(n,e,{configurable:!0,writable:!0,value:t})}}u("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),u("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var d=this;function h(e){return void 0!==e}function f(e){return"string"==typeof e}var p=/^[\w+/_-]+[=]{0,2}$/,g=null;function m(){}function _(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function v(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function b(e){return"array"==v(e)}function y(e){var t=v(e);return"array"==t||"object"==t&&"number"==typeof e.length}function w(e){return"function"==v(e)}function I(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var E="closure_uid_"+(1e9*Math.random()>>>0),C=0;function T(e,t,n){return e.call.apply(e.bind,arguments)}function S(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function k(e,t,n){return(k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?T:S).apply(null,arguments)}function L(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function R(e,t){for(var n in t)e[n]=t[n]}var A,P=Date.now||function(){return+new Date};function N(e,t){e=e.split(".");var n,i=d;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&h(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function O(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function M(e){if(Error.captureStackTrace)Error.captureStackTrace(this,M);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function x(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");M.call(this,n+e[i])}function D(e,t){throw new x("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}O(M,Error),M.prototype.name="CustomError",O(x,M),x.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(f(e))return f(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},F=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=f(e)?e.split(""):e,s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,s=f(e)?e.split(""):e,o=0;o<n;o++)if(o in s){var a=s[o];t.call(void 0,a,o,e)&&(i[r++]=a)}return i},j=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=f(e)?e.split(""):e,s=0;s<n;s++)s in r&&(i[s]=t.call(void 0,r[s],s,e));return i},H=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function q(e,t){return 0<=U(e,t)}function $(e,t){var n;return(n=0<=(t=U(e,t)))&&V(e,t),n}function V(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function W(e,t){!function(e,t){for(var n=f(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&V(e,i)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function K(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function G(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var Y=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},J=/&/g,X=/</g,Q=/>/g,Z=/"/g,ee=/'/g,te=/\x00/g,ne=/[\x00&<>"']/;function ie(e,t){return e<t?-1:e>t?1:0}function re(e){return ne.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(J,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(X,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Z,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(ee,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(te,"&#0;"))),e}function se(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function oe(e){var t,n={};for(t in e)n[t]=e[t];return n}var ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var s=0;s<ae.length;s++)n=ae[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var ce="StopIteration"in d?d.StopIteration:{message:"StopIteration",stack:""};function ue(){}function de(e){if(e instanceof ue)return e;if("function"==typeof e.ha)return e.ha(!1);if(y(e)){var t=0,n=new ue;return n.next=function(){for(;;){if(t>=e.length)throw ce;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function he(e){if(y(e))return K(e);e=de(e);var t=[];return function(e,t){if(y(e))try{F(e,t,void 0)}catch(e){if(e!==ce)throw e}else{e=de(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==ce)throw e}}}(e,(function(e){t.push(e)})),t}function fe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof fe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function pe(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];ge(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)ge(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function ge(e,t){return Object.prototype.hasOwnProperty.call(e,t)}ue.prototype.next=function(){throw ce},ue.prototype.ha=function(){return this},(e=fe.prototype).la=function(){pe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return pe(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return ge(this.g,e)?this.g[e]:t},e.set=function(e,t){ge(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}},e.ha=function(e){pe(this);var t=0,n=this.j,i=this,r=new ue;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw ce;var r=i.a[t++];return e?r:i.g[r]},r};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _e(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var s=e.charCodeAt(t-1);if(!(38!=s&&63!=s||(s=e.charCodeAt(t+r))&&61!=s&&38!=s&&35!=s))return t;t+=r+1}return-1}var ve=/#|$/;function be(e,t){var n=e.search(ve),i=_e(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var ye=/[?&]($|#)/;function we(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof we?(this.i=h(t)?t:e.i,Ie(this,e.j),this.A=e.A,this.h=e.h,Ee(this,e.C),this.g=e.g,Ce(this,Fe(e.a)),this.s=e.s):e&&(n=String(e).match(me))?(this.i=!!t,Ie(this,n[1]||"",!0),this.A=Se(n[2]||""),this.h=Se(n[3]||"",!0),Ee(this,n[4]),this.g=Se(n[5]||"",!0),Ce(this,n[6]||"",!0),this.s=Se(n[7]||"")):(this.i=!!t,this.a=new Me(null,this.i))}function Ie(e,t,n){e.j=n?Se(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ee(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ce(e,t,n){t instanceof Me?(e.a=t,function(e,t){t&&!e.j&&(xe(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(De(this,t),De(this,n),0<e.length&&(this.h=null,this.a.set(Be(this,n),K(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=ke(t,Ne)),e.a=new Me(t,e.i))}function Te(e){return e instanceof we?new we(e):new we(e,void 0)}function Se(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ke(e,t,n){return f(e)?(e=encodeURI(e).replace(t,Le),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Le(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}we.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ke(t,Re,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(ke(t,Re,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(ke(n,"/"==n.charAt(0)?Pe:Ae,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",ke(n,Oe)),e.join("")};var Re=/[#\/\?@]/g,Ae=/[#\?:]/g,Pe=/[#\?]/g,Ne=/[#\?@]/g,Oe=/#/g;function Me(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function xe(e){e.a||(e.a=new fe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function De(e,t){xe(e),t=Be(e,t),ge(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,ge((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&pe(e)))}function Ue(e,t){return xe(e),t=Be(e,t),ge(e.a.g,t)}function Fe(e){var t=new Me;return t.h=e.h,e.a&&(t.a=new fe(e.a),t.g=e.g),t}function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function je(e){this.a=Te(e)}function He(e){return e.a.a.get(Ve.Pa)||null}function qe(e,t){t?e.a.a.set(Ve.PROVIDER_ID,t):De(e.a.a,Ve.PROVIDER_ID)}(e=Me.prototype).add=function(e,t){xe(this),this.h=null,e=Be(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){xe(this),this.a.forEach((function(n,i){F(n,(function(n){e.call(t,n,i,this)}),this)}),this)},e.ja=function(){xe(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},e.la=function(e){xe(this);var t=[];if(f(e))Ue(this,e)&&(t=z(t,this.a.get(Be(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=z(t,e[n])}return t},e.set=function(e,t){return xe(this),this.h=null,Ue(this,e=Be(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.h=e.join("&")},je.prototype.toString=function(){return this.a.toString()};var $e,Ve={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var We=d.navigator;if(We){var ze=We.userAgent;if(ze){$e=ze;break e}}$e=""}function Ke(e){return-1!=$e.indexOf(e)}function Ge(){return(Ke("Chrome")||Ke("CriOS"))&&!Ke("Edge")}function Ye(e){return Ye[" "](e),e}Ye[" "]=m;var Je,Xe,Qe=Ke("Opera"),Ze=Ke("Trident")||Ke("MSIE"),et=Ke("Edge"),tt=et||Ze,nt=Ke("Gecko")&&!(-1!=$e.toLowerCase().indexOf("webkit")&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),it=-1!=$e.toLowerCase().indexOf("webkit")&&!Ke("Edge"),rt=it&&Ke("Mobile"),st=Ke("Macintosh");function ot(){var e=d.document;return e?e.documentMode:void 0}e:{var at="",lt=(Xe=$e,nt?/rv:([^\);]+)(\)|;)/.exec(Xe):et?/Edge\/([\d\.]+)/.exec(Xe):Ze?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xe):it?/WebKit\/(\S+)/.exec(Xe):Qe?/(?:Version)[ \/]?(\S+)/.exec(Xe):void 0);if(lt&&(at=lt?lt[1]:""),Ze){var ct=ot();if(null!=ct&&ct>parseFloat(at)){Je=String(ct);break e}}Je=at}var ut,dt={};function ht(e){return function(e,t){var n=dt;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=Y(String(Je)).split("."),i=Y(String(e)).split("."),r=Math.max(n.length,i.length),s=0;0==t&&s<r;s++){var o=n[s]||"",a=i[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=ie(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||ie(0==o[2].length,0==a[2].length)||ie(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t}))}var ft=d.document;function pt(e,t){this.a=e===mt&&t||"",this.g=gt}ut=ft&&Ze?ot()||("CSS1Compat"==ft.compatMode?parseInt(Je,10):5):void 0,pt.prototype.ma=!0,pt.prototype.ka=function(){return this.a},pt.prototype.toString=function(){return"Const{"+this.a+"}"};var gt={},mt={};function _t(){this.a="",this.h=bt}function vt(e){return e instanceof _t&&e.constructor===_t&&e.h===bt?e.a:(D("expected object of type TrustedResourceUrl, got '"+e+"' of type "+v(e)),"type_error:TrustedResourceUrl")}_t.prototype.ma=!0,_t.prototype.ka=function(){return this.a.toString()},_t.prototype.g=function(){return 1},_t.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var bt={};function yt(){this.a="",this.h=Tt}function wt(e){return e instanceof yt&&e.constructor===yt&&e.h===Tt?e.a:(D("expected object of type SafeUrl, got '"+e+"' of type "+v(e)),"type_error:SafeUrl")}yt.prototype.ma=!0,yt.prototype.ka=function(){return this.a.toString()},yt.prototype.g=function(){return 1},yt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var It=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Et(e){return e instanceof yt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),St(e))}function Ct(e){return e instanceof yt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),St(e))}var Tt={};function St(e){var t=new yt;return t.a=e,t}function kt(){this.a="",this.g=Lt}St("about:blank"),kt.prototype.ma=!0;var Lt={};function Rt(){this.a="",this.j=Pt,this.h=null}function At(e){return e instanceof Rt&&e.constructor===Rt&&e.j===Pt?e.a:(D("expected object of type SafeHtml, got '"+e+"' of type "+v(e)),"type_error:SafeHtml")}kt.prototype.ka=function(){return this.a},kt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Rt.prototype.g=function(){return this.h},Rt.prototype.ma=!0,Rt.prototype.ka=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pt={};function Nt(e,t){var n=new Rt;return n.a=e,n.h=t,n}Nt("<!DOCTYPE html>",0);var Ot=Nt("",0);Nt("<br>",0);var Mt,xt,Dt=(xt=!1,function(){return xt||(Mt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=At(Ot),!t.parentElement)}(),xt=!0),Mt});function Ut(e,t){t=t instanceof yt?t:Ct(t),e.assign(wt(t))}function Ft(e,t){this.a=h(e)?e:0,this.g=h(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function jt(e){return e?new Jt(Kt(e)):A||(A=new Jt)}function Ht(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):$t(document,e,t)}function qt(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):$t(n,e,t)[0]||null}return e||null}function $t(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(n=i=0;e=r[n];n++){var o=e.className;"function"==typeof o.split&&q(o.split(/\s+/),t)&&(s[i++]=e)}return s.length=i,s}return r}Ft.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ft.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ft.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ft.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Vt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Wt(e){return e.scrollingElement?e.scrollingElement:(it||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function zt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Kt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Gt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(Kt(e).createTextNode(String(t)))}}function Yt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||f(e.className)&&q(e.className.split(/\s+/),t)})):null}function Jt(e){this.a=e||d.document||document}Jt.prototype.N=function(){return f(void 0)?this.a.getElementById(void 0):void 0};var Xt={Fc:!0},Qt={Hc:!0},Zt={Ec:!0},en={Gc:!0};function tn(){throw Error("Do not instantiate directly")}function nn(e,t,n,i){if(e=e(t||sn,void 0,n),i=(i||jt()).a.createElement("DIV"),(e=function(e){if(!I(e))return re(String(e));if(e instanceof tn){if(e.fa===Xt)return e.content;if(e.fa===en)return re(e.content)}return D("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(rn),e=Nt(e,null),Dt())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=At(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}tn.prototype.va=null,tn.prototype.toString=function(){return this.content};var rn=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,sn={};function on(){tn.call(this)}function an(e){return null!=e&&e.fa===Xt?e:e instanceof Rt?dn(At(e).toString(),e.g()):dn(re(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function ln(){tn.call(this)}function cn(e,t){this.content=String(e),this.va=null!=t?t:null}function un(e){return new cn(e,void 0)}O(on,tn),on.prototype.fa=Xt,O(ln,tn),ln.prototype.fa=Qt,ln.prototype.va=1,O(cn,tn),cn.prototype.fa=en;var dn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(on),hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(ln);function fn(e){return(e=String(e))?new cn(e,void 0):""}var pn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(on);function gn(e){return null!=e&&e.fa===Xt?String(String(e.content).replace(Sn,"").replace(kn,"&lt;")).replace(In,bn):re(String(e))}function mn(e){return null!=e&&e.fa===Qt?e=String(e).replace(En,wn):e instanceof yt?e=String(wt(e).toString()).replace(En,wn):(e=String(e),Tn.test(e)?e=e.replace(En,wn):(D("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function _n(e){return null!=e&&e.fa===Zt?e=e.content:null==e?e="":e instanceof kt?e instanceof kt&&e.constructor===kt&&e.g===Lt?e=e.a:(D("expected object of type SafeStyle, got '"+e+"' of type "+v(e)),e="type_error:SafeStyle"):(e=String(e),Cn.test(e)||(D("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var vn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function bn(e){return vn[e]}var yn={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function wn(e){return yn[e]}var In=/[\x00\x22\x27\x3c\x3e]/g,En=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Tn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Sn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,kn=/</g;function Ln(){return un("Enter a valid phone number")}function Rn(){return un("Unable to send password reset code to specified email")}function An(){return un("Something went wrong. Please try again.")}function Pn(){return un("This email already exists without any means of sign-in. Please reset the password to recover.")}function Nn(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return un(t)}function On(){return un("Please login again to perform this operation")}function Mn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=xn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=An();e=un(e).toString()}this.message=e||"",this.credential=n||null}a(Mn,Error),Mn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var xn="firebaseui/";function Dn(){0!=Un&&(Fn[this[E]||(this[E]=++C)]=this),this.T=this.T,this.C=this.C}var Un=0,Fn={};function Bn(e,t){e.T?h(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(h(void 0)?k(t,void 0):t))}function jn(e){e&&"function"==typeof e.m&&e.m()}Dn.prototype.T=!1,Dn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Un)){var e=this[E]||(this[E]=++C);if(0!=Un&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Fn[e]}},Dn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Hn=Object.freeze||function(e){return e},qn=!Ze||9<=Number(ut),$n=Ze&&!ht("9"),Vn=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",m,t),d.removeEventListener("test",m,t)}catch(e){}return e}();function Wn(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function zn(e,t){if(Wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nt){e:{try{Ye(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=f(e.pointerType)?e.pointerType:Kn[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}Wn.prototype.stopPropagation=function(){this.h=!0},Wn.prototype.preventDefault=function(){this.qb=!1},O(zn,Wn);var Kn=Hn({2:"touch",3:"pen",4:"mouse"});zn.prototype.stopPropagation=function(){zn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},zn.prototype.preventDefault=function(){zn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,$n)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Gn="closure_listenable_"+(1e6*Math.random()|0),Yn=0;function Jn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++Yn,this.sa=this.Ia=!1}function Xn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Qn(e){this.src=e,this.a={},this.g=0}function Zn(e,t){var n=t.type;n in e.a&&$(e.a[n],t)&&(Xn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ei(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!n&&s.La==i)return r}return-1}Qn.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.g++);var o=ei(e,t,i,r);return-1<o?(t=e[o],n||(t.Ia=!1)):((t=new Jn(t,this.src,s,!!i,r)).Ia=n,e.push(t)),t};var ti="closure_lm_"+(1e6*Math.random()|0),ni={};function ii(e,t,n,i,r){if(i&&i.once)return si(e,t,n,i,r);if(b(t)){for(var s=0;s<t.length;s++)ii(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!1,I(i)?!!i.capture:!!i,r):ri(e,t,n,!1,i,r)}function ri(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=I(r)?!!r.capture:!!r,a=hi(e);if(a||(e[ti]=a=new Qn(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){var e=di,t=qn?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Vn||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(li(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function si(e,t,n,i,r){if(b(t)){for(var s=0;s<t.length;s++)si(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!0,I(i)?!!i.capture:!!i,r):ri(e,t,n,!0,i,r)}function oi(e,t,n,i,r){if(b(t))for(var s=0;s<t.length;s++)oi(e,t[s],n,i,r);else i=I(i)?!!i.capture:!!i,n=pi(n),e&&e[Gn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ei(s=e.a[t],n,i,r))&&(Xn(s[n]),V(s,n),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=hi(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ei(t,n,i,r)),(n=-1<e?t[e]:null)&&ai(n))}function ai(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Gn])Zn(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(li(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=hi(t))?(Zn(n,e),0==n.g&&(n.src=null,t[ti]=null)):Xn(e)}}}function li(e){return e in ni?ni[e]:ni[e]="on"+e}function ci(e,t,n,i){var r=!0;if((e=hi(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==n&&!s.sa&&(s=ui(s,i),r=r&&!1!==s)}return r}function ui(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ai(e),n.call(i,t)}function di(e,t){if(e.sa)return!0;if(!qn){if(!t)e:{t=["window","event"];for(var n=d,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new zn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var s=ci(i[r],e,!0,t);n=n&&s}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],s=ci(i[r],e,!1,t),n=n&&s}return n}return ui(e,new zn(t,this))}function hi(e){return(e=e[ti])instanceof Qn?e:null}var fi="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(e){return w(e)?e:(e[fi]||(e[fi]=function(t){return e.handleEvent(t)}),e[fi])}function gi(){Dn.call(this),this.J=new Qn(this),this.wb=this,this.Ha=null}function mi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,f(t))t=new Wn(t,e);else if(t instanceof Wn)t.target=t.target||e;else{var r=t;le(t=new Wn(i,e),r)}if(r=!0,n)for(var s=n.length-1;!t.h&&0<=s;s--){var o=t.g=n[s];r=_i(o,i,!0,t)&&r}if(t.h||(r=_i(o=t.g=e,i,!0,t)&&r,t.h||(r=_i(o,i,!1,t)&&r)),n)for(s=0;!t.h&&s<n.length;s++)r=_i(o=t.g=n[s],i,!1,t)&&r;return r}function _i(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.sa&&o.capture==n){var a=o.listener,l=o.La||o.src;o.Ia&&Zn(e.J,o),r=!1!==a.call(l,i)&&r}}return r&&0!=i.qb}O(gi,Dn),gi.prototype[Gn]=!0,gi.prototype.Za=function(e){this.Ha=e},gi.prototype.removeEventListener=function(e,t,n,i){oi(this,e,t,n,i)},gi.prototype.o=function(){if(gi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Xn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var vi={},bi=0;function yi(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ii(e),vi[e]&&vi[e].length)for(var n=0;n<vi[e].length;n++)mi(vi[e][n],t)}function wi(e){var t=Ii(e.N());vi[t]&&vi[t].length&&(function(e,t){e:{for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&V(e,t)}(vi[t],(function(t){return t==e})),vi[t].length||delete vi[t])}function Ii(e){return void 0===e.a&&(e.a=bi,bi++),e.a}function Ei(e){if(!e)throw Error("Event target element must be provided!");gi.call(this),this.a=e}function Ci(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Ti(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Si(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function ki(){this.g=this.a=null}a(Ei,gi),Ei.prototype.N=function(){return this.a},Ei.prototype.register=function(){var e=Ii(this.N());vi[e]?q(vi[e],this)||vi[e].push(this):vi[e]=[this]},Ti.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Li,Ri,Ai=new Ti((function(){return new Ni}),(function(e){e.reset()}));function Pi(){var e=Di,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Ni(){this.next=this.g=this.a=null}function Oi(e){d.setTimeout((function(){throw e}),0)}function Mi(e,t){Ri||function(){if(d.Promise&&d.Promise.resolve){var e=d.Promise.resolve(void 0);Ri=function(){e.then(Ui)}}else Ri=function(){var e=Ui;!w(d.setImmediate)||d.Window&&d.Window.prototype&&!Ke("Edge")&&d.Window.prototype.setImmediate==d.setImmediate?(Li||(Li=function(){var e=d.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Ke("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=k((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!Ke("Trident")&&!Ke("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(h(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){d.setTimeout(e,0)}}()),Li(e)):d.setImmediate(e)}}(),xi||(Ri(),xi=!0),Di.add(e,t)}ki.prototype.add=function(e,t){var n=Ai.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Ni.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Ni.prototype.reset=function(){this.next=this.g=this.a=null};var xi=!1,Di=new ki;function Ui(){for(var e;e=Pi();){try{e.a.call(e.g)}catch(e){Oi(e)}Si(Ai,e)}xi=!1}function Fi(e){if(this.a=Bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=m)try{var t=this;e.call(void 0,(function(e){Ji(t,ji,e)}),(function(e){if(!(e instanceof nr))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Ji(t,Hi,e)}))}catch(e){Ji(this,Hi,e)}}var Bi=0,ji=2,Hi=3;function qi(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}qi.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var $i=new Ti((function(){return new qi}),(function(e){e.reset()}));function Vi(e,t,n){var i=$i.get();return i.s=e,i.g=t,i.j=n,i}function Wi(e){if(e instanceof Fi)return e;var t=new Fi(m);return Ji(t,ji,e),t}function zi(e){return new Fi((function(t,n){n(e)}))}function Ki(e,t){if(e.a==Bi)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,s=null,o=n.g;o&&(o.h||(i++,o.a==e&&(r=o),!(r&&1<i)));o=o.next)r||(s=o);r&&(n.a==Bi&&1==i?Ki(n,t):(s?((i=s).next==n.j&&(n.j=i),i.next=i.next.next):Qi(n),Zi(n,r,Hi,t)))}e.h=null}else Ji(e,Hi,t)}function Gi(e,t){e.g||e.a!=ji&&e.a!=Hi||Xi(e),e.j?e.j.next=t:e.g=t,e.j=t}function Yi(e,t,n,i){var r=Vi(null,null,null);return r.a=new Fi((function(e,s){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){s(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!h(r)&&t instanceof nr?s(t):e(r)}catch(e){s(e)}}:s})),r.a.h=e,Gi(e,r),r.a}function Ji(e,t,n){if(e.a==Bi){e===n&&(t=Hi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,s=e.ic;if(i instanceof Fi){Gi(i,Vi(r||m,s||null,e));var o=!0}else if(Ci(i))i.then(r,s,e),o=!0;else{if(I(i))try{var a=i.then;if(w(a)){!function(e,t,n,i,r){function s(e){a||(a=!0,i.call(r,e))}function o(e){a||(a=!0,n.call(r,e))}var a=!1;try{t.call(e,o,s)}catch(e){s(e)}}(i,a,r,s,e),o=!0;break e}}catch(t){s.call(e,t),o=!0;break e}o=!1}}o||(e.A=n,e.a=t,e.h=null,Xi(e),t!=Hi||n instanceof nr||function(e,t){e.s=!0,Mi((function(){e.s&&tr.call(null,t)}))}(e,n))}}function Xi(e){e.i||(e.i=!0,Mi(e.Hb,e))}function Qi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Zi(e,t,n,i){if(n==Hi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,er(t,n,i);else try{t.h?t.s.call(t.j):er(t,n,i)}catch(e){tr.call(null,e)}Si($i,t)}function er(e,t,n){t==ji?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}Fi.prototype.then=function(e,t,n){return Yi(this,w(e)?e:null,w(t)?t:null,n)},Fi.prototype.$goog_Thenable=!0,(e=Fi.prototype).fc=function(e,t){return(e=Vi(e,e,t)).h=!0,Gi(this,e),this},e.Ca=function(e,t){return Yi(this,null,e,t)},e.cancel=function(e){this.a==Bi&&Mi((function(){Ki(this,new nr(e))}),this)},e.hc=function(e){this.a=Bi,Ji(this,ji,e)},e.ic=function(e){this.a=Bi,Ji(this,Hi,e)},e.Hb=function(){for(var e;e=Qi(this);)Zi(this,e,this.a,this.A);this.i=!1};var tr=Oi;function nr(e){M.call(this,e)}function ir(e,t,n){t||(t={}),n=n||window;var i=e instanceof yt?e:Et(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return(Ke("iPhone")&&!Ke("iPod")&&!Ke("iPad")||Ke("iPad")||Ke("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(s=n.document.createElement("A"),i=i instanceof yt?i:Ct(i),s.href=wt(i),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),s.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,s),t=wt(i).toString(),n&&(tt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Nt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+re(t)+'">',null),n.document.write(At(t)),n.document.close())):(n=n.open(wt(i).toString(),e,s))&&t.noopener&&(n.opener=null),n}function rr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){ir(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=I(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ar(){return window.location.href}function lr(e){var t=br;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function cr(e,t,n){e.a=!0,e.h=n,e.j=!t,fr(e)}function ur(e){if(e.a){if(!e.J)throw new pr(e);e.J=!1}}function dr(e,t,n){e.s.push([t,n,void 0]),e.a&&fr(e)}function hr(e){return H(e.s,(function(e){return w(e[1])}))}function fr(e){if(e.i&&e.a&&hr(e)){var t=e.i,n=_r[t];n&&(d.clearTimeout(n.a),delete _r[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],o=r[1];if(r=r[2],s=e.j?o:s)try{var a=s.call(r||e.O,t);h(a)&&(e.j=e.j&&(a==t||a instanceof Error),e.h=t=a),(Ci(t)||"function"==typeof d.Promise&&t instanceof d.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,hr(e)||(n=!0)}}e.h=t,i&&(a=k(e.L,e,!0),i=k(e.L,e,!1),t instanceof lr?(dr(t,a,i),t.l=!0):t.then(a,i)),n&&(t=new mr(t),_r[t.a]=t,e.i=t.a)}function pr(){M.call(this)}function gr(){M.call(this)}function mr(e){this.a=d.setTimeout(k(this.h,this),0),this.g=e}O(nr,M),nr.prototype.name="cancel",lr.prototype.cancel=function(e){if(this.a)this.h instanceof lr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new gr(this),ur(this),cr(this,!1,e))}},lr.prototype.L=function(e,t){this.A=!1,cr(this,e,t)},lr.prototype.callback=function(e){ur(this),cr(this,!0,e)},lr.prototype.then=function(e,t,n){var i,r,s=new Fi((function(e,t){i=e,r=t}));return dr(this,i,(function(e){e instanceof gr?s.cancel():r(e)})),s.then(e,t,n)},lr.prototype.$goog_Thenable=!0,O(pr,M),pr.prototype.message="Deferred has already fired",pr.prototype.name="AlreadyCalledError",O(gr,M),gr.prototype.message="Deferred was canceled",gr.prototype.name="CanceledError",mr.prototype.h=function(){throw delete _r[this.a],this.g};var _r={};function vr(e){var t={},n=t.document||document,i=vt(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},o=new lr(s),a=null,l=null!=t.timeout?t.timeout:5e3;return 0<l&&(a=window.setTimeout((function(){yr(r,!0);var e=new Er(Ir,"Timeout reached for loading script "+i);ur(o),cr(o,!1,e)}),l),s.sb=a),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(yr(r,t.xc||!1,a),o.callback(null))},r.onerror=function(){yr(r,!0,a);var e=new Er(wr,"Error while loading script "+i);ur(o),cr(o,!1,e)},le(s=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){se(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:Vt.hasOwnProperty(n)?e.setAttribute(Vt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,s),function(e,t){e.src=vt(t),null===g&&(g=(t=(t=d.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&p.test(t)?t:""),(t=g)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),o}function br(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&yr(e,!0,this.sb)}}function yr(e,t,n){null!=n&&d.clearTimeout(n),e.onload=m,e.onerror=m,e.onreadystatechange=m,t&&window.setTimeout((function(){zt(e)}),0)}var wr=0,Ir=1;function Er(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),M.call(this,n),this.code=e}function Cr(){return d.google&&d.google.accounts&&d.google.accounts.id||null}function Tr(e){this.a=e||Cr(),this.h=!1,this.g=null}function Sr(e,t,n){return e.a&&t?(e.h=!0,new Fi((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):Wi(t?Lr.Xa().load().then((function(){return e.a=Cr(),Sr(e,t,n)})).Ca((function(){return null})):null)}O(Er,M),Tr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},_(Tr);var kr=new pt(mt,"https://accounts.google.com/gsi/client");function Lr(){this.a=null}function Rr(e,t){this.a=e,this.g=t||function(e){throw e}}function Ar(e,t,n){this.reset(e,t,n,void 0,void 0)}Lr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=kr;e instanceof pt&&e.constructor===pt&&e.g===gt?e=e.a:(D("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new _t;return t.a=e,t}();return Cr()?Wi():this.a=function(){var e=null;return new Fi((function(t){"complete"==d.document.readyState?t():(e=function(){t()},si(window,"load",e))})).Ca((function(t){throw oi(window,"load",e),t}))}().then((function(){if(!Cr())return new Fi((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);d.onGoogleLibraryLoad=function(){clearTimeout(r),n()},Wi(vr(t)).then((function(){Cr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},_(Lr),Rr.prototype.confirm=function(e){return Wi(this.a.confirm(e)).Ca(this.g)},Ar.prototype.a=null;function Pr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Nr(e,t){this.name=e,this.value=t}Ar.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||P(),this.j=e,this.s=t,this.g=n,delete this.a},Nr.prototype.toString=function(){return this.name};var Or=new Nr("SEVERE",1e3),Mr=new Nr("WARNING",900),xr=new Nr("CONFIG",700);function Dr(e){return e.j?e.j:e.g?Dr(e.g):(D("Root logger has no level set."),null)}Pr.prototype.log=function(e,t,n){if(e.value>=Dr(this).value)for(w(t)&&(t=t()),e=new Ar(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var s=0;t=i.a[s];s++)t(r);n=n.g}};var Ur={},Fr=null;function Br(){Fr||(Fr=new Pr(""),Ur[""]=Fr,Fr.j=xr)}function jr(){this.a=P()}var Hr=null;function qr(e){this.j=e||"",Hr||(Hr=new jr),this.s=Hr}function $r(e){return 10>e?"0"+e:String(e)}function Vr(e){qr.call(this,e)}function Wr(){this.s=k(this.h,this),this.a=new Vr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}jr.prototype.set=function(e){this.a=e},jr.prototype.reset=function(){this.set(P())},jr.prototype.get=function(){return this.a},qr.prototype.a=!0,qr.prototype.g=!0,qr.prototype.h=!1,O(Vr,qr),Wr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",$r(i.getFullYear()-2e3)+$r(i.getMonth()+1)+$r(i.getDate())+" "+$r(i.getHours())+":"+$r(i.getMinutes())+":"+$r(i.getSeconds())+"."+$r(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if(Kr)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}(Kr,function(e){if(e){if(e.value>=Or.value)return"error";if(e.value>=Mr.value)return"warn";if(e.value>=xr.value)return"log"}return"debug"}(e.j),t,e.a)}};var zr,Kr=d.console;function Gr(e,t){zr&&zr.log(Or,e,t)}zr=function e(t){var n;if(Br(),!(n=Ur[t])){n=new Pr(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Ur[t]=n}return n}("firebaseui");var Yr=new Wr;if(1!=Yr.g){var Jr;Br(),Jr=Fr;var Xr=Yr.s;Jr.a||(Jr.a=[]),Jr.a.push(Xr),Yr.g=!0}function Qr(e){zr&&zr.log(Mr,e,void 0)}function Zr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function es(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],s=0;s<e.length;s++)-1==(t=(n=Y(e[s])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(e=Zr.prototype).set=function(e,t,n,i,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');h(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",s=s?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(P()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+s},e.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(0==(n=Y(r[s])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},e.ja=function(){return es(this).keys},e.la=function(){return es(this).values},e.clear=function(){for(var e=es(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var ts=new Zr;function ns(){}function is(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function rs(e,t){this.g=e,this.a=t||null}function ss(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function os(e){if(e&&e.email){var t=e.credential&&Fu.auth.AuthCredential.fromJSON(e.credential);return new rs(e.email,t)}return null}function as(e){this.a=e||null}function ls(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function cs(e){return j(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function us(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(ds*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<ds*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,vs(t),t[0]^=ws[e/this.g][0],t[1]^=ws[e/this.g][1],t[2]^=ws[e/this.g][2],t[3]^=ws[e/this.g][3]}else 6<this.g&&4==e%this.g&&vs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}a(is,ns),is.prototype.set=function(e,t){ts.set(e,t,this.h,this.g,this.a,this.j)},is.prototype.get=function(e){return ts.get(e)||null},is.prototype.ra=function(e){var t=this.g,n=this.a;ts.get(e),ts.set(e,"",0,t,n)},us.prototype.A=16;var ds=us.prototype.A/4;function hs(e,t){for(var n,i=0;i<ds;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function fs(e){for(var t=[],n=0;n<ds;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function ps(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function gs(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function ms(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%ds]}function _s(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%ds]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function vs(e){e[0]=bs[e[0]],e[1]=bs[e[1]],e[2]=bs[e[2]],e[3]=bs[e[3]]}var bs=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],ys=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ws=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Is=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Es=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Cs=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ts=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ss=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],ks=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Ls(e,t){e=new us(As(e));for(var n,i=(t=ls(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var s=0;s<n;s++)i.push(0);for(hs(n=e,i),ps(n,0),i=1;i<n.j;++i){gs(n,bs),ms(n),s=n.h;for(var o=n.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Is[o[0]]^Es[o[1]]^o[2]^o[3],s[1][a]=o[0]^Is[o[1]]^Es[o[2]]^o[3],s[2][a]=o[0]^o[1]^Is[o[2]]^Es[o[3]],s[3][a]=Es[o[0]]^o[1]^o[2]^Is[o[3]];ps(n,i)}gs(n,bs),ms(n),ps(n,n.j),r+=cs(fs(n)),i=t.splice(0,16)}return r}function Rs(e,t){e=new us(As(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(hs(i=e,r),ps(i,i.j),r=1;r<i.j;++r){_s(i),gs(i,ys),ps(i,i.j-r);for(var s=i.h,o=i.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=ks[o[0]]^Ts[o[1]]^Ss[o[2]]^Cs[o[3]],s[1][a]=Cs[o[0]]^ks[o[1]]^Ts[o[2]]^Ss[o[3]],s[2][a]=Ss[o[0]]^Cs[o[1]]^ks[o[2]]^Ts[o[3]],s[3][a]=Ts[o[0]]^Ss[o[1]]^Cs[o[2]]^ks[o[3]]}if(_s(i),gs(i,ys),ps(i,0),8192>=(i=fs(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",s=0;s<i.length;s+=8192)r+=String.fromCharCode.apply(null,G(i,s,s+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function As(e){for(var t=32-(e=ls(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Ps(e){var t=[];return Os(new Ns,e,t),t.join("")}function Ns(){}function Os(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(b(t)){var i=t;t=i.length,n.push("[");for(var r="",s=0;s<t;s++)n.push(r),Os(e,i[s],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(s=t[i])&&(n.push(r),Ds(i,n),n.push(":"),Os(e,s,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ds(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var Ms={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},xs=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ds(e,t){t.push('"',e.replace(xs,(function(e){var t=Ms[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),Ms[e]=t),t})),'"')}function Us(e){this.a=e}function Fs(){}function Bs(e){this.a=e}function js(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Hs(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function qs(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function $s(e,t){this.g=e,this.a=t+"::"}Us.prototype.set=function(e,t){h(t)?this.a.set(e,Ps(t)):this.a.ra(e)},Us.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},O(Fs,ns),Fs.prototype.clear=function(){var e=he(this.ha(!0)),t=this;F(e,(function(e){t.ra(e)}))},O(Bs,Fs),(e=Bs.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!f(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,n=this.a,i=new ue;return i.next=function(){if(t>=n.length)throw ce;var i=n.key(t++);if(e)return i;if(!f(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},O(Hs,Bs),O(qs,Bs),O($s,Fs),$s.prototype.set=function(e,t){this.g.set(this.a+e,t)},$s.prototype.get=function(e){return this.g.get(this.a+e)},$s.prototype.ra=function(e){this.g.ra(this.a+e)},$s.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new ue;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},js(new Hs);var Vs=new qs,Ws=new Us(js(Vs)?new $s(Vs,"firebaseui"):null),zs={name:"pendingEmailCredential",storage:Ws},Ks={name:"redirectStatus",storage:Ws},Gs={name:"redirectUrl",storage:Ws},Ys={name:"emailForSignIn",storage:new Us(new is(3600,"/"))},Js={name:"pendingEncryptedCredential",storage:new Us(new is(3600,"/"))};function Xs(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qs(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Zs(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function eo(e){return Xs(Gs,e)||null}function to(e){return os(e=Xs(zs,e)||null)}function no(e){Qs(zs,e)}function io(e,t){Zs(zs,ss(e),t)}function ro(e){return(e=Xs(Ks,e)||null)&&void 0!==e.tenantId?new as(e.tenantId):null}function so(){this.W={}}function oo(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function ao(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function lo(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function co(){this.g=void 0,this.a={}}function uo(e,t,n,i){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new co),e=e.a[s]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function ho(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)ho(e.a[n],t)}function fo(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)fo(e.a[i],t+i,n)}function po(e){for(this.a=e,this.g=new co,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function go(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var s in n)if(n.hasOwnProperty(s))return n[s];return[]}function mo(e){for(var t=0;t<yo.length;t++)if(yo[t].c===e)return yo[t];return null}function _o(e){e=e.toUpperCase();for(var t=[],n=0;n<yo.length;n++)yo[n].f===e&&t.push(yo[n]);return t}function vo(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<yo.length;n++)yo[n].b==e&&t.push(yo[n]);e=t}else e=_o(e);return e}function bo(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}so.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=co.prototype).set=function(e,t){uo(this,e,t,!1)},e.add=function(e,t){uo(this,e,t,!0)},e.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return ho(this,e),e},e.ja=function(){var e=[];return fo(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var yo=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];bo(yo);var wo=new po(yo);function Io(e,t){this.a=e,this.Aa=t}function Eo(e){e=Y(e);var t=go(wo,e);return 0<t.length?new Io("1"==t[0].b?"1-US-0":t[0].c,Y(e.substr(t[0].b.length+1))):null}function Co(e){var t=mo(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function To(e,t){for(var n=0;n<e.length;n++)if(!q(So,e[n])&&(null!==ko&&e[n]in ko||q(t,e[n])))return e[n];return null}var So=["emailLink","password","phone"],ko={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Lo(){this.a=new so,oo(this.a,"autoUpgradeAnonymousUsers"),oo(this.a,"callbacks"),oo(this.a,"credentialHelper",ia),oo(this.a,"immediateFederatedRedirect",!1),oo(this.a,"popupMode",!1),oo(this.a,"privacyPolicyUrl"),oo(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),oo(this.a,"queryParameterForWidgetMode","mode"),oo(this.a,"signInFlow"),oo(this.a,"signInOptions"),oo(this.a,"signInSuccessUrl"),oo(this.a,"siteName"),oo(this.a,"tosUrl"),oo(this.a,"widgetUrl"),oo(this.a,"adminRestrictedOperation")}function Ro(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Jo(e)&&Gr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Ao(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=I(i)?i:{provider:i}).provider&&t.push(i)}return t}function Po(e,t){e=Ao(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function No(e){return Ao(e).map((function(e){return e.provider}))}function Oo(e,t){e=Mo(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function Mo(e){return Ao(e).map((function(e){if(ko[e.provider]||q(la,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function xo(e){var t,n=Po(e,Fu.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),ra)if(ra[i]===e){var i=ra[i];break e}i=ia}t=i===na}return t&&n.clientId||null}function Do(e){return!!((e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Uo(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Fo(e,t){return e=(e=Po(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Bo(e,t){return I(e=(e=Po(e,t))&&e.customParameters)?(e=oe(e),t===Fu.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===Fu.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function jo(e){if(!(e=Po(e,Fu.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return yo;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var r=vo(t[i]),s=0;s<r.length;s++)n[r[s].c]=r[s];for(var o in n)n.hasOwnProperty(o)&&e.push(n[o])}else{for(o={},t=0;t<n.length;t++)for(r=vo(n[t]),i=0;i<r.length;i++)o[r[i].c]=r[i];for(r=0;r<yo.length;r++)null!==o&&yo[r].c in o||e.push(yo[r])}return e}function Ho(e){return lo(e.a,"queryParameterForWidgetMode")}function qo(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function $o(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function Vo(e){return!(e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Wo(e){return!(!(e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==Fu.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function zo(e){var t=!!e.a.get("immediateFederatedRedirect"),n=No(e);return e=Ko(e),t&&1==n.length&&!q(So,n[0])&&e==sa}function Ko(e){for(var t in e=e.a.get("signInFlow"),oa)if(oa[t]==e)return oa[t];return sa}function Go(e){return Xo(e).signInSuccess||null}function Yo(e){return Xo(e).signInSuccessWithAuthResult||null}function Jo(e){return Xo(e).signInFailure||null}function Xo(e){return e.a.get("callbacks")||{}}var Qo,Zo,ea,ta,na="googleyolo",ia="none",ra={nc:na,NONE:ia},sa="redirect",oa={qc:"popup",rc:sa},aa={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},la=["anonymous"],ca=["sitekey","tabindex","callback","expired-callback"],ua={};function da(e,t,n,i){ua[e].apply(null,Array.prototype.slice.call(arguments,1))}function ha(e){return e.classList?e.classList:f(e=e.className)&&e.match(/\S+/g)||[]}function fa(e,t){return e.classList?e.classList.contains(t):q(ha(e),t)}function pa(e,t){e.classList?e.classList.add(t):fa(e,t)||(e.className+=0<e.className.length?" "+t:t)}function ga(e,t){e.classList?e.classList.remove(t):fa(e,t)&&(e.className=B(ha(e),(function(e){return e!=t})).join(" "))}function ma(e){var t=e.type;switch(f(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function _a(e,t){var n=e.type;switch(f(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,f(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(f(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,s=0;r=t[s];s++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function va(e,t,n,i,r,s){if(it&&!ht("525"))return!0;if(st&&r)return ba(e);if(r&&!i)return!1;if(!nt&&("number"==typeof t&&(t=ya(t)),(!n||st)&&(17==t||18==t||st&&91==t)||st&&16==t&&(i||s)))return!1;if((it||et)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Ze&&i&&t==e)return!1;switch(e){case 13:return!nt||!s&&!r&&!(n&&i);case 27:return!(it||et||nt)}return(!nt||!(i||r||s))&&ba(e)}function ba(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(it||et)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return nt;default:return!1}}function ya(e){if(nt)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(st&&it&&93===e)e=91;return e}function wa(e){gi.call(this),this.a=e,ii(e,"keydown",this.g,!1,this),ii(e,"click",this.h,!1,this)}function Ia(e,t){var n=new Ca(t);if(mi(e,n)){n=new Ea(t);try{mi(e,n)}finally{t.stopPropagation()}}}function Ea(e){zn.call(this,e.a),this.type="action"}function Ca(e){zn.call(this,e.a),this.type="beforeaction"}function Ta(e){gi.call(this),this.a=e,e=Ze?"focusout":"blur",this.g=ii(this.a,Ze?"focusin":"focus",this,!Ze),this.h=ii(this.a,e,this,!Ze)}function Sa(e,t){gi.call(this),this.g=e||1,this.a=t||d,this.h=k(this.gc,this),this.j=P()}function ka(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function La(e){Dn.call(this),this.g=e,this.a={}}O(wa,gi),wa.prototype.g=function(e){(13==e.keyCode||it&&3==e.keyCode)&&Ia(this,e)},wa.prototype.h=function(e){Ia(this,e)},wa.prototype.o=function(){wa.K.o.call(this),oi(this.a,"keydown",this.g,!1,this),oi(this.a,"click",this.h,!1,this),delete this.a},O(Ea,zn),O(Ca,zn),O(Ta,gi),Ta.prototype.handleEvent=function(e){var t=new zn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",mi(this,t)},Ta.prototype.o=function(){Ta.K.o.call(this),ai(this.g),ai(this.h),delete this.a},O(Sa,gi),(e=Sa.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=P()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),mi(this,"tick"),this.Ka&&(ka(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=P())},e.o=function(){Sa.K.o.call(this),ka(this),delete this.a},O(La,Dn);var Ra=[];function Aa(e,t,n,i){b(n)||(n&&(Ra[0]=n.toString()),n=Ra);for(var r=0;r<n.length;r++){var s=ii(t,n[r],i||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Pa(e){se(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ai(e)}),e),e.a={}}function Na(e){gi.call(this),this.a=null,this.g=e,e=Ze||et||it&&!ht("531")&&"TEXTAREA"==e.tagName,this.h=new La(this),Aa(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function Oa(e){null!=e.a&&(d.clearTimeout(e.a),e.a=null)}function Ma(e){return(e=new zn(e.a)).type="input",e}function xa(e,t){gi.call(this),e&&(this.Oa&&ja(this),this.qa=e,this.Na=ii(this.qa,"keypress",this,t),this.Ya=ii(this.qa,"keydown",this.Jb,t,this),this.Oa=ii(this.qa,"keyup",this.Kb,t,this))}La.prototype.o=function(){La.K.o.call(this),Pa(this)},La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},O(Na,gi),Na.prototype.handleEvent=function(e){if("input"==e.type)Ze&&ht(10)&&0==e.keyCode&&0==e.j||(Oa(this),mi(this,Ma(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(ba(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!nt;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Ze&&229==e.keyCode&&(t=null);var n=Ma(e);Oa(this),this.a=function(e,t){if(w(e))t&&(e=k(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=k(e.handleEvent,e)}return 2147483647<Number(0)?-1:d.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&mi(this,n)}),this)}},Na.prototype.o=function(){Na.K.o.call(this),this.h.m(),Oa(this),delete this.g},O(xa,gi),(e=xa.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Da={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ua={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Fa=!it||ht("525"),Ba=st&&nt;function ja(e){e.Na&&(ai(e.Na),ai(e.Ya),ai(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Ha(e,t,n,i){zn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function qa(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function $a(e,t){var n=Kt(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Va(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Ze&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Wa(e){var t=Kt(e),n=new Ft(0,0),i=t?Kt(t):document;return e==(i=!Ze||9<=Number(ut)||"CSS1Compat"==jt(i).a.compatMode?i.documentElement:i.body)||(e=Va(e),t=Wt(i=jt(t).a),i=i.parentWindow||i.defaultView,t=Ze&&ht("10")&&i.pageYOffset!=t.scrollTop?new Ft(t.scrollLeft,t.scrollTop):new Ft(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(e=xa.prototype).Jb=function(e){(it||et)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||st&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Fa&&!va(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=ya(e.keyCode),Ba&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,n=t.altKey;if(Ze&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(it||et)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&ba(i)?t.charCode:0):Qe&&!it?r=ba(i=this.X)?t.keyCode:0:("keypress"==e.type?(Ba&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),st&&63==r&&224==i&&(i=191));var s=i=ya(i);i?63232<=i&&i in Da?s=Da[i]:25==i&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in Ua&&(s=Ua[t.keyIdentifier]),nt&&Fa&&"keypress"==e.type&&!va(s,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=s==this.R,this.R=s,(t=new Ha(s,r,e,t)).altKey=n,mi(this,t))},e.N=function(){return this.qa},e.o=function(){xa.K.o.call(this),ja(this)},O(Ha,zn),qa.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},qa.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},qa.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},qa.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var za={thin:2,medium:4,thick:6};function Ka(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in za)e=za[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Ga(){}function Ya(e){gi.call(this),this.s=e||jt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Ja(e,t){return e.g?qt(t,e.g||e.s.a):null}function Xa(e){return e.L||(e.L=new La(e)),e.L}function Qa(e,t){e.Ea&&F(e.Ea,t,void 0)}function Za(e,t){var n=Yt(e,"firebaseui-textfield");t?(ga(e,"firebaseui-input-invalid"),pa(e,"firebaseui-input"),n&&ga(n,"firebaseui-textfield-invalid")):(ga(e,"firebaseui-input"),pa(e,"firebaseui-input-invalid"),n&&pa(n,"firebaseui-textfield-invalid"))}function el(e,t,n){Bn(e,L(jn,t=new Na(t))),Aa(Xa(e),t,"input",n)}function tl(e,t,n){Bn(e,L(jn,t=new xa(t))),Aa(Xa(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function nl(e,t,n){Bn(e,L(jn,t=new wa(t))),Aa(Xa(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function il(e){pa(e,"firebaseui-hidden")}function rl(e,t){t&&Gt(e,t),ga(e,"firebaseui-hidden")}function sl(e){return!fa(e,"firebaseui-hidden")&&"none"!=e.style.display}function ol(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+gn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',dn(i)}function al(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+an(e):t+"Next",dn(t+"</button>")}function ll(){var e=""+al({label:fn("Sign In")});return dn(e)}function cl(){var e=""+al({label:fn("Save")});return dn(e)}function ul(){var e=""+al({label:fn("Continue")});return dn(e)}function dl(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+an(e):t+"Choose password",dn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function hl(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return dn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function fl(){return dn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function pl(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+an(e):t+"Cancel",dn(t+"</button>")}function gl(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),dn(t)}function ml(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),dn(t)}function _l(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+an(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',dn(e)}function vl(e){var t=e.content;return e=e.Ab,dn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+gn(e):"")+'">'+an(t)+"</dialog>")}function bl(e){var t=e.message;return dn(vl({content:pn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+gn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+an(t)+"</div>")}))}function yl(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+gn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+gn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+an(r.label)+"</div></button>"}return t=""+vl({Ab:fn("firebaseui-list-box-dialog"),content:pn(t+"</div>")}),dn(t)}function wl(e){return dn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Il(e,t){return un((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function El(e){Sl(e,"upgradeElement")}function Cl(e){Sl(e,"downgradeElements")}_(Ga),Ga.prototype.a=0,O(Ya,gi),(e=Ya.prototype).Lb=Ga.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Ya.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Qa(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Qa(this,(function(e){e.na&&e.ya()})),this.L&&Pa(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qa(this,(function(e){e.m()})),this.g&&zt(this.g),this.Y=this.g=this.oa=this.Ea=null,Ya.K.o.call(this)},e.removeChild=function(e,t){if(e){var n=f(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],$(this.Ea,e),t&&(e.ya(),e.g&&zt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Ya.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},_l.a="firebaseui.auth.soy2.element.infoBar",bl.a="firebaseui.auth.soy2.element.progressDialog",yl.a="firebaseui.auth.soy2.element.listBoxDialog",wl.a="firebaseui.auth.soy2.element.busyIndicator";var Tl=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Sl(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Tl.forEach((function(n){fa(e,n)&&window.componentHandler[t](e),F(Ht(n,e),(function(e){window.componentHandler[t](e)}))}))}function kl(e,t,n){if(Ll.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),El(e),t&&nl(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Ll.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,s=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,o=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,a=e.getBoundingClientRect().width,l=i.getBoundingClientRect().width;e.style.top=(s+(n-t)/2).toString()+"px",t=o+(l-a)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-a).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ll(){var e=Rl.call(this);e&&(Cl(e),e.open&&e.close(),zt(e),this.da&&window.removeEventListener("resize",this.da))}function Rl(){return qt("firebaseui-id-dialog")}function Al(){zt(Pl.call(this))}function Pl(){return Ja(this,"firebaseui-id-info-bar")}function Nl(){return Ja(this,"firebaseui-id-dismiss-info-bar")}var Ol={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Ml(e,t,n){for(var i in Wn.call(this,e,t),n)this[i]=n[i]}function xl(e,t,n,i,r){Ya.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=oe(Ol),le(this.Z,r||{})}function Dl(e){return e.N().parentElement||e.N().parentNode}function Ul(e,t,n){tl(e,t,(function(){n.focus()}))}function Fl(e,t,n){tl(e,t,(function(){n()}))}function Bl(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ol(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pl(null):"")+al(null)+'</div></div><div class="firebaseui-card-footer">'+(i?ml(n):gl(n))+"</div></form></div>",dn(e)}function jl(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+ol(e)+hl()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fl()+'</div><div class="firebaseui-form-actions">'+ll()+'</div></div><div class="firebaseui-card-footer">'+(t?ml(n):gl(n))+"</div></form></div>",dn(e)}function Hl(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+ol(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+gn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=dn(e)):e="",n=s+e+dl(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pl(null):"")+cl()+'</div></div><div class="firebaseui-card-footer">'+(r?ml(n):gl(n))+"</div></form></div>",dn(n)}function ql(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+ol(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pl(null):"")+al({label:fn("Send")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(e)}function $l(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+an(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+al({label:fn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+gl(n)+"</div></div>",dn(i)}function Vl(e,t,n){return dn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+wl(null)+"</div></div>")}function Wl(e,t,n){return dn('<div class="firebaseui-container firebaseui-id-page-spinner">'+wl({tb:!0})+"</div>")}function zl(){return dn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Kl(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+an(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+dn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+pl({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function Gl(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+dn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+pl({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(e)}function Yl(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+ol(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl(null)+al(null)+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(e)}function Jl(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl({label:fn("Dismiss")})+"</div></div></div>";return dn(e)}function Xl(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl({label:fn("Dismiss")})+"</div></div></div>";return dn(e)}function Ql(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+an(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+hl()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fl()+'</div><div class="firebaseui-form-actions">'+ll()+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function Zl(e,t,n){var i=e.email;return t="",e=fn(e=""+Il(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+an(i)+"</strong>. You can connect your <strong>"+an(e)+"</strong> account with <strong>"+an(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+an(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ll()+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function ec(e,t,n){t="";var i=""+Il(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+an(i=fn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+an(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ul()+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function tc(e,t,n){var i=e.email;return t="",e=fn(e=""+Il(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+an(i)+"</strong>. Sign in with "+an(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+al({label:fn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function nc(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+an(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+an(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+pl({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(r)}function ic(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+an(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl(null)+al({label:fn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function rc(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+an(e.email)+"</strong></p>")+dl(function(e){function t(){}var n={label:fn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cl()+"</div></div></form></div>",dn(t)}function sc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function oc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function ac(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+an(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></form></div>",dn(n)}function lc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function cc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function uc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function dc(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+an(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(n)}function hc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function fc(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+an(t)+" "+an(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></form></div>",dn(i)}function pc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+ul()+"</div>":"")+"</div></div>",dn(e)}function gc(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=al({label:fn("Retry")})),dn(e+"</div></div></div>")}function mc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+"</p></div></div>",dn(e)}function _c(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+an(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+an(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl(null)+al({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form></div>",dn(t)}function vc(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var s={ga:e[r]},o=n,a=(s=s||{}).ga,l=s,c="";switch((l=l||{}).ga.providerId){case"google.com":c+="firebaseui-idp-google";break;case"github.com":c+="firebaseui-idp-github";break;case"facebook.com":c+="firebaseui-idp-facebook";break;case"twitter.com":c+="firebaseui-idp-twitter";break;case"phone":c+="firebaseui-idp-phone";break;case"anonymous":c+="firebaseui-idp-anonymous";break;case"password":c+="firebaseui-idp-password";break;default:c+="firebaseui-idp-generic"}l=(l='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+gn(un(c))+' firebaseui-id-idp-button" data-provider-id="'+gn(a.providerId)+'" style="background-color:')+gn(_n(un((c=(c=(c=s)||{}).ga).ta?c.ta:o.wa[c.providerId]?""+o.wa[c.providerId]:0==c.providerId.indexOf("saml.")?""+o.wa.saml:0==c.providerId.indexOf("oidc.")?""+o.wa.oidc:""+o.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var u=s;c=o,u=(u=u||{}).ga,c=hn(u.za?mn(u.za):c.xa[u.providerId]?mn(c.xa[u.providerId]):0==u.providerId.indexOf("saml.")?mn(c.xa.saml):0==u.providerId.indexOf("oidc.")?mn(c.xa.oidc):mn(c.xa.password)),l=l+gn(mn(c))+'"></span>',"password"==a.providerId?(l+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?l+=an(a.V):a.S?l+=s="Sign in with "+an(Il(s,o)):l+="Sign in with email",l+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',l=a.S?l+an(a.S):l+"Email",l+="</span>"):"phone"==a.providerId?(l+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?l+=an(a.V):a.S?l+=s="Sign in with "+an(Il(s,o)):l+="Sign in with phone",l+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',l=a.S?l+an(a.S):l+"Phone",l+="</span>"):"anonymous"==a.providerId?(l+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?l+=an(a.V):a.S?l+=s="Sign in with "+an(Il(s,o)):l+="Continue as guest",l+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',l=a.S?l+an(a.S):l+"Guest",l+="</span>"):(l+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?l+=an(a.V):l+=c="Sign in with "+an(Il(s,o)),l+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(a.S?an(a.S):an(Il(s,o)))+"</span>"),i+='<li class="firebaseui-list-item">'+(a=dn(l+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+ml(n)+"</div></div>",dn(i)}function bc(e,t,n){var i,r=(e=e||{}).Gb,s=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+gn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+dn(e))+(i=r?dn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?pl(null):"")+al({label:fn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=dn(t+"</p>")):n=dn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+gl(n),dn(i+n+"</div></form></div>")}function yc(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+an(t=(e=e||{}).phoneNumber)+"</a>",an(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=dn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pl(null)+al({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gl(n)+"</div></form>",e=dn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),dn(t+(n+e+"</div>"))}function wc(){return dn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Ic(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var s=e[r],o="",a=an(s.displayName),l=s.tenantId?s.tenantId:"top-level-project";o+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+gn(l=fn(l))+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+gn(s.tenantId)+'"':"")+'style="background-color:'+gn(_n(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+gn(mn(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?o+=an(s.V):o+=s="Sign in to "+an(s.displayName),i+='<li class="firebaseui-list-item">'+(o=dn(o+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+a+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+ml(n)+"</div></div>",dn(i)}function Ec(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ol(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+al(null)+'</div></div><div class="firebaseui-card-footer">'+ml(n)+"</div></form></div>",dn(e)}function Cc(){return Ja(this,"firebaseui-id-submit")}function Tc(){return Ja(this,"firebaseui-id-secondary-link")}function Sc(e,t){nl(this,Cc.call(this),(function(t){e(t)}));var n=Tc.call(this);n&&t&&nl(this,n,(function(e){t(e)}))}function kc(){return Ja(this,"firebaseui-id-password")}function Lc(){return Ja(this,"firebaseui-id-password-error")}function Rc(){var e=kc.call(this),t=Lc.call(this);el(this,e,(function(){sl(t)&&(Za(e,!0),il(t))}))}function Ac(){var e=kc.call(this),t=Lc.call(this);return ma(e)?(Za(e,!0),il(t),t=!0):(Za(e,!1),rl(t,un("Enter your password").toString()),t=!1),t?ma(e):null}function Pc(e,t,n,i,r,s){xl.call(this,Ql,{email:e},s,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}O(Ml,Wn),O(xl,Ya),(e=xl.prototype).kb=function(){var e=nn(this.fb,this.eb,this.Z,this.s);El(e),this.g=e},e.v=function(){if(xl.K.v.call(this),yi(Dl(this),new Ml("pageEnter",Dl(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;nl(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;nl(this,this.ab(),(function(){t()}))}},e.ya=function(){yi(Dl(this),new Ml("pageExit",Dl(this),{pageId:this.Ga})),xl.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Cl(this.N()),xl.K.o.call(this)},e.I=function(e,t,n,i){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(Cl(s.A),zt(s.A),s.A=null)}var s=this;return s.Fa?null:(function(e){e.Fa=!0;var t=fa(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=nn(wl,{tb:t},null,e.s),e.N().appendChild(e.A),El(e.A))}),500)}(s),e.apply(null,t).then(n,i).then(r,r))},R(xl.prototype,{a:function(e){Al.call(this);var t=nn(_l,{message:e},null,this.s);this.N().appendChild(t),nl(this,Nl.call(this),(function(){zt(t)}))},yc:Al,Ac:Pl,zc:Nl,$:function(e,t){e=nn(bl,{Ma:e,message:t},null,this.s),kl.call(this,e)},h:Ll,Cb:Rl,Cc:function(){return Ja(this,"firebaseui-tos")},bb:function(){return Ja(this,"firebaseui-tos-link")},ab:function(){return Ja(this,"firebaseui-pp-link")},Dc:function(){return Ja(this,"firebaseui-tos-list")}}),Bl.a="firebaseui.auth.soy2.page.signIn",jl.a="firebaseui.auth.soy2.page.passwordSignIn",Hl.a="firebaseui.auth.soy2.page.passwordSignUp",ql.a="firebaseui.auth.soy2.page.passwordRecovery",$l.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Vl.a="firebaseui.auth.soy2.page.callback",Wl.a="firebaseui.auth.soy2.page.spinner",zl.a="firebaseui.auth.soy2.page.blank",Kl.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Gl.a="firebaseui.auth.soy2.page.emailNotReceived",Yl.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Jl.a="firebaseui.auth.soy2.page.differentDeviceError",Xl.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Ql.a="firebaseui.auth.soy2.page.passwordLinking",Zl.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",ec.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",tc.a="firebaseui.auth.soy2.page.federatedLinking",nc.a="firebaseui.auth.soy2.page.unauthorizedUser",ic.a="firebaseui.auth.soy2.page.unsupportedProvider",rc.a="firebaseui.auth.soy2.page.passwordReset",sc.a="firebaseui.auth.soy2.page.passwordResetSuccess",oc.a="firebaseui.auth.soy2.page.passwordResetFailure",ac.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",lc.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",cc.a="firebaseui.auth.soy2.page.emailVerificationSuccess",uc.a="firebaseui.auth.soy2.page.emailVerificationFailure",dc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",hc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",fc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",pc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",gc.a="firebaseui.auth.soy2.page.recoverableError",mc.a="firebaseui.auth.soy2.page.unrecoverableError",_c.a="firebaseui.auth.soy2.page.emailMismatch",vc.a="firebaseui.auth.soy2.page.providerSignIn",bc.a="firebaseui.auth.soy2.page.phoneSignInStart",yc.a="firebaseui.auth.soy2.page.phoneSignInFinish",wc.a="firebaseui.auth.soy2.page.signOut",Ic.a="firebaseui.auth.soy2.page.selectTenant",Ec.a="firebaseui.auth.soy2.page.providerMatchByEmail",a(Pc,xl),Pc.prototype.v=function(){this.P(),this.M(this.w,this.H),Fl(this,this.i(),this.w),this.i().focus(),xl.prototype.v.call(this)},Pc.prototype.o=function(){this.w=null,xl.prototype.o.call(this)},Pc.prototype.j=function(){return ma(Ja(this,"firebaseui-id-email"))},R(Pc.prototype,{i:kc,B:Lc,P:Rc,u:Ac,ea:Cc,ba:Tc,M:Sc});var Nc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Oc(){return Ja(this,"firebaseui-id-email")}function Mc(){return Ja(this,"firebaseui-id-email-error")}function xc(e){var t=Oc.call(this),n=Mc.call(this);el(this,t,(function(){sl(n)&&(Za(t,!0),il(n))})),e&&tl(this,t,(function(){e()}))}function Dc(){return Y(ma(Oc.call(this))||"")}function Uc(){var e=Oc.call(this),t=Mc.call(this),n=ma(e)||"";return n?Nc.test(n)?(Za(e,!0),il(t),t=!0):(Za(e,!1),rl(t,un("That email address isn't correct").toString()),t=!1):(Za(e,!1),rl(t,un("Enter your email address to continue").toString()),t=!1),t?Y(ma(e)):null}function Fc(e,t,n,i,r,s,o){xl.call(this,jl,{email:n,ia:!!s},o,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Bc(e,t,n,i,r,s){xl.call(this,e,t,i,r||"notice",s),this.i=n||null}function jc(e,t,n,i,r){Bc.call(this,$l,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function Hc(e,t){Bc.call(this,cc,{G:!!e},e,t,"emailVerificationSuccess")}function qc(e,t){Bc.call(this,uc,{G:!!e},e,t,"emailVerificationFailure")}function $c(e,t,n){Bc.call(this,dc,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Vc(e,t){Bc.call(this,hc,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Wc(e,t){Bc.call(this,pc,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function zc(e){Bc.call(this,wc,void 0,void 0,e,"signOut")}function Kc(e,t){Bc.call(this,sc,{G:!!e},e,t,"passwordResetSuccess")}function Gc(e,t){Bc.call(this,oc,{G:!!e},e,t,"passwordResetFailure")}function Yc(e,t){Bc.call(this,lc,{G:!!e},e,t,"emailChangeRevokeFailure")}function Jc(e,t,n){Bc.call(this,gc,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Xc(e,t){Bc.call(this,mc,{errorMessage:e},void 0,t,"unrecoverableError")}function Qc(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function Zc(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(e){}s=!1}if(s)n=Dl(t),t.m(),ou(e,n,void 0,un("Your sign-in session has expired. Please try again.").toString());else{if(s=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;s=nu(n)}t.a(s)}}}if(Nd(e),i)return eu(e,n),Wi();if(!n.credential)throw Error("No credential found!");if(!Id(e).currentUser&&!n.user)throw Error("User not logged in.");try{var s=function(e,t){return xd(e),Rd(e,(function(n){if(e.j&&!e.j.isAnonymous&&Ro(Md(e))&&!Id(e).currentUser)return Ud(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Ud(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fd(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Ud(e).then((function(){return Ed(e).updateCurrentUser(t.user)})).then((function(){return t.user=Ed(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Gr(e.code||e.message,e),t.a(e.code||e.message),Wi()}return n=s.then((function(t){eu(e,t)}),r).then(void 0,r),Pd(e,s),Wi(n)}function eu(e,t){if(!t.user)throw Error("No user found");var n=Yo(Md(e));if(Go(Md(e))&&n&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Yo(Md(e));var i=eo(Cd(e))||void 0;Qs(Gs,Cd(e));var r=!1;rr()?(n&&!n(t,i)||(r=!0,Ut(window.opener.location,tu(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Ut(window.location,tu(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Go(Md(e)),r=eo(Cd(e))||void 0,Qs(Gs,Cd(e));var s=!1;rr()?(i&&!i(n,t,r)||(s=!0,Ut(window.opener.location,tu(e,r))),i||window.close()):i&&!i(n,t,r)||(s=!0,Ut(window.location,tu(e,r))),s||e.reset()}}function tu(e,t){if(!(e=t||Md(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function nu(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=On();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=Ln();break;case"auth/invalid-verification-code":n+=un("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=un(n).toString())return t;try{return JSON.parse(e.message),Gr("Internal error: "+e.message,void 0),An().toString()}catch(t){return e.message}}function iu(e,t,n,i){function r(){!function(e,t){Zs(Ks,{tenantId:e.a},t)}(new as(e.h.tenantId||null),Cd(e)),Pd(e,t.I(k(e.dc,e),[l],(function(){if("file:"===(window.location&&window.location.protocol))return Pd(e,bd(e).then((function(n){t.m(),Qs(Ks,Cd(e)),da("callback",e,a,Wi(n))}),s))}),o))}function s(i){if(Qs(Ks,Cd(e)),!i.name||"cancel"!=i.name)switch(i=Qc(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(nu(i));break;case"auth/admin-restricted-operation":t.m(),Uo(Md(e))?da("handleUnauthorizedUser",e,a,null,n):da("callback",e,a,zi(i));break;default:t.m(),da("callback",e,a,zi(i))}}function o(n){Qs(Ks,Cd(e)),n.name&&"cancel"==n.name||(Gr("signInWithRedirect: "+n.code,void 0),n=nu(n),"blank"==t.Ga&&zo(Md(e))?(t.m(),da("providerSignIn",e,a,n)):t.a(n))}var a=Dl(t),l=function(e,t,n){var i=ko[t]&&Fu.auth[ko[t]]?new Fu.auth[ko[t]]:0==t.indexOf("saml.")?new Fu.auth.SAMLAuthProvider(t):new Fu.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var r=Fo(Md(e),t);if(i.addScope)for(var s=0;s<r.length;s++)i.addScope(r[s]);return r=Bo(Md(e),t)||{},n&&(e=t==Fu.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==Fu.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Oo(Md(e),t))&&e.Ob)&&(r[e]=n),i.setCustomParameters&&i.setCustomParameters(r),i}(e,n,i);Ko(Md(e))==sa?r():Pd(e,function(e,t){return xd(e),Rd(e,(function(n){return n&&!to(Cd(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)})):Id(e).signInWithPopup(t)}))}(e,l).then((function(n){t.m(),da("callback",e,a,Wi(n))}),s))}function ru(e){return 1==(e=No(Md(e))).length&&e[0]==Fu.auth.EmailAuthProvider.PROVIDER_ID}function su(e){return 1==(e=No(Md(e))).length&&e[0]==Fu.auth.PhoneAuthProvider.PROVIDER_ID}function ou(e,t,n,i){ru(e)?i?da("signIn",e,t,n,i):uu(e,t,n):e&&su(e)&&!i?da("phoneSignInStart",e,t):e&&zo(Md(e))&&!i?da("federatedRedirect",e,t,n):da("providerSignIn",e,t,i,n)}function au(e,t,n,i){var r=Dl(t);Pd(e,t.I(k(Id(e).fetchSignInMethodsForEmail,Id(e)),[n],(function(s){t.m(),lu(e,r,s,n,i)}),(function(e){e=nu(e),t.a(e)})))}function lu(e,t,n,i,r,s){n.length||Wo(Md(e))&&!Wo(Md(e))?q(n,Fu.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?da("passwordSignIn",e,t,i,s):1==n.length&&n[0]===Fu.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Wo(Md(e))?da("sendEmailLinkForSignIn",e,t,i,(function(){da("signIn",e,t)})):da("unsupportedProvider",e,t,i):(n=To(n,No(Md(e))))?(io(new rs(i),Cd(e)),da("federatedSignIn",e,t,i,n,r)):da("unsupportedProvider",e,t,i):Do(Md(e))?da("handleUnauthorizedUser",e,t,i,Fu.auth.EmailAuthProvider.PROVIDER_ID):Wo(Md(e))?da("sendEmailLinkForSignIn",e,t,i,(function(){da("signIn",e,t)})):da("passwordSignUp",e,t,i,void 0,void 0,s)}function cu(e,t,n,i,r,s){var o=Dl(t);Pd(e,t.I(k(e.Ib,e),[n,s],(function(){t.m(),da("emailLinkSignInSent",e,o,n,i,s)}),r))}function uu(e,t,n){n?da("prefilledEmailSignIn",e,t,n):da("signIn",e,t)}function du(){return be(ar(),"oobCode")}function hu(){var e=be(ar(),"continueUrl");return e?function(){Ut(window.location,e)}:null}function fu(e,t){xl.call(this,Xl,void 0,t,"anonymousUserMismatch"),this.i=e}function pu(e){xl.call(this,Vl,void 0,e,"callback")}function gu(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=to(Cd(e)),s=r&&r.g;if(s&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,s))!function(e,t,n){var i=Dl(t);Pd(e,Ud(e).then((function(){t.m(),da("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=nu(e.code),t.a(e))})))}(e,t,i);else{var o=r&&r.a;o?Pd(e,n.user.linkWithCredential(o).then((function(n){i={user:n.user,credential:o,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},mu(e,t,i)}),(function(n){_u(e,t,n)}))):mu(e,t,i)}}else n=Dl(t),t.m(),no(Cd(e)),ou(e,n)}function mu(e,t,n){no(Cd(e)),Zc(e,t,n)}function _u(e,t,n){var i=Dl(t);no(Cd(e)),n=nu(n),t.m(),ou(e,i,void 0,n)}function vu(e,t,n,i){var r=Dl(t);Pd(e,Id(e).fetchSignInMethodsForEmail(n).then((function(s){t.m(),s.length?q(s,Fu.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?da("passwordLinking",e,r,n):1==s.length&&s[0]===Fu.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?da("emailLinkSignInLinking",e,r,n):(s=To(s,No(Md(e))))?da("federatedLinking",e,r,n,s,i):(no(Cd(e)),da("unsupportedProvider",e,r,n)):(no(Cd(e)),da("passwordRecovery",e,r,n,!1,Pn().toString()))}),(function(n){_u(e,t,n)})))}function bu(e,t){xl.call(this,Jl,void 0,t,"differentDeviceError"),this.i=e}function yu(e,t,n,i){xl.call(this,ac,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function wu(){return Ja(this,"firebaseui-id-new-password")}function Iu(){return Ja(this,"firebaseui-id-password-toggle")}function Eu(){this.Ra=!this.Ra;var e=Iu.call(this),t=wu.call(this);this.Ra?(t.type="text",pa(e,"firebaseui-input-toggle-off"),ga(e,"firebaseui-input-toggle-on")):(t.type="password",pa(e,"firebaseui-input-toggle-on"),ga(e,"firebaseui-input-toggle-off")),t.focus()}function Cu(){return Ja(this,"firebaseui-id-new-password-error")}function Tu(){this.Ra=!1;var e=wu.call(this);e.type="password";var t=Cu.call(this);el(this,e,(function(){sl(t)&&(Za(e,!0),il(t))}));var n=Iu.call(this);pa(n,"firebaseui-input-toggle-on"),ga(n,"firebaseui-input-toggle-off"),function(e,t,n){Bn(e,L(jn,t=new Ta(t))),Aa(Xa(e),t,"focusin",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-focus"),ga(n,"firebaseui-input-toggle-blur")})),function(e,t,n){Bn(e,L(jn,t=new Ta(t))),Aa(Xa(e),t,"focusout",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-blur"),ga(n,"firebaseui-input-toggle-focus")})),nl(this,n,k(Eu,this))}function Su(){var e=wu.call(this),t=Cu.call(this);return ma(e)?(Za(e,!0),il(t),t=!0):(Za(e,!1),rl(t,un("Enter your password").toString()),t=!1),t?ma(e):null}function ku(e,t,n){xl.call(this,rc,{email:e},n,"passwordReset"),this.l=t}function Lu(e,t,n,i,r){xl.call(this,fc,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Ru(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=nu(i),Za(n.i(),!1),rl(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Gc).render(t),yd(e,n))}function Au(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):Ze&&!ht("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Pu(e,t,n,i,r,s){xl.call(this,Yl,{email:n},s,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Nu(e,t,n,i,r){xl.call(this,ec,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Ou(e){xl.call(this,zl,void 0,e,"blank")}function Mu(e,t,n,i,r){var s=new Ou,o=new je(n),a=o.a.a.get(Ve.$a)||"",l=o.a.a.get(Ve.Sa)||"",c="1"===o.a.a.get(Ve.Qa),u=He(o),d=o.a.a.get(Ve.PROVIDER_ID)||null;o=o.a.a.get(Ve.vb)||null,Od(e,o);var h=!Xs(Ys,Cd(e)),f=i||function(e,t){var n=null;if(t=Xs(Ys,t))try{var i=Rs(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(l,Cd(e)),p=(i=function(e,t){var n=null;if(t=Xs(Js,t))try{var i=Rs(e,t);n=JSON.parse(i)}catch(e){}return os(n||null)}(l,Cd(e)))&&i.a;d&&p&&p.providerId!==d&&(p=null),s.render(t),yd(e,s),Pd(e,s.I((function(){var t=Wi(null);t=u&&h||h&&c?zi(Error("anonymous-user-not-found")):function(e,t){var n=He(new je(t));return n?(t=new Fi((function(t,i){var r=Ed(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));Pd(e,r)})),Pd(e,t),t):Wi(null)}(e,n).then((function(e){if(d&&!p)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:Id(e).checkActionCode(a)})).then((function(){return i}))}),[],(function(i){f?function(e,t,n,i,r,s){var o=Dl(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Signing in...").toString());var a=null;r=(s?function(e,t,n,i,r){xd(e);var s=r||null,o=Fu.auth.EmailAuthProvider.credentialWithLink(n,i);return n=s?Id(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Ud(e)})).then((function(){return Fd(e,{code:"auth/email-already-in-use"},s)})):Id(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Fd(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),Pd(e,n),n}(e,s,n,i,r):function(e,t,n,i){xd(e);var r,s=i||null;return t=Id(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Ud(e)})).then((function(){return Ed(e).updateCurrentUser(r.user)})).then((function(){return r.user=Ed(e).currentUser,r})),Pd(e,t),t}(e,n,i,r)).then((function(n){Qs(Js,Cd(e)),Qs(Ys,Cd(e)),t.h(),t.$("firebaseui-icon-done",un("Signed in!").toString()),a=setTimeout((function(){t.h(),Zc(e,t,n,!0)}),1e3),Pd(e,(function(){t&&(t.h(),t.m()),clearTimeout(a)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var s=nu(r=Qc(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qs(Js,Cd(e)),Qs(Ys,Cd(e))):"auth/invalid-email"==r.code?(s=un("The email provided does not match the current sign-in session.").toString(),da("emailLinkConfirmation",e,o,i,xu,null,s)):ou(e,o,n,s)}})),Pd(e,r)}(e,s,f,n,p,i):c?(s.m(),da("differentDeviceError",e,t)):(s.m(),da("emailLinkConfirmation",e,t,n,xu))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":da("differentDeviceError",e,t);break;case"anonymous-user-mismatch":da("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":da("emailLinkNewDeviceLinking",e,t,n,Du);break;default:i&&(r=nu(i)),ou(e,t,void 0,r)}})))}function xu(e,t,n,i){Mu(e,t,i,n,!0)}function Du(e,t,n){Mu(e,t,n)}function Uu(e,t,n,i,r,s){xl.call(this,Zl,{email:e,ga:t},s,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function Bu(e,t,n,i,r,s){xl.call(this,Kl,{email:e},s,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function ju(e,t,n,i,r,s,o){xl.call(this,_c,{jc:e,Qb:t},o,"emailMismatch",{F:r,D:s}),this.l=n,this.i=i}function Hu(e,t,n,i,r){xl.call(this,Gl,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function qu(e,t,n,i,r,s){xl.call(this,tc,{email:e,ga:t},s,"federatedLinking",{F:i,D:r}),this.i=n}function $u(e,t,n,i,r,s){xl.call(this,ql,{email:n,Ta:!!t},s,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Vu(){return Ja(this,"firebaseui-id-name")}function Wu(){return Ja(this,"firebaseui-id-name-error")}function zu(e,t,n,i,r,s,o,a,l){xl.call(this,Hl,{email:i,Tb:e,name:r,Ta:!!n,ia:!!a},l,"passwordSignUp",{F:s,D:o}),this.w=t,this.H=n,this.B=e}function Ku(e,t){var n=Vo(Md(e)),i=t.j(),r=null;n&&(r=t.M());var s=t.P();if(i){if(n){if(!r)return void t.u().focus();r=re(r)}if(s){var o=Fu.auth.EmailAuthProvider.credential(i,s);Pd(e,t.I(k(e.Yb,e),[i,s],(function(i){var s={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:r}).then((function(){return Zc(e,t,s)})),Pd(e,i),i):Zc(e,t,s)}),(function(n){if(!n.name||"cancel"!=n.name){var r=Qc(n);switch(n=nu(r),r.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=nu(i);Za(t.i(),!1),rl(t.U(),e),t.i().focus()}var s=Id(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Dl(t),t.m(),da("passwordRecovery",e,i,n,!1,Pn().toString()))}),(function(){r()}));return Pd(e,s),s}(e,t,i,r);case"auth/too-many-requests":n=un("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Za(t.l(),!1),rl(t.ba(),n);break;case"auth/admin-restricted-operation":Uo(Md(e))?(n=Dl(t),t.m(),da("handleUnauthorizedUser",e,n,i,Fu.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Gr(r="setAccountInfo: "+Ps(r),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function Gu(){return Ja(this,"firebaseui-id-phone-confirmation-code")}function Yu(){return Ja(this,"firebaseui-id-phone-confirmation-code-error")}function Ju(){return Ja(this,"firebaseui-id-resend-countdown")}function Xu(e,t,n,i,r,s,o,a,l){xl.call(this,yc,{phoneNumber:r},l,"phoneSignInFinish",{F:o,D:a}),this.jb=s,this.i=new Sa(1e3),this.B=s,this.P=e,this.l=t,this.H=n,this.M=i}a(Fc,xl),Fc.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Ul(this,this.l(),this.i()),Fl(this,this.i(),this.w),ma(this.l())?this.i().focus():this.l().focus(),xl.prototype.v.call(this)},Fc.prototype.o=function(){this.H=this.w=null,xl.prototype.o.call(this)},R(Fc.prototype,{l:Oc,U:Mc,P:xc,M:Dc,j:Uc,i:kc,B:Lc,ea:Rc,u:Ac,ua:Cc,pa:Tc,ba:Sc}),O(Bc,xl),Bc.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bc.K.v.call(this)},Bc.prototype.o=function(){this.i=null,Bc.K.o.call(this)},R(Bc.prototype,{l:Cc,w:Tc,u:Sc}),O(jc,Bc),O(Hc,Bc),O(qc,Bc),O($c,Bc),O(Vc,Bc),O(Wc,Bc),O(zc,Bc),O(Kc,Bc),O(Gc,Bc),O(Yc,Bc),O(Jc,Bc),O(Xc,Bc),a(fu,xl),fu.prototype.v=function(){var e=this;nl(this,this.l(),(function(){e.i()})),this.l().focus(),xl.prototype.v.call(this)},fu.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(fu.prototype,{l:Tc}),ua.anonymousUserMismatch=function(e,t){var n=new fu((function(){n.m(),ou(e,t)}));n.render(t),yd(e,n)},a(pu,xl),pu.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},ua.callback=function(e,t,n){var i=new pu;i.render(t),yd(e,i),n=n||bd(e),Pd(e,n.then((function(t){gu(e,i,t)}),(function(n){if((n=Qc(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)io(new rs(n.email,n.credential),Cd(e)),vu(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=to(Cd(e)),s=nu(n);r&&r.a?vu(e,i,r.g,s):r?au(e,i,r.g,s):_u(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&ru(e)?gu(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Uo(Md(e))?(i.m(),no(Cd(e)),da("handleUnauthorizedUser",e,t,null,null)):_u(e,i,n))})))},a(bu,xl),bu.prototype.v=function(){var e=this;nl(this,this.l(),(function(){e.i()})),this.l().focus(),xl.prototype.v.call(this)},bu.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(bu.prototype,{l:Tc}),ua.differentDeviceError=function(e,t){var n=new bu((function(){n.m(),ou(e,t)}));n.render(t),yd(e,n)},a(yu,xl),yu.prototype.v=function(){var e=this;nl(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),xl.prototype.v.call(this)},yu.prototype.o=function(){this.l=this.i=null,xl.prototype.o.call(this)},R(yu.prototype,{u:Cc,B:Tc,w:Sc}),a(ku,xl),ku.prototype.v=function(){this.H(),this.B(this.l),Fl(this,this.i(),this.l),this.i().focus(),xl.prototype.v.call(this)},ku.prototype.o=function(){this.l=null,xl.prototype.o.call(this)},R(ku.prototype,{i:wu,w:Cu,M:Iu,H:Tu,u:Su,U:Cc,P:Tc,B:Sc}),a(Lu,xl),Lu.prototype.v=function(){var e=this;nl(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),xl.prototype.v.call(this)},Lu.prototype.o=function(){this.l=this.i=null,xl.prototype.o.call(this)},R(Lu.prototype,{u:Cc,B:Tc,w:Sc}),ua.passwordReset=function(e,t,n,i){Pd(e,Id(e).verifyPasswordResetCode(n).then((function(r){var s=new ku(r,(function(){!function(e,t,n,i,r){var s=n.u();s&&Pd(e,n.I(k(Id(e).confirmPasswordReset,Id(e)),[i,s],(function(){n.m();var i=new Kc(r);i.render(t),yd(e,i)}),(function(i){Ru(e,t,n,i)})))}(e,t,s,n,i)}));s.render(t),yd(e,s)}),(function(){Ru(e,t)})))},ua.emailChangeRevocation=function(e,t,n){var i=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return i=t.data.email,Id(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new yu(n,(function(){Pd(e,i.I(k(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){i.m(),(i=new jc(n,void 0,qo(Md(e)),$o(Md(e)))).render(t),yd(e,i)}),(function(){i.a(Rn().toString())})))}));i.render(t),yd(e,i)}(e,t,i)}),(function(){var n=new Yc;n.render(t),yd(e,n)})))},ua.emailVerification=function(e,t,n,i){Pd(e,Id(e).applyActionCode(n).then((function(){var n=new Hc(i);n.render(t),yd(e,n)}),(function(){var n=new qc;n.render(t),yd(e,n)})))},ua.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,Id(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Lu(i.factorId,(function(){r.I(k(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){r.m(),(r=new jc(n,void 0,qo(Md(e)),$o(Md(e)))).render(t),yd(e,r)}),(function(){r.a(Rn().toString())}))}),i.phoneNumber);r.render(t),yd(e,r)}(e,t,i,r)}),(function(){var n=new Wc;n.render(t),yd(e,n)})))},ua.verifyAndChangeEmail=function(e,t,n,i){var r=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return r=t.data.email,Id(e).applyActionCode(n)})).then((function(){var n=new $c(r,i);n.render(t),yd(e,n)}),(function(){var n=new Vc;n.render(t),yd(e,n)})))},a(Pu,xl),Pu.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Au(this.i(),(this.i().value||"").length),xl.prototype.v.call(this)},Pu.prototype.o=function(){this.u=this.l=null,xl.prototype.o.call(this)},R(Pu.prototype,{i:Oc,M:Mc,w:xc,H:Dc,j:Uc,U:Cc,P:Tc,B:Sc}),ua.emailLinkConfirmation=function(e,t,n,i,r,s){var o=new Pu((function(){var r=o.j();r?(o.m(),i(e,t,r,n)):o.i().focus()}),(function(){o.m(),ou(e,t,r||void 0)}),r||void 0,qo(Md(e)),$o(Md(e)));o.render(t),yd(e,o),s&&o.a(s)},a(Nu,xl),Nu.prototype.v=function(){this.u(this.i),this.l().focus(),xl.prototype.v.call(this)},Nu.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(Nu.prototype,{l:Cc,u:Sc}),ua.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new je(n);if(n=r.a.a.get(Ve.PROVIDER_ID)||null,qe(r,null),n){var s=new Nu(Oo(Md(e),n),(function(){s.m(),i(e,t,r.toString())}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s)}else ou(e,t)},a(Ou,xl),ua.emailLinkSignInCallback=Mu,a(Uu,xl),Uu.prototype.v=function(){this.u(this.i),this.l().focus(),xl.prototype.v.call(this)},Uu.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(Uu.prototype,{l:Cc,u:Sc}),ua.emailLinkSignInLinking=function(e,t,n){var i=to(Cd(e));if(no(Cd(e)),i){var r=i.a.providerId,s=new Uu(n,Oo(Md(e),r),(function(){!function(e,t,n,i){var r=Dl(t);cu(e,t,n,(function(){ou(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var s=nu(i);i&&"auth/network-request-failed"==i.code?t.a(s):(t.m(),ou(e,r,n,s))}}),i)}(e,s,n,i)}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s)}else ou(e,t)},a(Bu,xl),Bu.prototype.v=function(){var e=this;nl(this,this.l(),(function(){e.i()})),nl(this,Ja(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),xl.prototype.v.call(this)},Bu.prototype.o=function(){this.i=this.u=null,xl.prototype.o.call(this)},R(Bu.prototype,{l:Tc}),ua.emailLinkSignInSent=function(e,t,n,i,r){var s=new Bu(n,(function(){s.m(),da("emailNotReceived",e,t,n,i,r)}),(function(){s.m(),i()}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s)},a(ju,xl),ju.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),xl.prototype.v.call(this)},ju.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(ju.prototype,{u:Cc,B:Tc,w:Sc}),ua.emailMismatch=function(e,t,n){var i=to(Cd(e));if(i){var r=new ju(n.user.email,i.g,(function(){var t=r;no(Cd(e)),Zc(e,t,n)}),(function(){var t=n.credential.providerId,s=Dl(r);r.m(),i.a?da("federatedLinking",e,s,i.g,t):da("federatedSignIn",e,s,i.g,t)}),qo(Md(e)),$o(Md(e)));r.render(t),yd(e,r)}else ou(e,t)},a(Hu,xl),Hu.prototype.v=function(){var e=this;nl(this,this.u(),(function(){e.i()})),nl(this,this.Da(),(function(){e.l()})),this.u().focus(),xl.prototype.v.call(this)},Hu.prototype.Da=function(){return Ja(this,"firebaseui-id-resend-email-link")},Hu.prototype.o=function(){this.i=this.l=null,xl.prototype.o.call(this)},R(Hu.prototype,{u:Tc}),ua.emailNotReceived=function(e,t,n,i,r){var s=new Hu((function(){cu(e,s,n,i,(function(e){e=nu(e),s.a(e)}),r)}),(function(){s.m(),ou(e,t,n)}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s)},a(qu,xl),qu.prototype.v=function(){this.u(this.i),this.l().focus(),xl.prototype.v.call(this)},qu.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(qu.prototype,{l:Cc,u:Sc}),ua.federatedLinking=function(e,t,n,i,r){var s=to(Cd(e));if(s&&s.a){var o=new qu(n,Oo(Md(e),i),(function(){iu(e,o,i,n)}),qo(Md(e)),$o(Md(e)));o.render(t),yd(e,o),r&&o.a(r)}else ou(e,t)},ua.federatedRedirect=function(e,t,n){var i=new Ou;i.render(t),yd(e,i),iu(e,i,t=No(Md(e))[0],n)},ua.federatedSignIn=function(e,t,n,i,r){var s=new qu(n,Oo(Md(e),i),(function(){iu(e,s,i,n)}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s),r&&s.a(r)},ua.passwordLinking=function(e,t,n){var i=to(Cd(e));no(Cd(e));var r=i&&i.a;if(r){var s=new Pc(n,(function(){!function(e,t,n,i){var r=t.u();r?Pd(e,t.I(k(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return Zc(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),Pd(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":Za(t.i(),!1),rl(t.B(),nu(e));break;case"auth/too-many-requests":t.a(nu(e));break;default:Gr("signInWithEmailAndPassword: "+e.message,void 0),t.a(nu(e))}}))):t.i().focus()}(e,s,n,r)}),(function(){s.m(),da("passwordRecovery",e,t,n)}),qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s)}else ou(e,t)},a($u,xl),$u.prototype.v=function(){this.B(),this.H(this.l,this.u),ma(this.i())||this.i().focus(),Fl(this,this.i(),this.l),xl.prototype.v.call(this)},$u.prototype.o=function(){this.u=this.l=null,xl.prototype.o.call(this)},R($u.prototype,{i:Oc,w:Mc,B:xc,M:Dc,j:Uc,U:Cc,P:Tc,H:Sc}),ua.passwordRecovery=function(e,t,n,i,r){var s=new $u((function(){!function(e,t){var n=t.j();if(n){var i=Dl(t);Pd(e,t.I(k(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){t.m();var r=new jc(n,(function(){r.m(),ou(e,i)}),qo(Md(e)),$o(Md(e)));r.render(i),yd(e,r)}),(function(e){Za(t.i(),!1),rl(t.w(),nu(e))})))}else t.i().focus()}(e,s)}),i?void 0:function(){s.m(),ou(e,t)},n,qo(Md(e)),$o(Md(e)));s.render(t),yd(e,s),r&&s.a(r)},ua.passwordSignIn=function(e,t,n,i){var r=new Fc((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var r=Fu.auth.EmailAuthProvider.credential(n,i);Pd(e,t.I(k(e.bc,e),[n,i],(function(n){return Zc(e,t,{user:n.user,credential:r,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":Za(t.l(),!1),rl(t.U(),nu(e));break;case"auth/too-many-requests":case"auth/wrong-password":Za(t.i(),!1),rl(t.B(),nu(e));break;default:Gr("verifyPassword: "+e.message,void 0),t.a(nu(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var n=r.M();r.m(),da("passwordRecovery",e,t,n)}),n,qo(Md(e)),$o(Md(e)),i);r.render(t),yd(e,r)},a(zu,xl),zu.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Ul(this,this.i(),this.u()),Ul(this,this.u(),this.l())):Ul(this,this.i(),this.l()),this.w&&Fl(this,this.l(),this.w),ma(this.i())?this.B&&!ma(this.u())?this.u().focus():this.l().focus():this.i().focus(),xl.prototype.v.call(this)},zu.prototype.o=function(){this.H=this.w=null,xl.prototype.o.call(this)},R(zu.prototype,{i:Oc,U:Mc,ea:xc,jb:Dc,j:Uc,u:Vu,Bc:Wu,Ja:function(){var e=Vu.call(this),t=Wu.call(this);el(this,e,(function(){sl(t)&&(Za(e,!0),il(t))}))},M:function(){var e=Vu.call(this),t=Wu.call(this),n=ma(e);return Za(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(il(t),t=!0):(rl(t,un("Enter your account name").toString()),t=!1),t?Y(ma(e)):null},l:wu,ba:Cu,lb:Iu,ua:Tu,P:Su,Nb:Cc,Mb:Tc,pa:Sc}),ua.passwordSignUp=function(e,t,n,i,r,s){var o=new zu(Vo(Md(e)),(function(){Ku(e,o)}),r?void 0:function(){o.m(),ou(e,t)},n,i,qo(Md(e)),$o(Md(e)),s);o.render(t),yd(e,o)},a(Xu,xl),Xu.prototype.v=function(){var e=this;this.U(this.jb),ii(this.i,"tick",this.w,!1,this),this.i.start(),nl(this,Ja(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),nl(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),xl.prototype.v.call(this)},Xu.prototype.o=function(){this.M=this.H=this.l=this.P=null,ka(this.i),oi(this.i,"tick",this.w),this.i=null,xl.prototype.o.call(this)},Xu.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(ka(this.i),oi(this.i,"tick",this.w),this.ua(),this.lb())},R(Xu.prototype,{u:Gu,pa:Yu,Ja:function(e){var t=Gu.call(this),n=Yu.call(this);el(this,t,(function(){sl(n)&&(Za(t,!0),il(n))})),e&&tl(this,t,(function(){e()}))},ba:function(){var e=Y(ma(Gu.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Ju,U:function(e){Gt(Ju.call(this),un("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){il(this.Fb())},Da:function(){return Ja(this,"firebaseui-id-resend-link")},lb:function(){rl(this.Da())},Nb:Cc,Mb:Tc,ea:Sc}),ua.phoneSignInFinish=function(e,t,n,i,r,s){var o=new Xu((function(){o.m(),da("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),Za(t.u(),!1),rl(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Verifying...").toString()),Pd(e,t.I(k(i.confirm,i),[s],(function(n){t.h(),t.$("firebaseui-icon-done",un("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Ed(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};Zc(e,t,i,!0)}),1e3);Pd(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var s=Qc(i);switch(i=nu(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Dl(t),t.h(),t.m(),da("phoneSignInStart",e,s,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(un("Wrong code. Try again.").toString())}(e,o,n,r)}),(function(){o.m(),ou(e,t)}),(function(){o.m(),da("phoneSignInStart",e,t,n)}),Co(n),i,qo(Md(e)),$o(Md(e)));o.render(t),yd(e,o),s&&o.a(s)};var Qu=!(Ze||Ke("Safari")&&!(Ge()||Ke("Coast")||Ke("Opera")||Ke("Edge")||Ke("Firefox")||Ke("FxiOS")||Ke("Silk")||Ke("Android")));function Zu(e,t){return/-[a-z]/.test(t)?null:Qu&&e.dataset?!Ke("Android")||Ge()||Ke("Firefox")||Ke("FxiOS")||Ke("Opera")||Ke("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,n){var i=this;e=nn(yl,{items:e},null,this.s),kl.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Zu(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||Wt(document))||Wt(document),i=Wa(e),r=Wa(n);if(!Ze||9<=Number(ut)){o=$a(n,"borderLeftWidth");var s=$a(n,"borderRightWidth");a=$a(n,"borderTopWidth"),l=$a(n,"borderBottomWidth"),s=new qa(parseFloat(a),parseFloat(s),parseFloat(l),parseFloat(o))}else{var o=Ka(n,"borderLeft");s=Ka(n,"borderRight");var a=Ka(n,"borderTop"),l=Ka(n,"borderBottom");s=new qa(a,s,l,o)}n==Wt(document)?(o=i.a-n.scrollLeft,i=i.g-n.scrollTop,!Ze||10<=Number(ut)||(o+=s.left,i+=s.top)):(o=i.a-r.a-s.left,i=i.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,a=it&&!r&&!s,e=h(r)&&!a||!e.getBoundingClientRect?new Bt(r,s):new Bt((e=Va(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,s=n.scrollLeft,a=n.scrollTop,n=new Ft(s+=Math.min(o,Math.max(o-(n.clientWidth-e.width),0)),a+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),nl(this,e,(function(e){(e=(e=Yt(e.target,"firebaseui-id-list-box-dialog-button"))&&Zu(e,"listboxid"))&&(Ll.call(i),t(e))}))}function td(){return Ja(this,"firebaseui-id-phone-number")}function nd(){return Ja(this,"firebaseui-id-country-selector")}function id(){return Ja(this,"firebaseui-id-phone-number-error")}function rd(e,t){var n=e.a,i=sd("1-US-0",n),r=null;if(!(r=t&&sd(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");ld.call(this,r,e)}function sd(e,t){return!(!(e=mo(e))||!q(t,e))}function od(e){return"firebaseui-flag-"+e.f}function ad(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+od(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){ld.call(t,n,e,!0),t.O().focus()}),this.Ba)}function ld(e,t,n){var i=mo(e);i&&(n&&((t=go(t,n=Y(ma(td.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),_a(td.call(this),n))),t=mo(this.Ba),this.Ba=e,e=Ja(this,"firebaseui-id-country-selector-flag"),t&&ga(e,od(t)),pa(e,od(i)),Gt(Ja(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function cd(e,t,n,i,r,s,o,a,l,c){xl.call(this,bc,{Gb:t,Aa:l||null,Va:!!n,ia:!!s},c,"phoneSignInStart",{F:i,D:r}),this.H=a||null,this.M=t,this.l=e,this.w=n||null,this.pa=o||null}function ud(e,t,n,i){try{var r=t.U(ea)}catch(e){return}r?Qo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Verifying...").toString()),Pd(e,t.I(k(e.cc,e),[Co(r),n],(function(n){var i=Dl(t);t.$("firebaseui-icon-done",un("Code sent!").toString());var s=setTimeout((function(){t.h(),t.m(),da("phoneSignInFinish",e,i,r,15,n)}),1e3);Pd(e,(function(){t&&t.h(),clearTimeout(s)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(ta),Qo=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=un("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void rl(t.B(),Ln().toString());case"auth/admin-restricted-operation":if(Uo(Md(e)))return n=Dl(t),t.m(),void da("handleUnauthorizedUser",e,n,Co(r),Fu.auth.PhoneAuthProvider.PROVIDER_ID);i=nu(n);break;default:i=nu(n)}t.a(i)}})))):Zo?rl(t.u(),un("Solve the reCAPTCHA").toString()):!Zo&&i&&t.i().click():(t.O().focus(),rl(t.B(),Ln().toString()))}function dd(e,t,n,i,r){xl.call(this,vc,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function hd(e,t,n,i,r,s,o){xl.call(this,Bl,{email:n,Va:!!t,ia:!!s},o,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fd(e,t,n,i,r,s,o){xl.call(this,nc,{kc:e,yb:n,Eb:!!i},o,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=i}function pd(e,t,n,i,r,s){xl.call(this,ic,{email:e},s,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function gd(e,t){this.$=!1;var n=vd(t);if(_d[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');_d[n]=this,this.a=e,this.u=null,this.Y=!1,md(this.a),this.h=Fu.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),md(this.h),this.h.setPersistence&&this.h.setPersistence(Fu.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Lo,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Tr.Xa(),this.j=this.C=null,this.da=this.A=!1}function md(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}a(cd,xl),cd.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Ul(this,this.O(),this.i()),Fl(this,this.i(),this.l),this.O().focus(),Au(this.O(),(this.O().value||"").length),xl.prototype.v.call(this)},cd.prototype.o=function(){this.w=this.l=null,xl.prototype.o.call(this)},R(cd.prototype,{Cb:Rl,O:td,B:id,ea:function(e,t,n){var i=this,r=td.call(this),s=nd.call(this),o=id.call(this),a=e||wo,l=a.a;if(0==l.length)throw Error("No available countries provided.");rd.call(i,a,t),nl(this,s,(function(){ad.call(i,a)})),el(this,r,(function(){sl(o)&&(Za(r,!0),il(o));var e=Y(ma(r)||""),t=mo(this.Ba),n=go(a,e);e=sd("1-US-0",l),n.length&&n[0].b!=t.b&&(t=n[0],ld.call(i,"1"==t.b&&e?"1-US-0":t.c,a))})),n&&tl(this,r,(function(){n()}))},U:function(e){var t=Y(ma(td.call(this))||""),n=(e=e||wo).a,i=go(wo,t);if(i.length&&!q(n,i[0]))throw _a(td.call(this)),td.call(this).focus(),rl(id.call(this),un("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=mo(this.Ba),i.length&&i[0].b!=n.b&&ld.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Io(this.Ba,t):null},Ja:nd,ba:function(){return Ja(this,"firebaseui-recaptcha-container")},u:function(){return Ja(this,"firebaseui-id-recaptcha-error")},i:Cc,ua:Tc,P:Sc}),ua.phoneSignInStart=function(e,t,n,i){var r=function(e){var t=null;if(Ao(e).forEach((function(e){e.provider==Fu.auth.PhoneAuthProvider.PROVIDER_ID&&I(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=oe(e.recaptchaParameters))})),t){var n=[];ca.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(Md(e))||{};Qo=null,Zo=!(r&&"invisible"===r.size);var s=su(e),o=function(e){var t=(e=Po(e,Fu.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&_o(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Eo(e.loginHint)),t&&t[0]||n&&mo(n.a)||null}(Md(e)),a=s?function(e){var t=null;return(e=Po(e,Fu.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Eo(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Md(e)):null;o=n&&n.a||o&&o.c||null,n=n&&n.Aa||a,(a=jo(Md(e)))&&bo(a),ea=a?new po(jo(Md(e))):wo;var l=new cd((function(t){ud(e,l,c,!(!t||!t.keyCode))}),Zo,s?null:function(){c.clear(),l.m(),ou(e,t)},qo(Md(e)),$o(Md(e)),s,ea,o,n);l.render(t),yd(e,l),i&&l.a(i),r.callback=function(t){l.u()&&il(l.u()),Qo=t,Zo||ud(e,l,c)},r["expired-callback"]=function(){Qo=null};var c=new Fu.auth.RecaptchaVerifier(Zo?l.ba():l.i(),r,Ed(e).app);Pd(e,l.I(k(c.render,c),[],(function(e){ta=e}),(function(n){n.name&&"cancel"==n.name||(n=nu(n),l.m(),ou(e,t,void 0,n))})))},ua.prefilledEmailSignIn=function(e,t,n){var i=new Ou;i.render(t),yd(e,i),Pd(e,i.I(k(Id(e).fetchSignInMethodsForEmail,Id(e)),[n],(function(r){i.m();var s=!(!ru(e)||!Td(e));lu(e,t,r,n,void 0,s)}),(function(r){r=nu(r),i.m(),da("signIn",e,t,n,r)})))},a(dd,xl),dd.prototype.v=function(){this.l(this.i),xl.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(dd.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?Ht("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];nl(this,r,L(t,Zu(r,"providerId")))}}}),ua.providerSignIn=function(e,t,n,i){var r=new dd((function(n){n==Fu.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),uu(e,t,i)):n==Fu.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),da("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){Pd(e,t.I(k(e.$b,e),[],(function(n){return t.m(),Zc(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Gr("ContinueAsGuest: "+e.code,void 0),e=nu(e),t.a(e))})))}(e,r):iu(e,r,n,i),xd(e),e.l.cancel()}),Mo(Md(e)),qo(Md(e)),$o(Md(e)));r.render(t),yd(e,r),n&&r.a(n),function(e){xd(e);try{Sr(e.l,xo(Md(e)),function(e){var t;return xd(e),(t=e.Z)||(e=Bo(e=Md(e),Fu.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===xo(Md(e))){if(Fo(Md(e),Fu.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(r){}return iu(e,t,Fu.auth.GoogleAuthProvider.PROVIDER_ID,i),Wi(!0)}return r=Fu.auth.GoogleAuthProvider.credential(n.credential),s=!1,r=t.I(k(e.ac,e),[r],(function(n){var i=Dl(t);t.m(),da("callback",e,i,Wi(n)),s=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Dl(t);t.m(),da("callback",e,i,zi(n))}else n&&"auth/admin-restricted-operation"==n.code&&Uo(Md(e))?(n=Dl(t),t.m(),da("handleUnauthorizedUser",e,n,null,Fu.auth.GoogleAuthProvider.PROVIDER_ID)):(n=nu(n),t.a(n))})),Pd(e,r),r.then((function(){return s}),(function(){return!1}))}var r,s;return n&&t.a(un("The selected credential for the authentication provider is not supported!").toString()),Wi(!1)}(e,e.g,t)}))}catch(e){}}(e)},ua.sendEmailLinkForSignIn=function(e,t,n,i){var r=new pu;r.render(t),yd(e,r),cu(e,r,n,i,(function(i){r.m(),i&&"auth/admin-restricted-operation"==i.code&&Uo(Md(e))?da("handleUnauthorizedUser",e,t,n,Fu.auth.EmailAuthProvider.PROVIDER_ID):(i=nu(i),da("signIn",e,t,n,i))}))},a(hd,xl),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Au(this.l(),(this.l().value||"").length),xl.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,xl.prototype.o.call(this)},R(hd.prototype,{l:Oc,M:Mc,w:xc,H:Dc,j:Uc,U:Cc,P:Tc,B:Sc}),ua.signIn=function(e,t,n,i){var r=ru(e),s=new hd((function(){var t=s,n=t.j()||"";n&&au(e,t,n)}),r?null:function(){s.m(),ou(e,t,n)},n,qo(Md(e)),$o(Md(e)),r);s.render(t),yd(e,s),i&&s.a(i)},a(fd,xl),fd.prototype.v=function(){var e=this,t=Ja(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&nl(this,t,(function(){e.i()})),nl(this,this.u(),(function(){e.l()})),this.u().focus(),xl.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,xl.prototype.o.call(this)},R(fd.prototype,{u:Tc}),ua.handleUnauthorizedUser=function(e,t,n,i){function r(){ou(e,t)}i===Fu.auth.EmailAuthProvider.PROVIDER_ID?r=function(){uu(e,t)}:i===Fu.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){da("phoneSignInStart",e,t)});var s=null,o=null;i===Fu.auth.EmailAuthProvider.PROVIDER_ID&&Do(Md(e))?(s=function(e){return(e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Md(e)),o=function(e){if((e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Md(e))):Uo(Md(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Md(e)),o=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(Md(e)));var a=new fd(n,(function(){a.m(),r()}),s,o,qo(Md(e)),$o(Md(e)));a.render(t),yd(e,a)},a(pd,xl),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),xl.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,xl.prototype.o.call(this)},R(pd.prototype,{u:Cc,B:Tc,w:Sc}),ua.unsupportedProvider=function(e,t,n){var i=new pd(n,(function(){i.m(),da("passwordRecovery",e,t,n)}),(function(){i.m(),ou(e,t,n)}),qo(Md(e)),$o(Md(e)));i.render(t),yd(e,i)};var _d={};function vd(e){return e||"[DEFAULT]"}function bd(e){return xd(e),e.i||(e.i=Rd(e,(function(t){return t&&!to(Cd(e))?Wi(Ed(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)}))):Wi(Id(e).getRedirectResult().then((function(t){return Ro(Md(e))&&!t.user&&e.j&&!e.j.isAnonymous?Ed(e).getRedirectResult():t})))}))),e.i}function yd(e,t){xd(e),e.g=t}var wd=null;function Id(e){return xd(e),e.h}function Ed(e){return xd(e),e.a}function Cd(e){return xd(e),e.oa}function Td(e){return xd(e),e.O?e.O.emailHint:void 0}function Sd(e){return"signIn"===((e=new je(e)).a.a.get(Ve.ub)||null)&&!!e.a.a.get(Ve.$a)}function kd(e,t,n,i){xd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var s=d.document;e.C?e.C.then((function(){"complete"==s.readyState?Ld(e,t):si(window,"load",(function(){Ld(e,t)}))})):"complete"==s.readyState?Ld(e,t):si(window,"load",(function(){Ld(e,t)}))}function Ld(e,t){var n=or(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),wd){var i=wd;xd(i),to(Cd(i))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),wd.reset()}if(wd=e,e.T=n,function(e,t){e.L=null,e.J=new Ei(t),e.J.register(),ii(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=Md(e);(n=Xo(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),js(new Hs)&&js(new qs)){t=or(t,"Could not find the FirebaseUI widget element on the page."),n=(n=be(n=ar(),i=lo(Md(e).a,"queryParameterForSignInSuccessUrl")))?wt(Et(n)).toString():null;e:{i=ar();var r=Ho(Md(e));for(s in i=be(i,r)||"",aa)if(aa[s].toLowerCase()==i.toLowerCase()){var s=aa[s];break e}s="callback"}switch(s){case"callback":n&&(s=Cd(e),Zs(Gs,n,s)),e.nb()?da("callback",e,t):ou(e,t,Td(e));break;case"resetPassword":da("passwordReset",e,t,du(),hu());break;case"recoverEmail":da("emailChangeRevocation",e,t,du());break;case"revertSecondFactorAddition":da("revertSecondFactorAddition",e,t,du());break;case"verifyEmail":da("emailVerification",e,t,du(),hu());break;case"verifyAndChangeEmail":da("verifyAndChangeEmail",e,t,du(),hu());break;case"signIn":da("emailLinkSignInCallback",e,t,ar()),Dd();break;case"select":n&&(s=Cd(e),Zs(Gs,n,s)),ou(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Xo(t=Md(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(s=new Xc(un("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),yd(e,s);t=e.g&&"blank"==e.g.Ga&&zo(Md(e)),ro(Cd(e))&&!t&&(Od(e,(t=ro(Cd(e))).a),Qs(Ks,Cd(e)))}function Rd(e,t){if(e.A)return t(Ad(e));if(Pd(e,(function(){e.A=!1})),Ro(Md(e))){var n=new Fi((function(n){Pd(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Ad(e))))})))}));return Pd(e,n),n}return e.A=!0,t(null)}function Ad(e){return xd(e),Ro(Md(e))&&e.j&&e.j.isAnonymous?e.j:null}function Pd(e,t){if(xd(e),t){e.s.push(t);var n=function(){W(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Nd(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Od(e,t){e.a.tenantId=t,e.h.tenantId=t}function Md(e){return xd(e),e.ca}function xd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Dd(){var e=ar();if(Sd(e)){for(var t in e=new je(e),Ve)Ve.hasOwnProperty(t)&&De(e.a.a,Ve[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=d.document.title;d.history&&d.history.replaceState&&d.history.replaceState(t,n,e.toString())}}function Ud(e){return xd(e),Id(e).signOut()}function Fd(e,t,n){if(xd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Jo(Md(e));return Wi().then((function(){return i(new Mn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return zi(t)}function Bd(e,t,n,i){xl.call(this,Ec,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function jd(e,t,n,i,r){xl.call(this,Ic,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function Hd(e){xl.call(this,Wl,void 0,e,"spinner")}function qd(e){for(var t in this.a=new so,oo(this.a,"authDomain"),oo(this.a,"displayMode",Jd),oo(this.a,"tenants"),oo(this.a,"callbacks"),oo(this.a,"tosUrl"),oo(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{ao(this.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}}function $d(e){return e.a.get("callbacks")||{}}function Vd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Wd(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function zd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Qd))throw Error("Invalid tenant configuration!")}function Kd(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Qd]))return Gr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Gr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function Gd(e,t,n){return e=function(e,t){var n=Yd,i=void 0===i?{}:i;return zd(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Qd],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(e=gd.prototype).nb=function(){return xd(this),!!ro(Cd(this))||Sd(ar())},e.start=function(e,t){kd(this,e,t)},e.Db=function(){xd(this),this.Z=!0},e.reset=function(){xd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&wi(this.J),Nd(this),this.O=null,Dd(),Qs(Ks,Cd(this)),xd(this),this.l.cancel(),this.i=Wi({user:null,credential:null}),wd==this&&(wd=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],no(Cd(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Ud(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){xd(this);var t,n=this.ca;for(t in e)try{ao(n.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}rt&&ao(n.a,"popupMode",!1),jo(n),!this.da&&Go(Md(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){xd(this);var e=Md(this),t=lo(e.a,"widgetUrl");e=Ho(e);for(var n,i=t.search(ve),r=0,s=[];0<=(n=_e(t,r,e,i));)s.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);s.push(t.substr(r)),t=s.join("").replace(ye,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,Md(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=ir(i,e))&&e.focus()):Ut(window.location,i)},e.Wa=function(){var e=this;return xd(this),this.h.app.delete().then((function(){var t=vd(Cd(e));delete _d[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){xd(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Wo(Md(this)))return zi(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Wo(e)){var t={url:ar(),handleCodeInApp:!0};(e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&le(t,e.emailLinkSignIn()),e=t.url;var n=ar();n instanceof we||(n=Te(n)),e instanceof we||(e=Te(e));var i=n;n=new we(i);var r=!!e.j;r?Ie(n,e.j):r=!!e.A,r?n.A=e.A:r=!!e.h,r?n.h=e.h:r=null!=e.C;var s=e.g;if(r)Ee(n,e.C);else if(r=!!e.g)if("/"!=s.charAt(0)&&(i.h&&!i.g?s="/"+s:-1!=(i=n.g.lastIndexOf("/"))&&(s=n.g.substr(0,i+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");for(var o=[],a=0;a<s.length;){var l=s[a++];"."==l?i&&a==s.length&&o.push(""):".."==l?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==s.length&&o.push("")):(o.push(l),i=!0)}s=o.join("/")}return r?n.g=s:r=""!==e.a.toString(),r?Ce(n,Fe(e.a)):r=!!e.s,r&&(n.s=e.s),t.url=n.toString(),t}return null}(Md(this)),s=new je(r.url);return function(e,t){t?e.a.a.set(Ve.Sa,t):De(e.a.a,Ve.Sa)}(s,i),t&&t.a&&(function(e,t,n){Zs(Js,Ls(e,JSON.stringify(ss(t))),n)}(i,t,Cd(this)),qe(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ve.Qa,t?"1":"0"):De(e.a.a,Ve.Qa)}(s,function(e){return!(!(e=Po(e,Fu.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Md(this))),Rd(this,(function(t){return t&&((t=t.uid)?s.a.a.set(Ve.Pa,t):De(s.a.a,Ve.Pa)),r.url=s.toString(),Id(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=Cd(n),r={};r.email=e,Zs(Ys,Ls(i,JSON.stringify(r)),t)}),(function(e){throw Qs(Js,Cd(n)),Qs(Ys,Cd(n)),e}))},e.bc=function(e,t){xd(this);var n=this;return Id(this).signInWithEmailAndPassword(e,t).then((function(i){return Rd(n,(function(r){return r?Ud(n).then((function(){return Fd(n,{code:"auth/email-already-in-use"},Fu.auth.EmailAuthProvider.credential(e,t))})):i}))}))},e.Yb=function(e,t){xd(this);var n=this;return Rd(this,(function(i){if(i){var r=Fu.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(r)}return Id(n).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){xd(this);var t=this;return Rd(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fd(t,n,e)})):Id(t).signInWithCredential(e)}))},e.dc=function(e){xd(this);var t=this,n=this.i;return this.i=null,Rd(this,(function(n){return n&&!to(Cd(t))?n.linkWithRedirect(e):Id(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},e.cc=function(e,t){xd(this);var n=this;return Rd(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Rr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fd(n,e);throw e}))})):Ed(n).signInWithPhoneNumber(e,t).then((function(e){return new Rr(e)}))}))},e.$b=function(){return xd(this),Ed(this).signInAnonymously()},e.Xb=function(e,t){return xd(this),Id(this).signInWithEmailAndPassword(e,t)},a(Bd,xl),Bd.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Au(this.l(),(this.l().value||"").length),xl.prototype.v.call(this)},Bd.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},R(Bd.prototype,{l:Oc,H:Mc,u:xc,B:Dc,j:Uc,M:Cc,w:Sc}),a(jd,xl),jd.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?Ht("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var s=i[r];nl(e,s,L(n,Zu(s,"tenantId")))}}(this,this.i),xl.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,xl.prototype.o.call(this)},a(Hd,xl);var Yd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Jd="optionFirst",Xd={pc:Jd,oc:"identifierFirst"},Qd="*";function Zd(e,t){var n=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new qd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Zd.prototype).Ub=function(e,t){var n=this;eh(this);var i=e.apiKey;return new Fi((function(e,r){if(n.a.hasOwnProperty(i)){var s=$d(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return Jd}(n.a[i])===Jd){var o=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Qd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Gr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&o.push(e)}));var a=function(t){t={tenantId:t,providerIds:Kd(n.a[i],t||"_")},e(t)};if(1===o.length)return void a(o[0].tenantId);n.g=new jd((function(e){eh(n),s&&s(),a(e)}),o,Vd(n.a[i]),Wd(n.a[i]))}else n.g=new Bd((function(){var r=n.g.j();if(r){for(var o=0;o<t.length;o++){var a=Kd(n.a[i],t[o]||"_",r);if(0!==a.length)return r={tenantId:t[o],providerIds:a,email:r},eh(n),s&&s(),void e(r)}n.g.a(Nn({code:"no-matching-tenant-for-email"}).toString())}}),Vd(n.a[i]),Wd(n.a[i]));n.g.render(n.s),(r=$d(n.a[i]).selectTenantUiShown||null)&&r()}else{var l=Error("Invalid project configuration: API key is invalid!");l.code="invalid-configuration",n.pb(l),r(l)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;zd(this.a[e],t||"_");try{this.i=Fu.app(n).auth()}catch(r){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=Fu.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var n=this;return new Fi((function(i,r){function s(t,i){n.j=new gd(e),kd(n.j,n.s,t,i)}var o=e.app.options.apiKey;n.a.hasOwnProperty(o)||r(Error("Invalid project configuration: API key is invalid!"));var a=Gd(n.a[o],e.tenantId||"_",t&&t.providerIds);eh(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var l,c=$d(n.a[o]).signInUiShown||null,u=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=qt("firebaseui-id-page-callback",n.s))&&il(t),n.h=new Hd,n.h.render(n.s)):u||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),u=!0,c&&c(e.tenantId))},a.callbacks=r,a.credentialHelper="none",t&&t.email&&(l={emailHint:t.email}),n.j?n.j.Wa().then((function(){s(a,l)})):s(a,l)}))},e.reset=function(){var e=this;return Wi().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new Hd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return eh(this),this.g=new zc,this.g.render(this.s),Wi()},e.pb=function(e){var t,n=this,i=Nn({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Jc(i,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return Wi().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(zd(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=$d(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},N("firebaseui.auth.FirebaseUiHandler",Zd),N("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Zd.prototype.Ub),N("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Zd.prototype.Pb),N("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Zd.prototype.Zb),N("firebaseui.auth.FirebaseUiHandler.prototype.reset",Zd.prototype.reset),N("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Zd.prototype.Vb),N("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Zd.prototype.mb),N("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Zd.prototype.Bb),N("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Zd.prototype.pb),N("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Zd.prototype.Rb),N("firebaseui.auth.AuthUI",gd),N("firebaseui.auth.AuthUI.getInstance",(function(e){return e=vd(e),_d[e]?_d[e]:null})),N("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",gd.prototype.Db),N("firebaseui.auth.AuthUI.prototype.start",gd.prototype.start),N("firebaseui.auth.AuthUI.prototype.setConfig",gd.prototype.ib),N("firebaseui.auth.AuthUI.prototype.signIn",gd.prototype.Wb),N("firebaseui.auth.AuthUI.prototype.reset",gd.prototype.reset),N("firebaseui.auth.AuthUI.prototype.delete",gd.prototype.Wa),N("firebaseui.auth.AuthUI.prototype.isPendingRedirect",gd.prototype.nb),N("firebaseui.auth.AuthUIError",Mn),N("firebaseui.auth.AuthUIError.prototype.toJSON",Mn.prototype.toJSON),N("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",na),N("firebaseui.auth.CredentialHelper.NONE",ia),N("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Fi.prototype.catch=Fi.prototype.Ca,Fi.prototype.finally=Fi.prototype.fc}).apply(void 0!==t?t:"undefined"!=typeof self?self:window)}.apply(void 0!==t?t:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=n(bg));var Tg=firebaseui.auth;Ng();const Sg=as({apiKey:"AIzaSyDIoIRzEVLYUAacFuhtdxkAGV2NgLE6g88",authDomain:"filmoteka-by-10x.firebaseapp.com",projectId:"filmoteka-by-10x",storageBucket:"filmoteka-by-10x.appspot.com",messagingSenderId:"584362052438",appId:"1:584362052438:web:cf4a6cf976e80465e364f7",databaseURL:"https://filmoteka-by-10x-default-rtdb.europe-west1.firebasedatabase.app/"}),kg=function(e=ls()){const t=ts(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ts(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(rr(n.getOptions(),null!=t?t:{}))return e;id(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Sp,persistence:[Lf,pf,mf]}),i=$i("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ap)return;const i=null==t?void 0:t.token;Pp!==i&&(Pp=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){mr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){mr(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Hi("auth");return s&&rh(n,`http://${s}`),n}(Sg);!async function(){e=kg,t=e=>{e?(Ng(),c.loginButton.classList.add("visually-hidden"),c.logoutButton.classList.remove("visually-hidden")):(c.logoutButton.classList.add("visually-hidden"),c.loginButton.classList.remove("visually-hidden")),function(e){switch(Gg()){case"watched":rm();break;case"queue":sm()}}(Boolean(e))},mr(e).onAuthStateChanged(t,n,i);var e,t,n,i}();const Lg={signInFlow:"popup",signInOptions:[Ih.PROVIDER_ID,_h.PROVIDER_ID]},Rg=new Tg.AuthUI(kg);c.logoutButton.addEventListener("click",(async function(){await(e=kg,mr(e).signOut());var e})),c.loginButton.addEventListener("click",Pg),c.authCancelButton.addEventListener("click",(()=>{Ng()})),c.myLibraryLink.addEventListener("click",(()=>{kg.currentUser||Pg()}));const Ag=()=>Boolean(kg.currentUser);function Pg(){Rg.start(c.authForm,Lg),c.auth.classList.remove("visually-hidden")}function Ng(){c.auth.classList.add("visually-hidden")}const Og=new Wn,Mg=function(e=ls(),t){const n=ts(e,"database").getImmediate({identifier:t}),i=qi("database");return i&&function(e,t,n,i={}){(e=mr(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Bs("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Bs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new to(to.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Wi(i.mockUserToken,e.app.options.projectId);s=new to(t)}!function(e,t,n,i){e.repoInfo_=new io(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...i),n}(Sg);var xg=new WeakMap;class Dg{async includes(e){if(!kg.currentUser)return!1;try{const t=await Lu(Cu(Mg,`/users/${kg.currentUser.uid}/${n(Kn)(this,xg)}/${e}`));return t.exists()}catch(e){return!1}}async getIds(){if(!kg.currentUser)return[];try{const e=await Lu(Cu(Mg,`/users/${kg.currentUser.uid}/${n(Kn)(this,xg)}`));let t=e.exists()?e.val():{};return Object.keys(t)}catch(e){}return[]}async addId(e){if(kg.currentUser)try{await ku(Cu(Mg,`/users/${kg.currentUser.uid}/${n(Kn)(this,xg)}`),{[e]:e})}catch{}}async removeId(e){var t;if(kg.currentUser)try{await(t=Cu(Mg,`/users/${kg.currentUser.uid}/${n(Kn)(this,xg)}/${e}`),qc("remove",t._path),Su(t,null))}catch{}}async getItems(e){if(!kg.currentUser)return{page:0,total_pages:0,total_results:0,results:[]};const t=await this.getIds(),n=20*(e-1),i=n+20,r=t.slice(n,i),s=t.length;return{page:e,total_pages:Math.ceil(s/20),total_results:s,results:(await Og.getFilmMassiveById(r)).map((e=>(e.genre_ids=e.genres.map((({id:e})=>e)),e)))}}constructor(e){n(Xn)(this,xg,{writable:!0,value:void 0}),n(ei)(this,xg,e)}}const Ug=new Dg("watched"),Fg=new Dg("queued"),Bg=Ug.getItems.bind(Ug),jg=(Ug.getIds.bind(Ug),Ug.includes.bind(Ug)),Hg=Ug.addId.bind(Ug),qg=Ug.removeId.bind(Ug),$g=Fg.getItems.bind(Fg),Vg=(Fg.getIds.bind(Fg),Fg.includes.bind(Fg)),Wg=Fg.addId.bind(Fg),zg=Fg.removeId.bind(Fg);new Wn;c.myLibraryLink.addEventListener("click",(function(e){e.preventDefault(),c.header.classList.add("header--my-library"),c.homeLink.classList.remove("current"),Jg(e),c.formSearch.classList.add("visually-hidden"),c.headerButtons.forEach((e=>{e.classList.remove("visually-hidden")})),c.watchedButton.click()})),c.headerButtons[0].addEventListener("click",(function(e){c.queueButton.classList.remove("current"),Jg(e),Kg="watched",rm()})),c.headerButtons[1].addEventListener("click",Yg);let Kg="home";const Gg=()=>Kg;function Yg(e){c.headerButtons[0].classList.remove("current"),Jg(e),Kg="queue",sm()}function Jg(e){e.target.classList.add("current"),e.target.blur()}function Xg(e){e.preventDefault(),Kg="home",c.header.classList.remove("header--my-library"),c.myLibraryLink.classList.remove("current"),Jg({target:c.homeLink}),c.formSearch.classList.remove("visually-hidden"),c.formSearch.reset(),c.headerButtons.forEach((e=>{e.classList.add("visually-hidden")})),nm()}c.homeLink.addEventListener("click",Xg),c.logo.addEventListener("click",Xg);const Qg=e=>{Xg(e)},Zg=e=>{Yg(e),c.queueButton.classList.add("current")};async function em({getMoviesCallback:e,renderCallback:t,runIfNoResultsCallback:n,preventRenderIfNoResults:i}){try{A(),c.plug.innerHTML="";const{total_pages:s,results:o}=await e(1);if(0===s&&n&&n(),0===s&&i)return;t(o),r=async n=>{A(),window.scrollTo({top:0,left:0});const{results:i}=await e(n);t(i),P()},g=1,C=s,T(),p instanceof Function&&(p=r)}finally{P()}var r}function tm(e){const t=c.galleryList.querySelector(`[data-id="${e}"]`).closest(".collection_item");t&&t.remove()}const nm=em.bind(null,{getMoviesCallback:zn.getTrendingFilmsByPage.bind(zn),renderCallback:u,runIfNoResultsCallback:null}),im=em.bind(null,{getMoviesCallback:zn.getFilmSearchByPage.bind(zn),renderCallback:u,runIfNoResultsCallback:function(){c.searchErrorMessage.style.display="block",c.searchButton.removeAttribute("disabled")},preventRenderIfNoResults:!0}),rm=em.bind(null,{getMoviesCallback:Bg,renderCallback:h,runIfNoResultsCallback:()=>{c.plug.innerHTML=`\n    <div class="plug__container">\n      <strong class="plug__strong">Ooops! There's nothing here yet!</strong>\n      <img class="plug__gif" src="${"https://i.gifer.com/gg7.gif"}" />\n      <p class="plug__text">Hurry up and watch a movie!</p>\n      <button type="button" class="plug__button" data-action="go-home">\n        Go Home\n      </button>\n      <button type="button" class="plug__button" data-action="go-queue">\n        Go Queue\n      </button>\n    </div>\n  `,document.querySelector('[data-action="go-home"]').addEventListener("click",Qg),document.querySelector('[data-action="go-queue"]').addEventListener("click",Zg)}}),sm=em.bind(null,{getMoviesCallback:$g,renderCallback:h,runIfNoResultsCallback:()=>{c.plug.innerHTML=`\n    <div class="plug__container">\n      <strong class="plug__strong">Ooops! There's nothing here yet!</strong>\n      <img class="plug__gif" src="${"https://i.gifer.com/C4j.gif"}" />\n      <p class="plug__text">Hurry up and add the movie!</p>\n      <button type="button" class="plug__button" data-action="go-home">\n        Go Home\n      </button>  \n    </div>\n  `,document.querySelector('[data-action="go-home"]').addEventListener("click",Qg)}});nm(),c.formSearch.addEventListener("submit",(async function(e){e.preventDefault();const{elements:{searchQuery:t},lastElementChild:n}=e.target,i=e.target[1];if(zn.query=t.value.trim(),""===zn.query)return n.style.display="block",void e.currentTarget.reset();try{A(),i.setAttribute("disabled",!0),n.style.display="none",i.removeAttribute("disabled"),im()}catch{}finally{c.formSearch.reset(),P()}}));const om=({poster_path:e,title:t,vote_average:n,vote_count:i,popularity:r,original_title:s,genres:o,overview:a,id:l})=>null===e?`\n  <div class="movie-card" data-action=${l}>\n    <div class="cardItem__image">\n         <p class="no-poster">Poster coming soon</p>\n    </div>\n    <div class="cardItem__wrapper">\n        <h2 class="cardItem__name">${t}</h2>\n        <p class="cardItem__text">\n          Vote / Votes<span class="cardItem__averageVote">${n}</span>/<span\n            class="cardItem__countVote"\n            >${i}</span\n          >\n        </p>\n        <p class="cardItem__text">\n          Popularity<span class="cardItem__data">${r}</span>\n        </p>\n        <p class="cardItem__text">\n          Original&nbspTitle<span class="cardItem__title">${s}</span>\n        </p>\n        <div class="genres">\n          <p class="cardItem__genre">Genre</p>\n          <p class="cardItem__genreList">${o.map((e=>e.name)).join(", ")}</p>\n        </div>\n          <p class="cardItem__about">About</p>\n          <p class="cardItem__description">${a}\n        </p>\n       <div class="modal-btn__wrapper">\n          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>\n          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>\n       </div>\n    </div>   \n  </div>\n      `:`\n  <div class="movie-card" data-action=${l}>\n    <div class="cardItem__image">\n        <img class="image" src="https://image.tmdb.org/t/p/w400${e}" loading="lazy" alt="${l}" />\n    </div>\n    <div class="cardItem__wrapper">\n        <h2 class="cardItem__name">${t}</h2>\n        <p class="cardItem__text">\n          Vote / Votes<span class="cardItem__averageVote">${n}</span>/<span\n            class="cardItem__countVote"\n            >${i}</span\n          >\n        </p>\n        <p class="cardItem__text">\n          Popularity<span class="cardItem__data">${r}</span>\n        </p>\n        <p class="cardItem__text">\n          Original&nbspTitle<span class="cardItem__title">${s}</span>\n        </p>\n        <div class="genres">\n          <p class="cardItem__genre">Genre</p>\n          <p class="cardItem__genreList">${o.map((e=>e.name)).join(", ")}</p>\n        </div>\n          <p class="cardItem__about">About</p>\n          <p class="cardItem__description">${a}\n        </p>\n       <div class="modal-btn__wrapper">\n          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>\n          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>\n       </div>\n    </div>   \n  </div>\n      `;var am;am=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();const lm=new Wn;async function cm(e){try{const{official:t,key:i}=await lm.getTrailer(e);if(!t)return;!function(){const e=`<button type="button" class="trailer-button">\n  <svg class="play-icon" width="50" height="50"><use href="${n(am)}#icon-play"></use></svg></button>`;c.modalCardItem.insertAdjacentHTML("beforeend",e)}(),function(e){const t=`<iframe\n      width="560"\n      height="315"\n      src="https://www.youtube.com/embed/${e}"\n      title="YouTube video player"\n      frameborder="0"\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen\n      class="trailer hidden-trailer"\n    ></iframe>`;c.modalCardItem.insertAdjacentHTML("beforeend",t)}(i),c.trailerBtn=document.querySelector(".trailer-button"),c.trailerVideo=document.querySelector(".trailer"),c.trailerBtn.addEventListener("click",um)}catch{}}const um=()=>c.trailerVideo?.classList.remove("hidden-trailer");const dm=new Wn;let hm=null;function fm(e){e.currentTarget!==c.movieModalCloseBtn&&e.currentTarget!==e.target&&"Escape"!==e.code||(document.body.classList.toggle("modal-open"),c.movieModalContainer.innerHTML="",c.movieModalBackDrop.classList.add("modal-hidden"),um(),"watched"===Gg()&&jg(hm).then((e=>{e||tm(hm)})),"queue"===Gg()&&Vg(hm).then((e=>{e||tm(hm)})))}c.galleryList.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest(".card");if(!t)return;if(hm=Number(t.dataset.id),!t)return;document.body.classList.toggle("modal-open"),c.movieModalBackDrop.classList.remove("modal-hidden"),dm.getFilmById(hm).then((e=>{!function(e){const t=om(e);c.movieModalContainer.innerHTML=t,c.modalWatchedButton=document.querySelector("[data-action-modal-watched]"),c.modalQueueButton=document.querySelector("[data-action-modal-queue]"),c.modalWatchedButton.addEventListener("click",(async e=>{Ag()?(await jg(hm)?(qg(hm),e.target.blur()):(Hg(hm),e.target.blur()),pm(hm)):Pg()})),c.modalQueueButton.addEventListener("click",(async e=>{Ag()?(await Vg(hm)?(zg(hm),e.target.blur()):(Wg(hm),e.target.blur()),pm(hm)):Pg()})),pm(hm)}(e),c.movieModalBackDrop.addEventListener("mousedown",fm),document.addEventListener("keydown",fm),c.modalCardItem=document.querySelector(".cardItem__image"),cm(hm)})).catch(console.log)})),c.movieModalCloseBtn.addEventListener("click",fm),c.movieModalBackDrop.classList.contains("modal-hidden")&&(c.movieModalBackDrop.removeEventListener("mousedown",fm),document.removeEventListener("keydown",fm));async function pm(e){c.modalWatchedButton.textContent=await jg(e)?"Remove from watched":"Add to watched",c.modalQueueButton.textContent=await Vg(e)?"Remove from queue":"Add to queue"}var gm,mm=/^\s+|\s+$/g,_m=/^[-+]0x[0-9a-f]+$/i,vm=/^0b[01]+$/i,bm=/^0o[0-7]+$/i,ym=parseInt,wm="object"==typeof t&&t&&t.Object===Object&&t,Im="object"==typeof self&&self&&self.Object===Object&&self,Em=wm||Im||Function("return this")(),Cm=Object.prototype.toString,Tm=Math.max,Sm=Math.min,km=function(){return Em.Date.now()};function Lm(e,t,n){var i,r,s,o,a,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,s=r;return i=r=void 0,c=t,o=e.apply(s,n)}function p(e){return c=e,a=setTimeout(m,t),u?f(e):o}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=s}function m(){var e=km();if(g(e))return _(e);a=setTimeout(m,function(e){var n=t-(e-l);return d?Sm(n,s-(e-c)):n}(e))}function _(e){return a=void 0,h&&i?f(e):(i=r=void 0,o)}function v(){var e=km(),n=g(e);if(i=arguments,r=this,l=e,n){if(void 0===a)return p(l);if(d)return a=setTimeout(m,t),f(l)}return void 0===a&&(a=setTimeout(m,t)),o}return t=Am(t)||0,Rm(n)&&(u=!!n.leading,s=(d="maxWait"in n)?Tm(Am(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=r=a=void 0},v.flush=function(){return void 0===a?o:_(km())},v}function Rm(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Am(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Cm.call(e)}(e))return NaN;if(Rm(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rm(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(mm,"");var n=vm.test(e);return n||bm.test(e)?ym(e.slice(2),n?2:8):_m.test(e)?NaN:+e}gm=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Rm(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Lm(e,t,{leading:i,maxWait:t,trailing:r})},window.addEventListener("scroll",n(gm)((function(e){if(e.preventDefault(),document.scrollingElement.scrollTop>=500)return void c.arrow.classList.add("arrow-visible");c.arrow.classList.remove("arrow-visible")}),500));const Pm=()=>{try{"dark"===localStorage.getItem("theme")?(c.HTML.classList.add("dark"),c.themeToggle.checked=!0):c.HTML.classList.remove("dark")}catch(e){return}};c.themeToggle.addEventListener("click",(e=>{"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),Pm()})),Pm();
//# sourceMappingURL=index.c656b272.js.map
