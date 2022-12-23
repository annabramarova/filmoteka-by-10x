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

refs.galleryList.addEventListener('click', onGalleryClick);
refs.movieModalCloseBtn.addEventListener('click', toggleModal);

if (refs.movieModalBackDrop.classList.contains('hidden')) {
  refs.movieModalBackDrop.removeEventListener('mousedown', killModal);
  document.removeEventListener('keydown', killModal);
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.movieModalBackDrop.classList.toggle('hidden');
}

function killModal(e) {
  if (e.currentTarget === e.target || e.code === 'Escape') {
    document.body.classList.toggle('modal-open');
    refs.movieModalBackDrop.classList.add('hidden');
  }
}

function renderCard(data) {
  const cardMarkup = getCardTemplate(data);
  refs.movieModalContainer.innerHTML = cardMarkup;
}

function onGalleryClick(e) {
  e.preventDefault();
  document.body.classList.toggle('modal-open');
  const card = e.target.closest('.card');
  cardId = Number(card.dataset.id);
  const isPicture = e.target.classList.contains('card_img');

  if (!isPicture) {
    return;
  }

  refs.movieModalBackDrop.classList.remove('hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      updateButtonsCaption(cardId);
      renderCard(data);
      refs.movieModalBackDrop.addEventListener('mousedown', killModal);
      document.addEventListener('keydown', killModal);
    })
    .catch(console.log);
}

const ADD_TO_WATCHED_CAPTION = 'Add to watched';
const REMOVE_WROM_WATCHED_CAPTION = 'Remove from watched';
const ADD_TO_QUEUE_CAPTION = 'Add to queue';
const REMOVE_FROM_QUEUE_CAPTION = 'Remove from queue';

async function updateButtonsCaption(id) {
  refs.modalWatchedButton.textContent = (await isWatched(id))
    ? REMOVE_WROM_WATCHED_CAPTION
    : ADD_TO_WATCHED_CAPTION;
  refs.modalQueueButton.textContent = (await isQueued(id))
    ? REMOVE_FROM_QUEUE_CAPTION
    : ADD_TO_QUEUE_CAPTION;
}

refs.modalWatchedButton.addEventListener('click', async e => {
  if (await isWatched(cardId)) {
    removeWatchedId(cardId);
  } else {
    addWatchedId(cardId);
  }
  updateButtonsCaption(cardId);
});

refs.modalQueueButton.addEventListener('click', async e => {
  if (await isQueued(cardId)) {
    removeQueuedId(cardId);
  } else {
    addQueuedId(cardId);
  }
  updateButtonsCaption(cardId);
});
