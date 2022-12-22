import { galleryTemplate } from '../templates/gallery';
import { refs } from '../refs';
import { tune as tunePagination } from '../pagination';

export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}

export async function tuneRender(getMoviesCallback) {
  const { total_pages, results } = await getMoviesCallback(1);
  renderGallery(results);

  tunePagination(total_pages, async page => {
    const { results } = await getMoviesCallback(page);
    renderGallery(results);
  });
}
