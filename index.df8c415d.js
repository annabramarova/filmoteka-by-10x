var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),document.body.onload=function(){setTimeout((function(){const e=document.querySelector("#preloader");e.classList.contains("done")||e.classList.add("done")}),1500)};const o=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}];function a({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){let a=[];r.map((e=>o.filter((t=>{t.id===e&&a.push(`${t.name}`)})))),a.length>=3&&a.splice(2,a.length-1,"Other");const c=`https://image.tmdb.org/t/p/original/${t}`,l=i.slice(0,4),u=a.join(", ");return`<li class="collection_item">\n<article class="card" data-id=${e}>\n<span class="card-rating">${s.toFixed(2)}</span>\n<a href="" class="card_link">\n<img class="card_img" width="394" src=${c} alt="{original_title}">\n</a>\n    <div class="card-wrap">\n      <h3 class="card-name">${n}</h3>\n      <p class="card-genres">${u} | ${l}</p>\n    </div>\n</article>\n</li>`}const c={galleryList:document.querySelector(".collection_list"),pagin_box:document.querySelector(".pagin_box"),formSearch:document.querySelector(".search-form"),header:document.querySelector(".header"),logo:document.querySelector(".header .logo"),homeLink:document.querySelector("#home-link"),myLibraryLink:document.querySelector("#my-library-link"),headerButtons:document.querySelectorAll(".header-button"),loginButton:document.querySelector('[data-action="login"]'),logoutButton:document.querySelector('[data-action="logout"]'),watchedButton:document.querySelector('[data-activ="watched"]'),queueButton:document.querySelector('[data-activ="queue"]'),modalWatchedButton:document.querySelector("[data-action-modal-watched]"),modalQueueButton:document.querySelector("[data-action-modal-queue]"),auth:document.querySelector(".auth"),authForm:document.querySelector(".auth__form"),authCancelButton:document.querySelector('.auth [data-action="cancel"]'),movieModalContainer:document.querySelector(".movie-modal__container"),movieModalBackDrop:document.querySelector(".movie-backdrop"),movieModalCloseBtn:document.querySelector(".modal-close-btn"),movieModalWatched:document.querySelector('[data-action="add-to-watched"]'),movieModalQueue:document.querySelector('[data-action="add-to-queue"]')};let l=e=>{};function u(e,t){h=1,_=e,2===_?pagin_rander_two():3===_?pagin_rander_three():4===_?1===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>`:2===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>`:3===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>`:4===h&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>`):5===_?1===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>`:2===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>`:3===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>`:4===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>`:5===h&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${d}</button>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${m}</button>\n    <button type="submit" class="pagin_button">${h}</button>`):6===_?1===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <button type="submit" class="pagin_button">${_}</button>`:2===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>`:3===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>`:4===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>`:5===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${d}</button>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>`:6===h&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">1</button>\n    <button type="submit" class="pagin_button">${d}</button>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button" pagin_accent>${h}</button>`):1===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <button type="submit" class="pagin_button">${y}</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>\n  `:2===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <button type="submit" class="pagin_button">${b}</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>\n  `:3===h?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>\n  `:h>=4&&h<=_-3?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">left</button>\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${_}</button>\n    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>\n  `:h===_-2?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">left</button>\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n    <button type="submit" class="pagin_button">${v}</button>\n  `:h===_-1?c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">left</button>\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>\n    <button type="submit" class="pagin_button">${g}</button>\n  `:h===_&&(c.pagin_box.innerHTML=`\n    <button type="submit" class="pagin_button pagin_button_left">left</button>\n    <button type="submit" class="pagin_button">1</button>\n    <p class="pagin_button pagin_nothing">...</p>\n    <button type="submit" class="pagin_button">${d}</button>\n    <button type="submit" class="pagin_button">${f}</button>\n    <button type="submit" class="pagin_button">${p}</button>\n    <button type="submit" class="pagin_button">${m}</button>\n    <button type="submit" class="pagin_button pagin_accent">${h}</button>`),l instanceof Function&&(l=t)}let h=1,d=h-4,f=h-3,p=h-2,m=h-1,g=h+1,v=h+2,b=h+3,y=h+4,_=1;function w(e){let t=e.map(a).join("");c.galleryList.innerHTML="",c.galleryList.insertAdjacentHTML("beforeend",t)}async function I(e){const{total_pages:t,results:n}=await e(1);w(n),u(t,(async t=>{const{results:n}=await e(t);w(n)}))}c.pagin_box.addEventListener("click",(function(e){if("submit"===e.target.type){if(Number(h)===Number(e.target.innerText))return;return"left"===e.target.innerText?(h--,d=h-4,f=h-3,p=h-2,m=h-1,g=h+1,v=h+2,b=h+3,y=h+4,console.log("page: ",h),l(h),on_pagin_render()):"rigth"===e.target.innerText?(h++,d=h-4,f=h-3,p=h-2,m=h-1,g=h+1,v=h+2,b=h+3,y=h+4,console.log("page: ",h),l(h),on_pagin_render()):(h=Number(e.target.innerText),d=h-4,f=h-3,p=h-2,m=h-1,g=h+1,v=h+2,b=h+3,y=h+4,console.log("page: ",h),l(h),on_pagin_render())}}));var E,k,S={};function C(){S.Loading.arrows({backgroundColor:"rgba(0,0,0,0.2)",svgColor:"#ff6b01"})}function T(){S.Loading.remove()}E=void 0!==e?e:"undefined"!=typeof window?window:S,k=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",r="Circle",s="Arrows",o="Dots",a="Pulse",c="Custom",l="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(h('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(l,m,g,b,y){if(!d("body"))return!1;t||v.Loading.init({});var _=f(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var w={};"object"==typeof m?w=m:"object"==typeof g&&(w=g),t=f(!0,t,w)}var I,E,k="";if("string"==typeof m&&m.length>0&&(k=m),b){var S="";(k=k.length>t.messageMaxLength?p(k).toString().substring(0,t.messageMaxLength)+"...":p(k).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+k+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var C="";if(l===n)I=t.svgSize,E=t.svgColor,I||(I="60px"),E||(E="#32c682"),C='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+E+'" width="'+I+'" height="'+I+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(l===i)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(l===r)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(l===s)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(l===o)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(l===a)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(l===c&&null!==t.customSvgCode&&null===t.customSvgUrl)C=t.customSvgCode||"";else if(l===c&&null!==t.customSvgUrl&&null===t.customSvgCode)C='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(l===c&&(null===t.customSvgUrl||null===t.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;C=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var T=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),A=e.innerWidth,R=T>=A?A-40+"px":T+"px",N='<div style="width:'+R+"; height:"+R+';" class="'+t.className+"-icon"+(k.length>0?" nx-with-message":"")+'">'+C+"</div>",P=e.document.createElement("div");P.id=u.ID,P.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),P.style.zIndex=t.zindex,P.style.background=t.backgroundColor,P.style.animationDuration=t.cssAnimationDuration+"ms",P.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',P.style.display="flex",P.style.flexWrap="wrap",P.style.flexDirection="column",P.style.alignItems="center",P.style.justifyContent="center",t.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.innerHTML=N+S,e.document.getElementById(P.id)||(e.document.body.appendChild(P),t.clickToClose&&e.document.getElementById(P.id).addEventListener("click",(function(){P.classList.add("nx-remove");var e=setTimeout((function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(u.ID))var O=e.document.getElementById(u.ID),L=setTimeout((function(){O.classList.add("nx-remove");var e=setTimeout((function(){null!==O.parentNode&&(O.parentNode.removeChild(O),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(L)}),y);t=f(!0,t,_)},v={Loading:{init:function(n){t=f(!0,u,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return h("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(r,e,t,!0,0)},arrows:function(e,t){g(s,e,t,!0,0)},dots:function(e,t){g(o,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(c,e,t,!0,0)},notiflix:function(e,t){g(l,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(u.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var r=i.getElementsByTagName("p")[0];if(r)r.innerHTML=n;else{var s=e.document.createElement("p");s.id=t.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=t.messageColor,s.style.fontSize=t.messageFontSize,s.innerHTML=n,i.appendChild(s)}}else h("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}},"function"==typeof define&&define.amd?define([],(function(){return k(E)})):"object"==typeof S?S=k(E):E.Notiflix=k(E),(()=>{const e={openModalBtn:document.querySelector("[data-team-modal-open]"),closeModalBtn:document.querySelector("[data-team-modal-close]"),modal:document.querySelector("[data-team-modal]"),body:document.querySelector("body")};function t(){C(),e.modal.classList.toggle("visually-hidden"),T(),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();var A={};function R(e,t){return function(){return e.apply(t,arguments)}}t(A,"default",(function(){return se}),(function(e){return se=e}));const{toString:N}=Object.prototype,{getPrototypeOf:P}=Object,O=(L=Object.create(null),e=>{const t=N.call(e);return L[t]||(L[t]=t.slice(8,-1).toLowerCase())});var L;const x=e=>(e=e.toLowerCase(),t=>O(t)===e),D=e=>t=>typeof t===e,{isArray:M}=Array,U=D("undefined");const F=x("ArrayBuffer");const B=D("string"),j=D("function"),H=D("number"),q=e=>null!==e&&"object"==typeof e,W=e=>{if("object"!==O(e))return!1;const t=P(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},V=x("Date"),$=x("File"),z=x("Blob"),K=x("FileList"),G=x("URLSearchParams");function Y(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),M(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function J(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const X="undefined"==typeof self?void 0===e?void 0:e:self,Q=e=>!U(e)&&e!==X;const Z=(ee="undefined"!=typeof Uint8Array&&P(Uint8Array),e=>ee&&e instanceof ee);var ee;const te=x("HTMLFormElement"),ne=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ie=x("RegExp"),re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Y(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var se={isArray:M,isArrayBuffer:F,isBuffer:function(e){return null!==e&&!U(e)&&null!==e.constructor&&!U(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||N.call(e)===t||j(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&F(e.buffer),t},isString:B,isNumber:H,isBoolean:e=>!0===e||!1===e,isObject:q,isPlainObject:W,isUndefined:U,isDate:V,isFile:$,isBlob:z,isRegExp:ie,isFunction:j,isStream:e=>q(e)&&j(e.pipe),isURLSearchParams:G,isTypedArray:Z,isFileList:K,forEach:Y,merge:function e(){const{caseless:t}=Q(this)&&this||{},n={},i=(i,r)=>{const s=t&&J(n,r)||r;W(n[s])&&W(i)?n[s]=e(n[s],i):W(i)?n[s]=e({},i):M(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Y(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(Y(t,((t,i)=>{n&&j(t)?e[i]=R(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&P(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:O,kindOfTest:x,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!H(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:te,hasOwnProperty:ne,hasOwnProp:ne,reduceDescriptors:re,freezeMethods:e=>{re(e,((t,n)=>{if(j(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];j(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return M(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:J,global:X,isContextDefined:Q,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(q(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=M(e)?[]:{};return Y(e,((e,t)=>{const s=n(e,i+1);!U(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function oe(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}A.default.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ae=oe.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ce[e]={value:e}})),Object.defineProperties(oe,ce),Object.defineProperty(ae,"isAxiosError",{value:!0}),oe.from=(e,t,n,i,r,s)=>{const o=Object.create(ae);return A.default.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),oe.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var le,ue,he,de=oe,fe=n("object"==typeof self?self.FormData:window.FormData);ue=function(e){var t,n,i=Ie(e),r=i[0],s=i[1],o=new be(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=ve[e.charCodeAt(n)]<<18|ve[e.charCodeAt(n+1)]<<12|ve[e.charCodeAt(n+2)]<<6|ve[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=ve[e.charCodeAt(n)]<<2|ve[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=ve[e.charCodeAt(n)]<<10|ve[e.charCodeAt(n+1)]<<4|ve[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},he=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Ee(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(ge[t>>2]+ge[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(ge[t>>10]+ge[t>>4&63]+ge[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var pe,me,ge=[],ve=[],be="undefined"!=typeof Uint8Array?Uint8Array:Array,ye="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_e=0,we=ye.length;_e<we;++_e)ge[_e]=ye[_e],ve[ye.charCodeAt(_e)]=_e;function Ie(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Ee(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(ge[(r=i)>>18&63]+ge[r>>12&63]+ge[r>>6&63]+ge[63&r]);return s.join("")}ve["-".charCodeAt(0)]=62,ve["_".charCodeAt(0)]=63,pe=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},me=function(e,t,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*c-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*m};const ke="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;le=Ce;function Se(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Ce.prototype),t}function Ce(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Re(e)}return Te(e,t,n)}function Te(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Ce.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Le(e,t);let i=Se(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(dt(e,Uint8Array)){const t=new Uint8Array(e);return Pe(t.buffer,t.byteOffset,t.byteLength)}return Ne(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(dt(e,ArrayBuffer)||e&&dt(e.buffer,ArrayBuffer))return Pe(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(dt(e,SharedArrayBuffer)||e&&dt(e.buffer,SharedArrayBuffer)))return Pe(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Ce.from(i,t,n);const r=function(e){if(Ce.isBuffer(e)){const t=0|Oe(e.length),n=Se(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||ft(e.length)?Se(0):Ne(e);if("Buffer"===e.type&&Array.isArray(e.data))return Ne(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Ce.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Ae(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Re(e){return Ae(e),Se(e<0?0:0|Oe(e))}function Ne(e){const t=e.length<0?0:0|Oe(e.length),n=Se(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function Pe(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Ce.prototype),i}function Oe(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Le(e,t){if(Ce.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||dt(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return lt(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ut(e).length;default:if(r)return i?-1:lt(e).length;t=(""+t).toLowerCase(),r=!0}}function xe(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ke(this,t,n);case"utf8":case"utf-8":return Ve(this,t,n);case"ascii":return $e(this,t,n);case"latin1":case"binary":return ze(this,t,n);case"base64":return We(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ge(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function De(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function Me(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ft(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=Ce.from(t,i)),Ce.isBuffer(t))return 0===t.length?-1:Ue(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Ue(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function Ue(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(e,s+i)!==l(t,i)){n=!1;break}if(n)return s}return-1}function Fe(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(ft(i))return o;e[n+o]=i}return o}function Be(e,t,n,i){return ht(lt(t,e.length-n),e,n,i)}function je(e,t,n,i){return ht(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function He(e,t,n,i){return ht(ut(t),e,n,i)}function qe(e,t,n,i){return ht(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function We(e,t,n){return 0===t&&n===e.length?he(e):he(e.slice(t,n))}function Ve(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}Ce.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Ce.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Ce.prototype,"parent",{enumerable:!0,get:function(){if(Ce.isBuffer(this))return this.buffer}}),Object.defineProperty(Ce.prototype,"offset",{enumerable:!0,get:function(){if(Ce.isBuffer(this))return this.byteOffset}}),Ce.poolSize=8192,Ce.from=function(e,t,n){return Te(e,t,n)},Object.setPrototypeOf(Ce.prototype,Uint8Array.prototype),Object.setPrototypeOf(Ce,Uint8Array),Ce.alloc=function(e,t,n){return function(e,t,n){return Ae(e),e<=0?Se(e):void 0!==t?"string"==typeof n?Se(e).fill(t,n):Se(e).fill(t):Se(e)}(e,t,n)},Ce.allocUnsafe=function(e){return Re(e)},Ce.allocUnsafeSlow=function(e){return Re(e)},Ce.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Ce.prototype},Ce.compare=function(e,t){if(dt(e,Uint8Array)&&(e=Ce.from(e,e.offset,e.byteLength)),dt(t,Uint8Array)&&(t=Ce.from(t,t.offset,t.byteLength)),!Ce.isBuffer(e)||!Ce.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},Ce.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ce.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Ce.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Ce.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(dt(t,Uint8Array))r+t.length>i.length?(Ce.isBuffer(t)||(t=Ce.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!Ce.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},Ce.byteLength=Le,Ce.prototype._isBuffer=!0,Ce.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)De(this,t,t+1);return this},Ce.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)De(this,t,t+3),De(this,t+1,t+2);return this},Ce.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)De(this,t,t+7),De(this,t+1,t+6),De(this,t+2,t+5),De(this,t+3,t+4);return this},Ce.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ve(this,0,e):xe.apply(this,arguments)},Ce.prototype.toLocaleString=Ce.prototype.toString,Ce.prototype.equals=function(e){if(!Ce.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Ce.compare(this,e)},Ce.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ke&&(Ce.prototype[ke]=Ce.prototype.inspect),Ce.prototype.compare=function(e,t,n,i,r){if(dt(e,Uint8Array)&&(e=Ce.from(e,e.offset,e.byteLength)),!Ce.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},Ce.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Ce.prototype.indexOf=function(e,t,n){return Me(this,e,t,n,!0)},Ce.prototype.lastIndexOf=function(e,t,n){return Me(this,e,t,n,!1)},Ce.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return Fe(this,e,t,n);case"utf8":case"utf-8":return Be(this,e,t,n);case"ascii":case"latin1":case"binary":return je(this,e,t,n);case"base64":return He(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qe(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Ce.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $e(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function ze(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Ke(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=pt[e[i]];return r}function Ge(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Ye(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Je(e,t,n,i,r,s){if(!Ce.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Xe(e,t,n,i,r){st(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Qe(e,t,n,i,r){st(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Ze(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function et(e,t,n,i,r){return t=+t,n>>>=0,r||Ze(e,0,n,4),me(e,t,n,i,23,4),n+4}function tt(e,t,n,i,r){return t=+t,n>>>=0,r||Ze(e,0,n,8),me(e,t,n,i,52,8),n+8}Ce.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Ce.prototype),i},Ce.prototype.readUintLE=Ce.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},Ce.prototype.readUintBE=Ce.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},Ce.prototype.readUint8=Ce.prototype.readUInt8=function(e,t){return e>>>=0,t||Ye(e,1,this.length),this[e]},Ce.prototype.readUint16LE=Ce.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ye(e,2,this.length),this[e]|this[e+1]<<8},Ce.prototype.readUint16BE=Ce.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ye(e,2,this.length),this[e]<<8|this[e+1]},Ce.prototype.readUint32LE=Ce.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Ce.prototype.readUint32BE=Ce.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Ce.prototype.readBigUInt64LE=mt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Ce.prototype.readBigUInt64BE=mt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Ce.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},Ce.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ye(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},Ce.prototype.readInt8=function(e,t){return e>>>=0,t||Ye(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Ce.prototype.readInt16LE=function(e,t){e>>>=0,t||Ye(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Ce.prototype.readInt16BE=function(e,t){e>>>=0,t||Ye(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Ce.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Ce.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Ce.prototype.readBigInt64LE=mt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Ce.prototype.readBigInt64BE=mt((function(e){ot(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||at(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Ce.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),pe(this,e,!0,23,4)},Ce.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ye(e,4,this.length),pe(this,e,!1,23,4)},Ce.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ye(e,8,this.length),pe(this,e,!0,52,8)},Ce.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ye(e,8,this.length),pe(this,e,!1,52,8)},Ce.prototype.writeUintLE=Ce.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},Ce.prototype.writeUintBE=Ce.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Je(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},Ce.prototype.writeUint8=Ce.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,255,0),this[t]=255&e,t+1},Ce.prototype.writeUint16LE=Ce.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Ce.prototype.writeUint16BE=Ce.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Ce.prototype.writeUint32LE=Ce.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Ce.prototype.writeUint32BE=Ce.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ce.prototype.writeBigUInt64LE=mt((function(e,t=0){return Xe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ce.prototype.writeBigUInt64BE=mt((function(e,t=0){return Qe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ce.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Je(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Ce.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Je(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},Ce.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Ce.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Ce.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Ce.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Ce.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Je(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ce.prototype.writeBigInt64LE=mt((function(e,t=0){return Xe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ce.prototype.writeBigInt64BE=mt((function(e,t=0){return Qe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ce.prototype.writeFloatLE=function(e,t,n){return et(this,e,t,!0,n)},Ce.prototype.writeFloatBE=function(e,t,n){return et(this,e,t,!1,n)},Ce.prototype.writeDoubleLE=function(e,t,n){return tt(this,e,t,!0,n)},Ce.prototype.writeDoubleBE=function(e,t,n){return tt(this,e,t,!1,n)},Ce.prototype.copy=function(e,t,n,i){if(!Ce.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},Ce.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Ce.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=Ce.isBuffer(e)?e:Ce.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const nt={};function it(e,t,n){nt[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function rt(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function st(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new nt.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){ot(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||at(t,e.length-(n+1))}(i,r,s)}function ot(e,t){if("number"!=typeof e)throw new nt.ERR_INVALID_ARG_TYPE(t,"number",e)}function at(e,t,n){if(Math.floor(e)!==e)throw ot(e,n),new nt.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new nt.ERR_BUFFER_OUT_OF_BOUNDS;throw new nt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}it("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),it("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),it("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=rt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=rt(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const ct=/[^+/0-9A-Za-z-_]/g;function lt(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function ut(e){return ue(function(e){if((e=(e=e.split("=")[0]).trim().replace(ct,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ht(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function dt(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ft(e){return e!=e}const pt=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function mt(e){return"undefined"==typeof BigInt?gt:e}function gt(){throw new Error("BigInt not supported")}var vt=le;function bt(e){return A.default.isPlainObject(e)||A.default.isArray(e)}function yt(e){return A.default.endsWith(e,"[]")?e.slice(0,-2):e}function _t(e,t,n){return e?e.concat(t).map((function(e,t){return e=yt(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const wt=A.default.toFlatObject(A.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var It=function(e,t,n){if(!A.default.isObject(e))throw new TypeError("target must be an object");t=t||new(fe||FormData);const i=(n=A.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!A.default.isUndefined(t[e])}))).metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=t)&&A.default.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!A.default.isFunction(r))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(A.default.isDate(e))return e.toISOString();if(!a&&A.default.isBlob(e))throw new de("Blob is not supported. Use a Buffer instead.");return A.default.isArrayBuffer(e)||A.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):vt.from(e):e}function u(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(A.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(A.default.isArray(e)&&function(e){return A.default.isArray(e)&&!e.some(bt)}(e)||A.default.isFileList(e)||A.default.endsWith(n,"[]")&&(a=A.default.toArray(e)))return n=yt(n),a.forEach((function(e,i){!A.default.isUndefined(e)&&null!==e&&t.append(!0===o?_t([n],i,s):null===o?n:n+"[]",l(e))})),!1;return!!bt(e)||(t.append(_t(r,n,s),l(e)),!1)}const h=[],d=Object.assign(wt,{defaultVisitor:u,convertValue:l,isVisitable:bt});if(!A.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!A.default.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),A.default.forEach(n,(function(n,s){!0===(!(A.default.isUndefined(n)||null===n)&&r.call(t,n,A.default.isString(s)?s.trim():s,i,d))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function Et(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function kt(e,t){this._pairs=[],e&&It(e,this,t)}const St=kt.prototype;St.append=function(e,t){this._pairs.push([e,t])},St.toString=function(e){const t=e?function(t){return e.call(this,t,Et)}:Et;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Ct=kt;function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function At(e,t,n){if(!t)return e;const i=n&&n.encode||Tt,r=n&&n.serialize;let s;if(s=r?r(t,n):A.default.isURLSearchParams(t)?t.toString():new Ct(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Rt=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){A.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt="undefined"!=typeof URLSearchParams?URLSearchParams:Ct,Ot=FormData;const Lt=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),xt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var Dt={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:Ot,Blob:Blob},isStandardBrowserEnv:Lt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return It(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return Dt.isNode&&A.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var Ut=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&A.default.isArray(i)?i.length:s,a)return A.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&A.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&A.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(A.default.isFormData(e)&&A.default.isFunction(e.entries)){const n={};return A.default.forEachEntry(e,((e,i)=>{t(function(e){return A.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const Ft={"Content-Type":void 0};const Bt={transitional:Nt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=A.default.isObject(e);r&&A.default.isHTMLForm(e)&&(e=new FormData(e));if(A.default.isFormData(e))return i&&i?JSON.stringify(Ut(e)):e;if(A.default.isArrayBuffer(e)||A.default.isBuffer(e)||A.default.isStream(e)||A.default.isFile(e)||A.default.isBlob(e))return e;if(A.default.isArrayBufferView(e))return e.buffer;if(A.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Mt(e,this.formSerializer).toString();if((s=A.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return It(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(A.default.isString(e))try{return(t||JSON.parse)(e),A.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Bt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&A.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw de.from(e,de.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};A.default.forEach(["delete","get","head"],(function(e){Bt.headers[e]={}})),A.default.forEach(["post","put","patch"],(function(e){Bt.headers[e]=A.default.merge(Ft)}));var jt=Bt;const Ht=A.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var qt=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&Ht[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Wt=Symbol("internals");function Vt(e){return e&&String(e).trim().toLowerCase()}function $t(e){return!1===e||null==e?e:A.default.isArray(e)?e.map($t):String(e)}function zt(e,t,n,i){return A.default.isFunction(i)?i.call(this,t,n):A.default.isString(t)?A.default.isString(i)?-1!==t.indexOf(i):A.default.isRegExp(i)?i.test(t):void 0:void 0}let Kt=Symbol.iterator,Gt=Symbol.toStringTag;class Yt{set(e,t,n){const i=this;function r(e,t,n){const r=Vt(t);if(!r)throw new Error("header name must be a non-empty string");const s=A.default.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=$t(e))}const s=(e,t)=>A.default.forEach(e,((e,n)=>r(e,n,t)));return A.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):A.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(qt(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Vt(e)){const n=A.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(A.default.isFunction(t))return t.call(this,e,n);if(A.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Vt(e)){const n=A.default.findKey(this,e);return!(!n||t&&!zt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Vt(e)){const r=A.default.findKey(n,e);!r||t&&!zt(0,n[r],r,t)||(delete n[r],i=!0)}}return A.default.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return A.default.forEach(this,((i,r)=>{const s=A.default.findKey(n,r);if(s)return t[s]=$t(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=$t(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return A.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&A.default.isArray(n)?n.join(", "):n)})),t}[Kt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Gt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Wt]=this[Wt]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Vt(e);t[i]||(!function(e,t){const n=A.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return A.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),A.default.freezeMethods(Yt.prototype),A.default.freezeMethods(Yt);var Jt=Yt;function Xt(e,t){const n=this||jt,i=t||n,r=Jt.from(i.headers);let s=i.data;return A.default.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Qt(e){return!(!e||!e.__CANCEL__)}function Zt(e,t,n){de.call(this,null==e?"canceled":e,de.ERR_CANCELED,t,n),this.name="CanceledError"}A.default.inherits(Zt,de,{__CANCEL__:!0});var en=Zt;function tn(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var nn=Dt.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),A.default.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),A.default.isString(i)&&o.push("path="+i),A.default.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function rn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function sn(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?rn(e,t):t}var on=Dt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=A.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function an(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var cn=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function ln(e,t){let n=0;const i=cn(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var un="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Jt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}A.default.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=sn(e.baseURL,e.url);function u(){if(!c)return;const i=Jt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());tn((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),At(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new de("Request aborted",de.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new de("Network Error",de.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Nt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new de(t,i.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,c)),c=null},Dt.isStandardBrowserEnv){const t=(e.withCredentials||on(l))&&e.xsrfCookieName&&nn.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&A.default.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),A.default.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ln(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ln(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new en(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=an(l);h&&-1===Dt.protocols.indexOf(h)?n(new de("Unsupported protocol "+h+":",de.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const hn={http:null,xhr:un};A.default.forEach(hn,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var dn={getAdapter:e=>{e=A.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=A.default.isString(n)?hn[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new de(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(A.default.hasOwnProp(hn,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!A.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:hn};function fn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new en(null,e)}function pn(e){fn(e),e.headers=Jt.from(e.headers),e.data=Xt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return dn.getAdapter(e.adapter||jt.adapter)(e).then((function(t){return fn(e),t.data=Xt.call(e,e.transformResponse,t),t.headers=Jt.from(t.headers),t}),(function(t){return Qt(t)||(fn(e),t&&t.response&&(t.response.data=Xt.call(e,e.transformResponse,t.response),t.response.headers=Jt.from(t.response.headers))),Promise.reject(t)}))}const mn=e=>e instanceof Jt?e.toJSON():e;function gn(e,t){t=t||{};const n={};function i(e,t,n){return A.default.isPlainObject(e)&&A.default.isPlainObject(t)?A.default.merge.call({caseless:n},e,t):A.default.isPlainObject(t)?A.default.merge({},t):A.default.isArray(t)?t.slice():t}function r(e,t,n){return A.default.isUndefined(t)?A.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!A.default.isUndefined(t))return i(void 0,t)}function o(e,t){return A.default.isUndefined(t)?A.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(mn(e),mn(t),!0)};return A.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);A.default.isUndefined(o)&&s!==a||(n[i]=o)})),n}const vn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{vn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const bn={};vn.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new de(i(r," has been removed"+(t?" in "+t:"")),de.ERR_DEPRECATED);return t&&!bn[r]&&(bn[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var yn={assertOptions:function(e,t,n){if("object"!=typeof e)throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new de("option "+s+" must be "+n,de.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new de("Unknown option "+s,de.ERR_BAD_OPTION)}},validators:vn};const _n=yn.validators;class wn{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=gn(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&yn.assertOptions(n,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),void 0!==i&&yn.assertOptions(i,{encode:_n.function,serialize:_n.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&A.default.merge(r.common,r[t.method]),s&&A.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Jt.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[pn.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=pn.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return At(sn((e=gn(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Rt,response:new Rt}}}A.default.forEach(["delete","get","head","options"],(function(e){wn.prototype[e]=function(t,n){return this.request(gn(n||{},{method:e,url:t,data:(n||{}).data}))}})),A.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(gn(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}wn.prototype[e]=t(),wn.prototype[e+"Form"]=t(!0)}));var In=wn;class En{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new En((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new en(e,i,r),t(n.reason))}))}}var kn=En;const Sn=function e(t){const n=new In(t),i=R(In.prototype.request,n);return A.default.extend(i,In.prototype,n,{allOwnKeys:!0}),A.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(gn(t,n))},i}(jt);Sn.Axios=In,Sn.CanceledError=en,Sn.CancelToken=kn,Sn.isCancel=Qt,Sn.VERSION="1.2.1",Sn.toFormData=It,Sn.AxiosError=de,Sn.Cancel=Sn.CanceledError,Sn.all=function(e){return Promise.all(e)},Sn.spread=function(e){return function(t){return e.apply(null,t)}},Sn.isAxiosError=function(e){return A.default.isObject(e)&&!0===e.isAxiosError},Sn.mergeConfig=gn,Sn.AxiosHeaders=Jt,Sn.formToJSON=e=>Ut(A.default.isHTMLForm(e)?new FormData(e):e),Sn.default=Sn;var Cn=Sn;const{Axios:Tn,AxiosError:An,CanceledError:Rn,isCancel:Nn,CancelToken:Pn,VERSION:On,all:Ln,Cancel:xn,isAxiosError:Dn,spread:Mn,toFormData:Un,AxiosHeaders:Fn,formToJSON:Bn,mergeConfig:jn}=Cn;Cn.defaults.baseURL="https://api.themoviedb.org/3/";class Hn{async getTrendingFilms(){return(await Cn.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getTrendingFilmsByPage(e){return await Cn.get(`/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmBySearch(){return(await Cn.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${this.page}`).then((e=>e.data))).results}async getFilmSearchByPage(e){return await Cn.get(`/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&page=${e}`).then((e=>e.data))}async getFilmById(e){return await Cn.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>e.data))}async getFilmMassiveById(e){if(0===e.length)return[];let t=e.map((e=>this.getFilmById(e)));return t=await Promise.allSettled(t),t=t.filter((({status:e})=>"fulfilled"===e)).map((({value:e})=>e)),console.log("!re",t),t}async getGenres(){return(await Cn.get(`/genre/movie/list?api_key=${this.KEY}&language=en-US`).then((e=>data))).genres}async getTrailer(e){const t=(await Cn.get(`/movie/${e}/videos?api_key=${this.KEY}&language=en-US`).then((e=>e.data))).results.filter((e=>"Official Trailer"===e.name));return console.log(t[0]),t[0]}async getFilmById(e){console.log("id",e);return await Cn.get(`/movie/${e}?api_key=${this.KEY}&language=en-US`).then((e=>(console.log("res",e),console.log("data",e.data),e.data)))}constructor(){this.KEY="c23d7755b502540a74ef819e02a6a593",this.page=1,this.query="",this.id=null}}const qn=({poster_path:e,title:t,vote_average:n,vote_count:i,popularity:r,original_title:s,genres:o,overview:a,id:c})=>`\n  <div class="movie-card" data-action=${c}>\n       <div class="cardItem__image">\n        <img class="image" src="https://image.tmdb.org/t/p/w500${e}" alt="${c}" />\n      </div>\n\n      <div class="cardItem__wrapper">\n        <h2 class="cardItem__name">${t}</h2>\n        <p class="cardItem__text">\n          Vote / Votes<span class="cardItem__averageVote">${n}</span>/<span\n            class="cardItem__countVote"\n            >${i}</span\n          >\n        </p>\n        <p class="cardItem__text">\n          Popularity<span class="cardItem__data">${r}</span>\n        </p>\n        <p class="cardItem__text">\n          Original Title<span class="cardItem__title">${s}</span>\n        </p>\n        <div class="genres">\n          <p class="cardItem__text">Genre</p>\n          <p class="cardItem__genreList">${o.map((e=>e.name)).join(", ")}</p>\n        </div>\n\n        <p class="cardItem__about">About</p>\n        <p class="cardItem__description">${a}\n        </p>\n      </div>\n      </div>\n      `,Wn=new Hn;function Vn(e){e.currentTarget!==e.target&&"Escape"!==e.code||c.movieModalBackDrop.classList.add("hidden")}c.galleryList.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest(".card").dataset.id,n=e.target.classList.contains("card_img");if(!n)return;if(!n)return;c.movieModalBackDrop.classList.remove("hidden"),Wn.getFilmById(t).then((e=>{console.log("data",e),function(e){const t=qn(e);c.movieModalContainer.innerHTML=t}(e),c.movieModalBackDrop.addEventListener("mousedown",Vn),document.addEventListener("keydown",Vn)})).catch(console.log),document.removeEventListener("keydown",Vn),c.movieModalBackDrop.removeEventListener("mousedown",Vn)})),c.movieModalCloseBtn.addEventListener("click",(function(){c.movieModalBackDrop.classList.toggle("hidden")})),console.log(c.movieModalWatched),console.log(c.movieModalQueue);const $n=new Hn;c.formSearch.addEventListener("submit",(async function(e){e.preventDefault();const{elements:{searchQuery:t},lastElementChild:n}=e.target,i=e.target[1];if($n.query=t.value.trim(),""===$n.query)return void(n.style.display="block");try{C(),i.setAttribute("disabled",!0),n.style.display="none";const e=await $n.getFilmBySearch();if(0===e.length)return n.style.display="block",i.removeAttribute("disabled"),void T();w(e),i.removeAttribute("disabled"),T()}catch{console.error()}}));var zn={};Object.defineProperty(zn,"__esModule",{value:!0}),zn.default=function(e,t){var n=Kn.default(e,t,"get");return Gn.default(e,n)};var Kn=Yn(s("fExtF")),Gn=Yn(s("iaRLo"));function Yn(e){return e&&e.__esModule?e:{default:e}}var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.default=function(e,t,n){Qn.default(e,t),t.set(e,n)};var Xn,Qn=(Xn=s("7K24o"))&&Xn.__esModule?Xn:{default:Xn};var Zn={};Object.defineProperty(Zn,"__esModule",{value:!0}),Zn.default=function(e,t,n){var i=ei.default(e,t,"set");return ti.default(e,i,n),n};var ei=ni(s("fExtF")),ti=ni(s("3LGG3"));function ni(e){return e&&e.__esModule?e:{default:e}}var ii={};t(ii,"_DEFAULT_ENTRY_NAME",(function(){return Kr})),t(ii,"_apps",(function(){return Yr})),t(ii,"_components",(function(){return Jr})),t(ii,"_addComponent",(function(){return Xr})),t(ii,"_addOrOverwriteComponent",(function(){return Qr})),t(ii,"_registerComponent",(function(){return Zr})),t(ii,"_getProvider",(function(){return es})),t(ii,"_removeServiceInstance",(function(){return ts})),t(ii,"_clearComponents",(function(){return ns})),t(ii,"SDK_VERSION",(function(){return ss})),t(ii,"initializeApp",(function(){return os})),t(ii,"getApp",(function(){return as})),t(ii,"getApps",(function(){return cs})),t(ii,"deleteApp",(function(){return ls})),t(ii,"registerVersion",(function(){return us})),t(ii,"onLog",(function(){return hs})),t(ii,"setLogLevel",(function(){return ds})),t(ii,"FirebaseError",(function(){return $i}));var ri,si,oi,ai=ri={};function ci(){throw new Error("setTimeout has not been defined")}function li(){throw new Error("clearTimeout has not been defined")}function ui(e){if(si===setTimeout)return setTimeout(e,0);if((si===ci||!si)&&setTimeout)return si=setTimeout,setTimeout(e,0);try{return si(e,0)}catch(t){try{return si.call(null,e,0)}catch(t){return si.call(this,e,0)}}}!function(){try{si="function"==typeof setTimeout?setTimeout:ci}catch(e){si=ci}try{oi="function"==typeof clearTimeout?clearTimeout:li}catch(e){oi=li}}();var hi,di=[],fi=!1,pi=-1;function mi(){fi&&hi&&(fi=!1,hi.length?di=hi.concat(di):pi=-1,di.length&&gi())}function gi(){if(!fi){var e=ui(mi);fi=!0;for(var t=di.length;t;){for(hi=di,di=[];++pi<t;)hi&&hi[pi].run();pi=-1,t=di.length}hi=null,fi=!1,function(e){if(oi===clearTimeout)return clearTimeout(e);if((oi===li||!oi)&&clearTimeout)return oi=clearTimeout,clearTimeout(e);try{oi(e)}catch(t){try{return oi.call(null,e)}catch(t){return oi.call(this,e)}}}(e)}}function vi(e,t){this.fun=e,this.array=t}function bi(){}ai.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];di.push(new vi(e,t)),1!==di.length||fi||ui(gi)},vi.prototype.run=function(){this.fun.apply(null,this.array)},ai.title="browser",ai.browser=!0,ai.env={},ai.argv=[],ai.version="",ai.versions={},ai.on=bi,ai.addListener=bi,ai.once=bi,ai.off=bi,ai.removeListener=bi,ai.removeAllListeners=bi,ai.emit=bi,ai.prependListener=bi,ai.prependOnceListener=bi,ai.listeners=function(e){return[]},ai.binding=function(e){throw new Error("process.binding is not supported")},ai.cwd=function(){return"/"},ai.chdir=function(e){throw new Error("process.chdir is not supported")},ai.umask=function(){return 0};
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
const yi=!1,_i=!1,wi="${JSCORE_VERSION}",Ii=function(e,t){if(!e)throw Ei(t)},Ei=function(e){return new Error("Firebase Database ("+wi+") INTERNAL ASSERT FAILED: "+e)},ki=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Si={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ki(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ci=function(e){const t=ki(e);return Si.encodeByteArray(t,!0)},Ti=function(e){return Ci(e).replace(/\./g,"")},Ai=function(e){try{return Si.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function Ri(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ri(e[n],t[n]));return e}
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
function Ni(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Pi(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ni())}function Oi(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function Li(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function xi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Di(){const e=Ni();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Mi(){return!0===yi||!0===_i}function Ui(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
const Fi=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Bi=()=>{try{return Fi()||(()=>{if(void 0===ri||void 0===ri.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ai(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ji=e=>{var t,n;return null===(n=null===(t=Bi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Hi=e=>{const t=ji(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},qi=e=>{var t;return null===(t=Bi())||void 0===t?void 0:t[`_${e}`]};
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
class Wi{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function Vi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ti(JSON.stringify({alg:"none",type:"JWT"})),Ti(JSON.stringify(s)),""].join(".")}
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
 */class $i extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Ki,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new $i(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Ki=/\{\$([^}]+)}/g;
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
 */function Gi(e){return JSON.parse(e)}function Yi(e){return JSON.stringify(e)}
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
 */const Ji=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Gi(Ai(s[0])||""),n=Gi(Ai(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Xi=function(e){const t=Ji(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Qi=function(e){const t=Ji(e).claims;return"object"==typeof t&&!0===t.admin};
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
function Zi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function er(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function tr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function nr(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function ir(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(rr(n)&&rr(s)){if(!ir(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function rr(e){return null!==e&&"object"==typeof e}
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
function sr(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function or(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ar(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class cr{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function lr(e,t){const n=new ur(e,t);return n.subscribe.bind(n)}class ur{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=hr),void 0===i.error&&(i.error=hr),void 0===i.complete&&(i.complete=hr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function hr(){}
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
 */function dr(e,t){return`${e} failed: ${t} argument `}
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
const fr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Ii(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},pr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function mr(e){return e&&e._delegate?e._delegate:e}class gr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class vr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Wi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */const yr=[];var _r,wr;(wr=_r||(_r={}))[wr.DEBUG=0]="DEBUG",wr[wr.VERBOSE=1]="VERBOSE",wr[wr.INFO=2]="INFO",wr[wr.WARN=3]="WARN",wr[wr.ERROR=4]="ERROR",wr[wr.SILENT=5]="SILENT";const Ir={debug:_r.DEBUG,verbose:_r.VERBOSE,info:_r.INFO,warn:_r.WARN,error:_r.ERROR,silent:_r.SILENT},Er=_r.INFO,kr={[_r.DEBUG]:"log",[_r.VERBOSE]:"log",[_r.INFO]:"info",[_r.WARN]:"warn",[_r.ERROR]:"error"},Sr=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=kr[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Cr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ir[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_r.DEBUG,...e),this._logHandler(this,_r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_r.VERBOSE,...e),this._logHandler(this,_r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_r.INFO,...e),this._logHandler(this,_r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_r.WARN,...e),this._logHandler(this,_r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_r.ERROR,...e),this._logHandler(this,_r.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Er,this._logHandler=Sr,this._userLogHandler=null,yr.push(this)}}function Tr(e,t){for(const n of yr){let i=null;t&&t.level&&(i=Ir[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:_r[n].toLowerCase(),message:s,args:r,type:t.name})}}}let Ar,Rr;const Nr=new WeakMap,Pr=new WeakMap,Or=new WeakMap,Lr=new WeakMap,xr=new WeakMap;let Dr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Or.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Mr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Rr||(Rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Br(this),t),Fr(Nr.get(this))}:function(...t){return Fr(e.apply(Br(this),t))}:function(t,...n){const i=e.call(Br(this),t,...n);return Or.set(i,t.sort?t.sort():[t]),Fr(i)}}function Ur(e){return"function"==typeof e?Mr(e):(e instanceof IDBTransaction&&function(e){if(Pr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Pr.set(e,t)}(e),t=e,(Ar||(Ar=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Dr):e);var t}function Fr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Fr(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Nr.set(t,e)})).catch((()=>{})),xr.set(t,e),t}(e);if(Lr.has(e))return Lr.get(e);const t=Ur(e);return t!==e&&(Lr.set(e,t),xr.set(t,e)),t}const Br=e=>xr.get(e);function jr(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Fr(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Fr(o.result),e.oldVersion,e.newVersion,Fr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Hr=["get","getKey","getAll","getAllKeys","count"],qr=["put","add","delete","clear"],Wr=new Map;function Vr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Wr.get(t))return Wr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=qr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Hr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Wr.set(t,s),s}Dr=(e=>({...e,get:(t,n,i)=>Vr(t,n)||e.get(t,n,i),has:(t,n)=>!!Vr(t,n)||e.has(t,n)}))(Dr);
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
class $r{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const zr=new Cr("@firebase/app"),Kr="[DEFAULT]",Gr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Yr=new Map,Jr=new Map;function Xr(e,t){try{e.container.addComponent(t)}catch(n){zr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qr(e,t){e.container.addOrOverwriteComponent(t)}function Zr(e){const t=e.name;if(Jr.has(t))return zr.debug(`There were multiple attempts to register component ${t}.`),!1;Jr.set(t,e);for(const t of Yr.values())Xr(t,e);return!0}function es(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ts(e,t,n=Kr){es(e,t).clearInstance(n)}function ns(){Jr.clear()}
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
 */const is=new zi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class rs{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new gr("app",(()=>this),"PUBLIC"))}}
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
 */const ss="9.15.0";function os(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw is.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Bi())||void 0===s?void 0:s.config),!n)throw is.create("no-options");const o=Yr.get(r);if(o){if(ir(n,o.options)&&ir(i,o.config))return o;throw is.create("duplicate-app",{appName:r})}const a=new br(r);for(const e of Jr.values())a.addComponent(e);const c=new rs(n,i,a);return Yr.set(r,c),c}function as(e=Kr){const t=Yr.get(e);if(!t&&e===Kr)return os();if(!t)throw is.create("no-app",{appName:e});return t}function cs(){return Array.from(Yr.values())}async function ls(e){const t=e.name;Yr.has(t)&&(Yr.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function us(e,t,n){var i;let r=null!==(i=Gr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void zr.warn(e.join(" "))}Zr(new gr(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function hs(e,t){if(null!==e&&"function"!=typeof e)throw is.create("invalid-log-argument");Tr(e,t)}function ds(e){var t;t=e,yr.forEach((e=>{e.setLogLevel(t)}))}
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
 */let fs=null;function ps(){return fs||(fs=jr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw is.create("idb-open",{originalErrorMessage:e.message})}))),fs}async function ms(e,t){try{const n=(await ps()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,gs(e)),n.done}catch(e){if(e instanceof $i)zr.warn(e.message);else{const t=is.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});zr.warn(t.message)}}}function gs(e){return`${e.name}!${e.options.appId}`}
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
 */class vs{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=bs();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=bs(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),_s(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_s(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Ti(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ys(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function bs(){return(new Date).toISOString().substring(0,10)}class ys{async runIndexedDBEnvironmentCheck(){return!!Ui()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ps()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(gs(e))}catch(e){if(e instanceof $i)zr.warn(e.message);else{const t=is.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});zr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ms(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ms(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function _s(e){return Ti(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ws;ws="",Zr(new gr("platform-logger",(e=>new $r(e)),"PRIVATE")),Zr(new gr("heartbeat",(e=>new vs(e)),"PRIVATE")),us("@firebase/app","0.9.0",ws),us("@firebase/app","0.9.0","esm2017"),us("fire-js","");
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
 */let Is="";
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
class Es{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Yi(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Gi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class ks{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Zi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Ss=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Es(t)}}catch(e){}return new ks},Cs=Ss("localStorage"),Ts=Ss("sessionStorage"),As=new Cr("@firebase/database"),Rs=function(){let e=1;return function(){return e++}}(),Ns=function(e){const t=fr(e),n=new cr;n.update(t);const i=n.digest();return Si.encodeByteArray(i)},Ps=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Ps.apply(null,i):t+="object"==typeof i?Yi(i):i,t+=" "}return t};let Os=null,Ls=!0;const xs=function(e,t){Ii(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(As.logLevel=_r.VERBOSE,Os=As.log.bind(As),t&&Ts.set("logging_enabled",!0)):"function"==typeof e?Os=e:(Os=null,Ts.remove("logging_enabled"))},Ds=function(...e){if(!0===Ls&&(Ls=!1,null===Os&&!0===Ts.get("logging_enabled")&&xs(!0)),Os){const t=Ps.apply(null,e);Os(t)}},Ms=function(e){return function(...t){Ds(e,...t)}},Us=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ps(...e);As.error(t)},Fs=function(...e){const t=`FIREBASE FATAL ERROR: ${Ps(...e)}`;throw As.error(t),new Error(t)},Bs=function(...e){const t="FIREBASE WARNING: "+Ps(...e);As.warn(t)},js=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Hs=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Ys(e),i=Ys(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},qs=function(e,t){return e===t?0:e<t?-1:1},Ws=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Yi(t))},Vs=function(e){if("object"!=typeof e||null===e)return Yi(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Yi(t[i]),n+=":",n+=Vs(e[t[i]]);return n+="}",n},$s=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function zs(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ks=function(e){Ii(!js(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Gs=new RegExp("^-?(0*)\\d{1,10}$"),Ys=function(e){if(Gs.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Js=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Bs("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Xs=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Qs{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Bs(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class Zs{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ds("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bs(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class eo{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}eo.OWNER="owner";
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
const to=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class no{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}}function io(e,t,n){let i;if(Ii("string"==typeof t,"typeof type must == string"),Ii("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return zs(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class ro{incrementCounter(e,t=1){Zi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ri(void 0,this.counters_)}constructor(){this.counters_={}}}
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
 */const so={},oo={};function ao(e){const t=e.toString();return so[t]||(so[t]=new ro),so[t]}
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
class co{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Js((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class lo{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new co(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Mi()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new uo(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&to.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){lo.forceAllow_=!0}static forceDisallow(){lo.forceDisallow_=!0}static isAvailable(){return!Mi()&&(!!lo.forceAllow_||!(lo.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Yi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ci(t),i=$s(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Mi())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Yi(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=ao(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),io(t,"long_polling",e))}}class uo{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ds("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Mi()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ds("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Mi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Rs(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=uo.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Ds("frame writing exception"),e.stack&&Ds(e.stack),Ds(e)}}}}
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
 */let ho=null;"undefined"!=typeof MozWebSocket?ho=MozWebSocket:"undefined"!=typeof WebSocket&&(ho=WebSocket);class fo{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!Mi()&&"undefined"!=typeof location&&location.hostname&&to.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),io(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let e;if(Mi()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Is}/${ri.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ho(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){fo.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ho&&!fo.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||!0===Cs.get("previous_websocket_failure")}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Gi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ii(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Yi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=$s(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=ao(t),this.connURL=fo.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}fo.responsesRequiredToBeHealthy=2,fo.healthyTimeout=3e4;
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
class po{static get ALL_TRANSPORTS(){return[lo,fo]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=fo&&fo.isAvailable();let n=t&&!fo.previouslyFailed();if(e.webSocketOnly&&(t||Bs("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[fo];else{const e=this.transports_=[];for(const t of po.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}po.globalTransportInitialized_=!1;class mo{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xs((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ws("t",e),n=Ws("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ws("t",e),n=Ws("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ws("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Us("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Us("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Bs("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Xs((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new po(t),this.log_("Connection created"),this.start_()}}
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
 */class go{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class vo{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Ii(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Ii(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class bo extends vo{static getInstance(){return new bo}getInitialEvent(e){return Ii("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Pi()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class yo{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function _o(){return new yo("")}function wo(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Io(e){return e.pieces_.length-e.pieceNum_}function Eo(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new yo(e.pieces_,t)}function ko(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function So(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Co(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new yo(t,0)}function To(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof yo)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new yo(n,0)}function Ao(e){return e.pieceNum_>=e.pieces_.length}function Ro(e,t){const n=wo(e),i=wo(t);if(null===n)return t;if(n===i)return Ro(Eo(e),Eo(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function No(e,t){if(Io(e)!==Io(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Po(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Io(e)>Io(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Oo{constructor(e,t){this.errorPrefix_=t,this.parts_=So(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=pr(this.parts_[e]);Lo(this)}}function Lo(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xo(e))}function xo(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Do extends vo{static getInstance(){return new Do}getInitialEvent(e){return Ii("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class Mo extends go{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Yi(r)),Ii(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Wi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Ii(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ii(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Mo.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Zi(e,"w")){const n=er(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Bs(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Qi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ii(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Yi(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Us("Unrecognized action received from server: "+Yi(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ii(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mo.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Ii(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Ds("getToken() completed but was canceled"):(Ds("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new mo(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Bs(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Bs(e),a())}}}interrupt(e){Ds("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ds("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tr(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Vs(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new yo(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Ds("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ds("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Mi()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Is.replace(/\./g,"-")]=1,Pi()?e["framework.cordova"]=1:xi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return tr(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Mo.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Mi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Do.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bo.getInstance().on("online",this.onOnline_,this)}}Mo.nextPersistentConnectionId_=0,Mo.nextConnectionId_=0;
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
class Uo{static Wrap(e,t){return new Uo(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Uo("[MIN_NAME]",e),i=new Uo("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Uo.MIN}}
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
 */let Bo;class jo extends Fo{static get __EMPTY_NODE(){return Bo}static set __EMPTY_NODE(e){Bo=e}compare(e,t){return Hs(e.name,t.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Uo.MIN}maxPost(){return new Uo("[MAX_NAME]",Bo)}makePost(e,t){return Ii("string"==typeof e,"KeyIndex indexValue must always be a string."),new Uo(e,Bo)}toString(){return".key"}}const Ho=new jo;
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
 */class qo{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Wo{copy(e,t,n,i,r){return new Wo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vo.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vo.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Wo.RED,this.left=null!=i?i:Vo.EMPTY_NODE,this.right=null!=r?r:Vo.EMPTY_NODE}}Wo.RED=!0,Wo.BLACK=!1;class Vo{insert(e,t){return new Vo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wo.BLACK,null,null))}remove(e){return new Vo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Vo.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function $o(e,t){return Hs(e.name,t.name)}function zo(e,t){return Hs(e,t)}
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
 */let Ko;Vo.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Wo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Go=function(e){return"number"==typeof e?"number:"+Ks(e):"string:"+e},Yo=function(e){if(e.isLeafNode()){const t=e.val();Ii("string"==typeof t||"number"==typeof t||"object"==typeof t&&Zi(t,".sv"),"Priority must be a string or number.")}else Ii(e===Ko||e.isEmpty(),"priority of unexpected type.");Ii(e===Ko||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Jo,Xo,Qo;class Zo{static set __childrenNodeConstructor(e){Jo=e}static get __childrenNodeConstructor(){return Jo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Zo(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Zo.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ao(e)?this:".priority"===wo(e)?this.priorityNode_:Zo.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Zo.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=wo(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Ii(".priority"!==n||1===Io(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Zo.__childrenNodeConstructor.EMPTY_NODE.updateChild(Eo(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Go(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ks(this.value_):this.value_,this.lazyHash_=Ns(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Zo.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Zo.__childrenNodeConstructor?-1:(Ii(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Zo.VALUE_TYPE_ORDER.indexOf(t),r=Zo.VALUE_TYPE_ORDER.indexOf(n);return Ii(i>=0,"Unknown leaf type: "+t),Ii(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Zo.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ii(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Yo(this.priorityNode_)}}Zo.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ea=new class extends Fo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Hs(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Uo.MIN}maxPost(){return new Uo("[MAX_NAME]",new Zo("[PRIORITY-POST]",Qo))}makePost(e,t){const n=Xo(e);return new Uo(t,new Zo("[PRIORITY-POST]",n))}toString(){return".priority"}},ta=Math.log(2);
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
 */class na{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ta,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const ia=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Wo(a,o.node,Wo.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Wo(a,o.node,Wo.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Wo(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wo.BLACK):(a(i,Wo.BLACK),a(i,Wo.RED))}return s}(new na(e.length));return new Vo(i||t,s)};
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
 */let ra;const sa={};class oa{static get Default(){return Ii(sa&&ea,"ChildrenNode.ts has not been loaded"),ra=ra||new oa({".priority":sa},{".priority":ea}),ra}get(e){const t=er(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vo?t:null}hasIndex(e){return Zi(this.indexSet_,e.toString())}addIndex(e,t){Ii(e!==Ho,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Uo.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?ia(n,e.getCompare()):sa;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new oa(l,c)}addToIndexes(e,t){const n=nr(this.indexes_,((n,i)=>{const r=er(this.indexSet_,i);if(Ii(r,"Missing index implementation for "+i),n===sa){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Uo.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ia(n,r.getCompare())}return sa}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Uo(e.name,i))),r.insert(e,e.node)}}));return new oa(n,this.indexSet_)}removeFromIndexes(e,t){const n=nr(this.indexes_,(n=>{if(n===sa)return n;{const i=t.get(e.name);return i?n.remove(new Uo(e.name,i)):n}}));return new oa(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let aa;class ca{static get EMPTY_NODE(){return aa||(aa=new ca(new Vo(zo),null,oa.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||aa}updatePriority(e){return this.children_.isEmpty()?this:new ca(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?aa:t}}getChild(e){const t=wo(e);return null===t?this:this.getImmediateChild(t).getChild(Eo(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Ii(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Uo(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?aa:this.priorityNode_;return new ca(i,s,r)}}updateChild(e,t){const n=wo(e);if(null===n)return t;{Ii(".priority"!==wo(e)||1===Io(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Eo(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ea,((s,o)=>{t[s]=o.val(e),n++,r&&ca.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Go(this.getPriority().val())+":"),this.forEachChild(ea,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ns(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Uo(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Uo(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Uo(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Uo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Uo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===la?-1:0}withIndex(e){if(e===Ho||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ca(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ho||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ea),n=t.getIterator(ea);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ho?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Yo(this.priorityNode_),this.children_.isEmpty()&&Ii(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ca.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const la=new class extends ca{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ca.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Vo(zo),ca.EMPTY_NODE,oa.Default)}};Object.defineProperties(Uo,{MIN:{value:new Uo("[MIN_NAME]",ca.EMPTY_NODE)},MAX:{value:new Uo("[MAX_NAME]",la)}}),jo.__EMPTY_NODE=ca.EMPTY_NODE,Zo.__childrenNodeConstructor=ca,Ko=la,function(e){Qo=e}(la);function ua(e,t=null){if(null===e)return ca.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Ii(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Zo(e,ua(t))}if(e instanceof Array){let n=ca.EMPTY_NODE;return zs(e,((t,i)=>{if(Zi(e,t)&&"."!==t.substring(0,1)){const e=ua(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ua(t))}{const n=[];let i=!1;if(zs(e,((e,t)=>{if("."!==e.substring(0,1)){const r=ua(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Uo(e,r)))}})),0===n.length)return ca.EMPTY_NODE;const r=ia(n,$o,(e=>e.name),zo);if(i){const e=ia(n,ea.getCompare());return new ca(r,ua(t),new oa({".priority":e},{".priority":ea}))}return new ca(r,ua(t),oa.Default)}}!function(e){Xo=e}(ua);
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
class ha extends Fo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Hs(e.name,t.name):r}makePost(e,t){const n=ua(e),i=ca.EMPTY_NODE.updateChild(this.indexPath_,n);return new Uo(t,i)}maxPost(){const e=ca.EMPTY_NODE.updateChild(this.indexPath_,la);return new Uo("[MAX_NAME]",e)}toString(){return So(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Ii(!Ao(e)&&".priority"!==wo(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const da=new class extends Fo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Hs(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Uo.MIN}maxPost(){return Uo.MAX}makePost(e,t){const n=ua(e);return new Uo(t,n)}toString(){return".value"}};
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
 */function fa(e){return{type:"value",snapshotNode:e}}function pa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ma(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ga(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class va{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ii(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ii(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Ii(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ii(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ii(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ea}copy(){const e=new va;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ea}}function ba(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ea?n="$priority":e.index_===da?n="$value":e.index_===Ho?n="$key":(Ii(e.index_ instanceof ha,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Yi(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Yi(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Yi(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Yi(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Yi(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ya(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ea&&(t.i=e.index_.toString()),t}
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
 */class _a extends go{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Ii(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=_a.getListenId_(e,n),o={};this.listens_[s]=o;const a=ba(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),er(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=_a.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ba(e._queryParams),n=e._path.toString(),i=new Wi;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sr(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Gi(o.responseText)}catch(e){Bs("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Bs("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ms("p:rest:"),this.listens_={}}}
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
 */class wa{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=ca.EMPTY_NODE}}
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
 */function Ia(){return{value:null,children:new Map}}function Ea(e,t,n){if(Ao(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=wo(t);e.children.has(i)||e.children.set(i,Ia());Ea(e.children.get(i),t=Eo(t),n)}}function ka(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{ka(i,new yo(t.toString()+"/"+e),n)}))}class Sa{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&zs(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class Ca{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;zs(e,((e,i)=>{i>0&&Zi(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Xs(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Sa(e);const n=1e4+2e4*Math.random();Xs(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Ta,Aa;function Ra(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Aa=Ta||(Ta={}))[Aa.OVERWRITE=0]="OVERWRITE",Aa[Aa.MERGE=1]="MERGE",Aa[Aa.ACK_USER_WRITE=2]="ACK_USER_WRITE",Aa[Aa.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Na{operationForChild(e){if(Ao(this.path)){if(null!=this.affectedTree.value)return Ii(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yo(e));return new Na(_o(),t,this.revert)}}return Ii(wo(this.path)===e,"operationForChild called for unrelated child."),new Na(Eo(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ta.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class Pa{operationForChild(e){return Ao(this.path)?new Pa(this.source,_o(),this.snap.getImmediateChild(e)):new Pa(this.source,Eo(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ta.OVERWRITE}}
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
 */class Oa{operationForChild(e){if(Ao(this.path)){const t=this.children.subtree(new yo(e));return t.isEmpty()?null:t.value?new Pa(this.source,_o(),t.value):new Oa(this.source,_o(),t)}return Ii(wo(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oa(this.source,Eo(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ta.MERGE}}
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
 */class La{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ao(e))return this.isFullyInitialized()&&!this.filtered_;const t=wo(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */function xa(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ei("Should only compare child_ events.");const i=new Uo(t.childName,t.snapshotNode),r=new Uo(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Da(e,t){return{eventCache:e,serverCache:t}}function Ma(e,t,n,i){return Da(new La(t,n,i),e.serverCache)}function Ua(e,t,n,i){return Da(e.eventCache,new La(t,n,i))}function Fa(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ba(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ja;class Ha{static fromObject(e){let t=new Ha(null);return zs(e,((e,n)=>{t=t.set(new yo(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:_o(),value:this.value};if(Ao(e))return null;{const n=wo(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Eo(e),t);if(null!=r){return{path:To(new yo(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ao(e))return this;{const t=wo(e),n=this.children.get(t);return null!==n?n.subtree(Eo(e)):new Ha(null)}}set(e,t){if(Ao(e))return new Ha(t,this.children);{const n=wo(e),i=(this.children.get(n)||new Ha(null)).set(Eo(e),t),r=this.children.insert(n,i);return new Ha(this.value,r)}}remove(e){if(Ao(e))return this.children.isEmpty()?new Ha(null):new Ha(null,this.children);{const t=wo(e),n=this.children.get(t);if(n){const i=n.remove(Eo(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ha(null):new Ha(this.value,r)}return this}}get(e){if(Ao(e))return this.value;{const t=wo(e),n=this.children.get(t);return n?n.get(Eo(e)):null}}setTree(e,t){if(Ao(e))return t;{const n=wo(e),i=(this.children.get(n)||new Ha(null)).setTree(Eo(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ha(this.value,r)}}fold(e){return this.fold_(_o(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(To(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,_o(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ao(e))return null;{const i=wo(e),r=this.children.get(i);return r?r.findOnPath_(Eo(e),To(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_o(),t)}foreachOnPath_(e,t,n){if(Ao(e))return this;{this.value&&n(t,this.value);const i=wo(e),r=this.children.get(i);return r?r.foreachOnPath_(Eo(e),To(t,i),n):new Ha(null)}}foreach(e){this.foreach_(_o(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(To(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ja||(ja=new Vo(qs)),ja))()){this.value=e,this.children=t}}
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
 */class qa{static empty(){return new qa(new Ha(null))}constructor(e){this.writeTree_=e}}function Wa(e,t,n){if(Ao(t))return new qa(new Ha(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Ro(r,t);return s=s.updateChild(o,n),new qa(e.writeTree_.set(r,s))}{const i=new Ha(n),r=e.writeTree_.setTree(t,i);return new qa(r)}}}function Va(e,t,n){let i=e;return zs(n,((e,n)=>{i=Wa(i,To(t,e),n)})),i}function $a(e,t){if(Ao(t))return qa.empty();{const n=e.writeTree_.setTree(t,new Ha(null));return new qa(n)}}function za(e,t){return null!=Ka(e,t)}function Ka(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ro(n.path,t)):null}function Ga(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ea,((e,n)=>{t.push(new Uo(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Uo(e,n.value))})),t}function Ya(e,t){if(Ao(t))return e;{const n=Ka(e,t);return new qa(null!=n?new Ha(n):e.writeTree_.subtree(t))}}function Ja(e){return e.writeTree_.isEmpty()}function Xa(e,t){return Qa(_o(),e.writeTree_,t)}function Qa(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Ii(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Qa(To(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(To(e,".priority"),i)),n}}
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
 */function Za(e,t){return dc(t,e)}function ec(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Ii(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&tc(t,i.path)?r=!1:Po(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=ic(e.allWrites,nc,_o()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=$a(e.visibleWrites,i.path);else{zs(i.children,(t=>{e.visibleWrites=$a(e.visibleWrites,To(i.path,t))}))}return!0}return!1}function tc(e,t){if(e.snap)return Po(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Po(To(e.path,n),t))return!0;return!1}function nc(e){return e.visible}function ic(e,t,n){let i=qa.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Po(n,e)?(t=Ro(n,e),i=Wa(i,t,s.snap)):Po(e,n)&&(t=Ro(e,n),i=Wa(i,_o(),s.snap.getChild(t)));else{if(!s.children)throw Ei("WriteRecord should have .snap or .children");if(Po(n,e))t=Ro(n,e),i=Va(i,t,s.children);else if(Po(e,n))if(t=Ro(e,n),Ao(t))i=Va(i,_o(),s.children);else{const e=er(s.children,wo(t));if(e){const n=e.getChild(Eo(t));i=Wa(i,_o(),n)}}}}}return i}function rc(e,t,n,i,r){if(i||r){const s=Ya(e.visibleWrites,t);if(!r&&Ja(s))return n;if(r||null!=n||za(s,_o())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Po(e.path,t)||Po(t,e.path))};return Xa(ic(e.allWrites,s,t),n||ca.EMPTY_NODE)}return null}{const i=Ka(e.visibleWrites,t);if(null!=i)return i;{const i=Ya(e.visibleWrites,t);if(Ja(i))return n;if(null!=n||za(i,_o())){return Xa(i,n||ca.EMPTY_NODE)}return null}}}function sc(e,t,n,i){return rc(e.writeTree,e.treePath,t,n,i)}function oc(e,t){return function(e,t,n){let i=ca.EMPTY_NODE;const r=Ka(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ea,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Ya(e.visibleWrites,t);return n.forEachChild(ea,((e,t)=>{const n=Xa(Ya(r,new yo(e)),t);i=i.updateImmediateChild(e,n)})),Ga(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ga(Ya(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ac(e,t,n,i){return function(e,t,n,i,r){Ii(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=To(t,n);if(za(e.visibleWrites,s))return null;{const t=Ya(e.visibleWrites,s);return Ja(t)?r.getChild(n):Xa(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function cc(e,t){return function(e,t){return Ka(e.visibleWrites,t)}(e.writeTree,To(e.treePath,t))}function lc(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Ya(e.visibleWrites,t),l=Ka(c,_o());if(null!=l)a=l;else{if(null==n)return[];a=Xa(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function uc(e,t,n){return function(e,t,n,i){const r=To(t,n),s=Ka(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Xa(Ya(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function hc(e,t){return dc(To(e.treePath,t),e.writeTree)}function dc(e,t){return{treePath:e,writeTree:t}}
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
 */class fc{trackChildChange(e){const t=e.type,n=e.childName;Ii("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ii(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,ga(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ma(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,pa(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Ei("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ga(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const pc=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class mc{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new La(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ba(this.viewCache_),r=lc(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function gc(e,t,n,i,r){const s=new fc;let o,a;if(n.type===Ta.OVERWRITE){const c=n;c.source.fromUser?o=yc(e,t,c.path,c.snap,i,r,s):(Ii(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Ao(c.path),o=bc(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===Ta.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=To(n,i);_c(t,wo(l))&&(a=yc(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=To(n,i);_c(t,wo(l))||(a=yc(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(Ii(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Ic(e,t,c.path,c.children,i,r,a,s))}else if(n.type===Ta.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=cc(i,n))return t;{const a=new mc(i,t,r),c=t.eventCache.getNode();let l;if(Ao(n)||".priority"===wo(n)){let n;if(t.serverCache.isFullyInitialized())n=sc(i,Ba(t));else{const e=t.serverCache.getNode();Ii(e instanceof ca,"serverChildren would be complete if leaf node"),n=oc(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=wo(n);let u=uc(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,Eo(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,ca.EMPTY_NODE,Eo(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=sc(i,Ba(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=cc(i,_o()),Ma(t,l,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=cc(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Ao(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bc(e,t,n,c.getNode().getChild(n),r,s,a,o);if(Ao(n)){let i=new Ha(null);return c.getNode().forEachChild(Ho,((e,t)=>{i=i.set(new yo(e),t)})),Ic(e,t,n,i,r,s,a,o)}return t}{let l=new Ha(null);return i.foreach(((e,t)=>{const i=To(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),Ic(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Ta.LISTEN_COMPLETE)throw Ei("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Ua(t,s.getNode(),s.isFullyInitialized()||Ao(n),s.isFiltered());return vc(e,o,n,i,pc,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Fa(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(fa(Fa(t)))}}(t,o,c),{viewCache:o,changes:c}}function vc(e,t,n,i,r,s){const o=t.eventCache;if(null!=cc(i,n))return t;{let a,c;if(Ao(n))if(Ii(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ba(t),r=oc(i,n instanceof ca?n:ca.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=sc(i,Ba(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=wo(n);if(".priority"===l){Ii(1===Io(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=ac(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=Eo(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=ac(i,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=uc(i,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,r,s):o.getNode()}}return Ma(t,a,o.isFullyInitialized()||Ao(n),e.filter.filtersNodes())}}function bc(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(Ao(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=wo(n);if(!c.isCompleteForPath(n)&&Io(n)>1)return t;const r=Eo(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,r,pc,null)}const h=Ua(t,l,c.isFullyInitialized()||Ao(n),u.filtersNodes());return vc(e,h,n,r,new mc(r,h,s),a)}function yc(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new mc(r,t,s);if(Ao(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Ma(t,l,!0,e.filter.filtersNodes());else{const r=wo(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Ma(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Eo(n),l=a.getNode().getImmediateChild(r);let h;if(Ao(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ko(s)&&e.getChild(Co(s)).isEmpty()?e:e.updateChild(s,i):ca.EMPTY_NODE}if(l.equals(h))c=t;else{c=Ma(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function _c(e,t){return e.eventCache.isCompleteForChild(t)}function wc(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ic(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Ao(n)?i:new Ha(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=wc(0,t.serverCache.getNode().getImmediateChild(n),i);l=bc(e,l,new yo(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=wc(0,t.serverCache.getNode().getImmediateChild(n),i);l=bc(e,l,new yo(n),c,r,s,o,a)}})),l}function Ec(e,t){const n=Ba(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ao(t)&&!n.getImmediateChild(wo(t)).isEmpty())?n.getChild(t):null}function kc(e,t,n,i){t.type===Ta.MERGE&&null!==t.source.queryId&&(Ii(Ba(e.viewCache_),"We should always have a full cache before handling merges"),Ii(Fa(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=gc(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Ii(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Ii(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Ii(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Sc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Sc(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),xa(e,r,"child_removed",t,i,n),xa(e,r,"child_added",t,i,n),xa(e,r,"child_moved",s,i,n),xa(e,r,"child_changed",t,i,n),xa(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let Cc,Tc;function Ac(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Ii(null!=s,"SyncTree gave us an op for an invalid query."),kc(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(kc(s,t,n,i));return r}}function Rc(e,t){let n=null;for(const i of e.views.values())n=n||Ec(i,t);return n}class Nc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ha(null),this.pendingWriteTree_={visibleWrites:qa.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pc(e,t,n,i,r){return function(e,t,n,i,r){Ii(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Wa(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Mc(e,new Pa({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Oc(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ec(e.pendingWriteTree_,t)){let t=new Ha(null);return null!=i.snap?t=t.set(_o(),!0):zs(i.children,(e=>{t=t.set(new yo(e),!0)})),Mc(e,new Na(i.path,t,n))}return[]}function Lc(e,t,n){return Mc(e,new Pa({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function xc(e,t,n,i){const r=Bc(e,i);if(null!=r){const i=jc(r),s=i.path,o=i.queryId,a=Ro(s,t);return Hc(e,s,new Pa(Ra(o),a,n))}return[]}function Dc(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Rc(n,Ro(e,t));if(i)return i}));return rc(i,t,r,n,!0)}function Mc(e,t){return Uc(t,e.syncPointTree_,null,Za(e.pendingWriteTree_,_o()))}function Uc(e,t,n,i){if(Ao(e.path))return Fc(e,t,n,i);{const r=t.get(_o());null==n&&null!=r&&(n=Rc(r,_o()));let s=[];const o=wo(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=hc(i,o);s=s.concat(Uc(a,c,e,t))}return r&&(s=s.concat(Ac(r,e,i,n))),s}}function Fc(e,t,n,i){const r=t.get(_o());null==n&&null!=r&&(n=Rc(r,_o()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=hc(i,t),c=e.operationForChild(t);c&&(s=s.concat(Fc(c,r,o,a)))})),r&&(s=s.concat(Ac(r,e,i,n))),s}function Bc(e,t){return e.tagToQueryMap.get(t)}function jc(e){const t=e.indexOf("$");return Ii(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new yo(e.substr(0,t))}}function Hc(e,t,n){const i=e.syncPointTree_.get(t);Ii(i,"Missing sync point for query tag that we're tracking");return Ac(i,n,Za(e.pendingWriteTree_,t),null)}
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
class qc{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qc(t)}node(){return this.node_}constructor(e){this.node_=e}}class Wc{getImmediateChild(e){const t=To(this.path_,e);return new Wc(this.syncTree_,t)}node(){return Dc(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Vc=function(e,t,n){return e&&"object"==typeof e?(Ii(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?$c(e[".sv"],t,n):"object"==typeof e[".sv"]?zc(e[".sv"],t):void Ii(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},$c=function(e,t,n){if("timestamp"===e)return n.timestamp;Ii(!1,"Unexpected server value: "+e)},zc=function(e,t,n){e.hasOwnProperty("increment")||Ii(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Ii(!1,"Unexpected increment value: "+i);const r=t.node();if(Ii(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Kc=function(e,t,n,i){return Yc(t,new Wc(n,e),i)},Gc=function(e,t,n){return Yc(e,new qc(t),n)};function Yc(e,t,n){const i=e.getPriority().val(),r=Vc(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Vc(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Zo(s,ua(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Zo(r))),i.forEachChild(ea,((e,i)=>{const r=Yc(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class Jc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Xc(e,t){let n=t instanceof yo?t:new yo(t),i=e,r=wo(n);for(;null!==r;){const e=er(i.node.children,r)||{children:{},childCount:0};i=new Jc(r,i,e),n=Eo(n),r=wo(n)}return i}function Qc(e){return e.node.value}function Zc(e,t){e.node.value=t,rl(e)}function el(e){return e.node.childCount>0}function tl(e,t){zs(e.node.children,((n,i)=>{t(new Jc(n,e,i))}))}function nl(e,t,n,i){n&&!i&&t(e),tl(e,(e=>{nl(e,t,!0,i)})),n&&i&&t(e)}function il(e){return new yo(null===e.parent?e.name:il(e.parent)+"/"+e.name)}function rl(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Qc(e)&&!el(e)}(n),r=Zi(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,rl(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,rl(e))}
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
 */(e.parent,e.name,e)}const sl=/[\[\].#$\/\u0000-\u001F\u007F]/,ol=/[\[\].#$\u0000-\u001F\u007F]/,al=function(e){return"string"==typeof e&&0!==e.length&&!sl.test(e)},cl=function(e){return"string"==typeof e&&0!==e.length&&!ol.test(e)},ll=function(e,t,n){const i=n instanceof yo?new Oo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xo(i));if("function"==typeof t)throw new Error(e+"contains a function "+xo(i)+" with contents = "+t.toString());if(js(t))throw new Error(e+"contains "+t.toString()+" "+xo(i));if("string"==typeof t&&t.length>10485760/3&&pr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+xo(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(zs(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!al(t)))throw new Error(e+" contains an invalid key ("+t+") "+xo(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=pr(a),Lo(o),ll(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=pr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+xo(i)+" in addition to actual children.")}},ul=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!al(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),cl(e)}(n))throw new Error(dr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class hl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dl(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||No(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function fl(e,t,n){dl(e,n),pl(e,(e=>Po(e,t)||Po(t,e)))}function pl(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(ml(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ml(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Os&&Ds("event: "+n.toString()),Js(i)}}}
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
 */class gl{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ia(),this.transactionQueueTree_=new Jc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function vl(e,t,n){if(e.stats_=ao(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new _a(e.repoInfo_,((t,n,i,r)=>{_l(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>wl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Yi(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Mo(e.repoInfo_,t,((t,n,i,r)=>{_l(e,t,n,i,r)}),(t=>{wl(e,t)}),(t=>{!function(e,t){zs(t,((t,n)=>{Il(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return oo[n]||(oo[n]=t()),oo[n]}(e.repoInfo_,(()=>new Ca(e.stats_,e.server_))),e.infoData_=new wa,e.infoSyncTree_=new Nc({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Lc(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Il(e,"connected",!1),e.serverSyncTree_=new Nc({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);fl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function bl(e){const t=e.infoData_.getNode(new yo(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function yl(e){return(t=(t={timestamp:bl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function _l(e,t,n,i,r){e.dataUpdateCount++;const s=new yo(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=nr(n,(e=>ua(e)));o=function(e,t,n,i){const r=Bc(e,i);if(r){const i=jc(r),s=i.path,o=i.queryId,a=Ro(s,t),c=Ha.fromObject(n);return Hc(e,s,new Oa(Ra(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ua(n);o=xc(e.serverSyncTree_,s,t,r)}else if(i){const t=nr(n,(e=>ua(e)));o=function(e,t,n){const i=Ha.fromObject(n);return Mc(e,new Oa({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ua(n);o=Lc(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Al(e,s)),fl(e.eventQueue_,a,o)}function wl(e,t){Il(e,"connected",t),!1===t&&function(e){Sl(e,"onDisconnectEvents");const t=yl(e),n=Ia();ka(e.onDisconnect_,_o(),((i,r)=>{const s=Kc(i,r,e.serverSyncTree_,t);Ea(n,i,s)}));let i=[];ka(n,_o(),((t,n)=>{i=i.concat(Lc(e.serverSyncTree_,t,n));const r=Ll(e,t);Al(e,r)})),e.onDisconnect_=Ia(),fl(e.eventQueue_,_o(),i)}(e)}function Il(e,t,n){const i=new yo("/.info/"+t),r=ua(n);e.infoData_.updateSnapshot(i,r);const s=Lc(e.infoSyncTree_,i,r);fl(e.eventQueue_,i,s)}function El(e){return e.nextWriteId_++}function kl(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Sl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ds(n,...t)}function Cl(e,t,n){return Dc(e.serverSyncTree_,t,n)||ca.EMPTY_NODE}function Tl(e,t=e.transactionQueueTree_){if(t||Ol(e,t),Qc(t)){const n=Nl(e,t);Ii(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Cl(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Ii(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Ro(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Sl(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Oc(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ol(e,Xc(e.transactionQueueTree_,t)),Tl(e,e.transactionQueueTree_),fl(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Js(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Bs("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Al(e,t)}}),o)}(e,il(t),n)}else el(t)&&tl(t,(t=>{Tl(e,t)}))}function Al(e,t){const n=Rl(e,t),i=il(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=Ro(n,c.path);let u,h=!1;if(Ii(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(Oc(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(Oc(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Cl(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){ll("transaction failed: Data returned ",i,c.path);let t=ua(i);"object"==typeof i&&null!=i&&Zi(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=yl(e),l=Gc(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=El(e),s.splice(s.indexOf(o),1),r=r.concat(Pc(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Oc(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(Oc(e.serverSyncTree_,c.currentWriteId,!0))}fl(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Ol(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Js(i[e]);Tl(e,e.transactionQueueTree_)}(e,Nl(e,n),i),i}function Rl(e,t){let n,i=e.transactionQueueTree_;for(n=wo(t);null!==n&&void 0===Qc(i);)i=Xc(i,n),n=wo(t=Eo(t));return i}function Nl(e,t){const n=[];return Pl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Pl(e,t,n){const i=Qc(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);tl(t,(t=>{Pl(e,t,n)}))}function Ol(e,t){const n=Qc(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Zc(t,n.length>0?n:void 0)}tl(t,(t=>{Ol(e,t)}))}function Ll(e,t){const n=il(Rl(e,t)),i=Xc(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{xl(e,t)})),xl(e,i),nl(i,(t=>{xl(e,t)})),n}function xl(e,t){const n=Qc(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Ii(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Ii(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Oc(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Zc(t,void 0):n.length=s+1,fl(e.eventQueue_,il(t),r);for(let e=0;e<i.length;e++)Js(i[e])}}
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
 */const Dl=function(e,t){const n=Ml(e),i=n.namespace;"firebase.com"===n.domain&&Fs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Bs("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new no(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new yo(n.pathString)}},Ml=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Bs(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
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
class Ul{get key(){return Ao(this._path)?null:ko(this._path)}get ref(){return new Fl(this._repo,this._path)}get _queryIdentifier(){const e=ya(this._queryParams),t=Vs(e);return"{}"===t?"default":t}get _queryObject(){return ya(this._queryParams)}isEqual(e){if(!((e=mr(e))instanceof Ul))return!1;const t=this._repo===e._repo,n=No(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Fl extends Ul{get parent(){const e=Co(this._path);return null===e?null:new Fl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new va,!1)}}!function(e){Ii(!Cc,"__referenceConstructor has already been defined"),Cc=e}(Fl),function(e){Ii(!Tc,"__referenceConstructor has already been defined"),Tc=e}(Fl);
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
const Bl={};let jl=!1;function Hl(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ds("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Dl(s,r),l=c.repoInfo;void 0!==ri&&ri.env&&(a=ri.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Dl(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new eo(eo.OWNER):new Zs(e.name,e.options,t);ul("Invalid Firebase Database URL",c),Ao(c.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=Bl[t.name];r||(r={},Bl[t.name]=r);let s=r[e.toURLString()];s&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new gl(e,jl,n,i),r[e.toURLString()]=s,s}(l,e,u,new Qs(e.name,n));return new ql(h,e)}class ql{get _repo(){return this._instanceStarted||(vl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fl(this._repo,_o())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Bl[t];n&&n[e.key]===e||Fs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),kl(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Fs("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Mo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){Is=ss,Zr(new gr("database",((e,{instanceIdentifier:t})=>Hl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),us("@firebase/database","0.14.0",e),us("@firebase/database","0.14.0","esm2017")}
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
us("firebase","9.15.0","app");
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
class Wl{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ls(this._delegate))))}_getService(e,t=Kr){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Kr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Xr(this._delegate,e)}_addOrOverwriteComponent(e){Qr(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,Xr(e,new gr("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
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
 */const Vl=new zi("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const $l=
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
function(e){const t={},n={__esModule:!0,initializeApp:function(i,r={}){const s=os(i,r);if(Zi(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:i,registerVersion:us,setLogLevel:ds,onLog:hs,apps:null,SDK_VERSION:ss,INTERNAL:{registerComponent:function(t){const r=t.name,s=r.replace("-compat","");if(Zr(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[s])throw Vl.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&Ri(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:ii}};function i(e){if(!Zi(t,e=e||Kr))throw Vl.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),i.App=e,n}(Wl);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Ri(t,e)},createSubscribe:lr,ErrorFactory:zi,deepExtend:Ri}),t}(),zl=new Cr("@firebase/app-compat");
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
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){zl.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&zl.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Kl=$l;!
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
function(e){us("@firebase/app-compat","0.2.0",e)}();
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
Kl.registerVersion("firebase","9.15.0","app-compat");function Gl(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;
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
const Yl="facebook.com",Jl="github.com",Xl="google.com",Ql="password",Zl="twitter.com",eu="EMAIL_SIGNIN",tu="PASSWORD_RESET",nu="RECOVER_EMAIL",iu="REVERT_SECOND_FACTOR_ADDITION",ru="VERIFY_AND_CHANGE_EMAIL",su="VERIFY_EMAIL";function ou(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const au=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},cu=ou,lu=new zi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),uu=new Cr("@firebase/auth");function hu(e,...t){uu.logLevel<=_r.ERROR&&uu.error(`Auth (${ss}): ${e}`,...t)}
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
 */function du(e,...t){throw gu(e,...t)}function fu(e,...t){return gu(e,...t)}function pu(e,t,n){const i=Object.assign(Object.assign({},cu()),{[t]:n});return new zi("auth","Firebase",i).create(t,{appName:e.name})}function mu(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&du(e,"argument-error"),pu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gu(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return lu.create(e,...t)}function vu(e,t,...n){if(!e)throw gu(t,...n)}function bu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw hu(t),new Error(t)}function yu(e,t){e||bu(t)}
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
 */const _u=new Map;function wu(e){yu(e instanceof Function,"Expected a class definition");let t=_u.get(e);return t?(yu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_u.set(e,t),t)}
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
function Iu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Eu(){return"http:"===ku()||"https:"===ku()}function ku(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class Su{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Eu()||Li()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,yu(t>e,"Short delay should be less than long delay!"),this.isMobile=Pi()||xi()}}
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
 */function Cu(e,t){yu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Tu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void bu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void bu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void bu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Au={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ru=new Su(3e4,6e4);
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
 */function Nu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pu(e,t,n,i,r={}){return Ou(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=sr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Tu.fetch()(xu(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ou(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Au),t);try{const t=new Du(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Mu(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Mu(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Mu(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Mu(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw pu(e,a,o);du(e,a)}}catch(t){if(t instanceof $i)throw t;du(e,"network-request-failed")}}async function Lu(e,t,n,i,r={}){const s=await Pu(e,t,n,i,r);return"mfaPendingCredential"in s&&du(e,"multi-factor-auth-required",{_serverResponse:s}),s}function xu(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Cu(e.config,r):`${e.config.apiScheme}://${r}`}class Du{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(fu(this.auth,"network-request-failed"))),Ru.get())}))}}function Mu(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=fu(e,t,i);return r.customData._tokenResponse=n,r}
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
function Uu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Fu(e){return 1e3*Number(e)}function Bu(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ai(n);return e?JSON.parse(e):(hu("Failed to decode base64 JWT payload"),null)}catch(e){return hu("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ju(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $i&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Hu{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class qu{_initializeTime(){this.lastSignInTime=Uu(this.lastLoginAt),this.creationTime=Uu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function Wu(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ju(e,async function(e,t){return Pu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));vu(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Gl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Vu{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){vu(e.idToken,"internal-error"),vu(void 0!==e.idToken,"internal-error"),vu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Bu(e);return vu(t,"internal-error"),vu(void 0!==t.exp,"internal-error"),vu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return vu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await Ou(e,{},(async()=>{const n=sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=xu(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Tu.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Vu;return n&&(vu("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(vu("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(vu("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vu,this.toJSON())}_performRefresh(){return bu("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function $u(e,t){vu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zu{async getIdToken(e){const t=await ju(this,this.stsTokenManager.getToken(this.auth,e));return vu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=mr(e),i=await n.getIdToken(t),r=Bu(i);vu(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Uu(Fu(r.auth_time)),issuedAtTime:Uu(Fu(r.iat)),expirationTime:Uu(Fu(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=mr(e);await Wu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(vu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){vu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Wu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ju(this,async function(e,t){return Pu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:_,providerData:w,stsTokenManager:I}=t;vu(b&&I,e,"internal-error");const E=Vu.fromJSON(this.name,I);vu("string"==typeof b,e,"internal-error"),$u(u,e.name),$u(h,e.name),vu("boolean"==typeof y,e,"internal-error"),vu("boolean"==typeof _,e,"internal-error"),$u(d,e.name),$u(f,e.name),$u(p,e.name),$u(m,e.name),$u(g,e.name),$u(v,e.name);const k=new zu({uid:b,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(k.providerData=w.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new Vu;i.updateFromServerResponse(t);const r=new zu({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Wu(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qu(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class Ku{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Ku.type="NONE";const Gu=Ku;
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
 */function Yu(e,t,n){return`firebase:${e}:${t}:${n}`}class Ju{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ju(wu(Gu),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||wu(Gu);const s=Yu(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=zu._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ju(r,e,n)):new Ju(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Yu(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yu("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Xu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(th(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ih(t))return"Blackberry";if(rh(t))return"Webos";if(Zu(t))return"Safari";if((t.includes("chrome/")||eh(t))&&!t.includes("edge/"))return"Chrome";if(nh(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Qu(e=Ni()){return/firefox\//i.test(e)}function Zu(e=Ni()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eh(e=Ni()){return/crios\//i.test(e)}function th(e=Ni()){return/iemobile/i.test(e)}function nh(e=Ni()){return/android/i.test(e)}function ih(e=Ni()){return/blackberry/i.test(e)}function rh(e=Ni()){return/webos/i.test(e)}function sh(e=Ni()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function oh(e=Ni()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ah(e=Ni()){return sh(e)||nh(e)||rh(e)||ih(e)||/windows phone/i.test(e)||th(e)}
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
function ch(e,t=[]){let n;switch(e){case"Browser":n=Xu(Ni());break;case"Worker":n=`${Xu(Ni())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${i}`}
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
 */class lh{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class uh{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wu(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ju.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return vu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?mr(e):null;return t&&vu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&vu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wu(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wu(e)||this._popupRedirectResolver;vu(t,this,"argument-error"),this.redirectPersistenceManager=await Ju.create(this,[wu(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return vu(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return vu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ch(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dh(this),this.idTokenSubscription=new dh(this),this.beforeStateQueue=new lh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function hh(e){return mr(e)}class dh{get next(){return vu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=lr((e=>this.observer=e))}}function fh(e,t,n){const i=hh(e);vu(i._canInitEmulator,i,"emulator-config-failed"),vu(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=ph(t),{host:o,port:a}=function(e){const t=ph(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:mh(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:mh(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ph(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function mh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class gh{toJSON(){return bu("not implemented")}_getIdTokenResponse(e){return bu("not implemented")}_linkToIdToken(e,t){return bu("not implemented")}_getReauthenticationResolver(e){return bu("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function vh(e,t){return Pu(e,"POST","/v1/accounts:resetPassword",Nu(e,t))}async function bh(e,t){return Pu(e,"POST","/v1/accounts:update",t)}async function yh(e,t){return Pu(e,"POST","/v1/accounts:sendOobCode",Nu(e,t))}
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
class _h extends gh{static _fromEmailAndPassword(e,t){return new _h(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _h(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithPassword",Nu(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithEmailLink",Nu(e,t))}(e,{email:this._email,oobCode:this._password});default:du(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithEmailLink",Nu(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:du(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function wh(e,t){return Lu(e,"POST","/v1/accounts:signInWithIdp",Nu(e,t))}
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
 */class Ih extends gh{static _fromParams(e){const t=new Ih(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):du("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Gl(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ih(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return wh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Eh={USER_NOT_FOUND:"user-not-found"};
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
class kh extends gh{static _fromVerification(e,t){return new kh({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new kh({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithPhoneNumber",Nu(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Lu(e,"POST","/v1/accounts:signInWithPhoneNumber",Nu(e,t));if(n.temporaryProof)throw Mu(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithPhoneNumber",Nu(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Eh)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new kh({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Sh{static parseLink(e){const t=function(e){const t=or(ar(e)).link,n=t?or(ar(t)).deep_link_id:null,i=or(ar(e)).deep_link_id;return(i?or(ar(i)).link:null)||i||n||t||e}(e);try{return new Sh(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=or(ar(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);vu(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Ch{static credential(e,t){return _h._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Sh.parseLink(t);return vu(n,"argument-error"),_h._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ch.PROVIDER_ID}}Ch.PROVIDER_ID="password",Ch.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ch.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Th{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Ah extends Th{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Rh extends Ah{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return vu("providerId"in t&&"signInMethod"in t,"argument-error"),Ih._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return vu(e.idToken||e.accessToken,"argument-error"),Ih._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Rh.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Rh.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!(n||i||t||r))return null;if(!o)return null;try{return new Rh(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}
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
 */class Nh extends Ah{static credential(e){return Ih._fromParams({providerId:Nh.PROVIDER_ID,signInMethod:Nh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nh.credentialFromTaggedObject(e)}static credentialFromError(e){return Nh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nh.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Nh.FACEBOOK_SIGN_IN_METHOD="facebook.com",Nh.PROVIDER_ID="facebook.com";
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
class Ph extends Ah{static credential(e,t){return Ih._fromParams({providerId:Ph.PROVIDER_ID,signInMethod:Ph.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ph.credentialFromTaggedObject(e)}static credentialFromError(e){return Ph.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ph.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ph.GOOGLE_SIGN_IN_METHOD="google.com",Ph.PROVIDER_ID="google.com";
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
class Oh extends Ah{static credential(e){return Ih._fromParams({providerId:Oh.PROVIDER_ID,signInMethod:Oh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oh.credentialFromTaggedObject(e)}static credentialFromError(e){return Oh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oh.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Oh.GITHUB_SIGN_IN_METHOD="github.com",Oh.PROVIDER_ID="github.com";class Lh extends gh{_getIdTokenResponse(e){return wh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wh(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Lh(n,r):null}static _create(e,t){return new Lh(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
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
 */class xh extends Th{static credentialFromResult(e){return xh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return xh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Lh.fromJSON(e);return vu(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Lh._create(n,t)}catch(e){return null}}constructor(e){vu(e.startsWith("saml."),"argument-error"),super(e)}}
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
 */class Dh extends Ah{static credential(e,t){return Ih._fromParams({providerId:Dh.PROVIDER_ID,signInMethod:Dh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dh.credentialFromTaggedObject(e)}static credentialFromError(e){return Dh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Dh.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function Mh(e,t){return Lu(e,"POST","/v1/accounts:signUp",Nu(e,t))}
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
 */Dh.TWITTER_SIGN_IN_METHOD="twitter.com",Dh.PROVIDER_ID="twitter.com";class Uh{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await zu._fromIdTokenResponse(e,n,i),s=Fh(n);return new Uh({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Fh(n);return new Uh({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Fh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Bh extends $i{static _fromErrorAndOperation(e,t,n,i){return new Bh(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Bh.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function jh(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bh._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */function Hh(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function qh(e,t){const n=mr(e);await Vh(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return Pu(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Hh(i||[]);return n.providerData=n.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Wh(e,t,n=!1){const i=await ju(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Uh._forOperation(e,"link",i)}async function Vh(e,t,n){await Wu(t);const i=!1===e?"provider-already-linked":"no-such-provider";vu(Hh(t.providerData).has(n)===e,t.auth,i)}
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
 */async function $h(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ju(e,jh(i,r,t,e),n);vu(s.idToken,i,"internal-error");const o=Bu(s.idToken);vu(o,i,"internal-error");const{sub:a}=o;return vu(e.uid===a,i,"user-mismatch"),Uh._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&du(i,"user-mismatch"),e}}
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
 */async function zh(e,t,n=!1){const i="signIn",r=await jh(e,i,t),s=await Uh._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Kh(e,t){return zh(hh(e),t)}async function Gh(e,t){const n=mr(e);return await Vh(!1,n,t.providerId),Wh(n,t)}async function Yh(e,t){return $h(mr(e),t)}
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
async function Jh(e,t){const n=hh(e),i=await async function(e,t){return Lu(e,"POST","/v1/accounts:signInWithCustomToken",Nu(e,t))}(n,{token:t,returnSecureToken:!0}),r=await Uh._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
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
 */class Xh{static _fromServerResponse(e,t){return"phoneInfo"in t?Qh._fromServerResponse(e,t):du(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class Qh extends Xh{static _fromServerResponse(e,t){return new Qh(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
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
 */function Zh(e,t,n){var i;vu((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),vu(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(vu(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(vu(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function ed(e,t,n){const i=mr(e),r={requestType:"PASSWORD_RESET",email:t};n&&Zh(i,r,n),await async function(e,t){return yh(e,t)}(i,r)}async function td(e,t){await async function(e,t){return Pu(e,"POST","/v1/accounts:update",Nu(e,t))}(mr(e),{oobCode:t})}async function nd(e,t){const n=mr(e),i=await vh(n,{oobCode:t}),r=i.requestType;switch(vu(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":vu(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":vu(i.mfaInfo,n,"internal-error");default:vu(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Xh._fromServerResponse(hh(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}
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
async function id(e,t,n){const i=mr(e),r={requestType:"EMAIL_SIGNIN",email:t};vu(n.handleCodeInApp,i,"argument-error"),n&&Zh(i,r,n),await async function(e,t){return yh(e,t)}(i,r)}
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
async function rd(e,t){const n={identifier:t,continueUri:Eu()?Iu():"http://localhost"},{signinMethods:i}=await
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
async function(e,t){return Pu(e,"POST","/v1/accounts:createAuthUri",Nu(e,t))}(mr(e),n);return i||[]}async function sd(e,t){const n=mr(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Zh(n.auth,i,t);const{email:r}=await async function(e,t){return yh(e,t)}(n.auth,i);r!==e.email&&await e.reload()}async function od(e,t,n){const i=mr(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Zh(i.auth,r,n);const{email:s}=await async function(e,t){return yh(e,t)}(i.auth,r);s!==e.email&&await e.reload()}
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
async function ad(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=mr(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await ju(i,async function(e,t){return Pu(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}async function cd(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const s=await ju(e,bh(i,r));await e._updateTokensIfNecessary(s,!0)}
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
 */class ld{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ud extends ld{constructor(e,t,n,i){super(e,t,n),this.username=i}}class hd extends ld{constructor(e,t){super(e,"facebook.com",t)}}class dd extends ud{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class fd extends ld{constructor(e,t){super(e,"google.com",t)}}class pd extends ud{constructor(e,t,n){super(e,"twitter.com",t,n)}}function md(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=Bu(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new ld(s,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new hd(s,r);case"github.com":return new dd(s,r);case"google.com":return new fd(s,r);case"twitter.com":return new pd(s,r,e.screenName||null);case"custom":case"anonymous":return new ld(s,null);default:return new ld(s,i,r)}}(n)}
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
 */class gd{static _fromIdtoken(e,t){return new gd("enroll",e,t)}static _fromMfaPendingCredential(e){return new gd("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return gd._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return gd._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
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
 */class vd{static _fromError(e,t){const n=hh(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>Xh._fromServerResponse(n,e)));vu(i.mfaPendingCredential,n,"internal-error");const s=gd._fromMfaPendingCredential(i.mfaPendingCredential);return new vd(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Uh._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return vu(t.user,n,"internal-error"),Uh._forOperation(t.user,t.operationType,o);default:du(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}class bd{static _fromUser(e){return new bd(e)}async getSession(){return gd._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await ju(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),i=await ju(this.user,(r=this.user.auth,s={idToken:n,mfaEnrollmentId:t},Pu(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Nu(r,s))));var r,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==e?void 0:e.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Xh._fromServerResponse(e.auth,t))))}))}}const yd=new WeakMap;
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
class _d{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class wd extends _d{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Di()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ni();return Zu(e)||sh(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ah(),this._shouldAllowMigration=!0}}wd.type="LOCAL";const Id=wd;
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
 */class Ed extends _d{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ed.type="SESSION";const kd=Ed;
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
class Sd{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Sd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Cd(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Sd.receivers=[];class Td{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Cd("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Ad(){return window}
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
function Rd(){return void 0!==Ad().WorkerGlobalScope&&"function"==typeof Ad().importScripts}class Nd{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Pd(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Od(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Nd(e).toPromise()}(),t(await Od()))}))}))}async function Ld(e,t,n){const i=Pd(e,!0).put({fbase_key:t,value:n});return new Nd(i).toPromise()}function xd(e,t){const n=Pd(e,!0).delete(t);return new Nd(n).toPromise()}class Dd{async _openDb(){return this.db||(this.db=await Od()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(Rd()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Td(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Ld(e,"__sak","1"),await xd(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ld(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Pd(e,!1).get(t),i=await new Nd(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xd(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pd(e,!1).getAll();return new Nd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Dd.type="LOCAL";const Md=Dd;
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
 */function Ud(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=fu("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Fd(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */class Bd{render(e,t){const n=this.counter;return this._widgets.set(n,new jd(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}}class jd{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;vu(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const Hd=Fd("rcb"),qd=new Su(3e4,6e4);class Wd{load(e,t=""){return vu(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ad().grecaptcha):new Promise(((n,i)=>{const r=Ad().setTimeout((()=>{i(fu(e,"network-request-failed"))}),qd.get());Ad()[Hd]=()=>{Ad().clearTimeout(r),delete Ad()[Hd];const s=Ad().grecaptcha;if(!s)return void i(fu(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Ud(`https://www.google.com/recaptcha/api.js??${sr({onload:Hd,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),i(fu(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Ad().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Ad().grecaptcha)||void 0===e?void 0:e.render)}}class Vd{async load(e){return new Bd(e)}clearedOneInstance(){}}
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
 */const $d={theme:"light",type:"image"};class zd{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){vu(!this.parameters.sitekey,this.auth,"argument-error"),vu(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),vu("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Ad()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){vu(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){vu(Eu()&&!Rd(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
async function(e){return(await Pu(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);vu(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return vu(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},$d),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=hh(n),this.isInvisible="invisible"===this.parameters.size,vu("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;vu(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vd:new Wd,this.validateStartingState()}}class Kd{confirm(e){const t=kh._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function Gd(e,t,n){var i;const r=await n.verify();try{let s;if(vu("string"==typeof r,e,"argument-error"),vu("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){vu("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Pu(e,"POST","/v2/accounts/mfaEnrollment:start",Nu(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{vu("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;vu(n,e,"missing-multi-factor-info");const o=await function(e,t){return Pu(e,"POST","/v2/accounts/mfaSignIn:start",Nu(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Pu(e,"POST","/v1/accounts:sendVerificationCode",Nu(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Yd{verifyPhoneNumber(e,t){return Gd(this.auth,e,mr(t))}static credential(e,t){return kh._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yd.credentialFromTaggedObject(t)}static credentialFromError(e){return Yd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?kh._fromTokenResponse(t,n):null}constructor(e){this.providerId=Yd.PROVIDER_ID,this.auth=hh(e)}}
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
function Jd(e,t){return t?wu(t):(vu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Yd.PROVIDER_ID="phone",Yd.PHONE_SIGN_IN_METHOD="phone";class Xd extends gh{_getIdTokenResponse(e){return wh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Qd(e){return zh(e.auth,new Xd(e),e.bypassAuthState)}function Zd(e){const{auth:t,user:n}=e;return vu(n,t,"internal-error"),$h(n,new Xd(e),e.bypassAuthState)}async function ef(e){const{auth:t,user:n}=e;return vu(n,t,"internal-error"),Wh(n,new Xd(e),e.bypassAuthState)}
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
 */class tf{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qd;case"linkViaPopup":case"linkViaRedirect":return ef;case"reauthViaPopup":case"reauthViaRedirect":return Zd;default:du(this.auth,"internal-error")}}resolve(e){yu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const nf=new Su(2e3,1e4);class rf extends tf{async executeNotNull(){const e=await this.execute();return vu(e,this.auth,"internal-error"),e}async onExecution(){yu(1===this.filter.length,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(fu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(fu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(fu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,nf.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,rf.currentPopupAction&&rf.currentPopupAction.cancel(),rf.currentPopupAction=this}}rf.currentPopupAction=null;
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
const sf=new Map;class of extends tf{async execute(){let e=sf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=uf(t),i=lf(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}sf.set(this.auth._key(),e)}return this.bypassAuthState||sf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function af(e,t){return lf(e)._set(uf(t),"true")}function cf(e,t){sf.set(e._key(),t)}function lf(e){return wu(e._redirectPersistence)}function uf(e){return Yu("pendingRedirect",e.config.apiKey,e.name)}
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
 */function hf(e,t,n){return async function(e,t,n){const i=hh(e);mu(e,t,Th);const r=Jd(i,n);return await af(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function df(e,t,n){return async function(e,t,n){const i=mr(e);mu(i.auth,t,Th);const r=Jd(i.auth,n);await af(r,i.auth);const s=await mf(i);return r._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)}function ff(e,t,n){return async function(e,t,n){const i=mr(e);mu(i.auth,t,Th);const r=Jd(i.auth,n);await Vh(!1,i,t.providerId),await af(r,i.auth);const s=await mf(i);return r._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)}async function pf(e,t,n=!1){const i=hh(e),r=Jd(i,t),s=new of(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function mf(e){const t=Cd(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class gf{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bf(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bf(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(fu(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(e))}saveEventToCache(e){this.cachedEventUids.add(vf(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function vf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function bf({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function yf(e,t={}){return Pu(e,"GET","/v1/projects",t)}
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
 */const _f=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wf=/^https?/;function If(e){const t=Iu(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!wf.test(n))return!1;if(_f.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const Ef=new Su(3e4,6e4);function kf(){const e=Ad().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Sf=null;function Cf(e){return Sf=Sf||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){kf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kf(),n(fu(e,"network-request-failed"))},timeout:Ef.get()})}if(null===(r=null===(i=Ad().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ad().gapi)||void 0===s?void 0:s.load)){const t=Fd("iframefcb");return Ad()[t]=()=>{gapi.load?o():n(fu(e,"network-request-failed"))},Ud(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Sf=null,e}))}(e),Sf}
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
 */const Tf=new Su(5e3,15e3),Af={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nf(e){const t=e.config;vu(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Cu(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:ss},r=Rf.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${sr(i).slice(1)}`}
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
const Pf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Of{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Lf(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Pf),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Ni().toLowerCase();n&&(a=eh(l)?"_blank":n),Qu(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ni()){var t;return sh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new Of(null);const h=window.open(t||"",a,u);vu(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Of(h)}function xf(e,t,n,i,r,s){vu(e.config.authDomain,e,"auth-domain-config-required"),vu(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ss,eventId:r};if(t instanceof Th){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",tr(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ah){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Cu(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${sr(a).slice(1)}`}const Df=class{async _openPopup(e,t,n,i){var r;yu(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Lf(e,xf(e,t,n,Iu(),i),Cd())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=xf(e,t,n,Iu(),i),Ad().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yu(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Cf(e),n=Ad().gapi;return vu(n,e,"internal-error"),t.open({where:document.body,url:Nf(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Af,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=fu(e,"network-request-failed"),s=Ad().setTimeout((()=>{i(r)}),Tf.get());function o(){Ad().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new gf(e);return t.register("authEvent",(t=>{vu(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),du(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yf(e);for(const e of t)try{if(If(e))return}catch(e){}du(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ah()||Zu()||sh()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=pf,this._overrideRedirectResult=cf}};class Mf extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return bu("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new Mf(e)}_finalizeEnroll(e,t,n){return function(e,t){return Pu(e,"POST","/v2/accounts/mfaEnrollment:finalize",Nu(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Pu(e,"POST","/v2/accounts/mfaSignIn:finalize",Nu(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class Uf{static assertion(e){return Mf._fromCredential(e)}constructor(){}}Uf.FACTOR_ID="phone";
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
class Ff{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){vu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Bf=qi("authIdTokenMaxAge")||300;let jf=null;var Hf;
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
function qf(){return window}
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
 */Hf="Browser",Zr(new gr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{vu(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),vu(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Hf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ch(Hf)},o=new uh(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wu);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Zr(new gr("auth-internal",(e=>{const t=hh(e.getProvider("auth").getImmediate());return new Ff(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),us("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Hf)),us("@firebase/auth","0.21.0","esm2017");async function Wf(e,t,n){var i;const{BuildInfo:r}=qf();yu(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(yu(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
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
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return sh()?o.ibi=r.packageName:nh()?o.apn=r.packageName:du(e,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,xf(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}function Vf(e){const{cordova:t}=qf();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,oh()?"_blank":"_system","location=yes"),n(r)}))}))}class $f extends gf{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function zf(e){const t=await Yf()._get(Jf(e));return t&&await Yf()._remove(Jf(e)),t}function Kf(e,t){var n,i;const r=function(e){const t=Xf(e),n=t.link?decodeURIComponent(t.link):void 0,i=Xf(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return Xf(r).link||r||i||n||e}(t);if(r.includes("/__/auth/callback")){const t=Xf(r),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(i=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?fu(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function Gf(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Yf(){return wu(Id)}function Jf(e){return Yu("authEvent",e.config.apiKey,e.name)}function Xf(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return or(n.join("?"))}
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
 */const Qf=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new $f(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){du(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,r,s,o,a,c,l,u;const h=qf();vu("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),vu(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),vu("function"==typeof(null===(s=null===(r=null===(i=null==h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),vu("function"==typeof(null===(c=null===(a=null===(o=null==h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),vu("function"==typeof(null===(u=null===(l=null==h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),sf.clear(),await this._originValidation(e);const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Gf(),postBody:null,tenantId:e.tenantId,error:fu(e,"no-auth-event")}}(e,n,i);await function(e,t){return Yf()._set(Jf(e),t)}(e,s);const o=await Wf(e,s,t);return async function(e,t,n){const{cordova:i}=qf();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(fu(e,"redirect-cancelled-by-user"))}),2e3))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),nh()&&document.addEventListener("visibilitychange",u,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{r()}}(e,r,await Vf(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=qf(),n={};sh()?n.iosBundleId=t.packageName:nh()?n.androidPackageName=t.packageName:du(e,"operation-not-supported-in-this-environment"),await yf(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=qf(),s=setTimeout((async()=>{await zf(e),t.onEvent(Zf())}),500),o=async n=>{clearTimeout(s);const i=await zf(e);let r=null;i&&(null==n?void 0:n.url)&&(r=Kf(i,n.url)),t.onEvent(r||Zf())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=i,c=`${r.packageName.toLowerCase()}://`;qf().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=kd,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=pf,this._overrideRedirectResult=cf}};function Zf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:fu("no-auth-event")}}
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
 */function ep(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function tp(e=Ni()){return!("file:"!==ep()&&"ionic:"!==ep()&&"capacitor:"!==ep()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function np(e=Ni()){return Di()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Ni()){return/Edge\/\d+/.test(e)}(e)}function ip(){try{const e=self.localStorage,t=Cd();if(e)return e.setItem(t,"1"),e.removeItem(t),!np()||Ui()}catch(e){return rp()&&Ui()}return!1}function rp(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function sp(){return("http:"===ep()||"https:"===ep()||Li()||tp())&&!(xi()||Oi())&&ip()&&!rp()}function op(){return tp()&&"undefined"!=typeof document}
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
const ap={LOCAL:"local",NONE:"none",SESSION:"session"},cp=vu;async function lp(e){await e._initializationPromise;const t=up(),n=Yu("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function up(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
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
 */const hp=vu;class dp{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return op()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return hp(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!op()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=wu(Df),this.cordovaResolver=wu(Qf),this.underlyingResolver=null,this._redirectPersistence=kd,this._completeRedirectFn=pf,this._overrideRedirectResult=cf}}
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
 */function fp(e){return e.unwrap()}function pp(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new bp(e,function(e,t){var n;const i=mr(e),r=t;return vu(t.customData.operationType,i,"argument-error"),vu(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),vd._fromError(i,r)}(e,t))}else if(i){const e=mp(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function mp(e){const{_tokenResponse:t}=e instanceof $i?e.customData:e;if(!t)return null;if(!(e instanceof $i)&&"temporaryProof"in t&&"phoneNumber"in t)return Yd.credentialFromResult(e);const n=t.providerId;if(!n||n===Ql)return null;let i;switch(n){case Xl:i=Ph;break;case Yl:i=Nh;break;case Jl:i=Oh;break;case Zl:i=Dh;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return r||s||e||o?o?n.startsWith("saml.")?Lh._create(n,o):Ih._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:r}):new Rh(n).credential({idToken:e,accessToken:r,rawNonce:a}):null}return e instanceof $i?i.credentialFromError(e):i.credentialFromResult(e)}function gp(e,t){return t.catch((t=>{throw t instanceof $i&&pp(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,mp(i)),additionalUserInfo:md(e),user:yp.getOrCreate(n)};
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
var i}))}async function vp(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>gp(e,n.confirm(t))}}class bp{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return gp(fp(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
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
 */class yp{static getOrCreate(e){return yp.USER_MAP.has(e)||yp.USER_MAP.set(e,new yp(e)),yp.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return gp(this.auth,Gh(this._delegate,e))}async linkWithPhoneNumber(e,t){return vp(this.auth,async function(e,t,n){const i=mr(e);await Vh(!1,i,"phone");const r=await Gd(i.auth,t,mr(n));return new Kd(r,(e=>Gh(i,e)))}(this._delegate,e,t))}async linkWithPopup(e){return gp(this.auth,async function(e,t,n){const i=mr(e);mu(i.auth,t,Th);const r=Jd(i.auth,n);return new rf(i.auth,"linkViaPopup",t,r,i).executeNotNull()}(this._delegate,e,dp))}async linkWithRedirect(e){return await lp(hh(this.auth)),ff(this._delegate,e,dp)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return gp(this.auth,Yh(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return vp(this.auth,async function(e,t,n){const i=mr(e),r=await Gd(i.auth,t,mr(n));return new Kd(r,(e=>Yh(i,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return gp(this.auth,async function(e,t,n){const i=mr(e);mu(i.auth,t,Th);const r=Jd(i.auth,n);return new rf(i.auth,"reauthViaPopup",t,r,i).executeNotNull()}(this._delegate,e,dp))}async reauthenticateWithRedirect(e){return await lp(hh(this.auth)),df(this._delegate,e,dp)}sendEmailVerification(e){return sd(this._delegate,e)}async unlink(e){return await qh(this._delegate,e),this}updateEmail(e){return function(e,t){return cd(mr(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return cd(mr(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await Wh(mr(e),t)}(this._delegate,e)}updateProfile(e){return ad(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return od(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=function(e){const t=mr(e);return yd.has(t)||yd.set(t,bd._fromUser(t)),yd.get(t)}(e)}}yp.USER_MAP=new WeakMap;
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
const _p=vu;class wp{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?yp.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){fh(this._delegate,e,t)}applyActionCode(e){return td(this._delegate,e)}checkActionCode(e){return nd(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await vh(mr(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return gp(this._delegate,async function(e,t,n){const i=hh(e),r=await Mh(i,{returnSecureToken:!0,email:t,password:n}),s=await Uh._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return rd(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=Sh.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){_p(sp(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await hh(e)._initializationPromise,pf(e,t,!1)}(this._delegate,dp);return e?gp(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){hh(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=Ip(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=Ip(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return id(this._delegate,e,t)}sendPasswordResetEmail(e,t){return ed(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){cp(Object.values(ap).includes(t),e,"invalid-persistence-type"),xi()?cp(t!==ap.SESSION,e,"unsupported-persistence-type"):Oi()?cp(t===ap.NONE,e,"unsupported-persistence-type"):rp()?cp(t===ap.NONE||t===ap.LOCAL&&Ui(),e,"unsupported-persistence-type"):cp(t===ap.NONE||ip(),e,"unsupported-persistence-type")}(this._delegate,e),e){case ap.SESSION:t=kd;break;case ap.LOCAL:t=await wu(Md)._isAvailable()?Md:Id;break;case ap.NONE:t=Gu;break;default:return du("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return gp(this._delegate,async function(e){var t;const n=hh(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Uh({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Mh(n,{returnSecureToken:!0}),r=await Uh._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return gp(this._delegate,Kh(this._delegate,e))}signInWithCustomToken(e){return gp(this._delegate,Jh(this._delegate,e))}signInWithEmailAndPassword(e,t){return gp(this._delegate,function(e,t,n){return Kh(mr(e),Ch.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return gp(this._delegate,async function(e,t,n){const i=mr(e),r=Ch.credentialWithLink(t,n||Iu());return vu(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Kh(i,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return vp(this._delegate,async function(e,t,n){const i=hh(e),r=await Gd(i,t,mr(n));return new Kd(r,(e=>Kh(i,e)))}(this._delegate,e,t))}async signInWithPopup(e){return _p(sp(),this._delegate,"operation-not-supported-in-this-environment"),gp(this._delegate,async function(e,t,n){const i=hh(e);mu(e,t,Th);const r=Jd(i,n);return new rf(i,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,dp))}async signInWithRedirect(e){return _p(sp(),this._delegate,"operation-not-supported-in-this-environment"),await lp(this._delegate),hf(this._delegate,e,dp)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await nd(mr(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;_p(n,"invalid-api-key",{appName:e.name}),_p(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?dp:void 0;this._delegate=t.initialize({options:{persistence:Ep(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(au),this.linkUnderlyingAuth()}}function Ip(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&yp.getOrCreate(e)),error:t,complete:n}}function Ep(e,t){const n=function(e,t){const n=up();if(!n)return[];const i=Yu("persistence",e,t);switch(n.getItem(i)){case ap.NONE:return[Gu];case ap.LOCAL:return[Md,kd];case ap.SESSION:return[kd];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(Md)||n.push(Md),"undefined"!=typeof window)for(const e of[Id,kd])n.includes(e)||n.push(e);return n.includes(Gu)||n.push(Gu),n}
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
 */wp.Persistence=ap;class kp{static credential(e,t){return Yd.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new Yd(fp(Kl.auth()))}}kp.PHONE_SIGN_IN_METHOD=Yd.PHONE_SIGN_IN_METHOD,kp.PROVIDER_ID=Yd.PROVIDER_ID;
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
const Sp=vu;class Cp{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=Kl.app()){var i;Sp(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new zd(e,t,n.auth()),this.type=this._delegate.type}}
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
 */var Tp;(Tp=Kl).INTERNAL.registerComponent(new gr("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new wp(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:eu,PASSWORD_RESET:tu,RECOVER_EMAIL:nu,REVERT_SECOND_FACTOR_ADDITION:iu,VERIFY_AND_CHANGE_EMAIL:ru,VERIFY_EMAIL:su}},EmailAuthProvider:Ch,FacebookAuthProvider:Nh,GithubAuthProvider:Oh,GoogleAuthProvider:Ph,OAuthProvider:Rh,SAMLAuthProvider:xh,PhoneAuthProvider:kp,PhoneMultiFactorGenerator:Uf,RecaptchaVerifier:Cp,TwitterAuthProvider:Dh,Auth:wp,AuthCredential:gh,Error:$i}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Tp.registerVersion("@firebase/auth-compat","0.3.0");var Ap={};!function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function n(e){e&&e.blur&&e!==document.body&&e.blur()}function i(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var s="DOMNodeRemoved";n|=r.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),o.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}n(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!o.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,o.needsCentering(this.dialog_)?(o.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var n=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var o={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],r=null;try{r=n.cssRules}catch(e){}if(r)for(var s=0;s<r.length;++s){var o=r[s],a=null;try{a=document.querySelectorAll(o.selectorText)}catch(e){}if(a&&i(a,e)){var c=o.style.getPropertyValue("top"),l=o.style.getPropertyValue("bottom");if(c&&"auto"!==c||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!o.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||o.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(o.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},o.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},o.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},o.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var n,i=0;n=this.pendingDialogStack[i];++i)if(n.dialog===e)return 0===i;e=e.parentElement}return!1},o.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),n(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},o.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var n=new e("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},o.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},o.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},o.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},o.dm=new o.DialogManager,o.formSubmitter=null,o.useValue=null,void 0===window.HTMLDialogElement){var a=document.createElement("form");if(a.setAttribute("method","dialog"),"dialog"!==a.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var l=c.get;c.get=function(){return r(this)?"dialog":l.call(this)};var u=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):u.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(o.formSubmitter=null,o.useValue=null,!e.defaultPrevented){var n=e.target;if(n&&r(n.form)){if(!("submit"===n.type&&["button","input"].indexOf(n.localName)>-1)){if("input"!==n.localName||"image"!==n.type)return;o.useValue=e.offsetX+","+e.offsetY}t(n)&&(o.formSubmitter=n)}}}),!1);var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return h.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var n=e.target;if(r(n)){e.preventDefault();var i=t(n);if(i){var s=o.formSubmitter;s&&s.form===n?i.close(o.useValue||s.value):i.close(),o.formSubmitter=null}}}),!0)}o.forceRegisterDialog=o.forceRegisterDialog,o.registerDialog=o.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return o})):"object"==typeof Ap?Ap=o:window.dialogPolyfill=o}();
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
var Rp,Np,Pp,Op,Lp={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};Lp=function(){var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==r(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function a(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)a(e[r].className,e[r].cssClass);else{var s=t;if(void 0===n){var o=i(s);o&&(n=o.cssClass)}for(var l=document.querySelectorAll("."+n),u=0;u<l.length;u++)c(l[u],s)}}function c(a,c){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(l),!l.defaultPrevented){var u=r(a),h=[];if(c)s(a,c)||h.push(i(c));else{var d=a.classList;e.forEach((function(e){d.contains(e.cssClass)&&-1===h.indexOf(e)&&!s(a,e.className)&&h.push(e)}))}for(var f,p=0,m=h.length;p<m;p++){if(!(f=h[p]))throw new Error("Unable to find a registered component for the given class.");u.push(f.className),a.setAttribute("data-upgraded",u.join(","));var g=new f.classConstructor(a);g[n]=f,t.push(g);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](a);f.widget&&(a[f.className]=g);var y=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(y)}}}function l(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),s=r.indexOf(e[n].classAsString);r.splice(s,1),e.element_.setAttribute("data-upgraded",r.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}(),Lp.ComponentConfigPublic,Lp.ComponentConfig,Lp.Component,Lp.upgradeDom=Lp.upgradeDom,Lp.upgradeElement=Lp.upgradeElement,Lp.upgradeElements=Lp.upgradeElements,Lp.upgradeAllRegistered=Lp.upgradeAllRegistered,Lp.registerUpgradedCallback=Lp.registerUpgradedCallback,Lp.register=Lp.register,Lp.downgradeElements=Lp.downgradeElements,window.componentHandler=Lp,window.componentHandler=Lp,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Lp.upgradeAllRegistered()):(Lp.upgradeElement=function(){},Lp.register=function(){})})),
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
Rp=function(e){this.element_=e,this.init()},window.MaterialButton=Rp,Rp.prototype.Constant_={},Rp.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},Rp.prototype.blurHandler_=function(e){e&&this.element_.blur()},Rp.prototype.disable=function(){this.element_.disabled=!0},Rp.prototype.disable=Rp.prototype.disable,Rp.prototype.enable=function(){this.element_.disabled=!1},Rp.prototype.enable=Rp.prototype.enable,Rp.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:Rp,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
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
Np=function(e){this.element_=e,this.init()},window.MaterialProgress=Np,Np.prototype.Constant_={},Np.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},Np.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},Np.prototype.setProgress=Np.prototype.setProgress,Np.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},Np.prototype.setBuffer=Np.prototype.setBuffer,Np.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Np,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
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
Pp=function(e){this.element_=e,this.init()},window.MaterialSpinner=Pp,Pp.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},Pp.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},Pp.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var s=[n,i,r],o=0;o<s.length;o++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),s[o].appendChild(a)}t.appendChild(n),t.appendChild(i),t.appendChild(r),this.element_.appendChild(t)},Pp.prototype.createLayer=Pp.prototype.createLayer,Pp.prototype.stop=function(){this.element_.classList.remove("is-active")},Pp.prototype.stop=Pp.prototype.stop,Pp.prototype.start=function(){this.element_.classList.add("is-active")},Pp.prototype.start=Pp.prototype.start,Pp.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Pp,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
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
Op=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Op,Op.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Op.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Op.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Op.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Op.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Op.prototype.onReset_=function(e){this.updateClasses_()},Op.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Op.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Op.prototype.checkDisabled=Op.prototype.checkDisabled,Op.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Op.prototype.checkFocus=Op.prototype.checkFocus,Op.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Op.prototype.checkValidity=Op.prototype.checkValidity,Op.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Op.prototype.checkDirty=Op.prototype.checkDirty,Op.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Op.prototype.disable=Op.prototype.disable,Op.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Op.prototype.enable=Op.prototype.enable,Op.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Op.prototype.change=Op.prototype.change,Op.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Op,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var t,n,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;e:{var s={};try{s.__proto__={xb:!0},r=s.xb;break e}catch(Xe){}r=!1}n=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var o=n;function a(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,o)o(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},l="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function u(e,t){if(t){var n=l;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&c(n,e,{configurable:!0,writable:!0,value:t})}}u("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),u("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var h=this;function d(e){return void 0!==e}function f(e){return"string"==typeof e}var p=/^[\w+/_-]+[=]{0,2}$/,m=null;function g(){}function v(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function y(e){return"array"==b(e)}function _(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function w(e){return"function"==b(e)}function I(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var E="closure_uid_"+(1e9*Math.random()>>>0),k=0;function S(e,t,n){return e.call.apply(e.bind,arguments)}function C(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:C).apply(null,arguments)}function A(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function R(e,t){for(var n in t)e[n]=t[n]}var N,P=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var n,i=h;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&d(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function L(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function x(e){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function D(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");x.call(this,n+e[i])}function M(e,t){throw new D("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}L(x,Error),x.prototype.name="CustomError",L(D,x),D.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(f(e))return f(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},F=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=f(e)?e.split(""):e,s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,s=f(e)?e.split(""):e,o=0;o<n;o++)if(o in s){var a=s[o];t.call(void 0,a,o,e)&&(i[r++]=a)}return i},j=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=f(e)?e.split(""):e,s=0;s<n;s++)s in r&&(i[s]=t.call(void 0,r[s],s,e));return i},H=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function q(e,t){return 0<=U(e,t)}function W(e,t){var n;return(n=0<=(t=U(e,t)))&&V(e,t),n}function V(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function $(e,t){!function(e,t){for(var n=f(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&V(e,i)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function K(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function G(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var Y=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},J=/&/g,X=/</g,Q=/>/g,Z=/"/g,ee=/'/g,te=/\x00/g,ne=/[\x00&<>"']/;function ie(e,t){return e<t?-1:e>t?1:0}function re(e){return ne.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(J,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(X,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Z,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(ee,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(te,"&#0;"))),e}function se(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function oe(e){var t,n={};for(t in e)n[t]=e[t];return n}var ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var s=0;s<ae.length;s++)n=ae[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var le="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function ue(){}function he(e){if(e instanceof ue)return e;if("function"==typeof e.ha)return e.ha(!1);if(_(e)){var t=0,n=new ue;return n.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function de(e){if(_(e))return K(e);e=he(e);var t=[];return function(e,t){if(_(e))try{F(e,t,void 0)}catch(e){if(e!==le)throw e}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==le)throw e}}}(e,(function(e){t.push(e)})),t}function fe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof fe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function pe(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];me(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)me(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}ue.prototype.next=function(){throw le},ue.prototype.ha=function(){return this},(t=fe.prototype).la=function(){pe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},t.ja=function(){return pe(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0},t.get=function(e,t){return me(this.g,e)?this.g[e]:t},t.set=function(e,t){me(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},t.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}},t.ha=function(e){pe(this);var t=0,n=this.j,i=this,r=new ue;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw le;var r=i.a[t++];return e?r:i.g[r]},r};var ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ve(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var s=e.charCodeAt(t-1);if(!(38!=s&&63!=s||(s=e.charCodeAt(t+r))&&61!=s&&38!=s&&35!=s))return t;t+=r+1}return-1}var be=/#|$/;function ye(e,t){var n=e.search(be),i=ve(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var _e=/[?&]($|#)/;function we(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof we?(this.i=d(t)?t:e.i,Ie(this,e.j),this.A=e.A,this.h=e.h,Ee(this,e.C),this.g=e.g,ke(this,Fe(e.a)),this.s=e.s):e&&(n=String(e).match(ge))?(this.i=!!t,Ie(this,n[1]||"",!0),this.A=Ce(n[2]||""),this.h=Ce(n[3]||"",!0),Ee(this,n[4]),this.g=Ce(n[5]||"",!0),ke(this,n[6]||"",!0),this.s=Ce(n[7]||"")):(this.i=!!t,this.a=new xe(null,this.i))}function Ie(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ee(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function ke(e,t,n){t instanceof xe?(e.a=t,function(e,t){t&&!e.j&&(De(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Me(this,t),Me(this,n),0<e.length&&(this.h=null,this.a.set(Be(this,n),K(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=Te(t,Oe)),e.a=new xe(t,e.i))}function Se(e){return e instanceof we?new we(e):new we(e,void 0)}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,n){return f(e)?(e=encodeURI(e).replace(t,Ae),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ae(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}we.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,Re,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Te(t,Re,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Te(n,"/"==n.charAt(0)?Pe:Ne,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Te(n,Le)),e.join("")};var Re=/[#\/\?@]/g,Ne=/[#\?:]/g,Pe=/[#\?]/g,Oe=/[#\?@]/g,Le=/#/g;function xe(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function De(e){e.a||(e.a=new fe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Me(e,t){De(e),t=Be(e,t),me(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,me((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&pe(e)))}function Ue(e,t){return De(e),t=Be(e,t),me(e.a.g,t)}function Fe(e){var t=new xe;return t.h=e.h,e.a&&(t.a=new fe(e.a),t.g=e.g),t}function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function je(e){this.a=Se(e)}function He(e){return e.a.a.get(Ve.Pa)||null}function qe(e,t){t?e.a.a.set(Ve.PROVIDER_ID,t):Me(e.a.a,Ve.PROVIDER_ID)}(t=xe.prototype).add=function(e,t){De(this),this.h=null,e=Be(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},t.clear=function(){this.a=this.h=null,this.g=0},t.forEach=function(e,t){De(this),this.a.forEach((function(n,i){F(n,(function(n){e.call(t,n,i,this)}),this)}),this)},t.ja=function(){De(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},t.la=function(e){De(this);var t=[];if(f(e))Ue(this,e)&&(t=z(t,this.a.get(Be(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=z(t,e[n])}return t},t.set=function(e,t){return De(this),this.h=null,Ue(this,e=Be(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},t.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},t.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.h=e.join("&")},je.prototype.toString=function(){return this.a.toString()};var We,Ve={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var $e=h.navigator;if($e){var ze=$e.userAgent;if(ze){We=ze;break e}}We=""}function Ke(e){return-1!=We.indexOf(e)}function Ge(){return(Ke("Chrome")||Ke("CriOS"))&&!Ke("Edge")}function Ye(e){return Ye[" "](e),e}Ye[" "]=g;var Je,Xe,Qe=Ke("Opera"),Ze=Ke("Trident")||Ke("MSIE"),et=Ke("Edge"),tt=et||Ze,nt=Ke("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),it=-1!=We.toLowerCase().indexOf("webkit")&&!Ke("Edge"),rt=it&&Ke("Mobile"),st=Ke("Macintosh");function ot(){var e=h.document;return e?e.documentMode:void 0}e:{var at="",ct=(Xe=We,nt?/rv:([^\);]+)(\)|;)/.exec(Xe):et?/Edge\/([\d\.]+)/.exec(Xe):Ze?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xe):it?/WebKit\/(\S+)/.exec(Xe):Qe?/(?:Version)[ \/]?(\S+)/.exec(Xe):void 0);if(ct&&(at=ct?ct[1]:""),Ze){var lt=ot();if(null!=lt&&lt>parseFloat(at)){Je=String(lt);break e}}Je=at}var ut,ht={};function dt(e){return function(e,t){var n=ht;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=Y(String(Je)).split("."),i=Y(String(e)).split("."),r=Math.max(n.length,i.length),s=0;0==t&&s<r;s++){var o=n[s]||"",a=i[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=ie(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||ie(0==o[2].length,0==a[2].length)||ie(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t}))}var ft=h.document;function pt(e,t){this.a=e===gt&&t||"",this.g=mt}ut=ft&&Ze?ot()||("CSS1Compat"==ft.compatMode?parseInt(Je,10):5):void 0,pt.prototype.ma=!0,pt.prototype.ka=function(){return this.a},pt.prototype.toString=function(){return"Const{"+this.a+"}"};var mt={},gt={};function vt(){this.a="",this.h=yt}function bt(e){return e instanceof vt&&e.constructor===vt&&e.h===yt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}vt.prototype.ma=!0,vt.prototype.ka=function(){return this.a.toString()},vt.prototype.g=function(){return 1},vt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var yt={};function _t(){this.a="",this.h=St}function wt(e){return e instanceof _t&&e.constructor===_t&&e.h===St?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}_t.prototype.ma=!0,_t.prototype.ka=function(){return this.a.toString()},_t.prototype.g=function(){return 1},_t.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var It=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Et(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),Ct(e))}function kt(e){return e instanceof _t?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),Ct(e))}var St={};function Ct(e){var t=new _t;return t.a=e,t}function Tt(){this.a="",this.g=At}Ct("about:blank"),Tt.prototype.ma=!0;var At={};function Rt(){this.a="",this.j=Pt,this.h=null}function Nt(e){return e instanceof Rt&&e.constructor===Rt&&e.j===Pt?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}Tt.prototype.ka=function(){return this.a},Tt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},Rt.prototype.g=function(){return this.h},Rt.prototype.ma=!0,Rt.prototype.ka=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pt={};function Ot(e,t){var n=new Rt;return n.a=e,n.h=t,n}Ot("<!DOCTYPE html>",0);var Lt=Ot("",0);Ot("<br>",0);var xt,Dt,Mt=(Dt=!1,function(){return Dt||(xt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Nt(Lt),!t.parentElement)}(),Dt=!0),xt});function Ut(e,t){t=t instanceof _t?t:kt(t),e.assign(wt(t))}function Ft(e,t){this.a=d(e)?e:0,this.g=d(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function jt(e){return e?new Jt(Kt(e)):N||(N=new Jt)}function Ht(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Wt(document,e,t)}function qt(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Wt(n,e,t)[0]||null}return e||null}function Wt(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(n=i=0;e=r[n];n++){var o=e.className;"function"==typeof o.split&&q(o.split(/\s+/),t)&&(s[i++]=e)}return s.length=i,s}return r}Ft.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ft.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ft.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ft.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(t=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},t.aspectRatio=function(){return this.width/this.height},t.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},t.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},t.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Vt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function $t(e){return e.scrollingElement?e.scrollingElement:(it||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function zt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Kt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Gt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild(Kt(e).createTextNode(String(t)))}}function Yt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||f(e.className)&&q(e.className.split(/\s+/),t)})):null}function Jt(e){this.a=e||h.document||document}Jt.prototype.N=function(){return f(void 0)?this.a.getElementById(void 0):void 0};var Xt={Fc:!0},Qt={Hc:!0},Zt={Ec:!0},en={Gc:!0};function tn(){throw Error("Do not instantiate directly")}function nn(e,t,n,i){if(e=e(t||sn,void 0,n),i=(i||jt()).a.createElement("DIV"),(e=function(e){if(!I(e))return re(String(e));if(e instanceof tn){if(e.fa===Xt)return e.content;if(e.fa===en)return re(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(rn),e=Ot(e,null),Mt())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Nt(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}tn.prototype.va=null,tn.prototype.toString=function(){return this.content};var rn=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,sn={};function on(){tn.call(this)}function an(e){return null!=e&&e.fa===Xt?e:e instanceof Rt?hn(Nt(e).toString(),e.g()):hn(re(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function cn(){tn.call(this)}function ln(e,t){this.content=String(e),this.va=null!=t?t:null}function un(e){return new ln(e,void 0)}L(on,tn),on.prototype.fa=Xt,L(cn,tn),cn.prototype.fa=Qt,cn.prototype.va=1,L(ln,tn),ln.prototype.fa=en;var hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(on),dn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(cn);function fn(e){return(e=String(e))?new ln(e,void 0):""}var pn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(on);function mn(e){return null!=e&&e.fa===Xt?String(String(e.content).replace(Cn,"").replace(Tn,"&lt;")).replace(In,yn):re(String(e))}function gn(e){return null!=e&&e.fa===Qt?e=String(e).replace(En,wn):e instanceof _t?e=String(wt(e).toString()).replace(En,wn):(e=String(e),Sn.test(e)?e=e.replace(En,wn):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function vn(e){return null!=e&&e.fa===Zt?e=e.content:null==e?e="":e instanceof Tt?e instanceof Tt&&e.constructor===Tt&&e.g===At?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),kn.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var bn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function yn(e){return bn[e]}var _n={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function wn(e){return _n[e]}var In=/[\x00\x22\x27\x3c\x3e]/g,En=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Sn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Cn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Tn=/</g;function An(){return un("Enter a valid phone number")}function Rn(){return un("Unable to send password reset code to specified email")}function Nn(){return un("Something went wrong. Please try again.")}function Pn(){return un("This email already exists without any means of sign-in. Please reset the password to recover.")}function On(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return un(t)}function Ln(){return un("Please login again to perform this operation")}function xn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Dn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Nn();e=un(e).toString()}this.message=e||"",this.credential=n||null}a(xn,Error),xn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Dn="firebaseui/";function Mn(){0!=Un&&(Fn[this[E]||(this[E]=++k)]=this),this.T=this.T,this.C=this.C}var Un=0,Fn={};function Bn(e,t){e.T?d(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(d(void 0)?T(t,void 0):t))}function jn(e){e&&"function"==typeof e.m&&e.m()}Mn.prototype.T=!1,Mn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Un)){var e=this[E]||(this[E]=++k);if(0!=Un&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Fn[e]}},Mn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Hn=Object.freeze||function(e){return e},qn=!Ze||9<=Number(ut),Wn=Ze&&!dt("9"),Vn=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",g,t),h.removeEventListener("test",g,t)}catch(e){}return e}();function $n(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function zn(e,t){if($n.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nt){e:{try{Ye(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=f(e.pointerType)?e.pointerType:Kn[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}$n.prototype.stopPropagation=function(){this.h=!0},$n.prototype.preventDefault=function(){this.qb=!1},L(zn,$n);var Kn=Hn({2:"touch",3:"pen",4:"mouse"});zn.prototype.stopPropagation=function(){zn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},zn.prototype.preventDefault=function(){zn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Wn)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Gn="closure_listenable_"+(1e6*Math.random()|0),Yn=0;function Jn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++Yn,this.sa=this.Ia=!1}function Xn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Qn(e){this.src=e,this.a={},this.g=0}function Zn(e,t){var n=t.type;n in e.a&&W(e.a[n],t)&&(Xn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ei(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!n&&s.La==i)return r}return-1}Qn.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.g++);var o=ei(e,t,i,r);return-1<o?(t=e[o],n||(t.Ia=!1)):((t=new Jn(t,this.src,s,!!i,r)).Ia=n,e.push(t)),t};var ti="closure_lm_"+(1e6*Math.random()|0),ni={};function ii(e,t,n,i,r){if(i&&i.once)return si(e,t,n,i,r);if(y(t)){for(var s=0;s<t.length;s++)ii(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!1,I(i)?!!i.capture:!!i,r):ri(e,t,n,!1,i,r)}function ri(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=I(r)?!!r.capture:!!r,a=di(e);if(a||(e[ti]=a=new Qn(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){var e=hi,t=qn?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Vn||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ci(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function si(e,t,n,i,r){if(y(t)){for(var s=0;s<t.length;s++)si(e,t[s],n,i,r);return null}return n=pi(n),e&&e[Gn]?e.J.add(String(t),n,!0,I(i)?!!i.capture:!!i,r):ri(e,t,n,!0,i,r)}function oi(e,t,n,i,r){if(y(t))for(var s=0;s<t.length;s++)oi(e,t[s],n,i,r);else i=I(i)?!!i.capture:!!i,n=pi(n),e&&e[Gn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ei(s=e.a[t],n,i,r))&&(Xn(s[n]),V(s,n),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=di(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ei(t,n,i,r)),(n=-1<e?t[e]:null)&&ai(n))}function ai(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Gn])Zn(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ci(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=di(t))?(Zn(n,e),0==n.g&&(n.src=null,t[ti]=null)):Xn(e)}}}function ci(e){return e in ni?ni[e]:ni[e]="on"+e}function li(e,t,n,i){var r=!0;if((e=di(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==n&&!s.sa&&(s=ui(s,i),r=r&&!1!==s)}return r}function ui(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ai(e),n.call(i,t)}function hi(e,t){if(e.sa)return!0;if(!qn){if(!t)e:{t=["window","event"];for(var n=h,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new zn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var s=li(i[r],e,!0,t);n=n&&s}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],s=li(i[r],e,!1,t),n=n&&s}return n}return ui(e,new zn(t,this))}function di(e){return(e=e[ti])instanceof Qn?e:null}var fi="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(e){return w(e)?e:(e[fi]||(e[fi]=function(t){return e.handleEvent(t)}),e[fi])}function mi(){Mn.call(this),this.J=new Qn(this),this.wb=this,this.Ha=null}function gi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,f(t))t=new $n(t,e);else if(t instanceof $n)t.target=t.target||e;else{var r=t;ce(t=new $n(i,e),r)}if(r=!0,n)for(var s=n.length-1;!t.h&&0<=s;s--){var o=t.g=n[s];r=vi(o,i,!0,t)&&r}if(t.h||(r=vi(o=t.g=e,i,!0,t)&&r,t.h||(r=vi(o,i,!1,t)&&r)),n)for(s=0;!t.h&&s<n.length;s++)r=vi(o=t.g=n[s],i,!1,t)&&r;return r}function vi(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.sa&&o.capture==n){var a=o.listener,c=o.La||o.src;o.Ia&&Zn(e.J,o),r=!1!==a.call(c,i)&&r}}return r&&0!=i.qb}L(mi,Mn),mi.prototype[Gn]=!0,mi.prototype.Za=function(e){this.Ha=e},mi.prototype.removeEventListener=function(e,t,n,i){oi(this,e,t,n,i)},mi.prototype.o=function(){if(mi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Xn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var bi={},yi=0;function _i(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ii(e),bi[e]&&bi[e].length)for(var n=0;n<bi[e].length;n++)gi(bi[e][n],t)}function wi(e){var t=Ii(e.N());bi[t]&&bi[t].length&&(function(e,t){e:{for(var n=e.length,i=f(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&V(e,t)}(bi[t],(function(t){return t==e})),bi[t].length||delete bi[t])}function Ii(e){return void 0===e.a&&(e.a=yi,yi++),e.a}function Ei(e){if(!e)throw Error("Event target element must be provided!");mi.call(this),this.a=e}function ki(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Si(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Ci(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Ti(){this.g=this.a=null}a(Ei,mi),Ei.prototype.N=function(){return this.a},Ei.prototype.register=function(){var e=Ii(this.N());bi[e]?q(bi[e],this)||bi[e].push(this):bi[e]=[this]},Si.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ai,Ri,Ni=new Si((function(){return new Oi}),(function(e){e.reset()}));function Pi(){var e=Mi,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Oi(){this.next=this.g=this.a=null}function Li(e){h.setTimeout((function(){throw e}),0)}function xi(e,t){Ri||function(){if(h.Promise&&h.Promise.resolve){var e=h.Promise.resolve(void 0);Ri=function(){e.then(Ui)}}else Ri=function(){var e=Ui;!w(h.setImmediate)||h.Window&&h.Window.prototype&&!Ke("Edge")&&h.Window.prototype.setImmediate==h.setImmediate?(Ai||(Ai=function(){var e=h.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Ke("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=T((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!Ke("Trident")&&!Ke("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(d(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){h.setTimeout(e,0)}}()),Ai(e)):h.setImmediate(e)}}(),Di||(Ri(),Di=!0),Mi.add(e,t)}Ti.prototype.add=function(e,t){var n=Ni.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Oi.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Oi.prototype.reset=function(){this.next=this.g=this.a=null};var Di=!1,Mi=new Ti;function Ui(){for(var e;e=Pi();){try{e.a.call(e.g)}catch(e){Li(e)}Ci(Ni,e)}Di=!1}function Fi(e){if(this.a=Bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=g)try{var t=this;e.call(void 0,(function(e){Ji(t,ji,e)}),(function(e){if(!(e instanceof nr))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Ji(t,Hi,e)}))}catch(e){Ji(this,Hi,e)}}var Bi=0,ji=2,Hi=3;function qi(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}qi.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Wi=new Si((function(){return new qi}),(function(e){e.reset()}));function Vi(e,t,n){var i=Wi.get();return i.s=e,i.g=t,i.j=n,i}function $i(e){if(e instanceof Fi)return e;var t=new Fi(g);return Ji(t,ji,e),t}function zi(e){return new Fi((function(t,n){n(e)}))}function Ki(e,t){if(e.a==Bi)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,s=null,o=n.g;o&&(o.h||(i++,o.a==e&&(r=o),!(r&&1<i)));o=o.next)r||(s=o);r&&(n.a==Bi&&1==i?Ki(n,t):(s?((i=s).next==n.j&&(n.j=i),i.next=i.next.next):Qi(n),Zi(n,r,Hi,t)))}e.h=null}else Ji(e,Hi,t)}function Gi(e,t){e.g||e.a!=ji&&e.a!=Hi||Xi(e),e.j?e.j.next=t:e.g=t,e.j=t}function Yi(e,t,n,i){var r=Vi(null,null,null);return r.a=new Fi((function(e,s){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){s(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!d(r)&&t instanceof nr?s(t):e(r)}catch(e){s(e)}}:s})),r.a.h=e,Gi(e,r),r.a}function Ji(e,t,n){if(e.a==Bi){e===n&&(t=Hi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,s=e.ic;if(i instanceof Fi){Gi(i,Vi(r||g,s||null,e));var o=!0}else if(ki(i))i.then(r,s,e),o=!0;else{if(I(i))try{var a=i.then;if(w(a)){!function(e,t,n,i,r){function s(e){a||(a=!0,i.call(r,e))}function o(e){a||(a=!0,n.call(r,e))}var a=!1;try{t.call(e,o,s)}catch(e){s(e)}}(i,a,r,s,e),o=!0;break e}}catch(t){s.call(e,t),o=!0;break e}o=!1}}o||(e.A=n,e.a=t,e.h=null,Xi(e),t!=Hi||n instanceof nr||function(e,t){e.s=!0,xi((function(){e.s&&tr.call(null,t)}))}(e,n))}}function Xi(e){e.i||(e.i=!0,xi(e.Hb,e))}function Qi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Zi(e,t,n,i){if(n==Hi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,er(t,n,i);else try{t.h?t.s.call(t.j):er(t,n,i)}catch(e){tr.call(null,e)}Ci(Wi,t)}function er(e,t,n){t==ji?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}Fi.prototype.then=function(e,t,n){return Yi(this,w(e)?e:null,w(t)?t:null,n)},Fi.prototype.$goog_Thenable=!0,(t=Fi.prototype).fc=function(e,t){return(e=Vi(e,e,t)).h=!0,Gi(this,e),this},t.Ca=function(e,t){return Yi(this,null,e,t)},t.cancel=function(e){this.a==Bi&&xi((function(){Ki(this,new nr(e))}),this)},t.hc=function(e){this.a=Bi,Ji(this,ji,e)},t.ic=function(e){this.a=Bi,Ji(this,Hi,e)},t.Hb=function(){for(var e;e=Qi(this);)Zi(this,e,this.a,this.A);this.i=!1};var tr=Li;function nr(e){x.call(this,e)}function ir(e,t,n){t||(t={}),n=n||window;var i=e instanceof _t?e:Et(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return(Ke("iPhone")&&!Ke("iPod")&&!Ke("iPad")||Ke("iPad")||Ke("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(s=n.document.createElement("A"),i=i instanceof _t?i:kt(i),s.href=wt(i),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),s.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,s),t=wt(i).toString(),n&&(tt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Ot('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+re(t)+'">',null),n.document.write(Nt(t)),n.document.close())):(n=n.open(wt(i).toString(),e,s))&&t.noopener&&(n.opener=null),n}function rr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function sr(e){ir(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=I(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ar(){return window.location.href}function cr(e){var t=yr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,n){e.a=!0,e.h=n,e.j=!t,fr(e)}function ur(e){if(e.a){if(!e.J)throw new pr(e);e.J=!1}}function hr(e,t,n){e.s.push([t,n,void 0]),e.a&&fr(e)}function dr(e){return H(e.s,(function(e){return w(e[1])}))}function fr(e){if(e.i&&e.a&&dr(e)){var t=e.i,n=vr[t];n&&(h.clearTimeout(n.a),delete vr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],o=r[1];if(r=r[2],s=e.j?o:s)try{var a=s.call(r||e.O,t);d(a)&&(e.j=e.j&&(a==t||a instanceof Error),e.h=t=a),(ki(t)||"function"==typeof h.Promise&&t instanceof h.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,dr(e)||(n=!0)}}e.h=t,i&&(a=T(e.L,e,!0),i=T(e.L,e,!1),t instanceof cr?(hr(t,a,i),t.l=!0):t.then(a,i)),n&&(t=new gr(t),vr[t.a]=t,e.i=t.a)}function pr(){x.call(this)}function mr(){x.call(this)}function gr(e){this.a=h.setTimeout(T(this.h,this),0),this.g=e}L(nr,x),nr.prototype.name="cancel",cr.prototype.cancel=function(e){if(this.a)this.h instanceof cr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new mr(this),ur(this),lr(this,!1,e))}},cr.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},cr.prototype.callback=function(e){ur(this),lr(this,!0,e)},cr.prototype.then=function(e,t,n){var i,r,s=new Fi((function(e,t){i=e,r=t}));return hr(this,i,(function(e){e instanceof mr?s.cancel():r(e)})),s.then(e,t,n)},cr.prototype.$goog_Thenable=!0,L(pr,x),pr.prototype.message="Deferred has already fired",pr.prototype.name="AlreadyCalledError",L(mr,x),mr.prototype.message="Deferred was canceled",mr.prototype.name="CanceledError",gr.prototype.h=function(){throw delete vr[this.a],this.g};var vr={};function br(e){var t={},n=t.document||document,i=bt(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},o=new cr(s),a=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(a=window.setTimeout((function(){_r(r,!0);var e=new Er(Ir,"Timeout reached for loading script "+i);ur(o),lr(o,!1,e)}),c),s.sb=a),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(_r(r,t.xc||!1,a),o.callback(null))},r.onerror=function(){_r(r,!0,a);var e=new Er(wr,"Error while loading script "+i);ur(o),lr(o,!1,e)},ce(s=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){se(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:Vt.hasOwnProperty(n)?e.setAttribute(Vt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,s),function(e,t){e.src=bt(t),null===m&&(m=(t=(t=h.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&p.test(t)?t:""),(t=m)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),o}function yr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&_r(e,!0,this.sb)}}function _r(e,t,n){null!=n&&h.clearTimeout(n),e.onload=g,e.onerror=g,e.onreadystatechange=g,t&&window.setTimeout((function(){zt(e)}),0)}var wr=0,Ir=1;function Er(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),x.call(this,n),this.code=e}function kr(){return h.google&&h.google.accounts&&h.google.accounts.id||null}function Sr(e){this.a=e||kr(),this.h=!1,this.g=null}function Cr(e,t,n){return e.a&&t?(e.h=!0,new Fi((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):$i(t?Ar.Xa().load().then((function(){return e.a=kr(),Cr(e,t,n)})).Ca((function(){return null})):null)}L(Er,x),Sr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},v(Sr);var Tr=new pt(gt,"https://accounts.google.com/gsi/client");function Ar(){this.a=null}function Rr(e,t){this.a=e,this.g=t||function(e){throw e}}function Nr(e,t,n){this.reset(e,t,n,void 0,void 0)}Ar.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Tr;e instanceof pt&&e.constructor===pt&&e.g===mt?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new vt;return t.a=e,t}();return kr()?$i():this.a=function(){var e=null;return new Fi((function(t){"complete"==h.document.readyState?t():(e=function(){t()},si(window,"load",e))})).Ca((function(t){throw oi(window,"load",e),t}))}().then((function(){if(!kr())return new Fi((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);h.onGoogleLibraryLoad=function(){clearTimeout(r),n()},$i(br(t)).then((function(){kr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},v(Ar),Rr.prototype.confirm=function(e){return $i(this.a.confirm(e)).Ca(this.g)},Nr.prototype.a=null;function Pr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Or(e,t){this.name=e,this.value=t}Nr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||P(),this.j=e,this.s=t,this.g=n,delete this.a},Or.prototype.toString=function(){return this.name};var Lr=new Or("SEVERE",1e3),xr=new Or("WARNING",900),Dr=new Or("CONFIG",700);function Mr(e){return e.j?e.j:e.g?Mr(e.g):(M("Root logger has no level set."),null)}Pr.prototype.log=function(e,t,n){if(e.value>=Mr(this).value)for(w(t)&&(t=t()),e=new Nr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var s=0;t=i.a[s];s++)t(r);n=n.g}};var Ur={},Fr=null;function Br(){Fr||(Fr=new Pr(""),Ur[""]=Fr,Fr.j=Dr)}function jr(){this.a=P()}var Hr=null;function qr(e){this.j=e||"",Hr||(Hr=new jr),this.s=Hr}function Wr(e){return 10>e?"0"+e:String(e)}function Vr(e){qr.call(this,e)}function $r(){this.s=T(this.h,this),this.a=new Vr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}jr.prototype.set=function(e){this.a=e},jr.prototype.reset=function(){this.set(P())},jr.prototype.get=function(){return this.a},qr.prototype.a=!0,qr.prototype.g=!0,qr.prototype.h=!1,L(Vr,qr),$r.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",Wr(i.getFullYear()-2e3)+Wr(i.getMonth()+1)+Wr(i.getDate())+" "+Wr(i.getHours())+":"+Wr(i.getMinutes())+":"+Wr(i.getSeconds())+"."+Wr(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if(Kr)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}(Kr,function(e){if(e){if(e.value>=Lr.value)return"error";if(e.value>=xr.value)return"warn";if(e.value>=Dr.value)return"log"}return"debug"}(e.j),t,e.a)}};var zr,Kr=h.console;function Gr(e,t){zr&&zr.log(Lr,e,t)}zr=function e(t){var n;if(Br(),!(n=Ur[t])){n=new Pr(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Ur[t]=n}return n}("firebaseui");var Yr=new $r;if(1!=Yr.g){var Jr;Br(),Jr=Fr;var Xr=Yr.s;Jr.a||(Jr.a=[]),Jr.a.push(Xr),Yr.g=!0}function Qr(e){zr&&zr.log(xr,e,void 0)}function Zr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function es(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],s=0;s<e.length;s++)-1==(t=(n=Y(e[s])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(t=Zr.prototype).set=function(e,t,n,i,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');d(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",s=s?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(P()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+s},t.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(0==(n=Y(r[s])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},t.ja=function(){return es(this).keys},t.la=function(){return es(this).values},t.clear=function(){for(var e=es(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var ts=new Zr;function ns(){}function is(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function rs(e,t){this.g=e,this.a=t||null}function ss(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function os(e){if(e&&e.email){var t=e.credential&&Kl.auth.AuthCredential.fromJSON(e.credential);return new rs(e.email,t)}return null}function as(e){this.a=e||null}function cs(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function ls(e){return j(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function us(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(hs*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<hs*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,bs(t),t[0]^=ws[e/this.g][0],t[1]^=ws[e/this.g][1],t[2]^=ws[e/this.g][2],t[3]^=ws[e/this.g][3]}else 6<this.g&&4==e%this.g&&bs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}a(is,ns),is.prototype.set=function(e,t){ts.set(e,t,this.h,this.g,this.a,this.j)},is.prototype.get=function(e){return ts.get(e)||null},is.prototype.ra=function(e){var t=this.g,n=this.a;ts.get(e),ts.set(e,"",0,t,n)},us.prototype.A=16;var hs=us.prototype.A/4;function ds(e,t){for(var n,i=0;i<hs;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function fs(e){for(var t=[],n=0;n<hs;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function ps(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function ms(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function gs(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%hs]}function vs(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%hs]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function bs(e){e[0]=ys[e[0]],e[1]=ys[e[1]],e[2]=ys[e[2]],e[3]=ys[e[3]]}var ys=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],_s=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ws=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Is=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Es=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],ks=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ss=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Cs=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ts=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function As(e,t){e=new us(Ns(e));for(var n,i=(t=cs(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var s=0;s<n;s++)i.push(0);for(ds(n=e,i),ps(n,0),i=1;i<n.j;++i){ms(n,ys),gs(n),s=n.h;for(var o=n.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Is[o[0]]^Es[o[1]]^o[2]^o[3],s[1][a]=o[0]^Is[o[1]]^Es[o[2]]^o[3],s[2][a]=o[0]^o[1]^Is[o[2]]^Es[o[3]],s[3][a]=Es[o[0]]^o[1]^o[2]^Is[o[3]];ps(n,i)}ms(n,ys),gs(n),ps(n,n.j),r+=ls(fs(n)),i=t.splice(0,16)}return r}function Rs(e,t){e=new us(Ns(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(ds(i=e,r),ps(i,i.j),r=1;r<i.j;++r){vs(i),ms(i,_s),ps(i,i.j-r);for(var s=i.h,o=i.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Ts[o[0]]^Ss[o[1]]^Cs[o[2]]^ks[o[3]],s[1][a]=ks[o[0]]^Ts[o[1]]^Ss[o[2]]^Cs[o[3]],s[2][a]=Cs[o[0]]^ks[o[1]]^Ts[o[2]]^Ss[o[3]],s[3][a]=Ss[o[0]]^Cs[o[1]]^ks[o[2]]^Ts[o[3]]}if(vs(i),ms(i,_s),ps(i,0),8192>=(i=fs(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",s=0;s<i.length;s+=8192)r+=String.fromCharCode.apply(null,G(i,s,s+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ns(e){for(var t=32-(e=cs(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Ps(e){var t=[];return Ls(new Os,e,t),t.join("")}function Os(){}function Ls(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(y(t)){var i=t;t=i.length,n.push("[");for(var r="",s=0;s<t;s++)n.push(r),Ls(e,i[s],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(s=t[i])&&(n.push(r),Ms(i,n),n.push(":"),Ls(e,s,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ms(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var xs={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ds=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ms(e,t){t.push('"',e.replace(Ds,(function(e){var t=xs[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),xs[e]=t),t})),'"')}function Us(e){this.a=e}function Fs(){}function Bs(e){this.a=e}function js(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Hs(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function qs(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Ws(e,t){this.g=e,this.a=t+"::"}Us.prototype.set=function(e,t){d(t)?this.a.set(e,Ps(t)):this.a.ra(e)},Us.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},L(Fs,ns),Fs.prototype.clear=function(){var e=de(this.ha(!0)),t=this;F(e,(function(e){t.ra(e)}))},L(Bs,Fs),(t=Bs.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},t.get=function(e){if(!f(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},t.ra=function(e){this.a.removeItem(e)},t.ha=function(e){var t=0,n=this.a,i=new ue;return i.next=function(){if(t>=n.length)throw le;var i=n.key(t++);if(e)return i;if(!f(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},t.clear=function(){this.a.clear()},t.key=function(e){return this.a.key(e)},L(Hs,Bs),L(qs,Bs),L(Ws,Fs),Ws.prototype.set=function(e,t){this.g.set(this.a+e,t)},Ws.prototype.get=function(e){return this.g.get(this.a+e)},Ws.prototype.ra=function(e){this.g.ra(this.a+e)},Ws.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new ue;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},js(new Hs);var Vs=new qs,$s=new Us(js(Vs)?new Ws(Vs,"firebaseui"):null),zs={name:"pendingEmailCredential",storage:$s},Ks={name:"redirectStatus",storage:$s},Gs={name:"redirectUrl",storage:$s},Ys={name:"emailForSignIn",storage:new Us(new is(3600,"/"))},Js={name:"pendingEncryptedCredential",storage:new Us(new is(3600,"/"))};function Xs(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qs(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Zs(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function eo(e){return Xs(Gs,e)||null}function to(e){return os(e=Xs(zs,e)||null)}function no(e){Qs(zs,e)}function io(e,t){Zs(zs,ss(e),t)}function ro(e){return(e=Xs(Ks,e)||null)&&void 0!==e.tenantId?new as(e.tenantId):null}function so(){this.W={}}function oo(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function ao(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function co(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function lo(){this.g=void 0,this.a={}}function uo(e,t,n,i){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new lo),e=e.a[s]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function ho(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)ho(e.a[n],t)}function fo(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)fo(e.a[i],t+i,n)}function po(e){for(this.a=e,this.g=new lo,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function mo(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var s in n)if(n.hasOwnProperty(s))return n[s];return[]}function go(e){for(var t=0;t<_o.length;t++)if(_o[t].c===e)return _o[t];return null}function vo(e){e=e.toUpperCase();for(var t=[],n=0;n<_o.length;n++)_o[n].f===e&&t.push(_o[n]);return t}function bo(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<_o.length;n++)_o[n].b==e&&t.push(_o[n]);e=t}else e=vo(e);return e}function yo(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}so.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(t=lo.prototype).set=function(e,t){uo(this,e,t,!1)},t.add=function(e,t){uo(this,e,t,!0)},t.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},t.la=function(){var e=[];return ho(this,e),e},t.ja=function(){var e=[];return fo(this,"",e),e},t.clear=function(){this.a={},this.g=void 0};var _o=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];yo(_o);var wo=new po(_o);function Io(e,t){this.a=e,this.Aa=t}function Eo(e){e=Y(e);var t=mo(wo,e);return 0<t.length?new Io("1"==t[0].b?"1-US-0":t[0].c,Y(e.substr(t[0].b.length+1))):null}function ko(e){var t=go(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function So(e,t){for(var n=0;n<e.length;n++)if(!q(Co,e[n])&&(null!==To&&e[n]in To||q(t,e[n])))return e[n];return null}var Co=["emailLink","password","phone"],To={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Ao(){this.a=new so,oo(this.a,"autoUpgradeAnonymousUsers"),oo(this.a,"callbacks"),oo(this.a,"credentialHelper",ia),oo(this.a,"immediateFederatedRedirect",!1),oo(this.a,"popupMode",!1),oo(this.a,"privacyPolicyUrl"),oo(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),oo(this.a,"queryParameterForWidgetMode","mode"),oo(this.a,"signInFlow"),oo(this.a,"signInOptions"),oo(this.a,"signInSuccessUrl"),oo(this.a,"siteName"),oo(this.a,"tosUrl"),oo(this.a,"widgetUrl"),oo(this.a,"adminRestrictedOperation")}function Ro(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Jo(e)&&Gr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function No(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=I(i)?i:{provider:i}).provider&&t.push(i)}return t}function Po(e,t){e=No(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function Oo(e){return No(e).map((function(e){return e.provider}))}function Lo(e,t){e=xo(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function xo(e){return No(e).map((function(e){if(To[e.provider]||q(ca,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(Et(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Do(e){var t,n=Po(e,Kl.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),ra)if(ra[i]===e){var i=ra[i];break e}i=ia}t=i===na}return t&&n.clientId||null}function Mo(e){return!!((e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Uo(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Fo(e,t){return e=(e=Po(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Bo(e,t){return I(e=(e=Po(e,t))&&e.customParameters)?(e=oe(e),t===Kl.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===Kl.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function jo(e){if(!(e=Po(e,Kl.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return _o;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var r=bo(t[i]),s=0;s<r.length;s++)n[r[s].c]=r[s];for(var o in n)n.hasOwnProperty(o)&&e.push(n[o])}else{for(o={},t=0;t<n.length;t++)for(r=bo(n[t]),i=0;i<r.length;i++)o[r[i].c]=r[i];for(r=0;r<_o.length;r++)null!==o&&_o[r].c in o||e.push(_o[r])}return e}function Ho(e){return co(e.a,"queryParameterForWidgetMode")}function qo(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function Wo(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function Vo(e){return!(e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function $o(e){return!(!(e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==Kl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function zo(e){var t=!!e.a.get("immediateFederatedRedirect"),n=Oo(e);return e=Ko(e),t&&1==n.length&&!q(Co,n[0])&&e==sa}function Ko(e){for(var t in e=e.a.get("signInFlow"),oa)if(oa[t]==e)return oa[t];return sa}function Go(e){return Xo(e).signInSuccess||null}function Yo(e){return Xo(e).signInSuccessWithAuthResult||null}function Jo(e){return Xo(e).signInFailure||null}function Xo(e){return e.a.get("callbacks")||{}}var Qo,Zo,ea,ta,na="googleyolo",ia="none",ra={nc:na,NONE:ia},sa="redirect",oa={qc:"popup",rc:sa},aa={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ca=["anonymous"],la=["sitekey","tabindex","callback","expired-callback"],ua={};function ha(e,t,n,i){ua[e].apply(null,Array.prototype.slice.call(arguments,1))}function da(e){return e.classList?e.classList:f(e=e.className)&&e.match(/\S+/g)||[]}function fa(e,t){return e.classList?e.classList.contains(t):q(da(e),t)}function pa(e,t){e.classList?e.classList.add(t):fa(e,t)||(e.className+=0<e.className.length?" "+t:t)}function ma(e,t){e.classList?e.classList.remove(t):fa(e,t)&&(e.className=B(da(e),(function(e){return e!=t})).join(" "))}function ga(e){var t=e.type;switch(f(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function va(e,t){var n=e.type;switch(f(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,f(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(f(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,s=0;r=t[s];s++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function ba(e,t,n,i,r,s){if(it&&!dt("525"))return!0;if(st&&r)return ya(e);if(r&&!i)return!1;if(!nt&&("number"==typeof t&&(t=_a(t)),(!n||st)&&(17==t||18==t||st&&91==t)||st&&16==t&&(i||s)))return!1;if((it||et)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Ze&&i&&t==e)return!1;switch(e){case 13:return!nt||!s&&!r&&!(n&&i);case 27:return!(it||et||nt)}return(!nt||!(i||r||s))&&ya(e)}function ya(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(it||et)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return nt;default:return!1}}function _a(e){if(nt)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(st&&it&&93===e)e=91;return e}function wa(e){mi.call(this),this.a=e,ii(e,"keydown",this.g,!1,this),ii(e,"click",this.h,!1,this)}function Ia(e,t){var n=new ka(t);if(gi(e,n)){n=new Ea(t);try{gi(e,n)}finally{t.stopPropagation()}}}function Ea(e){zn.call(this,e.a),this.type="action"}function ka(e){zn.call(this,e.a),this.type="beforeaction"}function Sa(e){mi.call(this),this.a=e,e=Ze?"focusout":"blur",this.g=ii(this.a,Ze?"focusin":"focus",this,!Ze),this.h=ii(this.a,e,this,!Ze)}function Ca(e,t){mi.call(this),this.g=e||1,this.a=t||h,this.h=T(this.gc,this),this.j=P()}function Ta(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Aa(e){Mn.call(this),this.g=e,this.a={}}L(wa,mi),wa.prototype.g=function(e){(13==e.keyCode||it&&3==e.keyCode)&&Ia(this,e)},wa.prototype.h=function(e){Ia(this,e)},wa.prototype.o=function(){wa.K.o.call(this),oi(this.a,"keydown",this.g,!1,this),oi(this.a,"click",this.h,!1,this),delete this.a},L(Ea,zn),L(ka,zn),L(Sa,mi),Sa.prototype.handleEvent=function(e){var t=new zn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",gi(this,t)},Sa.prototype.o=function(){Sa.K.o.call(this),ai(this.g),ai(this.h),delete this.a},L(Ca,mi),(t=Ca.prototype).Ka=!1,t.aa=null,t.gc=function(){if(this.Ka){var e=P()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),gi(this,"tick"),this.Ka&&(Ta(this),this.start()))}},t.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=P())},t.o=function(){Ca.K.o.call(this),Ta(this),delete this.a},L(Aa,Mn);var Ra=[];function Na(e,t,n,i){y(n)||(n&&(Ra[0]=n.toString()),n=Ra);for(var r=0;r<n.length;r++){var s=ii(t,n[r],i||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Pa(e){se(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ai(e)}),e),e.a={}}function Oa(e){mi.call(this),this.a=null,this.g=e,e=Ze||et||it&&!dt("531")&&"TEXTAREA"==e.tagName,this.h=new Aa(this),Na(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function La(e){null!=e.a&&(h.clearTimeout(e.a),e.a=null)}function xa(e){return(e=new zn(e.a)).type="input",e}function Da(e,t){mi.call(this),e&&(this.Oa&&ja(this),this.qa=e,this.Na=ii(this.qa,"keypress",this,t),this.Ya=ii(this.qa,"keydown",this.Jb,t,this),this.Oa=ii(this.qa,"keyup",this.Kb,t,this))}Aa.prototype.o=function(){Aa.K.o.call(this),Pa(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},L(Oa,mi),Oa.prototype.handleEvent=function(e){if("input"==e.type)Ze&&dt(10)&&0==e.keyCode&&0==e.j||(La(this),gi(this,xa(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(ya(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!nt;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Ze&&229==e.keyCode&&(t=null);var n=xa(e);La(this),this.a=function(e,t){if(w(e))t&&(e=T(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(0)?-1:h.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&gi(this,n)}),this)}},Oa.prototype.o=function(){Oa.K.o.call(this),this.h.m(),La(this),delete this.g},L(Da,mi),(t=Da.prototype).qa=null,t.Na=null,t.Ya=null,t.Oa=null,t.R=-1,t.X=-1,t.Ua=!1;var Ma={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ua={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Fa=!it||dt("525"),Ba=st&&nt;function ja(e){e.Na&&(ai(e.Na),ai(e.Ya),ai(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Ha(e,t,n,i){zn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function qa(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Wa(e,t){var n=Kt(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Va(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Ze&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function $a(e){var t=Kt(e),n=new Ft(0,0),i=t?Kt(t):document;return e==(i=!Ze||9<=Number(ut)||"CSS1Compat"==jt(i).a.compatMode?i.documentElement:i.body)||(e=Va(e),t=$t(i=jt(t).a),i=i.parentWindow||i.defaultView,t=Ze&&dt("10")&&i.pageYOffset!=t.scrollTop?new Ft(t.scrollLeft,t.scrollTop):new Ft(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(t=Da.prototype).Jb=function(e){(it||et)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||st&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Fa&&!ba(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=_a(e.keyCode),Ba&&(this.Ua=e.altKey))},t.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},t.handleEvent=function(e){var t=e.a,n=t.altKey;if(Ze&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(it||et)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&ya(i)?t.charCode:0):Qe&&!it?r=ya(i=this.X)?t.keyCode:0:("keypress"==e.type?(Ba&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),st&&63==r&&224==i&&(i=191));var s=i=_a(i);i?63232<=i&&i in Ma?s=Ma[i]:25==i&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in Ua&&(s=Ua[t.keyIdentifier]),nt&&Fa&&"keypress"==e.type&&!ba(s,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=s==this.R,this.R=s,(t=new Ha(s,r,e,t)).altKey=n,gi(this,t))},t.N=function(){return this.qa},t.o=function(){Da.K.o.call(this),ja(this)},L(Ha,zn),qa.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},qa.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},qa.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},qa.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var za={thin:2,medium:4,thick:6};function Ka(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in za)e=za[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Ga(){}function Ya(e){mi.call(this),this.s=e||jt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Ja(e,t){return e.g?qt(t,e.g||e.s.a):null}function Xa(e){return e.L||(e.L=new Aa(e)),e.L}function Qa(e,t){e.Ea&&F(e.Ea,t,void 0)}function Za(e,t){var n=Yt(e,"firebaseui-textfield");t?(ma(e,"firebaseui-input-invalid"),pa(e,"firebaseui-input"),n&&ma(n,"firebaseui-textfield-invalid")):(ma(e,"firebaseui-input"),pa(e,"firebaseui-input-invalid"),n&&pa(n,"firebaseui-textfield-invalid"))}function ec(e,t,n){Bn(e,A(jn,t=new Oa(t))),Na(Xa(e),t,"input",n)}function tc(e,t,n){Bn(e,A(jn,t=new Da(t))),Na(Xa(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function nc(e,t,n){Bn(e,A(jn,t=new wa(t))),Na(Xa(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function ic(e){pa(e,"firebaseui-hidden")}function rc(e,t){t&&Gt(e,t),ma(e,"firebaseui-hidden")}function sc(e){return!fa(e,"firebaseui-hidden")&&"none"!=e.style.display}function oc(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+mn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',hn(i)}function ac(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+an(e):t+"Next",hn(t+"</button>")}function cc(){var e=""+ac({label:fn("Sign In")});return hn(e)}function lc(){var e=""+ac({label:fn("Save")});return hn(e)}function uc(){var e=""+ac({label:fn("Continue")});return hn(e)}function hc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+an(e):t+"Choose password",hn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function dc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return hn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function fc(){return hn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function pc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+an(e):t+"Cancel",hn(t+"</button>")}function mc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),hn(t)}function gc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),hn(t)}function vc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+an(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',hn(e)}function bc(e){var t=e.content;return e=e.Ab,hn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+mn(e):"")+'">'+an(t)+"</dialog>")}function yc(e){var t=e.message;return hn(bc({content:pn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+mn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+an(t)+"</div>")}))}function _c(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+mn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+mn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+an(r.label)+"</div></button>"}return t=""+bc({Ab:fn("firebaseui-list-box-dialog"),content:pn(t+"</div>")}),hn(t)}function wc(e){return hn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Ic(e,t){return un((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function Ec(e){Cc(e,"upgradeElement")}function kc(e){Cc(e,"downgradeElements")}v(Ga),Ga.prototype.a=0,L(Ya,mi),(t=Ya.prototype).Lb=Ga.Xa(),t.N=function(){return this.g},t.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Ya.K.Za.call(this,e)},t.kb=function(){this.g=this.s.a.createElement("DIV")},t.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},t.v=function(){this.na=!0,Qa(this,(function(e){!e.na&&e.N()&&e.v()}))},t.ya=function(){Qa(this,(function(e){e.na&&e.ya()})),this.L&&Pa(this.L),this.na=!1},t.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qa(this,(function(e){e.m()})),this.g&&zt(this.g),this.Y=this.g=this.oa=this.Ea=null,Ya.K.o.call(this)},t.removeChild=function(e,t){if(e){var n=f(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],W(this.Ea,e),t&&(e.ya(),e.g&&zt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Ya.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},vc.a="firebaseui.auth.soy2.element.infoBar",yc.a="firebaseui.auth.soy2.element.progressDialog",_c.a="firebaseui.auth.soy2.element.listBoxDialog",wc.a="firebaseui.auth.soy2.element.busyIndicator";var Sc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Cc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Sc.forEach((function(n){fa(e,n)&&window.componentHandler[t](e),F(Ht(n,e),(function(e){window.componentHandler[t](e)}))}))}function Tc(e,t,n){if(Ac.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),Ec(e),t&&nc(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Ac.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,s=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,o=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,a=e.getBoundingClientRect().width,c=i.getBoundingClientRect().width;e.style.top=(s+(n-t)/2).toString()+"px",t=o+(c-a)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-a).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ac(){var e=Rc.call(this);e&&(kc(e),e.open&&e.close(),zt(e),this.da&&window.removeEventListener("resize",this.da))}function Rc(){return qt("firebaseui-id-dialog")}function Nc(){zt(Pc.call(this))}function Pc(){return Ja(this,"firebaseui-id-info-bar")}function Oc(){return Ja(this,"firebaseui-id-dismiss-info-bar")}var Lc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function xc(e,t,n){for(var i in $n.call(this,e,t),n)this[i]=n[i]}function Dc(e,t,n,i,r){Ya.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=oe(Lc),ce(this.Z,r||{})}function Mc(e){return e.N().parentElement||e.N().parentNode}function Uc(e,t,n){tc(e,t,(function(){n.focus()}))}function Fc(e,t,n){tc(e,t,(function(){n()}))}function Bc(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+ac(null)+'</div></div><div class="firebaseui-card-footer">'+(i?gc(n):mc(n))+"</div></form></div>",hn(e)}function jc(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+oc(e)+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fc()+'</div><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+(t?gc(n):mc(n))+"</div></form></div>",hn(e)}function Hc(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+oc(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+mn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=hn(e)):e="",n=s+e+hc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+lc()+'</div></div><div class="firebaseui-card-footer">'+(r?gc(n):mc(n))+"</div></form></div>",hn(n)}function qc(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+oc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?pc(null):"")+ac({label:fn("Send")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Wc(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+an(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+ac({label:fn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+mc(n)+"</div></div>",hn(i)}function Vc(e,t,n){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+wc(null)+"</div></div>")}function $c(e,t,n){return hn('<div class="firebaseui-container firebaseui-id-page-spinner">'+wc({tb:!0})+"</div>")}function zc(){return hn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Kc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+an(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function Gc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Yc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+oc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac(null)+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(e)}function Jc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc({label:fn("Dismiss")})+"</div></div></div>";return hn(e)}function Xc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc({label:fn("Dismiss")})+"</div></div></div>";return hn(e)}function Qc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+an(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+fc()+'</div><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function Zc(e,t,n){var i=e.email;return t="",e=fn(e=""+Ic(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+an(i)+"</strong>. You can connect your <strong>"+an(e)+"</strong> account with <strong>"+an(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+an(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function el(e,t,n){t="";var i=""+Ic(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+an(i=fn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+an(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function tl(e,t,n){var i=e.email;return t="",e=fn(e=""+Ic(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+an(i)+"</strong>. Sign in with "+an(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ac({label:fn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function nl(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+an(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+an(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+pc({label:fn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(r)}function il(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+an(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function rl(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+an(e.email)+"</strong></p>")+hc(function(e){function t(){}var n={label:fn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lc()+"</div></div></form></div>",hn(t)}function sl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function ol(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function al(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+an(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></form></div>",hn(n)}function cl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function ll(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function ul(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function hl(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+an(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(n)}function dl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function fl(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+an(t)+" "+an(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></form></div>",hn(i)}function pl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",hn(e)}function ml(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=ac({label:fn("Retry")})),hn(e+"</div></div></div>")}function gl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+an(e.errorMessage)+"</p></div></div>",hn(e)}function vl(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+an(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+an(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form></div>",hn(t)}function bl(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var s={ga:e[r]},o=n,a=(s=s||{}).ga,c=s,l="";switch((c=c||{}).ga.providerId){case"google.com":l+="firebaseui-idp-google";break;case"github.com":l+="firebaseui-idp-github";break;case"facebook.com":l+="firebaseui-idp-facebook";break;case"twitter.com":l+="firebaseui-idp-twitter";break;case"phone":l+="firebaseui-idp-phone";break;case"anonymous":l+="firebaseui-idp-anonymous";break;case"password":l+="firebaseui-idp-password";break;default:l+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+mn(un(l))+' firebaseui-id-idp-button" data-provider-id="'+mn(a.providerId)+'" style="background-color:')+mn(vn(un((l=(l=(l=s)||{}).ga).ta?l.ta:o.wa[l.providerId]?""+o.wa[l.providerId]:0==l.providerId.indexOf("saml.")?""+o.wa.saml:0==l.providerId.indexOf("oidc.")?""+o.wa.oidc:""+o.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var u=s;l=o,u=(u=u||{}).ga,l=dn(u.za?gn(u.za):l.xa[u.providerId]?gn(l.xa[u.providerId]):0==u.providerId.indexOf("saml.")?gn(l.xa.saml):0==u.providerId.indexOf("oidc.")?gn(l.xa.oidc):gn(l.xa.password)),c=c+mn(gn(l))+'"></span>',"password"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Email",c+="</span>"):"phone"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Phone",c+="</span>"):"anonymous"==a.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):a.S?c+=s="Sign in with "+an(Ic(s,o)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=a.S?c+an(a.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?c+=an(a.V):c+=l="Sign in with "+an(Ic(s,o)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(a.S?an(a.S):an(Ic(s,o)))+"</span>"),i+='<li class="firebaseui-list-item">'+(a=hn(c+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+gc(n)+"</div></div>",hn(i)}function yl(e,t,n){var i,r=(e=e||{}).Gb,s=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+mn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+hn(e))+(i=r?hn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?pc(null):"")+ac({label:fn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=hn(t+"</p>")):n=hn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+mc(n),hn(i+n+"</div></form></div>")}function _l(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+an(t=(e=e||{}).phoneNumber)+"</a>",an(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=hn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+pc(null)+ac({label:fn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mc(n)+"</div></form>",e=hn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),hn(t+(n+e+"</div>"))}function wl(){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Il(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var s=e[r],o="",a=an(s.displayName),c=s.tenantId?s.tenantId:"top-level-project";o+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+mn(c=fn(c))+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+mn(s.tenantId)+'"':"")+'style="background-color:'+mn(vn(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+mn(gn(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?o+=an(s.V):o+=s="Sign in to "+an(s.displayName),i+='<li class="firebaseui-list-item">'+(o=hn(o+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+a+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+gc(n)+"</div></div>",hn(i)}function El(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+oc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ac(null)+'</div></div><div class="firebaseui-card-footer">'+gc(n)+"</div></form></div>",hn(e)}function kl(){return Ja(this,"firebaseui-id-submit")}function Sl(){return Ja(this,"firebaseui-id-secondary-link")}function Cl(e,t){nc(this,kl.call(this),(function(t){e(t)}));var n=Sl.call(this);n&&t&&nc(this,n,(function(e){t(e)}))}function Tl(){return Ja(this,"firebaseui-id-password")}function Al(){return Ja(this,"firebaseui-id-password-error")}function Rl(){var e=Tl.call(this),t=Al.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}))}function Nl(){var e=Tl.call(this),t=Al.call(this);return ga(e)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,un("Enter your password").toString()),t=!1),t?ga(e):null}function Pl(e,t,n,i,r,s){Dc.call(this,Qc,{email:e},s,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}L(xc,$n),L(Dc,Ya),(t=Dc.prototype).kb=function(){var e=nn(this.fb,this.eb,this.Z,this.s);Ec(e),this.g=e},t.v=function(){if(Dc.K.v.call(this),_i(Mc(this),new xc("pageEnter",Mc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;nc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;nc(this,this.ab(),(function(){t()}))}},t.ya=function(){_i(Mc(this),new xc("pageExit",Mc(this),{pageId:this.Ga})),Dc.K.ya.call(this)},t.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,kc(this.N()),Dc.K.o.call(this)},t.I=function(e,t,n,i){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(kc(s.A),zt(s.A),s.A=null)}var s=this;return s.Fa?null:(function(e){e.Fa=!0;var t=fa(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=nn(wc,{tb:t},null,e.s),e.N().appendChild(e.A),Ec(e.A))}),500)}(s),e.apply(null,t).then(n,i).then(r,r))},R(Dc.prototype,{a:function(e){Nc.call(this);var t=nn(vc,{message:e},null,this.s);this.N().appendChild(t),nc(this,Oc.call(this),(function(){zt(t)}))},yc:Nc,Ac:Pc,zc:Oc,$:function(e,t){e=nn(yc,{Ma:e,message:t},null,this.s),Tc.call(this,e)},h:Ac,Cb:Rc,Cc:function(){return Ja(this,"firebaseui-tos")},bb:function(){return Ja(this,"firebaseui-tos-link")},ab:function(){return Ja(this,"firebaseui-pp-link")},Dc:function(){return Ja(this,"firebaseui-tos-list")}}),Bc.a="firebaseui.auth.soy2.page.signIn",jc.a="firebaseui.auth.soy2.page.passwordSignIn",Hc.a="firebaseui.auth.soy2.page.passwordSignUp",qc.a="firebaseui.auth.soy2.page.passwordRecovery",Wc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Vc.a="firebaseui.auth.soy2.page.callback",$c.a="firebaseui.auth.soy2.page.spinner",zc.a="firebaseui.auth.soy2.page.blank",Kc.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Gc.a="firebaseui.auth.soy2.page.emailNotReceived",Yc.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Jc.a="firebaseui.auth.soy2.page.differentDeviceError",Xc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qc.a="firebaseui.auth.soy2.page.passwordLinking",Zc.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",el.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",tl.a="firebaseui.auth.soy2.page.federatedLinking",nl.a="firebaseui.auth.soy2.page.unauthorizedUser",il.a="firebaseui.auth.soy2.page.unsupportedProvider",rl.a="firebaseui.auth.soy2.page.passwordReset",sl.a="firebaseui.auth.soy2.page.passwordResetSuccess",ol.a="firebaseui.auth.soy2.page.passwordResetFailure",al.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",cl.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",ll.a="firebaseui.auth.soy2.page.emailVerificationSuccess",ul.a="firebaseui.auth.soy2.page.emailVerificationFailure",hl.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",dl.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",fl.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",pl.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",ml.a="firebaseui.auth.soy2.page.recoverableError",gl.a="firebaseui.auth.soy2.page.unrecoverableError",vl.a="firebaseui.auth.soy2.page.emailMismatch",bl.a="firebaseui.auth.soy2.page.providerSignIn",yl.a="firebaseui.auth.soy2.page.phoneSignInStart",_l.a="firebaseui.auth.soy2.page.phoneSignInFinish",wl.a="firebaseui.auth.soy2.page.signOut",Il.a="firebaseui.auth.soy2.page.selectTenant",El.a="firebaseui.auth.soy2.page.providerMatchByEmail",a(Pl,Dc),Pl.prototype.v=function(){this.P(),this.M(this.w,this.H),Fc(this,this.i(),this.w),this.i().focus(),Dc.prototype.v.call(this)},Pl.prototype.o=function(){this.w=null,Dc.prototype.o.call(this)},Pl.prototype.j=function(){return ga(Ja(this,"firebaseui-id-email"))},R(Pl.prototype,{i:Tl,B:Al,P:Rl,u:Nl,ea:kl,ba:Sl,M:Cl});var Ol=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Ll(){return Ja(this,"firebaseui-id-email")}function xl(){return Ja(this,"firebaseui-id-email-error")}function Dl(e){var t=Ll.call(this),n=xl.call(this);ec(this,t,(function(){sc(n)&&(Za(t,!0),ic(n))})),e&&tc(this,t,(function(){e()}))}function Ml(){return Y(ga(Ll.call(this))||"")}function Ul(){var e=Ll.call(this),t=xl.call(this),n=ga(e)||"";return n?Ol.test(n)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,un("That email address isn't correct").toString()),t=!1):(Za(e,!1),rc(t,un("Enter your email address to continue").toString()),t=!1),t?Y(ga(e)):null}function Fl(e,t,n,i,r,s,o){Dc.call(this,jc,{email:n,ia:!!s},o,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Bl(e,t,n,i,r,s){Dc.call(this,e,t,i,r||"notice",s),this.i=n||null}function jl(e,t,n,i,r){Bl.call(this,Wc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function Hl(e,t){Bl.call(this,ll,{G:!!e},e,t,"emailVerificationSuccess")}function ql(e,t){Bl.call(this,ul,{G:!!e},e,t,"emailVerificationFailure")}function Wl(e,t,n){Bl.call(this,hl,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function Vl(e,t){Bl.call(this,dl,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function $l(e,t){Bl.call(this,pl,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function zl(e){Bl.call(this,wl,void 0,void 0,e,"signOut")}function Gl(e,t){Bl.call(this,sl,{G:!!e},e,t,"passwordResetSuccess")}function Yl(e,t){Bl.call(this,ol,{G:!!e},e,t,"passwordResetFailure")}function Jl(e,t){Bl.call(this,cl,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xl(e,t,n){Bl.call(this,ml,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Ql(e,t){Bl.call(this,gl,{errorMessage:e},void 0,t,"unrecoverableError")}function Zl(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function eu(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(e){}s=!1}if(s)n=Mc(t),t.m(),au(e,n,void 0,un("Your sign-in session has expired. Please try again.").toString());else{if(s=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;s=iu(n)}t.a(s)}}}if(Oh(e),i)return tu(e,n),$i();if(!n.credential)throw Error("No credential found!");if(!Ih(e).currentUser&&!n.user)throw Error("User not logged in.");try{var s=function(e,t){return Dh(e),Rh(e,(function(n){if(e.j&&!e.j.isAnonymous&&Ro(xh(e))&&!Ih(e).currentUser)return Uh(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Uh(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fh(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Uh(e).then((function(){return Eh(e).updateCurrentUser(t.user)})).then((function(){return t.user=Eh(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Gr(e.code||e.message,e),t.a(e.code||e.message),$i()}return n=s.then((function(t){tu(e,t)}),r).then(void 0,r),Ph(e,s),$i(n)}function tu(e,t){if(!t.user)throw Error("No user found");var n=Yo(xh(e));if(Go(xh(e))&&n&&Qr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Yo(xh(e));var i=eo(kh(e))||void 0;Qs(Gs,kh(e));var r=!1;rr()?(n&&!n(t,i)||(r=!0,Ut(window.opener.location,nu(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Ut(window.location,nu(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Go(xh(e)),r=eo(kh(e))||void 0,Qs(Gs,kh(e));var s=!1;rr()?(i&&!i(n,t,r)||(s=!0,Ut(window.opener.location,nu(e,r))),i||window.close()):i&&!i(n,t,r)||(s=!0,Ut(window.location,nu(e,r))),s||e.reset()}}function nu(e,t){if(!(e=t||xh(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function iu(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=Ln();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=An();break;case"auth/invalid-verification-code":n+=un("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=un(n).toString())return t;try{return JSON.parse(e.message),Gr("Internal error: "+e.message,void 0),Nn().toString()}catch(t){return e.message}}function ru(e,t,n,i){function r(){!function(e,t){Zs(Ks,{tenantId:e.a},t)}(new as(e.h.tenantId||null),kh(e)),Ph(e,t.I(T(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Ph(e,yh(e).then((function(n){t.m(),Qs(Ks,kh(e)),ha("callback",e,a,$i(n))}),s))}),o))}function s(i){if(Qs(Ks,kh(e)),!i.name||"cancel"!=i.name)switch(i=Zl(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(iu(i));break;case"auth/admin-restricted-operation":t.m(),Uo(xh(e))?ha("handleUnauthorizedUser",e,a,null,n):ha("callback",e,a,zi(i));break;default:t.m(),ha("callback",e,a,zi(i))}}function o(n){Qs(Ks,kh(e)),n.name&&"cancel"==n.name||(Gr("signInWithRedirect: "+n.code,void 0),n=iu(n),"blank"==t.Ga&&zo(xh(e))?(t.m(),ha("providerSignIn",e,a,n)):t.a(n))}var a=Mc(t),c=function(e,t,n){var i=To[t]&&Kl.auth[To[t]]?new Kl.auth[To[t]]:0==t.indexOf("saml.")?new Kl.auth.SAMLAuthProvider(t):new Kl.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var r=Fo(xh(e),t);if(i.addScope)for(var s=0;s<r.length;s++)i.addScope(r[s]);return r=Bo(xh(e),t)||{},n&&(e=t==Kl.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==Kl.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Lo(xh(e),t))&&e.Ob)&&(r[e]=n),i.setCustomParameters&&i.setCustomParameters(r),i}(e,n,i);Ko(xh(e))==sa?r():Ph(e,function(e,t){return Dh(e),Rh(e,(function(n){return n&&!to(kh(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fh(e,t)})):Ih(e).signInWithPopup(t)}))}(e,c).then((function(n){t.m(),ha("callback",e,a,$i(n))}),s))}function su(e){return 1==(e=Oo(xh(e))).length&&e[0]==Kl.auth.EmailAuthProvider.PROVIDER_ID}function ou(e){return 1==(e=Oo(xh(e))).length&&e[0]==Kl.auth.PhoneAuthProvider.PROVIDER_ID}function au(e,t,n,i){su(e)?i?ha("signIn",e,t,n,i):hu(e,t,n):e&&ou(e)&&!i?ha("phoneSignInStart",e,t):e&&zo(xh(e))&&!i?ha("federatedRedirect",e,t,n):ha("providerSignIn",e,t,i,n)}function cu(e,t,n,i){var r=Mc(t);Ph(e,t.I(T(Ih(e).fetchSignInMethodsForEmail,Ih(e)),[n],(function(s){t.m(),lu(e,r,s,n,i)}),(function(e){e=iu(e),t.a(e)})))}function lu(e,t,n,i,r,s){n.length||$o(xh(e))&&!$o(xh(e))?q(n,Kl.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordSignIn",e,t,i,s):1==n.length&&n[0]===Kl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?$o(xh(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("unsupportedProvider",e,t,i):(n=So(n,Oo(xh(e))))?(io(new rs(i),kh(e)),ha("federatedSignIn",e,t,i,n,r)):ha("unsupportedProvider",e,t,i):Mo(xh(e))?ha("handleUnauthorizedUser",e,t,i,Kl.auth.EmailAuthProvider.PROVIDER_ID):$o(xh(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("passwordSignUp",e,t,i,void 0,void 0,s)}function uu(e,t,n,i,r,s){var o=Mc(t);Ph(e,t.I(T(e.Ib,e),[n,s],(function(){t.m(),ha("emailLinkSignInSent",e,o,n,i,s)}),r))}function hu(e,t,n){n?ha("prefilledEmailSignIn",e,t,n):ha("signIn",e,t)}function du(){return ye(ar(),"oobCode")}function fu(){var e=ye(ar(),"continueUrl");return e?function(){Ut(window.location,e)}:null}function pu(e,t){Dc.call(this,Xc,void 0,t,"anonymousUserMismatch"),this.i=e}function mu(e){Dc.call(this,Vc,void 0,e,"callback")}function gu(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=to(kh(e)),s=r&&r.g;if(s&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,s))!function(e,t,n){var i=Mc(t);Ph(e,Uh(e).then((function(){t.m(),ha("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=iu(e.code),t.a(e))})))}(e,t,i);else{var o=r&&r.a;o?Ph(e,n.user.linkWithCredential(o).then((function(n){i={user:n.user,credential:o,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},vu(e,t,i)}),(function(n){bu(e,t,n)}))):vu(e,t,i)}}else n=Mc(t),t.m(),no(kh(e)),au(e,n)}function vu(e,t,n){no(kh(e)),eu(e,t,n)}function bu(e,t,n){var i=Mc(t);no(kh(e)),n=iu(n),t.m(),au(e,i,void 0,n)}function yu(e,t,n,i){var r=Mc(t);Ph(e,Ih(e).fetchSignInMethodsForEmail(n).then((function(s){t.m(),s.length?q(s,Kl.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordLinking",e,r,n):1==s.length&&s[0]===Kl.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ha("emailLinkSignInLinking",e,r,n):(s=So(s,Oo(xh(e))))?ha("federatedLinking",e,r,n,s,i):(no(kh(e)),ha("unsupportedProvider",e,r,n)):(no(kh(e)),ha("passwordRecovery",e,r,n,!1,Pn().toString()))}),(function(n){bu(e,t,n)})))}function _u(e,t){Dc.call(this,Jc,void 0,t,"differentDeviceError"),this.i=e}function wu(e,t,n,i){Dc.call(this,al,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function Iu(){return Ja(this,"firebaseui-id-new-password")}function Eu(){return Ja(this,"firebaseui-id-password-toggle")}function ku(){this.Ra=!this.Ra;var e=Eu.call(this),t=Iu.call(this);this.Ra?(t.type="text",pa(e,"firebaseui-input-toggle-off"),ma(e,"firebaseui-input-toggle-on")):(t.type="password",pa(e,"firebaseui-input-toggle-on"),ma(e,"firebaseui-input-toggle-off")),t.focus()}function Su(){return Ja(this,"firebaseui-id-new-password-error")}function Cu(){this.Ra=!1;var e=Iu.call(this);e.type="password";var t=Su.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}));var n=Eu.call(this);pa(n,"firebaseui-input-toggle-on"),ma(n,"firebaseui-input-toggle-off"),function(e,t,n){Bn(e,A(jn,t=new Sa(t))),Na(Xa(e),t,"focusin",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-focus"),ma(n,"firebaseui-input-toggle-blur")})),function(e,t,n){Bn(e,A(jn,t=new Sa(t))),Na(Xa(e),t,"focusout",n)}(this,e,(function(){pa(n,"firebaseui-input-toggle-blur"),ma(n,"firebaseui-input-toggle-focus")})),nc(this,n,T(ku,this))}function Tu(){var e=Iu.call(this),t=Su.call(this);return ga(e)?(Za(e,!0),ic(t),t=!0):(Za(e,!1),rc(t,un("Enter your password").toString()),t=!1),t?ga(e):null}function Au(e,t,n){Dc.call(this,rl,{email:e},n,"passwordReset"),this.l=t}function Ru(e,t,n,i,r){Dc.call(this,fl,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function Nu(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=iu(i),Za(n.i(),!1),rc(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Yl).render(t),_h(e,n))}function Pu(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):Ze&&!dt("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Ou(e,t,n,i,r,s){Dc.call(this,Yc,{email:n},s,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Lu(e,t,n,i,r){Dc.call(this,el,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function xu(e){Dc.call(this,zc,void 0,e,"blank")}function Du(e,t,n,i,r){var s=new xu,o=new je(n),a=o.a.a.get(Ve.$a)||"",c=o.a.a.get(Ve.Sa)||"",l="1"===o.a.a.get(Ve.Qa),u=He(o),h=o.a.a.get(Ve.PROVIDER_ID)||null;o=o.a.a.get(Ve.vb)||null,Lh(e,o);var d=!Xs(Ys,kh(e)),f=i||function(e,t){var n=null;if(t=Xs(Ys,t))try{var i=Rs(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(c,kh(e)),p=(i=function(e,t){var n=null;if(t=Xs(Js,t))try{var i=Rs(e,t);n=JSON.parse(i)}catch(e){}return os(n||null)}(c,kh(e)))&&i.a;h&&p&&p.providerId!==h&&(p=null),s.render(t),_h(e,s),Ph(e,s.I((function(){var t=$i(null);t=u&&d||d&&l?zi(Error("anonymous-user-not-found")):function(e,t){var n=He(new je(t));return n?(t=new Fi((function(t,i){var r=Eh(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));Ph(e,r)})),Ph(e,t),t):$i(null)}(e,n).then((function(e){if(h&&!p)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:Ih(e).checkActionCode(a)})).then((function(){return i}))}),[],(function(i){f?function(e,t,n,i,r,s){var o=Mc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Signing in...").toString());var a=null;r=(s?function(e,t,n,i,r){Dh(e);var s=r||null,o=Kl.auth.EmailAuthProvider.credentialWithLink(n,i);return n=s?Ih(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Uh(e)})).then((function(){return Fh(e,{code:"auth/email-already-in-use"},s)})):Ih(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Fh(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),Ph(e,n),n}(e,s,n,i,r):function(e,t,n,i){Dh(e);var r,s=i||null;return t=Ih(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Uh(e)})).then((function(){return Eh(e).updateCurrentUser(r.user)})).then((function(){return r.user=Eh(e).currentUser,r})),Ph(e,t),t}(e,n,i,r)).then((function(n){Qs(Js,kh(e)),Qs(Ys,kh(e)),t.h(),t.$("firebaseui-icon-done",un("Signed in!").toString()),a=setTimeout((function(){t.h(),eu(e,t,n,!0)}),1e3),Ph(e,(function(){t&&(t.h(),t.m()),clearTimeout(a)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var s=iu(r=Zl(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qs(Js,kh(e)),Qs(Ys,kh(e))):"auth/invalid-email"==r.code?(s=un("The email provided does not match the current sign-in session.").toString(),ha("emailLinkConfirmation",e,o,i,Mu,null,s)):au(e,o,n,s)}})),Ph(e,r)}(e,s,f,n,p,i):l?(s.m(),ha("differentDeviceError",e,t)):(s.m(),ha("emailLinkConfirmation",e,t,n,Mu))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":ha("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ha("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ha("emailLinkNewDeviceLinking",e,t,n,Uu);break;default:i&&(r=iu(i)),au(e,t,void 0,r)}})))}function Mu(e,t,n,i){Du(e,t,i,n,!0)}function Uu(e,t,n){Du(e,t,n)}function Fu(e,t,n,i,r,s){Dc.call(this,Zc,{email:e,ga:t},s,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function Bu(e,t,n,i,r,s){Dc.call(this,Kc,{email:e},s,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function ju(e,t,n,i,r,s,o){Dc.call(this,vl,{jc:e,Qb:t},o,"emailMismatch",{F:r,D:s}),this.l=n,this.i=i}function Hu(e,t,n,i,r){Dc.call(this,Gc,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function qu(e,t,n,i,r,s){Dc.call(this,tl,{email:e,ga:t},s,"federatedLinking",{F:i,D:r}),this.i=n}function Wu(e,t,n,i,r,s){Dc.call(this,qc,{email:n,Ta:!!t},s,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Vu(){return Ja(this,"firebaseui-id-name")}function $u(){return Ja(this,"firebaseui-id-name-error")}function zu(e,t,n,i,r,s,o,a,c){Dc.call(this,Hc,{email:i,Tb:e,name:r,Ta:!!n,ia:!!a},c,"passwordSignUp",{F:s,D:o}),this.w=t,this.H=n,this.B=e}function Ku(e,t){var n=Vo(xh(e)),i=t.j(),r=null;n&&(r=t.M());var s=t.P();if(i){if(n){if(!r)return void t.u().focus();r=re(r)}if(s){var o=Kl.auth.EmailAuthProvider.credential(i,s);Ph(e,t.I(T(e.Yb,e),[i,s],(function(i){var s={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:r}).then((function(){return eu(e,t,s)})),Ph(e,i),i):eu(e,t,s)}),(function(n){if(!n.name||"cancel"!=n.name){var r=Zl(n);switch(n=iu(r),r.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=iu(i);Za(t.i(),!1),rc(t.U(),e),t.i().focus()}var s=Ih(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Mc(t),t.m(),ha("passwordRecovery",e,i,n,!1,Pn().toString()))}),(function(){r()}));return Ph(e,s),s}(e,t,i,r);case"auth/too-many-requests":n=un("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Za(t.l(),!1),rc(t.ba(),n);break;case"auth/admin-restricted-operation":Uo(xh(e))?(n=Mc(t),t.m(),ha("handleUnauthorizedUser",e,n,i,Kl.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Gr(r="setAccountInfo: "+Ps(r),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function Gu(){return Ja(this,"firebaseui-id-phone-confirmation-code")}function Yu(){return Ja(this,"firebaseui-id-phone-confirmation-code-error")}function Ju(){return Ja(this,"firebaseui-id-resend-countdown")}function Xu(e,t,n,i,r,s,o,a,c){Dc.call(this,_l,{phoneNumber:r},c,"phoneSignInFinish",{F:o,D:a}),this.jb=s,this.i=new Ca(1e3),this.B=s,this.P=e,this.l=t,this.H=n,this.M=i}a(Fl,Dc),Fl.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Uc(this,this.l(),this.i()),Fc(this,this.i(),this.w),ga(this.l())?this.i().focus():this.l().focus(),Dc.prototype.v.call(this)},Fl.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},R(Fl.prototype,{l:Ll,U:xl,P:Dl,M:Ml,j:Ul,i:Tl,B:Al,ea:Rl,u:Nl,ua:kl,pa:Sl,ba:Cl}),L(Bl,Dc),Bl.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bl.K.v.call(this)},Bl.prototype.o=function(){this.i=null,Bl.K.o.call(this)},R(Bl.prototype,{l:kl,w:Sl,u:Cl}),L(jl,Bl),L(Hl,Bl),L(ql,Bl),L(Wl,Bl),L(Vl,Bl),L($l,Bl),L(zl,Bl),L(Gl,Bl),L(Yl,Bl),L(Jl,Bl),L(Xl,Bl),L(Ql,Bl),a(pu,Dc),pu.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},pu.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(pu.prototype,{l:Sl}),ua.anonymousUserMismatch=function(e,t){var n=new pu((function(){n.m(),au(e,t)}));n.render(t),_h(e,n)},a(mu,Dc),mu.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},ua.callback=function(e,t,n){var i=new mu;i.render(t),_h(e,i),n=n||yh(e),Ph(e,n.then((function(t){gu(e,i,t)}),(function(n){if((n=Zl(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)io(new rs(n.email,n.credential),kh(e)),yu(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=to(kh(e)),s=iu(n);r&&r.a?yu(e,i,r.g,s):r?cu(e,i,r.g,s):bu(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&su(e)?gu(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Uo(xh(e))?(i.m(),no(kh(e)),ha("handleUnauthorizedUser",e,t,null,null)):bu(e,i,n))})))},a(_u,Dc),_u.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},_u.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(_u.prototype,{l:Sl}),ua.differentDeviceError=function(e,t){var n=new _u((function(){n.m(),au(e,t)}));n.render(t),_h(e,n)},a(wu,Dc),wu.prototype.v=function(){var e=this;nc(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},wu.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},R(wu.prototype,{u:kl,B:Sl,w:Cl}),a(Au,Dc),Au.prototype.v=function(){this.H(),this.B(this.l),Fc(this,this.i(),this.l),this.i().focus(),Dc.prototype.v.call(this)},Au.prototype.o=function(){this.l=null,Dc.prototype.o.call(this)},R(Au.prototype,{i:Iu,w:Su,M:Eu,H:Cu,u:Tu,U:kl,P:Sl,B:Cl}),a(Ru,Dc),Ru.prototype.v=function(){var e=this;nc(this,Ja(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},Ru.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},R(Ru.prototype,{u:kl,B:Sl,w:Cl}),ua.passwordReset=function(e,t,n,i){Ph(e,Ih(e).verifyPasswordResetCode(n).then((function(r){var s=new Au(r,(function(){!function(e,t,n,i,r){var s=n.u();s&&Ph(e,n.I(T(Ih(e).confirmPasswordReset,Ih(e)),[i,s],(function(){n.m();var i=new Gl(r);i.render(t),_h(e,i)}),(function(i){Nu(e,t,n,i)})))}(e,t,s,n,i)}));s.render(t),_h(e,s)}),(function(){Nu(e,t)})))},ua.emailChangeRevocation=function(e,t,n){var i=null;Ph(e,Ih(e).checkActionCode(n).then((function(t){return i=t.data.email,Ih(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new wu(n,(function(){Ph(e,i.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){i.m(),(i=new jl(n,void 0,qo(xh(e)),Wo(xh(e)))).render(t),_h(e,i)}),(function(){i.a(Rn().toString())})))}));i.render(t),_h(e,i)}(e,t,i)}),(function(){var n=new Jl;n.render(t),_h(e,n)})))},ua.emailVerification=function(e,t,n,i){Ph(e,Ih(e).applyActionCode(n).then((function(){var n=new Hl(i);n.render(t),_h(e,n)}),(function(){var n=new ql;n.render(t),_h(e,n)})))},ua.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;Ph(e,Ih(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,Ih(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Ru(i.factorId,(function(){r.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){r.m(),(r=new jl(n,void 0,qo(xh(e)),Wo(xh(e)))).render(t),_h(e,r)}),(function(){r.a(Rn().toString())}))}),i.phoneNumber);r.render(t),_h(e,r)}(e,t,i,r)}),(function(){var n=new $l;n.render(t),_h(e,n)})))},ua.verifyAndChangeEmail=function(e,t,n,i){var r=null;Ph(e,Ih(e).checkActionCode(n).then((function(t){return r=t.data.email,Ih(e).applyActionCode(n)})).then((function(){var n=new Wl(r,i);n.render(t),_h(e,n)}),(function(){var n=new Vl;n.render(t),_h(e,n)})))},a(Ou,Dc),Ou.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Pu(this.i(),(this.i().value||"").length),Dc.prototype.v.call(this)},Ou.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},R(Ou.prototype,{i:Ll,M:xl,w:Dl,H:Ml,j:Ul,U:kl,P:Sl,B:Cl}),ua.emailLinkConfirmation=function(e,t,n,i,r,s){var o=new Ou((function(){var r=o.j();r?(o.m(),i(e,t,r,n)):o.i().focus()}),(function(){o.m(),au(e,t,r||void 0)}),r||void 0,qo(xh(e)),Wo(xh(e)));o.render(t),_h(e,o),s&&o.a(s)},a(Lu,Dc),Lu.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Lu.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(Lu.prototype,{l:kl,u:Cl}),ua.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new je(n);if(n=r.a.a.get(Ve.PROVIDER_ID)||null,qe(r,null),n){var s=new Lu(Lo(xh(e),n),(function(){s.m(),i(e,t,r.toString())}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s)}else au(e,t)},a(xu,Dc),ua.emailLinkSignInCallback=Du,a(Fu,Dc),Fu.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Fu.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(Fu.prototype,{l:kl,u:Cl}),ua.emailLinkSignInLinking=function(e,t,n){var i=to(kh(e));if(no(kh(e)),i){var r=i.a.providerId,s=new Fu(n,Lo(xh(e),r),(function(){!function(e,t,n,i){var r=Mc(t);uu(e,t,n,(function(){au(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var s=iu(i);i&&"auth/network-request-failed"==i.code?t.a(s):(t.m(),au(e,r,n,s))}}),i)}(e,s,n,i)}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s)}else au(e,t)},a(Bu,Dc),Bu.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),nc(this,Ja(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Dc.prototype.v.call(this)},Bu.prototype.o=function(){this.i=this.u=null,Dc.prototype.o.call(this)},R(Bu.prototype,{l:Sl}),ua.emailLinkSignInSent=function(e,t,n,i,r){var s=new Bu(n,(function(){s.m(),ha("emailNotReceived",e,t,n,i,r)}),(function(){s.m(),i()}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s)},a(ju,Dc),ju.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},ju.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(ju.prototype,{u:kl,B:Sl,w:Cl}),ua.emailMismatch=function(e,t,n){var i=to(kh(e));if(i){var r=new ju(n.user.email,i.g,(function(){var t=r;no(kh(e)),eu(e,t,n)}),(function(){var t=n.credential.providerId,s=Mc(r);r.m(),i.a?ha("federatedLinking",e,s,i.g,t):ha("federatedSignIn",e,s,i.g,t)}),qo(xh(e)),Wo(xh(e)));r.render(t),_h(e,r)}else au(e,t)},a(Hu,Dc),Hu.prototype.v=function(){var e=this;nc(this,this.u(),(function(){e.i()})),nc(this,this.Da(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},Hu.prototype.Da=function(){return Ja(this,"firebaseui-id-resend-email-link")},Hu.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},R(Hu.prototype,{u:Sl}),ua.emailNotReceived=function(e,t,n,i,r){var s=new Hu((function(){uu(e,s,n,i,(function(e){e=iu(e),s.a(e)}),r)}),(function(){s.m(),au(e,t,n)}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s)},a(qu,Dc),qu.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},qu.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(qu.prototype,{l:kl,u:Cl}),ua.federatedLinking=function(e,t,n,i,r){var s=to(kh(e));if(s&&s.a){var o=new qu(n,Lo(xh(e),i),(function(){ru(e,o,i,n)}),qo(xh(e)),Wo(xh(e)));o.render(t),_h(e,o),r&&o.a(r)}else au(e,t)},ua.federatedRedirect=function(e,t,n){var i=new xu;i.render(t),_h(e,i),ru(e,i,t=Oo(xh(e))[0],n)},ua.federatedSignIn=function(e,t,n,i,r){var s=new qu(n,Lo(xh(e),i),(function(){ru(e,s,i,n)}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s),r&&s.a(r)},ua.passwordLinking=function(e,t,n){var i=to(kh(e));no(kh(e));var r=i&&i.a;if(r){var s=new Pl(n,(function(){!function(e,t,n,i){var r=t.u();r?Ph(e,t.I(T(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return eu(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),Ph(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":Za(t.i(),!1),rc(t.B(),iu(e));break;case"auth/too-many-requests":t.a(iu(e));break;default:Gr("signInWithEmailAndPassword: "+e.message,void 0),t.a(iu(e))}}))):t.i().focus()}(e,s,n,r)}),(function(){s.m(),ha("passwordRecovery",e,t,n)}),qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s)}else au(e,t)},a(Wu,Dc),Wu.prototype.v=function(){this.B(),this.H(this.l,this.u),ga(this.i())||this.i().focus(),Fc(this,this.i(),this.l),Dc.prototype.v.call(this)},Wu.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},R(Wu.prototype,{i:Ll,w:xl,B:Dl,M:Ml,j:Ul,U:kl,P:Sl,H:Cl}),ua.passwordRecovery=function(e,t,n,i,r){var s=new Wu((function(){!function(e,t){var n=t.j();if(n){var i=Mc(t);Ph(e,t.I(T(Ih(e).sendPasswordResetEmail,Ih(e)),[n],(function(){t.m();var r=new jl(n,(function(){r.m(),au(e,i)}),qo(xh(e)),Wo(xh(e)));r.render(i),_h(e,r)}),(function(e){Za(t.i(),!1),rc(t.w(),iu(e))})))}else t.i().focus()}(e,s)}),i?void 0:function(){s.m(),au(e,t)},n,qo(xh(e)),Wo(xh(e)));s.render(t),_h(e,s),r&&s.a(r)},ua.passwordSignIn=function(e,t,n,i){var r=new Fl((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var r=Kl.auth.EmailAuthProvider.credential(n,i);Ph(e,t.I(T(e.bc,e),[n,i],(function(n){return eu(e,t,{user:n.user,credential:r,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":Za(t.l(),!1),rc(t.U(),iu(e));break;case"auth/too-many-requests":case"auth/wrong-password":Za(t.i(),!1),rc(t.B(),iu(e));break;default:Gr("verifyPassword: "+e.message,void 0),t.a(iu(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var n=r.M();r.m(),ha("passwordRecovery",e,t,n)}),n,qo(xh(e)),Wo(xh(e)),i);r.render(t),_h(e,r)},a(zu,Dc),zu.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Uc(this,this.i(),this.u()),Uc(this,this.u(),this.l())):Uc(this,this.i(),this.l()),this.w&&Fc(this,this.l(),this.w),ga(this.i())?this.B&&!ga(this.u())?this.u().focus():this.l().focus():this.i().focus(),Dc.prototype.v.call(this)},zu.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},R(zu.prototype,{i:Ll,U:xl,ea:Dl,jb:Ml,j:Ul,u:Vu,Bc:$u,Ja:function(){var e=Vu.call(this),t=$u.call(this);ec(this,e,(function(){sc(t)&&(Za(e,!0),ic(t))}))},M:function(){var e=Vu.call(this),t=$u.call(this),n=ga(e);return Za(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(ic(t),t=!0):(rc(t,un("Enter your account name").toString()),t=!1),t?Y(ga(e)):null},l:Iu,ba:Su,lb:Eu,ua:Cu,P:Tu,Nb:kl,Mb:Sl,pa:Cl}),ua.passwordSignUp=function(e,t,n,i,r,s){var o=new zu(Vo(xh(e)),(function(){Ku(e,o)}),r?void 0:function(){o.m(),au(e,t)},n,i,qo(xh(e)),Wo(xh(e)),s);o.render(t),_h(e,o)},a(Xu,Dc),Xu.prototype.v=function(){var e=this;this.U(this.jb),ii(this.i,"tick",this.w,!1,this),this.i.start(),nc(this,Ja(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),nc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Dc.prototype.v.call(this)},Xu.prototype.o=function(){this.M=this.H=this.l=this.P=null,Ta(this.i),oi(this.i,"tick",this.w),this.i=null,Dc.prototype.o.call(this)},Xu.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Ta(this.i),oi(this.i,"tick",this.w),this.ua(),this.lb())},R(Xu.prototype,{u:Gu,pa:Yu,Ja:function(e){var t=Gu.call(this),n=Yu.call(this);ec(this,t,(function(){sc(n)&&(Za(t,!0),ic(n))})),e&&tc(this,t,(function(){e()}))},ba:function(){var e=Y(ga(Gu.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Ju,U:function(e){Gt(Ju.call(this),un("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){ic(this.Fb())},Da:function(){return Ja(this,"firebaseui-id-resend-link")},lb:function(){rc(this.Da())},Nb:kl,Mb:Sl,ea:Cl}),ua.phoneSignInFinish=function(e,t,n,i,r,s){var o=new Xu((function(){o.m(),ha("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),Za(t.u(),!1),rc(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Verifying...").toString()),Ph(e,t.I(T(i.confirm,i),[s],(function(n){t.h(),t.$("firebaseui-icon-done",un("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Eh(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};eu(e,t,i,!0)}),1e3);Ph(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var s=Zl(i);switch(i=iu(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Mc(t),t.h(),t.m(),ha("phoneSignInStart",e,s,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(un("Wrong code. Try again.").toString())}(e,o,n,r)}),(function(){o.m(),au(e,t)}),(function(){o.m(),ha("phoneSignInStart",e,t,n)}),ko(n),i,qo(xh(e)),Wo(xh(e)));o.render(t),_h(e,o),s&&o.a(s)};var Qu=!(Ze||Ke("Safari")&&!(Ge()||Ke("Coast")||Ke("Opera")||Ke("Edge")||Ke("Firefox")||Ke("FxiOS")||Ke("Silk")||Ke("Android")));function Zu(e,t){return/-[a-z]/.test(t)?null:Qu&&e.dataset?!Ke("Android")||Ge()||Ke("Firefox")||Ke("FxiOS")||Ke("Opera")||Ke("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function eh(e,t,n){var i=this;e=nn(_c,{items:e},null,this.s),Tc.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Zu(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||$t(document))||$t(document),i=$a(e),r=$a(n);if(!Ze||9<=Number(ut)){o=Wa(n,"borderLeftWidth");var s=Wa(n,"borderRightWidth");a=Wa(n,"borderTopWidth"),c=Wa(n,"borderBottomWidth"),s=new qa(parseFloat(a),parseFloat(s),parseFloat(c),parseFloat(o))}else{var o=Ka(n,"borderLeft");s=Ka(n,"borderRight");var a=Ka(n,"borderTop"),c=Ka(n,"borderBottom");s=new qa(a,s,c,o)}n==$t(document)?(o=i.a-n.scrollLeft,i=i.g-n.scrollTop,!Ze||10<=Number(ut)||(o+=s.left,i+=s.top)):(o=i.a-r.a-s.left,i=i.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,a=it&&!r&&!s,e=d(r)&&!a||!e.getBoundingClientRect?new Bt(r,s):new Bt((e=Va(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,s=n.scrollLeft,a=n.scrollTop,n=new Ft(s+=Math.min(o,Math.max(o-(n.clientWidth-e.width),0)),a+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),nc(this,e,(function(e){(e=(e=Yt(e.target,"firebaseui-id-list-box-dialog-button"))&&Zu(e,"listboxid"))&&(Ac.call(i),t(e))}))}function th(){return Ja(this,"firebaseui-id-phone-number")}function nh(){return Ja(this,"firebaseui-id-country-selector")}function ih(){return Ja(this,"firebaseui-id-phone-number-error")}function rh(e,t){var n=e.a,i=sh("1-US-0",n),r=null;if(!(r=t&&sh(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");ch.call(this,r,e)}function sh(e,t){return!(!(e=go(e))||!q(t,e))}function oh(e){return"firebaseui-flag-"+e.f}function ah(e){var t=this;eh.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+oh(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){ch.call(t,n,e,!0),t.O().focus()}),this.Ba)}function ch(e,t,n){var i=go(e);i&&(n&&((t=mo(t,n=Y(ga(th.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),va(th.call(this),n))),t=go(this.Ba),this.Ba=e,e=Ja(this,"firebaseui-id-country-selector-flag"),t&&ma(e,oh(t)),pa(e,oh(i)),Gt(Ja(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function lh(e,t,n,i,r,s,o,a,c,l){Dc.call(this,yl,{Gb:t,Aa:c||null,Va:!!n,ia:!!s},l,"phoneSignInStart",{F:i,D:r}),this.H=a||null,this.M=t,this.l=e,this.w=n||null,this.pa=o||null}function uh(e,t,n,i){try{var r=t.U(ea)}catch(e){return}r?Qo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",un("Verifying...").toString()),Ph(e,t.I(T(e.cc,e),[ko(r),n],(function(n){var i=Mc(t);t.$("firebaseui-icon-done",un("Code sent!").toString());var s=setTimeout((function(){t.h(),t.m(),ha("phoneSignInFinish",e,i,r,15,n)}),1e3);Ph(e,(function(){t&&t.h(),clearTimeout(s)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(ta),Qo=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=un("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void rc(t.B(),An().toString());case"auth/admin-restricted-operation":if(Uo(xh(e)))return n=Mc(t),t.m(),void ha("handleUnauthorizedUser",e,n,ko(r),Kl.auth.PhoneAuthProvider.PROVIDER_ID);i=iu(n);break;default:i=iu(n)}t.a(i)}})))):Zo?rc(t.u(),un("Solve the reCAPTCHA").toString()):!Zo&&i&&t.i().click():(t.O().focus(),rc(t.B(),An().toString()))}function hh(e,t,n,i,r){Dc.call(this,bl,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function dh(e,t,n,i,r,s,o){Dc.call(this,Bc,{email:n,Va:!!t,ia:!!s},o,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fh(e,t,n,i,r,s,o){Dc.call(this,nl,{kc:e,yb:n,Eb:!!i},o,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=i}function ph(e,t,n,i,r,s){Dc.call(this,il,{email:e},s,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function mh(e,t){this.$=!1;var n=bh(t);if(vh[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');vh[n]=this,this.a=e,this.u=null,this.Y=!1,gh(this.a),this.h=Kl.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),gh(this.h),this.h.setPersistence&&this.h.setPersistence(Kl.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Ao,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Sr.Xa(),this.j=this.C=null,this.da=this.A=!1}function gh(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}a(lh,Dc),lh.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Uc(this,this.O(),this.i()),Fc(this,this.i(),this.l),this.O().focus(),Pu(this.O(),(this.O().value||"").length),Dc.prototype.v.call(this)},lh.prototype.o=function(){this.w=this.l=null,Dc.prototype.o.call(this)},R(lh.prototype,{Cb:Rc,O:th,B:ih,ea:function(e,t,n){var i=this,r=th.call(this),s=nh.call(this),o=ih.call(this),a=e||wo,c=a.a;if(0==c.length)throw Error("No available countries provided.");rh.call(i,a,t),nc(this,s,(function(){ah.call(i,a)})),ec(this,r,(function(){sc(o)&&(Za(r,!0),ic(o));var e=Y(ga(r)||""),t=go(this.Ba),n=mo(a,e);e=sh("1-US-0",c),n.length&&n[0].b!=t.b&&(t=n[0],ch.call(i,"1"==t.b&&e?"1-US-0":t.c,a))})),n&&tc(this,r,(function(){n()}))},U:function(e){var t=Y(ga(th.call(this))||""),n=(e=e||wo).a,i=mo(wo,t);if(i.length&&!q(n,i[0]))throw va(th.call(this)),th.call(this).focus(),rc(ih.call(this),un("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=go(this.Ba),i.length&&i[0].b!=n.b&&ch.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Io(this.Ba,t):null},Ja:nh,ba:function(){return Ja(this,"firebaseui-recaptcha-container")},u:function(){return Ja(this,"firebaseui-id-recaptcha-error")},i:kl,ua:Sl,P:Cl}),ua.phoneSignInStart=function(e,t,n,i){var r=function(e){var t=null;if(No(e).forEach((function(e){e.provider==Kl.auth.PhoneAuthProvider.PROVIDER_ID&&I(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=oe(e.recaptchaParameters))})),t){var n=[];la.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Qr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(xh(e))||{};Qo=null,Zo=!(r&&"invisible"===r.size);var s=ou(e),o=function(e){var t=(e=Po(e,Kl.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&vo(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Eo(e.loginHint)),t&&t[0]||n&&go(n.a)||null}(xh(e)),a=s?function(e){var t=null;return(e=Po(e,Kl.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Eo(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(xh(e)):null;o=n&&n.a||o&&o.c||null,n=n&&n.Aa||a,(a=jo(xh(e)))&&yo(a),ea=a?new po(jo(xh(e))):wo;var c=new lh((function(t){uh(e,c,l,!(!t||!t.keyCode))}),Zo,s?null:function(){l.clear(),c.m(),au(e,t)},qo(xh(e)),Wo(xh(e)),s,ea,o,n);c.render(t),_h(e,c),i&&c.a(i),r.callback=function(t){c.u()&&ic(c.u()),Qo=t,Zo||uh(e,c,l)},r["expired-callback"]=function(){Qo=null};var l=new Kl.auth.RecaptchaVerifier(Zo?c.ba():c.i(),r,Eh(e).app);Ph(e,c.I(T(l.render,l),[],(function(e){ta=e}),(function(n){n.name&&"cancel"==n.name||(n=iu(n),c.m(),au(e,t,void 0,n))})))},ua.prefilledEmailSignIn=function(e,t,n){var i=new xu;i.render(t),_h(e,i),Ph(e,i.I(T(Ih(e).fetchSignInMethodsForEmail,Ih(e)),[n],(function(r){i.m();var s=!(!su(e)||!Sh(e));lu(e,t,r,n,void 0,s)}),(function(r){r=iu(r),i.m(),ha("signIn",e,t,n,r)})))},a(hh,Dc),hh.prototype.v=function(){this.l(this.i),Dc.prototype.v.call(this)},hh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(hh.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?Ht("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];nc(this,r,A(t,Zu(r,"providerId")))}}}),ua.providerSignIn=function(e,t,n,i){var r=new hh((function(n){n==Kl.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),hu(e,t,i)):n==Kl.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),ha("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){Ph(e,t.I(T(e.$b,e),[],(function(n){return t.m(),eu(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Gr("ContinueAsGuest: "+e.code,void 0),e=iu(e),t.a(e))})))}(e,r):ru(e,r,n,i),Dh(e),e.l.cancel()}),xo(xh(e)),qo(xh(e)),Wo(xh(e)));r.render(t),_h(e,r),n&&r.a(n),function(e){Dh(e);try{Cr(e.l,Do(xh(e)),function(e){var t;return Dh(e),(t=e.Z)||(e=Bo(e=xh(e),Kl.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===Do(xh(e))){if(Fo(xh(e),Kl.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(r){}return ru(e,t,Kl.auth.GoogleAuthProvider.PROVIDER_ID,i),$i(!0)}return r=Kl.auth.GoogleAuthProvider.credential(n.credential),s=!1,r=t.I(T(e.ac,e),[r],(function(n){var i=Mc(t);t.m(),ha("callback",e,i,$i(n)),s=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Mc(t);t.m(),ha("callback",e,i,zi(n))}else n&&"auth/admin-restricted-operation"==n.code&&Uo(xh(e))?(n=Mc(t),t.m(),ha("handleUnauthorizedUser",e,n,null,Kl.auth.GoogleAuthProvider.PROVIDER_ID)):(n=iu(n),t.a(n))})),Ph(e,r),r.then((function(){return s}),(function(){return!1}))}var r,s;return n&&t.a(un("The selected credential for the authentication provider is not supported!").toString()),$i(!1)}(e,e.g,t)}))}catch(e){}}(e)},ua.sendEmailLinkForSignIn=function(e,t,n,i){var r=new mu;r.render(t),_h(e,r),uu(e,r,n,i,(function(i){r.m(),i&&"auth/admin-restricted-operation"==i.code&&Uo(xh(e))?ha("handleUnauthorizedUser",e,t,n,Kl.auth.EmailAuthProvider.PROVIDER_ID):(i=iu(i),ha("signIn",e,t,n,i))}))},a(dh,Dc),dh.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Pu(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},dh.prototype.o=function(){this.u=this.i=null,Dc.prototype.o.call(this)},R(dh.prototype,{l:Ll,M:xl,w:Dl,H:Ml,j:Ul,U:kl,P:Sl,B:Cl}),ua.signIn=function(e,t,n,i){var r=su(e),s=new dh((function(){var t=s,n=t.j()||"";n&&cu(e,t,n)}),r?null:function(){s.m(),au(e,t,n)},n,qo(xh(e)),Wo(xh(e)),r);s.render(t),_h(e,s),i&&s.a(i)},a(fh,Dc),fh.prototype.v=function(){var e=this,t=Ja(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&nc(this,t,(function(){e.i()})),nc(this,this.u(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},fh.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},R(fh.prototype,{u:Sl}),ua.handleUnauthorizedUser=function(e,t,n,i){function r(){au(e,t)}i===Kl.auth.EmailAuthProvider.PROVIDER_ID?r=function(){hu(e,t)}:i===Kl.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){ha("phoneSignInStart",e,t)});var s=null,o=null;i===Kl.auth.EmailAuthProvider.PROVIDER_ID&&Mo(xh(e))?(s=function(e){return(e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(xh(e)),o=function(e){if((e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(xh(e))):Uo(xh(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(xh(e)),o=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){sr(t)}}return null}(xh(e)));var a=new fh(n,(function(){a.m(),r()}),s,o,qo(xh(e)),Wo(xh(e)));a.render(t),_h(e,a)},a(ph,Dc),ph.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},ph.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},R(ph.prototype,{u:kl,B:Sl,w:Cl}),ua.unsupportedProvider=function(e,t,n){var i=new ph(n,(function(){i.m(),ha("passwordRecovery",e,t,n)}),(function(){i.m(),au(e,t,n)}),qo(xh(e)),Wo(xh(e)));i.render(t),_h(e,i)};var vh={};function bh(e){return e||"[DEFAULT]"}function yh(e){return Dh(e),e.i||(e.i=Rh(e,(function(t){return t&&!to(kh(e))?$i(Eh(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fh(e,t)}))):$i(Ih(e).getRedirectResult().then((function(t){return Ro(xh(e))&&!t.user&&e.j&&!e.j.isAnonymous?Eh(e).getRedirectResult():t})))}))),e.i}function _h(e,t){Dh(e),e.g=t}var wh=null;function Ih(e){return Dh(e),e.h}function Eh(e){return Dh(e),e.a}function kh(e){return Dh(e),e.oa}function Sh(e){return Dh(e),e.O?e.O.emailHint:void 0}function Ch(e){return"signIn"===((e=new je(e)).a.a.get(Ve.ub)||null)&&!!e.a.a.get(Ve.$a)}function Th(e,t,n,i){Dh(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var s=h.document;e.C?e.C.then((function(){"complete"==s.readyState?Ah(e,t):si(window,"load",(function(){Ah(e,t)}))})):"complete"==s.readyState?Ah(e,t):si(window,"load",(function(){Ah(e,t)}))}function Ah(e,t){var n=or(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),wh){var i=wh;Dh(i),to(kh(i))&&Qr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),wh.reset()}if(wh=e,e.T=n,function(e,t){e.L=null,e.J=new Ei(t),e.J.register(),ii(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=xh(e);(n=Xo(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),js(new Hs)&&js(new qs)){t=or(t,"Could not find the FirebaseUI widget element on the page."),n=(n=ye(n=ar(),i=co(xh(e).a,"queryParameterForSignInSuccessUrl")))?wt(Et(n)).toString():null;e:{i=ar();var r=Ho(xh(e));for(s in i=ye(i,r)||"",aa)if(aa[s].toLowerCase()==i.toLowerCase()){var s=aa[s];break e}s="callback"}switch(s){case"callback":n&&(s=kh(e),Zs(Gs,n,s)),e.nb()?ha("callback",e,t):au(e,t,Sh(e));break;case"resetPassword":ha("passwordReset",e,t,du(),fu());break;case"recoverEmail":ha("emailChangeRevocation",e,t,du());break;case"revertSecondFactorAddition":ha("revertSecondFactorAddition",e,t,du());break;case"verifyEmail":ha("emailVerification",e,t,du(),fu());break;case"verifyAndChangeEmail":ha("verifyAndChangeEmail",e,t,du(),fu());break;case"signIn":ha("emailLinkSignInCallback",e,t,ar()),Mh();break;case"select":n&&(s=kh(e),Zs(Gs,n,s)),au(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Xo(t=xh(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(s=new Ql(un("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),_h(e,s);t=e.g&&"blank"==e.g.Ga&&zo(xh(e)),ro(kh(e))&&!t&&(Lh(e,(t=ro(kh(e))).a),Qs(Ks,kh(e)))}function Rh(e,t){if(e.A)return t(Nh(e));if(Ph(e,(function(){e.A=!1})),Ro(xh(e))){var n=new Fi((function(n){Ph(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(Nh(e))))})))}));return Ph(e,n),n}return e.A=!0,t(null)}function Nh(e){return Dh(e),Ro(xh(e))&&e.j&&e.j.isAnonymous?e.j:null}function Ph(e,t){if(Dh(e),t){e.s.push(t);var n=function(){$(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Oh(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Lh(e,t){e.a.tenantId=t,e.h.tenantId=t}function xh(e){return Dh(e),e.ca}function Dh(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Mh(){var e=ar();if(Ch(e)){for(var t in e=new je(e),Ve)Ve.hasOwnProperty(t)&&Me(e.a.a,Ve[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=h.document.title;h.history&&h.history.replaceState&&h.history.replaceState(t,n,e.toString())}}function Uh(e){return Dh(e),Ih(e).signOut()}function Fh(e,t,n){if(Dh(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Jo(xh(e));return $i().then((function(){return i(new xn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return zi(t)}function Bh(e,t,n,i){Dc.call(this,El,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function jh(e,t,n,i,r){Dc.call(this,Il,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function Hh(e){Dc.call(this,$c,void 0,e,"spinner")}function qh(e){for(var t in this.a=new so,oo(this.a,"authDomain"),oo(this.a,"displayMode",Jh),oo(this.a,"tenants"),oo(this.a,"callbacks"),oo(this.a,"tosUrl"),oo(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{ao(this.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}}function Wh(e){return e.a.get("callbacks")||{}}function Vh(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Qr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){sr(t)}}return null}function $h(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Qr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){sr(n)}}return null}function zh(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Qh))throw Error("Invalid tenant configuration!")}function Kh(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Qh]))return Gr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Gr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function Gh(e,t,n){return e=function(e,t){var n=Yh,i=void 0===i?{}:i;return zh(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Qh],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(t=mh.prototype).nb=function(){return Dh(this),!!ro(kh(this))||Ch(ar())},t.start=function(e,t){Th(this,e,t)},t.Db=function(){Dh(this),this.Z=!0},t.reset=function(){Dh(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&wi(this.J),Oh(this),this.O=null,Mh(),Qs(Ks,kh(this)),Dh(this),this.l.cancel(),this.i=$i({user:null,credential:null}),wh==this&&(wh=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],no(kh(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Uh(this).then((function(){e.C=null}),(function(){e.C=null})))},t.ib=function(e){Dh(this);var t,n=this.ca;for(t in e)try{ao(n.a,t,e[t])}catch(e){Gr('Invalid config: "'+t+'"',void 0)}rt&&ao(n.a,"popupMode",!1),jo(n),!this.da&&Go(xh(this))&&(Qr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},t.Wb=function(){Dh(this);var e=xh(this),t=co(e.a,"widgetUrl");e=Ho(e);for(var n,i=t.search(be),r=0,s=[];0<=(n=ve(t,r,e,i));)s.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);s.push(t.substr(r)),t=s.join("").replace(_e,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,xh(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=ir(i,e))&&e.focus()):Ut(window.location,i)},t.Wa=function(){var e=this;return Dh(this),this.h.app.delete().then((function(){var t=bh(kh(e));delete vh[t],e.reset(),e.$=!0}))},t.Ib=function(e,t){Dh(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!$o(xh(this)))return zi(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if($o(e)){var t={url:ar(),handleCodeInApp:!0};(e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var n=ar();n instanceof we||(n=Se(n)),e instanceof we||(e=Se(e));var i=n;n=new we(i);var r=!!e.j;r?Ie(n,e.j):r=!!e.A,r?n.A=e.A:r=!!e.h,r?n.h=e.h:r=null!=e.C;var s=e.g;if(r)Ee(n,e.C);else if(r=!!e.g)if("/"!=s.charAt(0)&&(i.h&&!i.g?s="/"+s:-1!=(i=n.g.lastIndexOf("/"))&&(s=n.g.substr(0,i+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");for(var o=[],a=0;a<s.length;){var c=s[a++];"."==c?i&&a==s.length&&o.push(""):".."==c?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==s.length&&o.push("")):(o.push(c),i=!0)}s=o.join("/")}return r?n.g=s:r=""!==e.a.toString(),r?ke(n,Fe(e.a)):r=!!e.s,r&&(n.s=e.s),t.url=n.toString(),t}return null}(xh(this)),s=new je(r.url);return function(e,t){t?e.a.a.set(Ve.Sa,t):Me(e.a.a,Ve.Sa)}(s,i),t&&t.a&&(function(e,t,n){Zs(Js,As(e,JSON.stringify(ss(t))),n)}(i,t,kh(this)),qe(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set(Ve.Qa,t?"1":"0"):Me(e.a.a,Ve.Qa)}(s,function(e){return!(!(e=Po(e,Kl.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(xh(this))),Rh(this,(function(t){return t&&((t=t.uid)?s.a.a.set(Ve.Pa,t):Me(s.a.a,Ve.Pa)),r.url=s.toString(),Ih(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=kh(n),r={};r.email=e,Zs(Ys,As(i,JSON.stringify(r)),t)}),(function(e){throw Qs(Js,kh(n)),Qs(Ys,kh(n)),e}))},t.bc=function(e,t){Dh(this);var n=this;return Ih(this).signInWithEmailAndPassword(e,t).then((function(i){return Rh(n,(function(r){return r?Uh(n).then((function(){return Fh(n,{code:"auth/email-already-in-use"},Kl.auth.EmailAuthProvider.credential(e,t))})):i}))}))},t.Yb=function(e,t){Dh(this);var n=this;return Rh(this,(function(i){if(i){var r=Kl.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(r)}return Ih(n).createUserWithEmailAndPassword(e,t)}))},t.ac=function(e){Dh(this);var t=this;return Rh(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Fh(t,n,e)})):Ih(t).signInWithCredential(e)}))},t.dc=function(e){Dh(this);var t=this,n=this.i;return this.i=null,Rh(this,(function(n){return n&&!to(kh(t))?n.linkWithRedirect(e):Ih(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},t.cc=function(e,t){Dh(this);var n=this;return Rh(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new Rr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fh(n,e);throw e}))})):Eh(n).signInWithPhoneNumber(e,t).then((function(e){return new Rr(e)}))}))},t.$b=function(){return Dh(this),Eh(this).signInAnonymously()},t.Xb=function(e,t){return Dh(this),Ih(this).signInWithEmailAndPassword(e,t)},a(Bh,Dc),Bh.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Pu(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},Bh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},R(Bh.prototype,{l:Ll,H:xl,u:Dl,B:Ml,j:Ul,M:kl,w:Cl}),a(jh,Dc),jh.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?Ht("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var s=i[r];nc(e,s,A(n,Zu(s,"tenantId")))}}(this,this.i),Dc.prototype.v.call(this)},jh.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},a(Hh,Dc);var Yh=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Jh="optionFirst",Xh={pc:Jh,oc:"identifierFirst"},Qh="*";function Zh(e,t){var n=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new qh(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function ed(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(t=Zh.prototype).Ub=function(e,t){var n=this;ed(this);var i=e.apiKey;return new Fi((function(e,r){if(n.a.hasOwnProperty(i)){var s=Wh(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xh)if(Xh[t]===e)return Xh[t];return Jh}(n.a[i])===Jh){var o=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Qh])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Gr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&o.push(e)}));var a=function(t){t={tenantId:t,providerIds:Kh(n.a[i],t||"_")},e(t)};if(1===o.length)return void a(o[0].tenantId);n.g=new jh((function(e){ed(n),s&&s(),a(e)}),o,Vh(n.a[i]),$h(n.a[i]))}else n.g=new Bh((function(){var r=n.g.j();if(r){for(var o=0;o<t.length;o++){var a=Kh(n.a[i],t[o]||"_",r);if(0!==a.length)return r={tenantId:t[o],providerIds:a,email:r},ed(n),s&&s(),void e(r)}n.g.a(On({code:"no-matching-tenant-for-email"}).toString())}}),Vh(n.a[i]),$h(n.a[i]));n.g.render(n.s),(r=Wh(n.a[i]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",n.pb(c),r(c)}}))},t.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;zh(this.a[e],t||"_");try{this.i=Kl.app(n).auth()}catch(r){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=Kl.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},t.Zb=function(e,t){var n=this;return new Fi((function(i,r){function s(t,i){n.j=new mh(e),Th(n.j,n.s,t,i)}var o=e.app.options.apiKey;n.a.hasOwnProperty(o)||r(Error("Invalid project configuration: API key is invalid!"));var a=Gh(n.a[o],e.tenantId||"_",t&&t.providerIds);ed(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var c,l=Wh(n.a[o]).signInUiShown||null,u=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=qt("firebaseui-id-page-callback",n.s))&&ic(t),n.h=new Hh,n.h.render(n.s)):u||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),u=!0,l&&l(e.tenantId))},a.callbacks=r,a.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),n.j?n.j.Wa().then((function(){s(a,c)})):s(a,c)}))},t.reset=function(){var e=this;return $i().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,ed(e)}))},t.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){ed(e),e.h=new Hh,e.g=e.h,e.h.render(e.s),e.A=null}),500))},t.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},t.Bb=function(){return ed(this),this.g=new zl,this.g.render(this.s),$i()},t.pb=function(e){var t,n=this,i=On({code:e.code}).toString()||e.message;ed(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Xl(i,t),this.g.render(this.s)},t.Rb=function(e){var t=this;return $i().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(zh(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=Wh(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Zh),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Zh.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Zh.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Zh.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Zh.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Zh.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Zh.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Zh.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Zh.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Zh.prototype.Rb),O("firebaseui.auth.AuthUI",mh),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=bh(e),vh[e]?vh[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",mh.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",mh.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",mh.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",mh.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",mh.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",mh.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",mh.prototype.nb),O("firebaseui.auth.AuthUIError",xn),O("firebaseui.auth.AuthUIError.prototype.toJSON",xn.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",na),O("firebaseui.auth.CredentialHelper.NONE",ia),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Fi.prototype.catch=Fi.prototype.Ca,Fi.prototype.finally=Fi.prototype.fc}).apply(void 0!==e?e:"undefined"!=typeof self?self:window)}.apply(void 0!==e?e:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=n(Ap));var xp=firebaseui.auth;jp();const Dp=os({apiKey:"AIzaSyDIoIRzEVLYUAacFuhtdxkAGV2NgLE6g88",authDomain:"filmoteka-by-10x.firebaseapp.com",projectId:"filmoteka-by-10x",storageBucket:"filmoteka-by-10x.appspot.com",messagingSenderId:"584362052438",appId:"1:584362052438:web:cf4a6cf976e80465e364f7",databaseURL:"https://filmoteka-by-10x-default-rtdb.europe-west1.firebasedatabase.app/"}),Mp=function(e=as()){const t=es(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=es(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ir(n.getOptions(),null!=t?t:{}))return e;du(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Df,persistence:[Md,Id,kd]}),i=qi("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Bf)return;const i=null==t?void 0:t.token;jf!==i&&(jf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){mr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){mr(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=ji("auth");return s&&fh(n,`http://${s}`),n}(Dp);!async function(){e=Mp,t=e=>{e?(jp(),c.loginButton.classList.add("visually-hidden"),c.logoutButton.classList.remove("visually-hidden"),function(e){const{displayName:t,uid:n,email:i}=e;console.log("You're logged in as",t),console.log("Your uid:",n),console.log("Your email:",i)}(e)):(c.logoutButton.classList.add("visually-hidden"),c.loginButton.classList.remove("visually-hidden"),console.log("You're not logged in."))},mr(e).onAuthStateChanged(t,n,i);var e,t,n,i}();const Up={signInFlow:"popup",signInOptions:[Ph.PROVIDER_ID,Ch.PROVIDER_ID]},Fp=new xp.AuthUI(Mp);function Bp(){Fp.start(c.authForm,Up),c.auth.classList.remove("visually-hidden")}function jp(){c.auth.classList.add("visually-hidden")}c.logoutButton.addEventListener("click",(async function(){await(e=Mp,mr(e).signOut());var e})),c.loginButton.addEventListener("click",Bp),c.authCancelButton.addEventListener("click",(()=>{jp()})),c.myLibraryLink.addEventListener("click",(()=>{Mp.currentUser||Bp()}));const Hp=new Hn;!function(e=as(),t){const n=es(e,"database").getImmediate({identifier:t}),i=Hi("database");i&&function(e,t,n,i={}){(e=mr(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Fs("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Fs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new eo(eo.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Vi(i.mockUserToken,e.app.options.projectId);s=new eo(t)}!function(e,t,n,i){e.repoInfo_=new no(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...i)}(Dp);var qp=new WeakMap;class Wp{includes(e){return this.items.includes(e)}getIds(){try{this.items=JSON.parse(localStorage.getItem(n(zn)(this,qp))),this.items instanceof Array||(this.items=[])}catch{this.items=[]}return this.items}addId(e){this.includes(e)||(this.items.push(e),localStorage.setItem(n(zn)(this,qp),JSON.stringify(this.items)))}removeId(e){this.items=this.items.filter((t=>t!==e)),localStorage.setItem(n(zn)(this,qp),JSON.stringify(this.items))}async getItems(e){const t=20*(e-1),n=t+20,i=this.items.slice(t,n);return console.log("this.iems",this.items),console.log("iems",i),{page:e,total_pages:Math.ceil(this.items.length/20),total_results:this.items.length,results:(await Hp.getFilmMassiveById(i)).map((e=>(e.genre_ids=e.genres.map((({id:e})=>e)),e)))}}constructor(e){n(Jn)(this,qp,{writable:!0,value:void 0}),n(Zn)(this,qp,e),this.items=[],this.getIds()}}const Vp=new Wp("watched"),$p=new Wp("queued"),zp=Vp.getItems.bind(Vp),Kp=(Vp.getIds.bind(Vp),Vp.includes.bind(Vp),Vp.addId.bind(Vp),Vp.removeId.bind(Vp),$p.getItems.bind($p)),Gp=($p.getIds.bind($p),$p.includes.bind($p),$p.addId.bind($p),$p.removeId.bind($p),new Hn);function Yp(e){e.target.classList.add("current"),e.target.blur()}function Jp(e){e.preventDefault(),c.header.classList.remove("header--my-library"),c.myLibraryLink.classList.remove("current"),Yp(e),c.formSearch.classList.remove("visually-hidden"),c.headerButtons.forEach((e=>{e.classList.add("visually-hidden")})),I(Gp.getTrendingFilmsByPage.bind(Gp))}c.myLibraryLink.addEventListener("click",(function(e){e.preventDefault(),c.header.classList.add("header--my-library"),c.homeLink.classList.remove("current"),Yp(e),c.formSearch.classList.add("visually-hidden"),c.headerButtons.forEach((e=>{e.classList.remove("visually-hidden")})),I(zp)})),c.headerButtons[0].addEventListener("click",(function(e){c.headerButtons[1].classList.remove("current"),Yp(e)})),c.headerButtons[1].addEventListener("click",(function(e){c.headerButtons[0].classList.remove("current"),Yp(e)})),c.watchedButton.addEventListener("click",I.bind(null,zp)),c.queueButton.addEventListener("click",I.bind(null,Kp)),c.homeLink.addEventListener("click",Jp),c.logo.addEventListener("click",Jp),I(Gp.getTrendingFilmsByPage.bind(Gp));const Xp=new Hn,Qp={galleryQueueBtn:document.querySelector('button[data-activ="queue"]'),libMenu:document.querySelector("[data-modal]"),libMenuCloseBtn:document.querySelector(".lib_modal-close-btn"),bestCardContainer:document.querySelector(".proposed-card"),addToQueueBtn:document.querySelector(".addToQueue")};function Zp(){Qp.libMenu.classList.add("is-hidden"),Qp.addToQueueBtn.classList.add("is-hidden"),Qp.libMenuCloseBtn.removeEventListener("click",Zp),window.removeEventListener("keydown",em),window.removeEventListener("click",tm),Qp.bestCardContainer.innerHTML=""}function em(e){console.log(e),"Escape"===e.code&&(Qp.libMenu.classList.add("is-hidden"),Qp.addToQueueBtn.classList.add("is-hidden"),Qp.libMenuCloseBtn.removeEventListener("click",Zp),window.removeEventListener("keydown",em),window.removeEventListener("click",tm),Qp.bestCardContainer.innerHTML="")}function tm(e){e.target.classList.contains("backdrop")&&(Qp.libMenu.classList.add("is-hidden"),Qp.addToQueueBtn.classList.add("is-hidden"),Qp.libMenuCloseBtn.removeEventListener("click",Zp),window.removeEventListener("keydown",em),window.removeEventListener("click",tm),Qp.bestCardContainer.innerHTML="")}Qp.galleryQueueBtn.addEventListener("click",(function(){Qp.libMenu.classList.remove("is-hidden"),Qp.addToQueueBtn.classList.remove("is-hidden"),Qp.libMenuCloseBtn.addEventListener("click",Zp),window.addEventListener("keydown",em),window.addEventListener("click",tm),async function(){let e=function({id:e,poster_path:t,original_title:n,release_date:i,genre_ids:r,vote_average:s}){const a=`https://image.tmdb.org/t/p/original/${t}`,c=i.slice(0,4),l=r.map((e=>o.find((t=>t.id===e)))).map((({name:e})=>e)).join(", "),u=s.toFixed(2);return`<p class="lib-modal-content__text-small">you might like this movie:</p>\n          <article class="card-proposed" data-id=${e}>\n            <span class="card-rating">${u}</span>\n            <a href="" class="card_link">\n              <img class="card_img" width="394" src=${a} alt="{original_title}">\n            </a>\n            <div class="card-wrap">\n              <h3 class="card-name">${n}</h3>\n              <p class="card-genres">${l} | ${c}</p>\n            </div>\n          </article>`}((await Xp.getTrendingFilms())[0]);Qp.bestCardContainer.innerHTML=e,console.log(e)}()}));new Hn;const nm={galleryWatchedBtn:document.querySelector('button[data-activ="watched"]'),libMenu:document.querySelector("[data-modal]"),libMenuCloseBtn:document.querySelector(".lib_modal-close-btn"),bestCardContainer:document.querySelector(".proposed-card")};function im(){nm.libMenu.classList.add("is-hidden"),nm.libMenuCloseBtn.removeEventListener("click",im),window.removeEventListener("keydown",rm),window.removeEventListener("click",sm)}function rm(e){console.log(e),"Escape"===e.code&&(nm.libMenu.classList.add("is-hidden"),nm.libMenuCloseBtn.removeEventListener("click",im),window.removeEventListener("keydown",rm),window.removeEventListener("click",sm))}function sm(e){e.target.classList.contains("backdrop")&&(nm.libMenu.classList.add("is-hidden"),nm.libMenuCloseBtn.removeEventListener("click",im),window.removeEventListener("keydown",rm),window.removeEventListener("click",sm))}nm.galleryWatchedBtn.addEventListener("click",(function(){nm.libMenu.classList.remove("is-hidden"),nm.libMenuCloseBtn.addEventListener("click",im),window.addEventListener("keydown",rm),window.addEventListener("click",sm)}));
//# sourceMappingURL=index.df8c415d.js.map
