!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function o(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("cs7FV",(function(t,o){var n=r("l1Gdk"),i=(document.querySelector(".list-news"),document.querySelector(".js-menu-container")),u=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),l=document.querySelector(".theme"),d=document.querySelector(".search-field__btn"),s=(document.querySelector(".news-loader__container.container"),r("gnsaF")),a=function(){var t="true"===u.getAttribute("aria-expanded")||!1;if(u.setAttribute("aria-expanded",!t),i.classList.toggle("open-menu"),l.classList.contains("mobile"))l.classList.remove("mobile");else if(!l.classList.contains("mobile")){e(n)((function(){l.classList.add("mobile")}),250)()}s[t?"enableBodyScroll":"disableBodyScroll"](document.body)};u.addEventListener("click",a),c.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(i.classList.remove("open-menu"),u.setAttribute("aria-expanded",!1),s.enableBodyScroll(document.body))})),window.innerWidth<768&&d.setAttribute("type","button")})),r.register("l1Gdk",(function(o,n){var i=r("l5bVx"),u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,v=a||f||Function("return this")(),m=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return v.Date.now()};function g(t){var o=void 0===t?"undefined":e(i)(t);return!!t&&("object"==o||"function"==o)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=g(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=l.test(t);return n||d.test(t)?s(t.slice(2),n?2:8):c.test(t)?NaN:+t}o.exports=function(e,t,o){var n,i,r,u,c,l,d=0,s=!1,a=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var o=n,r=i;return n=i=void 0,d=t,u=e.apply(r,o)}function m(e){return d=e,c=setTimeout(x,t),s?v(e):u}function h(e){var o=e-l;return void 0===l||o>=t||o<0||a&&e-d>=r}function x(){var e=b();if(h(e))return S(e);c=setTimeout(x,function(e){var o=t-(e-l);return a?y(o,r-(e-d)):o}(e))}function S(e){return c=void 0,f&&n?v(e):(n=i=void 0,u)}function E(){var e=b(),o=h(e);if(n=arguments,i=this,l=e,o){if(void 0===c)return m(l);if(a)return c=setTimeout(x,t),v(l)}return void 0===c&&(c=setTimeout(x,t)),u}return t=w(t)||0,g(o)&&(s=!!o.leading,r=(a="maxWait"in o)?p(w(o.maxWait)||0,t):r,f="trailing"in o?!!o.trailing:f),E.cancel=function(){void 0!==c&&clearTimeout(c),d=0,n=l=i=c=void 0},E.flush=function(){return void 0===c?u:S(b())},E}})),r.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),r.register("gnsaF",(function(e,t){o(e.exports,"disableBodyScroll",(function(){return y})),o(e.exports,"clearAllBodyScrollLocks",(function(){return b})),o(e.exports,"enableBodyScroll",(function(){return g}));var n=!1;if("undefined"!=typeof window){var i={get passive(){n=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],c=!1,l=-1,d=void 0,s=void 0,a=void 0,f=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(){void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)},p=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},y=function(e,t){if(e){if(!u.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};u=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(u),[o]),r?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===a){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);a=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}(t),r&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-l;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?v(e):e.stopPropagation())}(t,e)},c||(document.addEventListener("touchmove",v,n?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=function(){r&&(u.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),c=!1),l=-1),r?p():m(),u=[]},g=function(e){e?(u=u.filter((function(t){return t.targetElement!==e})),r&&(e.ontouchstart=null,e.ontouchmove=null,c&&0===u.length&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),c=!1)),r?p():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),r("cs7FV")}();
//# sourceMappingURL=read.be8d514d.js.map