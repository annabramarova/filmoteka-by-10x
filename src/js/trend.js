import { refs } from './refs';
import ServiceApi from './api-service';
import { galleryTemplate } from './gallery';

const api = new ServiceApi();

async function trend() {
  try {
    await api.getTrendingFilms().then(({ results }) => {
        // console.log(results);
      render(results);
    });
  } catch (error) {
    console.log(error);
  }
}
trend();


function render(movies) {
  const moviesCollection = movies.results.map(galleryTemplate).join('');
  refs.galleryList.innerHTML = moviesCollection;
}
