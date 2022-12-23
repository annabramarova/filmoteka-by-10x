import { getCardTemplate } from './templates/getcardtemplate';
import Api from './api-service';
import { refs } from './refs';
import {
  isWatched,
  isQueued,
  addWatchedId,
  addQueuedId,
  removeWatchedId,
  removeQueuedId,
} from './storage/storage';

const apiService = new Api();
let cardId = null;

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
  cardId = Number(card.dataset.id);
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
      updateButtonsCaption(cardId);
      renderCard(data);
    })
    .catch(console.log);

  backDrop.addEventListener('mousedown', killModal);
  document.addEventListener('keydown', killModal);
}
backDrop.addEventListener('mousedown', killModal);
document.addEventListener('keydown', killModal);

const ADD_TO_WATCHED_CAPTION = 'Add to watched';
const REMOVE_WROM_WATCHED_CAPTION = 'Remove from watched';
const ADD_TO_QUEUE_CAPTION = 'Add to queue';
const REMOVE_FROM_QUEUE_CAPTION = 'Remove from queue';

function updateButtonsCaption(id) {
  refs.modalWatchedButton.textContent = isWatched(id)
    ? REMOVE_WROM_WATCHED_CAPTION
    : ADD_TO_WATCHED_CAPTION;
  refs.modalQueueButton.textContent = isQueued(id)
    ? REMOVE_FROM_QUEUE_CAPTION
    : ADD_TO_QUEUE_CAPTION;
}

refs.modalWatchedButton.addEventListener('click', e => {
  if (isWatched(cardId)) {
    removeWatchedId(cardId);
  } else {
    addWatchedId(cardId);
  }
  updateButtonsCaption(cardId);
});

refs.modalQueueButton.addEventListener('click', e => {
  if (isQueued(cardId)) {
    removeQueuedId(cardId);
  } else {
    addQueuedId(cardId);
  }
  updateButtonsCaption(cardId);
});
