import { galleryTemplate } from './gallery';
import { refs } from './refs';
import Api from './api-service';
const apiService = new Api();


export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}
async function trendFilms() {
  let trendFilmes = await apiService.getTrendingFilms();
  renderGallery(trendFilmes);
}

trendFilms();