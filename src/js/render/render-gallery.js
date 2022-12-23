import { galleryTemplate } from '../templates/gallery';
import { refs } from '../refs';
import { tune as tunePagination } from '../pagination';
import { loader, loaderRemove } from '../loading';

export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}

export async function tuneRender(getMoviesCallback) {
  loader();
  const { total_pages, results } = await getMoviesCallback(1);
  renderGallery(results);
  loaderRemove();
  tunePagination(total_pages, async page => {
    loader();
    const { results } = await getMoviesCallback(page);
    renderGallery(results);
    loaderRemove();
  });
}
