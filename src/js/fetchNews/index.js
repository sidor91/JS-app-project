export default class FetchNews {
  constructor() {
    this.searchQuery = '';
    this.category = '';
    this.date = '';
    this.key = 'ttibAwM4O4DleGl9I7vunskaBg8WG7A3';
    this.page = 1;
    
  }
  async fetchNewsBySearch() {
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    if (this.date !== '') {
      const searchNews = await fetch(
        `${BASE_URL}?q=${this.searchQuery}&fq=pub_date:${this.date}&page=${
          this.page - 1
        }&api-key=${this.key}`,
      );
      return searchNews.json();
    } else {
       const searchNews = await fetch(
         `${BASE_URL}?q=${this.searchQuery}&page=${this.page - 1}&api-key=${
           this.key
         }`,
       );
      return searchNews.json();
    }
  }

  async fetchCategoriesList() {
    const BASE_URL =
      'https://api.nytimes.com/svc/news/v3/content/section-list.json';
    const fetchCategoriesList = await fetch(`${BASE_URL}?api-key=${this.key}`);
    const categoriesList = await fetchCategoriesList.json();
    return categoriesList.results;
  }

  async fetchNewsByCategory() {
    const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/all/';
     const fetchCategoryNews = await fetch(
       `${BASE_URL}${this.category}.json?api-key=${this.key}`,
     );
     return fetchCategoryNews.json();
  }

  async fetchNewsByMostPopular() {
    const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
    const mostPopular = await fetch(`${BASE_URL}?api-key=${this.key}`);
    const mostPopularList = await mostPopular.json();
    return mostPopularList;
  }
}
