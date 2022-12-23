import { refs } from './refs.js';
import Api from './api-service.js';
import { renderGallery } from './render/render-gallery';
import { loader, loaderRemove } from './loading';

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
    const results = await api.getFilmBySearch();
    if (results.length === 0) {
      lastElementChild.style.display = 'block';
      buttonSearch.removeAttribute('disabled');
      loaderRemove();
      return;
    }
    renderGallery(results);
    buttonSearch.removeAttribute('disabled');
    loaderRemove();
  } catch {
    console.error();
  }
}
