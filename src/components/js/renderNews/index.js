
  
  
  const mobileScreenSize = window.matchMedia(
    'screen and (max-width: 767px)'
  ).matches;
  const tabletScreenSize = window.matchMedia(
    'screen and (min-width: 768px) and (max-width: 1279px)'
  ).matches;
  const desktopScreenSize = window.matchMedia(
    'screen and (min-width: 1280px)'
).matches;
const weatherMarkup = `<div class="weather"></div>`;
    

export default class RenderNews {
  constructor() {
    this.currentPage = 1;
    this.lastElem = 8;
    this.firstElem = 0;
    this.maxPages = 3;
  }
  renderPopularNews(newsArr, elemToJoin) {
    console.log(newsArr);
    if (mobileScreenSize === true) {
      this.lastElem = this.currentPage * 4;
      this.firstElem = this.lastElem - 4;
      this.maxPages = Math.ceil(newsArr.length / 4);
    } else if (tabletScreenSize === true) {
      this.lastElem = this.currentPage * 7;
      this.firstElem = this.lastElem - 7;
      this.maxPages = Math.ceil(newsArr.length / 8);
    }
    const newsList = newsArr.slice(this.firstElem, this.lastElem);
    const newsMarkup = newsList.map(({ title, abstract, media }) => {
      let imageURL = `https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c`;
      if (media.length !== 0) {
        imageURL = media[0]['media-metadata'][2].url;
      }
      return `<div class="news__item">
      <img src=${imageURL}
 alt="image" class="news__image"/>
      <div class="info">
     <h3>${title}</h3>
      <p>${abstract}</p>
      </div>
  </div>`;
    });
    if (mobileScreenSize === true) {
      newsMarkup.splice(0, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    } else if (tabletScreenSize === true) {
      newsMarkup.splice(1, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    } else if (desktopScreenSize === true) {
      newsMarkup.splice(2, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    }
  }
  renderNewsbyASearch(newsArr, elem) {
    console.log(newsArr);
    const IMAGE_BASE_URL = 'https://static01.nyt.com/';
    const newsMarkup = newsArr.map(
      ({ abstract, lead_paragraph, multimedia }) => {
        let imageURL = `https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c`;
        if (multimedia.length !== 0) {
          imageURL = `${IMAGE_BASE_URL}${multimedia[0].url}`;
        }
        return `<div class="news__item">
    <img src=${imageURL} alt="image" class="news__image"/>
      <div class="info">
     <h3>${abstract}</h3>
      <p>${lead_paragraph}</p>
      </div>
  </div>
      `;
      }
    );
    if (mobileScreenSize === true) {
      newsMarkup.splice(0, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elem.innerHTML = newsMarkupWithWeather;
    } else if (tabletScreenSize === true) {
      newsMarkup.splice(1, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elem.innerHTML = newsMarkupWithWeather;
    } else if (desktopScreenSize === true) {
      newsMarkup.splice(2, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elem.innerHTML = newsMarkupWithWeather;
    }
  }

  //  renderPopularNews(newsArr, elemToJoin) {
  //   if (mobileScreenSize === true) {
  //     this.lastElem = this.currentPage * 4;
  //     this.firstElem = this.lastElem - 4;
  //   } else if (tabletScreenSize === true) {
  //     this.lastElem = this.currentPage * 7;
  //     this.firstElem = this.lastElem - 7;
  //   }
  //   const newsList = newsArr.slice(this.firstElem, this.lastElem);
  //   const newsMarkup = newsList
  //     .map(({ title, abstract, media }) => {
  //       let imageURL = `https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c`;
  //       if (media.length !== 0) {
  //         imageURL = media[0]['media-metadata'][2].url;
  //       }
  //       return `<div class="news__item">
  //       <img src=${imageURL}
  //  alt="image" class="news__image"/>
  //       <div class="info">
  //      <h3>${title}</h3>
  //       <p>${abstract}</p>
  //       </div>
  //   </div>`;
  //     });
  //   if (mobileScreenSize === true) {
  //     newsMarkup.splice(0, 0, weatherMarkup);
  //     const newsMarkupWithWeather = newsMarkup
  //       .map(news => {
  //         return news;
  //       })
  //       .join('');
  //     elemToJoin.innerHTML = newsMarkupWithWeather;
  //   }
  //   else if (tabletScreenSize === true) {
  //     newsMarkup.splice(1, 0, weatherMarkup);
  //     const newsMarkupWithWeather = newsMarkup
  //       .map(news => {
  //         return news;
  //       })
  //       .join('');
  //     elemToJoin.innerHTML = newsMarkupWithWeather;
  //   } else if (desktopScreenSize === true) {
  //     newsMarkup.splice(2, 0, weatherMarkup);
  //     const newsMarkupWithWeather = newsMarkup
  //       .map(news => {
  //         return news;
  //       })
  //       .join('');
  //     elemToJoin.innerHTML = newsMarkupWithWeather;
  //   }

  // }

  renderCategoryNews(newsArr, elemToJoin) {
    console.log(newsArr);
    if (mobileScreenSize === true) {
      this.lastElem = this.currentPage * 4;
      this.firstElem = this.lastElem - 4;
      this.maxPages = Math.ceil(newsArr.length / 4);
    } else if (tabletScreenSize === true) {
      this.lastElem = this.currentPage * 7;
      this.firstElem = this.lastElem - 7;
      this.maxPages = Math.ceil(newsArr.length / 8);
    }
    const IMAGE_BASE_URL = 'https://static01.nyt.com/';
    const newsList = newsArr.slice(this.firstElem, this.lastElem);
    const newsMarkup = newsList.map(({ title, abstract, multimedia }) => {
      let imageURL = `https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c`;
      if (multimedia) {
        imageURL = `${multimedia[1].url}`;
      }
      return `<div class="news__item">
      <img src=${imageURL}
 alt="image" class="news__image"/>
      <div class="info">
     <h3>${title}</h3>
      <p>${abstract}</p>
      </div>
  </div>`;
    });
    if (mobileScreenSize === true) {
      newsMarkup.splice(0, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    } else if (tabletScreenSize === true) {
      newsMarkup.splice(1, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    } else if (desktopScreenSize === true) {
      newsMarkup.splice(2, 0, weatherMarkup);
      const newsMarkupWithWeather = newsMarkup
        .map(news => {
          return news;
        })
        .join('');
      elemToJoin.innerHTML = newsMarkupWithWeather;
    }
  }
}

