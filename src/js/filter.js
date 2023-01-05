import { refs } from './refs';
import { api } from './api-service';

import { goHome } from './header';
import { tuneRenderTrending, tuneRenderFilter } from './ui-controller';

refs.filters.addEventListener('mouseout', e => e.target.blur());
refs.filterListGenres.addEventListener('change', onGenresFilter);
refs.filterListYears.addEventListener('change', onYearsFilter);
refs.filterListVoteAverage.addEventListener('change', onVotesFilter);
refs.filterButtonOpen.addEventListener('click', onFilterOpen);
refs.filterResetButton.addEventListener('click', onFilterResetButton);

const filterGIF = 'https://i.gifer.com/C4j.gif';

function onFilterResetButton(e) {
  tuneRenderTrending();
  e.target.blur();
}

function onFilterOpen(e) {
  refs.filterContainer.classList.toggle('is-hidden-filter');
  refs.filterButtonOpen.classList.toggle('filter__btn__animation');
  return e.target.blur();
}

function onGenresFilter(e) {
  console.log(e.target);
  let genre = e.target.value;
  if (!genre) {
    api.genre = '';
  } else {
    api.genre = Number(genre);
  }
  renderFilter();
  e.target.blur();
}

function onYearsFilter(e) {
  let year = e.target.value;
  api.year = Number(year);
  renderFilter();
  e.target.blur();
}

function onVotesFilter(e) {
  let vote = e.target.value;
  api.vote = Number(vote);
  renderFilter();
  e.target.blur();
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
