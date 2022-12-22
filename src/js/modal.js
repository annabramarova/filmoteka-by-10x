import { getCardTemplate } from './getCardTemplate';
import Api from './api-service';
import { refs } from './refs';
const apiService = new Api();

const modalMovieContainer = document.querySelector('.movie-modal__container');
const backDrop = document.querySelector('.movie-backdrop');
const closeMovieModal = document.querySelector('.modal-close-btn');

refs.galleryList.addEventListener('click', onGalleryClick);
closeMovieModal.addEventListener('click', toggleModal);

function toggleModal() {
  backDrop.classList.toggle('visually-hidden');
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

  backDrop.classList.remove('visually-hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      console.log('data', data);
      renderCard(data);
    })
    .catch(console.log);
}
