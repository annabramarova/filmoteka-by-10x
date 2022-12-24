import { refs } from './refs';
const gif = './images/film.gif" alt="Film-GIF';

const watchedGIF = 'https://i.gifer.com/gg7.gif';
const queueGIF = 'https://i.gifer.com/C4j.gif';

const getEmptyWatchedMarkup = GIF => {
  return `
    <div class="plug__container">
      <h1 class="plug__title">Ooops! Is nothing here yet!</h1>      
      <img class="plag__gif" src="${GIF}" />
      <p>Hurry up and watch a movie!</p>
      <button type="button" class="plug__button" data-action="go home">
        Go Home!
      </button>
      <button type="button" class="plug__button" data-action="go queue">
        Go Queue!
      </button>
    </div>
  `;
};

const getEmptyQueueMarkup = GIF => {
  return `
    <div class="plug__container">
      <h1 class="plug__title">Ooops! Is nothing here yet!</h1>
      <img class="plag__gif" src="${GIF}" />
      <p>Hurry up and add the movie!</p>
      <button type="button" class="plug__button" data-action="go home">
        Go Home!
      </button>  
    </div>
  `;
};

export const emptyWatchedRender = () => {
  refs.plug.insertAdjacentHTML('beforeend', getEmptyWatchedMarkup(watchedGIF));
};

export const emptyQueueRender = () => {
  refs.plug.insertAdjacentHTML('beforeend', getEmptyQueueMarkup(queueGIF));
};

export const clearEmptyGallery = () => {
  refs.plug.innerHTML = '';
};
