import { galleryTemplate } from './templates/gallery';
// import { refs } from './refs';
import Api from './api-service';
const apiService = new Api();
import { genres } from './data/genres';

const refs = {
  galleryWatchedBtn: document.querySelector('button[data-activ="watched"]'),
  libMenu: document.querySelector('[data-modal]'),
  libMenuCloseBtn: document.querySelector('.lib_modal-close-btn'),
  bestCardContainer: document.querySelector(`.proposed-card`),
};

// refs.galleryWatchedBtn.addEventListener('click', onWatchedClick);

export function showEmptyWatchedModal() {
  onWatchedClick();
}

function onWatchedClick() {
  refs.libMenu.classList.remove('is-hidden');
  refs.libMenuCloseBtn.addEventListener(`click`, onLibMenuCloseBtnClick);
  window.addEventListener(`keydown`, handleEsc);
  window.addEventListener(`click`, handleOutClick);
}

function onLibMenuCloseBtnClick() {
  refs.libMenu.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
}

function handleEsc(event) {
  console.log(event);
  if (!(event.code === `Escape`)) {
    return;
  }
  refs.libMenu.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
}

function handleOutClick(event) {
  if (!event.target.classList.contains(`backdrop`)) {
    return;
  }
  refs.libMenu.classList.add('is-hidden');
  refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
  window.removeEventListener(`keydown`, handleEsc);
  window.removeEventListener(`click`, handleOutClick);
}
