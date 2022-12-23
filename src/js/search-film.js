import { refs } from './refs.js';
import Api from './api-service.js';
import { renderGallery } from './render/render-gallery';
import { loader, loaderRemove } from './loading';
import { tune as tunePagination } from './pagination';

const api = new Api();

refs.formSearch.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { searchQuery },
    lastElementChild,
  } = e.target;

  const buttonSearch = e.target[1];

  api.query = searchQuery.value.trim();
  if (api.query === '') {
    lastElementChild.style.display = 'block';
    return;
  }
  try {
    loader();
    buttonSearch.setAttribute('disabled', true);
    lastElementChild.style.display = 'none';
    const { total_pages, results } = await api.getFilmSearchByPage(1);
    if (results.length === 0) {
      console.log('no data');
      lastElementChild.style.display = 'block';
      buttonSearch.removeAttribute('disabled');
      return;
    }
    renderGallery(results);
    tunePagination(total_pages, async page => {
      loader();
      const { results } = await api.getFilmSearchByPage(page);
      renderGallery(results);
      loaderRemove();
    });

    buttonSearch.removeAttribute('disabled');
  } catch {
    console.error();
  } finally {
    loaderRemove();
    console.log('finally');
  }
}
