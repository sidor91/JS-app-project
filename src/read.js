import './js/dark-light_theme';

const readNewsList = document.querySelector('.list-news');
const oneDayNews = document.querySelector('.date-list__item');

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
  const readMarkup = parsedData
    .map(element => {
      return element.markup;
      // console.log(element.markup);
    })
    .join('');
  readNewsList.innerHTML = readMarkup;
}
