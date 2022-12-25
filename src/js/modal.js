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
} from './storage';
import { removeFromGalleryById } from './ui-controller';
import { getCurrentPage } from './header';
import { isLoggedIn, login } from './authentication';
import { trailer, onBtnClickTrailer } from './trailer';

const apiService = new Api();
let cardId = null;

refs.galleryList.addEventListener('click', onGalleryClick);
refs.movieModalCloseBtn.addEventListener('click', killModal);

if (refs.movieModalBackDrop.classList.contains('modal-hidden')) {
  refs.movieModalBackDrop.removeEventListener('mousedown', killModal);
  document.removeEventListener('keydown', killModal);
}

// function toggleModal() {
//   document.body.classList.toggle('modal-open');
//   refs.movieModalBackDrop.classList.toggle('hidden');
// }

function killModal(e) {
  if (
    e.currentTarget === refs.movieModalCloseBtn ||
    e.currentTarget === e.target ||
    e.code === 'Escape'
  ) {
    document.body.classList.toggle('modal-open');
    refs.movieModalContainer.innerHTML = '';
    refs.movieModalBackDrop.classList.add('modal-hidden');
    onBtnClickTrailer();
    // console.log('killModal', cardId);
    if (getCurrentPage() === 'watched') {
      isWatched(cardId).then(isWatched => {
        if (!isWatched) {
          removeFromGalleryById(cardId);
        }
      });
    }
    if (getCurrentPage() === 'queue') {
      isQueued(cardId).then(isQueued => {
        if (!isQueued) {
          removeFromGalleryById(cardId);
        }
      });
    }

    // isQueued(cardId).then(isQueued => {
    //   if (!isQueued) {
    //     removeFromGalleryById(cardId);
    //   }
    // });
  }
}

function renderCard(data) {
  const cardMarkup = getCardTemplate(data);
  refs.movieModalContainer.innerHTML = cardMarkup;
  refs.modalWatchedButton = document.querySelector(
    '[data-action-modal-watched]'
  );
  refs.modalQueueButton = document.querySelector('[data-action-modal-queue]');

  refs.modalWatchedButton.addEventListener('click', async e => {
    if (!isLoggedIn()) {
      login();
      return;
    }

    if (await isWatched(cardId)) {
      removeWatchedId(cardId);
      e.target.blur();
    } else {
      addWatchedId(cardId);
      e.target.blur();
    }
    updateButtonsCaption(cardId);
  });

  refs.modalQueueButton.addEventListener('click', async e => {
    if (!isLoggedIn()) {
      login();
      return;
    }

    if (await isQueued(cardId)) {
      removeQueuedId(cardId);
      e.target.blur();
    } else {
      addQueuedId(cardId);
      e.target.blur();
    }
    updateButtonsCaption(cardId);
  });

  updateButtonsCaption(cardId);
}

function onGalleryClick(e) {
  e.preventDefault();

  const card = e.target.closest('.card');
  if (!card) {
    return;
  }
  cardId = Number(card.dataset.id);
  // const isPicture = e.target.classList.contains('card_img');
  // const blankPicture = e.target.classList.contains('card_no-img');

  // if (!isPicture && blankPicture && card) return;

  if (!card) return;
  document.body.classList.toggle('modal-open');

  refs.movieModalBackDrop.classList.remove('modal-hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      renderCard(data);
      refs.movieModalBackDrop.addEventListener('mousedown', killModal);
      document.addEventListener('keydown', killModal);
      refs.modalCardItem = document.querySelector('.cardItem__image');
      trailer(cardId);
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
