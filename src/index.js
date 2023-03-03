import './js/calendar';
import FetchNews from './js/fetchNews';
import RenderNews from './js/renderNews';
import Weather from './js/weather';
import LocalStorageClass from './js/localStorage';
import 'tui-pagination/dist/tui-pagination.min.css';
import Pagination from 'tui-pagination';


const container = document.querySelector('#tui-pagination-container');
const options = {
  totalItems: 21,
  itemsPerPage: 9,
  page: 1,
};
export const pagination = new Pagination(container, options);

const mobileScreenSize = window.matchMedia(
  'screen and (max-width: 767px)',
).matches;
const tabletScreenSize = window.matchMedia(
  'screen and (min-width: 768px) and (max-width: 1279px)',
).matches;
const desktopScreenSize = window.matchMedia(
  'screen and (min-width: 1280px)',
).matches;


const localStorageEntity = new LocalStorageClass();
const weather = new Weather();
const renderNews = new RenderNews();
const fetchNews = new FetchNews();
const newsList = document.querySelector('.list-news');
const searchForm = document.querySelector('.search-field');
const categoriesList = document.querySelector('.category__list-bt');
const otherCategoriesThumb = document.querySelector('.filter-category__list');
const chooseDate = document.querySelector('.days');
const dateInput = document.querySelector('#input-picker')
const otherEl = document.querySelector('.category__others-container');
const otherCategoriesBtn = document.querySelector('.category__item-bt-arrow');

otherCategoriesBtn.addEventListener('click', OnOtherCategoriesBtnClick);
pagination.on('afterMove', onPaginationClick);
chooseDate.addEventListener('click', onChooseDateClick);
categoriesList.addEventListener('click', onCategoryClick);
otherCategoriesThumb.addEventListener('click', onCategoryClick);
searchForm.addEventListener('submit', onFormSubmit);
newsList.addEventListener(
  'click',
  localStorageEntity.onAddToFavoriteClick.bind(localStorageEntity),
);
newsList.addEventListener(
  'click',
  localStorageEntity.onReadMoreClick.bind(localStorageEntity),
);

// --------------------------------------------- вызовы функций при первой загрузке ---------------------------------------------

onPageLoad();

getCategoriesList();

if (mobileScreenSize) {
  otherCategoriesBtn.querySelector('span').textContent = 'Categories';
}
// ---------------------------------------------------------------------------------------------------------------------------------------



export async function onFormSubmit(e) {
  e.preventDefault();
  pagination.setTotalItems(100);
  // pagination.reset();
  renderNews.currentPage = 1;
  fetchNews.page = 1;

  fetchNews.searchQuery = encodeURIComponent(
    `${e.currentTarget.elements.searchQuery.value}`,
  );
  try {
    const news = await fetchNews.fetchNewsBySearch();
    getDataNeeded(news.response.docs);
    renderNews.renderNewsbyASearchQX(localStorageEntity.popularArr, newsList);
    console.log(localStorageEntity.popularArr);
    scroll(0, 0);
  } catch (error) {
    console.log(error);
  }
}

async function onCategoryClick(e) {
  renderNews.currentPage = 1;
  fetchNews.page = 1;
  pagination.reset();
  if (!e.target.hasAttribute('name')) {
    return;
  }
  fetchNews.category = encodeURIComponent(
    e.target.getAttribute('name').toLowerCase(),
  );
  console.log(fetchNews.category);
  try {
    const fetchCategoryNews = await fetchNews.fetchNewsByCategory();
    console.log(fetchCategoryNews.results);
    getDataNeeded(fetchCategoryNews.results);
    renderNews.renderNewsList(localStorageEntity.popularArr, newsList);
  } catch (error) {
    console.log(error);
  }
}

