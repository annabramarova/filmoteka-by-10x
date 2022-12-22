import { getCardTemplate } from './getCardTemplate';
import Api from './api-service';
import { refs } from './refs';
const apiService = new Api();

const modalMovieContainer = document.querySelector('.movie-modal__container');
console.log(modalMovieContainer);
const backDrop = document.querySelector('.movie-backdrop');
// const modalEl = document.querySelector('.movie-modal');

const closeMovieModal = document.querySelector('.modal-close-btn');

refs.galleryList.addEventListener('click', onGalleryClick);
closeMovieModal.addEventListener('click', toggleModal);

function onGalleryClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  console.log(card);
  const cardId = card.dataset.id;
  console.log('cardId1', cardId);
  const isPicture = e.target.classList.contains('card_img');

  if (!isPicture) {
    return;
  }

  backDrop.classList.remove('visually-hidden');

  apiService
    .getFilmById(cardId)
    .then(data => {
      console.log('data', data);
    })
    .catch(console.log);
}

function toggleModal() {
  backDrop.classList.toggle('visually-hidden');
}

// function renderCard(id) {
//   const cardMarkup = getCardTemplate(id);
//   modalMovieContainer.innerHTML = cardMarkup;
// }
// async function cardByID(id) {
//   let filmById = await apiService.getFilmById(id);
//   renderCard(filmById);
// }

// cardByID();
