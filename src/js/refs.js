export const refs = {
  galleryList: document.querySelector('.collection_list'),
  pagin_box: document.querySelector('.pagin_box'),
  formSearch: document.querySelector('.search-form'),

  header: document.querySelector('.header'),
  homeLink: document.querySelector('#home-link'),
  myLibraryLink: document.querySelector('#my-library-link'),
  headerButtons: document.querySelectorAll('.header-button'),
  loginButton: document.querySelector('[data-action="login"]'),
  logoutButton: document.querySelector('[data-action="logout"]'),
  auth: document.querySelector('.auth'), //Бекдроп вікна для авторизації
  authForm: document.querySelector('.auth__form'), //Форма авторизації
  authCancelButton: document.querySelector('.auth [data-action="cancel"]'), //Кнопка Cancel
};
