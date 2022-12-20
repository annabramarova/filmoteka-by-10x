import axios from 'axios';
export class Api {
  constructor() {
    this.URL = 'https://api.themoviedb.org/3/';
    this.KEY = 'c23d7755b502540a74ef819e02a6a593';
    this.page = 1;
    this.query = '';
  }

  async getTrendingFilms() {
    const r = await axios.get(
      `${this.URL}/trending/movie/week?api_key=${this.KEY}&language=en-US&page=${this.page}`
    );
    const d = await axios.get(r.data);
    return d;
  }

  async getFilmBySearch() {}
}

// const vars = {
//   api_key: 'c23d7755b502540a74ef819e02a6a593',
//   URL: 'https://api.themoviedb.org/3/',
//   pagination: '&query=${}&page=${}&total_pages=${}',
// };
