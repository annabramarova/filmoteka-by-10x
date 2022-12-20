export function galleryTemplate({
  id,
  poster_path,
  original_title,
  release_date,
  genre_ids,
}) {
  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const date = release_date.splice(0,3);
  const genres = genre_ids;

  return `<li class="collection_item">
<article class="card" data-id=${id}>
    <a href="" class="card_link">
        <img class="card_img" width="395" src=${url} alt="{original_title}">
    </a>
    <div class="card-wrap">
        <h3 class="card-name">${original_title}</h3>
        <p class="card-genres">${genres} | ${date}</p>
    </div>
</article>
</li>`;
}
