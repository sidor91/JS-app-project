var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r("auIM8");var i=r("hbtSd"),o=r("du83Z");const s=new(0,r("lAkq4").default),a=(new(0,o.default),new(0,i.default)),d=document.querySelector("#favorite__news");d.addEventListener("click",(function(e){if(!e.target.closest("button"))return;const n=e.target.closest(".list-news__item").querySelector(".item-news__info-link").getAttribute("href");e.target.closest(".item-news__add-to-favorite").classList.toggle("hidden-span");const t=c.findIndex((e=>e.url===n));if(c.splice(t,1),localStorage.setItem("favorite",JSON.stringify(c)),c.length){const e=c.map((e=>s.renderNewsCard(e,"hidden-span"))).join("");d.innerHTML=e}else d.innerHTML='<section class="background">\n    <div class="favorite-container container">     \n        <p class="background___title">We haven\'t found news from this category</p>\n        <picture>\n\n          <img class="background___picture" src="https://i.ibb.co/cFdrWFz/desktop.png" alt="background-picture" width="248" height="198">\n        </picture>      \n    </div>\n  </section>'})),d.addEventListener("click",a.onReadMoreClick.bind(a));let c=localStorage.getItem("favorite");if(c&&"[]"!==c){const e=JSON.parse(c).map((e=>s.renderNewsCard(e,"hidden-span"))).join("");d.innerHTML=e}c=JSON.parse(c);
//# sourceMappingURL=favorite.8d8bd392.js.map
