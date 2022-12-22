import { galleryTemplate } from '../templates/gallery'
import { refs } from '../refs';

export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}