async function getCategoriesList() {
  const categoriesArr = await fetchNews.fetchCategoriesList();
  if (mobileScreenSize) {
    for (let j = 0; j <= 49; j += 1) {
      const otherCategoryElem = document.createElement('li');
      const otherCategoryBtn = document.createElement('button');
      otherCategoryElem.classList.add('filter-category__item');
      otherCategoryBtn.classList.add('filter-category__button');
      otherCategoryElem.append(otherCategoryBtn);
      otherCategoryBtn.textContent = `${categoriesArr[j]['display_name']}`;
      otherCategoryBtn.setAttribute(
        'name',
        `${categoriesArr[j]['display_name']}`,
      );
      otherCategoriesThumb.append(otherCategoryElem);
    }
  } else if (tabletScreenSize) {
    for (let i = 0; i < 4; i += 1) {
      categoriesList.children[
        i
      ].textContent = `${categoriesArr[i]['display_name']}`;
      categoriesList.children[i].setAttribute(
        'name',
        `${categoriesArr[i]['display_name']}`,
      );
    }
    for (let j = 4; j <= 49; j += 1) {
      const otherCategoryElem = document.createElement('li');
      const otherCategoryBtn = document.createElement('button');
      otherCategoryElem.classList.add('filter-category__item');
      otherCategoryBtn.classList.add('filter-category__button');
      otherCategoryElem.append(otherCategoryBtn);
      otherCategoryBtn.textContent = `${categoriesArr[j]['display_name']}`;
      otherCategoryBtn.setAttribute(
        'name',
        `${categoriesArr[j]['display_name']}`,
      );
      otherCategoriesThumb.append(otherCategoryElem);
    }
  } else {
    for (let i = 0; i < 6; i += 1) {
      categoriesList.children[
        i
      ].textContent = `${categoriesArr[i]['display_name']}`;
      categoriesList.children[i].setAttribute(
        'name',
        `${categoriesArr[i]['display_name']}`,
      );
    }
    for (let j = 6; j <= 49; j += 1) {
      const otherCategoryElem = document.createElement('li');
      const otherCategoryBtn = document.createElement('button');
      otherCategoryElem.classList.add('filter-category__item');
      otherCategoryBtn.classList.add('filter-category__button');
      otherCategoryElem.append(otherCategoryBtn);
      otherCategoryBtn.textContent = `${categoriesArr[j]['display_name']}`;
      otherCategoryBtn.setAttribute(
        'name',
        `${categoriesArr[j]['display_name']}`,
      );
      otherCategoriesThumb.append(otherCategoryElem);
    }
  }
}

export async function onPageLoad() {
  await weather
    .getWeather(weather.latitude, weather.longitude)
    .then(response => {
      weather.renderWeatherElement(response);
      renderNews.weatherMarkup = weather.markup;
    })
    .catch(error => console.log(error));

  fetchNews
    .fetchNewsByMostPopular()
    .then(result => {
      weather.askGeo();
      getDataNeeded(result.results);
      renderNews.renderNewsList(localStorageEntity.popularArr, newsList);
    })
    .catch(error => console.log(error));
}

function onChooseDateClick(e) {
  const formattedDate = dateInput.value.replaceAll('/', '-');
  fetchNews.date = formattedDate;
  console.log(formattedDate);
}
// добавить категории для мобилки

// при сабмите возвращаться на главную


function getDataNeeded(arr) {
  localStorageEntity.popularArr = [];
  const IMAGE_BASE_URL = 'https://static01.nyt.com/';
  let imageURL = `https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c`;
  let category;
  let title;
  let desc;
  let date;
  let url;
  arr.map(result => {
    if (searchForm.elements.searchQuery.value !== '') {
      if (result.multimedia.length > 0) {
        imageURL = `${IMAGE_BASE_URL}${result.multimedia[0].url}`;
      }
      category = result.section_name;
      title = result.abstract;
      desc = result['lead_paragraph'];
      date = result['pub_date'];
      url = result.web_url;
    } else if (fetchNews.category !== '') {
      if (result.multimedia) {
      imageURL = result.multimedia[1].url;
      }
      category = result.section;
      title = result.title;
      desc = result.abstract;
      date = result['published_date'];
      url = result.url;
    } else {
      if (result.media.length !== 0) {
        imageURL = result.media[0]['media-metadata'][2].url;
      }
      category = result.section;
      title = result.title;
      desc = result.abstract;
      date = result['published_date'];
      url = result.url;
    }
    localStorageEntity.popularArr.push({
      category,
      title,
      desc,
      date,
      url,
      imageURL,
    });
  });
}

async function onPaginationClick(event) {
  const currentPage = event.page;

  if (searchForm.elements.searchQuery.value !== '') {
    try {
      fetchNews.page = currentPage;
      const news = await fetchNews.fetchNewsBySearch();
      getDataNeeded(news.response.docs);
      renderNews.renderNewsbyASearchQX(localStorageEntity.popularArr, newsList);
      scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  } else if (fetchNews.category !== '') {
    if (renderNews.currentPage === renderNews.maxPages) {
      return;
    } else {
      renderNews.currentPage = currentPage;
      try {
        const news = await fetchNews.fetchNewsByCategory();
        getDataNeeded(news.results);
        renderNews.renderNewsList(localStorageEntity.popularArr, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    renderNews.currentPage = currentPage;
    try {
      const news = await fetchNews.fetchNewsByMostPopular();
      getDataNeeded(news.results);
      renderNews.renderNewsList(localStorageEntity.popularArr, newsList);
      scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  }
}


function OnOtherCategoriesBtnClick(evt) {
  if (!evt.target.closest('.category__item-bt-arrow')) {
    return;
  }
  otherEl.classList.toggle('is-open');
}


