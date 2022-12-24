import { libraryTemplate } from '../templates/library-template'
import { refs } from '../refs';

export function renderLibrary(movies) {
  let moviesCollection = movies.map(libraryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}