// import RenderNews from '../renderNews';

// const favoriteNewsList = document.querySelector('#favorite__news');





export default class LocalStorageClass {
  constructor() {
    this.popularArr = [];
    this.favoriteArr = [];
    this.read = [];
    this.imageURL = '';
    this.category = '';
    this.title = '';
    this.desc = '';
    this.date = '';
    this.url = '';
  }

  onAddToFavoriteClick(e) {
      if (!e.target.closest('button')) {
        return;
      }
    
      e.target // toggle class
        .closest('.item-news__add-to-favorite')
        .classList.toggle('hidden-span');
    
    const choosenNews = e.target.closest('.list-news__item'); // лишка
    
    this.title = choosenNews.querySelector('.item-news__title').textContent;
    this.desc = choosenNews.querySelector(
      '.item-news__description',
    ).textContent;
    this.imageURL = choosenNews.querySelector('.item-news__img').getAttribute('src');
    this.category = choosenNews.querySelector(
      '.item-news__category',
    ).textContent;
    this.date = choosenNews.querySelector('.item-news__info-date').textContent;
    this.url = choosenNews
      .querySelector('.item-news__info-link')
      .getAttribute('href');
    
      const chooseNewsObj = {
        title: this.title,
        desc: this.desc,
        imageURL: this.imageURL,
        url: this.url,
        category: this.category,
        date: this.date,
      };
    
      if (localStorage.getItem('favorite')) {
        // есть ли в LS запись с ключом favorite ?
        // если в LS есть запись favorite  =>
        const localStorageFavoriteData = localStorage.getItem('favorite'); // данные с LS
        this.favoriteArr = JSON.parse(localStorageFavoriteData) || []; // распарсенніе данные (массив объектов)
        
        const doesHaveElement = this.favoriteArr.findIndex(
          // проверяем есть ли в массиве объектов, объект с данным url
          news => news.url === this.url,
        );
        if (doesHaveElement < 0) {
          // если нет
          this.favoriteArr.push(chooseNewsObj);
          localStorage.setItem('favorite', JSON.stringify(this.favoriteArr));
        } else {
          // если да
          this.favoriteArr.splice(doesHaveElement, 1);
          localStorage.setItem('favorite', JSON.stringify(this.favoriteArr));
        }

      } else {
        // если в LS нет записи favorite
        this.favoriteArr.push(chooseNewsObj);
        localStorage.setItem('favorite', JSON.stringify(this.favoriteArr));
        
      }
  }
  
  onReadMoreClick(e) {
    if (!e.target.classList.contains('item-news__info-link')) {
      return;
    }

    const choosenNews = e.target.closest('.list-news__item'); // лишка

    this.title = choosenNews.querySelector('.item-news__title').textContent;
    this.desc = choosenNews.querySelector(
      '.item-news__description',
    ).textContent;
    this.imageURL = choosenNews
      .querySelector('.item-news__img')
      .getAttribute('src');
    this.category = choosenNews.querySelector(
      '.item-news__category',
    ).textContent;
    this.date = choosenNews.querySelector('.item-news__info-date').textContent;
    this.url = choosenNews
      .querySelector('.item-news__info-link')
      .getAttribute('href');
    
    const chooseNewsObj = {
      title: this.title,
      desc: this.desc,
      imageURL: this.imageURL,
      url: this.url,
      category: this.category,
      date: this.date,
    };

    if (localStorage.getItem('read')) {
      // есть ли в LS запись с ключом read ?
      // если в LS есть запись read  =>
      const localStorageReadData = localStorage.getItem('read'); // данные с LS
      this.read = JSON.parse(localStorageReadData) || []; // распарсенніе данные (массив объектов)

      const doesHaveElement = this.read.findIndex(
        news => news.url === this.url
      ); // проверяем есть ли в массиве объектов, объект с данным id
      console.log(doesHaveElement);
      if (doesHaveElement < 0) {
        // если нет
        this.read.push(chooseNewsObj);
        localStorage.setItem('read', JSON.stringify(this.read));
      } 
    } else {
      // если в LS нет записи read
      this.read.push(chooseNewsObj);
      localStorage.setItem('read', JSON.stringify(this.read));
    }
  }
}
