var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);const n=document.querySelector(".switch-checkbox"),c=document.querySelector("body"),o=document.querySelector(".theme__dark"),s=document.querySelector(".theme__light");n.addEventListener("click",(function(){c.classList.toggle("darkMode"),o.classList.toggle("opacityForDark"),s.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(c.classList.add("darkMode"),n.checked=!0)}catch(e){}}();const l=document.querySelector(".days"),i=document.querySelector(".current-date"),d=document.querySelectorAll(".calendar-icons span");let u=new Date,h=(u.getDate(),u.getMonth()),g=u.getFullYear();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hidden-wrapper"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(t){document.getElementById("input-picker").value;if(t.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&(e.modal.classList.add("is-hidden-wrapper"),e.input.classList.remove("isActive"),e.arrow.classList.remove("switched"),e.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}))})();const m=["January","February","March","April","May","June","July","August","September","October","November","December"],p=e=>{let t=new Date(g,h,1).getDay(),a=new Date(g,h+1,0).getDate(),r=new Date(g,h,a).getDay(),n=new Date(g,h,0).getDate(),c="";for(let e=t;e>0;e--)c+=`<li style="color: silver" class="inactive">${n-e+1}</li>`;for(let e=1;e<=a;e++){c+=`<li class="${e===u.getDate()&&h===(new Date).getMonth()&&g===(new Date).getFullYear()}">${e}</li>`}for(let e=r;e<6;e++)c+=`<li style="color: silver" class="inactive">${e-r+1}</li>`;i.innerText=`${m[h]} ${g}`,l.innerHTML=c;document.querySelector(".days").addEventListener("click",(e=>{[...e.currentTarget.children].forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active");let t=e.target.textContent;if(e.target.textContent.length>10)return;let a=(h+1).toString();document.getElementById("input-picker").value=g+"/"+a.padStart(2,"0")+"/"+t.padStart(2,"0"),localStorage.setItem("VALUE",JSON.stringify(t));let r=document.querySelector(".calendar-input").value;localStorage.setItem("date",JSON.stringify(r)),document.querySelector("[data-modal]").classList.add("is-hidden-wrapper"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}))};p();document.querySelector(".days");d.forEach((e=>{e.addEventListener("click",(()=>{h="prev"===e.id?h-1:h+1,h<0||h>11?(u=new Date(g,h,(new Date).getDate()),g=u.getFullYear(),h=u.getMonth()):u=new Date,p();let t=JSON.parse(localStorage.getItem("VALUE"));l.childNodes.forEach((e=>{e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE"),localStorage.removeItem("date");document.querySelector(".category__others-container").addEventListener("click",(function(e){e.currentTarget.classList.toggle("is-open")}));new(0,(w=r("lAkq4")).default);r("8FnLx");var y=r("hbtSd");var w=r("lAkq4");y=r("hbtSd");window.matchMedia("screen and (max-width: 767px)").matches,window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,window.matchMedia("screen and (min-width: 1280px)").matches,document.querySelector(".current-date");const f=new(0,y.default),v=new class{askGeo(){window.navigator.geolocation.getCurrentPosition(this.onSuccess.bind(this))}onSuccess(e){const t=document.querySelector(".weather__temp"),a=document.querySelector(".weather__descr"),r=document.querySelector(".city-name"),n=document.querySelector(".weather__img"),c=document.querySelector(".day-week"),o=document.querySelector(".local-date");this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,this.getWeather(this.latitude,this.longitude).then((e=>{r.textContent=e.name,t.textContent=`${(e.main.temp/100).toFixed()}°`,a.textContent=e.weather[0].main,n.setAttribute("src",`https://openweathermap.org/img/wn/${e.weather[0].icon}@4x.png`);const s=(new Date).toDateString();c.textContent=s.slice(0,4),o.textContent=s.slice(4,s.length)}))}async getWeather(e,t){const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${this.KEY}&lat=${e}&lon=${t}`);return await a.json()}renderWeatherElement(e){const{weather:t,main:{temp:a},name:r}=e,n=Math.abs((a/100).toFixed()),c=(new Date).toDateString(),o=c.slice(0,4),s=c.slice(4,c.length);this.markup=`<li class="weather list-news__item">\n        <div class="weather__info">\n        <span class="weather__temp">${n}°</span>\n        <div>\n        <span class="weather__descr">${t[0].main}</span>\n        <div class="weather__city">\n        <svg viewBox="0 0 37 32">\n        <path\n        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n        </path>\n        </svg>\n        <span class="city-name">${r}</span>\n        </div>\n        </div>\n        </div>\n        <img class="weather__img" src="https://openweathermap.org/img/wn/${t[0].icon}@4x.png" alt="Weather icon">\n        <div class="weather__date">\n        <p class="day-week">${o}</p>\n        <p class="local-date">${s}</p>\n        </div>\n        <a class="weather__link" href="https://ua.sinoptik.ua/" target="_blank" rel="noreferrer noopener">weather for week</a>\n        </li>`}constructor(){this.KEY="03c5762bdc5b910c3c4c3d1ef326933c",this.latitude=50.4333,this.longitude=30.5167,this.markup=""}},_=new(0,w.default),S=new class{async fetchNewsBySearch(){return(await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&page=${this.page}&api-key=${this.key}`)).json()}async fetchCategoriesList(){const e=await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${this.key}`);return(await e.json()).results}async fetchNewsByCategory(){return(await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${this.category}.json?api-key=${this.key}`)).json()}async fetchNewsByMostPopular(){const e=await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${this.key}`);return await e.json()}incrementPage(){this.page+=1}decrementPage(){this.page>0&&(this.page-=1)}resetPage(){this.page=0}constructor(){this.searchQuery="",this.category="",this.date="",this.key="ttibAwM4O4DleGl9I7vunskaBg8WG7A3",this.page=0}},b=document.querySelector(".list-news"),k=document.querySelector(".search-field"),L=document.querySelector(".prev__page"),q=document.querySelector(".next__page"),A=document.querySelector(".category__list-bt"),x=(document.querySelector(".category__item-bt-arrow"),document.querySelector(".filter-category__list"));document.querySelector(".category__others-container");async function E(e){if(_.currentPage=1,e.target.hasAttribute("name")){S.category=encodeURIComponent(e.target.getAttribute("name").toLowerCase()),console.log(S.category);try{const e=await S.fetchNewsByCategory();_.renderCategoryNews(e.results,b)}catch(e){console.log(e)}}}function $(e){f.popularArr=[],e.map((e=>{if(""!==k.elements.searchQuery.value)if(0!==e.multimedia.length){const t="https://static01.nyt.com/";f.popularArr.push({id:e.id||"",category:e.section_name,title:e.abstract.trim(),desc:e.lead_paragraph,date:e.pub_date,url:e.web_url,imageURL:`${t}${e.multimedia[0].url}`})}else f.popularArr.push({id:e.id||"",category:e.section_name,title:e.abstract.trim(),desc:e.lead_paragraph,date:e.pub_date,url:e.web_url,imageURL:"https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c"});else Object.values(e.media).length?f.popularArr.push({id:e.id,category:e.section,title:e.title,desc:e.abstract,date:e.published_date,url:e.url,imageURL:e.media[0]["media-metadata"][2].url}):f.popularArr.push({id:e.id,title:e.title,desc:e.abstract,date:e.published_date,category:e.section,url:e.url,imageURL:"https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c"})}))}document.querySelector(".days").addEventListener("click",(function(e){S.date=e.target.textContent})),A.addEventListener("click",E),x.addEventListener("click",E),L.addEventListener("click",(async function(){if(""!==k.elements.searchQuery.value){if(0===S.currentPage)return;S.decrementPage();try{$((await S.fetchNewsBySearch()).response.docs),_.renderNewsbyASearchQX(f.popularArr,b),scroll(0,0)}catch(e){console.log(e)}}else if(""!==S.category){if(1===_.currentPage)return;_.currentPage-=1;try{const e=await S.fetchNewsByCategory();_.renderCategoryNews(e.results,b),scroll(0,0)}catch(e){console.log(e)}}else{if(1===_.currentPage)return;_.currentPage-=1;try{$((await S.fetchNewsByMostPopular()).results),_.renderPopularNewsQX(f.popularArr,b),scroll(0,0)}catch(e){console.log(e)}}})),q.addEventListener("click",(async function(){if(""!==k.elements.searchQuery.value)try{S.incrementPage();const e=await S.fetchNewsBySearch();console.log(e.response),$(e.response.docs),_.renderNewsbyASearchQX(f.popularArr,b),scroll(0,0)}catch(e){console.log(e)}else if(""!==S.category){if(_.currentPage===_.maxPages)return;_.currentPage+=1;try{const e=await S.fetchNewsByCategory();_.renderCategoryNews(e.results,b),scroll(0,0)}catch(e){console.log(e)}}else{if(_.currentPage===_.maxPages)return;_.currentPage+=1;try{$((await S.fetchNewsByMostPopular()).results),_.renderPopularNewsQX(f.popularArr,b),scroll(0,0)}catch(e){console.log(e)}}})),k.addEventListener("submit",(async function(e){e.preventDefault(),_.currentPage=1,S.searchQuery=encodeURIComponent(`${e.currentTarget.elements.searchQuery.value}`);try{$((await S.fetchNewsBySearch()).response.docs),_.renderNewsbyASearchQX(f.popularArr,b),console.log(f.popularArr),scroll(0,0)}catch(e){console.log(e)}})),b.addEventListener("click",f.onAddToFavoriteClick.bind(f)),b.addEventListener("click",f.onReadMoreClick.bind(f)),async function(){await v.getWeather(v.latitude,v.longitude).then((e=>{v.renderWeatherElement(e),_.weatherMarkup=v.markup})).catch((e=>console.log(e))),S.fetchNewsByMostPopular().then((e=>{v.askGeo(),$(e.results),_.renderPopularNewsQX(f.popularArr,b)})).catch((e=>console.log(e)))}(),async function(){const e=await S.fetchCategoriesList();for(let t=0;t<6;t+=1)A.children[t].textContent=`${e[t].display_name}`,A.children[t].setAttribute("name",`${e[t].display_name}`);for(let t=6;t<=49;t+=1){const a=document.createElement("li"),r=document.createElement("button");a.classList.add("filter-category__item"),r.classList.add("filter-category__button"),a.append(r),r.textContent=`${e[t].display_name}`,r.setAttribute("name",`${e[t].display_name}`),x.append(a)}}();
//# sourceMappingURL=index.e3955a9d.js.map