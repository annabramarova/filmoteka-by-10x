import { refs } from './refs';

refs.myLibraryLink.addEventListener('click', onMyLibraryClick);
refs.headerButtons[0].addEventListener('click', onWatchedClick);
refs.headerButtons[1].addEventListener('click', onQueueClick);

// refs.watchedButton.addEventListener('click', e => console.log('CLICK!'));

// refs.queueButton.addEventListener('click', e => console.log('CLICK!'));

function onMyLibraryClick(e) {
  e.preventDefault();

  refs.header.classList.add('header--my-library');
  refs.homeLink.classList.remove('current');
  makeCurrent(e);
  refs.formSearch.classList.add('visually-hidden');
  refs.headerButtons.forEach(element => {
    element.classList.remove('visually-hidden');
  });
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
