export const refs = {
  galleryList: document.querySelector('.collection_list'),
  pagin_box: document.querySelector('.pagin_box'),
  formSearch: document.querySelector('.search-form'),
  arrow: document.querySelector('.arrow-ref'),
  header: document.querySelector('.header'),
  logo: document.querySelector('.header .logo'),
  homeLink: document.querySelector('#home-link'),
  myLibraryLink: document.querySelector('#my-library-link'),
  headerButtons: document.querySelectorAll('.header-button'),
  loginButton: document.querySelector('[data-action="login"]'),
  logoutButton: document.querySelector('[data-action="logout"]'),
  watchedButton: document.querySelector('[data-activ="watched"]'),
  queueButton: document.querySelector('[data-activ="queue"]'),

  movieModalContainer: document.querySelector('.movie-modal__container'),
  movieModalBackDrop: document.querySelector('.movie-backdrop'),
  movieModalCloseBtn: document.querySelector('.modal-close-btn'),

  modalWatchedButton: document.querySelector('[data-action-modal-watched]'),
  modalQueueButton: document.querySelector('[data-action-modal-queue]'),

  auth: document.querySelector('.auth'), //Бекдроп вікна для авторизації
  authForm: document.querySelector('.auth__form'), //Форма авторизації
  authCancelButton: document.querySelector('.auth [data-action="cancel"]'), //Кнопка Cancel

  //team modal
  openModalBtn: document.querySelector('[data-team-modal-open]'),
  closeModalBtn: document.querySelector('[data-team-modal-close]'),
  modalTeam: document.querySelector('[data-team-modal]'),
  body: document.querySelector('body'),

  // empty library-watcher modal
  galleryWatchedBtn: document.querySelector('button[data-activ="watched"]'),
  libMenu: document.querySelector('[data-modal]'),
  libMenuCloseBtn: document.querySelector('.lib_modal-close-btn'),
  bestCardContainer: document.querySelector(`.proposed-card`),
  galleryQueueBtn: document.querySelector('button[data-activ="queue"]'),
  addToQueueBtn: document.querySelector(`.addToQueue`),
  galleryContainer: document.querySelector(`.gallery-container`),

  // emty library-plug
  plug: document.querySelector('.plug'),
};
