import { refs } from './refs';
import { getQueued, getWatched } from './storage/storage';
import { tuneRender } from './render/render-gallery';
import { showEmptyQueueModal } from './empty-lib-modal';
import { showEmptyWatchedModal } from './empty-watch-modal';
import Api from './api-service';
const apiService = new Api();

refs.myLibraryLink.addEventListener('click', onMyLibraryClick);
refs.headerButtons[0].addEventListener('click', onWatchedClick);
refs.headerButtons[1].addEventListener('click', onQueueClick);

function onMyLibraryClick(e) {
  e.preventDefault();

  refs.header.classList.add('header--my-library');
  refs.homeLink.classList.remove('current');
  makeCurrent(e);
  refs.formSearch.classList.add('visually-hidden');
  refs.headerButtons.forEach(element => {
    element.classList.remove('visually-hidden');
  });
  tuneRender(getWatched);
}

function onWatchedClick(e) {
  refs.headerButtons[1].classList.remove('current');
  makeCurrent(e);
}

function onQueueClick(e) {
  refs.headerButtons[0].classList.remove('current');
  makeCurrent(e);
}

function makeCurrent(e) {
  e.target.classList.add('current');
  e.target.blur();
}

export function showLoginButton() {
  refs.loginButton.classList.remove('visually-hidden');
}
export function hideLoginButton() {
  refs.loginButton.classList.add('visually-hidden');
}
export function showLogoutButton() {
  refs.logoutButton.classList.remove('visually-hidden');
}
export function hideLogoutButton() {
  refs.logoutButton.classList.add('visually-hidden');
}

refs.watchedButton.addEventListener(
  'click',
  tuneRender.bind(null, getWatched, showEmptyWatchedModal)
);

refs.queueButton.addEventListener(
  'click',
  tuneRender.bind(null, getQueued, showEmptyQueueModal)
);

refs.homeLink.addEventListener('click', goHome);
refs.logo.addEventListener('click', goHome);

function goHome(e) {
  e.preventDefault();

  refs.header.classList.remove('header--my-library');
  refs.myLibraryLink.classList.remove('current');
  makeCurrent(e);
  refs.formSearch.classList.remove('visually-hidden');
  refs.headerButtons.forEach(element => {
    element.classList.add('visually-hidden');
  });

  tuneRender(apiService.getTrendingFilmsByPage.bind(apiService));
}

tuneRender(apiService.getTrendingFilmsByPage.bind(apiService));
