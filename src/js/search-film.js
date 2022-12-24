import { refs } from './refs.js';
import Api from './api-service.js';
import { renderGallery } from './render/render-gallery';
import { loader, loaderRemove } from './loading';
import { tune as tunePagination } from './pagination';
import { tuneRenderSearch } from './ui-controller.js';

export const api = new Api();

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
    e.currentTarget.reset();
    return;
  }
  try {
    buttonSearch.setAttribute('disabled', true);
    lastElementChild.style.display = 'none';
    buttonSearch.removeAttribute('disabled');

    tuneRenderSearch();
  } catch {
    console.error();
  } finally {
    refs.formSearch.reset();
    loaderRemove();
    console.log('finally');
  }
}

export function onEmptySearch() {
  console.log('no data');
  lastElementChild.style.display = 'block';
  buttonSearch.removeAttribute('disabled');
}
