!function(){var e=document.querySelector(".switch-checkbox"),t=document.querySelector("body"),a=document.querySelector(".theme__dark"),r=document.querySelector(".theme__light");e.addEventListener("click",(function(){t.classList.toggle("darkMode"),a.classList.toggle("opacityForDark"),r.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(t.classList.add("darkMode"),e.checked=!0)}catch(e){}}();var c=document.querySelector(".list-news");document.querySelector(".date-list__item").addEventListener("click",(function(e){(e.target.classList.contains("date__day")||e.target.classList.contains("date__arrow"))&&c.classList.toggle("is-hidden")}));var o=localStorage.getItem("read");if(o&&o.length){var l=JSON.parse(o).map((function(e){return e.markup})).join("");c.innerHTML=l}}();
//# sourceMappingURL=read.a7c70d7f.js.map
