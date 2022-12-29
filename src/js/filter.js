import { refs } from './refs';
import { api } from './api-service';

import { goHome } from './header';
import {
  tuneRenderTrending,
  tuneRenderFilter,
} from './ui-controller';


refs.filterListGenres.addEventListener('change', onGenresFilter);
refs.filterListYears.addEventListener('change', onYearsFilter);
refs.filterListVoteAverage.addEventListener('change', onVotesFilter);
refs.filterButtonOpen.addEventListener('click', onFilterOpen);
refs.filterResetButton.addEventListener('click', onFilterResetButton);

const filterGIF = 'https://i.gifer.com/C4j.gif';

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

const getNothingFoundFilter = GIF => {
  return `
    <div class="plug__container">
      <strong class="plug__strong">Ooops! Nothing found!</strong>
      <img class="plug__gif" src="${GIF}" />
      <button type="button" class="plug__button" data-action="go-home">
        Try again
      </button> 
    </div>
  `;
};

export const emptyFilterRender = () => {
  refs.plug.innerHTML = getNothingFoundFilter(filterGIF);
  document
    .querySelector('[data-action="go-home"]')
    .addEventListener('click', onGoHomeButtonClick);
};

const onGoHomeButtonClick = e => {
    goHome(e);
    refs.filterContainer.reset();
};