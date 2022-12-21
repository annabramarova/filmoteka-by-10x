import './js/preloader';
// import './js/render-gallery';
import './js/team-modal';
import './js/pagination';
import './js/api-service';

// import './js/api-service';
import './js/loading';
import './js/api-service';
import './js/modal';

import Api from './js/api-service';
import { renderGallery } from './js/render-gallery';
const apiService = new Api();

async function trendFilms() {
  let trendFilmes = await apiService.getTrendingFilms();
  renderGallery(trendFilmes);
}

trendFilms();
