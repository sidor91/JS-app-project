!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function o(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var n,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,f=a||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return f.Date.now()};function b(t){var o=void 0===t?"undefined":e(i)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=b(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=l.test(t);return n||d.test(t)?c(t.slice(2),n?2:8):u.test(t)?NaN:+t}n=function(e,t,o){var n,i,r,u,l,d,c=0,a=!1,s=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var o=n,r=i;return n=i=void 0,c=t,u=e.apply(r,o)}function h(e){return c=e,l=setTimeout(S,t),a?v(e):u}function w(e){var o=e-d;return void 0===d||o>=t||o<0||s&&e-c>=r}function S(){var e=p();if(w(e))return E(e);l=setTimeout(S,function(e){var o=t-(e-d);return s?y(o,r-(e-c)):o}(e))}function E(e){return l=void 0,f&&n?v(e):(n=i=void 0,u)}function T(){var e=p(),o=w(e);if(n=arguments,i=this,d=e,o){if(void 0===l)return h(d);if(s)return l=setTimeout(S,t),v(d)}return void 0===l&&(l=setTimeout(S,t)),u}return t=g(t)||0,b(o)&&(a=!!o.leading,r=(s="maxWait"in o)?m(g(o.maxWait)||0,t):r,f="trailing"in o?!!o.trailing:f),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=d=i=l=void 0},T.flush=function(){return void 0===l?u:E(p())},T};var h=document.querySelector(".js-menu-container"),w=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),E=document.querySelector(".theme"),T=document.querySelector(".search-field__btn"),j={};o(j,"disableBodyScroll",(function(){return $})),o(j,"clearAllBodyScrollLocks",(function(){return k})),o(j,"enableBodyScroll",(function(){return D}));var L=!1;if("undefined"!=typeof window){var x={get passive(){L=!0}};window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}var A="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),B=[],O=!1,M=-1,P=void 0,q=void 0,I=void 0,_=function(e){return B.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},W=function(e){var t=e||window.event;return!!_(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},H=function(){void 0!==I&&(document.body.style.paddingRight=I,I=void 0),void 0!==P&&(document.body.style.overflow=P,P=void 0)},N=function(){if(void 0!==q){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=q.position,document.body.style.top=q.top,document.body.style.left=q.left,window.scrollTo(t,e),q=void 0}},$=function(e,t){if(e){if(!B.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};B=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(B),[o]),A?window.requestAnimationFrame((function(){if(void 0===q){q={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===I){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);I=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===P&&(P=document.body.style.overflow,document.body.style.overflow="hidden")}(t),A&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(M=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-M;!_(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?W(e):e.stopPropagation())}(t,e)},O||(document.addEventListener("touchmove",W,L?{passive:!1}:void 0),O=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},k=function(){A&&(B.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),O&&(document.removeEventListener("touchmove",W,L?{passive:!1}:void 0),O=!1),M=-1),A?N():H(),B=[]},D=function(e){e?(B=B.filter((function(t){return t.targetElement!==e})),A&&(e.ontouchstart=null,e.ontouchmove=null,O&&0===B.length&&(document.removeEventListener("touchmove",W,L?{passive:!1}:void 0),O=!1)),A?N():H()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},F=function(){var t="true"===w.getAttribute("aria-expanded")||!1;if(w.setAttribute("aria-expanded",!t),h.classList.toggle("open-menu"),E.classList.contains("mobile"))E.classList.remove("mobile");else if(!E.classList.contains("mobile")){e(n)((function(){E.classList.add("mobile")}),250)()}j[t?"enableBodyScroll":"disableBodyScroll"](document.body)};w&&w.addEventListener("click",F),S&&S.addEventListener("click",F),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(h.classList.remove("open-menu"),w.setAttribute("aria-expanded",!1),j.enableBodyScroll(document.body))})),window.innerWidth<768&&T.setAttribute("type","button")}();
//# sourceMappingURL=read.a78f74c4.js.map
