// const newsList = document.querySelector('.list-news');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const themeContainer = document.querySelector('.theme');
const seachBtn = document.querySelector('.search-field__btn');
// const loader = document.querySelector('.news-loader__container.container');
const bodyScrollLock = require('body-scroll-lock');
import debounce from 'lodash.debounce';

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('open-menu');
  if (themeContainer.classList.contains('mobile')) {
    themeContainer.classList.remove('mobile');
  } else if (!themeContainer.classList.contains('mobile')) {
    const debouncedThemeContainer = debounce(() => {
      themeContainer.classList.add('mobile');
    }, 250);

    debouncedThemeContainer();
  }

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';

  bodyScrollLock[scrollLockMethod](document.body);
};
if (openMenuBtn) {
    openMenuBtn.addEventListener('click', toggleMenu);
}

if (closeMenuBtn) {
closeMenuBtn.addEventListener('click', toggleMenu);
} 

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('open-menu');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

if (window.innerWidth < 768) {
  seachBtn.setAttribute('type', 'button');
}