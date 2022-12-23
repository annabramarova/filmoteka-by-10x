import { galleryTemplate } from './templates/gallery';
// import { refs } from './refs';
import Api from './api-service';
const apiService = new Api();
import { genres } from './data/genres';

const refs = {
  galleryQueueBtn: document.querySelector('button[data-activ="queue"]'),
  libMenu: document.querySelector('[data-modal]'),
  libMenuCloseBtn: document.querySelector('.lib_modal-close-btn'),
  bestCardContainer: document.querySelector(`.proposed-card`),
  addToQueueBtn: document.querySelector(`.addToQueue`),
};

// refs.galleryQueueBtn.addEventListener('click', onLibClick);

export function showEmptyQueueModal() {
  onLibClick();
}

function onLibClick() {
  refs.libMenu.classList.remove('is-hidden');
  refs.addToQueueBtn.classList.remove('is-hidden');
  refs.libMenuCloseBtn.addEventListener(`click`, onLibMenuCloseBtnClick);
  window.addEventListener(`keydown`, handleEsc);
  window.addEventListener(`click`, handleOutClick);
  showBestCard();
}

function onLibMenuCloseBtnClick() {
  refs.libMenu.classList.add('is-hidden');
  refs.addToQueueBtn.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
  refs.bestCardContainer.innerHTML = ``;
}

function handleEsc(event) {
  console.log(event);
  if (!(event.code === `Escape`)) {
    return;
  }
  refs.libMenu.classList.add('is-hidden');
  refs.addToQueueBtn.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
  refs.bestCardContainer.innerHTML = ``;
}

function handleOutClick(event) {
  if (!event.target.classList.contains(`backdrop`)) {
    return;
  }
  refs.libMenu.classList.add('is-hidden');
  refs.addToQueueBtn.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
  refs.bestCardContainer.innerHTML = ``;
}

async function showBestCard() {
  let trendFilmes = await apiService.getTrendingFilms();
  let bestCard = BestCardTemplate(trendFilmes[0]);
  refs.bestCardContainer.innerHTML = bestCard;

  console.log(bestCard);
}

function BestCardTemplate({
  id,
  poster_path,
  original_title,
  release_date,
  genre_ids,
  vote_average,
}) {
  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const date = release_date.slice(0, 4);
  const genresArray = genre_ids.map(id =>
    genres.find(genre => genre.id === id)
  );
  const genresNames = genresArray.map(({ name }) => name).join(', ');
  const rating = vote_average.toFixed(2);

  return `<p class="lib-modal-content__text-small">you might like this movie:</p>
          <article class="card-proposed" data-id=${id}>
            <span class="card-rating">${rating}</span>
            <a href="" class="card_link">
              <img class="card_img" width="394" src=${url} alt="{original_title}">
            </a>
            <div class="card-wrap">
              <h3 class="card-name">${original_title}</h3>
              <p class="card-genres">${genresNames} | ${date}</p>
            </div>
          </article>`;
}
