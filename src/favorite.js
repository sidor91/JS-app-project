// import './js/localStorage';
import LocalStorageClass from './js/localStorage';
import './js/dark-light_theme';

const localStorageEntity = new LocalStorageClass(); // localStorageEntity.onAddToFavoriteClick.bind(localStorageEntity)
const favoriteNewsList = document.querySelector('#favorite__news');  // контейнер 
favoriteNewsList.addEventListener(
  'click',
  localStorageEntity.onAddToFavoriteClick.bind(localStorageEntity)
);

let localStorageFavoriteData = localStorage.getItem('favorite');
// console.log(localStorageFavoriteData);
if (localStorageFavoriteData && localStorageFavoriteData.length) {     // если в LS есть запись favorite и она не пустая 
  const parsedData = JSON.parse(localStorageFavoriteData); // распарсенные данные (массив объектов)
  const favoriteMarkup = parsedData      // разметка страницы favorite 
    .map(element => {
      return element.markup;
      // console.log(element.markup);
    })
    .join('');
  favoriteNewsList.innerHTML = favoriteMarkup;    // рендер разметки 
}


// if (favoriteNewsList) {
//     favoriteNewsList.addEventListener(
//       'click', onClick
//     );
// }

localStorageFavoriteData = JSON.parse(localStorageFavoriteData); //  массив эелементов 

function onClick(e) {  // при клике на add to favorite 
    if (!e.target.parentNode.classList.contains('item-news__add-to-favorite')) {
        return;
    } 

    const choosenNews = e.target.closest('.list-news__item'); // лишка
    const id = choosenNews.dataset.id;
    e.target // toggle class
      .closest('.item-news__add-to-favorite')
        .classList.toggle('hidden-span');

    const idX = localStorageFavoriteData.findIndex(item => item.id === id);  // id элемента по которому кликнули 
    localStorageFavoriteData.splice(idX, 1);     // удаление этого эелемента из массива 
    localStorage.setItem('favorite', JSON.stringify(localStorageFavoriteData));   // добавление массива в LS 
    if (localStorageFavoriteData.length) {
const favoriteMarkup = localStorageFavoriteData
  .map(element => {
    return element.markup;
    // console.log(element.markup);
  })
  .join('');
favoriteNewsList.innerHTML = favoriteMarkup;
    } else {
      // localStorage.removeItem('favorite');
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


