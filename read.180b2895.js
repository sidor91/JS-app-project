const e=document.querySelector(".switch-checkbox"),t=document.querySelector("body"),o=document.querySelector(".theme__dark"),c=document.querySelector(".theme__light");e.addEventListener("click",(function(){t.classList.toggle("darkMode"),o.classList.toggle("opacityForDark"),c.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(t.classList.add("darkMode"),e.checked=!0)}catch(e){}}();const a=document.querySelector(".list-news");document.querySelector(".date-list__item").addEventListener("click",(function(e){e.target.closest(".date-list__btn")&&a.classList.toggle("is-hidden")}));let r=localStorage.getItem("read");if(r&&r.length){const e=JSON.parse(r).map((e=>e.markup)).join("");a.innerHTML=e}
//# sourceMappingURL=read.180b2895.js.map