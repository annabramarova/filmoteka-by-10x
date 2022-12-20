import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export class Api {
  constructor() {
    this.KEY = 'c23d7755b502540a74ef819e02a6a593';
    this.page = 1;
    this.query = '';
  }

  async getTrendingFilms() {
    const r = await axios.get(
      `/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${this.page}`
    );
    const d = await axios.get(r.data);
    return d;
  }

  async getFilmBySearch() {
    const r = await axios.get(
      `/search/movie?api_key=${this.KEY}&query=${this.query}&language=en-US&${this.page}`
    );
  }
}

// const vars = {
//   api_key: 'c23d7755b502540a74ef819e02a6a593',
//   URL: 'https://api.themoviedb.org/3/',
//   pagination: '&query=${}&page=${}&total_pages=${}',
// };
