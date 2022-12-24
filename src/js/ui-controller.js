import { refs } from './refs';
import { tune as tunePagination } from './pagination';
import { loader, loaderRemove } from './loading';
import { renderGallery } from './render/render-gallery';
import { renderLibrary } from './render/render-library';

// import { onEmptyLibrary } from './empty-lib-modal';
// import { onEmptyWatched } from './empty-watch-modal';
import { onEmptySearch } from './search-film';
import { api } from './api-service';
import { getWatched, getQueued } from './storage';

export async function tuneRender({
  getMoviesCallback,
  renderCallback,
  runIfNoResultsCallback,
  preventRenderIfNoResults,
}) {
  console.log('name', getMoviesCallback.name);
  try {
    loader();
    const { total_pages, results } = await getMoviesCallback(1);

    if (total_pages === 0 && runIfNoResultsCallback) {
      runIfNoResultsCallback();
    }

    if (total_pages === 0 && preventRenderIfNoResults) {
      return;
    }

    renderCallback(results);
    tunePagination(total_pages, async page => {
      loader();
      window.scrollTo({
        top: 0,
        left: 0,
        // behavior: 'smooth',
      });
      const { results } = await getMoviesCallback(page);
      renderCallback(results);
      loaderRemove();
    });
  } finally {
    loaderRemove();
  }
}

export function removeFromGalleryById(id) {
  const card = refs.galleryList
    .querySelector(`[data-id="${id}"]`)
    .closest('.collection_item');
  if (card) {
    card.remove();
  }
}

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}

export const tuneRenderTrending = tuneRender.bind(null, {
  getMoviesCallback: api.getTrendingFilmsByPage.bind(api),
  renderCallback: renderGallery,
  runIfNoResultsCallback: null,
});

export const tuneRenderSearch = tuneRender.bind(null, {
  getMoviesCallback: api.getFilmSearchByPage.bind(api),
  renderCallback: renderLibrary,
  runIfNoResultsCallback: onEmptySearch,
  preventRenderIfNoResults: true,
});

export const tuneRenderWantched = tuneRender.bind(null, {
  getMoviesCallback: getWatched,
  renderCallback: renderLibrary,
  runIfNoResultsCallback: null,
});

export const tuneRenderQeueue = tuneRender.bind(null, {
  getMoviesCallback: getQueued,
  renderCallback: renderLibrary,
  runIfNoResultsCallback: null,
});

tuneRenderTrending();
