import { refs } from './refs.js';
import Api from './api-service.js';
import { renderGallery } from './render-gallery';

const api = new Api();

refs.formSearch.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { searchQuery },
  } = e.target;
  api.query = searchQuery.value.trim();
  if (api.query === '') {
    return console.log('nothing');
  }
  try {
    const results = await api.getFilmBySearch();
    if (results.length === 0) {
      return console.log('qwe');
    }
    renderGallery(results);

    console.dir(results.length);
  } catch {
    console.error();
  }
}
