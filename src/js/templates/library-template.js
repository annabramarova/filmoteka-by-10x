import { genres, genresDictiorary } from '../data/genres';

export function libraryTemplate({
  id,
  poster_path,
  original_title,
  release_date,
  genre_ids,
  vote_average,
}) {
  let genresArray = [];

  // function getGenres() {
  //   genre_ids.map(genreId =>
  //     genres.filter(oneGenre => {
  //       if (oneGenre.id === genreId) {
  //         genresArray.push(`${oneGenre.name}`);
  //       }
  //     })
  //   );
  //   if (genresArray.length >= 3) {
  //     genresArray.splice(2, genresArray.length - 1, 'Other');
  //   }
  // }
  // getGenres();

  if (genre_ids.length > 3) {
    genre_ids.splice(2, genre_ids.length, 'other');
  }
  genresArray = genre_ids.map(genreId => genresDictiorary[genreId]);

  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const date = release_date ? release_date.slice(0, 4) : '';
  const genresNames = genresArray.join(', ');
  const rating = vote_average.toFixed(1);

  if (poster_path === null) {
    return `<li class="collection_item">
    <article class="card" data-id=${id}>
    <div class="card_no-img">
    <p class="no-poster">Poster coming soon</p>
  </div>
    <div class="library-card-wrap-info">
          <h3 class="card-name">${original_title}</h3>
          <p class="library-card-genres">${genresNames} | ${date}<span class="library-card-rating">${rating}</span></p>
        </div>
    </article>
    </li>`;
  }

  return `<li class="collection_item">
  <article class="card" data-id=${id}>
  <a href="" class="card_link">
  <img class="card_img" width="394" src=${url} alt=${original_title}>
  </a>
  <div class="library-card-wrap-info">
        <h3 class="card-name">${original_title}</h3>
        <p class="library-card-genres">${genresNames} | ${date}<span class="library-card-rating">${rating}</span></p>
      </div>
  </article>
  </li>`;
}
