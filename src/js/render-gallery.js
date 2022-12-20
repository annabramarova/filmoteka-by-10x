import { galleryTemplate } from './gallery';
import { refs } from './refs';

export function render(movies) {
  const moviesCollection = movies.results.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = moviesCollection;
}
