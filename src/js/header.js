import { refs } from './refs';
import { getQueued, getWatched } from './storage/storage';
import { tune as tunePagination } from './pagination';
import {renderGallery} from './render-gallery'

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
  // showLoginButton();
  // showLogoutButton();
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

refs.watchedButton.addEventListener('click', async () => {
  const { total_pages, results } = await getWatched(1);
  renderGallery(results);

  tunePagination(total_pages, (page) => {
    const { results } = await getWatched(page);
    renderGallery(results);
  });
});

refs.queueButton.addEventListener('click', async () => {
  const { total_pages, results } = await getQueued(1);
  renderGallery(results);
  
  tunePagination(total_pages, (page) => {
    const { results } = await getQueued(page);
    renderGallery(results);
  });
});