import { genres, formatGenres } from '../data/genres';

export function galleryTemplate({
  id,
  poster_path,
  original_title,
  release_date,
  genre_ids,
  vote_average,
}) {
  let genresArray = formatGenres(genre_ids);

  // function getGenres() {
  // genre_ids.map(genreId =>
  //   genres.filter(oneGenre => {
  //     if (oneGenre.id === genreId) {
  //       genresArray.push(`${oneGenre.name}`);
  //     }
  //   })
  // );
  // if (genresArray.length >= 3) {
  //   genresArray.splice(2, genresArray.length - 1, 'Other');
  // }
  // }
  // getGenres();

  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const date = release_date ? release_date.slice(0, 4) : '';
  const genresNames = genresArray.join(', ');
  const rating = vote_average.toFixed(1);

  if (poster_path === null) {
    return `<li class="collection_item">
  <article class="card" data-id=${id}>
  <span class="card-rating">${rating}</span>
  <div class="card_no-img">
  <p class="no-poster">Poster coming soon</p>
</div>
  </a>
      <div class="card-wrap">
        <h3 class="card-name">${original_title}</h3>
        <p class="card-genres">${genresNames} | ${date}</p>
      </div>
  </article>
  </li>`;
  }
  return `<li class="collection_item">
  <article class="card" data-id=${id}>
  <span class="card-rating">${rating}</span>
  <a href="" class="card_link">
  <img class="card_img" width="394" src=${url} alt=${original_title}>
  </a>
      <div class="card-wrap">
        <h3 class="card-name">${original_title}</h3>
        <p class="card-genres">${genresNames} | ${date}</p>
      </div>
  </article>
  </li>`;
}
