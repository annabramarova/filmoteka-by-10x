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
  paginButtonLeft: document.querySelector('.paginButtonLeft'),
  paginButtonMinPage: document.querySelector('.paginButtonMinPage'),
  paginButtonElementLeft: document.querySelector('.paginButtonElementLeft'),
  paginButtonPageRemove_4: document.querySelector('.paginButtonPageRemove_4'),
  paginButtonPageRemove_3: document.querySelector('.paginButtonPageRemove_3'),
  paginButtonPageRemove_2: document.querySelector('.paginButtonPageRemove_2'),
  paginButtonPageRemove_1: document.querySelector('.paginButtonPageRemove_1'),
  paginButtonPage: document.querySelector('.paginButtonPage'),
  paginButtonPageAdd_1: document.querySelector('.paginButtonPageAdd_1'),
  paginButtonPageAdd_2: document.querySelector('.paginButtonPageAdd_2'),
  paginButtonPageAdd_3: document.querySelector('.paginButtonPageAdd_3'),
  paginButtonPageAdd_4: document.querySelector('.paginButtonPageAdd_4'),
  paginButtonElementRigth: document.querySelector('.paginButtonElementRigth'),
  paginButtonMaxPage: document.querySelector('.paginButtonMaxPage'),
  paginButtonRigth: document.querySelector('.paginButtonRigth'),

  // theme-dark/light-toggle
  switcher: document.querySelector('.switcher'),
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
