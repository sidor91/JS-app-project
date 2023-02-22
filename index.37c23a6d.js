const e=window.matchMedia("screen and (max-width: 767px)").matches,t=window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,s=window.matchMedia("screen and (min-width: 1280px)").matches;window.matchMedia("screen and (max-width: 767px)").matches,window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,window.matchMedia("screen and (min-width: 1280px)").matches;const a=new class{renderPopularNews(a,n){console.log(a),!0===e?(this.lastElem=4*this.currentPage,this.firstElem=this.lastElem-4,this.maxPages=Math.ceil(a.length/4)):!0===t&&(this.lastElem=7*this.currentPage,this.firstElem=this.lastElem-7,this.maxPages=Math.ceil(a.length/8));const c=a.slice(this.firstElem,this.lastElem).map((({title:e,abstract:t,media:s})=>{let a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return 0!==s.length&&(a=s[0]["media-metadata"][2].url),`<div class="news__item">\n      <img src=${a}\n alt="image" class="news__image"/>\n      <div class="info">\n     <h3>${e}</h3>\n      <p>${t}</p>\n      </div>\n  </div>`}));if(!0===e){c.splice(0,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===t){c.splice(1,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===s){c.splice(2,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}}renderNewsbyASearch(a,n){console.log(a);const c=a.map((({abstract:e,lead_paragraph:t,multimedia:s})=>{let a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return 0!==s.length&&(a=`https://static01.nyt.com/${s[0].url}`),`<div class="news__item">\n    <img src=${a} alt="image" class="news__image"/>\n      <div class="info">\n     <h3>${e}</h3>\n      <p>${t}</p>\n      </div>\n  </div>\n      `}));if(!0===e){c.splice(0,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===t){c.splice(1,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===s){c.splice(2,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}}renderCategoryNews(a,n){console.log(a),!0===e?(this.lastElem=4*this.currentPage,this.firstElem=this.lastElem-4,this.maxPages=Math.ceil(a.length/4)):!0===t&&(this.lastElem=7*this.currentPage,this.firstElem=this.lastElem-7,this.maxPages=Math.ceil(a.length/8));const c=a.slice(this.firstElem,this.lastElem).map((({title:e,abstract:t,multimedia:s})=>{let a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return s&&(a=`${s[1].url}`),`<div class="news__item">\n      <img src=${a}\n alt="image" class="news__image"/>\n      <div class="info">\n     <h3>${e}</h3>\n      <p>${t}</p>\n      </div>\n  </div>`}));if(!0===e){c.splice(0,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===t){c.splice(1,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}else if(!0===s){c.splice(2,0,'<div class="weather"></div>');const e=c.map((e=>e)).join("");n.innerHTML=e}}constructor(){this.currentPage=1,this.lastElem=8,this.firstElem=0,this.maxPages=3}},n=new class{async fetchNewsBySearch(){return(await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&page=${this.page}&api-key=${this.key}`)).json()}async fetchCategoriesList(){const e=await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${this.key}`);return(await e.json()).results}async fetchNewsByCategory(){return(await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${this.category}.json?api-key=${this.key}`)).json()}async fetchNewsByMostPopular(){const e=await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${this.key}`);return await e.json()}incrementPage(){this.page+=1}decrementPage(){this.page>0&&(this.page-=1)}resetPage(){this.page=0}constructor(){this.searchQuery="",this.category="",this.date="",this.key="ttibAwM4O4DleGl9I7vunskaBg8WG7A3",this.page=0}},c=document.querySelector(".news-list"),r=document.querySelector(".search-form"),i=document.querySelector(".prev__page"),o=document.querySelector(".next__page"),l=document.querySelector(".categories__list"),h=document.querySelector(".other-categories__button"),d=document.querySelector(".other-categories__thumb");document.querySelector(".weather");async function m(e){if(a.currentPage=1,e.target.hasAttribute("name")){n.category=encodeURIComponent(e.target.getAttribute("name").toLowerCase()),console.log(n.category);try{const e=await n.fetchNewsByCategory();a.renderCategoryNews(e.results,c)}catch(e){console.log(e)}}}l.addEventListener("click",m),d.addEventListener("click",m),h.addEventListener("click",(function(){d.classList.toggle("is-hidden")})),i.addEventListener("click",(async function(){if(""!==r.elements.searchQuery.value){if(0===n.currentPage)return;n.decrementPage();try{const e=await n.fetchNewsBySearch();a.renderNewsbyASearch(e.response.docs,c),scroll(0,0)}catch(e){console.log(e)}}else if(""!==n.category){if(1===a.currentPage)return;a.currentPage-=1;try{const e=await n.fetchNewsByCategory();a.renderCategoryNews(e.results,c),scroll(0,0)}catch(e){console.log(e)}}else{if(1===a.currentPage)return;a.currentPage-=1;try{const e=await n.fetchNewsByMostPopular();a.renderPopularNews(e.results,c),scroll(0,0)}catch(e){console.log(e)}}})),o.addEventListener("click",(async function(){if(""!==r.elements.searchQuery.value)try{n.incrementPage();const e=await n.fetchNewsBySearch();console.log(e.response),a.renderNewsbyASearch(e.response.docs,c),scroll(0,0)}catch(e){console.log(e)}else if(""!==n.category){if(a.currentPage===a.maxPages)return;a.currentPage+=1;try{const e=await n.fetchNewsByCategory();a.renderCategoryNews(e.results,c),scroll(0,0)}catch(e){console.log(e)}}else{if(a.currentPage===a.maxPages)return;a.currentPage+=1;try{const e=await n.fetchNewsByMostPopular();a.renderPopularNews(e.results,c),scroll(0,0)}catch(e){console.log(e)}}})),r.addEventListener("submit",(async function(e){e.preventDefault(),a.currentPage=1,n.searchQuery=encodeURIComponent(`${e.currentTarget.elements.searchQuery.value}`);try{const e=await n.fetchNewsBySearch();a.renderNewsbyASearch(e.response.docs,c),scroll(0,0)}catch(e){console.log(e)}})),document.addEventListener("click",(function(e){e.target!==d&&e.target!==h&&d.classList.add("is-hidden")})),n.fetchNewsByMostPopular().then((e=>a.renderPopularNews(e.results,c))).catch((e=>console.log(e))),async function(){const e=await n.fetchCategoriesList();for(let t=0;t<6;t+=1)l.children[t].textContent=`${e[t].display_name}`,l.children[t].setAttribute("name",`${e[t].display_name}`);for(let t=6;t<=49;t+=1){const s=document.createElement("button");s.classList.add("other-category__item"),s.textContent=`${e[t].display_name}`,s.setAttribute("name",`${e[t].display_name}`),d.append(s)}}();
//# sourceMappingURL=index.37c23a6d.js.map