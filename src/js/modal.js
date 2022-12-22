import { getCardTemplate } from './templates/getCardTemplate';
import Api from './api-service';
import { refs } from './refs';
const apiService = new Api();

refs.galleryList.addEventListener('click', onGalleryClick);
refs.movieModalCloseBtn.addEventListener('click', toggleModal);

console.log(refs.movieModalWatched);
console.log(refs.movieModalQueue);

function toggleModal() {
  refs.movieModalBackDrop.classList.toggle('hidden');
}

function killModal(e) {
  if (e.currentTarget === e.target || e.code === 'Escape') {
    refs.movieModalBackDrop.classList.add('hidden');
  }
}

function renderCard(data) {
  const cardMarkup = getCardTemplate(data);
  refs.movieModalContainer.innerHTML = cardMarkup;
}

function onGalleryClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  const cardId = card.dataset.id;
  const isPicture = e.target.classList.contains('card_img');

  if (!isPicture) {
    return;
  }
  if (!isPicture) {
    return;
  }

  refs.movieModalBackDrop.classList.remove('hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      console.log('data', data);
      renderCard(data);
      refs.movieModalBackDrop.addEventListener('mousedown', killModal);
      document.addEventListener('keydown', killModal);
    })
    .catch(console.log);

  document.removeEventListener('keydown', killModal);
  refs.movieModalBackDrop.removeEventListener('mousedown', killModal);
}
