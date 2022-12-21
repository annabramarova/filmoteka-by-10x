export const refs = {
  galleryList: document.querySelector('.collection_list'),
  pagin_box: document.querySelector('.pagin_box'),
  formSearch: document.querySelector('.search-form'),

  homeLink: document.querySelector('#home-link'),
  myLibraryLink: document.querySelector('#my-library-link'),
  watchedButton: document.querySelector('[data-activ="watched"]'),
  queueButton: document.querySelector('[data-activ="queue"]'),
};

refs.homeLink.addEventListener('click', e => {
  e.preventDefault();
  console.log('CLICK!');
});
refs.myLibraryLink.addEventListener('click', e => {
  e.preventDefault();
  console.log('CLICK!');
});
refs.watchedButton.addEventListener('click', e => console.log('CLICK!'));
refs.queueButton.addEventListener('click', e => console.log('CLICK!'));
