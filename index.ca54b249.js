!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function r(e,t,r,n,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function i(e){r(o,a,c,i,s,"next",e)}function s(e){r(o,a,c,i,s,"throw",e)}i(void 0)}))}};var n={},a=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,c=Object.create(a.prototype),o=new N(n||[]);return c._invoke=function(e,t,r){var n=h;return function(a,c){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw c;return S()}for(r.method=a,r.arg=c;;){var o=r.delegate;if(o){var i=E(o,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(e,r,o),c}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function y(){}function g(){}var w={};s(w,c,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(M([])));x&&x!==r&&n.call(x,c)&&(w=x);var k=g.prototype=v.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,c,o,i){var s=l(e[a],e,c);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,i)}))}i(s.arg)}var a;this._invoke=function(e,n){function c(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(c,c):c()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function M(e){if(e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:t,done:!0}}return y.prototype=g,s(k,"constructor",g),s(g,"constructor",y),y.displayName=s(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,i,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(L.prototype),s(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,a,c){void 0===c&&(c=Promise);var o=new L(u(t,r,n,a),c);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(k),s(k,i,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(n);try{regeneratorRuntime=a}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var o={};function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,r){t&&i(e.prototype,t);r&&i(e,r);return e};var s=function(){"use strict";function r(){e(c)(this,r),this.searchQuery="",this.category="",this.date="",this.key="ttibAwM4O4DleGl9I7vunskaBg8WG7A3",this.page=0}return e(o)(r,[{key:"fetchNewsBySearch",value:function(){var r=this;return e(t)(e(n).mark((function t(){var a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nytimes.com/svc/search/v2/articlesearch.json",e.next=3,fetch("".concat("https://api.nytimes.com/svc/search/v2/articlesearch.json","?q=").concat(r.searchQuery,"&page=").concat(r.page,"&api-key=").concat(r.key));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),t)})))()}},{key:"fetchCategoriesList",value:function(){var r=this;return e(t)(e(n).mark((function t(){var a,c;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nytimes.com/svc/news/v3/content/section-list.json",e.next=3,fetch("".concat("https://api.nytimes.com/svc/news/v3/content/section-list.json","?api-key=").concat(r.key));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c.results);case 8:case"end":return e.stop()}}),t)})))()}},{key:"fetchNewsByCategory",value:function(){var r=this;return e(t)(e(n).mark((function t(){var a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nytimes.com/svc/news/v3/content/all/",e.next=3,fetch("".concat("https://api.nytimes.com/svc/news/v3/content/all/").concat(r.category,".json?api-key=").concat(r.key));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),t)})))()}},{key:"fetchNewsByMostPopular",value:function(){var r=this;return e(t)(e(n).mark((function t(){var a,c;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json",e.next=3,fetch("".concat("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json","?api-key=").concat(r.key));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),t)})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page>0&&(this.page-=1)}},{key:"resetPage",value:function(){this.page=0}}]),r}(),u=window.matchMedia("screen and (max-width: 767px)").matches,l=window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,h=window.matchMedia("screen and (min-width: 1280px)").matches,f='<div class="weather"></div>',p=function(){"use strict";function t(){e(c)(this,t),this.currentPage=1,this.lastElem=8,this.firstElem=0,this.maxPages=3}return e(o)(t,[{key:"renderPopularNews",value:function(e,t){console.log(e),!0===u?(this.lastElem=4*this.currentPage,this.firstElem=this.lastElem-4,this.maxPages=Math.ceil(e.length/4)):!0===l&&(this.lastElem=7*this.currentPage,this.firstElem=this.lastElem-7,this.maxPages=Math.ceil(e.length/8));var r=e.slice(this.firstElem,this.lastElem).map((function(e){var t=e.title,r=e.abstract,n=e.media,a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return 0!==n.length&&(a=n[0]["media-metadata"][2].url),'<div class="news__item">\n      <img src='.concat(a,'\n alt="image" class="news__image"/>\n      <div class="info">\n     <h3>').concat(t,"</h3>\n      <p>").concat(r,"</p>\n      </div>\n  </div>")}));if(!0===u){r.splice(0,0,f);var n=r.map((function(e){return e})).join("");t.innerHTML=n}else if(!0===l){r.splice(1,0,f);var a=r.map((function(e){return e})).join("");t.innerHTML=a}else if(!0===h){r.splice(2,0,f);var c=r.map((function(e){return e})).join("");t.innerHTML=c}}},{key:"renderNewsbyASearch",value:function(e,t){console.log(e);var r=e.map((function(e){var t=e.abstract,r=e.lead_paragraph,n=e.multimedia,a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return 0!==n.length&&(a="".concat("https://static01.nyt.com/").concat(n[0].url)),'<div class="news__item">\n    <img src='.concat(a,' alt="image" class="news__image"/>\n      <div class="info">\n     <h3>').concat(t,"</h3>\n      <p>").concat(r,"</p>\n      </div>\n  </div>\n      ")}));if(!0===u){r.splice(0,0,f);var n=r.map((function(e){return e})).join("");t.innerHTML=n}else if(!0===l){r.splice(1,0,f);var a=r.map((function(e){return e})).join("");t.innerHTML=a}else if(!0===h){r.splice(2,0,f);var c=r.map((function(e){return e})).join("");t.innerHTML=c}}},{key:"renderCategoryNews",value:function(e,t){console.log(e),!0===u?(this.lastElem=4*this.currentPage,this.firstElem=this.lastElem-4,this.maxPages=Math.ceil(e.length/4)):!0===l&&(this.lastElem=7*this.currentPage,this.firstElem=this.lastElem-7,this.maxPages=Math.ceil(e.length/8));var r=e.slice(this.firstElem,this.lastElem).map((function(e){var t=e.title,r=e.abstract,n=e.multimedia,a="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return n&&(a="".concat(n[1].url)),'<div class="news__item">\n      <img src='.concat(a,'\n alt="image" class="news__image"/>\n      <div class="info">\n     <h3>').concat(t,"</h3>\n      <p>").concat(r,"</p>\n      </div>\n  </div>")}));if(!0===u){r.splice(0,0,f);var n=r.map((function(e){return e})).join("");t.innerHTML=n}else if(!0===l){r.splice(1,0,f);var a=r.map((function(e){return e})).join("");t.innerHTML=a}else if(!0===h){r.splice(2,0,f);var c=r.map((function(e){return e})).join("");t.innerHTML=c}}}]),t}(),d=(window.matchMedia("screen and (max-width: 767px)").matches,window.matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches,window.matchMedia("screen and (min-width: 1280px)").matches,new p),m=new s,v=document.querySelector(".news-list"),y=document.querySelector(".search-form"),g=document.querySelector(".prev__page"),w=document.querySelector(".next__page"),b=document.querySelector(".categories__list"),x=document.querySelector(".other-categories__button"),k=document.querySelector(".other-categories__thumb");document.querySelector(".weather");function _(){return(_=e(t)(e(n).mark((function t(){var r,a,c;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===y.elements.searchQuery.value){e.next=19;break}if(0!==m.currentPage){e.next=5;break}return e.abrupt("return");case 5:return m.decrementPage(),e.prev=6,e.next=9,m.fetchNewsBySearch();case 9:r=e.sent,d.renderNewsbyASearch(r.response.docs,v),scroll(0,0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:e.next=54;break;case 19:if(""===m.category){e.next=38;break}if(1!==d.currentPage){e.next=24;break}return e.abrupt("return");case 24:return d.currentPage-=1,e.prev=25,e.next=28,m.fetchNewsByCategory();case 28:a=e.sent,d.renderCategoryNews(a.results,v),scroll(0,0),e.next=36;break;case 33:e.prev=33,e.t1=e.catch(25),console.log(e.t1);case 36:e.next=54;break;case 38:if(1!==d.currentPage){e.next=42;break}return e.abrupt("return");case 42:return d.currentPage-=1,e.prev=43,e.next=46,m.fetchNewsByMostPopular();case 46:c=e.sent,d.renderPopularNews(c.results,v),scroll(0,0),e.next=54;break;case 51:e.prev=51,e.t2=e.catch(43),console.log(e.t2);case 54:case"end":return e.stop()}}),t,null,[[6,14],[25,33],[43,51]])})))).apply(this,arguments)}function L(){return(L=e(t)(e(n).mark((function t(){var r,a,c;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===y.elements.searchQuery.value){e.next=16;break}return e.prev=1,m.incrementPage(),e.next=5,m.fetchNewsBySearch();case 5:r=e.sent,console.log(r.response),d.renderNewsbyASearch(r.response.docs,v),scroll(0,0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:e.next=51;break;case 16:if(""===m.category){e.next=35;break}if(d.currentPage!==d.maxPages){e.next=21;break}return e.abrupt("return");case 21:return d.currentPage+=1,e.prev=22,e.next=25,m.fetchNewsByCategory();case 25:a=e.sent,d.renderCategoryNews(a.results,v),scroll(0,0),e.next=33;break;case 30:e.prev=30,e.t1=e.catch(22),console.log(e.t1);case 33:e.next=51;break;case 35:if(d.currentPage!==d.maxPages){e.next=39;break}return e.abrupt("return");case 39:return d.currentPage+=1,e.prev=40,e.next=43,m.fetchNewsByMostPopular();case 43:c=e.sent,d.renderPopularNews(c.results,v),scroll(0,0),e.next=51;break;case 48:e.prev=48,e.t2=e.catch(40),console.log(e.t2);case 51:case"end":return e.stop()}}),t,null,[[1,11],[22,30],[40,48]])})))).apply(this,arguments)}function E(){return(E=e(t)(e(n).mark((function t(r){var a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),d.currentPage=1,m.searchQuery=encodeURIComponent("".concat(r.currentTarget.elements.searchQuery.value)),e.prev=3,e.next=6,m.fetchNewsBySearch();case 6:a=e.sent,d.renderNewsbyASearch(a.response.docs,v),scroll(0,0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),t,null,[[3,11]])})))).apply(this,arguments)}function P(e){return j.apply(this,arguments)}function j(){return(j=e(t)(e(n).mark((function t(r){var a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.currentPage=1,r.target.hasAttribute("name")){e.next=3;break}return e.abrupt("return");case 3:return m.category=encodeURIComponent(r.target.getAttribute("name").toLowerCase()),console.log(m.category),e.prev=5,e.next=8,m.fetchNewsByCategory();case 8:a=e.sent,d.renderCategoryNews(a.results,v),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}function N(){return(N=e(t)(e(n).mark((function t(){var r,a,c,o;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.fetchCategoriesList();case 2:for(r=e.sent,a=0;a<6;a+=1)b.children[a].textContent="".concat(r[a].display_name),b.children[a].setAttribute("name","".concat(r[a].display_name));for(c=6;c<=49;c+=1)(o=document.createElement("button")).classList.add("other-category__item"),o.textContent="".concat(r[c].display_name),o.setAttribute("name","".concat(r[c].display_name)),k.append(o);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}b.addEventListener("click",P),k.addEventListener("click",P),x.addEventListener("click",(function(){k.classList.toggle("is-hidden")})),g.addEventListener("click",(function(){return _.apply(this,arguments)})),w.addEventListener("click",(function(){return L.apply(this,arguments)})),y.addEventListener("submit",(function(e){return E.apply(this,arguments)})),document.addEventListener("click",(function(e){e.target!==k&&e.target!==x&&k.classList.add("is-hidden")})),m.fetchNewsByMostPopular().then((function(e){return d.renderPopularNews(e.results,v)})).catch((function(e){return console.log(e)})),function(){N.apply(this,arguments)}()}();
//# sourceMappingURL=index.ca54b249.js.map
