import { refs } from './refs';

// const refs = {
//   galleryWatchedBtn: document.querySelector('button[data-activ="watched"]'),
//   libMenu: document.querySelector('[data-modal]'),
//   libMenuCloseBtn: document.querySelector('.lib_modal-close-btn'),
//   bestCardContainer: document.querySelector(`.proposed-card`),
// };

let inWatchedStorage = ``;
let inWatchedStorageParsed = [];

refs.galleryWatchedBtn.addEventListener('click', onEmptyWatched);

export function onEmptyWatched() {
  inWatchedStorage = localStorage.getItem('watched');
  inWatchedStorageParsed = JSON.parse(inWatchedStorage);
  let lehghtSt = inWatchedStorageParsed.length;

  if (lehghtSt !== 0) {
    return;
  }

  refs.libMenu.classList.remove('is-hidden');
  refs.libMenuCloseBtn.addEventListener(`click`, onLibMenuCloseBtnClick);
  window.addEventListener(`keydown`, handleEsc);
  window.addEventListener(`click`, handleOutClick);
}

function onLibMenuCloseBtnClick() {
  removeAllListn();
}

function handleEsc(event) {
  console.log(event);
  if (!(event.code === `Escape`)) {
    return;
  }
  removeAllListn();
}

function handleOutClick(event) {
  if (!event.target.classList.contains(`backdrop`)) {
    return;
  }
  removeAllListn();
}

function removeAllListn() {
  refs.libMenu.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
}
