import { genres } from './data/genres';

export function galleryTemplate({
  id,
  poster_path,
  original_title,
  release_date,
  genre_ids,
}) {
  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const date = release_date.slice(0, 4);
  const genresArray = genre_ids.map(id =>
    genres.find(genre => genre.id === id)
  );
  const genresNames = genresArray.map(({ name }) => name).join(', ');

  return `<li class="collection_item">
<article class="card" data-id=${id}>
<a href="" class="card_link">
<img class="card_img" width="394" src=${url} alt="{original_title}">
</a>
    <div class="card-wrap">
      <h3 class="card-name">${original_title}</h3>
      <p class="card-genres">${genresNames} | ${date}</p>
    </div>
</article>
</li>`;
}
