var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("auIM8");const n=document.querySelector(".days"),c=document.querySelector(".current-date"),o=document.querySelectorAll(".calendar-icons span");let l=new Date,s=(l.getDate(),l.getMonth()),i=l.getFullYear();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden-wrapper"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden-wrapper"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const d=["January","February","March","April","May","June","July","August","September","October","November","December"],u=e=>{let t=new Date(i,s,1).getDay(),r=new Date(i,s+1,0).getDate(),a=new Date(i,s,r).getDay(),o=new Date(i,s,0).getDate(),u="";for(let e=t;e>0;e--)u+=`<li style="color: silver" class="inactive">${o-e+1}</li>`;for(let e=1;e<=r;e++){u+=`<li class="${e===l.getDate()&&s===(new Date).getMonth()&&i===(new Date).getFullYear()}">${e}</li>`}for(let e=a;e<6;e++)u+=`<li style="color: silver" class="inactive">${e-a+1}</li>`;c.innerText=`${d[s]} ${i}`,n.innerHTML=u;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let r=(s+1).toString();document.getElementById("input-picker").value=i+"/"+r.padStart(2,"0")+"/"+t.padStart(2,"0"),localStorage.setItem("VALUE",JSON.stringify(t));let a=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(a)),document.querySelector("[data-modal]").classList.add("is-hidden-wrapper"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};u();document.querySelector(".days");o.forEach((e=>{e.addEventListener("click",(()=>{s="prev"===e.id?s-1:s+1,s<0||s>11?(l=new Date(i,s,(new Date).getDate()),i=l.getFullYear(),s=l.getMonth()):l=new Date,u();let t=JSON.parse(localStorage.getItem("VALUE"));n.childNodes.forEach((e=>{e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");document.querySelector(".category__others-container").addEventListener("click",(function(e){e.currentTarget.classList.toggle("is-open")}));new(0,(g=a("lAkq4")).default);a("8FnLx");var m=a("hbtSd"),p=a("du83Z"),g=a("lAkq4");m=a("hbtSd");window.matchMedia("screen and (max-width: 767px)").matches,window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,window.matchMedia("screen and (min-width: 1280px)").matches,document.querySelector(".current-date");const h=new(0,m.default),y=new class{askGeo(){window.navigator.geolocation.getCurrentPosition(this.onSuccess.bind(this))}onSuccess(e){const t=document.querySelector(".weather__temp"),r=document.querySelector(".weather__descr"),a=document.querySelector(".city-name"),n=document.querySelector(".weather__img"),c=document.querySelector(".day-week"),o=document.querySelector(".local-date");this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,this.getWeather(this.latitude,this.longitude).then((e=>{a.textContent=e.name,t.textContent=`${(e.main.temp/100).toFixed()}°`,r.textContent=e.weather[0].main,n.setAttribute("src",`https://openweathermap.org/img/wn/${e.weather[0].icon}@4x.png`);const l=(new Date).toDateString();c.textContent=l.slice(0,4),o.textContent=l.slice(4,l.length)}))}async getWeather(e,t){const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${this.KEY}&lat=${e}&lon=${t}`);return await r.json()}renderWeatherElement(e){const{weather:t,main:{temp:r},name:a}=e,n=Math.abs((r/100).toFixed()),c=(new Date).toDateString(),o=c.slice(0,4),l=c.slice(4,c.length);this.markup=`<li class="weather list-news__item">\n        <div class="weather__info">\n        <span class="weather__temp">${n}°</span>\n        <div>\n        <span class="weather__descr">${t[0].main}</span>\n        <div class="weather__city">\n        <svg viewBox="0 0 37 32">\n        <path\n        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n        </path>\n        </svg>\n        <span class="city-name">${a}</span>\n        </div>\n        </div>\n        </div>\n        <img class="weather__img" src="https://openweathermap.org/img/wn/${t[0].icon}@4x.png" alt="Weather icon">\n        <div class="weather__date">\n        <p class="day-week">${o}</p>\n        <p class="local-date">${l}</p>\n        </div>\n        <a class="weather__link" href="https://ua.sinoptik.ua/" target="_blank" rel="noreferrer noopener">weather for week</a>\n        </li>`}constructor(){this.KEY="03c5762bdc5b910c3c4c3d1ef326933c",this.latitude=50.4333,this.longitude=30.5167,this.markup=""}},w=new(0,g.default),f=new(0,p.default),v=document.querySelector(".list-news"),_=document.querySelector(".search-field"),S=document.querySelector(".prev__page"),b=document.querySelector(".next__page"),L=document.querySelector(".category__list-bt"),q=(document.querySelector(".category__item-bt-arrow"),document.querySelector(".filter-category__list"));document.querySelector(".category__others-container");async function A(e){if(w.currentPage=1,e.target.hasAttribute("name")){f.category=encodeURIComponent(e.target.getAttribute("name").toLowerCase()),console.log(f.category);try{const e=await f.fetchNewsByCategory();console.log(e.results),k(e.results),w.renderCategoryNewsQX(h.popularArr,v)}catch(e){console.log(e)}}}function k(e){h.popularArr=[];let t,r,a,n,c,o="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";e.map((e=>{""!==_.elements.searchQuery.value?(0!==e.multimedia.length&&(o=`https://static01.nyt.com/${e.multimedia[0].url}`),t=e.section_name,r=e.abstract,a=e.lead_paragraph,n=e.pub_date,c=e.web_url):""!==f.category?(e.multimedia&&(o=e.multimedia[1].url),t=e.section,r=e.title,a=e.abstract,n=e.published_date,c=e.url):(0!==e.media.length&&(o=e.media[0]["media-metadata"][2].url),t=e.section,r=e.title,a=e.abstract,n=e.published_date,c=e.url),h.popularArr.push({category:t,title:r,desc:a,date:n,url:c,imageURL:o})}))}document.querySelector(".days").addEventListener("click",(function(e){f.date=e.target.textContent})),L.addEventListener("click",A),q.addEventListener("click",A),S.addEventListener("click",(async function(){if(""!==_.elements.searchQuery.value){if(0===f.currentPage)return;f.decrementPage();try{k((await f.fetchNewsBySearch()).response.docs),w.renderNewsbyASearchQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}}else if(""!==f.category){if(1===w.currentPage)return;w.currentPage-=1;try{k((await f.fetchNewsByCategory()).results),w.renderCategoryNewsQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}}else{if(1===w.currentPage)return;w.currentPage-=1;try{k((await f.fetchNewsByMostPopular()).results),w.renderPopularNewsQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}}})),b.addEventListener("click",(async function(){if(""!==_.elements.searchQuery.value)try{f.incrementPage();const e=await f.fetchNewsBySearch();console.log(e.response),k(e.response.docs),w.renderNewsbyASearchQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}else if(""!==f.category){if(w.currentPage===w.maxPages)return;w.currentPage+=1;try{k((await f.fetchNewsByCategory()).results),w.renderCategoryNewsQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}}else{if(w.currentPage===w.maxPages)return;w.currentPage+=1;try{k((await f.fetchNewsByMostPopular()).results),w.renderPopularNewsQX(h.popularArr,v),scroll(0,0)}catch(e){console.log(e)}}})),_.addEventListener("submit",(async function(e){e.preventDefault(),w.currentPage=1,f.searchQuery=encodeURIComponent(`${e.currentTarget.elements.searchQuery.value}`);try{k((await f.fetchNewsBySearch()).response.docs),w.renderNewsbyASearchQX(h.popularArr,v),console.log(h.popularArr),scroll(0,0)}catch(e){console.log(e)}})),v.addEventListener("click",h.onAddToFavoriteClick.bind(h)),v.addEventListener("click",h.onReadMoreClick.bind(h)),async function(){await y.getWeather(y.latitude,y.longitude).then((e=>{y.renderWeatherElement(e),w.weatherMarkup=y.markup})).catch((e=>console.log(e))),f.fetchNewsByMostPopular().then((e=>{y.askGeo(),k(e.results),w.renderPopularNewsQX(h.popularArr,v)})).catch((e=>console.log(e)))}(),async function(){const e=await f.fetchCategoriesList();for(let t=0;t<6;t+=1)L.children[t].textContent=`${e[t].display_name}`,L.children[t].setAttribute("name",`${e[t].display_name}`);for(let t=6;t<=49;t+=1){const r=document.createElement("li"),a=document.createElement("button");r.classList.add("filter-category__item"),a.classList.add("filter-category__button"),r.append(a),a.textContent=`${e[t].display_name}`,a.setAttribute("name",`${e[t].display_name}`),q.append(r)}}();
//# sourceMappingURL=index.e7a12792.js.map