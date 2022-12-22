import { async } from '@firebase/util';
import * as storage from './storage';

const testId = 10;
async function test() {
  console.log('start db test');
  console.log('getWatchedIds', await storage.getWatchedIds());
  console.log('isWatched(testId)', storage.isWatched(testId));
  console.log('addWatchedId(testId)');
  storage.addWatchedId(testId);
  console.log('isWatched(testId)', storage.isWatched(testId));
  console.log('removeWatchedId(testId)');
  storage.removeWatchedId(testId);
  console.log('isWatched(testId)', storage.isWatched(testId));

  for (let i = 1; i <= 41; i += 1) {
    storage.addWatchedId(i);
  }

  // console.log(storage.getWatched(0));
  // console.log(storage.getWatched(1));
  // console.log(storage.getWatched(2));
  // console.log(storage.getWatched(3));

  console.log('end db test');
}

// setTimeout(test, 4000);

function tuneRender(getFunction) {
  const movies = getFunction();
  pagination.tune(movies.page, movies.totalPges, page => {
    const filmCards = getFunction(page).results;
    renderCards(filmCards);
  });
}

import { renderGallery } from '../render-gallery';
import Api from '../api-service';
const apiService = new Api();

async function trendFilms() {
  let trendFilmes = await apiService.getTrendingFilms();
  return renderGallery(trendFilmes);
}

// trendFilms();

import { getQueued, getWatched } from './storage';

const res = getWatched(1);
res.then(({ results }) => {
  console.log('res', results);
  renderGallery(
    results.map(item => {
      item.genre_ids = item.genres.map(({ id }) => id);
      return item;
    })
  );
});
