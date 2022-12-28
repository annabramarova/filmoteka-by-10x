import { refs } from './refs';
import Api from './api-service';
import { clearGallery, tuneRenderTrending } from './ui-controller';

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
}

function onGenresFilter(e) {
  let genre = e.target.value;
  apiService.genre = Number(genre);
  renderFilter();
}

function onYearsFilter(e) {
  let year = e.target.value;
  apiService.year = Number(year);
  renderFilter();
}

function onVotesFilter(e) {
  let vote = e.target.value;
  apiService.vote = Number(vote);
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

  const movies = await apiService.getFilteredMovies();
  const { results } = movies;

  if (results.length === 0) {
    clearGallery();
    return;
  }  
  
  tuneRenderTrending(results);
}
