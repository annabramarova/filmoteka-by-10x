export const refs = {
  galleryList: document.querySelector('.collection_list'),
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
  searchErrorMessage: document.querySelector('#search-form p'),
  searchButton: document.querySelector('[data-activ="search"]'),

  movieModalContainer: document.querySelector('.movie-modal__container'),
  movieModalBackDrop: document.querySelector('.movie-backdrop'),
  movieModalCloseBtn: document.querySelector('.modal-close-btn'),

  modalCardItem: document.querySelector('.cardItem__image'),
  trailerBtn: document.querySelector('.trailer-button'),
  trailerVideo: document.querySelector('.trailer'),

  modalWatchedButton: document.querySelector('[data-action-modal-watched]'),
  modalQueueButton: document.querySelector('[data-action-modal-queue]'),

  auth: document.querySelector('.auth'), //Бекдроп вікна для авторизації
  authForm: document.querySelector('.auth__form'), //Форма авторизації
  authCancelButton: document.querySelector('.auth [data-action="cancel"]'), //Кнопка Cancel

  //team modal
  openModalBtn: document.querySelector('[data-team-modal-open]'),
  closeModalBtn: document.querySelector('[data-team-modal-close]'),
  modalTeam: document.querySelector('[data-team-modal]'),

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

  pagin_box: document.querySelector('.pagin_box'),
  pagin_button_el_1: document.querySelector('.pagin_button_el_1'),
  pagin_button_el_2: document.querySelector('.pagin_button_el_2'),
  pagin_button_el_3: document.querySelector('.pagin_button_el_3'),
  pagin_button_el_4: document.querySelector('.pagin_button_el_4'),
  pagin_button_el_5: document.querySelector('.pagin_button_el_5'),
  pagin_button_el_6: document.querySelector('.pagin_button_el_6'),
  pagin_button_el_7: document.querySelector('.pagin_button_el_7'),
  pagin_button_el_8: document.querySelector('.pagin_button_el_8'),
  pagin_button_el_9: document.querySelector('.pagin_button_el_9'),
  pagin_button_el_10: document.querySelector('.pagin_button_el_10'),
  pagin_button_el_11: document.querySelector('.pagin_button_el_11'),

  // theme-dark/light-toggle
  themeToggle: document.querySelector('.theme-toggle'),
  HTML: document.querySelector('html'),

  //filter
  filterWrapper: document.querySelector('.filter__wrapper'),
  filterListGenres: document.querySelector('.js-filter-genres'),
  filterListYears: document.querySelector('.js-filter-years'),
  filterListVoteAverage: document.querySelector('.js-filter-vote_average'),
  filterButtonOpen: document.querySelector('.filter__btn'),
  filterText: document.querySelector('.filter__text'),
  filterResetButton: document.querySelector('.filters__reset'),
  filterContainer: document.querySelector('.filter-container'),
  filters: document.querySelector('.filters'),
};
