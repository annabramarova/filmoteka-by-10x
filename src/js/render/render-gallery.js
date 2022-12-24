import { galleryTemplate } from '../templates/gallery';
import { refs } from '../refs';
import { tune as tunePagination } from '../pagination';
import { loader, loaderRemove } from '../loading';

export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}
