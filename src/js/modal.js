import axios from 'axios';
import { getCardTemplate } from './getCardTemplate';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'e236468c654efffdf9704cd975a74a96';

async function fetchMovie(movieId) {
  return await axios.get(`${movieId}?api_key=${API_KEY}&language=en-US`);
}

function renderCard() {
  const cardMarkup = getCardTemplate();
  const сard = document.querySelector('.movie-card');
  сard.insertAdjacentHTML('beforeend', cardMarkup);
}

fetchMovie(76600)
  .then(({ data }) => renderCard(data))
  .catch(() => []);
