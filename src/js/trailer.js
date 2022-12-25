import { refs } from './refs.js';
import Api from './api-service.js';
import { loader, loaderRemove } from './loading';
import { async } from '@firebase/util';

const api = new Api();
export async function trailer(id) {
  try {
    const { official, key } = await api.getTrailer(id);
    if (!official) {
      return; // console.log(official);
    }
    // console.log(official);
    renderTrailerButton();
    renderTrailer(key);
    refs.trailerBtn = document.querySelector('.trailer-button');
    refs.trailerVideo = document.querySelector('.trailer');
    refs.trailerBtn.addEventListener('click', onBtnClickTrailer);
  } catch {
    // err => console.log(err.massage);
  }
}

export const onBtnClickTrailer = () =>
  refs.trailerVideo?.classList.remove('hidden-trailer');

function renderTrailerButton() {
  const trailerBtnRender = `<button type="button" class="trailer-button"><i class="fa fa-play-circle" aria-hidden="true"></i></button>`;
  return refs.modalCardItem.insertAdjacentHTML('beforeend', trailerBtnRender);
}

function renderTrailer(key) {
  // console.log(key);
  const trailer = `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/${key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="trailer hidden-trailer"
    ></iframe>`;
  return refs.modalCardItem.insertAdjacentHTML('beforeend', trailer);
}
