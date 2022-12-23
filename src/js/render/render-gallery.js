import { galleryTemplate } from '../templates/gallery';
import { refs } from '../refs';
import { tune as tunePagination } from '../pagination';
import { loader, loaderRemove } from '../loading';

export function renderGallery(movies) {
  let moviesCollection = movies.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = '';
  refs.galleryList.insertAdjacentHTML('beforeend', moviesCollection);
}

export async function tuneRender(getMoviesCallback, runIfNoResults) {
  loader();
  const { total_pages, results } = await getMoviesCallback(1);
  renderGallery(results);

  if (total_pages === 0 && runIfNoResults) {
    runIfNoResults();
  }

  loaderRemove();
  tunePagination(total_pages, async page => {
    loader();
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: 'smooth',
    });
    const { results } = await getMoviesCallback(page);
    renderGallery(results);
    loaderRemove();
  });
}
