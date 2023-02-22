import FetchNews from './components/js/fetchNews';
import {
  renderNewsbyASearch,
  renderPopularNews,
  renderCategoryNews
} from './components/js/renderNews';

const mobileScreenSize = window.matchMedia(
  'screen and (max-width: 767px)'
).matches;
const tabletScreenSize = window.matchMedia(
  'screen and (min-width: 768px) and (max-width: 1279px)'
).matches;
const desktopScreenSize = window.matchMedia(
  'screen and (min-width: 1280px)'
).matches;

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
// document.addEventListener('click', onDocumentClick);


// --------------------------------------------- вызовы функций при первой загрузке ---------------------------------------------

fetchNews.fetchNewsByMostPopular().then(result => {
  if (mobileScreenSize === true) {
    console.log(result.results);
    renderPopularNews(result.results, newsList, 0, 4);
  }
  if (tabletScreenSize === true) {
    console.log(result.results);
    renderPopularNews(result.results, newsList, 0, 7);
  }
  if (desktopScreenSize === true) {
    console.log(result.results);
    renderPopularNews(result.results, newsList, 0, 8);
  }
});

getCategoriesList();

// ---------------------------------------------------------------------------------------------------------------------------------------

function onOtherCategoriesClick() {
  otherCategoriesThumb.classList.toggle('is-hidden');
}

// function onDocumentClick(e) {
//   if (e.target !== otherCategoriesThumb && e.target !== otherCategoriesBtn) {
//     otherCategoriesThumb.classList.add('is-hidden');
//   }
// }

async function onPrevBtnClick() {
  if (mobileScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '' && fetchNews.page === 0) {
      return;
    } else if (
      searchForm.elements.searchQuery.value !== '' &&
      fetchNews.page !== 0
    ) {
      fetchNews.decrementPage();

      try {
        const news = await fetchNews.fetchNewsBySearch();
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 0, 4);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 4, 8);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 4) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 8, 12);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 5) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 12, 16);
          scroll(0, 0);
          page -= 1;
        });
      }
    } else {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 0, 4);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 4, 8);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 4) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 8, 12);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 5) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 12, 16);
          scroll(0, 0);
          page -= 1;
        });
      }
    }
  } else if (tabletScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '' && fetchNews.page === 0) {
      return;
    } else if (searchForm.elements.searchQuery.value !== '' && fetchNews.page !== 0) {
      fetchNews.decrementPage();

      try {
        const news = await fetchNews.fetchNewsBySearch();
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 0, 7);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 7, 14);
          scroll(0, 0);
          page -= 1;
        });
      }
    } else {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 0, 7);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 7, 14);
          scroll(0, 0);
          page -= 1;
        });
      }
    }
  } else if (desktopScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '' && fetchNews.page === 0) {
      return;
    } else if (searchForm.elements.searchQuery.value !== '' && fetchNews.page !== 0) {
      fetchNews.decrementPage();
      try {
        const news = await fetchNews.fetchNewsBySearch();
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 0, 7);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 7, 14);
          scroll(0, 0);
          page -= 1;
        });
      }
    } else {
      if (page === 1) {
        return;
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 0, 8);
          scroll(0, 0);
          page -= 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 8, 16);
          scroll(0, 0);
          page -= 1;
          console.log(page);
        });
      }
    }
  }
}

let page = 1;
async function onNextBtnClick() {
  if (mobileScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '') {
      try {
        fetchNews.incrementPage();
        const news = await fetchNews.fetchNewsBySearch();
        console.log(news.response);
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 4, 8);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 8, 12);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 12, 16);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 4) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 16, 20);
          scroll(0, 0);
          page += 1;
        });
      }
    } else {
      if (page === 1) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 4, 8);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 8, 12);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 3) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 12, 16);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 4) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 16, 20);
          scroll(0, 0);
          page += 1;
        });
      }
    }
  }
  if (tabletScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '') {
      try {
        fetchNews.incrementPage();
        const news = await fetchNews.fetchNewsBySearch();
        console.log(news.response);
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 7, 14);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 14, 20);
          scroll(0, 0);
          page += 1;
        });
      } 
    } else {
      if (page === 1) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 7, 14);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 14, 20);
          scroll(0, 0);
          page += 1;
        });
      }
    }
  }
  if (desktopScreenSize === true) {
    if (searchForm.elements.searchQuery.value !== '') {
      try {
        fetchNews.incrementPage();
        const news = await fetchNews.fetchNewsBySearch();
        console.log(news.response);
        renderNewsbyASearch(news.response.docs, newsList);
        scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    } else if (fetchNews.category !== '') {
      if (page === 1) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 8, 16);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByCategory().then(result => {
          renderCategoryNews(result.results, newsList, 16, 20);
          scroll(0, 0);
          page += 1;
        });
      }
    } else {
      if (page === 1) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 8, 16);
          scroll(0, 0);
          page += 1;
        });
      } else if (page === 2) {
        fetchNews.fetchNewsByMostPopular().then(result => {
          renderPopularNews(result.results, newsList, 16, 20);
          scroll(0, 0);
          page += 1;
        });
      }
    }
  }
}

async function onFormSubmit(e) {
  e.preventDefault();
  page = 1;
  fetchNews.searchQuery = encodeURIComponent(
    `${e.currentTarget.elements.searchQuery.value}`
  );
  try {
    const news = await fetchNews.fetchNewsBySearch();
    renderNewsbyASearch(news.response.docs, newsList);
    scroll(0, 0);
    console.log(fetchNews.searchQuery);
    console.log(news.response.docs);
  } catch (error) {
    console.log(error);
  }
}

async function onCategoryClick(e) {
  // fetchNews.category = encodeURIComponent(e.target.getAttribute('name'));
  page = 1;
    fetchNews.category = encodeURIComponent(
      e.target.getAttribute('name').toLowerCase()
    );
  console.log(fetchNews.category);
  const fetchCategoryNews = await fetchNews
    .fetchNewsByCategory()
    .then(result => {
      console.log(result.results);
      {
        if (mobileScreenSize === true) {
          renderCategoryNews(result.results, newsList, 0, 4);
        }
        if (tabletScreenSize === true) {
          renderCategoryNews(result.results, newsList, 0, 7);
        }
        if (desktopScreenSize === true) {
          renderCategoryNews(result.results, newsList, 0, 8);
        }
      }
    });
  // const categoryNews = fetchCategoryNews.json();
  // console.log(fetchCategoryNews);
  // .then(response => console.log(response));
}

async function getCategoriesList() {
  const categoriesArr = await fetchNews.fetchCategoriesList();
  console.log(categoriesArr);
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

// {
//       if (mobileScreenSize === true) {
//         renderCategoryNews(result.results, newsList, 0, 4);
//       }
//       if (tabletScreenSize === true) {
//         renderCategoryNews(result.results, newsList, 0, 7);
//       }
//       if (desktopScreenSize === true) {
//         renderCategoryNews(result.results, newsList, 0, 8);
//       }
//     }