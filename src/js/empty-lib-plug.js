import { refs } from './refs';
import { goHome } from './header';
import { onQueueClick } from './header';
const gif = './images/film.gif" alt="Film-GIF';

const watchedGIF = 'https://i.gifer.com/gg7.gif';
const queueGIF = 'https://i.gifer.com/C4j.gif';

const getEmptyWatchedMarkup = GIF => {
  return `
    <div class="plug__container">
      <strong class="plug__strong">Ooops! Is nothing here yet!</strong>
      <img class="plug__gif" src="${GIF}" />
      <p class="plug__text">Hurry up and watch a movie!</p>
      <button type="button" class="plug__button" data-action="go-home">
        Go Home
      </button>
      <button type="button" class="plug__button" data-action="go-queue">
        Go Queue
      </button>
    </div>
  `;
};

const getEmptyQueueMarkup = GIF => {
  return `
    <div class="plug__container">
      <strong class="plug__strong">Ooops! Is nothing here yet!</strong>
      <img class="plug__gif" src="${GIF}" />
      <p class="plug__text">Hurry up and add the movie!</p>
      <button type="button" class="plug__button" data-action="go-home">
        Go Home
      </button>  
    </div>
  `;
};

const onGoHomeButtonClick = e => {
  goHome(e);
};

const onGoQueueButtonClick = e => {
  // console.log('CLICK!');
  onQueueClick(e);
};

export const emptyWatchedRender = () => {
  refs.plug.innerHTML = getEmptyWatchedMarkup(watchedGIF);
  document
    .querySelector('[data-action="go-home"]')
    .addEventListener('click', onGoHomeButtonClick);

  document
    .querySelector('[data-action="go-queue"]')
    .addEventListener('click', onGoQueueButtonClick);
};

export const emptyQueueRender = () => {
  refs.plug.innerHTML = getEmptyQueueMarkup(queueGIF);
  document
    .querySelector('[data-action="go-home"]')
    .addEventListener('click', onGoHomeButtonClick);
};

export const clearEmptyGallery = () => {
  refs.plug.innerHTML = '';
};
