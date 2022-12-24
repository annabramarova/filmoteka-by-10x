import { refs } from './refs.js';
import Api from './api-service.js';
import { loader, loaderRemove } from './loading';
import { async } from '@firebase/util';

const api = new Api();

function renderTrailerButton(official) {
  if (!official) {
    return;
  }
  const trailerBtnRender = `<button type="button" class="trailer-button">Play</button>`;
  refs.modalCardItem.insertAdjacentHTML('beforeend', trailerBtnRender);
  refs.trailerBtn.addEventListener('click', onClickTrailer);
}

// async function onClickTrailer(id) {
//     const {}
// }

function renderTrailer(key) {
  console.log(key);
  return `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/${key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="trailer"
    ></iframe>`;
}
renderTrailer(76600);
