import { getCardTemplate } from './templates/getCardTemplate';
import Api from './api-service';
import { refs } from './refs';
const apiService = new Api();

const modalMovieContainer = document.querySelector('.movie-modal__container');
const backDrop = document.querySelector('.movie-backdrop');
const closeMovieModal = document.querySelector('.modal-close-btn');

refs.galleryList.addEventListener('click', onGalleryClick);
closeMovieModal.addEventListener('click', toggleModal);

backDrop.removeEventListener('mousedown', killModal);
document.removeEventListener('keydown', killModal);

function toggleModal() {
  backDrop.classList.toggle('hidden');
}

function killModal(e) {
  if (e.currentTarget === e.target || e.code === 'Escape') {
    backDrop.classList.add('hidden');
  }
}

function renderCard(data) {
  const cardMarkup = getCardTemplate(data);
  modalMovieContainer.innerHTML = cardMarkup;
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

  backDrop.classList.remove('hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      console.log('data', data);
      renderCard(data);
    })
    .catch(console.log);
  apiService
    .getFilmById(cardId)
    .then(data => {
      console.log('data', data);
      renderCard(data);
    })
    .catch(console.log);

  backDrop.addEventListener('mousedown', killModal);
  document.addEventListener('keydown', killModal);
}
  backDrop.addEventListener('mousedown', killModal);
  document.addEventListener('keydown', killModal);

