import Notiflix from 'notiflix';
// import { refs } from './refs.js';
import { Api } from './api-service.js';
import { render } from './render-gallery';
import { getCardTemplate } from './getCardTemplate';

const refs = {
  formSearch: document.querySelector('.search-form'),
};

const api = new Api();

refs.formSearch.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  console.log(e);
  const {
    elements: { searchQuery },
  } = e.target;

  console.log(searchQuery.value);
  api.query = searchQuery.value.trim();
  console.log(api.query);
  await api.getTrendingFilms();
  api.getNextPage();
  console.log(api.page);
}
