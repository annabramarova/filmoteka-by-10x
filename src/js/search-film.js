import { refs } from './refs.js';
import { api } from './api-service.js';
import { loader, loaderRemove } from './loading';
import { tuneRenderSearch } from './ui-controller.js';

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
    loader();
    buttonSearch.setAttribute('disabled', true);
    lastElementChild.style.display = 'none';
    buttonSearch.removeAttribute('disabled');
    tuneRenderSearch();
  } catch {
    // console.error();
  } finally {
    refs.formSearch.reset();
    loaderRemove();
    // console.log('finally');
  }
}

export function onEmptySearch() {
  // console.log('no data');
  refs.searchErrorMessage.style.display = 'block';
  refs.searchButton.removeAttribute('disabled');
}
