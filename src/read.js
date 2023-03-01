import './js/dark-light_theme';
import RenderNews from './js/renderNews';
import LocalStorageClass from './js/localStorage';



// // -----------------------------------------------------------------
// import './js/pagination';
// const Pagination = require('tui-pagination');
// import { pagination } from './js/pagination';

// -----------------------------------------------------------------


const renderNews = new RenderNews();
const localStorageEntity = new LocalStorageClass();
const readNewsList = document.querySelector('.list-news');
const oneDayNews = document.querySelector('.date-list__item');


readNewsList.addEventListener(
  'click',
  localStorageEntity.onAddToFavoriteClick.bind(localStorageEntity),
);
oneDayNews.addEventListener('click', onDayClick);

function onDayClick(e) {
  if (
    e.target.closest(".date-list__btn")
  ) {
    readNewsList.classList.toggle('is-hidden');
  }
}

let localStorageReadData = localStorage.getItem('read');
if (localStorageReadData && localStorageReadData.length) {
  const parsedData = JSON.parse(localStorageReadData); // распарсенніе данные (массив объектов)
  console.log(parsedData);

 const favoriteArr = JSON.parse(localStorage.getItem('favorite'));
 let readMarkup;
 if (!favoriteArr || favoriteArr === '[]') {
   readMarkup = parsedData
     .map(element => {
       return renderNews.renderNewsCard(element);
     })
     .join('');
 } else {
   const urlArr = favoriteArr.map(elem => elem.url);
   readMarkup = parsedData.map(news => {
     if (urlArr.includes(news.url)) {
       return renderNews.renderNewsCard(news, 'hidden-span');
     } else {
       return renderNews.renderNewsCard(news);
     }
   });
 }
  readNewsList.innerHTML = readMarkup;
}
