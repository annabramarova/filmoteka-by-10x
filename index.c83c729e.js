var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),document.body.onload=function(){setTimeout((function(){const e=document.querySelector("#preloader");e.classList.contains("done")||e.classList.add("done")}),1500)};const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}];function a({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){let a=[];r.map((e=>o.filter((t=>{t.id===e&&a.push(`${t.name}`)})))),a.length>=3&&a.splice(2,a.length-1,"Other");const c=`https://image.tmdb.org/t/p/original/${t}`,u=i.slice(0,4),l=a.join(", "),h=s.toFixed(1);return null===t?`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <span class="card-rating">${h}</span>\n  <div class="card_no-img">\n  <p class="no-poster">Poster coming soon</p>\n</div>\n  </a>\n      <div class="card-wrap">\n        <h3 class="card-name">${n}</h3>\n        <p class="card-genres">${l} | ${u}</p>\n      </div>\n  </article>\n  </li>`:`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <span class="card-rating">${h}</span>\n  <a href="" class="card_link">\n  <img class="card_img" width="394" src=${c} alt=${n}>\n  </a>\n      <div class="card-wrap">\n        <h3 class="card-name">${n}</h3>\n        <p class="card-genres">${l} | ${u}</p>\n      </div>\n  </article>\n  </li>`}const c={galleryList:document.querySelector(".collection_list"),pagin_box:document.querySelector(".pagin_box"),formSearch:document.querySelector(".search-form"),arrow:document.querySelector(".arrow-ref"),header:document.querySelector(".header"),logo:document.querySelector(".header .logo"),homeLink:document.querySelector("#home-link"),myLibraryLink:document.querySelector("#my-library-link"),headerButtons:document.querySelectorAll(".header-button"),loginButton:document.querySelector('[data-action="login"]'),logoutButton:document.querySelector('[data-action="logout"]'),watchedButton:document.querySelector('[data-activ="watched"]'),queueButton:document.querySelector('[data-activ="queue"]'),searchErrorMessage:document.querySelector("#search-form p"),searchButton:document.querySelector('[data-activ="search"]'),movieModalContainer:document.querySelector(".movie-modal__container"),movieModalBackDrop:document.querySelector(".movie-backdrop"),movieModalCloseBtn:document.querySelector(".modal-close-btn"),modalCardItem:document.querySelector(".cardItem__image"),trailerBtn:document.querySelector(".trailer-button"),trailerVideo:document.querySelector(".trailer"),modalWatchedButton:document.querySelector("[data-action-modal-watched]"),modalQueueButton:document.querySelector("[data-action-modal-queue]"),auth:document.querySelector(".auth"),authForm:document.querySelector(".auth__form"),authCancelButton:document.querySelector('.auth [data-action="cancel"]'),openModalBtn:document.querySelector("[data-team-modal-open]"),closeModalBtn:document.querySelector("[data-team-modal-close]"),modalTeam:document.querySelector("[data-team-modal]"),body:document.querySelector("body"),galleryWatchedBtn:document.querySelector('button[data-activ="watched"]'),libMenu:document.querySelector("[data-modal]"),libMenuCloseBtn:document.querySelector(".lib_modal-close-btn"),bestCardContainer:document.querySelector(".proposed-card"),galleryQueueBtn:document.querySelector('button[data-activ="queue"]'),addToQueueBtn:document.querySelector(".addToQueue"),galleryContainer:document.querySelector(".gallery-container"),plug:document.querySelector(".plug")};function u({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){let a=[];r.map((e=>o.filter((t=>{t.id===e&&a.push(`${t.name}`)})))),a.length>=3&&a.splice(2,a.length-1,"Other");const c=`https://image.tmdb.org/t/p/original/${t}`,u=i.slice(0,4),l=a.join(", "),h=s.toFixed(1);return null===t?`<li class="collection_item">\n    <article class="card" data-id=${e}>\n    <div class="card_no-img">\n    <p class="no-poster">Poster coming soon</p>\n  </div>\n    <div class="library-card-wrap-info">\n          <h3 class="card-name">${n}</h3>\n          <p class="library-card-genres">${l} | ${u}<span class="library-card-rating">${h}</span></p>\n        </div>\n    </article>\n    </li>`:`<li class="collection_item">\n  <article class="card" data-id=${e}>\n  <a href="" class="card_link">\n  <img class="card_img" width="394" src=${c} alt=${n}>\n  </a>\n  <div class="library-card-wrap-info">\n        <h3 class="card-name">${n}</h3>\n        <p class="library-card-genres">${l} | ${u}<span class="library-card-rating">${h}</span></p>\n      </div>\n  </article>\n  </li>`}function l(e){let t=e.map(u).join("");c.galleryList.innerHTML="",c.galleryList.insertAdjacentHTML("beforeend",t)}function h(e){e.currentTarget!==e.target&&"Escape"!==e.code||(c.modalTeam.classList.add("visually-hidden"),c.modalTeam.removeEventListener("mousedown",h),document.removeEventListener("keydown",h))}(()=>{function e(){c.modalTeam.classList.toggle("visually-hidden"),c.body.classList.toggle("no-scroll"),c.modalTeam.addEventListener("mousedown",h),document.addEventListener("keydown",h)}c.openModalBtn.addEventListener("click",e),c.closeModalBtn.addEventListener("click",e)})();let d=e=>{};let f=1,p=f-4,g=f-3,m=f-2,v=f-1,b=f+1,y=f+2,_=f+3,w=f+4,I=1;function E(){window.scrollTo(0,0),S(),0===I||1===I?C():2===I?c.pagin_box.innerHTML=1===f?`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth"> </button>\n`:`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>`:3===I?1===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n        <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n`:2===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n        <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n`:3===f&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>`):4===I?1===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:2===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:3===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:4===f&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>`):5===I?1===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button">${w}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:2===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:3===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:4===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:5===f&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${v}</button>\n    <button type="submit" class="pagin_button">${f}</button>`):6===I?1===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button">${w}</button>\n    <button type="submit" class="pagin_button">${I}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:2===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button">${w}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:3===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:4===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:5===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>`:6===f&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">1</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${f}</button>`):I>6&&(1===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button">${w}</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${I}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n    `:2===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${I}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n  `:3===f?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${I}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n  `:f>=4&&f<=I-3?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${I}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">🡲</button>\n  `:f===I-2?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n\n  `:f===I-1?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n  `:f===I&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">🡰</button>\n\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button pagin_accent">${f}</button>\n    `)),window.innerWidth}function C(){c.pagin_box.innerHTML=""}function S(){p=f-4,g=f-3,m=f-2,v=f-1,b=f+1,y=f+2,_=f+3,w=f+4}function k(){const e=document.querySelector("#preloader");e.classList.contains("done")&&(e.classList.remove("done"),e.style.backgroundColor="#ffffff00")}function T(){const e=document.querySelector("#preloader");e.classList.contains("done")||e.classList.add("done")}c.pagin_box.addEventListener("click",(function(e){if("submit"===e.target.type){if(Number(f)===Number(e.target.innerText))return;return"🡰"===e.target.innerText?(f--,S(),d(f),E()):"🡲"===e.target.innerText?(f++,S(),d(f),E()):(f=Number(e.target.innerText),S(),d(f),E())}}));var R={};function A(e,t){return function(){return e.apply(t,arguments)}}t(R,"default",(function(){return se}),(function(e){return se=e}));const{toString:P}=Object.prototype,{getPrototypeOf:N}=Object,O=(L=Object.create(null),e=>{const t=P.call(e);return L[t]||(L[t]=t.slice(8,-1).toLowerCase())});var L;const x=e=>(e=e.toLowerCase(),t=>O(t)===e),D=e=>t=>typeof t===e,{isArray:M}=Array,U=D("undefined");const F=x("ArrayBuffer");const B=D("string"),j=D("function"),q=D("number"),$=e=>null!==e&&"object"==typeof e,H=e=>{if("object"!==O(e))return!1;const t=N(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},V=x("Date"),W=x("File"),z=x("Blob"),K=x("FileList"),G=x("URLSearchParams");function Y(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),M(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function J(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const X="undefined"==typeof self?void 0===e?void 0:e:self,Q=e=>!U(e)&&e!==X;const Z=(ee="undefined"!=typeof Uint8Array&&N(Uint8Array),e=>ee&&e instanceof ee);var ee;const te=x("HTMLFormElement"),ne=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ie=x("RegExp"),re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Y(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var se={isArray:M,isArrayBuffer:F,isBuffer:function(e){return null!==e&&!U(e)&&null!==e.constructor&&!U(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||P.call(e)===t||j(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&F(e.buffer),t},isString:B,isNumber:q,isBoolean:e=>!0===e||!1===e,isObject:$,isPlainObject:H,isUndefined:U,isDate:V,isFile:W,isBlob:z,isRegExp:ie,isFunction:j,isStream:e=>$(e)&&j(e.pipe),isURLSearchParams:G,isTypedArray:Z,isFileList:K,forEach:Y,merge:function e(){const{caseless:t}=Q(this)&&this||{},n={},i=(i,r)=>{const s=t&&J(n,r)||r;H(n[s])&&H(i)?n[s]=e(n[s],i):H(i)?n[s]=e({},i):M(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Y(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(Y(t,((t,i)=>{n&&j(t)?e[i]=A(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&N(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:O,kindOfTest:x,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!q(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:te,hasOwnProperty:ne,hasOwnProp:ne,reduceDescriptors:re,freezeMethods:e=>{re(e,((t,n)=>{if(j(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];j(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return M(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:J,global:X,isContextDefined:Q,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if($(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=M(e)?[]:{};return Y(e,((e,t)=>{const s=n(e,i+1);!U(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function oe(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}R.default.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ae=oe.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(oe,ce),Object.defineProperty(ae,"isAxiosError",{value:!0}),oe.from=(e,t,n,i,r,s)=>{const o=Object.create(ae);return R.default.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),oe.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var ue,le,he,de=oe,fe=n("object"==typeof self?self.FormData:window.FormData);le=function(e){var t,n,i=Ie(e),r=i[0],s=i[1],o=new be(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=ve[e.charCodeAt(n)]<<18|ve[e.charCodeAt(n+1)]<<12|ve[e.charCodeAt(n+2)]<<6|ve[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=ve[e.charCodeAt(n)]<<2|ve[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=ve[e.charCodeAt(n)]<<10|ve[e.charCodeAt(n+1)]<<4|ve[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},he=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Ee(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(me[t>>2]+me[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(me[t>>10]+me[t>>4&63]+me[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var pe,ge,me=[],ve=[],be="undefined"!=typeof Uint8Array?Uint8Array:Array,ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_e=0,we=ye.length;_e<we;++_e)me[_e]=ye[_e],ve[ye.charCodeAt(_e)]=_e;function Ie(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Ee(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(me[(r=i)>>18&63]+me[r>>12&63]+me[r>>6&63]+me[63&r]);return s.join("")}ve["-".charCodeAt(0)]=62,ve["_".charCodeAt(0)]=63,pe=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=i;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=u}return(f?-1:1)*o*Math.pow(2,s-i)},ge=function(e,t,n,i,r,s){var o,a,c,u=8*s-r-1,l=(1<<u)-1,h=l>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,u+=r;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*g};const Ce="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;ue=ke;function Se(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ke.prototype),t}function ke(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Ae(e)}return Te(e,t,n)}function Te(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ke.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Le(e,t);let i=Se(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(dt(e,Uint8Array)){const t=new Uint8Array(e);return Ne(t.buffer,t.byteOffset,t.byteLength)}return Pe(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(dt(e,ArrayBuffer)||e&&dt(e.buffer,ArrayBuffer))return Ne(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(dt(e,SharedArrayBuffer)||e&&dt(e.buffer,SharedArrayBuffer)))return Ne(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ke.from(i,t,n);const r=function(e){if(ke.isBuffer(e)){const t=0|Oe(e.length),n=Se(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ft(e.length)?Se(0):Pe(e);if("Buffer"===e.type&&Array.isArray(e.data))return Pe(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ke.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Re(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Ae(e){return Re(e),Se(e<0?0:0|Oe(e))}function Pe(e){const t=e.length<0?0:0|Oe(e.length),n=Se(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function Ne(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,ke.prototype),i}function Oe(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Le(e,t){if(ke.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||dt(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ut(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return lt(e).length;default:if(r)return i?-1:ut(e).length;t=(""+t).toLowerCase(),r=!0}}function xe(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ke(this,t,n);case"utf8":case"utf-8":return Ve(this,t,n);case"ascii":return We(this,t,n);case"latin1":case"binary":return ze(this,t,n);case"base64":return He(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ge(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function De(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function Me(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ft(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=ke.from(t,i)),ke.isBuffer(t))return 0===t.length?-1:Ue(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Ue(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function Ue(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(u(e,s+i)!==u(t,i)){n=!1;break}if(n)return s}return-1}function Fe(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(ft(i))return o;e[n+o]=i}return o}function Be(e,t,n,i){return ht(ut(t,e.length-n),e,n,i)}function je(e,t,n,i){return ht(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function qe(e,t,n,i){return ht(lt(t),e,n,i)}function $e(e,t,n,i){return ht(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function He(e,t,n){return 0===t&&n===e.length?he(e):he(e.slice(t,n))}function Ve(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}ke.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ke.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ke.prototype,"parent",{enumerable:!0,get:function(){if(ke.isBuffer(this))return this.buffer}}),Object.defineProperty(ke.prototype,"offset",{enumerable:!0,get:function(){if(ke.isBuffer(this))return this.byteOffset}}),ke.poolSize=8192,ke.from=function(e,t,n){return Te(e,t,n)},Object.setPrototypeOf(ke.prototype,Uint8Array.prototype),Object.setPrototypeOf(ke,Uint8Array),ke.alloc=function(e,t,n){return function(e,t,n){return Re(e),e<=0?Se(e):void 0!==t?"string"==typeof n?Se(e).fill(t,n):Se(e).fill(t):Se(e)}(e,t,n)},ke.allocUnsafe=function(e){return Ae(e)},ke.allocUnsafeSlow=function(e){return Ae(e)},ke.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ke.prototype},ke.compare=function(e,t){if(dt(e,Uint8Array)&&(e=ke.from(e,e.offset,e.byteLength)),dt(t,Uint8Array)&&(t=ke.from(t,t.offset,t.byteLength)),!ke.isBuffer(e)||!ke.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},ke.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ke.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ke.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=ke.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(dt(t,Uint8Array))r+t.length>i.length?(ke.isBuffer(t)||(t=ke.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!ke.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},ke.byteLength=Le,ke.prototype._isBuffer=!0,ke.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)De(this,t,t+1);return this},ke.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)De(this,t,t+3),De(this,t+1,t+2);return this},ke.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)De(this,t,t+7),De(this,t+1,t+6),De(this,t+2,t+5),De(this,t+3,t+4);return this},ke.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ve(this,0,e):xe.apply(this,arguments)},ke.prototype.toLocaleString=ke.prototype.toString,ke.prototype.equals=function(e){if(!ke.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ke.compare(this,e)},ke.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Ce&&(ke.prototype[Ce]=ke.prototype.inspect),ke.prototype.compare=function(e,t,n,i,r){if(dt(e,Uint8Array)&&(e=ke.from(e,e.offset,e.byteLength)),!ke.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),u=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==u[e]){s=c[e],o=u[e];break}return s<o?-1:o<s?1:0},ke.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ke.prototype.indexOf=function(e,t,n){return Me(this,e,t,n,!0)},ke.prototype.lastIndexOf=function(e,t,n){return Me(this,e,t,n,!1)},ke.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return Fe(this,e,t,n);case"utf8":case"utf-8":return Be(this,e,t,n);case"ascii":case"latin1":case"binary":return je(this,e,t,n);case"base64":return qe(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $e(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},ke.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function We(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function ze(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Ke(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=pt[e[i]];return r}function Ge(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Ye(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Je(e,t,n,i,r,s){if(!ke.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Xe(e,t,n,i,r){st(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Qe(e,t,n,i,r){st(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Ze(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function et(e,t,n,i,r){return t=+t,n>>>=0,r||Ze(e,0,n,4),ge(e,t,n,i,23,4),n+4}function tt(e,t,n,i,r){return t=+t,n>>>=0,r||Ze(e,0,n,8),ge(e,t,n,i,52,8),n+8}ke.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,ke.prototype),i},ke.prototype.readUintLE=ke.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},ke.prototype.readUintBE=ke.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},ke.prototype.readUint8=ke.prototype.readUInt8=function(e,t){return e>>>=0,t||Ye(e,1,this.length),this[e]},ke.prototype.readUint16LE=ke.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ye(e,2,this.length),this[e]|this[e+1]<<8},ke.prototype.readUint16BE=ke.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ye(e,2,this.length),this[e]<<8|this[e+1]},ke.prototype.readUint32LE=ke.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ke.prototype.readUint32BE=ke.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ke.prototype.readBigUInt64LE=gt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),ke.prototype.readBigUInt64BE=gt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),ke.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},ke.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},ke.prototype.readInt8=function(e,t){return e>>>=0,t||Ye(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ke.prototype.readInt16LE=function(e,t){e>>>=0,t||Ye(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ke.prototype.readInt16BE=function(e,t){e>>>=0,t||Ye(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ke.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ke.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ke.prototype.readBigInt64LE=gt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ke.prototype.readBigInt64BE=gt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ke.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),pe(this,e,!0,23,4)},ke.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),pe(this,e,!1,23,4)},ke.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ye(e,8,this.length),pe(this,e,!0,52,8)},ke.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ye(e,8,this.length),pe(this,e,!1,52,8)},ke.prototype.writeUintLE=ke.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},ke.prototype.writeUintBE=ke.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},ke.prototype.writeUint8=ke.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,255,0),this[t]=255&e,t+1},ke.prototype.writeUint16LE=ke.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ke.prototype.writeUint16BE=ke.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ke.prototype.writeUint32LE=ke.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ke.prototype.writeUint32BE=ke.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ke.prototype.writeBigUInt64LE=gt((function(e,t=0){return Xe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ke.prototype.writeBigUInt64BE=gt((function(e,t=0){return Qe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ke.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Je(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},ke.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Je(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},ke.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ke.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ke.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ke.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ke.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ke.prototype.writeBigInt64LE=gt((function(e,t=0){return Xe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ke.prototype.writeBigInt64BE=gt((function(e,t=0){return Qe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ke.prototype.writeFloatLE=function(e,t,n){return et(this,e,t,!0,n)},ke.prototype.writeFloatBE=function(e,t,n){return et(this,e,t,!1,n)},ke.prototype.writeDoubleLE=function(e,t,n){return tt(this,e,t,!0,n)},ke.prototype.writeDoubleBE=function(e,t,n){return tt(this,e,t,!1,n)},ke.prototype.copy=function(e,t,n,i){if(!ke.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},ke.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!ke.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=ke.isBuffer(e)?e:ke.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const nt={};function it(e,t,n){nt[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function rt(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function st(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new nt.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){ot(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||at(t,e.length-(n+1))}(i,r,s)}function ot(e,t){if("number"!=typeof e)throw new nt.ERR_INVALID_ARG_TYPE(t,"number",e)}function at(e,t,n){if(Math.floor(e)!==e)throw ot(e,n),new nt.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new nt.ERR_BUFFER_OUT_OF_BOUNDS;throw new nt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}it("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),it("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),it("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=rt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=rt(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const ct=/[^+/0-9A-Za-z-_]/g;function ut(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function lt(e){return le(function(e){if((e=(e=e.split("=")[0]).trim().replace(ct,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ht(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function dt(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ft(e){return e!=e}const pt=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function gt(e){return"undefined"==typeof BigInt?mt:e}function mt(){throw new Error("BigInt not supported")}var vt=ue;function bt(e){return R.default.isPlainObject(e)||R.default.isArray(e)}function yt(e){return R.default.endsWith(e,"[]")?e.slice(0,-2):e}function _t(e,t,n){return e?e.concat(t).map((function(e,t){return e=yt(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const wt=R.default.toFlatObject(R.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var It=function(e,t,n){if(!R.default.isObject(e))throw new TypeError("target must be an object");t=t||new(fe||FormData);const i=(n=R.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!R.default.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=t)&&R.default.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!R.default.isFunction(r))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(R.default.isDate(e))return e.toISOString();if(!a&&R.default.isBlob(e))throw new de("Blob is not supported. Use a Buffer instead.");return R.default.isArrayBuffer(e)||R.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):vt.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(R.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(R.default.isArray(e)&&function(e){return R.default.isArray(e)&&!e.some(bt)}(e)||R.default.isFileList(e)||R.default.endsWith(n,"[]")&&(a=R.default.toArray(e)))return n=yt(n),a.forEach((function(e,i){!R.default.isUndefined(e)&&null!==e&&t.append(!0===o?_t([n],i,s):null===o?n:n+"[]",u(e))})),!1;return!!bt(e)||(t.append(_t(r,n,s),u(e)),!1)}const h=[],d=Object.assign(wt,{defaultVisitor:l,convertValue:u,isVisitable:bt});if(!R.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!R.default.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),R.default.forEach(n,(function(n,s){!0===(!(R.default.isUndefined(n)||null===n)&&r.call(t,n,R.default.isString(s)?s.trim():s,i,d))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function Et(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ct(e,t){this._pairs=[],e&&It(e,this,t)}const St=Ct.prototype;St.append=function(e,t){this._pairs.push([e,t])},St.toString=function(e){const t=e?function(t){return e.call(this,t,Et)}:Et;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var kt=Ct;function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rt(e,t,n){if(!t)return e;const i=n&&n.encode||Tt,r=n&&n.serialize;let s;if(s=r?r(t,n):R.default.isURLSearchParams(t)?t.toString():new kt(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var At=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){R.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Pt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt="undefined"!=typeof URLSearchParams?URLSearchParams:kt,Ot=FormData;const Lt=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),xt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Dt={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Ot,Blob:Blob},isStandardBrowserEnv:Lt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return It(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return Dt.isNode&&R.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var Ut=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&R.default.isArray(i)?i.length:s,a)return R.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&R.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&R.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(R.default.isFormData(e)&&R.default.isFunction(e.entries)){const n={};return R.default.forEachEntry(e,((e,i)=>{t(function(e){return R.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const Ft={"Content-Type":void 0};const Bt={transitional:Pt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=R.default.isObject(e);r&&R.default.isHTMLForm(e)&&(e=new FormData(e));if(R.default.isFormData(e))return i&&i?JSON.stringify(Ut(e)):e;if(R.default.isArrayBuffer(e)||R.default.isBuffer(e)||R.default.isStream(e)||R.default.isFile(e)||R.default.isBlob(e))return e;if(R.default.isArrayBufferView(e))return e.buffer;if(R.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Mt(e,this.formSerializer).toString();if((s=R.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return It(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(R.default.isString(e))try{return(t||JSON.parse)(e),R.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Bt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&R.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw de.from(e,de.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.default.forEach(["delete","get","head"],(function(e){Bt.headers[e]={}})),R.default.forEach(["post","put","patch"],(function(e){Bt.headers[e]=R.default.merge(Ft)}));var jt=Bt;const qt=R.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var $t=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&qt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Ht=Symbol("internals");function Vt(e){return e&&String(e).trim().toLowerCase()}function Wt(e){return!1===e||null==e?e:R.default.isArray(e)?e.map(Wt):String(e)}function zt(e,t,n,i){return R.default.isFunction(i)?i.call(this,t,n):R.default.isString(t)?R.default.isString(i)?-1!==t.indexOf(i):R.default.isRegExp(i)?i.test(t):void 0:void 0}let Kt=Symbol.iterator,Gt=Symbol.toStringTag;class Yt{set(e,t,n){const i=this;function r(e,t,n){const r=Vt(t);if(!r)throw new Error("header name must be a non-empty string");const s=R.default.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=Wt(e))}const s=(e,t)=>R.default.forEach(e,((e,n)=>r(e,n,t)));return R.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):R.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s($t(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Vt(e)){const n=R.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(R.default.isFunction(t))return t.call(this,e,n);if(R.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Vt(e)){const n=R.default.findKey(this,e);return!(!n||t&&!zt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Vt(e)){const r=R.default.findKey(n,e);!r||t&&!zt(0,n[r],r,t)||(delete n[r],i=!0)}}return R.default.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return R.default.forEach(this,((i,r)=>{const s=R.default.findKey(n,r);if(s)return t[s]=Wt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=Wt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return R.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&R.default.isArray(n)?n.join(", "):n)})),t}[Kt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Gt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ht]=this[Ht]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Vt(e);t[i]||(!function(e,t){const n=R.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return R.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),R.default.freezeMethods(Yt.prototype),R.default.freezeMethods(Yt);var Jt=Yt;function Xt(e,t){const n=this||jt,i=t||n,r=Jt.from(i.headers);let s=i.data;return R.default.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Qt(e){return!(!e||!e.__CANCEL__)}function Zt(e,t,n){de.call(this,null==e?"canceled":e,de.ERR_CANCELED,t,n),this.name="CanceledError"}R.default.inherits(Zt,de,{__CANCEL__:!0});var en=Zt;function tn(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var nn=Dt.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),R.default.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),R.default.isString(i)&&o.push("path="+i),R.default.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function rn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function sn(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?rn(e,t):t}var on=Dt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=R.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var cn=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=i[o];r||(r=c),n[s]=a,i[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function un(e,t){let n=0;const i=cn(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}var ln="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Jt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}R.default.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const u=sn(e.baseURL,e.url);function l(){if(!c)return;const i=Jt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());tn((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Rt(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new de("Request aborted",de.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new de("Network Error",de.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Pt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new de(t,i.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,c)),c=null},Dt.isStandardBrowserEnv){const t=(e.withCredentials||on(u))&&e.xsrfCookieName&&nn.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&R.default.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),R.default.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",un(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",un(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new en(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=an(u);h&&-1===Dt.protocols.indexOf(h)?n(new de("Unsupported protocol "+h+":",de.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const hn={http:null,xhr:ln};R.default.forEach(hn,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var dn={getAdapter:e=>{e=R.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=R.default.isString(n)?hn[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new de(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(R.default.hasOwnProp(hn,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!R.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:hn};function fn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new en(null,e)}function pn(e){fn(e),e.headers=Jt.from(e.headers),e.data=Xt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return dn.getAdapter(e.adapter||jt.adapter)(e).then((function(t){return fn(e),t.data=Xt.call(e,e.transformResponse,t),t.headers=Jt.from(t.headers),t}),(function(t){return Qt(t)||(fn(e),t&&t.response&&(t.response.data=Xt.call(e,e.transformResponse,t.response),t.response.headers=Jt.from(t.response.headers))),Promise.reject(t)}))}const gn=e=>e instanceof Jt?e.toJSON():e;function mn(e,t){t=t||{};const n={};function i(e,t,n){return R.default.isPlainObject(e)&&R.default.isPlainObject(t)?R.default.merge.call({caseless:n},e,t):R.default.isPlainObject(t)?R.default.merge({},t):R.default.isArray(t)?t.slice():t}function r(e,t,n){return R.default.isUndefined(t)?R.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!R.default.isUndefined(t))return i(void 0,t)}function o(e,t){return R.default.isUndefined(t)?R.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(gn(e),gn(t),!0)};return R.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);R.default.isUndefined(o)&&s!==a||(n[i]=o)})),n}const vn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{vn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const bn={};vn.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new de(i(r," has been removed"+(t?" in "+t:"")),de.ERR_DEPRECATED);return t&&!bn[r]&&(bn[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var yn={assertOptions:function(e,t,n){if("object"!=typeof e)throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new de("option "+s+" must be "+n,de.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new de("Unknown option "+s,de.ERR_BAD_OPTION)}},validators:vn};const _n=yn.validators;class wn{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=mn(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&yn.assertOptions(n,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),void 0!==i&&yn.assertOptions(i,{encode:_n.function,serialize:_n.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&R.default.merge(r.common,r[t.method]),s&&R.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Jt.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[pn.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);h<l;)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;for(h=0;h<l;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=pn.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(e){return Rt(sn((e=mn(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new At,response:new At}}}R.default.forEach(["delete","get","head","options"],(function(e){wn.prototype[e]=function(t,n){return this.request(mn(n||{},{method:e,url:t,data:(n||{}).data}))}})),R.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(mn(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}wn.prototype[e]=t(),wn.prototype[e+"Form"]=t(!0)}));var In=wn;class En{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new En((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new en(e,i,r),t(n.reason))}))}}var Cn=En;const Sn=function e(t){const n=new In(t),i=A(In.prototype.request,n);return R.default.extend(i,In.prototype,n,{allOwnKeys:!0}),R.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(mn(t,n))},i}(jt);Sn.Axios=In,Sn.CanceledError=en,Sn.CancelToken=Cn,Sn.isCancel=Qt,Sn.VERSION="1.2.1",Sn.toFormData=It,Sn.AxiosError=de,Sn.Cancel=Sn.CanceledError,Sn.all=function(e){return Promise.all(e)},Sn.spread=function(e){return function(t){return e.apply(null,t)}},Sn.isAxiosError=function(e){return R.default.isObject(e)&&!0===e.isAxiosError},Sn.mergeConfig=mn,Sn.AxiosHeaders=Jt,Sn.formToJSON=e=>Ut(R.default.isHTMLForm(e)?new FormData(e):e),Sn.default=Sn;var kn=Sn;const{Axios:Tn,AxiosError:Rn,CanceledError:An,isCancel:Pn,CancelToken:Nn,VERSION:On,all:Ln,Cancel:xn,isAxiosError:Dn,spread:Mn,toFormData:Un,AxiosHeaders:Fn,formToJSON:Bn,mergeConfig:jn}=kn;kn.defaults.baseURL="https://api.themoviedb.org/3/";class qn{async getTrendingFilms(){return(await kn.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getTrendingFilmsByPage(e){return await kn.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmBySearch(){return(await kn.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getFilmSearchByPage(e){return await kn.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmById(e){return await kn.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>e.data))}async getFilmMassiveById(e){if(0===e.length)return[];let t=e.map((e=>this.getFilmById(e)));return t=await Promise.allSettled(t),t=t.filter((({status:e})=>"fulfilled"===e)).map((({value:e})=>e)),t}async getGenres(){return(await kn.get(`/genre/movie/list?api_key=${this.KEY}&language=en-US`).then((e=>data))).genres}async getTrailer(e){const t=(await kn.get(`/movie/${e}/videos?api_key=${this.KEY}&language=en-US`).then((e=>e.data))).results.filter((e=>"Official Trailer"===e.name));return console.log(t[0]),t[0]}async getFilmById(e){return await kn.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>e.data))}constructor(){this.KEY="c23d7755b502540a74ef819e02a6a593",this.page=1,this.query="",this.id=null}}const $n=new qn;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.default=function(e,t){var n=Vn.default(e,t,"get");return Wn.default(e,n)};var Vn=zn(s("fExtF")),Wn=zn(s("iaRLo"));function zn(e){return e&&e.__esModule?e:{default:e}}var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0}),Kn.default=function(e,t,n){Yn.default(e,t),t.set(e,n)};var Gn,Yn=(Gn=s("7K24o"))&&Gn.__esModule?Gn:{default:Gn};var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.default=function(e,t,n){var i=Xn.default(e,t,"set");return Qn.default(e,i,n),n};var Xn=Zn(s("fExtF")),Qn=Zn(s("3LGG3"));function Zn(e){return e&&e.__esModule?e:{default:e}}var ei={};t(ei,"_DEFAULT_ENTRY_NAME",(function(){return Vr})),t(ei,"_apps",(function(){return zr})),t(ei,"_components",(function(){return Kr})),t(ei,"_addComponent",(function(){return Gr})),t(ei,"_addOrOverwriteComponent",(function(){return Yr})),t(ei,"_registerComponent",(function(){return Jr})),t(ei,"_getProvider",(function(){return Xr})),t(ei,"_removeServiceInstance",(function(){return Qr})),t(ei,"_clearComponents",(function(){return Zr})),t(ei,"SDK_VERSION",(function(){return ns})),t(ei,"initializeApp",(function(){return is})),t(ei,"getApp",(function(){return rs})),t(ei,"getApps",(function(){return ss})),t(ei,"deleteApp",(function(){return os})),t(ei,"registerVersion",(function(){return as})),t(ei,"onLog",(function(){return cs})),t(ei,"setLogLevel",(function(){return us})),t(ei,"FirebaseError",(function(){return $i}));var ti,ni,ii,ri=ti={};function si(){throw new Error("setTimeout has not been defined")}function oi(){throw new Error("clearTimeout has not been defined")}function ai(e){if(ni===setTimeout)return setTimeout(e,0);if((ni===si||!ni)&&setTimeout)return ni=setTimeout,setTimeout(e,0);try{return ni(e,0)}catch(t){try{return ni.call(null,e,0)}catch(t){return ni.call(this,e,0)}}}!function(){try{ni="function"==typeof setTimeout?setTimeout:si}catch(e){ni=si}try{ii="function"==typeof clearTimeout?clearTimeout:oi}catch(e){ii=oi}}();var ci,ui=[],li=!1,hi=-1;function di(){li&&ci&&(li=!1,ci.length?ui=ci.concat(ui):hi=-1,ui.length&&fi())}function fi(){if(!li){var e=ai(di);li=!0;for(var t=ui.length;t;){for(ci=ui,ui=[];++hi<t;)ci&&ci[hi].run();hi=-1,t=ui.length}ci=null,li=!1,function(e){if(ii===clearTimeout)return clearTimeout(e);if((ii===oi||!ii)&&clearTimeout)return ii=clearTimeout,clearTimeout(e);try{ii(e)}catch(t){try{return ii.call(null,e)}catch(t){return ii.call(this,e)}}}(e)}}function pi(e,t){this.fun=e,this.array=t}function gi(){}ri.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ui.push(new pi(e,t)),1!==ui.length||li||ai(fi)},pi.prototype.run=function(){this.fun.apply(null,this.array)},ri.title="browser",ri.browser=!0,ri.env={},ri.argv=[],ri.version="",ri.versions={},ri.on=gi,ri.addListener=gi,ri.once=gi,ri.off=gi,ri.removeListener=gi,ri.removeAllListeners=gi,ri.emit=gi,ri.prependListener=gi,ri.prependOnceListener=gi,ri.listeners=function(e){return[]},ri.binding=function(e){throw new Error("process.binding is not supported")},ri.cwd=function(){return"/"},ri.chdir=function(e){throw new Error("process.chdir is not supported")},ri.umask=function(){return 0};
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
const mi=!1,vi=!1,bi="${JSCORE_VERSION}",yi=function(e,t){if(!e)throw _i(t)},_i=function(e){return new Error("Firebase Database ("+bi+") INTERNAL ASSERT FAILED: "+e)},wi=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Ii={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=r>>2,l=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(wi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ei=function(e){const t=wi(e);return Ii.encodeByteArray(t,!0)},Ci=function(e){return Ei(e).replace(/\./g,"")},Si=function(e){try{return Ii.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function ki(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ki(e[n],t[n]));return e}
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
function Ti(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ri(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ti())}function Ai(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function Pi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ni(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Oi(){const e=Ti();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Li(){return!0===mi||!0===vi}function xi(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
const Di=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Mi=()=>{try{return Di()||(()=>{if(void 0===ti||void 0===ti.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Si(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Ui=e=>{var t,n;return null===(n=null===(t=Mi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Fi=e=>{const t=Ui(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Bi=e=>{var t;return null===(t=Mi())||void 0===t?void 0:t[`_${e}`]};
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
class ji{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function qi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ci(JSON.stringify({alg:"none",type:"JWT"})),Ci(JSON.stringify(s)),""].join(".")}
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
 */class $i extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Vi,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new $i(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Vi=/\{\$([^}]+)}/g;
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
 */function Wi(e){return JSON.parse(e)}function zi(e){return JSON.stringify(e)}
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
 */const Ki=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Wi(Si(s[0])||""),n=Wi(Si(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Gi=function(e){const t=Ki(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Yi=function(e){const t=Ki(e).claims;return"object"==typeof t&&!0===t.admin};
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
function Ji(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Xi(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Qi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zi(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function er(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(tr(n)&&tr(s)){if(!er(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function tr(e){return null!==e&&"object"==typeof e}
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
function nr(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ir(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function rr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class sr{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+u+r+n[e]&4294967295;u=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function or(e,t){const n=new ar(e,t);return n.subscribe.bind(n)}class ar{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=cr),void 0===i.error&&(i.error=cr),void 0===i.complete&&(i.complete=cr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function cr(){}
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
 */function ur(e,t){return`${e} failed: ${t} argument `}
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
const lr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,yi(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},hr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function dr(e){return e&&e._delegate?e._delegate:e}class fr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class pr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ji;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class gr{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const mr=[];var vr,br;(br=vr||(vr={}))[br.DEBUG=0]="DEBUG",br[br.VERBOSE=1]="VERBOSE",br[br.INFO=2]="INFO",br[br.WARN=3]="WARN",br[br.ERROR=4]="ERROR",br[br.SILENT=5]="SILENT";const yr={debug:vr.DEBUG,verbose:vr.VERBOSE,info:vr.INFO,warn:vr.WARN,error:vr.ERROR,silent:vr.SILENT},_r=vr.INFO,wr={[vr.DEBUG]:"log",[vr.VERBOSE]:"log",[vr.INFO]:"info",[vr.WARN]:"warn",[vr.ERROR]:"error"},Ir=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=wr[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Er{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in vr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?yr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,vr.DEBUG,...e),this._logHandler(this,vr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,vr.VERBOSE,...e),this._logHandler(this,vr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,vr.INFO,...e),this._logHandler(this,vr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,vr.WARN,...e),this._logHandler(this,vr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,vr.ERROR,...e),this._logHandler(this,vr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=_r,this._logHandler=Ir,this._userLogHandler=null,mr.push(this)}}function Cr(e,t){for(const n of mr){let i=null;t&&t.level&&(i=yr[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:vr[n].toLowerCase(),message:s,args:r,type:t.name})}}}let Sr,kr;const Tr=new WeakMap,Rr=new WeakMap,Ar=new WeakMap,Pr=new WeakMap,Nr=new WeakMap;let Or={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Rr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ar.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Lr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(kr||(kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Mr(this),t),Dr(Tr.get(this))}:function(...t){return Dr(e.apply(Mr(this),t))}:function(t,...n){const i=e.call(Mr(this),t,...n);return Ar.set(i,t.sort?t.sort():[t]),Dr(i)}}function xr(e){return"function"==typeof e?Lr(e):(e instanceof IDBTransaction&&function(e){if(Rr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Rr.set(e,t)}(e),t=e,(Sr||(Sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Or):e);var t}function Dr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Dr(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Tr.set(t,e)})).catch((()=>{})),Nr.set(t,e),t}(e);if(Pr.has(e))return Pr.get(e);const t=xr(e);return t!==e&&(Pr.set(e,t),Nr.set(t,e)),t}const Mr=e=>Nr.get(e);function Ur(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Dr(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Dr(o.result),e.oldVersion,e.newVersion,Dr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Fr=["get","getKey","getAll","getAllKeys","count"],Br=["put","add","delete","clear"],jr=new Map;function qr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(jr.get(t))return jr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Br.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Fr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return jr.set(t,s),s}Or=(e=>({...e,get:(t,n,i)=>qr(t,n)||e.get(t,n,i),has:(t,n)=>!!qr(t,n)||e.has(t,n)}))(Or);
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
class $r{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Hr=new Er("@firebase/app"),Vr="[DEFAULT]",Wr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},zr=new Map,Kr=new Map;function Gr(e,t){try{e.container.addComponent(t)}catch(n){Hr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yr(e,t){e.container.addOrOverwriteComponent(t)}function Jr(e){const t=e.name;if(Kr.has(t))return Hr.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,e);for(const t of zr.values())Gr(t,e);return!0}function Xr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Qr(e,t,n=Vr){Xr(e,t).clearInstance(n)}function Zr(){Kr.clear()}
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
 */const es=new Hi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ts{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new fr("app",(()=>this),"PUBLIC"))}}
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
 */const ns="9.15.0";function is(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw es.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Mi())||void 0===s?void 0:s.config),!n)throw es.create("no-options");const o=zr.get(r);if(o){if(er(n,o.options)&&er(i,o.config))return o;throw es.create("duplicate-app",{appName:r})}const a=new gr(r);for(const e of Kr.values())a.addComponent(e);const c=new ts(n,i,a);return zr.set(r,c),c}function rs(e=Vr){const t=zr.get(e);if(!t&&e===Vr)return is();if(!t)throw es.create("no-app",{appName:e});return t}function ss(){return Array.from(zr.values())}async function os(e){const t=e.name;zr.has(t)&&(zr.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function as(e,t,n){var i;let r=null!==(i=Wr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Hr.warn(e.join(" "))}Jr(new fr(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function cs(e,t){if(null!==e&&"function"!=typeof e)throw es.create("invalid-log-argument");Cr(e,t)}function us(e){var t;t=e,mr.forEach((e=>{e.setLogLevel(t)}))}
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
 */let ls=null;function hs(){return ls||(ls=Ur("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw es.create("idb-open",{originalErrorMessage:e.message})}))),ls}async function ds(e,t){try{const n=(await hs()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,fs(e)),n.done}catch(e){if(e instanceof $i)Hr.warn(e.message);else{const t=es.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Hr.warn(t.message)}}}function fs(e){return`${e.name}!${e.options.appId}`}
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
 */class ps{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=gs();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=gs(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),vs(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vs(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ms(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function gs(){return(new Date).toISOString().substring(0,10)}class ms{async runIndexedDBEnvironmentCheck(){return!!xi()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await hs()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(fs(e))}catch(e){if(e instanceof $i)Hr.warn(e.message);else{const t=es.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Hr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ds(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ds(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function vs(e){return Ci(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var bs;bs="",Jr(new fr("platform-logger",(e=>new $r(e)),"PRIVATE")),Jr(new fr("heartbeat",(e=>new ps(e)),"PRIVATE")),as("@firebase/app","0.9.0",bs),as("@firebase/app","0.9.0","esm2017"),as("fire-js","");
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
 */let ys="";
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
class _s{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),zi(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Wi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class ws{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ji(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Is=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _s(t)}}catch(e){}return new ws},Es=Is("localStorage"),Cs=Is("sessionStorage"),Ss=new Er("@firebase/database"),ks=function(){let e=1;return function(){return e++}}(),Ts=function(e){const t=lr(e),n=new sr;n.update(t);const i=n.digest();return Ii.encodeByteArray(i)},Rs=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Rs.apply(null,i):t+="object"==typeof i?zi(i):i,t+=" "}return t};let As=null,Ps=!0;const Ns=function(e,t){yi(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ss.logLevel=vr.VERBOSE,As=Ss.log.bind(Ss),t&&Cs.set("logging_enabled",!0)):"function"==typeof e?As=e:(As=null,Cs.remove("logging_enabled"))},Os=function(...e){if(!0===Ps&&(Ps=!1,null===As&&!0===Cs.get("logging_enabled")&&Ns(!0)),As){const t=Rs.apply(null,e);As(t)}},Ls=function(e){return function(...t){Os(e,...t)}},xs=function(...e){const t="FIREBASE INTERNAL ERROR: "+Rs(...e);Ss.error(t)},Ds=function(...e){const t=`FIREBASE FATAL ERROR: ${Rs(...e)}`;throw Ss.error(t),new Error(t)},Ms=function(...e){const t="FIREBASE WARNING: "+Rs(...e);Ss.warn(t)},Us=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Fs=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=zs(e),i=zs(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Bs=function(e,t){return e===t?0:e<t?-1:1},js=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+zi(t))},qs=function(e){if("object"!=typeof e||null===e)return zi(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=zi(t[i]),n+=":",n+=qs(e[t[i]]);return n+="}",n},$s=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Hs(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Vs=function(e){yi(!Us(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let u="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const Ws=new RegExp("^-?(0*)\\d{1,10}$"),zs=function(e){if(Ws.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ks=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ms("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Gs=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Ys{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ms(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class Js{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Os("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ms(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Xs{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Xs.OWNER="owner";
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
const Qs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Zs{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Es.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Es.get("host:"+e)||this._host}}function eo(e,t,n){let i;if(yi("string"==typeof t,"typeof type must == string"),yi("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Hs(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class to{incrementCounter(e,t=1){Ji(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ki(void 0,this.counters_)}constructor(){this.counters_={}}}
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
 */const no={},io={};function ro(e){const t=e.toString();return no[t]||(no[t]=new to),no[t]}
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
class so{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Ks((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class oo{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new so(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Li()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ao(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Qs.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oo.forceAllow_=!0}static forceDisallow(){oo.forceDisallow_=!0}static isAvailable(){return!Li()&&(!!oo.forceAllow_||!(oo.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=zi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ei(t),i=$s(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Li())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=zi(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(e),this.stats_=ro(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),eo(t,"long_polling",e))}}class ao{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Os("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Li()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Os("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Li())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ks(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ao.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Os("frame writing exception"),e.stack&&Os(e.stack),Os(e)}}}}
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
 */let co=null;"undefined"!=typeof MozWebSocket?co=MozWebSocket:"undefined"!=typeof WebSocket&&(co=WebSocket);class uo{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!Li()&&"undefined"!=typeof location&&location.hostname&&Qs.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),eo(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Es.set("previous_websocket_failure",!0);try{let e;if(Li()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ys}/${ti.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new co(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){uo.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==co&&!uo.forceDisallow_}static previouslyFailed(){return Es.isInMemoryStorage||!0===Es.get("previous_websocket_failure")}markConnectionHealthy(){Es.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Wi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(yi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=zi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=$s(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=ro(t),this.connURL=uo.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}uo.responsesRequiredToBeHealthy=2,uo.healthyTimeout=3e4;
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
class lo{static get ALL_TRANSPORTS(){return[oo,uo]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=uo&&uo.isAvailable();let n=t&&!uo.previouslyFailed();if(e.webSocketOnly&&(t||Ms("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[uo];else{const e=this.transports_=[];for(const t of lo.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}lo.globalTransportInitialized_=!1;class ho{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gs((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=js("t",e),n=js("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=js("t",e),n=js("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=js("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?xs("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ms("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Gs((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gs((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Es.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new lo(t),this.log_("Connection created"),this.start_()}}
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
 */class fo{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class po{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){yi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},yi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class go extends po{static getInstance(){return new go}getInitialEvent(e){return yi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ri()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class mo{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function vo(){return new mo("")}function bo(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function yo(e){return e.pieces_.length-e.pieceNum_}function _o(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new mo(e.pieces_,t)}function wo(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Io(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Eo(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new mo(t,0)}function Co(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof mo)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new mo(n,0)}function So(e){return e.pieceNum_>=e.pieces_.length}function ko(e,t){const n=bo(e),i=bo(t);if(null===n)return t;if(n===i)return ko(_o(e),_o(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function To(e,t){const n=Io(e,0),i=Io(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Fs(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Ro(e,t){if(yo(e)!==yo(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ao(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(yo(e)>yo(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Po{constructor(e,t){this.errorPrefix_=t,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=hr(this.parts_[e]);No(this)}}function No(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Oo(e))}function Oo(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Lo extends po{static getInstance(){return new Lo}getInitialEvent(e){return yi("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class xo extends fo{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(zi(r)),yi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new ji,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),yi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),yi(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;xo.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Ji(e,"w")){const n=Xi(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ms(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Yi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Gi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),yi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+zi(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):xs("Unrecognized action received from server: "+zi(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){yi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xo.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){yi(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?Os("getToken() completed but was canceled"):(Os("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new ho(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ms(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Ms(e),a())}}}interrupt(e){Os("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Os("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qi(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>qs(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new mo(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Os("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Os("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Li()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ys.replace(/\./g,"-")]=1,Ri()?e["framework.cordova"]=1:Ni()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=go.getInstance().currentlyOnline();return Qi(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=xo.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Li())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lo.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&go.getInstance().on("online",this.onOnline_,this)}}xo.nextPersistentConnectionId_=0,xo.nextConnectionId_=0;
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
class Do{static Wrap(e,t){return new Do(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class Mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Do("[MIN_NAME]",e),i=new Do("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Do.MIN}}
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
 */let Uo;class Fo extends Mo{static get __EMPTY_NODE(){return Uo}static set __EMPTY_NODE(e){Uo=e}compare(e,t){return Fs(e.name,t.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Do.MIN}maxPost(){return new Do("[MAX_NAME]",Uo)}makePost(e,t){return yi("string"==typeof e,"KeyIndex indexValue must always be a string."),new Do(e,Uo)}toString(){return".key"}}const Bo=new Fo;
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
 */class jo{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class qo{copy(e,t,n,i,r){return new qo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $o.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $o.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:qo.RED,this.left=null!=i?i:$o.EMPTY_NODE,this.right=null!=r?r:$o.EMPTY_NODE}}qo.RED=!0,qo.BLACK=!1;class $o{insert(e,t){return new $o(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qo.BLACK,null,null))}remove(e){return new $o(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jo(this.root_,null,this.comparator_,!0,e)}constructor(e,t=$o.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function Ho(e,t){return Fs(e.name,t.name)}function Vo(e,t){return Fs(e,t)}
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
 */let Wo;$o.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new qo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const zo=function(e){return"number"==typeof e?"number:"+Vs(e):"string:"+e},Ko=function(e){if(e.isLeafNode()){const t=e.val();yi("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ji(t,".sv"),"Priority must be a string or number.")}else yi(e===Wo||e.isEmpty(),"priority of unexpected type.");yi(e===Wo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Go,Yo,Jo;class Xo{static set __childrenNodeConstructor(e){Go=e}static get __childrenNodeConstructor(){return Go}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xo(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xo.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return So(e)?this:".priority"===bo(e)?this.priorityNode_:Xo.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xo.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=bo(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(yi(".priority"!==n||1===yo(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xo.__childrenNodeConstructor.EMPTY_NODE.updateChild(_o(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Vs(this.value_):this.value_,this.lazyHash_=Ts(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xo.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xo.__childrenNodeConstructor?-1:(yi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xo.VALUE_TYPE_ORDER.indexOf(t),r=Xo.VALUE_TYPE_ORDER.indexOf(n);return yi(i>=0,"Unknown leaf type: "+t),yi(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Xo.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,yi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ko(this.priorityNode_)}}Xo.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qo=new class extends Mo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Fs(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Do.MIN}maxPost(){return new Do("[MAX_NAME]",new Xo("[PRIORITY-POST]",Jo))}makePost(e,t){const n=Yo(e);return new Do(t,new Xo("[PRIORITY-POST]",n))}toString(){return".priority"}},Zo=Math.log(2);
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
 */class ea{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Zo,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const ta=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new qo(a,o.node,qo.BLACK,null,null);{const c=parseInt(s/2,10)+t,u=r(t,c),l=r(c+1,i);return o=e[c],a=n?n(o):o,new qo(a,o.node,qo.BLACK,u,l)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const u=r(s+1,a),l=e[s],h=n?n(l):l;c(new qo(h,l.node,i,null,u))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,qo.BLACK):(a(i,qo.BLACK),a(i,qo.RED))}return s}(new ea(e.length));return new $o(i||t,s)};
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
 */let na;const ia={};class ra{static get Default(){return yi(ia&&Qo,"ChildrenNode.ts has not been loaded"),na=na||new ra({".priority":ia},{".priority":Qo}),na}get(e){const t=Xi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $o?t:null}hasIndex(e){return Ji(this.indexSet_,e.toString())}addIndex(e,t){yi(e!==Bo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Do.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?ta(n,e.getCompare()):ia;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=s,new ra(u,c)}addToIndexes(e,t){const n=Zi(this.indexes_,((n,i)=>{const r=Xi(this.indexSet_,i);if(yi(r,"Missing index implementation for "+i),n===ia){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Do.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ta(n,r.getCompare())}return ia}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Do(e.name,i))),r.insert(e,e.node)}}));return new ra(n,this.indexSet_)}removeFromIndexes(e,t){const n=Zi(this.indexes_,(n=>{if(n===ia)return n;{const i=t.get(e.name);return i?n.remove(new Do(e.name,i)):n}}));return new ra(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let sa;class oa{static get EMPTY_NODE(){return sa||(sa=new oa(new $o(Vo),null,ra.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sa}updatePriority(e){return this.children_.isEmpty()?this:new oa(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?sa:t}}getChild(e){const t=bo(e);return null===t?this:this.getImmediateChild(t).getChild(_o(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(yi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Do(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?sa:this.priorityNode_;return new oa(i,s,r)}}updateChild(e,t){const n=bo(e);if(null===n)return t;{yi(".priority"!==bo(e)||1===yo(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_o(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Qo,((s,o)=>{t[s]=o.val(e),n++,r&&oa.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+zo(this.getPriority().val())+":"),this.forEachChild(Qo,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ts(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Do(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Do(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Do(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Do.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Do.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===Bo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new oa(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qo),n=t.getIterator(Qo);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Bo?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ko(this.priorityNode_),this.children_.isEmpty()&&yi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}oa.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const aa=new class extends oa{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oa.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new $o(Vo),oa.EMPTY_NODE,ra.Default)}};Object.defineProperties(Do,{MIN:{value:new Do("[MIN_NAME]",oa.EMPTY_NODE)},MAX:{value:new Do("[MAX_NAME]",aa)}}),Fo.__EMPTY_NODE=oa.EMPTY_NODE,Xo.__childrenNodeConstructor=oa,Wo=aa,function(e){Jo=e}(aa);function ca(e,t=null){if(null===e)return oa.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),yi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xo(e,ca(t))}if(e instanceof Array){let n=oa.EMPTY_NODE;return Hs(e,((t,i)=>{if(Ji(e,t)&&"."!==t.substring(0,1)){const e=ca(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ca(t))}{const n=[];let i=!1;if(Hs(e,((e,t)=>{if("."!==e.substring(0,1)){const r=ca(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Do(e,r)))}})),0===n.length)return oa.EMPTY_NODE;const r=ta(n,Ho,(e=>e.name),Vo);if(i){const e=ta(n,Qo.getCompare());return new oa(r,ca(t),new ra({".priority":e},{".priority":Qo}))}return new oa(r,ca(t),ra.Default)}}!function(e){Yo=e}(ca);
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
class ua extends Mo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Fs(e.name,t.name):r}makePost(e,t){const n=ca(e),i=oa.EMPTY_NODE.updateChild(this.indexPath_,n);return new Do(t,i)}maxPost(){const e=oa.EMPTY_NODE.updateChild(this.indexPath_,aa);return new Do("[MAX_NAME]",e)}toString(){return Io(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,yi(!So(e)&&".priority"!==bo(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const la=new class extends Mo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Fs(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Do.MIN}maxPost(){return Do.MAX}makePost(e,t){const n=ca(e);return new Do(t,n)}toString(){return".value"}};
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
 */function ha(e){return{type:"value",snapshotNode:e}}function da(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function fa(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function pa(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class ga{updateChild(e,t,n,i,r,s){yi(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(fa(t,o)):yi(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(da(t,n)):s.trackChildChange(pa(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qo,((e,i)=>{t.hasChild(e)||n.trackChildChange(fa(e,i))})),t.isLeafNode()||t.forEachChild(Qo,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(pa(t,i,r))}else n.trackChildChange(da(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?oa.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
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
 */class ma{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Do(t,n))||(n=oa.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=oa.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(oa.EMPTY_NODE);const r=this;return t.forEachChild(Qo,((e,t)=>{r.matches(new Do(e,t))||(i=i.updateImmediateChild(e,oa.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new ga(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ma.getStartPost_(e),this.endPost_=ma.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class va{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Do(t,n))||(n=oa.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=oa.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=oa.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(oa.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,oa.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;yi(o.numChildren()===this.limit_,"");const a=new Do(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let l=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=l&&(l.name===t||o.hasChild(l.name));)l=i.getChildAfterChild(this.index_,l,this.reverse_);const h=null==l?1:s(l,a);if(u&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(pa(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(fa(t,e));const n=o.updateImmediateChild(t,oa.EMPTY_NODE);return null!=l&&this.rangedFilter_.matches(l)?(null!=r&&r.trackChildChange(da(l.name,l.node)),n.updateImmediateChild(l.name,l.node)):n}}return n.isEmpty()?e:u&&s(c,a)>=0?(null!=r&&(r.trackChildChange(fa(c.name,c.node)),r.trackChildChange(da(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,oa.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ma(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class ba{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return yi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return yi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return yi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return yi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return yi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qo}copy(){const e=new ba;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qo}}function ya(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Qo?n="$priority":e.index_===la?n="$value":e.index_===Bo?n="$key":(yi(e.index_ instanceof ua,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=zi(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=zi(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+zi(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=zi(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+zi(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function _a(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qo&&(t.i=e.index_.toString()),t}
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
 */class wa extends fo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(yi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=wa.getListenId_(e,n),o={};this.listens_[s]=o;const a=ya(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Xi(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=wa.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ya(e._queryParams),n=e._path.toString(),i=new ji;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+nr(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Wi(o.responseText)}catch(e){Ms("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ms("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ls("p:rest:"),this.listens_={}}}
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
 */class Ia{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=oa.EMPTY_NODE}}
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
 */function Ea(){return{value:null,children:new Map}}function Ca(e,t,n){if(So(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=bo(t);e.children.has(i)||e.children.set(i,Ea());Ca(e.children.get(i),t=_o(t),n)}}function Sa(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{Sa(i,new mo(t.toString()+"/"+e),n)}))}class ka{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Hs(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class Ta{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Hs(e,((e,i)=>{i>0&&Ji(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Gs(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ka(e);const n=1e4+2e4*Math.random();Gs(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Ra,Aa;function Pa(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Aa=Ra||(Ra={}))[Aa.OVERWRITE=0]="OVERWRITE",Aa[Aa.MERGE=1]="MERGE",Aa[Aa.ACK_USER_WRITE=2]="ACK_USER_WRITE",Aa[Aa.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Na{operationForChild(e){if(So(this.path)){if(null!=this.affectedTree.value)return yi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new mo(e));return new Na(vo(),t,this.revert)}}return yi(bo(this.path)===e,"operationForChild called for unrelated child."),new Na(_o(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ra.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
 */class Oa{operationForChild(e){return So(this.path)?new Oa(this.source,vo()):new Oa(this.source,_o(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Ra.LISTEN_COMPLETE}}
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
 */class La{operationForChild(e){return So(this.path)?new La(this.source,vo(),this.snap.getImmediateChild(e)):new La(this.source,_o(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ra.OVERWRITE}}
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
 */class xa{operationForChild(e){if(So(this.path)){const t=this.children.subtree(new mo(e));return t.isEmpty()?null:t.value?new La(this.source,vo(),t.value):new xa(this.source,vo(),t)}return yi(bo(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xa(this.source,_o(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ra.MERGE}}
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
 */class Da{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(So(e))return this.isFullyInitialized()&&!this.filtered_;const t=bo(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */class Ma{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ua(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw _i("Should only compare child_ events.");const i=new Do(t.childName,t.snapshotNode),r=new Do(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Fa(e,t){return{eventCache:e,serverCache:t}}function Ba(e,t,n,i){return Fa(new Da(t,n,i),e.serverCache)}function ja(e,t,n,i){return Fa(e.eventCache,new Da(t,n,i))}function qa(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function $a(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Ha;class Va{static fromObject(e){let t=new Va(null);return Hs(e,((e,n)=>{t=t.set(new mo(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:vo(),value:this.value};if(So(e))return null;{const n=bo(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(_o(e),t);if(null!=r){return{path:Co(new mo(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(So(e))return this;{const t=bo(e),n=this.children.get(t);return null!==n?n.subtree(_o(e)):new Va(null)}}set(e,t){if(So(e))return new Va(t,this.children);{const n=bo(e),i=(this.children.get(n)||new Va(null)).set(_o(e),t),r=this.children.insert(n,i);return new Va(this.value,r)}}remove(e){if(So(e))return this.children.isEmpty()?new Va(null):new Va(null,this.children);{const t=bo(e),n=this.children.get(t);if(n){const i=n.remove(_o(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Va(null):new Va(this.value,r)}return this}}get(e){if(So(e))return this.value;{const t=bo(e),n=this.children.get(t);return n?n.get(_o(e)):null}}setTree(e,t){if(So(e))return t;{const n=bo(e),i=(this.children.get(n)||new Va(null)).setTree(_o(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Va(this.value,r)}}fold(e){return this.fold_(vo(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Co(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,vo(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(So(e))return null;{const i=bo(e),r=this.children.get(i);return r?r.findOnPath_(_o(e),Co(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,vo(),t)}foreachOnPath_(e,t,n){if(So(e))return this;{this.value&&n(t,this.value);const i=bo(e),r=this.children.get(i);return r?r.foreachOnPath_(_o(e),Co(t,i),n):new Va(null)}}foreach(e){this.foreach_(vo(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Co(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ha||(Ha=new $o(Bs)),Ha))()){this.value=e,this.children=t}}
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
 */class Wa{static empty(){return new Wa(new Va(null))}constructor(e){this.writeTree_=e}}function za(e,t,n){if(So(t))return new Wa(new Va(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=ko(r,t);return s=s.updateChild(o,n),new Wa(e.writeTree_.set(r,s))}{const i=new Va(n),r=e.writeTree_.setTree(t,i);return new Wa(r)}}}function Ka(e,t,n){let i=e;return Hs(n,((e,n)=>{i=za(i,Co(t,e),n)})),i}function Ga(e,t){if(So(t))return Wa.empty();{const n=e.writeTree_.setTree(t,new Va(null));return new Wa(n)}}function Ya(e,t){return null!=Ja(e,t)}function Ja(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ko(n.path,t)):null}function Xa(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qo,((e,n)=>{t.push(new Do(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Do(e,n.value))})),t}function Qa(e,t){if(So(t))return e;{const n=Ja(e,t);return new Wa(null!=n?new Va(n):e.writeTree_.subtree(t))}}function Za(e){return e.writeTree_.isEmpty()}function ec(e,t){return tc(vo(),e.writeTree_,t)}function tc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(yi(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=tc(Co(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Co(e,".priority"),i)),n}}
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
 */function nc(e,t){return gc(t,e)}function ic(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));yi(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&rc(t,i.path)?r=!1:Ao(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=oc(e.allWrites,sc,vo()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ga(e.visibleWrites,i.path);else{Hs(i.children,(t=>{e.visibleWrites=Ga(e.visibleWrites,Co(i.path,t))}))}return!0}return!1}function rc(e,t){if(e.snap)return Ao(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ao(Co(e.path,n),t))return!0;return!1}function sc(e){return e.visible}function oc(e,t,n){let i=Wa.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Ao(n,e)?(t=ko(n,e),i=za(i,t,s.snap)):Ao(e,n)&&(t=ko(e,n),i=za(i,vo(),s.snap.getChild(t)));else{if(!s.children)throw _i("WriteRecord should have .snap or .children");if(Ao(n,e))t=ko(n,e),i=Ka(i,t,s.children);else if(Ao(e,n))if(t=ko(e,n),So(t))i=Ka(i,vo(),s.children);else{const e=Xi(s.children,bo(t));if(e){const n=e.getChild(_o(t));i=za(i,vo(),n)}}}}}return i}function ac(e,t,n,i,r){if(i||r){const s=Qa(e.visibleWrites,t);if(!r&&Za(s))return n;if(r||null!=n||Ya(s,vo())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ao(e.path,t)||Ao(t,e.path))};return ec(oc(e.allWrites,s,t),n||oa.EMPTY_NODE)}return null}{const i=Ja(e.visibleWrites,t);if(null!=i)return i;{const i=Qa(e.visibleWrites,t);if(Za(i))return n;if(null!=n||Ya(i,vo())){return ec(i,n||oa.EMPTY_NODE)}return null}}}function cc(e,t,n,i){return ac(e.writeTree,e.treePath,t,n,i)}function uc(e,t){return function(e,t,n){let i=oa.EMPTY_NODE;const r=Ja(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Qo,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Qa(e.visibleWrites,t);return n.forEachChild(Qo,((e,t)=>{const n=ec(Qa(r,new mo(e)),t);i=i.updateImmediateChild(e,n)})),Xa(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Xa(Qa(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function lc(e,t,n,i){return function(e,t,n,i,r){yi(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Co(t,n);if(Ya(e.visibleWrites,s))return null;{const t=Qa(e.visibleWrites,s);return Za(t)?r.getChild(n):ec(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function hc(e,t){return function(e,t){return Ja(e.visibleWrites,t)}(e.writeTree,Co(e.treePath,t))}function dc(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Qa(e.visibleWrites,t),u=Ja(c,vo());if(null!=u)a=u;else{if(null==n)return[];a=ec(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function fc(e,t,n){return function(e,t,n,i){const r=Co(t,n),s=Ja(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return ec(Qa(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function pc(e,t){return gc(Co(e.treePath,t),e.writeTree)}function gc(e,t){return{treePath:e,writeTree:t}}
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
 */class mc{trackChildChange(e){const t=e.type,n=e.childName;yi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),yi(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,pa(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,fa(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,da(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw _i("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,pa(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const vc=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class bc{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Da(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:$a(this.viewCache_),r=dc(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function yc(e,t,n,i,r){const s=new mc;let o,a;if(n.type===Ra.OVERWRITE){const c=n;c.source.fromUser?o=Ic(e,t,c.path,c.snap,i,r,s):(yi(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!So(c.path),o=wc(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===Ra.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const u=Co(n,i);Ec(t,bo(u))&&(a=Ic(e,a,u,c,r,s,o))})),i.foreach(((i,c)=>{const u=Co(n,i);Ec(t,bo(u))||(a=Ic(e,a,u,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(yi(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Sc(e,t,c.path,c.children,i,r,a,s))}else if(n.type===Ra.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=hc(i,n))return t;{const a=new bc(i,t,r),c=t.eventCache.getNode();let u;if(So(n)||".priority"===bo(n)){let n;if(t.serverCache.isFullyInitialized())n=cc(i,$a(t));else{const e=t.serverCache.getNode();yi(e instanceof oa,"serverChildren would be complete if leaf node"),n=uc(i,e)}u=e.filter.updateFullNode(c,n,s)}else{const r=bo(n);let l=fc(i,r,t.serverCache);null==l&&t.serverCache.isCompleteForChild(r)&&(l=c.getImmediateChild(r)),u=null!=l?e.filter.updateChild(c,r,l,_o(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,oa.EMPTY_NODE,_o(n),a,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=cc(i,$a(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=hc(i,vo()),Ba(t,u,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=hc(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(So(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return wc(e,t,n,c.getNode().getChild(n),r,s,a,o);if(So(n)){let i=new Va(null);return c.getNode().forEachChild(Bo,((e,t)=>{i=i.set(new mo(e),t)})),Sc(e,t,n,i,r,s,a,o)}return t}{let u=new Va(null);return i.foreach(((e,t)=>{const i=Co(n,e);c.isCompleteForPath(i)&&(u=u.set(e,c.getNode().getChild(i)))})),Sc(e,t,n,u,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Ra.LISTEN_COMPLETE)throw _i("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=ja(t,s.getNode(),s.isFullyInitialized()||So(n),s.isFiltered());return _c(e,o,n,i,vc,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=qa(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(ha(qa(t)))}}(t,o,c),{viewCache:o,changes:c}}function _c(e,t,n,i,r,s){const o=t.eventCache;if(null!=hc(i,n))return t;{let a,c;if(So(n))if(yi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=$a(t),r=uc(i,n instanceof oa?n:oa.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=cc(i,$a(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=bo(n);if(".priority"===u){yi(1===yo(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=lc(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const l=_o(n);let h;if(o.isCompleteForChild(u)){c=t.serverCache.getNode();const e=lc(i,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(u).updateChild(l,e):o.getNode().getImmediateChild(u)}else h=fc(i,u,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),u,h,l,r,s):o.getNode()}}return Ba(t,a,o.isFullyInitialized()||So(n),e.filter.filtersNodes())}}function wc(e,t,n,i,r,s,o,a){const c=t.serverCache;let u;const l=o?e.filter:e.filter.getIndexedFilter();if(So(n))u=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);u=l.updateFullNode(c.getNode(),e,null)}else{const e=bo(n);if(!c.isCompleteForPath(n)&&yo(n)>1)return t;const r=_o(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,r,vc,null)}const h=ja(t,u,c.isFullyInitialized()||So(n),l.filtersNodes());return _c(e,h,n,r,new bc(r,h,s),a)}function Ic(e,t,n,i,r,s,o){const a=t.eventCache;let c,u;const l=new bc(r,t,s);if(So(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Ba(t,u,!0,e.filter.filtersNodes());else{const r=bo(n);if(".priority"===r)u=e.filter.updatePriority(t.eventCache.getNode(),i),c=Ba(t,u,a.isFullyInitialized(),a.isFiltered());else{const s=_o(n),u=a.getNode().getImmediateChild(r);let h;if(So(s))h=i;else{const e=l.getCompleteChild(r);h=null!=e?".priority"===wo(s)&&e.getChild(Eo(s)).isEmpty()?e:e.updateChild(s,i):oa.EMPTY_NODE}if(u.equals(h))c=t;else{c=Ba(t,e.filter.updateChild(a.getNode(),r,h,s,l,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Ec(e,t){return e.eventCache.isCompleteForChild(t)}function Cc(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Sc(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=So(n)?i:new Va(null).setTree(n,i);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const c=Cc(0,t.serverCache.getNode().getImmediateChild(n),i);u=wc(e,u,new mo(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!c){const c=Cc(0,t.serverCache.getNode().getImmediateChild(n),i);u=wc(e,u,new mo(n),c,r,s,o,a)}})),u}class kc{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ga(n.getIndex()),r=(s=n).loadsAllData()?new ga(s.getIndex()):s.hasLimit()?new va(s):new ma(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(oa.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(oa.EMPTY_NODE,a.getNode(),null),l=new Da(c,o.isFullyInitialized(),i.filtersNodes()),h=new Da(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fa(h,l),this.eventGenerator_=new Ma(this.query_)}}function Tc(e,t){const n=$a(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!So(t)&&!n.getImmediateChild(bo(t)).isEmpty())?n.getChild(t):null}function Rc(e){return 0===e.eventRegistrations_.length}function Ac(e,t,n){const i=[];if(n){yi(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Pc(e,t,n,i){t.type===Ra.MERGE&&null!==t.source.queryId&&(yi($a(e.viewCache_),"We should always have a full cache before handling merges"),yi(qa(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=yc(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,yi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),yi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),yi(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Nc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Nc(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ua(e,r,"child_removed",t,i,n),Ua(e,r,"child_added",t,i,n),Ua(e,r,"child_moved",s,i,n),Ua(e,r,"child_changed",t,i,n),Ua(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let Oc,Lc;class xc{constructor(){this.views=new Map}}function Dc(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return yi(null!=s,"SyncTree gave us an op for an invalid query."),Pc(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Pc(s,t,n,i));return r}}function Mc(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=cc(n,r?i:null),s=!1;e?s=!0:i instanceof oa?(e=uc(n,i),s=!1):(e=oa.EMPTY_NODE,s=!1);const o=Fa(new Da(e,s,!1),new Da(i,r,!1));return new kc(t,o)}return o}function Uc(e,t,n,i,r,s){const o=Mc(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Qo,((e,t)=>{i.push(da(e,t))}));return n.isFullyInitialized()&&i.push(ha(n.getNode())),Nc(e,i,n.getNode(),t)}(o,n)}function Fc(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Hc(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Ac(r,n,i)),Rc(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Ac(t,n,i)),Rc(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Hc(e)&&s.push(new(yi(Oc,"Reference.ts has not been loaded"),Oc)(t._repo,t._path)),{removed:s,events:o}}function Bc(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function jc(e,t){let n=null;for(const i of e.views.values())n=n||Tc(i,t);return n}function qc(e,t){if(t._queryParams.loadsAllData())return Vc(e);{const n=t._queryIdentifier;return e.views.get(n)}}function $c(e,t){return null!=qc(e,t)}function Hc(e){return null!=Vc(e)}function Vc(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Wc=1;class zc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Va(null),this.pendingWriteTree_={visibleWrites:Wa.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kc(e,t,n,i,r){return function(e,t,n,i,r){yi(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=za(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?nu(e,new La({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Gc(e,t,n,i){!function(e,t,n,i){yi(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Ka(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=Va.fromObject(n);return nu(e,new xa({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Yc(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ic(e.pendingWriteTree_,t)){let t=new Va(null);return null!=i.snap?t=t.set(vo(),!0):Hs(i.children,(e=>{t=t.set(new mo(e),!0)})),nu(e,new Na(i.path,t,n))}return[]}function Jc(e,t,n){return nu(e,new La({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Xc(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||$c(o,t))){const c=Fc(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=c.removed;if(a=c.events,!r){const n=-1!==u.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Hc(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Hc(t)){return[Vc(t)]}{let e=[];return t&&(e=Bc(t)),Hs(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=su(e,i);e.listenProvider_.startListening(hu(r),ou(e,r),s.hashFn,s.onComplete)}}}if(!r&&u.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(hu(t),n)}else u.forEach((t=>{const n=e.queryToTagMap.get(au(t));e.listenProvider_.stopListening(hu(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=au(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,u)}return a}function Qc(e,t,n,i){const r=cu(e,i);if(null!=r){const i=uu(r),s=i.path,o=i.queryId,a=ko(s,t);return lu(e,s,new La(Pa(o),a,n))}return[]}function Zc(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ko(e,r);s=s||jc(t,n),o=o||Hc(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||Hc(c),s=s||jc(c,vo())):(c=new xc,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)a=!0;else{a=!1,s=oa.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=jc(t,vo());n&&(s=s.updateImmediateChild(e,n))}))}const u=$c(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=au(t);yi(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Wc++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let l=Uc(c,t,n,nc(e.pendingWriteTree_,r),s,a);if(!u&&!o&&!i){const n=qc(c,t);l=l.concat(function(e,t,n){const i=t._path,r=ou(e,t),s=su(e,n),o=e.listenProvider_.startListening(hu(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)yi(!Hc(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!So(e)&&t&&Hc(t))return[Vc(t).query];{let e=[];return t&&(e=e.concat(Bc(t).map((e=>e.query)))),Hs(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(hu(i),ou(e,i))}}return o}
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
 */(e,t,n))}return l}function eu(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=jc(n,ko(e,t));if(i)return i}));return ac(i,t,r,n,!0)}function tu(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=ko(e,n);i=i||jc(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||jc(r,vo()):(r=new xc,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Da(i,!0,!1):null;return function(e){return qa(e.viewCache_)}(Mc(r,t,nc(e.pendingWriteTree_,t._path),s?o.getNode():oa.EMPTY_NODE,s))}function nu(e,t){return iu(t,e.syncPointTree_,null,nc(e.pendingWriteTree_,vo()))}function iu(e,t,n,i){if(So(e.path))return ru(e,t,n,i);{const r=t.get(vo());null==n&&null!=r&&(n=jc(r,vo()));let s=[];const o=bo(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=pc(i,o);s=s.concat(iu(a,c,e,t))}return r&&(s=s.concat(Dc(r,e,i,n))),s}}function ru(e,t,n,i){const r=t.get(vo());null==n&&null!=r&&(n=jc(r,vo()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=pc(i,t),c=e.operationForChild(t);c&&(s=s.concat(ru(c,r,o,a)))})),r&&(s=s.concat(Dc(r,e,i,n))),s}function su(e,t){const n=t.query,i=ou(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||oa.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=cu(e,n);if(i){const n=uu(i),r=n.path,s=n.queryId,o=ko(r,t);return lu(e,r,new Oa(Pa(s),o))}return[]}(e,n._path,i):function(e,t){return nu(e,new Oa({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Xc(e,n,null,i)}}}}function ou(e,t){const n=au(t);return e.queryToTagMap.get(n)}function au(e){return e._path.toString()+"$"+e._queryIdentifier}function cu(e,t){return e.tagToQueryMap.get(t)}function uu(e){const t=e.indexOf("$");return yi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new mo(e.substr(0,t))}}function lu(e,t,n){const i=e.syncPointTree_.get(t);yi(i,"Missing sync point for query tag that we're tracking");return Dc(i,n,nc(e.pendingWriteTree_,t),null)}function hu(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(yi(Lc,"Reference.ts has not been loaded"),Lc)(e._repo,e._path):e}class du{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new du(t)}node(){return this.node_}constructor(e){this.node_=e}}class fu{getImmediateChild(e){const t=Co(this.path_,e);return new fu(this.syncTree_,t)}node(){return eu(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const pu=function(e,t,n){return e&&"object"==typeof e?(yi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?gu(e[".sv"],t,n):"object"==typeof e[".sv"]?mu(e[".sv"],t):void yi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gu=function(e,t,n){if("timestamp"===e)return n.timestamp;yi(!1,"Unexpected server value: "+e)},mu=function(e,t,n){e.hasOwnProperty("increment")||yi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&yi(!1,"Unexpected increment value: "+i);const r=t.node();if(yi(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},vu=function(e,t,n,i){return yu(t,new fu(n,e),i)},bu=function(e,t,n){return yu(e,new du(t),n)};function yu(e,t,n){const i=e.getPriority().val(),r=pu(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=pu(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Xo(s,ca(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Xo(r))),i.forEachChild(Qo,((e,i)=>{const r=yu(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class _u{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function wu(e,t){let n=t instanceof mo?t:new mo(t),i=e,r=bo(n);for(;null!==r;){const e=Xi(i.node.children,r)||{children:{},childCount:0};i=new _u(r,i,e),n=_o(n),r=bo(n)}return i}function Iu(e){return e.node.value}function Eu(e,t){e.node.value=t,Ru(e)}function Cu(e){return e.node.childCount>0}function Su(e,t){Hs(e.node.children,((n,i)=>{t(new _u(n,e,i))}))}function ku(e,t,n,i){n&&!i&&t(e),Su(e,(e=>{ku(e,t,!0,i)})),n&&i&&t(e)}function Tu(e){return new mo(null===e.parent?e.name:Tu(e.parent)+"/"+e.name)}function Ru(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Iu(e)&&!Cu(e)}(n),r=Ji(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ru(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ru(e))}
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
 */(e.parent,e.name,e)}const Au=/[\[\].#$\/\u0000-\u001F\u007F]/,Pu=/[\[\].#$\u0000-\u001F\u007F]/,Nu=function(e){return"string"==typeof e&&0!==e.length&&!Au.test(e)},Ou=function(e){return"string"==typeof e&&0!==e.length&&!Pu.test(e)},Lu=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Us(e)||e&&"object"==typeof e&&Ji(e,".sv")},xu=function(e,t,n,i){i&&void 0===t||Du(ur(e,"value"),t,n)},Du=function(e,t,n){const i=n instanceof mo?new Po(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Oo(i));if("function"==typeof t)throw new Error(e+"contains a function "+Oo(i)+" with contents = "+t.toString());if(Us(t))throw new Error(e+"contains "+t.toString()+" "+Oo(i));if("string"==typeof t&&t.length>10485760/3&&hr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Oo(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Hs(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Nu(t)))throw new Error(e+" contains an invalid key ("+t+") "+Oo(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=hr(a),No(o),Du(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=hr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Oo(i)+" in addition to actual children.")}},Mu=function(e,t,n,i){if(i&&void 0===t)return;const r=ur(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];Hs(t,((e,t)=>{const i=new mo(e);if(Du(r,t,Co(n,i)),".priority"===wo(i)&&!Lu(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=Io(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!Nu(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(To);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Ao(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)},Uu=function(e,t,n,i){if(!(i&&void 0===n||Ou(n)))throw new Error(ur(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fu=function(e,t){if(".info"===bo(t))throw new Error(e+" failed = Can't modify data under /.info/")},Bu=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Nu(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ou(e)}(n))throw new Error(ur(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ju{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qu(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ro(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function $u(e,t,n){qu(e,n),Hu(e,(e=>Ao(e,t)||Ao(t,e)))}function Hu(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Vu(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Vu(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();As&&Os("event: "+n.toString()),Ks(i)}}}
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
 */class Wu{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ju,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ea(),this.transactionQueueTree_=new _u,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function zu(e,t,n){if(e.stats_=ro(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new wa(e.repoInfo_,((t,n,i,r)=>{Yu(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ju(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zi(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new xo(e.repoInfo_,t,((t,n,i,r)=>{Yu(e,t,n,i,r)}),(t=>{Ju(e,t)}),(t=>{!function(e,t){Hs(t,((t,n)=>{Xu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return io[n]||(io[n]=t()),io[n]}(e.repoInfo_,(()=>new Ta(e.stats_,e.server_))),e.infoData_=new Ia,e.infoSyncTree_=new zc({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Jc(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Xu(e,"connected",!1),e.serverSyncTree_=new zc({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);$u(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ku(e){const t=e.infoData_.getNode(new mo(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Gu(e){return(t=(t={timestamp:Ku(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Yu(e,t,n,i,r){e.dataUpdateCount++;const s=new mo(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Zi(n,(e=>ca(e)));o=function(e,t,n,i){const r=cu(e,i);if(r){const i=uu(r),s=i.path,o=i.queryId,a=ko(s,t),c=Va.fromObject(n);return lu(e,s,new xa(Pa(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ca(n);o=Qc(e.serverSyncTree_,s,t,r)}else if(i){const t=Zi(n,(e=>ca(e)));o=function(e,t,n){const i=Va.fromObject(n);return nu(e,new xa({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ca(n);o=Jc(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=sl(e,s)),$u(e.eventQueue_,a,o)}function Ju(e,t){Xu(e,"connected",t),!1===t&&function(e){tl(e,"onDisconnectEvents");const t=Gu(e),n=Ea();Sa(e.onDisconnect_,vo(),((i,r)=>{const s=vu(i,r,e.serverSyncTree_,t);Ca(n,i,s)}));let i=[];Sa(n,vo(),((t,n)=>{i=i.concat(Jc(e.serverSyncTree_,t,n));const r=ll(e,t);sl(e,r)})),e.onDisconnect_=Ea(),$u(e.eventQueue_,vo(),i)}(e)}function Xu(e,t,n){const i=new mo("/.info/"+t),r=ca(n);e.infoData_.updateSnapshot(i,r);const s=Jc(e.infoSyncTree_,i,r);$u(e.eventQueue_,i,s)}function Qu(e){return e.nextWriteId_++}function Zu(e,t,n,i,r){tl(e,"set",{path:t.toString(),value:n,priority:i});const s=Gu(e),o=ca(n,i),a=eu(e.serverSyncTree_,t),c=bu(o,a,s),u=Qu(e),l=Kc(e.serverSyncTree_,t,c,u,!0);qu(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Ms("set at "+t+" failed: "+n);const o=Yc(e.serverSyncTree_,u,!s);$u(e.eventQueue_,t,o),nl(e,r,n,i)}));const h=ll(e,t);sl(e,h),$u(e.eventQueue_,h,[])}function el(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function tl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Os(n,...t)}function nl(e,t,n,i){t&&Ks((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function il(e,t,n){return eu(e.serverSyncTree_,t,n)||oa.EMPTY_NODE}function rl(e,t=e.transactionQueueTree_){if(t||ul(e,t),Iu(t)){const n=al(e,t);yi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=il(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];yi(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=ko(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{tl(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Yc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ul(e,wu(e.transactionQueueTree_,t)),rl(e,e.transactionQueueTree_),$u(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Ks(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ms("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}sl(e,t)}}),o)}(e,Tu(t),n)}else Cu(t)&&Su(t,(t=>{rl(e,t)}))}function sl(e,t){const n=ol(e,t),i=Tu(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],u=ko(n,c.path);let l,h=!1;if(yi(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,l=c.abortReason,r=r.concat(Yc(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,l="maxretry",r=r.concat(Yc(e.serverSyncTree_,c.currentWriteId,!0));else{const n=il(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Du("transaction failed: Data returned ",i,c.path);let t=ca(i);"object"==typeof i&&null!=i&&Ji(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Gu(e),u=bu(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=Qu(e),s.splice(s.indexOf(o),1),r=r.concat(Kc(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),r=r.concat(Yc(e.serverSyncTree_,o,!0))}else h=!0,l="nodata",r=r.concat(Yc(e.serverSyncTree_,c.currentWriteId,!0))}$u(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===l?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(l),!1,null)))))}var o;ul(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Ks(i[e]);rl(e,e.transactionQueueTree_)}(e,al(e,n),i),i}function ol(e,t){let n,i=e.transactionQueueTree_;for(n=bo(t);null!==n&&void 0===Iu(i);)i=wu(i,n),n=bo(t=_o(t));return i}function al(e,t){const n=[];return cl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function cl(e,t,n){const i=Iu(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Su(t,(t=>{cl(e,t,n)}))}function ul(e,t){const n=Iu(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Eu(t,n.length>0?n:void 0)}Su(t,(t=>{ul(e,t)}))}function ll(e,t){const n=Tu(ol(e,t)),i=wu(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{hl(e,t)})),hl(e,i),ku(i,(t=>{hl(e,t)})),n}function hl(e,t){const n=Iu(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(yi(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(yi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Yc(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Eu(t,void 0):n.length=s+1,$u(e.eventQueue_,Tu(t),r);for(let e=0;e<i.length;e++)Ks(i[e])}}
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
 */const dl=function(e,t){const n=fl(e),i=n.namespace;"firebase.com"===n.domain&&Ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ms("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Zs(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new mo(n.pathString)}},fl=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ms(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
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
class pl{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zi(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class gl{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
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
 */class ml{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return yi(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
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
class vl{get key(){return So(this._path)?null:wo(this._path)}get ref(){return new bl(this._repo,this._path)}get _queryIdentifier(){const e=_a(this._queryParams),t=qs(e);return"{}"===t?"default":t}get _queryObject(){return _a(this._queryParams)}isEqual(e){if(!((e=dr(e))instanceof vl))return!1;const t=this._repo===e._repo,n=Ro(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class bl extends vl{get parent(){const e=Eo(this._path);return null===e?null:new bl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new ba,!1)}}class yl{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new mo(e),n=wl(this.ref,e);return new yl(this._node.getChild(t),n,Qo)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new yl(n,wl(this.ref,t),Qo))))}hasChild(e){const t=new mo(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function _l(e,t){return(e=dr(e))._checkNotDeleted("ref"),void 0!==t?wl(e._root,t):e._root}function wl(e,t){var n,i,r,s;return null===bo((e=dr(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Uu(n,i,r,s)):Uu("child","path",t,!1),new bl(e._repo,Co(e._path,t))}function Il(e,t){e=dr(e),Fu("set",e._path),xu("set",t,e._path,!1);const n=new ji;return Zu(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function El(e,t){Mu("update",t,e._path,!1);const n=new ji;return function(e,t,n,i){tl(e,"update",{path:t.toString(),value:n});let r=!0;const s=Gu(e),o={};if(Hs(n,((n,i)=>{r=!1,o[n]=vu(Co(t,n),ca(i),e.serverSyncTree_,s)})),r)Os("update() called with empty data.  Don't do anything."),nl(0,i,"ok",void 0);else{const r=Qu(e),s=Gc(e.serverSyncTree_,t,o,r);qu(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||Ms("update at "+t+" failed: "+n);const a=Yc(e.serverSyncTree_,r,!o),c=a.length>0?sl(e,t):t;$u(e.eventQueue_,c,a),nl(0,i,n,s)})),Hs(n,(n=>{const i=ll(e,Co(t,n));sl(e,i)})),$u(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Cl(e){e=dr(e);const t=new ml((()=>{})),n=new Sl(t);return function(e,t,n){const i=tu(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=ca(i).withIndex(t._queryParams.getIndex());let s;if(Zc(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Jc(e.serverSyncTree_,t._path,r);else{const n=ou(e.serverSyncTree_,t);s=Qc(e.serverSyncTree_,t._path,r,n)}return $u(e.eventQueue_,t._path,s),Xc(e.serverSyncTree_,t,n,null,!0),r}),(n=>(tl(e,"get for query "+zi(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new yl(t,new bl(e._repo,e._path),e._queryParams.getIndex())))}class Sl{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new pl("value",this,new yl(e.snapshotNode,new bl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new gl(this,e,t):null}matches(e){return e instanceof Sl&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){yi(!Oc,"__referenceConstructor has already been defined"),Oc=e}(bl),function(e){yi(!Lc,"__referenceConstructor has already been defined"),Lc=e}(bl);
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
const kl={};let Tl=!1;function Rl(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Os("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=dl(s,r),u=c.repoInfo;void 0!==ti&&ti.env&&(a=ti.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${u.namespace}`,c=dl(s,r),u=c.repoInfo):o=!c.repoInfo.secure;const l=r&&o?new Xs(Xs.OWNER):new Js(e.name,e.options,t);Bu("Invalid Firebase Database URL",c),So(c.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=kl[t.name];r||(r={},kl[t.name]=r);let s=r[e.toURLString()];s&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Wu(e,Tl,n,i),r[e.toURLString()]=s,s}(u,e,l,new Ys(e.name,n));return new Al(h,e)}class Al{get _repo(){return this._instanceStarted||(zu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bl(this._repo,vo())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=kl[t];n&&n[e.key]===e||Ds(`Database ${t}(${e.repoInfo_}) has already been deleted.`),el(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ds("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}xo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},xo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){ys=ns,Jr(new fr("database",((e,{instanceIdentifier:t})=>Rl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),as("@firebase/database","0.14.0",e),as("@firebase/database","0.14.0","esm2017")}
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
 */();new qn;c.myLibraryLink.addEventListener("click",(function(e){e.preventDefault(),c.header.classList.add("header--my-library"),c.homeLink.classList.remove("current"),Ol(e),c.formSearch.classList.add("visually-hidden"),c.headerButtons.forEach((e=>{e.classList.remove("visually-hidden")})),c.watchedButton.click()})),c.headerButtons[0].addEventListener("click",(function(e){c.queueButton.classList.remove("current"),Ol(e),Pl="watched",Xg()})),c.headerButtons[1].addEventListener("click",(function(e){c.headerButtons[0].classList.remove("current"),Ol(e),Pl="queue",Qg()}));let Pl="home";const Nl=()=>Pl;function Ol(e){e.target.classList.add("current"),e.target.blur()}function Ll(e){e.preventDefault(),Pl="home",c.header.classList.remove("header--my-library"),c.myLibraryLink.classList.remove("current"),Ol({target:c.homeLink}),c.formSearch.classList.remove("visually-hidden"),c.formSearch.reset(),c.headerButtons.forEach((e=>{e.classList.add("visually-hidden")})),Yg()}c.homeLink.addEventListener("click",Ll),c.logo.addEventListener("click",Ll);
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
as("firebase","9.15.0","app");
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
class xl{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),os(this._delegate))))}_getService(e,t=Vr){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Vr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Gr(this._delegate,e)}_addOrOverwriteComponent(e){Yr(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,Gr(e,new fr("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
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
 */const Dl=new Hi("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Ml=
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
function(e){const t={},n={__esModule:!0,initializeApp:function(i,r={}){const s=is(i,r);if(Ji(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:i,registerVersion:as,setLogLevel:us,onLog:cs,apps:null,SDK_VERSION:ns,INTERNAL:{registerComponent:function(t){const r=t.name,s=r.replace("-compat","");if(Jr(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[s])throw Dl.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&ki(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:ei}};function i(e){if(!Ji(t,e=e||Vr))throw Dl.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),i.App=e,n}(xl);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){ki(t,e)},createSubscribe:or,ErrorFactory:Hi,deepExtend:ki}),t}(),Ul=new Er("@firebase/app-compat");
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
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Ul.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Ul.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Fl=Ml;!
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
function(e){as("@firebase/app-compat","0.2.0",e)}();
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
Fl.registerVersion("firebase","9.15.0","app-compat");function Bl(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;
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
const jl="facebook.com",ql="github.com",$l="google.com",Hl="password",Vl="twitter.com",Wl="EMAIL_SIGNIN",zl="PASSWORD_RESET",Kl="RECOVER_EMAIL",Gl="REVERT_SECOND_FACTOR_ADDITION",Yl="VERIFY_AND_CHANGE_EMAIL",Jl="VERIFY_EMAIL";function Xl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ql=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},Zl=Xl,eh=new Hi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),th=new Er("@firebase/auth");function nh(e,...t){th.logLevel<=vr.ERROR&&th.error(`Auth (${ns}): ${e}`,...t)}
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
 */function ih(e,...t){throw ah(e,...t)}function rh(e,...t){return ah(e,...t)}function sh(e,t,n){const i=Object.assign(Object.assign({},Zl()),{[t]:n});return new Hi("auth","Firebase",i).create(t,{appName:e.name})}function oh(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ih(e,"argument-error"),sh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ah(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return eh.create(e,...t)}function ch(e,t,...n){if(!e)throw ah(t,...n)}function uh(e){const t="INTERNAL ASSERTION FAILED: "+e;throw nh(t),new Error(t)}function lh(e,t){e||uh(t)}
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
 */const hh=new Map;function dh(e){lh(e instanceof Function,"Expected a class definition");let t=hh.get(e);return t?(lh(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hh.set(e,t),t)}
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
function fh(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ph(){return"http:"===gh()||"https:"===gh()}function gh(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class mh{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ph()||Pi()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,lh(t>e,"Short delay should be less than long delay!"),this.isMobile=Ri()||Ni()}}
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
 */function vh(e,t){lh(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class bh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void uh("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void uh("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void uh("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const yh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},_h=new mh(3e4,6e4);
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
 */function wh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ih(e,t,n,i,r={}){return Eh(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=nr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bh.fetch()(Sh(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Eh(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},yh),t);try{const t=new kh(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Th(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Th(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Th(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Th(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw sh(e,a,o);ih(e,a)}}catch(t){if(t instanceof $i)throw t;ih(e,"network-request-failed")}}async function Ch(e,t,n,i,r={}){const s=await Ih(e,t,n,i,r);return"mfaPendingCredential"in s&&ih(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Sh(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?vh(e.config,r):`${e.config.apiScheme}://${r}`}class kh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(rh(this.auth,"network-request-failed"))),_h.get())}))}}function Th(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=rh(e,t,i);return r.customData._tokenResponse=n,r}
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
function Rh(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Ah(e){return 1e3*Number(e)}function Ph(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return nh("JWT malformed, contained fewer than 3 sections"),null;try{const e=Si(n);return e?JSON.parse(e):(nh("Failed to decode base64 JWT payload"),null)}catch(e){return nh("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function Nh(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $i&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Oh{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Lh{_initializeTime(){this.lastSignInTime=Rh(this.lastLoginAt),this.creationTime=Rh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function xh(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Nh(e,async function(e,t){return Ih(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ch(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Bl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Dh{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ch(e.idToken,"internal-error"),ch(void 0!==e.idToken,"internal-error"),ch(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ph(e);return ch(t,"internal-error"),ch(void 0!==t.exp,"internal-error"),ch(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ch(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await Eh(e,{},(async()=>{const n=nr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Sh(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bh.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Dh;return n&&(ch("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ch("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(ch("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dh,this.toJSON())}_performRefresh(){return uh("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Mh(e,t){ch("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Uh{async getIdToken(e){const t=await Nh(this,this.stsTokenManager.getToken(this.auth,e));return ch(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=dr(e),i=await n.getIdToken(t),r=Ph(i);ch(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rh(Ah(r.auth_time)),issuedAtTime:Rh(Ah(r.iat)),expirationTime:Rh(Ah(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=dr(e);await xh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ch(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Uh(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ch(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nh(this,async function(e,t){return Ih(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:_,providerData:w,stsTokenManager:I}=t;ch(b&&I,e,"internal-error");const E=Dh.fromJSON(this.name,I);ch("string"==typeof b,e,"internal-error"),Mh(l,e.name),Mh(h,e.name),ch("boolean"==typeof y,e,"internal-error"),ch("boolean"==typeof _,e,"internal-error"),Mh(d,e.name),Mh(f,e.name),Mh(p,e.name),Mh(g,e.name),Mh(m,e.name),Mh(v,e.name);const C=new Uh({uid:b,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new Dh;i.updateFromServerResponse(t);const r=new Uh({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await xh(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Bl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lh(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class Fh{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Fh.type="NONE";const Bh=Fh;
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
 */function jh(e,t,n){return`firebase:${e}:${t}:${n}`}class qh{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Uh._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new qh(dh(Bh),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||dh(Bh);const s=jh(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Uh._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new qh(r,e,n)):new qh(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=jh(this.userKey,i.apiKey,r),this.fullPersistenceKey=jh("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function $h(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gh(t))return"Blackberry";if(Yh(t))return"Webos";if(Vh(t))return"Safari";if((t.includes("chrome/")||Wh(t))&&!t.includes("edge/"))return"Chrome";if(Kh(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Hh(e=Ti()){return/firefox\//i.test(e)}function Vh(e=Ti()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wh(e=Ti()){return/crios\//i.test(e)}function zh(e=Ti()){return/iemobile/i.test(e)}function Kh(e=Ti()){return/android/i.test(e)}function Gh(e=Ti()){return/blackberry/i.test(e)}function Yh(e=Ti()){return/webos/i.test(e)}function Jh(e=Ti()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xh(e=Ti()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Qh(e=Ti()){return Jh(e)||Kh(e)||Yh(e)||Gh(e)||/windows phone/i.test(e)||zh(e)}
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
function Zh(e,t=[]){let n;switch(e){case"Browser":n=$h(Ti());break;case"Worker":n=`${$h(Ti())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${i}`}
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
 */class ed{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class td{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dh(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await qh.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ch(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xh(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?dr(e):null;return t&&ch(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ch(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(dh(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dh(e)||this._popupRedirectResolver;ch(t,this,"argument-error"),this.redirectPersistenceManager=await qh.create(this,[dh(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ch(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ch(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new ed(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function nd(e){return dr(e)}class id{get next(){return ch(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=or((e=>this.observer=e))}}function rd(e,t,n){const i=nd(e);ch(i._canInitEmulator,i,"emulator-config-failed"),ch(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=sd(t),{host:o,port:a}=function(e){const t=sd(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:od(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:od(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function sd(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function od(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ad{toJSON(){return uh("not implemented")}_getIdTokenResponse(e){return uh("not implemented")}_linkToIdToken(e,t){return uh("not implemented")}_getReauthenticationResolver(e){return uh("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function cd(e,t){return Ih(e,"POST","/v1/accounts:resetPassword",wh(e,t))}async function ud(e,t){return Ih(e,"POST","/v1/accounts:update",t)}async function ld(e,t){return Ih(e,"POST","/v1/accounts:sendOobCode",wh(e,t))}
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
class hd extends ad{static _fromEmailAndPassword(e,t){return new hd(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new hd(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithPassword",wh(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithEmailLink",wh(e,t))}(e,{email:this._email,oobCode:this._password});default:ih(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ud(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithEmailLink",wh(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ih(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function dd(e,t){return Ch(e,"POST","/v1/accounts:signInWithIdp",wh(e,t))}
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
 */class fd extends ad{static _fromParams(e){const t=new fd(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ih("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Bl(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new fd(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return dd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dd(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const pd={USER_NOT_FOUND:"user-not-found"};
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
class gd extends ad{static _fromVerification(e,t){return new gd({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gd({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithPhoneNumber",wh(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ch(e,"POST","/v1/accounts:signInWithPhoneNumber",wh(e,t));if(n.temporaryProof)throw Th(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithPhoneNumber",wh(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),pd)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new gd({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class md{static parseLink(e){const t=function(e){const t=ir(rr(e)).link,n=t?ir(rr(t)).deep_link_id:null,i=ir(rr(e)).deep_link_id;return(i?ir(rr(i)).link:null)||i||n||t||e}(e);try{return new md(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=ir(rr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ch(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class vd{static credential(e,t){return hd._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=md.parseLink(t);return ch(n,"argument-error"),hd._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=vd.PROVIDER_ID}}vd.PROVIDER_ID="password",vd.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class bd{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class yd extends bd{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class _d extends yd{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return ch("providerId"in t&&"signInMethod"in t,"argument-error"),fd._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ch(e.idToken||e.accessToken,"argument-error"),fd._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return _d.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return _d.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!(n||i||t||r))return null;if(!o)return null;try{return new _d(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}
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
 */class wd extends yd{static credential(e){return fd._fromParams({providerId:wd.PROVIDER_ID,signInMethod:wd.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wd.credentialFromTaggedObject(e)}static credentialFromError(e){return wd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wd.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}wd.FACEBOOK_SIGN_IN_METHOD="facebook.com",wd.PROVIDER_ID="facebook.com";
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
class Id extends yd{static credential(e,t){return fd._fromParams({providerId:Id.PROVIDER_ID,signInMethod:Id.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Id.credentialFromTaggedObject(e)}static credentialFromError(e){return Id.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Id.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Id.GOOGLE_SIGN_IN_METHOD="google.com",Id.PROVIDER_ID="google.com";
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
class Ed extends yd{static credential(e){return fd._fromParams({providerId:Ed.PROVIDER_ID,signInMethod:Ed.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ed.credentialFromTaggedObject(e)}static credentialFromError(e){return Ed.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ed.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ed.GITHUB_SIGN_IN_METHOD="github.com",Ed.PROVIDER_ID="github.com";class Cd extends ad{_getIdTokenResponse(e){return dd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dd(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Cd(n,r):null}static _create(e,t){return new Cd(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
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
 */class Sd extends bd{static credentialFromResult(e){return Sd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Sd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Cd.fromJSON(e);return ch(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Cd._create(n,t)}catch(e){return null}}constructor(e){ch(e.startsWith("saml."),"argument-error"),super(e)}}
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
 */class kd extends yd{static credential(e,t){return fd._fromParams({providerId:kd.PROVIDER_ID,signInMethod:kd.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kd.credentialFromTaggedObject(e)}static credentialFromError(e){return kd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kd.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function Td(e,t){return Ch(e,"POST","/v1/accounts:signUp",wh(e,t))}
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
 */kd.TWITTER_SIGN_IN_METHOD="twitter.com",kd.PROVIDER_ID="twitter.com";class Rd{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Uh._fromIdTokenResponse(e,n,i),s=Ad(n);return new Rd({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ad(n);return new Rd({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ad(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Pd extends $i{static _fromErrorAndOperation(e,t,n,i){return new Pd(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Pd.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Nd(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pd._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */function Od(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function Ld(e,t){const n=dr(e);await Dd(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return Ih(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Od(i||[]);return n.providerData=n.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xd(e,t,n=!1){const i=await Nh(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rd._forOperation(e,"link",i)}async function Dd(e,t,n){await xh(t);const i=!1===e?"provider-already-linked":"no-such-provider";ch(Od(t.providerData).has(n)===e,t.auth,i)}
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
 */async function Md(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Nh(e,Nd(i,r,t,e),n);ch(s.idToken,i,"internal-error");const o=Ph(s.idToken);ch(o,i,"internal-error");const{sub:a}=o;return ch(e.uid===a,i,"user-mismatch"),Rd._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ih(i,"user-mismatch"),e}}
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
 */async function Ud(e,t,n=!1){const i="signIn",r=await Nd(e,i,t),s=await Rd._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Fd(e,t){return Ud(nd(e),t)}async function Bd(e,t){const n=dr(e);return await Dd(!1,n,t.providerId),xd(n,t)}async function jd(e,t){return Md(dr(e),t)}
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
async function qd(e,t){const n=nd(e),i=await async function(e,t){return Ch(e,"POST","/v1/accounts:signInWithCustomToken",wh(e,t))}(n,{token:t,returnSecureToken:!0}),r=await Rd._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
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
 */class $d{static _fromServerResponse(e,t){return"phoneInfo"in t?Hd._fromServerResponse(e,t):ih(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class Hd extends $d{static _fromServerResponse(e,t){return new Hd(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
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
 */function Vd(e,t,n){var i;ch((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),ch(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ch(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(ch(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function Wd(e,t,n){const i=dr(e),r={requestType:"PASSWORD_RESET",email:t};n&&Vd(i,r,n),await async function(e,t){return ld(e,t)}(i,r)}async function zd(e,t){await async function(e,t){return Ih(e,"POST","/v1/accounts:update",wh(e,t))}(dr(e),{oobCode:t})}async function Kd(e,t){const n=dr(e),i=await cd(n,{oobCode:t}),r=i.requestType;switch(ch(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ch(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ch(i.mfaInfo,n,"internal-error");default:ch(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=$d._fromServerResponse(nd(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}
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
async function Gd(e,t,n){const i=dr(e),r={requestType:"EMAIL_SIGNIN",email:t};ch(n.handleCodeInApp,i,"argument-error"),n&&Vd(i,r,n),await async function(e,t){return ld(e,t)}(i,r)}
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
async function Yd(e,t){const n={identifier:t,continueUri:ph()?fh():"http://localhost"},{signinMethods:i}=await
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
async function(e,t){return Ih(e,"POST","/v1/accounts:createAuthUri",wh(e,t))}(dr(e),n);return i||[]}async function Jd(e,t){const n=dr(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Vd(n.auth,i,t);const{email:r}=await async function(e,t){return ld(e,t)}(n.auth,i);r!==e.email&&await e.reload()}async function Xd(e,t,n){const i=dr(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Vd(i.auth,r,n);const{email:s}=await async function(e,t){return ld(e,t)}(i.auth,r);s!==e.email&&await e.reload()}
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
async function Qd(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=dr(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Nh(i,async function(e,t){return Ih(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}async function Zd(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const s=await Nh(e,ud(i,r));await e._updateTokensIfNecessary(s,!0)}
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
 */class ef{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class tf extends ef{constructor(e,t,n,i){super(e,t,n),this.username=i}}class nf extends ef{constructor(e,t){super(e,"facebook.com",t)}}class rf extends tf{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class sf extends ef{constructor(e,t){super(e,"google.com",t)}}class of extends tf{constructor(e,t,n){super(e,"twitter.com",t,n)}}function af(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=Ph(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new ef(s,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new nf(s,r);case"github.com":return new rf(s,r);case"google.com":return new sf(s,r);case"twitter.com":return new of(s,r,e.screenName||null);case"custom":case"anonymous":return new ef(s,null);default:return new ef(s,i,r)}}(n)}
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
 */class cf{static _fromIdtoken(e,t){return new cf("enroll",e,t)}static _fromMfaPendingCredential(e){return new cf("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return cf._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return cf._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
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
 */class uf{static _fromError(e,t){const n=nd(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>$d._fromServerResponse(n,e)));ch(i.mfaPendingCredential,n,"internal-error");const s=cf._fromMfaPendingCredential(i.mfaPendingCredential);return new uf(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Rd._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return ch(t.user,n,"internal-error"),Rd._forOperation(t.user,t.operationType,o);default:ih(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}class lf{static _fromUser(e){return new lf(e)}async getSession(){return cf._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await Nh(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),i=await Nh(this.user,(r=this.user.auth,s={idToken:n,mfaEnrollmentId:t},Ih(r,"POST","/v2/accounts/mfaEnrollment:withdraw",wh(r,s))));var r,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==e?void 0:e.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>$d._fromServerResponse(e.auth,t))))}))}}const hf=new WeakMap;
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
class df{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class ff extends df{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Oi()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ti();return Vh(e)||Jh(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qh(),this._shouldAllowMigration=!0}}ff.type="LOCAL";const pf=ff;
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
 */class gf extends df{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}gf.type="SESSION";const mf=gf;
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
class vf{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new vf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function bf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */vf.receivers=[];class yf{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=bf("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function _f(){return window}
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
function wf(){return void 0!==_f().WorkerGlobalScope&&"function"==typeof _f().importScripts}class If{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Ef(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Cf(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new If(e).toPromise()}(),t(await Cf()))}))}))}async function Sf(e,t,n){const i=Ef(e,!0).put({fbase_key:t,value:n});return new If(i).toPromise()}function kf(e,t){const n=Ef(e,!0).delete(t);return new If(n).toPromise()}class Tf{async _openDb(){return this.db||(this.db=await Cf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vf._getInstance(wf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Sf(e,"__sak","1"),await kf(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ef(e,!1).get(t),i=await new If(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ef(e,!1).getAll();return new If(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Tf.type="LOCAL";const Rf=Tf;
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
 */function Af(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=rh("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Pf(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */class Nf{render(e,t){const n=this.counter;return this._widgets.set(n,new Of(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}}class Of{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;ch(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const Lf=Pf("rcb"),xf=new mh(3e4,6e4);class Df{load(e,t=""){return ch(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(_f().grecaptcha):new Promise(((n,i)=>{const r=_f().setTimeout((()=>{i(rh(e,"network-request-failed"))}),xf.get());_f()[Lf]=()=>{_f().clearTimeout(r),delete _f()[Lf];const s=_f().grecaptcha;if(!s)return void i(rh(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Af(`https://www.google.com/recaptcha/api.js??${nr({onload:Lf,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),i(rh(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=_f().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=_f().grecaptcha)||void 0===e?void 0:e.render)}}class Mf{async load(e){return new Nf(e)}clearedOneInstance(){}}
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
 */const Uf={theme:"light",type:"image"};class Ff{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){ch(!this.parameters.sitekey,this.auth,"argument-error"),ch(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ch("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=_f()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){ch(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ch(ph()&&!wf(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
async function(e){return(await Ih(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);ch(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ch(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},Uf),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=nd(n),this.isInvisible="invisible"===this.parameters.size,ch("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;ch(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mf:new Df,this.validateStartingState()}}class Bf{confirm(e){const t=gd._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function jf(e,t,n){var i;const r=await n.verify();try{let s;if(ch("string"==typeof r,e,"argument-error"),ch("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){ch("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Ih(e,"POST","/v2/accounts/mfaEnrollment:start",wh(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ch("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;ch(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ih(e,"POST","/v2/accounts/mfaSignIn:start",wh(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ih(e,"POST","/v1/accounts:sendVerificationCode",wh(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class qf{verifyPhoneNumber(e,t){return jf(this.auth,e,dr(t))}static credential(e,t){return gd._fromVerification(e,t)}static credentialFromResult(e){const t=e;return qf.credentialFromTaggedObject(t)}static credentialFromError(e){return qf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gd._fromTokenResponse(t,n):null}constructor(e){this.providerId=qf.PROVIDER_ID,this.auth=nd(e)}}
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
function $f(e,t){return t?dh(t):(ch(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */qf.PROVIDER_ID="phone",qf.PHONE_SIGN_IN_METHOD="phone";class Hf extends ad{_getIdTokenResponse(e){return dd(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dd(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dd(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Vf(e){return Ud(e.auth,new Hf(e),e.bypassAuthState)}function Wf(e){const{auth:t,user:n}=e;return ch(n,t,"internal-error"),Md(n,new Hf(e),e.bypassAuthState)}async function zf(e){const{auth:t,user:n}=e;return ch(n,t,"internal-error"),xd(n,new Hf(e),e.bypassAuthState)}
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
 */class Kf{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vf;case"linkViaPopup":case"linkViaRedirect":return zf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:ih(this.auth,"internal-error")}}resolve(e){lh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Gf=new mh(2e3,1e4);class Yf extends Kf{async executeNotNull(){const e=await this.execute();return ch(e,this.auth,"internal-error"),e}async onExecution(){lh(1===this.filter.length,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(rh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(rh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(rh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Gf.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Yf.currentPopupAction&&Yf.currentPopupAction.cancel(),Yf.currentPopupAction=this}}Yf.currentPopupAction=null;
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
const Jf=new Map;class Xf extends Kf{async execute(){let e=Jf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=tp(t),i=ep(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Jf.set(this.auth._key(),e)}return this.bypassAuthState||Jf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Qf(e,t){return ep(e)._set(tp(t),"true")}function Zf(e,t){Jf.set(e._key(),t)}function ep(e){return dh(e._redirectPersistence)}function tp(e){return jh("pendingRedirect",e.config.apiKey,e.name)}
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
 */function np(e,t,n){return async function(e,t,n){const i=nd(e);oh(e,t,bd);const r=$f(i,n);return await Qf(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function ip(e,t,n){return async function(e,t,n){const i=dr(e);oh(i.auth,t,bd);const r=$f(i.auth,n);await Qf(r,i.auth);const s=await op(i);return r._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)}function rp(e,t,n){return async function(e,t,n){const i=dr(e);oh(i.auth,t,bd);const r=$f(i.auth,n);await Dd(!1,i,t.providerId),await Qf(r,i.auth);const s=await op(i);return r._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)}async function sp(e,t,n=!1){const i=nd(e),r=$f(i,t),s=new Xf(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function op(e){const t=bf(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class ap{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!up(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(rh(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(cp(e))}saveEventToCache(e){this.cachedEventUids.add(cp(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function cp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function up({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function lp(e,t={}){return Ih(e,"GET","/v1/projects",t)}
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
 */const hp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dp=/^https?/;function fp(e){const t=fh(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!dp.test(n))return!1;if(hp.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const pp=new mh(3e4,6e4);function gp(){const e=_f().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let mp=null;function vp(e){return mp=mp||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(rh(e,"network-request-failed"))},timeout:pp.get()})}if(null===(r=null===(i=_f().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=_f().gapi)||void 0===s?void 0:s.load)){const t=Pf("iframefcb");return _f()[t]=()=>{gapi.load?o():n(rh(e,"network-request-failed"))},Af(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw mp=null,e}))}(e),mp}
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
 */const bp=new mh(5e3,15e3),yp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_p=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wp(e){const t=e.config;ch(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vh(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:ns},r=_p.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${nr(i).slice(1)}`}
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
const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ep{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Cp(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ip),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Ti().toLowerCase();n&&(a=Wh(u)?"_blank":n),Hh(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ti()){var t;return Jh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new Ep(null);const h=window.open(t||"",a,l);ch(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ep(h)}function Sp(e,t,n,i,r,s){ch(e.config.authDomain,e,"auth-domain-config-required"),ch(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ns,eventId:r};if(t instanceof bd){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Qi(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof yd){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?vh(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${nr(a).slice(1)}`}const kp=class{async _openPopup(e,t,n,i){var r;lh(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Cp(e,Sp(e,t,n,fh(),i),bf())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Sp(e,t,n,fh(),i),_f().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(lh(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await vp(e),n=_f().gapi;return ch(n,e,"internal-error"),t.open({where:document.body,url:wp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=rh(e,"network-request-failed"),s=_f().setTimeout((()=>{i(r)}),bp.get());function o(){_f().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new ap(e);return t.register("authEvent",(t=>{ch(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ih(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await lp(e);for(const e of t)try{if(fp(e))return}catch(e){}ih(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qh()||Vh()||Jh()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mf,this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}};class Tp extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return uh("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new Tp(e)}_finalizeEnroll(e,t,n){return function(e,t){return Ih(e,"POST","/v2/accounts/mfaEnrollment:finalize",wh(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Ih(e,"POST","/v2/accounts/mfaSignIn:finalize",wh(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class Rp{static assertion(e){return Tp._fromCredential(e)}constructor(){}}Rp.FACTOR_ID="phone";
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
class Ap{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ch(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Pp=Bi("authIdTokenMaxAge")||300;let Np=null;var Op;
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
function Lp(){return window}
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
 */Op="Browser",Jr(new fr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{ch(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ch(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Op,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zh(Op)},o=new td(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(dh);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Jr(new fr("auth-internal",(e=>{const t=nd(e.getProvider("auth").getImmediate());return new Ap(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),as("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Op)),as("@firebase/auth","0.21.0","esm2017");async function xp(e,t,n){var i;const{BuildInfo:r}=Lp();lh(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(lh(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
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
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return Jh()?o.ibi=r.packageName:Kh()?o.apn=r.packageName:ih(e,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,Sp(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}function Dp(e){const{cordova:t}=Lp();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Xh()?"_blank":"_system","location=yes"),n(r)}))}))}class Mp extends ap{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function Up(e){const t=await jp()._get(qp(e));return t&&await jp()._remove(qp(e)),t}function Fp(e,t){var n,i;const r=function(e){const t=$p(e),n=t.link?decodeURIComponent(t.link):void 0,i=$p(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return $p(r).link||r||i||n||e}(t);if(r.includes("/__/auth/callback")){const t=$p(r),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(i=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?rh(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function Bp(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function jp(){return dh(pf)}function qp(e){return jh("authEvent",e.config.apiKey,e.name)}function $p(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return ir(n.join("?"))}
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
 */const Hp=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Mp(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){ih(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,r,s,o,a,c,u,l;const h=Lp();ch("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ch(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ch("function"==typeof(null===(s=null===(r=null===(i=null==h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ch("function"==typeof(null===(c=null===(a=null===(o=null==h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ch("function"==typeof(null===(l=null===(u=null==h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Jf.clear(),await this._originValidation(e);const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Bp(),postBody:null,tenantId:e.tenantId,error:rh(e,"no-auth-event")}}(e,n,i);await function(e,t){return jp()._set(qp(e),t)}(e,s);const o=await xp(e,s,t);return async function(e,t,n){const{cordova:i}=Lp();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(rh(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Kh()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{r()}}(e,r,await Dp(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=Lp(),n={};Jh()?n.iosBundleId=t.packageName:Kh()?n.androidPackageName=t.packageName:ih(e,"operation-not-supported-in-this-environment"),await lp(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Lp(),s=setTimeout((async()=>{await Up(e),t.onEvent(Vp())}),500),o=async n=>{clearTimeout(s);const i=await Up(e);let r=null;i&&(null==n?void 0:n.url)&&(r=Fp(i,n.url)),t.onEvent(r||Vp())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=i,c=`${r.packageName.toLowerCase()}://`;Lp().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=mf,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}};function Vp(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:rh("no-auth-event")}}
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
 */function Wp(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function zp(e=Ti()){return!("file:"!==Wp()&&"ionic:"!==Wp()&&"capacitor:"!==Wp()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Kp(e=Ti()){return Oi()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Ti()){return/Edge\/\d+/.test(e)}(e)}function Gp(){try{const e=self.localStorage,t=bf();if(e)return e.setItem(t,"1"),e.removeItem(t),!Kp()||xi()}catch(e){return Yp()&&xi()}return!1}function Yp(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function Jp(){return("http:"===Wp()||"https:"===Wp()||Pi()||zp())&&!(Ni()||Ai())&&Gp()&&!Yp()}function Xp(){return zp()&&"undefined"!=typeof document}
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
const Qp={LOCAL:"local",NONE:"none",SESSION:"session"},Zp=ch;async function eg(e){await e._initializationPromise;const t=tg(),n=jh("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function tg(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
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
 */const ng=ch;class ig{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Xp()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ng(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!Xp()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=dh(kp),this.cordovaResolver=dh(Hp),this.underlyingResolver=null,this._redirectPersistence=mf,this._completeRedirectFn=sp,this._overrideRedirectResult=Zf}}
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
 */function rg(e){return e.unwrap()}function sg(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new ug(e,function(e,t){var n;const i=dr(e),r=t;return ch(t.customData.operationType,i,"argument-error"),ch(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),uf._fromError(i,r)}(e,t))}else if(i){const e=og(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function og(e){const{_tokenResponse:t}=e instanceof $i?e.customData:e;if(!t)return null;if(!(e instanceof $i)&&"temporaryProof"in t&&"phoneNumber"in t)return qf.credentialFromResult(e);const n=t.providerId;if(!n||n===Hl)return null;let i;switch(n){case $l:i=Id;break;case jl:i=wd;break;case ql:i=Ed;break;case Vl:i=kd;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return r||s||e||o?o?n.startsWith("saml.")?Cd._create(n,o):fd._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:r}):new _d(n).credential({idToken:e,accessToken:r,rawNonce:a}):null}return e instanceof $i?i.credentialFromError(e):i.credentialFromResult(e)}function ag(e,t){return t.catch((t=>{throw t instanceof $i&&sg(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,og(i)),additionalUserInfo:af(e),user:lg.getOrCreate(n)};
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
var i}))}async function cg(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ag(e,n.confirm(t))}}class ug{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ag(rg(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
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
 */class lg{static getOrCreate(e){return lg.USER_MAP.has(e)||lg.USER_MAP.set(e,new lg(e)),lg.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ag(this.auth,Bd(this._delegate,e))}async linkWithPhoneNumber(e,t){return cg(this.auth,async function(e,t,n){const i=dr(e);await Dd(!1,i,"phone");const r=await jf(i.auth,t,dr(n));return new Bf(r,(e=>Bd(i,e)))}(this._delegate,e,t))}async linkWithPopup(e){return ag(this.auth,async function(e,t,n){const i=dr(e);oh(i.auth,t,bd);const r=$f(i.auth,n);return new Yf(i.auth,"linkViaPopup",t,r,i).executeNotNull()}(this._delegate,e,ig))}async linkWithRedirect(e){return await eg(nd(this.auth)),rp(this._delegate,e,ig)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ag(this.auth,jd(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return cg(this.auth,async function(e,t,n){const i=dr(e),r=await jf(i.auth,t,dr(n));return new Bf(r,(e=>jd(i,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return ag(this.auth,async function(e,t,n){const i=dr(e);oh(i.auth,t,bd);const r=$f(i.auth,n);return new Yf(i.auth,"reauthViaPopup",t,r,i).executeNotNull()}(this._delegate,e,ig))}async reauthenticateWithRedirect(e){return await eg(nd(this.auth)),ip(this._delegate,e,ig)}sendEmailVerification(e){return Jd(this._delegate,e)}async unlink(e){return await Ld(this._delegate,e),this}updateEmail(e){return function(e,t){return Zd(dr(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return Zd(dr(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await xd(dr(e),t)}(this._delegate,e)}updateProfile(e){return Qd(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Xd(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=function(e){const t=dr(e);return hf.has(t)||hf.set(t,lf._fromUser(t)),hf.get(t)}(e)}}lg.USER_MAP=new WeakMap;
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
const hg=ch;class dg{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?lg.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rd(this._delegate,e,t)}applyActionCode(e){return zd(this._delegate,e)}checkActionCode(e){return Kd(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await cd(dr(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ag(this._delegate,async function(e,t,n){const i=nd(e),r=await Td(i,{returnSecureToken:!0,email:t,password:n}),s=await Rd._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Yd(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=md.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){hg(Jp(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await nd(e)._initializationPromise,sp(e,t,!1)}(this._delegate,ig);return e?ag(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){nd(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=fg(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=fg(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return Gd(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Wd(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){Zp(Object.values(Qp).includes(t),e,"invalid-persistence-type"),Ni()?Zp(t!==Qp.SESSION,e,"unsupported-persistence-type"):Ai()?Zp(t===Qp.NONE,e,"unsupported-persistence-type"):Yp()?Zp(t===Qp.NONE||t===Qp.LOCAL&&xi(),e,"unsupported-persistence-type"):Zp(t===Qp.NONE||Gp(),e,"unsupported-persistence-type")}(this._delegate,e),e){case Qp.SESSION:t=mf;break;case Qp.LOCAL:t=await dh(Rf)._isAvailable()?Rf:pf;break;case Qp.NONE:t=Bh;break;default:return ih("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ag(this._delegate,async function(e){var t;const n=nd(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Rd({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Td(n,{returnSecureToken:!0}),r=await Rd._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return ag(this._delegate,Fd(this._delegate,e))}signInWithCustomToken(e){return ag(this._delegate,qd(this._delegate,e))}signInWithEmailAndPassword(e,t){return ag(this._delegate,function(e,t,n){return Fd(dr(e),vd.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return ag(this._delegate,async function(e,t,n){const i=dr(e),r=vd.credentialWithLink(t,n||fh());return ch(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Fd(i,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return cg(this._delegate,async function(e,t,n){const i=nd(e),r=await jf(i,t,dr(n));return new Bf(r,(e=>Fd(i,e)))}(this._delegate,e,t))}async signInWithPopup(e){return hg(Jp(),this._delegate,"operation-not-supported-in-this-environment"),ag(this._delegate,async function(e,t,n){const i=nd(e);oh(e,t,bd);const r=$f(i,n);return new Yf(i,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,ig))}async signInWithRedirect(e){return hg(Jp(),this._delegate,"operation-not-supported-in-this-environment"),await eg(this._delegate),np(this._delegate,e,ig)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await Kd(dr(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;hg(n,"invalid-api-key",{appName:e.name}),hg(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?ig:void 0;this._delegate=t.initialize({options:{persistence:pg(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Ql),this.linkUnderlyingAuth()}}function fg(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&lg.getOrCreate(e)),error:t,complete:n}}function pg(e,t){const n=function(e,t){const n=tg();if(!n)return[];const i=jh("persistence",e,t);switch(n.getItem(i)){case Qp.NONE:return[Bh];case Qp.LOCAL:return[Rf,mf];case Qp.SESSION:return[mf];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(Rf)||n.push(Rf),"undefined"!=typeof window)for(const e of[pf,mf])n.includes(e)||n.push(e);return n.includes(Bh)||n.push(Bh),n}
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
 */dg.Persistence=Qp;class gg{static credential(e,t){return qf.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new qf(rg(Fl.auth()))}}gg.PHONE_SIGN_IN_METHOD=qf.PHONE_SIGN_IN_METHOD,gg.PROVIDER_ID=qf.PROVIDER_ID;
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
const mg=ch;class vg{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=Fl.app()){var i;mg(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ff(e,t,n.auth()),this.type=this._delegate.type}}
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
 */var bg;(bg=Fl).INTERNAL.registerComponent(new fr("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new dg(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Wl,PASSWORD_RESET:zl,RECOVER_EMAIL:Kl,REVERT_SECOND_FACTOR_ADDITION:Gl,VERIFY_AND_CHANGE_EMAIL:Yl,VERIFY_EMAIL:Jl}},EmailAuthProvider:vd,FacebookAuthProvider:wd,GithubAuthProvider:Ed,GoogleAuthProvider:Id,OAuthProvider:_d,SAMLAuthProvider:Sd,PhoneAuthProvider:gg,PhoneMultiFactorGenerator:Rp,RecaptchaVerifier:vg,TwitterAuthProvider:kd,Auth:dg,AuthCredential:ad,Error:$i}).setInstantiationMode("LAZY").setMultipleInstances(!1)),bg.registerVersion("@firebase/auth-compat","0.3.0");var yg={};!function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function n(e){e&&e.blur&&e!==document.body&&e.blur()}function i(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var s="DOMNodeRemoved";n|=r.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),o.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}n(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!o.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,o.needsCentering(this.dialog_)?(o.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var n=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var o={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],r=null;try{r=n.cssRules}catch(e){}if(r)for(var s=0;s<r.length;++s){var o=r[s],a=null;try{a=document.querySelectorAll(o.selectorText)}catch(e){}if(a&&i(a,e)){var c=o.style.getPropertyValue("top"),u=o.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!o.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||o.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(o.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},o.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},o.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},o.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var n,i=0;n=this.pendingDialogStack[i];++i)if(n.dialog===e)return 0===i;e=e.parentElement}return!1},o.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),n(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},o.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var n=new e("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},o.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},o.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},o.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},o.dm=new o.DialogManager,o.formSubmitter=null,o.useValue=null,void 0===window.HTMLDialogElement){var a=document.createElement("form");if(a.setAttribute("method","dialog"),"dialog"!==a.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var u=c.get;c.get=function(){return r(this)?"dialog":u.call(this)};var l=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):l.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(o.formSubmitter=null,o.useValue=null,!e.defaultPrevented){var n=e.target;if(n&&r(n.form)){if(!("submit"===n.type&&["button","input"].indexOf(n.localName)>-1)){if("input"!==n.localName||"image"!==n.type)return;o.useValue=e.offsetX+","+e.offsetY}t(n)&&(o.formSubmitter=n)}}}),!1);var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return h.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var n=e.target;if(r(n)){e.preventDefault();var i=t(n);if(i){var s=o.formSubmitter;s&&s.form===n?i.close(o.useValue||s.value):i.close(),o.formSubmitter=null}}}),!0)}o.forceRegisterDialog=o.forceRegisterDialog,o.registerDialog=o.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return o})):"object"==typeof yg?yg=o:window.dialogPolyfill=o}();
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
var _g,wg,Ig,Eg,Cg={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};Cg=function(){var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==r(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function a(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)a(e[r].className,e[r].cssClass);else{var s=t;if(void 0===n){var o=i(s);o&&(n=o.cssClass)}for(var u=document.querySelectorAll("."+n),l=0;l<u.length;l++)c(u[l],s)}}function c(a,c){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(u),!u.defaultPrevented){var l=r(a),h=[];if(c)s(a,c)||h.push(i(c));else{var d=a.classList;e.forEach((function(e){d.contains(e.cssClass)&&-1===h.indexOf(e)&&!s(a,e.className)&&h.push(e)}))}for(var f,p=0,g=h.length;p<g;p++){if(!(f=h[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),a.setAttribute("data-upgraded",l.join(","));var m=new f.classConstructor(a);m[n]=f,t.push(m);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](a);f.widget&&(a[f.className]=m);var y=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(y)}}}function u(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),s=r.indexOf(e[n].classAsString);r.splice(s,1),e.element_.setAttribute("data-upgraded",r.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}(),Cg.ComponentConfigPublic,Cg.ComponentConfig,Cg.Component,Cg.upgradeDom=Cg.upgradeDom,Cg.upgradeElement=Cg.upgradeElement,Cg.upgradeElements=Cg.upgradeElements,Cg.upgradeAllRegistered=Cg.upgradeAllRegistered,Cg.registerUpgradedCallback=Cg.registerUpgradedCallback,Cg.register=Cg.register,Cg.downgradeElements=Cg.downgradeElements,window.componentHandler=Cg,window.componentHandler=Cg,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Cg.upgradeAllRegistered()):(Cg.upgradeElement=function(){},Cg.register=function(){})})),
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
_g=function(e){this.element_=e,this.init()},window.MaterialButton=_g,_g.prototype.Constant_={},_g.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},_g.prototype.blurHandler_=function(e){e&&this.element_.blur()},_g.prototype.disable=function(){this.element_.disabled=!0},_g.prototype.disable=_g.prototype.disable,_g.prototype.enable=function(){this.element_.disabled=!1},_g.prototype.enable=_g.prototype.enable,_g.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:_g,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
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
Eg=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Eg,Eg.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Eg.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Eg.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Eg.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Eg.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Eg.prototype.onReset_=function(e){this.updateClasses_()},Eg.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Eg.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Eg.prototype.checkDisabled=Eg.prototype.checkDisabled,Eg.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Eg.prototype.checkFocus=Eg.prototype.checkFocus,Eg.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Eg.prototype.checkValidity=Eg.prototype.checkValidity,Eg.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Eg.prototype.checkDirty=Eg.prototype.checkDirty,Eg.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Eg.prototype.disable=Eg.prototype.disable,Eg.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Eg.prototype.enable=Eg.prototype.enable,Eg.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Eg.prototype.change=Eg.prototype.change,Eg.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Eg,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var t,n,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;e:{var s={};try{s.__proto__={xb:!0},r=s.xb;break e}catch(Xe){}r=!1}n=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var o=n;function a(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,o)o(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},u="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function l(e,t){if(t){var n=u;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&c(n,e,{configurable:!0,writable:!0,value:t})}}l("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),l("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var h=this;function d(e){return void 0!==e}function f(e){return"string"==typeof e}var p=/^[\w+/_-]+[=]{0,2}$/,g=null;function m(){}function v(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function y(e){return"array"==b(e)}function _(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function w(e){return"function"==b(e)}function I(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var E="closure_uid_"+(1e9*Math.random()>>>0),C=0;function S(e,t,n){return e.call.apply(e.bind,arguments)}function k(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:k).apply(null,arguments)}function R(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function A(e,t){for(var n in t)e[n]=t[n]}var P,N=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var n,i=h;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&d(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function L(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function x(e){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function D(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");x.call(this,n+e[i])}function M(e,t){throw new D("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}L(x,Error),x.prototype.name="CustomError",L(D,x),D.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(f(e))return f(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},F=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=f(e)?e.split(""):e,s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,s=f(e)?e.split(""):e,o=0;o<n;o++)if(o in s){var a=s[o];t.call(void 0,a,o,e)&&(i[r++]=a)}return i},j=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=f(e)?e.split(""):e,s=0;s<n;s++)s in r&&(i[s]=t.call(void 0,r[s],s,e));return i},q=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function $(e,t){return 0<=U(e,t)}function H(e,t){var n;return(n=0<=(t=U(e,t)))&&V(e,t),n}function V(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function W(e,t){!function(e,t){for(var n=f(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&V(e,i)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function K(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function G(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var Y=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},J=/&/g,X=/</g,Q=/>/g,Z=/"/g,ee=/'/g,te=/\x00/g,ne=/[\x00&<>"']/;function ie(e,t){return e<t?-1:e>t?1:0}function re(e){return ne.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(J,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(X,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Z,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(ee,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(te,"&#0;"))),e}function se(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function oe(e){var t,n={};for(t in e)n[t]=e[t];return n}var ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var s=0;s<ae.length;s++)n=ae[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var ue="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function le(){}function he(e){if(e instanceof le)return e;if("function"==typeof e.ha)return e.ha(!1);if(_(e)){var t=0,n=new le;return n.next=function(){for(;;){if(t>=e.length)throw ue;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function de(e){if(_(e))return K(e);e=he(e);var t=[];return function(e,t){if(_(e))try{F(e,t,void 0)}catch(e){if(e!==ue)throw e}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==ue)throw e}}}(e,(function(e){t.push(e)})),t}function fe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof fe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function pe(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];ge(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)ge(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function ge(e,t){return Object.prototype.hasOwnProperty.call(e,t)}le.prototype.next=function(){throw ue},le.prototype.ha=function(){return this},(t=fe.prototype).la=function(){pe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},t.ja=function(){return pe(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0},t.get=function(e,t){return ge(this.g,e)?this.g[e]:t},t.set=function(e,t){ge(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},t.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}},t.ha=function(e){pe(this);var t=0,n=this.j,i=this,r=new le;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw ue;var r=i.a[t++];return e?r:i.g[r]},r};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ve(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var s=e.charCodeAt(t-1);if(!(38!=s&&63!=s||(s=e.charCodeAt(t+r))&&61!=s&&38!=s&&35!=s))return t;t+=r+1}return-1}var be=/#|$/;function ye(e,t){var n=e.search(be),i=ve(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var _e=/[?&]($|#)/;function we(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof we?(this.i=d(t)?t:e.i,Ie(this,e.j),this.A=e.A,this.h=e.h,Ee(this,e.C),this.g=e.g,Ce(this,Fe(e.a)),this.s=e.s):e&&(n=String(e).match(me))?(this.i=!!t,Ie(this,n[1]||"",!0),this.A=ke(n[2]||""),this.h=ke(n[3]||"",!0),Ee(this,n[4]),this.g=ke(n[5]||"",!0),Ce(this,n[6]||"",!0),this.s=ke(n[7]||"")):(this.i=!!t,this.a=new xe(null,this.i))}function Ie(e,t,n){e.j=n?ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ee(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ce(e,t,n){t instanceof xe?(e.a=t,function(e,t){t&&!e.j&&(De(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Me(this,t),Me(this,n),0<e.length&&(this.h=null,this.a.set(Be(this,n),K(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=Te(t,Oe)),e.a=new xe(t,e.i))}function Se(e){return e instanceof we?new we(e):new we(e,void 0)}function ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,n){return f(e)?(e=encodeURI(e).replace(t,Re),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Re(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}we.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,Ae,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Te(t,Ae,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Te(n,"/"==n.charAt(0)?Ne:Pe,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Te(n,Le)),e.join("")};var Ae=/[#\/\?@]/g,Pe=/[#\?:]/g,Ne=/[#\?]/g,Oe=/[#\?@]/g,Le=/#/g;function xe(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function De(e){e.a||(e.a=new fe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Me(e,t){De(e),t=Be(e,t),ge(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,ge((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&pe(e)))}function Ue(e,t){return De(e),t=Be(e,t),ge(e.a.g,t)}function Fe(e){var t=new xe;return t.h=e.h,e.a&&(t.a=new fe(e.a),t.g=e.g),t}function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function je(e){this.a=Se(e)}function qe(e){return e.a.a.get(Ve.Pa)||null}function $e(e,t){t?e.a.a.set(Ve.PROVIDER_ID,t):Me(e.a.a,Ve.PROVIDER_ID)}(t=xe.prototype).add=function(e,t){De(this),this.h=null,e=Be(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},t.clear=function(){this.a=this.h=null,this.g=0},t.forEach=function(e,t){De(this),this.a.forEach((function(n,i){F(n,(function(n){e.call(t,n,i,this)}),this)}),this)},t.ja=function(){De(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},t.la=function(e){De(this);var t=[];if(f(e))Ue(this,e)&&(t=z(t,this.a.get(Be(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=z(t,e[n])}return t},t.set=function(e,t){return De(this),this.h=null,Ue(this,e=Be(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},t.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},t.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.h=e.join("&")},je.prototype.toString=function(){return this.a.toString()};var He,Ve={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var We=h.navigator;if(We){var ze=We.userAgent;if(ze){He=ze;break e}}He=""}function Ke(e){return-1!=He.indexOf(e)}function Ge(){return(Ke("Chrome")||Ke("CriOS"))&&!Ke("Edge")}function Ye(e){return Ye[" "](e),e}Ye[" "]=m;var Je,Xe,Qe=Ke("Opera"),Ze=Ke("Trident")||Ke("MSIE"),et=Ke("Edge"),tt=et||Ze,nt=Ke("Gecko")&&!(-1!=He.toLowerCase().indexOf("webkit")&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),it=-1!=He.toLowerCase().indexOf("webkit")&&!Ke("Edge"),rt=it&&Ke("Mobile"),st=Ke("Macintosh");function ot(){var e=h.document;return e?e.documentMode:void 0}e:{var at="",ct=(Xe=He,nt?/rv:([^\);]+)(\)|;)/.exec(Xe):et?/Edge\/([\d\.]+)/.exec(Xe):Ze?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xe):it?/WebKit\/(\S+)/.exec(Xe):Qe?/(?:Version)[ \/]?(\S+)/.exec(Xe):void 0);if(ct&&(at=ct?ct[1]:""),Ze){var ut=ot();if(null!=ut&&ut>parseFloat(at)){Je=String(ut);break e}}Je=at}var lt,ht={};function dt(e){return function(e,t){var n=ht;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=Y(String(Je)).split("."),i=Y(String(e)).split("."),r=Math.max(n.length,i.length),s=0;0==t&&s<r;s++){var o=n[s]||"",a=i[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=ie(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||ie(0==o[2].length,0==a[2].length)||ie(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t}))}var ft=h.document;function pt(e,t){this.a=e===mt&&t||"",this.g=gt}lt=ft&&Ze?ot()||("CSS1Compat"==ft.compatMode?parseInt(Je,10):5):void 0,pt.prototype.ma=!0,pt.prototype.ka=function(){return this.a},pt.prototype.toString=function(){return"Const{"+this.a+"}"};var gt={},mt={};function vt(){this.a="",this.h=yt}function bt(e){return e instanceof vt&&e.constructor===vt&&e.h===yt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}vt.prototype.ma=!0,vt.prototype.ka=function(){return this.a.toString()},vt.prototype.g=function(){return 1},vt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var yt={};function _t(){this.a="",this.h=St}function wt(e){return e instanceof _t&&e.constructor===_t&&e.h===St?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}_t.prototype.ma=!0,_t.prototype.ka=function(){return this.a.toString()},_t.prototype.g=function(){return 1},_t.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var It=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Et(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),kt(e))}function Ct(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),kt(e))}var St={};function kt(e){var t=new _t;return t.a=e,t}function Tt(){this.a="",this.g=Rt}kt("about:blank"),Tt.prototype.ma=!0;var Rt={};function At(){this.a="",this.j=Nt,this.h=null}function Pt(e){return e instanceof At&&e.constructor===At&&e.j===Nt?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}Tt.prototype.ka=function(){return this.a},Tt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},At.prototype.g=function(){return this.h},At.prototype.ma=!0,At.prototype.ka=function(){return this.a.toString()},At.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Nt={};function Ot(e,t){var n=new At;return n.a=e,n.h=t,n}Ot("<!DOCTYPE html>",0);var Lt=Ot("",0);Ot("<br>",0);var xt,Dt,Mt=(Dt=!1,function(){return Dt||(xt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Pt(Lt),!t.parentElement)}(),Dt=!0),xt});function Ut(e,t){t=t instanceof _t?t:Ct(t),e.assign(wt(t))}function Ft(e,t){this.a=d(e)?e:0,this.g=d(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function jt(e){return e?new Jt(Kt(e)):P||(P=new Jt)}function qt(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Ht(document,e,t)}function $t(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Ht(n,e,t)[0]||null}return e||null}function Ht(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(n=i=0;e=r[n];n++){var o=e.className;"function"==typeof o.split&&$(o.split(/\s+/),t)&&(s[i++]=e)}return s.length=i,s}return r}Ft.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ft.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ft.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ft.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(t=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},t.aspectRatio=function(){return this.width/this.height},t.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},t.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},t.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Vt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Wt(e){return e.scrollingElement?e.scrollingElement:(it||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function zt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Kt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Gt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(Kt(e).createTextNode(String(t)))}}function Yt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||f(e.className)&&$(e.className.split(/\s+/),t)})):null}function Jt(e){this.a=e||h.document||document}Jt.prototype.N=function(){return f(void 0)?this.a.getElementById(void 0):void 0};var Xt={Fc:!0},Qt={Hc:!0},Zt={Ec:!0},en={Gc:!0};function tn(){throw Error("Do not instantiate directly")}function nn(e,t,n,i){if(e=e(t||sn,void 0,n),i=(i||jt()).a.createElement("DIV"),(e=function(e){if(!I(e))return re(String(e));if(e instanceof tn){if(e.fa===Xt)return e.content;if(e.fa===en)return re(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(rn),e=Ot(e,null),Mt())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Pt(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}tn.prototype.va=null,tn.prototype.toString=function(){return this.content};var rn=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,sn={};function on(){tn.call(this)}function an(e){return null!=e&&e.fa===Xt?e:e instanceof At?hn(Pt(e).toString(),e.g()):hn(re(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function cn(){tn.call(this)}function un(e,t){this.content=String(e),this.va=null!=t?t:null}function ln(e){return new un(e,void 0)}L(on,tn),on.prototype.fa=Xt,L(cn,tn),cn.prototype.fa=Qt,cn.prototype.va=1,L(un,tn),un.prototype.fa=en;var hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(on),dn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(cn);function fn(e){return(e=String(e))?new un(e,void 0):""}var pn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(on);function gn(e){return null!=e&&e.fa===Xt?String(String(e.content).replace(kn,"").replace(Tn,"&lt;")).replace(In,yn):re(String(e))}function mn(e){return null!=e&&e.fa===Qt?e=String(e).replace(En,wn):e instanceof _t?e=String(wt(e).toString()).replace(En,wn):(e=String(e),Sn.test(e)?e=e.replace(En,wn):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function vn(e){return null!=e&&e.fa===Zt?e=e.content:null==e?e="":e instanceof Tt?e instanceof Tt&&e.constructor===Tt&&e.g===Rt?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),Cn.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var bn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function yn(e){return bn[e]}var _n={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function wn(e){return _n[e]}var In=/[\x00\x22\x27\x3c\x3e]/g,En=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Sn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,kn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Tn=/</g;function Rn(){return ln("Enter a valid phone number")}function An(){return ln("Unable to send password reset code to specified email")}function Pn(){return ln("Something went wrong. Please try again.")}function Nn(){return ln("This email already exists without any means of sign-in. Please reset the password to recover.")}function On(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return ln(t)}function Ln(){return ln("Please login again to perform this operation")}function xn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Dn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Pn();e=ln(e).toString()}this.message=e||"",this.credential=n||null}a(xn,Error),xn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Dn="firebaseui/";function Mn(){0!=Un&&(Fn[this[E]||(this[E]=++C)]=this),this.T=this.T,this.C=this.C}var Un=0,Fn={};function Bn(e,t){e.T?d(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(d(void 0)?T(t,void 0):t))}function jn(e){e&&"function"==typeof e.m&&e.m()}Mn.prototype.T=!1,Mn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Un)){var e=this[E]||(this[E]=++C);if(0!=Un&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Fn[e]}},Mn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var qn=Object.freeze||function(e){return e},$n=!Ze||9<=Number(lt),Hn=Ze&&!dt("9"),Vn=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",m,t),h.removeEventListener("test",m,t)}catch(e){}return e}();function Wn(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function zn(e,t){if(Wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nt){e:{try{Ye(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=f(e.pointerType)?e.pointerType:Kn[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}Wn.prototype.stopPropagation=function(){this.h=!0},Wn.prototype.preventDefault=function(){this.qb=!1},L(zn,Wn);var Kn=qn({2:"touch",3:"pen",4:"mouse"});zn.prototype.stopPropagation=function(){zn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},zn.prototype.preventDefault=function(){zn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Hn)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Gn="closure_listenable_"+(1e6*Math.random()|0),Yn=0;function Jn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++Yn,this.sa=this.Ia=!1}function Xn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Qn(e){this.src=e,this.a={},this.g=0}function Zn(e,t){var n=t.type;n in e.a&&H(e.a[n],t)&&(Xn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ei(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!n&&s.La==i)return r}return-1}Qn.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.g++);var o=ei(e,t,i,r);return-1<o?(t=e[o],n||(t.Ia=!1)):((t=new Jn(t,this.src,s,!!i,r)).Ia=n,e.push(t)),t};var ti="closure_lm_"+(1e6*Math.random()|0),ni={};function ii(e,t,n,i,r){if(i&&i.once)return si(e,t,n,i,r);if(y(t)){for(var s=0;s<t.length;s++)ii(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!1,I(i)?!!i.capture:!!i,r):ri(e,t,n,!1,i,r)}function ri(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=I(r)?!!r.capture:!!r,a=di(e);if(a||(e[ti]=a=new Qn(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){var e=hi,t=$n?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Vn||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ci(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function si(e,t,n,i,r){if(y(t)){for(var s=0;s<t.length;s++)si(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!0,I(i)?!!i.capture:!!i,r):ri(e,t,n,!0,i,r)}function oi(e,t,n,i,r){if(y(t))for(var s=0;s<t.length;s++)oi(e,t[s],n,i,r);else i=I(i)?!!i.capture:!!i,n=pi(n),e&&e[Gn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ei(s=e.a[t],n,i,r))&&(Xn(s[n]),V(s,n),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=di(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ei(t,n,i,r)),(n=-1<e?t[e]:null)&&ai(n))}function ai(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Gn])Zn(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ci(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=di(t))?(Zn(n,e),0==n.g&&(n.src=null,t[ti]=null)):Xn(e)}}}function ci(e){return e in ni?ni[e]:ni[e]="on"+e}function ui(e,t,n,i){var r=!0;if((e=di(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==n&&!s.sa&&(s=li(s,i),r=r&&!1!==s)}return r}function li(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ai(e),n.call(i,t)}function hi(e,t){if(e.sa)return!0;if(!$n){if(!t)e:{t=["window","event"];for(var n=h,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new zn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var s=ui(i[r],e,!0,t);n=n&&s}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],s=ui(i[r],e,!1,t),n=n&&s}return n}return li(e,new zn(t,this))}function di(e){return(e=e[ti])instanceof Qn?e:null}var fi="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(e){return w(e)?e:(e[fi]||(e[fi]=function(t){return e.handleEvent(t)}),e[fi])}function gi(){Mn.call(this),this.J=new Qn(this),this.wb=this,this.Ha=null}function mi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,f(t))t=new Wn(t,e);else if(t instanceof Wn)t.target=t.target||e;else{var r=t;ce(t=new Wn(i,e),r)}if(r=!0,n)for(var s=n.length-1;!t.h&&0<=s;s--){var o=t.g=n[s];r=vi(o,i,!0,t)&&r}if(t.h||(r=vi(o=t.g=e,i,!0,t)&&r,t.h||(r=vi(o,i,!1,t)&&r)),n)for(s=0;!t.h&&s<n.length;s++)r=vi(o=t.g=n[s],i,!1,t)&&r;return r}function vi(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.sa&&o.capture==n){var a=o.listener,c=o.La||o.src;o.Ia&&Zn(e.J,o),r=!1!==a.call(c,i)&&r}}return r&&0!=i.qb}L(gi,Mn),gi.prototype[Gn]=!0,gi.prototype.Za=function(e){this.Ha=e},gi.prototype.removeEventListener=function(e,t,n,i){oi(this,e,t,n,i)},gi.prototype.o=function(){if(gi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Xn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var bi={},yi=0;function _i(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ii(e),bi[e]&&bi[e].length)for(var n=0;n<bi[e].length;n++)mi(bi[e][n],t)}function wi(e){var t=Ii(e.N());bi[t]&&bi[t].length&&(function(e,t){e:{for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&V(e,t)}(bi[t],(function(t){return t==e})),bi[t].length||delete bi[t])}function Ii(e){return void 0===e.a&&(e.a=yi,yi++),e.a}function Ei(e){if(!e)throw Error("Event target element must be provided!");gi.call(this),this.a=e}function Ci(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Si(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function ki(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Ti(){this.g=this.a=null}a(Ei,gi),Ei.prototype.N=function(){return this.a},Ei.prototype.register=function(){var e=Ii(this.N());bi[e]?$(bi[e],this)||bi[e].push(this):bi[e]=[this]},Si.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ri,Ai,Pi=new Si((function(){return new Oi}),(function(e){e.reset()}));function Ni(){var e=Mi,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Oi(){this.next=this.g=this.a=null}function Li(e){h.setTimeout((function(){throw e}),0)}function xi(e,t){Ai||function(){if(h.Promise&&h.Promise.resolve){var e=h.Promise.resolve(void 0);Ai=function(){e.then(Ui)}}else Ai=function(){var e=Ui;!w(h.setImmediate)||h.Window&&h.Window.prototype&&!Ke("Edge")&&h.Window.prototype.setImmediate==h.setImmediate?(Ri||(Ri=function(){var e=h.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Ke("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=T((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!Ke("Trident")&&!Ke("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(d(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){h.setTimeout(e,0)}}()),Ri(e)):h.setImmediate(e)}}(),Di||(Ai(),Di=!0),Mi.add(e,t)}Ti.prototype.add=function(e,t){var n=Pi.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Oi.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Oi.prototype.reset=function(){this.next=this.g=this.a=null};var Di=!1,Mi=new Ti;function Ui(){for(var e;e=Ni();){try{e.a.call(e.g)}catch(e){Li(e)}ki(Pi,e)}Di=!1}function Fi(e){if(this.a=Bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=m)try{var t=this;e.call(void 0,(function(e){Ji(t,ji,e)}),(function(e){if(!(e instanceof nr))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Ji(t,qi,e)}))}catch(e){Ji(this,qi,e)}}var Bi=0,ji=2,qi=3;function $i(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}$i.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Hi=new Si((function(){return new $i}),(function(e){e.reset()}));function Vi(e,t,n){var i=Hi.get();return i.s=e,i.g=t,i.j=n,i}function Wi(e){if(e instanceof Fi)return e;var t=new Fi(m);return Ji(t,ji,e),t}function zi(e){return new Fi((function(t,n){n(e)}))}function Ki(e,t){if(e.a==Bi)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,s=null,o=n.g;o&&(o.h||(i++,o.a==e&&(r=o),!(r&&1<i)));o=o.next)r||(s=o);r&&(n.a==Bi&&1==i?Ki(n,t):(s?((i=s).next==n.j&&(n.j=i),i.next=i.next.next):Qi(n),Zi(n,r,qi,t)))}e.h=null}else Ji(e,qi,t)}function Gi(e,t){e.g||e.a!=ji&&e.a!=qi||Xi(e),e.j?e.j.next=t:e.g=t,e.j=t}function Yi(e,t,n,i){var r=Vi(null,null,null);return r.a=new Fi((function(e,s){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){s(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!d(r)&&t instanceof nr?s(t):e(r)}catch(e){s(e)}}:s})),r.a.h=e,Gi(e,r),r.a}function Ji(e,t,n){if(e.a==Bi){e===n&&(t=qi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,s=e.ic;if(i instanceof Fi){Gi(i,Vi(r||m,s||null,e));var o=!0}else if(Ci(i))i.then(r,s,e),o=!0;else{if(I(i))try{var a=i.then;if(w(a)){!function(e,t,n,i,r){function s(e){a||(a=!0,i.call(r,e))}function o(e){a||(a=!0,n.call(r,e))}var a=!1;try{t.call(e,o,s)}catch(e){s(e)}}(i,a,r,s,e),o=!0;break e}}catch(t){s.call(e,t),o=!0;break e}o=!1}}o||(e.A=n,e.a=t,e.h=null,Xi(e),t!=qi||n instanceof nr||function(e,t){e.s=!0,xi((function(){e.s&&tr.call(null,t)}))}(e,n))}}function Xi(e){e.i||(e.i=!0,xi(e.Hb,e))}function Qi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Zi(e,t,n,i){if(n==qi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,er(t,n,i);else try{t.h?t.s.call(t.j):er(t,n,i)}catch(e){tr.call(null,e)}ki(Hi,t)}function er(e,t,n){t==ji?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}Fi.prototype.then=function(e,t,n){return Yi(this,w(e)?e:null,w(t)?t:null,n)},Fi.prototype.$goog_Thenable=!0,(t=Fi.prototype).fc=function(e,t){return(e=Vi(e,e,t)).h=!0,Gi(this,e),this},t.Ca=function(e,t){return Yi(this,null,e,t)},t.cancel=function(e){this.a==Bi&&xi((function(){Ki(this,new nr(e))}),this)},t.hc=function(e){this.a=Bi,Ji(this,ji,e)},t.ic=function(e){this.a=Bi,Ji(this,qi,e)},t.Hb=function(){for(var e;e=Qi(this);)Zi(this,e,this.a,this.A);this.i=!1};var tr=Li;function nr(e){x.call(this,e)}function ir(e,t,n){t||(t={}),n=n||window;var i=e instanceof _t?e:Et(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return(Ke("iPhone")&&!Ke("iPod")&&!Ke("iPad")||Ke("iPad")||Ke("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(s=n.document.createElement("A"),i=i instanceof _t?i:Ct(i),s.href=wt(i),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),s.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,s),t=wt(i).toString(),n&&(tt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Ot('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+re(t)+'">',null),n.document.write(Pt(t)),n.document.close())):(n=n.open(wt(i).toString(),e,s))&&t.noopener&&(n.opener=null),n}function rr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){ir(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=I(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ar(){return window.location.href}function cr(e){var t=yr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function ur(e,t,n){e.a=!0,e.h=n,e.j=!t,fr(e)}function lr(e){if(e.a){if(!e.J)throw new pr(e);e.J=!1}}function hr(e,t,n){e.s.push([t,n,void 0]),e.a&&fr(e)}function dr(e){return q(e.s,(function(e){return w(e[1])}))}function fr(e){if(e.i&&e.a&&dr(e)){var t=e.i,n=vr[t];n&&(h.clearTimeout(n.a),delete vr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],o=r[1];if(r=r[2],s=e.j?o:s)try{var a=s.call(r||e.O,t);d(a)&&(e.j=e.j&&(a==t||a instanceof Error),e.h=t=a),(Ci(t)||"function"==typeof h.Promise&&t instanceof h.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,dr(e)||(n=!0)}}e.h=t,i&&(a=T(e.L,e,!0),i=T(e.L,e,!1),t instanceof cr?(hr(t,a,i),t.l=!0):t.then(a,i)),n&&(t=new mr(t),vr[t.a]=t,e.i=t.a)}function pr(){x.call(this)}function gr(){x.call(this)}function mr(e){this.a=h.setTimeout(T(this.h,this),0),this.g=e}L(nr,x),nr.prototype.name="cancel",cr.prototype.cancel=function(e){if(this.a)this.h instanceof cr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new gr(this),lr(this),ur(this,!1,e))}},cr.prototype.L=function(e,t){this.A=!1,ur(this,e,t)},cr.prototype.callback=function(e){lr(this),ur(this,!0,e)},cr.prototype.then=function(e,t,n){var i,r,s=new Fi((function(e,t){i=e,r=t}));return hr(this,i,(function(e){e instanceof gr?s.cancel():r(e)})),s.then(e,t,n)},cr.prototype.$goog_Thenable=!0,L(pr,x),pr.prototype.message="Deferred has already fired",pr.prototype.name="AlreadyCalledError",L(gr,x),gr.prototype.message="Deferred was canceled",gr.prototype.name="CanceledError",mr.prototype.h=function(){throw delete vr[this.a],this.g};var vr={};function br(e){var t={},n=t.document||document,i=bt(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},o=new cr(s),a=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(a=window.setTimeout((function(){_r(r,!0);var e=new Er(Ir,"Timeout reached for loading script "+i);lr(o),ur(o,!1,e)}),c),s.sb=a),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(_r(r,t.xc||!1,a),o.callback(null))},r.onerror=function(){_r(r,!0,a);var e=new Er(wr,"Error while loading script "+i);lr(o),ur(o,!1,e)},ce(s=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){se(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:Vt.hasOwnProperty(n)?e.setAttribute(Vt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,s),function(e,t){e.src=bt(t),null===g&&(g=(t=(t=h.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&p.test(t)?t:""),(t=g)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),o}function yr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&_r(e,!0,this.sb)}}function _r(e,t,n){null!=n&&h.clearTimeout(n),e.onload=m,e.onerror=m,e.onreadystatechange=m,t&&window.setTimeout((function(){zt(e)}),0)}var wr=0,Ir=1;function Er(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),x.call(this,n),this.code=e}function Cr(){return h.google&&h.google.accounts&&h.google.accounts.id||null}function Sr(e){this.a=e||Cr(),this.h=!1,this.g=null}function kr(e,t,n){return e.a&&t?(e.h=!0,new Fi((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):Wi(t?Rr.Xa().load().then((function(){return e.a=Cr(),kr(e,t,n)})).Ca((function(){return null})):null)}L(Er,x),Sr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},v(Sr);var Tr=new pt(mt,"https://accounts.google.com/gsi/client");function Rr(){this.a=null}function Ar(e,t){this.a=e,this.g=t||function(e){throw e}}function Pr(e,t,n){this.reset(e,t,n,void 0,void 0)}Rr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Tr;e instanceof pt&&e.constructor===pt&&e.g===gt?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new vt;return t.a=e,t}();return Cr()?Wi():this.a=function(){var e=null;return new Fi((function(t){"complete"==h.document.readyState?t():(e=function(){t()},si(window,"load",e))})).Ca((function(t){throw oi(window,"load",e),t}))}().then((function(){if(!Cr())return new Fi((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);h.onGoogleLibraryLoad=function(){clearTimeout(r),n()},Wi(br(t)).then((function(){Cr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},v(Rr),Ar.prototype.confirm=function(e){return Wi(this.a.confirm(e)).Ca(this.g)},Pr.prototype.a=null;function Nr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Or(e,t){this.name=e,this.value=t}Pr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||N(),this.j=e,this.s=t,this.g=n,delete this.a},Or.prototype.toString=function(){return this.name};var Lr=new Or("SEVERE",1e3),xr=new Or("WARNING",900),Dr=new Or("CONFIG",700);function Mr(e){return e.j?e.j:e.g?Mr(e.g):(M("Root logger has no level set."),null)}Nr.prototype.log=function(e,t,n){if(e.value>=Mr(this).value)for(w(t)&&(t=t()),e=new Pr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var s=0;t=i.a[s];s++)t(r);n=n.g}};var Ur={},Fr=null;function Br(){Fr||(Fr=new Nr(""),Ur[""]=Fr,Fr.j=Dr)}function jr(){this.a=N()}var qr=null;function $r(e){this.j=e||"",qr||(qr=new jr),this.s=qr}function Hr(e){return 10>e?"0"+e:String(e)}function Vr(e){$r.call(this,e)}function Wr(){this.s=T(this.h,this),this.a=new Vr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}jr.prototype.set=function(e){this.a=e},jr.prototype.reset=function(){this.set(N())},jr.prototype.get=function(){return this.a},$r.prototype.a=!0,$r.prototype.g=!0,$r.prototype.h=!1,L(Vr,$r),Wr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",Hr(i.getFullYear()-2e3)+Hr(i.getMonth()+1)+Hr(i.getDate())+" "+Hr(i.getHours())+":"+Hr(i.getMinutes())+":"+Hr(i.getSeconds())+"."+Hr(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if(Kr)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}(Kr,function(e){if(e){if(e.value>=Lr.value)return"error";if(e.value>=xr.value)return"warn";if(e.value>=Dr.value)return"log"}return"debug"}(e.j),t,e.a)}};var zr,Kr=h.console;function Gr(e,t){zr&&zr.log(Lr,e,t)}zr=function e(t){var n;if(Br(),!(n=Ur[t])){n=new Nr(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Ur[t]=n}return n}("firebaseui");var Yr=new Wr;if(1!=Yr.g){var Jr;Br(),Jr=Fr;var Xr=Yr.s;Jr.a||(Jr.a=[]),Jr.a.push(Xr),Yr.g=!0}function Qr(e){zr&&zr.log(xr,e,void 0)}function Zr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function es(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],s=0;s<e.length;s++)-1==(t=(n=Y(e[s])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(t=Zr.prototype).set=function(e,t,n,i,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');d(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",s=s?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(N()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+s},t.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(0==(n=Y(r[s])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},t.ja=function(){return es(this).keys},t.la=function(){return es(this).values},t.clear=function(){for(var e=es(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var ts=new Zr;function ns(){}function is(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function rs(e,t){this.g=e,this.a=t||null}function ss(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function os(e){if(e&&e.email){var t=e.credential&&Fl.auth.AuthCredential.fromJSON(e.credential);return new rs(e.email,t)}return null}function as(e){this.a=e||null}function cs(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function us(e){return j(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function ls(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(hs*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<hs*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,bs(t),t[0]^=ws[e/this.g][0],t[1]^=ws[e/this.g][1],t[2]^=ws[e/this.g][2],t[3]^=ws[e/this.g][3]}else 6<this.g&&4==e%this.g&&bs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}a(is,ns),is.prototype.set=function(e,t){ts.set(e,t,this.h,this.g,this.a,this.j)},is.prototype.get=function(e){return ts.get(e)||null},is.prototype.ra=function(e){var t=this.g,n=this.a;ts.get(e),ts.set(e,"",0,t,n)},ls.prototype.A=16;var hs=ls.prototype.A/4;function ds(e,t){for(var n,i=0;i<hs;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function fs(e){for(var t=[],n=0;n<hs;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function ps(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function gs(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function ms(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%hs]}function vs(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%hs]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function bs(e){e[0]=ys[e[0]],e[1]=ys[e[1]],e[2]=ys[e[2]],e[3]=ys[e[3]]}var ys=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],_s=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ws=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Is=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Es=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Cs=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ss=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],ks=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ts=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Rs(e,t){e=new ls(Ps(e));for(var n,i=(t=cs(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var s=0;s<n;s++)i.push(0);for(ds(n=e,i),ps(n,0),i=1;i<n.j;++i){gs(n,ys),ms(n),s=n.h;for(var o=n.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Is[o[0]]^Es[o[1]]^o[2]^o[3],s[1][a]=o[0]^Is[o[1]]^Es[o[2]]^o[3],s[2][a]=o[0]^o[1]^Is[o[2]]^Es[o[3]],s[3][a]=Es[o[0]]^o[1]^o[2]^Is[o[3]];ps(n,i)}gs(n,ys),ms(n),ps(n,n.j),r+=us(fs(n)),i=t.splice(0,16)}return r}function As(e,t){e=new ls(Ps(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(ds(i=e,r),ps(i,i.j),r=1;r<i.j;++r){vs(i),gs(i,_s),ps(i,i.j-r);for(var s=i.h,o=i.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Ts[o[0]]^Ss[o[1]]^ks[o[2]]^Cs[o[3]],s[1][a]=Cs[o[0]]^Ts[o[1]]^Ss[o[2]]^ks[o[3]],s[2][a]=ks[o[0]]^Cs[o[1]]^Ts[o[2]]^Ss[o[3]],s[3][a]=Ss[o[0]]^ks[o[1]]^Cs[o[2]]^Ts[o[3]]}if(vs(i),gs(i,_s),ps(i,0),8192>=(i=fs(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",s=0;s<i.length;s+=8192)r+=String.fromCharCode.apply(null,G(i,s,s+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ps(e){for(var t=32-(e=cs(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Ns(e){var t=[];return Ls(new Os,e,t),t.join("")}function Os(){}function Ls(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(y(t)){var i=t;t=i.length,n.push("[");for(var r="",s=0;s<t;s++)n.push(r),Ls(e,i[s],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(s=t[i])&&(n.push(r),Ms(i,n),n.push(":"),Ls(e,s,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ms(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var xs={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ds=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ms(e,t){t.push('"',e.replace(Ds,(function(e){var t=xs[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),xs[e]=t),t})),'"')}function Us(e){this.a=e}function Fs(){}function Bs(e){this.a=e}function js(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function qs(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function $s(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Hs(e,t){this.g=e,this.a=t+"::"}Us.prototype.set=function(e,t){d(t)?this.a.set(e,Ns(t)):this.a.ra(e)},Us.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},L(Fs,ns),Fs.prototype.clear=function(){var e=de(this.ha(!0)),t=this;F(e,(function(e){t.ra(e)}))},L(Bs,Fs),(t=Bs.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},t.get=function(e){if(!f(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},t.ra=function(e){this.a.removeItem(e)},t.ha=function(e){var t=0,n=this.a,i=new le;return i.next=function(){if(t>=n.length)throw ue;var i=n.key(t++);if(e)return i;if(!f(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},t.clear=function(){this.a.clear()},t.key=function(e){return this.a.key(e)},L(qs,Bs),L($s,Bs),L(Hs,Fs),Hs.prototype.set=function(e,t){this.g.set(this.a+e,t)},Hs.prototype.get=function(e){return this.g.get(this.a+e)},Hs.prototype.ra=function(e){this.g.ra(this.a+e)},Hs.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new le;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},js(new qs);var Vs=new $s,Ws=new Us(js(Vs)?new Hs(Vs,"firebaseui"):null),zs={name:"pendingEmailCredential",storage:Ws},Ks={name:"redirectStatus",storage:Ws},Gs={name:"redirectUrl",storage:Ws},Ys={name:"emailForSignIn",storage:new Us(new is(3600,"/"))},Js={name:"pendingEncryptedCredential",storage:new Us(new is(3600,"/"))};function Xs(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qs(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Zs(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function eo(e){return Xs(Gs,e)||null}function to(e){return os(e=Xs(zs,e)||null)}function no(e){Qs(zs,e)}function io(e,t){Zs(zs,ss(e),t)}function ro(e){return(e=Xs(Ks,e)||null)&&void 0!==e.tenantId?new as(e.tenantId):null}function so(){this.W={}}function oo(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function ao(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function co(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function uo(){this.g=void 0,this.a={}}function lo(e,t,n,i){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new uo),e=e.a[s]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function ho(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)ho(e.a[n],t)}function fo(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)fo(e.a[i],t+i,n)}function po(e){for(this.a=e,this.g=new uo,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function go(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var s in n)if(n.hasOwnProperty(s))return n[s];return[]}function mo(e){for(var t=0;t<_o.length;t++)if(_o[t].c===e)return _o[t];return null}function vo(e){e=e.toUpperCase();for(var t=[],n=0;n<_o.length;n++)_o[n].f===e&&t.push(_o[n]);return t}function bo(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<_o.length;n++)_o[n].b==e&&t.push(_o[n]);e=t}else e=vo(e);return e}function yo(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}so.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(t=uo.prototype).set=function(e,t){lo(this,e,t,!1)},t.add=function(e,t){lo(this,e,t,!0)},t.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},t.la=function(){var e=[];return ho(this,e),e},t.ja=function(){var e=[];return fo(this,"",e),e},t.clear=function(){this.a={},this.g=void 0};var _o=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];yo(_o);var wo=new po(_o);function Io(e,t){this.a=e,this.Aa=t}function Eo(e){e=Y(e);var t=go(wo,e);return 0<t.length?new Io("1"==t[0].b?"1-US-0":t[0].c,Y(e.substr(t[0].b.length+1))):null}function Co(e){var t=mo(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function So(e,t){for(var n=0;n<e.length;n++)if(!$(ko,e[n])&&(null!==To&&e[n]in To||$(t,e[n])))return e[n];return null}var ko=["emailLink","password","phone"],To={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Ro(){this.a=new so,oo(this.a,"autoUpgradeAnonymousUsers"),oo(this.a,"callbacks"),oo(this.a,"credentialHelper",ia),oo(this.a,"immediateFederatedRedirect",!1),oo(this.a,"popupMode",!1),oo(this.a,"privacyPolicyUrl"),oo(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),oo(this.a,"queryParameterForWidgetMode","mode"),oo(this.a,"signInFlow"),oo(this.a,"signInOptions"),oo(this.a,"signInSuccessUrl"),oo(this.a,"siteName"),oo(this.a,"tosUrl"),oo(this.a,"widgetUrl"),oo(this.a,"adminRestrictedOperation")}function Ao(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Jo(e)&&Gr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Po(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=I(i)?i:{provider:i}).provider&&t.push(i)}return t}function No(e,t){e=Po(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function Oo(e){return Po(e).map((function(e){return e.provider}))}function Lo(e,t){e=xo(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function xo(e){return Po(e).map((function(e){if(To[e.provider]||$(ca,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Do(e){var t,n=No(e,Fl.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),ra)if(ra[i]===e){var i=ra[i];break e}i=ia}t=i===na}return t&&n.clientId||null}function Mo(e){return!!((e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Uo(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Fo(e,t){return e=(e=No(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Bo(e,t){return I(e=(e=No(e,t))&&e.customParameters)?(e=oe(e),t===Fl.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===Fl.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function jo(e){if(!(e=No(e,Fl.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return _o;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var r=bo(t[i]),s=0;s<r.length;s++)n[r[s].c]=r[s];for(var o in n)n.hasOwnProperty(o)&&e.push(n[o])}else{for(o={},t=0;t<n.length;t++)for(r=bo(n[t]),i=0;i<r.length;i++)o[r[i].c]=r[i];for(r=0;r<_o.length;r++)null!==o&&_o[r].c in o||e.push(_o[r])}return e}function qo(e){return co(e.a,"queryParameterForWidgetMode")}function $o(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Ho(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function Vo(e){return!(e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Wo(e){return!(!(e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==Fl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function zo(e){var t=!!e.a.get("immediateFederatedRedirect"),n=Oo(e);return e=Ko(e),t&&1==n.length&&!$(ko,n[0])&&e==sa}function Ko(e){for(var t in e=e.a.get("signInFlow"),oa)if(oa[t]==e)return oa[t];return sa}function Go(e){return Xo(e).signInSuccess||null}function Yo(e){return Xo(e).signInSuccessWithAuthResult||null}function Jo(e){return Xo(e).signInFailure||null}function Xo(e){return e.a.get("callbacks")||{}}var Qo,Zo,ea,ta,na="googleyolo",ia="none",ra={nc:na,NONE:ia},sa="redirect",oa={qc:"popup",rc:sa},aa={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ca=["anonymous"],ua=["sitekey","tabindex","callback","expired-callback"],la={};function ha(e,t,n,i){la[e].apply(null,Array.prototype.slice.call(arguments,1))}function da(e){return e.classList?e.classList:f(e=e.className)&&e.match(/\S+/g)||[]}function fa(e,t){return e.classList?e.classList.contains(t):$(da(e),t)}function pa(e,t){e.classList?e.classList.add(t):fa(e,t)||(e.className+=0<e.className.length?" "+t:t)}function ga(e,t){e.classList?e.classList.remove(t):fa(e,t)&&(e.className=B(da(e),(function(e){return e!=t})).join(" "))}function ma(e){var t=e.type;switch(f(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function va(e,t){var n=e.type;switch(f(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,f(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(f(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,s=0;r=t[s];s++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function ba(e,t,n,i,r,s){if(it&&!dt("525"))return!0;if(st&&r)return ya(e);if(r&&!i)return!1;if(!nt&&("number"==typeof t&&(t=_a(t)),(!n||st)&&(17==t||18==t||st&&91==t)||st&&16==t&&(i||s)))return!1;if((it||et)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Ze&&i&&t==e)return!1;switch(e){case 13:return!nt||!s&&!r&&!(n&&i);case 27:return!(it||et||nt)}return(!nt||!(i||r||s))&&ya(e)}function ya(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(it||et)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return nt;default:return!1}}function _a(e){if(nt)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(st&&it&&93===e)e=91;return e}function wa(e){gi.call(this),this.a=e,ii(e,"keydown",this.g,!1,this),ii(e,"click",this.h,!1,this)}function Ia(e,t){var n=new Ca(t);if(mi(e,n)){n=new Ea(t);try{mi(e,n)}finally{t.stopPropagation()}}}function Ea(e){zn.call(this,e.a),this.type="action"}function Ca(e){zn.call(this,e.a),this.type="beforeaction"}function Sa(e){gi.call(this),this.a=e,e=Ze?"focusout":"blur",this.g=ii(this.a,Ze?"focusin":"focus",this,!Ze),this.h=ii(this.a,e,this,!Ze)}function ka(e,t){gi.call(this),this.g=e||1,this.a=t||h,this.h=T(this.gc,this),this.j=N()}function Ta(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Ra(e){Mn.call(this),this.g=e,this.a={}}L(wa,gi),wa.prototype.g=function(e){(13==e.keyCode||it&&3==e.keyCode)&&Ia(this,e)},wa.prototype.h=function(e){Ia(this,e)},wa.prototype.o=function(){wa.K.o.call(this),oi(this.a,"keydown",this.g,!1,this),oi(this.a,"click",this.h,!1,this),delete this.a},L(Ea,zn),L(Ca,zn),L(Sa,gi),Sa.prototype.handleEvent=function(e){var t=new zn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",mi(this,t)},Sa.prototype.o=function(){Sa.K.o.call(this),ai(this.g),ai(this.h),delete this.a},L(ka,gi),(t=ka.prototype).Ka=!1,t.aa=null,t.gc=function(){if(this.Ka){var e=N()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),mi(this,"tick"),this.Ka&&(Ta(this),this.start()))}},t.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=N())},t.o=function(){ka.K.o.call(this),Ta(this),delete this.a},L(Ra,Mn);var Aa=[];function Pa(e,t,n,i){y(n)||(n&&(Aa[0]=n.toString()),n=Aa);for(var r=0;r<n.length;r++){var s=ii(t,n[r],i||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Na(e){se(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ai(e)}),e),e.a={}}function Oa(e){gi.call(this),this.a=null,this.g=e,e=Ze||et||it&&!dt("531")&&"TEXTAREA"==e.tagName,this.h=new Ra(this),Pa(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function La(e){null!=e.a&&(h.clearTimeout(e.a),e.a=null)}function xa(e){return(e=new zn(e.a)).type="input",e}function Da(e,t){gi.call(this),e&&(this.Oa&&ja(this),this.qa=e,this.Na=ii(this.qa,"keypress",this,t),this.Ya=ii(this.qa,"keydown",this.Jb,t,this),this.Oa=ii(this.qa,"keyup",this.Kb,t,this))}Ra.prototype.o=function(){Ra.K.o.call(this),Na(this)},Ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},L(Oa,gi),Oa.prototype.handleEvent=function(e){if("input"==e.type)Ze&&dt(10)&&0==e.keyCode&&0==e.j||(La(this),mi(this,xa(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(ya(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!nt;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Ze&&229==e.keyCode&&(t=null);var n=xa(e);La(this),this.a=function(e,t){if(w(e))t&&(e=T(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(0)?-1:h.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&mi(this,n)}),this)}},Oa.prototype.o=function(){Oa.K.o.call(this),this.h.m(),La(this),delete this.g},L(Da,gi),(t=Da.prototype).qa=null,t.Na=null,t.Ya=null,t.Oa=null,t.R=-1,t.X=-1,t.Ua=!1;var Ma={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ua={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Fa=!it||dt("525"),Ba=st&&nt;function ja(e){e.Na&&(ai(e.Na),ai(e.Ya),ai(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function qa(e,t,n,i){zn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function $a(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Ha(e,t){var n=Kt(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Va(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Ze&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Wa(e){var t=Kt(e),n=new Ft(0,0),i=t?Kt(t):document;return e==(i=!Ze||9<=Number(lt)||"CSS1Compat"==jt(i).a.compatMode?i.documentElement:i.body)||(e=Va(e),t=Wt(i=jt(t).a),i=i.parentWindow||i.defaultView,t=Ze&&dt("10")&&i.pageYOffset!=t.scrollTop?new Ft(t.scrollLeft,t.scrollTop):new Ft(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(t=Da.prototype).Jb=function(e){(it||et)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||st&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Fa&&!ba(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=_a(e.keyCode),Ba&&(this.Ua=e.altKey))},t.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},t.handleEvent=function(e){var t=e.a,n=t.altKey;if(Ze&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(it||et)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&ya(i)?t.charCode:0):Qe&&!it?r=ya(i=this.X)?t.keyCode:0:("keypress"==e.type?(Ba&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),st&&63==r&&224==i&&(i=191));var s=i=_a(i);i?63232<=i&&i in Ma?s=Ma[i]:25==i&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in Ua&&(s=Ua[t.keyIdentifier]),nt&&Fa&&"keypress"==e.type&&!ba(s,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=s==this.R,this.R=s,(t=new qa(s,r,e,t)).altKey=n,mi(this,t))},t.N=function(){return this.qa},t.o=function(){Da.K.o.call(this),ja(this)},L(qa,zn),$a.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},$a.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},$a.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},$a.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var za={thin:2,medium:4,thick:6};function Ka(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in za)e=za[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Ga(){}function Ya(e){gi.call(this),this.s=e||jt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Ja(e,t){return e.g?$t(t,e.g||e.s.a):null}function Xa(e){return e.L||(e.L=new Ra(e)),e.L}function Qa(e,t){e.Ea&&F(e.Ea,t,void 0)}function Za(e,t){var n=Yt(e,"firebaseui-textfield");t?(ga(e,"firebaseui-input-invalid"),pa(e,"firebaseui-input"),n&&ga(n,"firebaseui-textfield-invalid")):(ga(e,"firebaseui-input"),pa(e,"firebaseui-input-invalid"),n&&pa(n,"firebaseui-textfield-invalid"))}function ec(e,t,n){Bn(e,R(jn,t=new Oa(t))),Pa(Xa(e),t,"input",n)}function tc(e,t,n){Bn(e,R(jn,t=new Da(t))),Pa(Xa(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function nc(e,t,n){Bn(e,R(jn,t=new wa(t))),Pa(Xa(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function ic(e){pa(e,"firebaseui-hidden")}function rc(e,t){t&&Gt(e,t),ga(e,"firebaseui-hidden")}function sc(e){return!fa(e,"firebaseui-hidden")&&"none"!=e.style.display}function oc(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+gn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',hn(i)}function ac(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+an(e):t+"Next",hn(t+"</button>")}function cc(){var e=""+ac({label:fn("Sign In")});return hn(e)}function uc(){var e=""+ac({label:fn("Save")});return hn(e)}function lc(){var e=""+ac({label:fn("Continue")});return hn(e)}function hc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+an(e):t+"Choose password",hn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function dc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return hn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function fc(){return hn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function pc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+an(e):t+"Cancel",hn(t+"</button>")}function gc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),hn(t)}function mc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),hn(t)}function vc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+an(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',hn(e)}function bc(e){var t=e.content;return e=e.Ab,hn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+gn(e):"")+'">'+an(t)+"</dialog>")}function yc(e){var t=e.message;return hn(bc({content:pn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+gn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+an(t)+"</div>")}))}function _c(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+gn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+gn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+an(r.label)+"</div></button>"}return t=""+bc({Ab:fn("firebaseui-list-box-dialog"),content:pn(t+"</div>")}),hn(t)}function wc(e){return hn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Ic(e,t){return ln((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function Ec(e){kc(e,"upgradeElement")}function Cc(e){kc(e,"downgradeElements")}v(Ga),Ga.prototype.a=0,L(Ya,gi),(t=Ya.prototype).Lb=Ga.Xa(),t.N=function(){return this.g},t.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Ya.K.Za.call(this,e)},t.kb=function(){this.g=this.s.a.createElement("DIV")},t.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},t.v=function(){this.na=!0,Qa(this,(function(e){!e.na&&e.N()&&e.v()}))},t.ya=function(){Qa(this,(function(e){e.na&&e.ya()})),this.L&&Na(this.L),this.na=!1},t.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qa(this,(function(e){e.m()})),this.g&&zt(this.g),this.Y=this.g=this.oa=this.Ea=null,Ya.K.o.call(this)},t.removeChild=function(e,t){if(e){var n=f(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],H(this.Ea,e),t&&(e.ya(),e.g&&zt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Ya.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},vc.a="firebaseui.auth.soy2.element.infoBar",yc.a="firebaseui.auth.soy2.element.progressDialog",_c.a="firebaseui.auth.soy2.element.listBoxDialog",wc.a="firebaseui.auth.soy2.element.busyIndicator";var Sc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function kc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Sc.forEach((function(n){fa(e,n)&&window.componentHandler[t](e),F(qt(n,e),(function(e){window.componentHandler[t](e)}))}))}function Tc(e,t,n){if(Rc.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),Ec(e),t&&nc(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Rc.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,s=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,o=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,a=e.getBoundingClientRect().width,c=i.getBoundingClientRect().width;e.style.top=(s+(n-t)/2).toString()+"px",t=o+(c-a)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-a).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Rc(){var e=Ac.call(this);e&&(Cc(e),e.open&&e.close(),zt(e),this.da&&window.removeEventListener("resize",this.da))}function Ac(){return $t("firebaseui-id-dialog")}function Pc(){zt(Nc.call(this))}function Nc(){return Ja(this,"firebaseui-id-info-bar")}function Oc(){return Ja(this,"firebaseui-id-dismiss-info-bar")}var Lc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function xc(e,t,n){for(var i in Wn.call(this,e,t),n)this[i]=n[i]}function Dc(e,t,n,i,r){Ya.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=oe(Lc),ce(this.Z,r||{})}function Mc(e){return e.N().parentElement||e.N().parentNode}function Uc(e,t,n){tc(e,t,(function(){n.focus()}))}function Fc(e,t,n){tc(e,t,(function(){n()}))}function Bc(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+ac(null)+'</div></div><div class="firebaseui-card-footer">'+(i?mc(n):gc(n))+"</div></form></div>",hn(e)}function jc(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+oc(e)+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fc()+'</div><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+(t?mc(n):gc(n))+"</div></form></div>",hn(e)}function qc(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+oc(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+gn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=hn(e)):e="",n=s+e+hc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+uc()+'</div></div><div class="firebaseui-card-footer">'+(r?mc(n):gc(n))+"</div></form></div>",hn(n)}function $c(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+oc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+ac({label:fn("Send")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(e)}function Hc(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+an(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+ac({label:fn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+gc(n)+"</div></div>",hn(i)}function Vc(e,t,n){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+wc(null)+"</div></div>")}function Wc(e,t,n){return hn('<div class="firebaseui-container firebaseui-id-page-spinner">'+wc({tb:!0})+"</div>")}function zc(){return hn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Kc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+an(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function Gc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(e)}function Yc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac(null)+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(e)}function Jc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc({label:fn("Dismiss")})+"</div></div></div>";return hn(e)}function Xc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc({label:fn("Dismiss")})+"</div></div></div>";return hn(e)}function Qc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+an(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fc()+'</div><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function Zc(e,t,n){var i=e.email;return t="",e=fn(e=""+Ic(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+an(i)+"</strong>. You can connect your <strong>"+an(e)+"</strong> account with <strong>"+an(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+an(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function eu(e,t,n){t="";var i=""+Ic(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+an(i=fn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+an(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lc()+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function tu(e,t,n){var i=e.email;return t="",e=fn(e=""+Ic(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+an(i)+"</strong>. Sign in with "+an(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ac({label:fn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function nu(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+an(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+an(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(r)}function iu(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+an(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function ru(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+an(e.email)+"</strong></p>")+hc(function(e){function t(){}var n={label:fn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+"</div></div></form></div>",hn(t)}function su(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function ou(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function au(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+an(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></form></div>",hn(n)}function cu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function uu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function lu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function hu(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+an(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(n)}function du(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function fu(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+an(t)+" "+an(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></form></div>",hn(i)}function pu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+lc()+"</div>":"")+"</div></div>",hn(e)}function gu(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=ac({label:fn("Retry")})),hn(e+"</div></div></div>")}function mu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+"</p></div></div>",hn(e)}function vu(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+an(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+an(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(t)}function bu(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var s={ga:e[r]},o=n,a=(s=s||{}).ga,c=s,u="";switch((c=c||{}).ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+gn(ln(u))+' firebaseui-id-idp-button" data-provider-id="'+gn(a.providerId)+'" style="background-color:')+gn(vn(ln((u=(u=(u=s)||{}).ga).ta?u.ta:o.wa[u.providerId]?""+o.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+o.wa.saml:0==u.providerId.indexOf("oidc.")?""+o.wa.oidc:""+o.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=s;u=o,l=(l=l||{}).ga,u=dn(l.za?mn(l.za):u.xa[l.providerId]?mn(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?mn(u.xa.saml):0==l.providerId.indexOf("oidc.")?mn(u.xa.oidc):mn(u.xa.password)),c=c+gn(mn(u))+'"></span>',"password"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Email",c+="</span>"):"phone"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Phone",c+="</span>"):"anonymous"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):c+=u="Sign in with "+an(Ic(s,o)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(a.S?an(a.S):an(Ic(s,o)))+"</span>"),i+='<li class="firebaseui-list-item">'+(a=hn(c+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+mc(n)+"</div></div>",hn(i)}function yu(e,t,n){var i,r=(e=e||{}).Gb,s=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+gn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+hn(e))+(i=r?hn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?pc(null):"")+ac({label:fn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=hn(t+"</p>")):n=hn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+gc(n),hn(i+n+"</div></form></div>")}function _u(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+an(t=(e=e||{}).phoneNumber)+"</a>",an(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=hn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form>",e=hn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),hn(t+(n+e+"</div>"))}function wu(){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Iu(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var s=e[r],o="",a=an(s.displayName),c=s.tenantId?s.tenantId:"top-level-project";o+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+gn(c=fn(c))+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+gn(s.tenantId)+'"':"")+'style="background-color:'+gn(vn(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+gn(mn(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?o+=an(s.V):o+=s="Sign in to "+an(s.displayName),i+='<li class="firebaseui-list-item">'+(o=hn(o+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+a+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+mc(n)+"</div></div>",hn(i)}function Eu(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ac(null)+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Cu(){return Ja(this,"firebaseui-id-submit")}function Su(){return Ja(this,"firebaseui-id-secondary-link")}function ku(e,t){nc(this,Cu.call(this),(function(t){e(t)}));var n=Su.call(this);n&&t&&nc(this,n,(function(e){t(e)}))}function Tu(){return Ja(this,"firebaseui-id-password")}function Ru(){return Ja(this,"firebaseui-id-password-error")}function Au(){var e=Tu.call(this),t=Ru.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}))}function Pu(){var e=Tu.call(this),t=Ru.call(this);return ma(e)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,ln("Enter your password").toString()),t=!1),t?ma(e):null}function Nu(e,t,n,i,r,s){Dc.call(this,Qc,{email:e},s,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}L(xc,Wn),L(Dc,Ya),(t=Dc.prototype).kb=function(){var e=nn(this.fb,this.eb,this.Z,this.s);Ec(e),this.g=e},t.v=function(){if(Dc.K.v.call(this),_i(Mc(this),new xc("pageEnter",Mc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;nc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;nc(this,this.ab(),(function(){t()}))}},t.ya=function(){_i(Mc(this),new xc("pageExit",Mc(this),{pageId:this.Ga})),Dc.K.ya.call(this)},t.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Cc(this.N()),Dc.K.o.call(this)},t.I=function(e,t,n,i){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(Cc(s.A),zt(s.A),s.A=null)}var s=this;return s.Fa?null:(function(e){e.Fa=!0;var t=fa(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=nn(wc,{tb:t},null,e.s),e.N().appendChild(e.A),Ec(e.A))}),500)}(s),e.apply(null,t).then(n,i).then(r,r))},A(Dc.prototype,{a:function(e){Pc.call(this);var t=nn(vc,{message:e},null,this.s);this.N().appendChild(t),nc(this,Oc.call(this),(function(){zt(t)}))},yc:Pc,Ac:Nc,zc:Oc,$:function(e,t){e=nn(yc,{Ma:e,message:t},null,this.s),Tc.call(this,e)},h:Rc,Cb:Ac,Cc:function(){return Ja(this,"firebaseui-tos")},bb:function(){return Ja(this,"firebaseui-tos-link")},ab:function(){return Ja(this,"firebaseui-pp-link")},Dc:function(){return Ja(this,"firebaseui-tos-list")}}),Bc.a="firebaseui.auth.soy2.page.signIn",jc.a="firebaseui.auth.soy2.page.passwordSignIn",qc.a="firebaseui.auth.soy2.page.passwordSignUp",$c.a="firebaseui.auth.soy2.page.passwordRecovery",Hc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Vc.a="firebaseui.auth.soy2.page.callback",Wc.a="firebaseui.auth.soy2.page.spinner",zc.a="firebaseui.auth.soy2.page.blank",Kc.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Gc.a="firebaseui.auth.soy2.page.emailNotReceived",Yc.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Jc.a="firebaseui.auth.soy2.page.differentDeviceError",Xc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qc.a="firebaseui.auth.soy2.page.passwordLinking",Zc.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",eu.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",tu.a="firebaseui.auth.soy2.page.federatedLinking",nu.a="firebaseui.auth.soy2.page.unauthorizedUser",iu.a="firebaseui.auth.soy2.page.unsupportedProvider",ru.a="firebaseui.auth.soy2.page.passwordReset",su.a="firebaseui.auth.soy2.page.passwordResetSuccess",ou.a="firebaseui.auth.soy2.page.passwordResetFailure",au.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",cu.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",uu.a="firebaseui.auth.soy2.page.emailVerificationSuccess",lu.a="firebaseui.auth.soy2.page.emailVerificationFailure",hu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",du.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",fu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",pu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",gu.a="firebaseui.auth.soy2.page.recoverableError",mu.a="firebaseui.auth.soy2.page.unrecoverableError",vu.a="firebaseui.auth.soy2.page.emailMismatch",bu.a="firebaseui.auth.soy2.page.providerSignIn",yu.a="firebaseui.auth.soy2.page.phoneSignInStart",_u.a="firebaseui.auth.soy2.page.phoneSignInFinish",wu.a="firebaseui.auth.soy2.page.signOut",Iu.a="firebaseui.auth.soy2.page.selectTenant",Eu.a="firebaseui.auth.soy2.page.providerMatchByEmail",a(Nu,Dc),Nu.prototype.v=function(){this.P(),this.M(this.w,this.H),Fc(this,this.i(),this.w),this.i().focus(),Dc.prototype.v.call(this)},Nu.prototype.o=function(){this.w=null,Dc.prototype.o.call(this)},Nu.prototype.j=function(){return ma(Ja(this,"firebaseui-id-email"))},A(Nu.prototype,{i:Tu,B:Ru,P:Au,u:Pu,ea:Cu,ba:Su,M:ku});var Ou=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Lu(){return Ja(this,"firebaseui-id-email")}function xu(){return Ja(this,"firebaseui-id-email-error")}function Du(e){var t=Lu.call(this),n=xu.call(this);ec(this,t,(function(){sc(n)&&(Za(t,!0),ic(n))})),e&&tc(this,t,(function(){e()}))}function Mu(){return Y(ma(Lu.call(this))||"")}function Uu(){var e=Lu.call(this),t=xu.call(this),n=ma(e)||"";return n?Ou.test(n)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,ln("That email address isn't correct").toString()),t=!1):(Za(e,!1),rc(t,ln("Enter your email address to continue").toString()),t=!1),t?Y(ma(e)):null}function Fu(e,t,n,i,r,s,o){Dc.call(this,jc,{email:n,ia:!!s},o,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Bu(e,t,n,i,r,s){Dc.call(this,e,t,i,r||"notice",s),this.i=n||null}function ju(e,t,n,i,r){Bu.call(this,Hc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function qu(e,t){Bu.call(this,uu,{G:!!e},e,t,"emailVerificationSuccess")}function $u(e,t){Bu.call(this,lu,{G:!!e},e,t,"emailVerificationFailure")}function Hu(e,t,n){Bu.call(this,hu,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Vu(e,t){Bu.call(this,du,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Wu(e,t){Bu.call(this,pu,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function zu(e){Bu.call(this,wu,void 0,void 0,e,"signOut")}function Ku(e,t){Bu.call(this,su,{G:!!e},e,t,"passwordResetSuccess")}function Gu(e,t){Bu.call(this,ou,{G:!!e},e,t,"passwordResetFailure")}function Yu(e,t){Bu.call(this,cu,{G:!!e},e,t,"emailChangeRevokeFailure")}function Ju(e,t,n){Bu.call(this,gu,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Xu(e,t){Bu.call(this,mu,{errorMessage:e},void 0,t,"unrecoverableError")}function Qu(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function Zu(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(e){}s=!1}if(s)n=Mc(t),t.m(),ol(e,n,void 0,ln("Your sign-in session has expired. Please try again.").toString());else{if(s=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;s=nl(n)}t.a(s)}}}if(Oh(e),i)return el(e,n),Wi();if(!n.credential)throw Error("No credential found!");if(!Ih(e).currentUser&&!n.user)throw Error("User not logged in.");try{var s=function(e,t){return Dh(e),Ah(e,(function(n){if(e.j&&!e.j.isAnonymous&&Ao(xh(e))&&!Ih(e).currentUser)return Uh(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Uh(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fh(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Uh(e).then((function(){return Eh(e).updateCurrentUser(t.user)})).then((function(){return t.user=Eh(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Gr(e.code||e.message,e),t.a(e.code||e.message),Wi()}return n=s.then((function(t){el(e,t)}),r).then(void 0,r),Nh(e,s),Wi(n)}function el(e,t){if(!t.user)throw Error("No user found");var n=Yo(xh(e));if(Go(xh(e))&&n&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Yo(xh(e));var i=eo(Ch(e))||void 0;Qs(Gs,Ch(e));var r=!1;rr()?(n&&!n(t,i)||(r=!0,Ut(window.opener.location,tl(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Ut(window.location,tl(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Go(xh(e)),r=eo(Ch(e))||void 0,Qs(Gs,Ch(e));var s=!1;rr()?(i&&!i(n,t,r)||(s=!0,Ut(window.opener.location,tl(e,r))),i||window.close()):i&&!i(n,t,r)||(s=!0,Ut(window.location,tl(e,r))),s||e.reset()}}function tl(e,t){if(!(e=t||xh(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function nl(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=Ln();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=Rn();break;case"auth/invalid-verification-code":n+=ln("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=ln(n).toString())return t;try{return JSON.parse(e.message),Gr("Internal error: "+e.message,void 0),Pn().toString()}catch(t){return e.message}}function il(e,t,n,i){function r(){!function(e,t){Zs(Ks,{tenantId:e.a},t)}(new as(e.h.tenantId||null),Ch(e)),Nh(e,t.I(T(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Nh(e,yh(e).then((function(n){t.m(),Qs(Ks,Ch(e)),ha("callback",e,a,Wi(n))}),s))}),o))}function s(i){if(Qs(Ks,Ch(e)),!i.name||"cancel"!=i.name)switch(i=Qu(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(nl(i));break;case"auth/admin-restricted-operation":t.m(),Uo(xh(e))?ha("handleUnauthorizedUser",e,a,null,n):ha("callback",e,a,zi(i));break;default:t.m(),ha("callback",e,a,zi(i))}}function o(n){Qs(Ks,Ch(e)),n.name&&"cancel"==n.name||(Gr("signInWithRedirect: "+n.code,void 0),n=nl(n),"blank"==t.Ga&&zo(xh(e))?(t.m(),ha("providerSignIn",e,a,n)):t.a(n))}var a=Mc(t),c=function(e,t,n){var i=To[t]&&Fl.auth[To[t]]?new Fl.auth[To[t]]:0==t.indexOf("saml.")?new Fl.auth.SAMLAuthProvider(t):new Fl.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var r=Fo(xh(e),t);if(i.addScope)for(var s=0;s<r.length;s++)i.addScope(r[s]);return r=Bo(xh(e),t)||{},n&&(e=t==Fl.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==Fl.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Lo(xh(e),t))&&e.Ob)&&(r[e]=n),i.setCustomParameters&&i.setCustomParameters(r),i}(e,n,i);Ko(xh(e))==sa?r():Nh(e,function(e,t){return Dh(e),Ah(e,(function(n){return n&&!to(Ch(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fh(e,t)})):Ih(e).signInWithPopup(t)}))}(e,c).then((function(n){t.m(),ha("callback",e,a,Wi(n))}),s))}function rl(e){return 1==(e=Oo(xh(e))).length&&e[0]==Fl.auth.EmailAuthProvider.PROVIDER_ID}function sl(e){return 1==(e=Oo(xh(e))).length&&e[0]==Fl.auth.PhoneAuthProvider.PROVIDER_ID}function ol(e,t,n,i){rl(e)?i?ha("signIn",e,t,n,i):ll(e,t,n):e&&sl(e)&&!i?ha("phoneSignInStart",e,t):e&&zo(xh(e))&&!i?ha("federatedRedirect",e,t,n):ha("providerSignIn",e,t,i,n)}function al(e,t,n,i){var r=Mc(t);Nh(e,t.I(T(Ih(e).fetchSignInMethodsForEmail,Ih(e)),[n],(function(s){t.m(),cl(e,r,s,n,i)}),(function(e){e=nl(e),t.a(e)})))}function cl(e,t,n,i,r,s){n.length||Wo(xh(e))&&!Wo(xh(e))?$(n,Fl.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordSignIn",e,t,i,s):1==n.length&&n[0]===Fl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Wo(xh(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("unsupportedProvider",e,t,i):(n=So(n,Oo(xh(e))))?(io(new rs(i),Ch(e)),ha("federatedSignIn",e,t,i,n,r)):ha("unsupportedProvider",e,t,i):Mo(xh(e))?ha("handleUnauthorizedUser",e,t,i,Fl.auth.EmailAuthProvider.PROVIDER_ID):Wo(xh(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("passwordSignUp",e,t,i,void 0,void 0,s)}function ul(e,t,n,i,r,s){var o=Mc(t);Nh(e,t.I(T(e.Ib,e),[n,s],(function(){t.m(),ha("emailLinkSignInSent",e,o,n,i,s)}),r))}function ll(e,t,n){n?ha("prefilledEmailSignIn",e,t,n):ha("signIn",e,t)}function hl(){return ye(ar(),"oobCode")}function dl(){var e=ye(ar(),"continueUrl");return e?function(){Ut(window.location,e)}:null}function fl(e,t){Dc.call(this,Xc,void 0,t,"anonymousUserMismatch"),this.i=e}function pl(e){Dc.call(this,Vc,void 0,e,"callback")}function gl(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=to(Ch(e)),s=r&&r.g;if(s&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,s))!function(e,t,n){var i=Mc(t);Nh(e,Uh(e).then((function(){t.m(),ha("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=nl(e.code),t.a(e))})))}(e,t,i);else{var o=r&&r.a;o?Nh(e,n.user.linkWithCredential(o).then((function(n){i={user:n.user,credential:o,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},ml(e,t,i)}),(function(n){vl(e,t,n)}))):ml(e,t,i)}}else n=Mc(t),t.m(),no(Ch(e)),ol(e,n)}function ml(e,t,n){no(Ch(e)),Zu(e,t,n)}function vl(e,t,n){var i=Mc(t);no(Ch(e)),n=nl(n),t.m(),ol(e,i,void 0,n)}function bl(e,t,n,i){var r=Mc(t);Nh(e,Ih(e).fetchSignInMethodsForEmail(n).then((function(s){t.m(),s.length?$(s,Fl.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordLinking",e,r,n):1==s.length&&s[0]===Fl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ha("emailLinkSignInLinking",e,r,n):(s=So(s,Oo(xh(e))))?ha("federatedLinking",e,r,n,s,i):(no(Ch(e)),ha("unsupportedProvider",e,r,n)):(no(Ch(e)),ha("passwordRecovery",e,r,n,!1,Nn().toString()))}),(function(n){vl(e,t,n)})))}function yl(e,t){Dc.call(this,Jc,void 0,t,"differentDeviceError"),this.i=e}function _l(e,t,n,i){Dc.call(this,au,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function wl(){return Ja(this,"firebaseui-id-new-password")}function Il(){return Ja(this,"firebaseui-id-password-toggle")}function El(){this.Ra=!this.Ra;var e=Il.call(this),t=wl.call(this);this.Ra?(t.type="text",pa(e,"firebaseui-input-toggle-off"),ga(e,"firebaseui-input-toggle-on")):(t.type="password",pa(e,"firebaseui-input-toggle-on"),ga(e,"firebaseui-input-toggle-off")),t.focus()}function Cl(){return Ja(this,"firebaseui-id-new-password-error")}function Sl(){this.Ra=!1;var e=wl.call(this);e.type="password";var t=Cl.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}));var n=Il.call(this);pa(n,"firebaseui-input-toggle-on"),ga(n,"firebaseui-input-toggle-off"),function(e,t,n){Bn(e,R(jn,t=new Sa(t))),Pa(Xa(e),t,"focusin",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-focus"),ga(n,"firebaseui-input-toggle-blur")})),function(e,t,n){Bn(e,R(jn,t=new Sa(t))),Pa(Xa(e),t,"focusout",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-blur"),ga(n,"firebaseui-input-toggle-focus")})),nc(this,n,T(El,this))}function kl(){var e=wl.call(this),t=Cl.call(this);return ma(e)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,ln("Enter your password").toString()),t=!1),t?ma(e):null}function Tl(e,t,n){Dc.call(this,ru,{email:e},n,"passwordReset"),this.l=t}function Rl(e,t,n,i,r){Dc.call(this,fu,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Al(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=nl(i),Za(n.i(),!1),rc(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Gu).render(t),_h(e,n))}function Pl(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):Ze&&!dt("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Nl(e,t,n,i,r,s){Dc.call(this,Yc,{email:n},s,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Ol(e,t,n,i,r){Dc.call(this,eu,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Ll(e){Dc.call(this,zc,void 0,e,"blank")}function xl(e,t,n,i,r){var s=new Ll,o=new je(n),a=o.a.a.get(Ve.$a)||"",c=o.a.a.get(Ve.Sa)||"",u="1"===o.a.a.get(Ve.Qa),l=qe(o),h=o.a.a.get(Ve.PROVIDER_ID)||null;o=o.a.a.get(Ve.vb)||null,Lh(e,o);var d=!Xs(Ys,Ch(e)),f=i||function(e,t){var n=null;if(t=Xs(Ys,t))try{var i=As(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(c,Ch(e)),p=(i=function(e,t){var n=null;if(t=Xs(Js,t))try{var i=As(e,t);n=JSON.parse(i)}catch(e){}return os(n||null)}(c,Ch(e)))&&i.a;h&&p&&p.providerId!==h&&(p=null),s.render(t),_h(e,s),Nh(e,s.I((function(){var t=Wi(null);t=l&&d||d&&u?zi(Error("anonymous-user-not-found")):function(e,t){var n=qe(new je(t));return n?(t=new Fi((function(t,i){var r=Eh(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));Nh(e,r)})),Nh(e,t),t):Wi(null)}(e,n).then((function(e){if(h&&!p)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:Ih(e).checkActionCode(a)})).then((function(){return i}))}),[],(function(i){f?function(e,t,n,i,r,s){var o=Mc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ln("Signing in...").toString());var a=null;r=(s?function(e,t,n,i,r){Dh(e);var s=r||null,o=Fl.auth.EmailAuthProvider.credentialWithLink(n,i);return n=s?Ih(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Uh(e)})).then((function(){return Fh(e,{code:"auth/email-already-in-use"},s)})):Ih(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Fh(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),Nh(e,n),n}(e,s,n,i,r):function(e,t,n,i){Dh(e);var r,s=i||null;return t=Ih(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Uh(e)})).then((function(){return Eh(e).updateCurrentUser(r.user)})).then((function(){return r.user=Eh(e).currentUser,r})),Nh(e,t),t}(e,n,i,r)).then((function(n){Qs(Js,Ch(e)),Qs(Ys,Ch(e)),t.h(),t.$("firebaseui-icon-done",ln("Signed in!").toString()),a=setTimeout((function(){t.h(),Zu(e,t,n,!0)}),1e3),Nh(e,(function(){t&&(t.h(),t.m()),clearTimeout(a)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var s=nl(r=Qu(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qs(Js,Ch(e)),Qs(Ys,Ch(e))):"auth/invalid-email"==r.code?(s=ln("The email provided does not match the current sign-in session.").toString(),ha("emailLinkConfirmation",e,o,i,Dl,null,s)):ol(e,o,n,s)}})),Nh(e,r)}(e,s,f,n,p,i):u?(s.m(),ha("differentDeviceError",e,t)):(s.m(),ha("emailLinkConfirmation",e,t,n,Dl))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":ha("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ha("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ha("emailLinkNewDeviceLinking",e,t,n,Ml);break;default:i&&(r=nl(i)),ol(e,t,void 0,r)}})))}function Dl(e,t,n,i){xl(e,t,i,n,!0)}function Ml(e,t,n){xl(e,t,n)}function Ul(e,t,n,i,r,s){Dc.call(this,Zc,{email:e,ga:t},s,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function Bl(e,t,n,i,r,s){Dc.call(this,Kc,{email:e},s,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function jl(e,t,n,i,r,s,o){Dc.call(this,vu,{jc:e,Qb:t},o,"emailMismatch",{F:r,D:s}),this.l=n,this.i=i}function ql(e,t,n,i,r){Dc.call(this,Gc,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function $l(e,t,n,i,r,s){Dc.call(this,tu,{email:e,ga:t},s,"federatedLinking",{F:i,D:r}),this.i=n}function Hl(e,t,n,i,r,s){Dc.call(this,$c,{email:n,Ta:!!t},s,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Vl(){return Ja(this,"firebaseui-id-name")}function Wl(){return Ja(this,"firebaseui-id-name-error")}function zl(e,t,n,i,r,s,o,a,c){Dc.call(this,qc,{email:i,Tb:e,name:r,Ta:!!n,ia:!!a},c,"passwordSignUp",{F:s,D:o}),this.w=t,this.H=n,this.B=e}function Kl(e,t){var n=Vo(xh(e)),i=t.j(),r=null;n&&(r=t.M());var s=t.P();if(i){if(n){if(!r)return void t.u().focus();r=re(r)}if(s){var o=Fl.auth.EmailAuthProvider.credential(i,s);Nh(e,t.I(T(e.Yb,e),[i,s],(function(i){var s={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:r}).then((function(){return Zu(e,t,s)})),Nh(e,i),i):Zu(e,t,s)}),(function(n){if(!n.name||"cancel"!=n.name){var r=Qu(n);switch(n=nl(r),r.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=nl(i);Za(t.i(),!1),rc(t.U(),e),t.i().focus()}var s=Ih(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Mc(t),t.m(),ha("passwordRecovery",e,i,n,!1,Nn().toString()))}),(function(){r()}));return Nh(e,s),s}(e,t,i,r);case"auth/too-many-requests":n=ln("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Za(t.l(),!1),rc(t.ba(),n);break;case"auth/admin-restricted-operation":Uo(xh(e))?(n=Mc(t),t.m(),ha("handleUnauthorizedUser",e,n,i,Fl.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Gr(r="setAccountInfo: "+Ns(r),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function Gl(){return Ja(this,"firebaseui-id-phone-confirmation-code")}function Yl(){return Ja(this,"firebaseui-id-phone-confirmation-code-error")}function Jl(){return Ja(this,"firebaseui-id-resend-countdown")}function Xl(e,t,n,i,r,s,o,a,c){Dc.call(this,_u,{phoneNumber:r},c,"phoneSignInFinish",{F:o,D:a}),this.jb=s,this.i=new ka(1e3),this.B=s,this.P=e,this.l=t,this.H=n,this.M=i}a(Fu,Dc),Fu.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Uc(this,this.l(),this.i()),Fc(this,this.i(),this.w),ma(this.l())?this.i().focus():this.l().focus(),Dc.prototype.v.call(this)},Fu.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},A(Fu.prototype,{l:Lu,U:xu,P:Du,M:Mu,j:Uu,i:Tu,B:Ru,ea:Au,u:Pu,ua:Cu,pa:Su,ba:ku}),L(Bu,Dc),Bu.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bu.K.v.call(this)},Bu.prototype.o=function(){this.i=null,Bu.K.o.call(this)},A(Bu.prototype,{l:Cu,w:Su,u:ku}),L(ju,Bu),L(qu,Bu),L($u,Bu),L(Hu,Bu),L(Vu,Bu),L(Wu,Bu),L(zu,Bu),L(Ku,Bu),L(Gu,Bu),L(Yu,Bu),L(Ju,Bu),L(Xu,Bu),a(fl,Dc),fl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},fl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(fl.prototype,{l:Su}),la.anonymousUserMismatch=function(e,t){var n=new fl((function(){n.m(),ol(e,t)}));n.render(t),_h(e,n)},a(pl,Dc),pl.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},la.callback=function(e,t,n){var i=new pl;i.render(t),_h(e,i),n=n||yh(e),Nh(e,n.then((function(t){gl(e,i,t)}),(function(n){if((n=Qu(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)io(new rs(n.email,n.credential),Ch(e)),bl(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=to(Ch(e)),s=nl(n);r&&r.a?bl(e,i,r.g,s):r?al(e,i,r.g,s):vl(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&rl(e)?gl(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Uo(xh(e))?(i.m(),no(Ch(e)),ha("handleUnauthorizedUser",e,t,null,null)):vl(e,i,n))})))},a(yl,Dc),yl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},yl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(yl.prototype,{l:Su}),la.differentDeviceError=function(e,t){var n=new yl((function(){n.m(),ol(e,t)}));n.render(t),_h(e,n)},a(_l,Dc),_l.prototype.v=function(){var e=this;nc(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},_l.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},A(_l.prototype,{u:Cu,B:Su,w:ku}),a(Tl,Dc),Tl.prototype.v=function(){this.H(),this.B(this.l),Fc(this,this.i(),this.l),this.i().focus(),Dc.prototype.v.call(this)},Tl.prototype.o=function(){this.l=null,Dc.prototype.o.call(this)},A(Tl.prototype,{i:wl,w:Cl,M:Il,H:Sl,u:kl,U:Cu,P:Su,B:ku}),a(Rl,Dc),Rl.prototype.v=function(){var e=this;nc(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},Rl.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},A(Rl.prototype,{u:Cu,B:Su,w:ku}),la.passwordReset=function(e,t,n,i){Nh(e,Ih(e).verifyPasswordResetCode(n).then((function(r){var s=new Tl(r,(function(){!function(e,t,n,i,r){var s=n.u();s&&Nh(e,n.I(T(Ih(e).confirmPasswordReset,Ih(e)),[i,s],(function(){n.m();var i=new Ku(r);i.render(t),_h(e,i)}),(function(i){Al(e,t,n,i)})))}(e,t,s,n,i)}));s.render(t),_h(e,s)}),(function(){Al(e,t)})))},la.emailChangeRevocation=function(e,t,n){var i=null;Nh(e,Ih(e).checkActionCode(n).then((function(t){return i=t.data.email,Ih(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new _l(n,(function(){Nh(e,i.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){i.m(),(i=new ju(n,void 0,$o(xh(e)),Ho(xh(e)))).render(t),_h(e,i)}),(function(){i.a(An().toString())})))}));i.render(t),_h(e,i)}(e,t,i)}),(function(){var n=new Yu;n.render(t),_h(e,n)})))},la.emailVerification=function(e,t,n,i){Nh(e,Ih(e).applyActionCode(n).then((function(){var n=new qu(i);n.render(t),_h(e,n)}),(function(){var n=new $u;n.render(t),_h(e,n)})))},la.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;Nh(e,Ih(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,Ih(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Rl(i.factorId,(function(){r.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){r.m(),(r=new ju(n,void 0,$o(xh(e)),Ho(xh(e)))).render(t),_h(e,r)}),(function(){r.a(An().toString())}))}),i.phoneNumber);r.render(t),_h(e,r)}(e,t,i,r)}),(function(){var n=new Wu;n.render(t),_h(e,n)})))},la.verifyAndChangeEmail=function(e,t,n,i){var r=null;Nh(e,Ih(e).checkActionCode(n).then((function(t){return r=t.data.email,Ih(e).applyActionCode(n)})).then((function(){var n=new Hu(r,i);n.render(t),_h(e,n)}),(function(){var n=new Vu;n.render(t),_h(e,n)})))},a(Nl,Dc),Nl.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Pl(this.i(),(this.i().value||"").length),Dc.prototype.v.call(this)},Nl.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},A(Nl.prototype,{i:Lu,M:xu,w:Du,H:Mu,j:Uu,U:Cu,P:Su,B:ku}),la.emailLinkConfirmation=function(e,t,n,i,r,s){var o=new Nl((function(){var r=o.j();r?(o.m(),i(e,t,r,n)):o.i().focus()}),(function(){o.m(),ol(e,t,r||void 0)}),r||void 0,$o(xh(e)),Ho(xh(e)));o.render(t),_h(e,o),s&&o.a(s)},a(Ol,Dc),Ol.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Ol.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Ol.prototype,{l:Cu,u:ku}),la.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new je(n);if(n=r.a.a.get(Ve.PROVIDER_ID)||null,$e(r,null),n){var s=new Ol(Lo(xh(e),n),(function(){s.m(),i(e,t,r.toString())}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s)}else ol(e,t)},a(Ll,Dc),la.emailLinkSignInCallback=xl,a(Ul,Dc),Ul.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Ul.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Ul.prototype,{l:Cu,u:ku}),la.emailLinkSignInLinking=function(e,t,n){var i=to(Ch(e));if(no(Ch(e)),i){var r=i.a.providerId,s=new Ul(n,Lo(xh(e),r),(function(){!function(e,t,n,i){var r=Mc(t);ul(e,t,n,(function(){ol(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var s=nl(i);i&&"auth/network-request-failed"==i.code?t.a(s):(t.m(),ol(e,r,n,s))}}),i)}(e,s,n,i)}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s)}else ol(e,t)},a(Bl,Dc),Bl.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),nc(this,Ja(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Dc.prototype.v.call(this)},Bl.prototype.o=function(){this.i=this.u=null,Dc.prototype.o.call(this)},A(Bl.prototype,{l:Su}),la.emailLinkSignInSent=function(e,t,n,i,r){var s=new Bl(n,(function(){s.m(),ha("emailNotReceived",e,t,n,i,r)}),(function(){s.m(),i()}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s)},a(jl,Dc),jl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},jl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(jl.prototype,{u:Cu,B:Su,w:ku}),la.emailMismatch=function(e,t,n){var i=to(Ch(e));if(i){var r=new jl(n.user.email,i.g,(function(){var t=r;no(Ch(e)),Zu(e,t,n)}),(function(){var t=n.credential.providerId,s=Mc(r);r.m(),i.a?ha("federatedLinking",e,s,i.g,t):ha("federatedSignIn",e,s,i.g,t)}),$o(xh(e)),Ho(xh(e)));r.render(t),_h(e,r)}else ol(e,t)},a(ql,Dc),ql.prototype.v=function(){var e=this;nc(this,this.u(),(function(){e.i()})),nc(this,this.Da(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},ql.prototype.Da=function(){return Ja(this,"firebaseui-id-resend-email-link")},ql.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(ql.prototype,{u:Su}),la.emailNotReceived=function(e,t,n,i,r){var s=new ql((function(){ul(e,s,n,i,(function(e){e=nl(e),s.a(e)}),r)}),(function(){s.m(),ol(e,t,n)}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s)},a($l,Dc),$l.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},$l.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A($l.prototype,{l:Cu,u:ku}),la.federatedLinking=function(e,t,n,i,r){var s=to(Ch(e));if(s&&s.a){var o=new $l(n,Lo(xh(e),i),(function(){il(e,o,i,n)}),$o(xh(e)),Ho(xh(e)));o.render(t),_h(e,o),r&&o.a(r)}else ol(e,t)},la.federatedRedirect=function(e,t,n){var i=new Ll;i.render(t),_h(e,i),il(e,i,t=Oo(xh(e))[0],n)},la.federatedSignIn=function(e,t,n,i,r){var s=new $l(n,Lo(xh(e),i),(function(){il(e,s,i,n)}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s),r&&s.a(r)},la.passwordLinking=function(e,t,n){var i=to(Ch(e));no(Ch(e));var r=i&&i.a;if(r){var s=new Nu(n,(function(){!function(e,t,n,i){var r=t.u();r?Nh(e,t.I(T(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return Zu(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),Nh(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":Za(t.i(),!1),rc(t.B(),nl(e));break;case"auth/too-many-requests":t.a(nl(e));break;default:Gr("signInWithEmailAndPassword: "+e.message,void 0),t.a(nl(e))}}))):t.i().focus()}(e,s,n,r)}),(function(){s.m(),ha("passwordRecovery",e,t,n)}),$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s)}else ol(e,t)},a(Hl,Dc),Hl.prototype.v=function(){this.B(),this.H(this.l,this.u),ma(this.i())||this.i().focus(),Fc(this,this.i(),this.l),Dc.prototype.v.call(this)},Hl.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},A(Hl.prototype,{i:Lu,w:xu,B:Du,M:Mu,j:Uu,U:Cu,P:Su,H:ku}),la.passwordRecovery=function(e,t,n,i,r){var s=new Hl((function(){!function(e,t){var n=t.j();if(n){var i=Mc(t);Nh(e,t.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){t.m();var r=new ju(n,(function(){r.m(),ol(e,i)}),$o(xh(e)),Ho(xh(e)));r.render(i),_h(e,r)}),(function(e){Za(t.i(),!1),rc(t.w(),nl(e))})))}else t.i().focus()}(e,s)}),i?void 0:function(){s.m(),ol(e,t)},n,$o(xh(e)),Ho(xh(e)));s.render(t),_h(e,s),r&&s.a(r)},la.passwordSignIn=function(e,t,n,i){var r=new Fu((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var r=Fl.auth.EmailAuthProvider.credential(n,i);Nh(e,t.I(T(e.bc,e),[n,i],(function(n){return Zu(e,t,{user:n.user,credential:r,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":Za(t.l(),!1),rc(t.U(),nl(e));break;case"auth/too-many-requests":case"auth/wrong-password":Za(t.i(),!1),rc(t.B(),nl(e));break;default:Gr("verifyPassword: "+e.message,void 0),t.a(nl(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var n=r.M();r.m(),ha("passwordRecovery",e,t,n)}),n,$o(xh(e)),Ho(xh(e)),i);r.render(t),_h(e,r)},a(zl,Dc),zl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Uc(this,this.i(),this.u()),Uc(this,this.u(),this.l())):Uc(this,this.i(),this.l()),this.w&&Fc(this,this.l(),this.w),ma(this.i())?this.B&&!ma(this.u())?this.u().focus():this.l().focus():this.i().focus(),Dc.prototype.v.call(this)},zl.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},A(zl.prototype,{i:Lu,U:xu,ea:Du,jb:Mu,j:Uu,u:Vl,Bc:Wl,Ja:function(){var e=Vl.call(this),t=Wl.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}))},M:function(){var e=Vl.call(this),t=Wl.call(this),n=ma(e);return Za(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(ic(t),t=!0):(rc(t,ln("Enter your account name").toString()),t=!1),t?Y(ma(e)):null},l:wl,ba:Cl,lb:Il,ua:Sl,P:kl,Nb:Cu,Mb:Su,pa:ku}),la.passwordSignUp=function(e,t,n,i,r,s){var o=new zl(Vo(xh(e)),(function(){Kl(e,o)}),r?void 0:function(){o.m(),ol(e,t)},n,i,$o(xh(e)),Ho(xh(e)),s);o.render(t),_h(e,o)},a(Xl,Dc),Xl.prototype.v=function(){var e=this;this.U(this.jb),ii(this.i,"tick",this.w,!1,this),this.i.start(),nc(this,Ja(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),nc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Dc.prototype.v.call(this)},Xl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Ta(this.i),oi(this.i,"tick",this.w),this.i=null,Dc.prototype.o.call(this)},Xl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Ta(this.i),oi(this.i,"tick",this.w),this.ua(),this.lb())},A(Xl.prototype,{u:Gl,pa:Yl,Ja:function(e){var t=Gl.call(this),n=Yl.call(this);ec(this,t,(function(){sc(n)&&(Za(t,!0),ic(n))})),e&&tc(this,t,(function(){e()}))},ba:function(){var e=Y(ma(Gl.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Jl,U:function(e){Gt(Jl.call(this),ln("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){ic(this.Fb())},Da:function(){return Ja(this,"firebaseui-id-resend-link")},lb:function(){rc(this.Da())},Nb:Cu,Mb:Su,ea:ku}),la.phoneSignInFinish=function(e,t,n,i,r,s){var o=new Xl((function(){o.m(),ha("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),Za(t.u(),!1),rc(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ln("Verifying...").toString()),Nh(e,t.I(T(i.confirm,i),[s],(function(n){t.h(),t.$("firebaseui-icon-done",ln("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Eh(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};Zu(e,t,i,!0)}),1e3);Nh(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var s=Qu(i);switch(i=nl(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Mc(t),t.h(),t.m(),ha("phoneSignInStart",e,s,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(ln("Wrong code. Try again.").toString())}(e,o,n,r)}),(function(){o.m(),ol(e,t)}),(function(){o.m(),ha("phoneSignInStart",e,t,n)}),Co(n),i,$o(xh(e)),Ho(xh(e)));o.render(t),_h(e,o),s&&o.a(s)};var Ql=!(Ze||Ke("Safari")&&!(Ge()||Ke("Coast")||Ke("Opera")||Ke("Edge")||Ke("Firefox")||Ke("FxiOS")||Ke("Silk")||Ke("Android")));function Zl(e,t){return/-[a-z]/.test(t)?null:Ql&&e.dataset?!Ke("Android")||Ge()||Ke("Firefox")||Ke("FxiOS")||Ke("Opera")||Ke("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function eh(e,t,n){var i=this;e=nn(_c,{items:e},null,this.s),Tc.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Zl(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||Wt(document))||Wt(document),i=Wa(e),r=Wa(n);if(!Ze||9<=Number(lt)){o=Ha(n,"borderLeftWidth");var s=Ha(n,"borderRightWidth");a=Ha(n,"borderTopWidth"),c=Ha(n,"borderBottomWidth"),s=new $a(parseFloat(a),parseFloat(s),parseFloat(c),parseFloat(o))}else{var o=Ka(n,"borderLeft");s=Ka(n,"borderRight");var a=Ka(n,"borderTop"),c=Ka(n,"borderBottom");s=new $a(a,s,c,o)}n==Wt(document)?(o=i.a-n.scrollLeft,i=i.g-n.scrollTop,!Ze||10<=Number(lt)||(o+=s.left,i+=s.top)):(o=i.a-r.a-s.left,i=i.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,a=it&&!r&&!s,e=d(r)&&!a||!e.getBoundingClientRect?new Bt(r,s):new Bt((e=Va(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,s=n.scrollLeft,a=n.scrollTop,n=new Ft(s+=Math.min(o,Math.max(o-(n.clientWidth-e.width),0)),a+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),nc(this,e,(function(e){(e=(e=Yt(e.target,"firebaseui-id-list-box-dialog-button"))&&Zl(e,"listboxid"))&&(Rc.call(i),t(e))}))}function th(){return Ja(this,"firebaseui-id-phone-number")}function nh(){return Ja(this,"firebaseui-id-country-selector")}function ih(){return Ja(this,"firebaseui-id-phone-number-error")}function rh(e,t){var n=e.a,i=sh("1-US-0",n),r=null;if(!(r=t&&sh(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");ch.call(this,r,e)}function sh(e,t){return!(!(e=mo(e))||!$(t,e))}function oh(e){return"firebaseui-flag-"+e.f}function ah(e){var t=this;eh.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+oh(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){ch.call(t,n,e,!0),t.O().focus()}),this.Ba)}function ch(e,t,n){var i=mo(e);i&&(n&&((t=go(t,n=Y(ma(th.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),va(th.call(this),n))),t=mo(this.Ba),this.Ba=e,e=Ja(this,"firebaseui-id-country-selector-flag"),t&&ga(e,oh(t)),pa(e,oh(i)),Gt(Ja(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function uh(e,t,n,i,r,s,o,a,c,u){Dc.call(this,yu,{Gb:t,Aa:c||null,Va:!!n,ia:!!s},u,"phoneSignInStart",{F:i,D:r}),this.H=a||null,this.M=t,this.l=e,this.w=n||null,this.pa=o||null}function lh(e,t,n,i){try{var r=t.U(ea)}catch(e){return}r?Qo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ln("Verifying...").toString()),Nh(e,t.I(T(e.cc,e),[Co(r),n],(function(n){var i=Mc(t);t.$("firebaseui-icon-done",ln("Code sent!").toString());var s=setTimeout((function(){t.h(),t.m(),ha("phoneSignInFinish",e,i,r,15,n)}),1e3);Nh(e,(function(){t&&t.h(),clearTimeout(s)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(ta),Qo=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=ln("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void rc(t.B(),Rn().toString());case"auth/admin-restricted-operation":if(Uo(xh(e)))return n=Mc(t),t.m(),void ha("handleUnauthorizedUser",e,n,Co(r),Fl.auth.PhoneAuthProvider.PROVIDER_ID);i=nl(n);break;default:i=nl(n)}t.a(i)}})))):Zo?rc(t.u(),ln("Solve the reCAPTCHA").toString()):!Zo&&i&&t.i().click():(t.O().focus(),rc(t.B(),Rn().toString()))}function hh(e,t,n,i,r){Dc.call(this,bu,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function dh(e,t,n,i,r,s,o){Dc.call(this,Bc,{email:n,Va:!!t,ia:!!s},o,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fh(e,t,n,i,r,s,o){Dc.call(this,nu,{kc:e,yb:n,Eb:!!i},o,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=i}function ph(e,t,n,i,r,s){Dc.call(this,iu,{email:e},s,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function gh(e,t){this.$=!1;var n=bh(t);if(vh[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');vh[n]=this,this.a=e,this.u=null,this.Y=!1,mh(this.a),this.h=Fl.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),mh(this.h),this.h.setPersistence&&this.h.setPersistence(Fl.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Ro,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Sr.Xa(),this.j=this.C=null,this.da=this.A=!1}function mh(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}a(uh,Dc),uh.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Uc(this,this.O(),this.i()),Fc(this,this.i(),this.l),this.O().focus(),Pl(this.O(),(this.O().value||"").length),Dc.prototype.v.call(this)},uh.prototype.o=function(){this.w=this.l=null,Dc.prototype.o.call(this)},A(uh.prototype,{Cb:Ac,O:th,B:ih,ea:function(e,t,n){var i=this,r=th.call(this),s=nh.call(this),o=ih.call(this),a=e||wo,c=a.a;if(0==c.length)throw Error("No available countries provided.");rh.call(i,a,t),nc(this,s,(function(){ah.call(i,a)})),ec(this,r,(function(){sc(o)&&(Za(r,!0),ic(o));var e=Y(ma(r)||""),t=mo(this.Ba),n=go(a,e);e=sh("1-US-0",c),n.length&&n[0].b!=t.b&&(t=n[0],ch.call(i,"1"==t.b&&e?"1-US-0":t.c,a))})),n&&tc(this,r,(function(){n()}))},U:function(e){var t=Y(ma(th.call(this))||""),n=(e=e||wo).a,i=go(wo,t);if(i.length&&!$(n,i[0]))throw va(th.call(this)),th.call(this).focus(),rc(ih.call(this),ln("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=mo(this.Ba),i.length&&i[0].b!=n.b&&ch.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Io(this.Ba,t):null},Ja:nh,ba:function(){return Ja(this,"firebaseui-recaptcha-container")},u:function(){return Ja(this,"firebaseui-id-recaptcha-error")},i:Cu,ua:Su,P:ku}),la.phoneSignInStart=function(e,t,n,i){var r=function(e){var t=null;if(Po(e).forEach((function(e){e.provider==Fl.auth.PhoneAuthProvider.PROVIDER_ID&&I(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=oe(e.recaptchaParameters))})),t){var n=[];ua.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(xh(e))||{};Qo=null,Zo=!(r&&"invisible"===r.size);var s=sl(e),o=function(e){var t=(e=No(e,Fl.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&vo(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Eo(e.loginHint)),t&&t[0]||n&&mo(n.a)||null}(xh(e)),a=s?function(e){var t=null;return(e=No(e,Fl.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Eo(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(xh(e)):null;o=n&&n.a||o&&o.c||null,n=n&&n.Aa||a,(a=jo(xh(e)))&&yo(a),ea=a?new po(jo(xh(e))):wo;var c=new uh((function(t){lh(e,c,u,!(!t||!t.keyCode))}),Zo,s?null:function(){u.clear(),c.m(),ol(e,t)},$o(xh(e)),Ho(xh(e)),s,ea,o,n);c.render(t),_h(e,c),i&&c.a(i),r.callback=function(t){c.u()&&ic(c.u()),Qo=t,Zo||lh(e,c,u)},r["expired-callback"]=function(){Qo=null};var u=new Fl.auth.RecaptchaVerifier(Zo?c.ba():c.i(),r,Eh(e).app);Nh(e,c.I(T(u.render,u),[],(function(e){ta=e}),(function(n){n.name&&"cancel"==n.name||(n=nl(n),c.m(),ol(e,t,void 0,n))})))},la.prefilledEmailSignIn=function(e,t,n){var i=new Ll;i.render(t),_h(e,i),Nh(e,i.I(T(Ih(e).fetchSignInMethodsForEmail,Ih(e)),[n],(function(r){i.m();var s=!(!rl(e)||!Sh(e));cl(e,t,r,n,void 0,s)}),(function(r){r=nl(r),i.m(),ha("signIn",e,t,n,r)})))},a(hh,Dc),hh.prototype.v=function(){this.l(this.i),Dc.prototype.v.call(this)},hh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(hh.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?qt("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];nc(this,r,R(t,Zl(r,"providerId")))}}}),la.providerSignIn=function(e,t,n,i){var r=new hh((function(n){n==Fl.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),ll(e,t,i)):n==Fl.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),ha("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){Nh(e,t.I(T(e.$b,e),[],(function(n){return t.m(),Zu(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Gr("ContinueAsGuest: "+e.code,void 0),e=nl(e),t.a(e))})))}(e,r):il(e,r,n,i),Dh(e),e.l.cancel()}),xo(xh(e)),$o(xh(e)),Ho(xh(e)));r.render(t),_h(e,r),n&&r.a(n),function(e){Dh(e);try{kr(e.l,Do(xh(e)),function(e){var t;return Dh(e),(t=e.Z)||(e=Bo(e=xh(e),Fl.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===Do(xh(e))){if(Fo(xh(e),Fl.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(r){}return il(e,t,Fl.auth.GoogleAuthProvider.PROVIDER_ID,i),Wi(!0)}return r=Fl.auth.GoogleAuthProvider.credential(n.credential),s=!1,r=t.I(T(e.ac,e),[r],(function(n){var i=Mc(t);t.m(),ha("callback",e,i,Wi(n)),s=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Mc(t);t.m(),ha("callback",e,i,zi(n))}else n&&"auth/admin-restricted-operation"==n.code&&Uo(xh(e))?(n=Mc(t),t.m(),ha("handleUnauthorizedUser",e,n,null,Fl.auth.GoogleAuthProvider.PROVIDER_ID)):(n=nl(n),t.a(n))})),Nh(e,r),r.then((function(){return s}),(function(){return!1}))}var r,s;return n&&t.a(ln("The selected credential for the authentication provider is not supported!").toString()),Wi(!1)}(e,e.g,t)}))}catch(e){}}(e)},la.sendEmailLinkForSignIn=function(e,t,n,i){var r=new pl;r.render(t),_h(e,r),ul(e,r,n,i,(function(i){r.m(),i&&"auth/admin-restricted-operation"==i.code&&Uo(xh(e))?ha("handleUnauthorizedUser",e,t,n,Fl.auth.EmailAuthProvider.PROVIDER_ID):(i=nl(i),ha("signIn",e,t,n,i))}))},a(dh,Dc),dh.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Pl(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},dh.prototype.o=function(){this.u=this.i=null,Dc.prototype.o.call(this)},A(dh.prototype,{l:Lu,M:xu,w:Du,H:Mu,j:Uu,U:Cu,P:Su,B:ku}),la.signIn=function(e,t,n,i){var r=rl(e),s=new dh((function(){var t=s,n=t.j()||"";n&&al(e,t,n)}),r?null:function(){s.m(),ol(e,t,n)},n,$o(xh(e)),Ho(xh(e)),r);s.render(t),_h(e,s),i&&s.a(i)},a(fh,Dc),fh.prototype.v=function(){var e=this,t=Ja(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&nc(this,t,(function(){e.i()})),nc(this,this.u(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},fh.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(fh.prototype,{u:Su}),la.handleUnauthorizedUser=function(e,t,n,i){function r(){ol(e,t)}i===Fl.auth.EmailAuthProvider.PROVIDER_ID?r=function(){ll(e,t)}:i===Fl.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){ha("phoneSignInStart",e,t)});var s=null,o=null;i===Fl.auth.EmailAuthProvider.PROVIDER_ID&&Mo(xh(e))?(s=function(e){return(e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(xh(e)),o=function(e){if((e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(xh(e))):Uo(xh(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(xh(e)),o=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(xh(e)));var a=new fh(n,(function(){a.m(),r()}),s,o,$o(xh(e)),Ho(xh(e)));a.render(t),_h(e,a)},a(ph,Dc),ph.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},ph.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(ph.prototype,{u:Cu,B:Su,w:ku}),la.unsupportedProvider=function(e,t,n){var i=new ph(n,(function(){i.m(),ha("passwordRecovery",e,t,n)}),(function(){i.m(),ol(e,t,n)}),$o(xh(e)),Ho(xh(e)));i.render(t),_h(e,i)};var vh={};function bh(e){return e||"[DEFAULT]"}function yh(e){return Dh(e),e.i||(e.i=Ah(e,(function(t){return t&&!to(Ch(e))?Wi(Eh(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fh(e,t)}))):Wi(Ih(e).getRedirectResult().then((function(t){return Ao(xh(e))&&!t.user&&e.j&&!e.j.isAnonymous?Eh(e).getRedirectResult():t})))}))),e.i}function _h(e,t){Dh(e),e.g=t}var wh=null;function Ih(e){return Dh(e),e.h}function Eh(e){return Dh(e),e.a}function Ch(e){return Dh(e),e.oa}function Sh(e){return Dh(e),e.O?e.O.emailHint:void 0}function kh(e){return"signIn"===((e=new je(e)).a.a.get(Ve.ub)||null)&&!!e.a.a.get(Ve.$a)}function Th(e,t,n,i){Dh(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var s=h.document;e.C?e.C.then((function(){"complete"==s.readyState?Rh(e,t):si(window,"load",(function(){Rh(e,t)}))})):"complete"==s.readyState?Rh(e,t):si(window,"load",(function(){Rh(e,t)}))}function Rh(e,t){var n=or(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),wh){var i=wh;Dh(i),to(Ch(i))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),wh.reset()}if(wh=e,e.T=n,function(e,t){e.L=null,e.J=new Ei(t),e.J.register(),ii(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=xh(e);(n=Xo(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),js(new qs)&&js(new $s)){t=or(t,"Could not find the FirebaseUI widget element on the page."),n=(n=ye(n=ar(),i=co(xh(e).a,"queryParameterForSignInSuccessUrl")))?wt(Et(n)).toString():null;e:{i=ar();var r=qo(xh(e));for(s in i=ye(i,r)||"",aa)if(aa[s].toLowerCase()==i.toLowerCase()){var s=aa[s];break e}s="callback"}switch(s){case"callback":n&&(s=Ch(e),Zs(Gs,n,s)),e.nb()?ha("callback",e,t):ol(e,t,Sh(e));break;case"resetPassword":ha("passwordReset",e,t,hl(),dl());break;case"recoverEmail":ha("emailChangeRevocation",e,t,hl());break;case"revertSecondFactorAddition":ha("revertSecondFactorAddition",e,t,hl());break;case"verifyEmail":ha("emailVerification",e,t,hl(),dl());break;case"verifyAndChangeEmail":ha("verifyAndChangeEmail",e,t,hl(),dl());break;case"signIn":ha("emailLinkSignInCallback",e,t,ar()),Mh();break;case"select":n&&(s=Ch(e),Zs(Gs,n,s)),ol(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Xo(t=xh(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(s=new Xu(ln("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),_h(e,s);t=e.g&&"blank"==e.g.Ga&&zo(xh(e)),ro(Ch(e))&&!t&&(Lh(e,(t=ro(Ch(e))).a),Qs(Ks,Ch(e)))}function Ah(e,t){if(e.A)return t(Ph(e));if(Nh(e,(function(){e.A=!1})),Ao(xh(e))){var n=new Fi((function(n){Nh(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Ph(e))))})))}));return Nh(e,n),n}return e.A=!0,t(null)}function Ph(e){return Dh(e),Ao(xh(e))&&e.j&&e.j.isAnonymous?e.j:null}function Nh(e,t){if(Dh(e),t){e.s.push(t);var n=function(){W(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Oh(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Lh(e,t){e.a.tenantId=t,e.h.tenantId=t}function xh(e){return Dh(e),e.ca}function Dh(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Mh(){var e=ar();if(kh(e)){for(var t in e=new je(e),Ve)Ve.hasOwnProperty(t)&&Me(e.a.a,Ve[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=h.document.title;h.history&&h.history.replaceState&&h.history.replaceState(t,n,e.toString())}}function Uh(e){return Dh(e),Ih(e).signOut()}function Fh(e,t,n){if(Dh(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Jo(xh(e));return Wi().then((function(){return i(new xn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return zi(t)}function Bh(e,t,n,i){Dc.call(this,Eu,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function jh(e,t,n,i,r){Dc.call(this,Iu,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function qh(e){Dc.call(this,Wc,void 0,e,"spinner")}function $h(e){for(var t in this.a=new so,oo(this.a,"authDomain"),oo(this.a,"displayMode",Jh),oo(this.a,"tenants"),oo(this.a,"callbacks"),oo(this.a,"tosUrl"),oo(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{ao(this.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}}function Hh(e){return e.a.get("callbacks")||{}}function Vh(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Wh(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function zh(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Qh))throw Error("Invalid tenant configuration!")}function Kh(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Qh]))return Gr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Gr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function Gh(e,t,n){return e=function(e,t){var n=Yh,i=void 0===i?{}:i;return zh(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Qh],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(t=gh.prototype).nb=function(){return Dh(this),!!ro(Ch(this))||kh(ar())},t.start=function(e,t){Th(this,e,t)},t.Db=function(){Dh(this),this.Z=!0},t.reset=function(){Dh(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&wi(this.J),Oh(this),this.O=null,Mh(),Qs(Ks,Ch(this)),Dh(this),this.l.cancel(),this.i=Wi({user:null,credential:null}),wh==this&&(wh=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],no(Ch(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Uh(this).then((function(){e.C=null}),(function(){e.C=null})))},t.ib=function(e){Dh(this);var t,n=this.ca;for(t in e)try{ao(n.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}rt&&ao(n.a,"popupMode",!1),jo(n),!this.da&&Go(xh(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},t.Wb=function(){Dh(this);var e=xh(this),t=co(e.a,"widgetUrl");e=qo(e);for(var n,i=t.search(be),r=0,s=[];0<=(n=ve(t,r,e,i));)s.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);s.push(t.substr(r)),t=s.join("").replace(_e,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,xh(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=ir(i,e))&&e.focus()):Ut(window.location,i)},t.Wa=function(){var e=this;return Dh(this),this.h.app.delete().then((function(){var t=bh(Ch(e));delete vh[t],e.reset(),e.$=!0}))},t.Ib=function(e,t){Dh(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Wo(xh(this)))return zi(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Wo(e)){var t={url:ar(),handleCodeInApp:!0};(e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var n=ar();n instanceof we||(n=Se(n)),e instanceof we||(e=Se(e));var i=n;n=new we(i);var r=!!e.j;r?Ie(n,e.j):r=!!e.A,r?n.A=e.A:r=!!e.h,r?n.h=e.h:r=null!=e.C;var s=e.g;if(r)Ee(n,e.C);else if(r=!!e.g)if("/"!=s.charAt(0)&&(i.h&&!i.g?s="/"+s:-1!=(i=n.g.lastIndexOf("/"))&&(s=n.g.substr(0,i+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");for(var o=[],a=0;a<s.length;){var c=s[a++];"."==c?i&&a==s.length&&o.push(""):".."==c?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==s.length&&o.push("")):(o.push(c),i=!0)}s=o.join("/")}return r?n.g=s:r=""!==e.a.toString(),r?Ce(n,Fe(e.a)):r=!!e.s,r&&(n.s=e.s),t.url=n.toString(),t}return null}(xh(this)),s=new je(r.url);return function(e,t){t?e.a.a.set(Ve.Sa,t):Me(e.a.a,Ve.Sa)}(s,i),t&&t.a&&(function(e,t,n){Zs(Js,Rs(e,JSON.stringify(ss(t))),n)}(i,t,Ch(this)),$e(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ve.Qa,t?"1":"0"):Me(e.a.a,Ve.Qa)}(s,function(e){return!(!(e=No(e,Fl.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(xh(this))),Ah(this,(function(t){return t&&((t=t.uid)?s.a.a.set(Ve.Pa,t):Me(s.a.a,Ve.Pa)),r.url=s.toString(),Ih(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=Ch(n),r={};r.email=e,Zs(Ys,Rs(i,JSON.stringify(r)),t)}),(function(e){throw Qs(Js,Ch(n)),Qs(Ys,Ch(n)),e}))},t.bc=function(e,t){Dh(this);var n=this;return Ih(this).signInWithEmailAndPassword(e,t).then((function(i){return Ah(n,(function(r){return r?Uh(n).then((function(){return Fh(n,{code:"auth/email-already-in-use"},Fl.auth.EmailAuthProvider.credential(e,t))})):i}))}))},t.Yb=function(e,t){Dh(this);var n=this;return Ah(this,(function(i){if(i){var r=Fl.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(r)}return Ih(n).createUserWithEmailAndPassword(e,t)}))},t.ac=function(e){Dh(this);var t=this;return Ah(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fh(t,n,e)})):Ih(t).signInWithCredential(e)}))},t.dc=function(e){Dh(this);var t=this,n=this.i;return this.i=null,Ah(this,(function(n){return n&&!to(Ch(t))?n.linkWithRedirect(e):Ih(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},t.cc=function(e,t){Dh(this);var n=this;return Ah(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Ar(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fh(n,e);throw e}))})):Eh(n).signInWithPhoneNumber(e,t).then((function(e){return new Ar(e)}))}))},t.$b=function(){return Dh(this),Eh(this).signInAnonymously()},t.Xb=function(e,t){return Dh(this),Ih(this).signInWithEmailAndPassword(e,t)},a(Bh,Dc),Bh.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Pl(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},Bh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Bh.prototype,{l:Lu,H:xu,u:Du,B:Mu,j:Uu,M:Cu,w:ku}),a(jh,Dc),jh.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?qt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var s=i[r];nc(e,s,R(n,Zl(s,"tenantId")))}}(this,this.i),Dc.prototype.v.call(this)},jh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},a(qh,Dc);var Yh=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Jh="optionFirst",Xh={pc:Jh,oc:"identifierFirst"},Qh="*";function Zh(e,t){var n=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new $h(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function ed(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(t=Zh.prototype).Ub=function(e,t){var n=this;ed(this);var i=e.apiKey;return new Fi((function(e,r){if(n.a.hasOwnProperty(i)){var s=Hh(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xh)if(Xh[t]===e)return Xh[t];return Jh}(n.a[i])===Jh){var o=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Qh])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Gr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&o.push(e)}));var a=function(t){t={tenantId:t,providerIds:Kh(n.a[i],t||"_")},e(t)};if(1===o.length)return void a(o[0].tenantId);n.g=new jh((function(e){ed(n),s&&s(),a(e)}),o,Vh(n.a[i]),Wh(n.a[i]))}else n.g=new Bh((function(){var r=n.g.j();if(r){for(var o=0;o<t.length;o++){var a=Kh(n.a[i],t[o]||"_",r);if(0!==a.length)return r={tenantId:t[o],providerIds:a,email:r},ed(n),s&&s(),void e(r)}n.g.a(On({code:"no-matching-tenant-for-email"}).toString())}}),Vh(n.a[i]),Wh(n.a[i]));n.g.render(n.s),(r=Hh(n.a[i]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",n.pb(c),r(c)}}))},t.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;zh(this.a[e],t||"_");try{this.i=Fl.app(n).auth()}catch(r){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=Fl.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},t.Zb=function(e,t){var n=this;return new Fi((function(i,r){function s(t,i){n.j=new gh(e),Th(n.j,n.s,t,i)}var o=e.app.options.apiKey;n.a.hasOwnProperty(o)||r(Error("Invalid project configuration: API key is invalid!"));var a=Gh(n.a[o],e.tenantId||"_",t&&t.providerIds);ed(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var c,u=Hh(n.a[o]).signInUiShown||null,l=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=$t("firebaseui-id-page-callback",n.s))&&ic(t),n.h=new qh,n.h.render(n.s)):l||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),l=!0,u&&u(e.tenantId))},a.callbacks=r,a.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),n.j?n.j.Wa().then((function(){s(a,c)})):s(a,c)}))},t.reset=function(){var e=this;return Wi().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,ed(e)}))},t.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){ed(e),e.h=new qh,e.g=e.h,e.h.render(e.s),e.A=null}),500))},t.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},t.Bb=function(){return ed(this),this.g=new zu,this.g.render(this.s),Wi()},t.pb=function(e){var t,n=this,i=On({code:e.code}).toString()||e.message;ed(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Ju(i,t),this.g.render(this.s)},t.Rb=function(e){var t=this;return Wi().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(zh(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=Hh(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Zh),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Zh.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Zh.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Zh.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Zh.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Zh.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Zh.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Zh.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Zh.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Zh.prototype.Rb),O("firebaseui.auth.AuthUI",gh),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=bh(e),vh[e]?vh[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",gh.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",gh.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",gh.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",gh.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",gh.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",gh.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",gh.prototype.nb),O("firebaseui.auth.AuthUIError",xn),O("firebaseui.auth.AuthUIError.prototype.toJSON",xn.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",na),O("firebaseui.auth.CredentialHelper.NONE",ia),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Fi.prototype.catch=Fi.prototype.Ca,Fi.prototype.finally=Fi.prototype.fc}).apply(void 0!==e?e:"undefined"!=typeof self?self:window)}.apply(void 0!==e?e:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=n(yg));var Sg=firebaseui.auth;Og();const kg=is({apiKey:"AIzaSyDIoIRzEVLYUAacFuhtdxkAGV2NgLE6g88",authDomain:"filmoteka-by-10x.firebaseapp.com",projectId:"filmoteka-by-10x",storageBucket:"filmoteka-by-10x.appspot.com",messagingSenderId:"584362052438",appId:"1:584362052438:web:cf4a6cf976e80465e364f7",databaseURL:"https://filmoteka-by-10x-default-rtdb.europe-west1.firebasedatabase.app/"}),Tg=function(e=rs()){const t=Xr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Xr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(er(n.getOptions(),null!=t?t:{}))return e;ih(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:kp,persistence:[Rf,pf,mf]}),i=Bi("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Pp)return;const i=null==t?void 0:t.token;Np!==i&&(Np=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){dr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){dr(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Ui("auth");return s&&rd(n,`http://${s}`),n}(kg);!async function(){e=Tg,t=e=>{e?(Og(),c.loginButton.classList.add("visually-hidden"),c.logoutButton.classList.remove("visually-hidden"),function(e){const{displayName:t,uid:n,email:i}=e;console.log("You're logged in as",t),console.log("Your uid:",n),console.log("Your email:",i)}(e)):(c.logoutButton.classList.add("visually-hidden"),c.loginButton.classList.remove("visually-hidden"),console.log("You're not logged in.")),function(e){switch(Nl()){case"watched":Xg();break;case"queue":Qg()}}(Boolean(e))},dr(e).onAuthStateChanged(t,n,i);var e,t,n,i}();const Rg={signInFlow:"popup",signInOptions:[Id.PROVIDER_ID,vd.PROVIDER_ID]},Ag=new Sg.AuthUI(Tg);c.logoutButton.addEventListener("click",(async function(){await(e=Tg,dr(e).signOut());var e})),c.loginButton.addEventListener("click",Ng),c.authCancelButton.addEventListener("click",(()=>{Og()})),c.myLibraryLink.addEventListener("click",(()=>{Tg.currentUser||Ng()}));const Pg=()=>Boolean(Tg.currentUser);function Ng(){Ag.start(c.authForm,Rg),c.auth.classList.remove("visually-hidden")}function Og(){c.auth.classList.add("visually-hidden")}const Lg=new qn,xg=function(e=rs(),t){const n=Xr(e,"database").getImmediate({identifier:t}),i=Fi("database");return i&&function(e,t,n,i={}){(e=dr(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Ds("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ds('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xs(Xs.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:qi(i.mockUserToken,e.app.options.projectId);s=new Xs(t)}!function(e,t,n,i){e.repoInfo_=new Zs(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...i),n}(kg);var Dg=new WeakMap;class Mg{async includes(e){if(!Tg.currentUser)return!1;try{const t=await Cl(_l(xg,`/users/${Tg.currentUser.uid}/${n(Hn)(this,Dg)}/${e}`));return t.exists()}catch(e){return console.error("Include error:",e),!1}}async getIds(){if(!Tg.currentUser)return[];try{const e=await Cl(_l(xg,`/users/${Tg.currentUser.uid}/${n(Hn)(this,Dg)}`));let t=e.exists()?e.val():{};return Object.keys(t)}catch(e){console.error("getIds error:",e)}return[]}async addId(e){if(Tg.currentUser)try{await El(_l(xg,`/users/${Tg.currentUser.uid}/${n(Hn)(this,Dg)}`),{[e]:e})}catch{}}async removeId(e){var t;if(Tg.currentUser)try{await(t=_l(xg,`/users/${Tg.currentUser.uid}/${n(Hn)(this,Dg)}/${e}`),Fu("remove",t._path),Il(t,null))}catch{}}async getItems(e){if(!Tg.currentUser)return{page:0,total_pages:0,total_results:0,results:[]};const t=await this.getIds(),n=20*(e-1),i=n+20,r=t.slice(n,i),s=t.length;return{page:e,total_pages:Math.ceil(s/20),total_results:s,results:(await Lg.getFilmMassiveById(r)).map((e=>(e.genre_ids=e.genres.map((({id:e})=>e)),e)))}}constructor(e){n(Kn)(this,Dg,{writable:!0,value:void 0}),n(Jn)(this,Dg,e),this.getIds()}}const Ug=new Mg("watched"),Fg=new Mg("queued"),Bg=Ug.getItems.bind(Ug),jg=(Ug.getIds.bind(Ug),Ug.includes.bind(Ug)),qg=Ug.addId.bind(Ug),$g=Ug.removeId.bind(Ug),Hg=Fg.getItems.bind(Fg),Vg=(Fg.getIds.bind(Fg),Fg.includes.bind(Fg)),Wg=Fg.addId.bind(Fg),zg=Fg.removeId.bind(Fg);async function Kg({getMoviesCallback:e,renderCallback:t,runIfNoResultsCallback:n,preventRenderIfNoResults:i}){console.log("name",e.name);try{k(),c.plug.innerHTML="";const{total_pages:s,results:o}=await e(1);if(0===s&&n&&n(),0===s&&i)return;t(o),r=async n=>{k(),window.scrollTo({top:0,left:0});const{results:i}=await e(n);t(i),T()},f=1,I=s,E(),d instanceof Function&&(d=r)}finally{T()}var r}function Gg(e){const t=c.galleryList.querySelector(`[data-id="${e}"]`).closest(".collection_item");t&&t.remove()}const Yg=Kg.bind(null,{getMoviesCallback:$n.getTrendingFilmsByPage.bind($n),renderCallback:function(e){let t=e.map(a).join("");c.galleryList.innerHTML="",c.galleryList.insertAdjacentHTML("beforeend",t)},runIfNoResultsCallback:null}),Jg=Kg.bind(null,{getMoviesCallback:$n.getFilmSearchByPage.bind($n),renderCallback:l,runIfNoResultsCallback:function(){console.log("no data"),c.searchErrorMessage.style.display="block",c.searchButton.removeAttribute("disabled")},preventRenderIfNoResults:!0}),Xg=Kg.bind(null,{getMoviesCallback:Bg,renderCallback:l,runIfNoResultsCallback:()=>{c.plug.innerHTML=`\n    <div class="plug__container">\n      <h1 class="plug__title">Ooops! Is nothing here yet!</h1>      \n      <img class="plag__gif" src="${"https://i.gifer.com/gg7.gif"}" />\n      <p>Hurry up and watch a movie!</p>\n      <button type="button" class="plug__button" data-action="go home">\n        Go Home!\n      </button>\n      <button type="button" class="plug__button" data-action="go queue">\n        Go Queue!\n      </button>\n    </div>\n  `}}),Qg=Kg.bind(null,{getMoviesCallback:Hg,renderCallback:l,runIfNoResultsCallback:()=>{c.plug.innerHTML=`\n    <div class="plug__container">\n      <h1 class="plug__title">Ooops! Is nothing here yet!</h1>\n      <img class="plag__gif" src="${"https://i.gifer.com/C4j.gif"}" />\n      <p>Hurry up and add the movie!</p>\n      <button type="button" class="plug__button" data-action="go home">\n        Go Home!\n      </button>  \n    </div>\n  `}});Yg(),c.formSearch.addEventListener("submit",(async function(e){e.preventDefault();const{elements:{searchQuery:t},lastElementChild:n}=e.target,i=e.target[1];if($n.query=t.value.trim(),""===$n.query)return n.style.display="block",void e.currentTarget.reset();try{k(),i.setAttribute("disabled",!0),n.style.display="none",i.removeAttribute("disabled"),Jg()}catch{console.error()}finally{c.formSearch.reset(),T(),console.log("finally")}}));const Zg=({poster_path:e,title:t,vote_average:n,vote_count:i,popularity:r,original_title:s,genres:o,overview:a,id:c})=>null===e?`\n  <div class="movie-card" data-action=${c}>\n    <div class="cardItem__image">\n         <p class="no-poster">Poster coming soon</p>\n    </div>\n    <div class="cardItem__wrapper">\n        <h2 class="cardItem__name">${t}</h2>\n        <p class="cardItem__text">\n          Vote / Votes<span class="cardItem__averageVote">${n}</span>/<span\n            class="cardItem__countVote"\n            >${i}</span\n          >\n        </p>\n        <p class="cardItem__text">\n          Popularity<span class="cardItem__data">${r}</span>\n        </p>\n        <p class="cardItem__text">\n          Original&nbspTitle<span class="cardItem__title">${s}</span>\n        </p>\n        <div class="genres">\n          <p class="cardItem__genre">Genre</p>\n          <p class="cardItem__genreList">${o.map((e=>e.name)).join(", ")}</p>\n        </div>\n          <p class="cardItem__about">About</p>\n          <p class="cardItem__description">${a}\n        </p>\n       <div class="modal-btn__wrapper">\n          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>\n          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>\n       </div>\n    </div>   \n  </div>\n      `:`\n  <div class="movie-card" data-action=${c}>\n    <div class="cardItem__image">\n        <img class="image" src="https://image.tmdb.org/t/p/w500${e}" alt="${c}" />\n    </div>\n    <div class="cardItem__wrapper">\n        <h2 class="cardItem__name">${t}</h2>\n        <p class="cardItem__text">\n          Vote / Votes<span class="cardItem__averageVote">${n}</span>/<span\n            class="cardItem__countVote"\n            >${i}</span\n          >\n        </p>\n        <p class="cardItem__text">\n          Popularity<span class="cardItem__data">${r}</span>\n        </p>\n        <p class="cardItem__text">\n          Original&nbspTitle<span class="cardItem__title">${s}</span>\n        </p>\n        <div class="genres">\n          <p class="cardItem__genre">Genre</p>\n          <p class="cardItem__genreList">${o.map((e=>e.name)).join(", ")}</p>\n        </div>\n          <p class="cardItem__about">About</p>\n          <p class="cardItem__description">${a}\n        </p>\n       <div class="modal-btn__wrapper">\n          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>\n          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>\n       </div>\n    </div>   \n  </div>\n      `,em=new qn;async function tm(e){try{const{official:t,key:n}=await em.getTrailer(e);if(!t)return console.log(t);console.log(t),function(){const e='<button type="button" class="trailer-button"><i class="fa fa-play-circle" aria-hidden="true"></i></button>';c.modalCardItem.insertAdjacentHTML("beforeend",e)}(),function(e){console.log(e);const t=`<iframe\n      width="560"\n      height="315"\n      src="https://www.youtube.com/embed/${e}"\n      title="YouTube video player"\n      frameborder="0"\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen\n      class="trailer hidden-trailer"\n    ></iframe>`;c.modalCardItem.insertAdjacentHTML("beforeend",t)}(n),c.trailerBtn=document.querySelector(".trailer-button"),c.trailerVideo=document.querySelector(".trailer"),c.trailerBtn.addEventListener("click",nm)}catch{}}const nm=()=>c.trailerVideo.classList.remove("hidden-trailer");const im=new qn;let rm=null;function sm(e){e.currentTarget!==c.movieModalCloseBtn&&e.currentTarget!==e.target&&"Escape"!==e.code||(document.body.classList.toggle("modal-open"),c.movieModalContainer.innerHTML="",c.movieModalBackDrop.classList.add("modal-hidden"),nm(),console.log("killModal",rm),"watched"===Nl()&&jg(rm).then((e=>{e||Gg(rm)})),"queue"===Nl()&&Vg(rm).then((e=>{e||Gg(rm)})))}c.galleryList.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.toggle("modal-open");const t=e.target.closest(".card");rm=Number(t.dataset.id);const n=e.target.classList.contains("card_img"),i=e.target.classList.contains("card_no-img");if(!n&&i)return;c.movieModalBackDrop.classList.remove("modal-hidden"),im.getFilmById(rm).then((e=>{!function(e){const t=Zg(e);c.movieModalContainer.innerHTML=t,c.modalWatchedButton=document.querySelector("[data-action-modal-watched]"),c.modalQueueButton=document.querySelector("[data-action-modal-queue]"),c.modalWatchedButton.addEventListener("click",(async e=>{Pg()?(await jg(rm)?$g(rm):qg(rm),om(rm)):Ng()})),c.modalQueueButton.addEventListener("click",(async e=>{Pg()?(await Vg(rm)?zg(rm):Wg(rm),om(rm)):Ng()})),om(rm)}(e),c.movieModalBackDrop.addEventListener("mousedown",sm),document.addEventListener("keydown",sm),c.modalCardItem=document.querySelector(".cardItem__image"),tm(rm)})).catch(console.log)})),c.movieModalCloseBtn.addEventListener("click",sm),c.movieModalBackDrop.classList.contains("modal-hidden")&&(c.movieModalBackDrop.removeEventListener("mousedown",sm),document.removeEventListener("keydown",sm));async function om(e){c.modalWatchedButton.textContent=await jg(e)?"Remove from watched":"Add to watched",c.modalQueueButton.textContent=await Vg(e)?"Remove from queue":"Add to queue"}var am,cm=/^\s+|\s+$/g,um=/^[-+]0x[0-9a-f]+$/i,lm=/^0b[01]+$/i,hm=/^0o[0-7]+$/i,dm=parseInt,fm="object"==typeof e&&e&&e.Object===Object&&e,pm="object"==typeof self&&self&&self.Object===Object&&self,gm=fm||pm||Function("return this")(),mm=Object.prototype.toString,vm=Math.max,bm=Math.min,ym=function(){return gm.Date.now()};function _m(e,t,n){var i,r,s,o,a,c,u=0,l=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,s=r;return i=r=void 0,u=t,o=e.apply(s,n)}function p(e){return u=e,a=setTimeout(m,t),l?f(e):o}function g(e){var n=e-c;return void 0===c||n>=t||n<0||h&&e-u>=s}function m(){var e=ym();if(g(e))return v(e);a=setTimeout(m,function(e){var n=t-(e-c);return h?bm(n,s-(e-u)):n}(e))}function v(e){return a=void 0,d&&i?f(e):(i=r=void 0,o)}function b(){var e=ym(),n=g(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return p(c);if(h)return a=setTimeout(m,t),f(c)}return void 0===a&&(a=setTimeout(m,t)),o}return t=Im(t)||0,wm(n)&&(l=!!n.leading,s=(h="maxWait"in n)?vm(Im(n.maxWait)||0,t):s,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==a&&clearTimeout(a),u=0,i=c=r=a=void 0},b.flush=function(){return void 0===a?o:v(ym())},b}function wm(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Im(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==mm.call(e)}(e))return NaN;if(wm(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=wm(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(cm,"");var n=lm.test(e);return n||hm.test(e)?dm(e.slice(2),n?2:8):um.test(e)?NaN:+e}am=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wm(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),_m(e,t,{leading:i,maxWait:t,trailing:r})},window.addEventListener("scroll",n(am)((function(e){if(e.preventDefault(),document.scrollingElement.scrollTop>=500)return void c.arrow.classList.add("arrow-visible");c.arrow.classList.remove("arrow-visible")}),500));
//# sourceMappingURL=index.c83c729e.js.map
