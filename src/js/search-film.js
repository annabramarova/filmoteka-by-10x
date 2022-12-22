import { refs } from './refs.js';
import Api from './api-service.js';
import { renderGallery } from './render-gallery';
import { loader, loaderRemove } from './loading';

const api = new Api();

refs.formSearch.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { searchQuery },
    lastElementChild,
  } = e.currentTarget;
  api.query = searchQuery.value.trim();
  if (api.query === '') {
    lastElementChild.style.display = 'block';
    return;
  }
  try {
    loader();
    lastElementChild.style.display = 'none';
    const results = await api.getFilmBySearch();
    if (results.length === 0) {
      lastElementChild.style.display = 'block';
      loaderRemove();
      return;
    }
    renderGallery(results);
    loaderRemove();
    console.dir(results);
  } catch {
    console.error();
  }
}
