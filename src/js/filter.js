import { refs } from './refs';
import Api from './api-service';
import { api } from './api-service';
import {
  clearGallery,
  tuneRenderTrending,
  tuneRenderFilter,
} from './ui-controller';

refs.filterListGenres.addEventListener('change', onGenresFilter);
refs.filterListYears.addEventListener('change', onYearsFilter);
refs.filterListVoteAverage.addEventListener('change', onVotesFilter);
refs.filterButtonOpen.addEventListener('click', onFilterOpen);
refs.filterResetButton.addEventListener('click', onFilterResetButton);

const apiService = new Api();

function onFilterResetButton(e) {
  tuneRenderTrending();
}

function onFilterOpen(e) {
  refs.filterContainer.classList.toggle('is-hidden-filter');
  e.target.blur();
}

function onGenresFilter(e) {
  let genre = e.target.value;
  e.target.blur();
  api.genre = Number(genre);
  renderFilter();
}

function onYearsFilter(e) {
  let year = e.target.value;
  e.target.blur();
  api.year = Number(year);
  renderFilter();
}

function onVotesFilter(e) {
  let vote = e.target.value;
  e.target.blur();
  api.vote = Number(vote);
  renderFilter();
}

let startYear = 1907;
let endYear = new Date().getFullYear();
const yearsList = () => {
  let str = `<option value="" selected>All Years</option>`;
  for (let i = endYear; i >= startYear; i -= 1) {
    str += `<option value="${i}">${i}</option>`;
  }
  return str;
};

refs.filterListYears.innerHTML = yearsList();

async function renderFilter() {
  tuneRenderFilter();
  // const movies = await api.getFilteredMovies();
  //   const { results } = movies;
  //   console.log(results);

  // if (results.length === 0) {
  //   clearGallery();
  //   return;
  // }

  // tuneRenderTrending();
}
