// import './js/favorite-page';
// import './js/dark-light_theme';
// import './js/mobile-menu';
import LocalStorageClass from './js/localStorage';
import RenderNews from './js/renderNews';


const renderNews = new RenderNews();
const localStorageEntity = new LocalStorageClass();

const favoriteNewsList = document.querySelector('#favorite__news'); // контейнер

favoriteNewsList.addEventListener('click', onClick);
favoriteNewsList.addEventListener(
  'click',
  localStorageEntity.onReadMoreClick.bind(localStorageEntity),
);

let localStorageFavoriteData = localStorage.getItem('favorite');

if (localStorageFavoriteData && localStorageFavoriteData !== '[]') {
  const parsedData = JSON.parse(localStorageFavoriteData);
  const favoriteMarkup = parsedData
    .map(element => {
      return renderNews.renderNewsCard(element, 'hidden-span');
    })
    .join('');
  favoriteNewsList.innerHTML = favoriteMarkup;
}
localStorageFavoriteData = JSON.parse(localStorageFavoriteData); //  массив эелементов



function onClick(e) {
  // при клике на add to favorite на странице favorite
  if (
    !e.target.closest('button')
  ) {
    return;
  }
  const choosenNews = e.target.closest('.list-news__item'); // лишка
  const elemURL = choosenNews
    .querySelector('.item-news__info-link')
    .getAttribute('href');
  
  e.target // toggle class
    .closest('.item-news__add-to-favorite')
    .classList.toggle('hidden-span');

  const indexOfURL = localStorageFavoriteData.findIndex(
    item => item.url === elemURL,
  ); // поиск индекса элемента с данным url
  localStorageFavoriteData.splice(indexOfURL, 1); // удаление этого эелемента из массива
  localStorage.setItem('favorite', JSON.stringify(localStorageFavoriteData)); // добавление массива в LS
  if (localStorageFavoriteData.length) {
    const favoriteMarkup = localStorageFavoriteData
      .map(element => {
        return renderNews.renderNewsCard(element, 'hidden-span');
      })
      .join('');
    favoriteNewsList.innerHTML = favoriteMarkup;
  } else {
    favoriteNewsList.innerHTML = `<section class="background">
    <div class="favorite-container container">     
        <p class="background___title">We haven't found news from this category</p>
        <picture>

          <img class="background___picture" src="https://i.ibb.co/cFdrWFz/desktop.png" alt="background-picture" width="248" height="198">
        </picture>      
    </div>
  </section>`;
  }
}
