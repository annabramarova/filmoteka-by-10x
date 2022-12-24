// import { galleryTemplate } from './templates/gallery';
import { refs } from './refs';
import Api from './api-service';
const apiService = new Api();
import { genres } from './data/genres';

// const refs = {
//   galleryQueueBtn: document.querySelector('button[data-activ="queue"]'),
//   libMenu: document.querySelector('[data-modal]'),
//   libMenuCloseBtn: document.querySelector('.lib_modal-close-btn'),
//   bestCardContainer: document.querySelector(`.proposed-card`),
//   addToQueueBtn: document.querySelector(`.addToQueue`),
// };

const spiderThumb = document.querySelector(`.spider-thumb`);

let inLibStorage = `[]`;
let inLibParsed = [];
let lehghtLibSt = 0;
let libraryOpenBefor = false;

let inWatchedStorage = `[]`;
let inWatchedStorageParsed = [];
let lehghtSt = 0;

// refs.myLibraryLink.addEventListener(`click`, onLibraryOpen);

export function onLibraryOpen() {
  // inLibStorage = localStorage.getItem('queued');

  // if (!inLibStorage) {
  //   inLibStorage = `[]`;
  // }

  // inLibParsed = JSON.parse(inLibStorage);
  // lehghtLibSt = inLibParsed.length;

  // ----------------------------------
  // inWatchedStorage = localStorage.getItem('watched');

  // if (!inWatchedStorage) {
  //   inWatchedStorage = `[]`;
  // }

  // inWatchedStorageParsed = JSON.parse(inWatchedStorage);
  // lehghtSt = inWatchedStorageParsed.length;
  // ----------------------------------

  // if (!libraryOpenBefor && lehghtLibSt === 0 && lehghtSt === 0) {
  let testString = `
     <div class="spider-thumb">
      <p class="lib-modal-content__text">
      Nothing to see here<br />Add a movie please
      </p>
     </div>`;
  refs.galleryContainer.insertAdjacentHTML('beforeend', testString);
  console.log(spiderThumb);
  // spiderThumb.classList.remove('spyder-hidden');

  // libraryOpenBefor = true;

  // if (libraryOpenBefor) {
  //   refs.galleryContainer.innerHTML('');
  //   libraryOpenBefor = false;
  // }
  // }
}

// refs.galleryQueueBtn.addEventListener('click', onEmptyLibrary);

export function onEmptyLibrary() {
  inLibStorage = localStorage.getItem('queued');

  if (!inLibStorage) {
    inLibStorage = `[]`;
  }

  inLibParsed = JSON.parse(inLibStorage);
  lehghtLibSt = inLibParsed.length;

  if (lehghtLibSt !== 0) {
    return;
  }

  refs.libMenu.classList.remove('is-hidden');
  refs.addToQueueBtn.classList.remove('is-hidden');
  refs.libMenuCloseBtn.addEventListener(`click`, onLibMenuCloseBtnClick);
  window.addEventListener(`keydown`, handleEsc);
  window.addEventListener(`click`, handleOutClick);
  showBestCard();
}

function onLibMenuCloseBtnClick() {
  removeAllListner();
}

function handleEsc(event) {
  if (!(event.code === `Escape`)) {
    return;
  }
  removeAllListner();
}

function handleOutClick(event) {
  if (!event.target.classList.contains(`backdrop`)) {
    return;
  }
  removeAllListner();
}

function removeAllListner() {
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
            <span class="card-rating lib-card-rating">${rating}</span>
            <a href="" class="card_link">
              <img class="card_img lib-card_img" width="394" src=${url} alt="{original_title}">
            </a>
            <div class="card-wrap">
              <h3 class="card-name lib-card-name">${original_title}</h3>
              <p class="lib-card-genres">${genresNames} | ${date}</p>
            </div>
          </article>`;
}
