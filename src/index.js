import FetchNews from './components/js/fetchNews';
import RenderNews from './components/js/renderNews';

const mobileScreenSize = window.matchMedia(
  'screen and (max-width: 767px)'
).matches;
const tabletScreenSize = window.matchMedia(
  'screen and (min-width: 768px) and (max-width: 1279px)'
).matches;
const desktopScreenSize = window.matchMedia(
  'screen and (min-width: 1280px)'
).matches;

const renderNews = new RenderNews();
const fetchNews = new FetchNews();
const newsList = document.querySelector('.news-list');
const searchForm = document.querySelector('.search-form');
const prevPage = document.querySelector('.prev__page');
const nextPage = document.querySelector('.next__page');
const categoriesList = document.querySelector('.categories__list');
const otherCategoriesBtn = document.querySelector('.other-categories__button');
const otherCategoriesThumb = document.querySelector('.other-categories__thumb');
const weather = document.querySelector('.weather');

categoriesList.addEventListener('click', onCategoryClick);
otherCategoriesThumb.addEventListener('click', onCategoryClick);
otherCategoriesBtn.addEventListener('click', onOtherCategoriesClick);
prevPage.addEventListener('click', onPrevBtnClick);
nextPage.addEventListener('click', onNextBtnClick);
searchForm.addEventListener('submit', onFormSubmit);
document.addEventListener('click', onDocumentClick);


// --------------------------------------------- вызовы функций при первой загрузке ---------------------------------------------

fetchNews
  .fetchNewsByMostPopular()
  .then(result => renderNews.renderPopularNews(result.results, newsList))
  .catch(error => console.log(error));

getCategoriesList();


// ---------------------------------------------------------------------------------------------------------------------------------------

function onOtherCategoriesClick() {
  otherCategoriesThumb.classList.toggle('is-hidden');
}

function onDocumentClick(e) {
  if (e.target !== otherCategoriesThumb && e.target !== otherCategoriesBtn) {
    otherCategoriesThumb.classList.add('is-hidden');
  }
}

async function onPrevBtnClick() {
  if (searchForm.elements.searchQuery.value !== '') {
    if (fetchNews.currentPage === 0) {
      return;
    } else {
      fetchNews.decrementPage();
      try {
        const news = await fetchNews.fetchNewsBySearch();
        renderNews.renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  } else if (fetchNews.category !== '') {
    if (renderNews.currentPage === 1) {
      return;
    } else {
      renderNews.currentPage -= 1;
      try {
        const news = await fetchNews.fetchNewsByCategory();
        renderNews.renderCategoryNews(news.results, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    if (renderNews.currentPage === 1) {
      return;
    } else {
      renderNews.currentPage -= 1;
      try {
        const news = await fetchNews.fetchNewsByMostPopular();
        renderNews.renderPopularNews(news.results, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  }
}


async function onNextBtnClick() {
  if (searchForm.elements.searchQuery.value !== '') {
    try {
      fetchNews.incrementPage();
      const news = await fetchNews.fetchNewsBySearch();
      console.log(news.response);
      renderNews.renderNewsbyASearch(news.response.docs, newsList);
      scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  } else if (fetchNews.category !== '') {
    if (renderNews.currentPage === renderNews.maxPages) {
      return;
    } else {
      renderNews.currentPage += 1;
      try {
        const news = await fetchNews.fetchNewsByCategory();
        renderNews.renderCategoryNews(news.results, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  } else { 
    if (renderNews.currentPage === renderNews.maxPages) {
      return;
    } else {
      renderNews.currentPage += 1;
      try {
        const news = await fetchNews.fetchNewsByMostPopular();
        renderNews.renderPopularNews(news.results, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

async function onFormSubmit(e) {
  e.preventDefault();
  renderNews.currentPage = 1;
  fetchNews.searchQuery = encodeURIComponent(
    `${e.currentTarget.elements.searchQuery.value}`
  );
  try {
    const news = await fetchNews.fetchNewsBySearch();
    renderNews.renderNewsbyASearch(news.response.docs, newsList);
    scroll(0, 0);
  } catch (error) {
    console.log(error);
  }
}

async function onCategoryClick(e) {
  renderNews.currentPage = 1;
  if (!e.target.hasAttribute('name')) {
    return;
  }
    fetchNews.category = encodeURIComponent(
      e.target.getAttribute('name').toLowerCase()
    );
  console.log(fetchNews.category);
  try {
    const fetchCategoryNews = await fetchNews.fetchNewsByCategory();
    renderNews.renderCategoryNews(fetchCategoryNews.results, newsList);
  }
  catch (error){console.log(error)}
}

async function getCategoriesList() {
  const categoriesArr = await fetchNews.fetchCategoriesList();
  for (let i = 0; i < 6; i += 1) {
    categoriesList.children[
      i
    ].textContent = `${categoriesArr[i]['display_name']}`;
    categoriesList.children[i].setAttribute(
      'name',
      `${categoriesArr[i]['display_name']}`
    );
  }
  for (let j = 6; j <= 49; j += 1) {
    const otherCategoryElem = document.createElement('button');
    otherCategoryElem.classList.add('other-category__item');
    otherCategoryElem.textContent = `${categoriesArr[j]['display_name']}`;
    otherCategoryElem.setAttribute(
      'name',
      `${categoriesArr[j]['display_name']}`
    );
    otherCategoriesThumb.append(otherCategoryElem);
  }
}



