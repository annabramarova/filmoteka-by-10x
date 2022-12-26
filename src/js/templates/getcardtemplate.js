export const getCardTemplate = ({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
  id,
}) => {
  if (poster_path === null) {
    return `
  <div class="movie-card" data-action=${id}>
    <div class="cardItem__image">
         <p class="no-poster">Poster coming soon</p>
    </div>
    <div class="cardItem__wrapper">
        <h2 class="cardItem__name">${title}</h2>
        <p class="cardItem__text">
          Vote / Votes<span class="cardItem__averageVote">${vote_average.toFixed(
            1
          )}</span>/<span
            class="cardItem__countVote"
            >${vote_count}</span
          >
        </p>
        <p class="cardItem__text">
          Popularity<span class="cardItem__data">${popularity.toFixed(1)}</span>
        </p>
        <p class="cardItem__text">
          Original&nbspTitle<span class="cardItem__title">${original_title}</span>
        </p>
        <div class="genres">
          <p class="cardItem__genre">Genre</p>
          <p class="cardItem__genreList">${genres
            .map(item => item.name)
            .join(', ')}</p>
        </div>
          <p class="cardItem__about">About</p>
          <p class="cardItem__description">${overview}
        </p>
       <div class="modal-btn__wrapper">
          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>
          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>
       </div>
    </div>   
  </div>
      `;
  }
  return `
  <div class="movie-card" data-action=${id}>
    <div class="cardItem__image">
        <img class="image" src="https://image.tmdb.org/t/p/w400${poster_path}" loading="lazy" alt="${id}" />
    </div>
    <div class="cardItem__wrapper">
        <h2 class="cardItem__name">${title}</h2>
        <p class="cardItem__text">
          Vote / Votes<span class="cardItem__averageVote">${vote_average.toFixed(
            1
          )}</span>/<span
            class="cardItem__countVote"
            >${vote_count}</span
          >
        </p>
        <p class="cardItem__text">
          Popularity<span class="cardItem__data">${popularity.toFixed(1)}</span>
        </p>
        <p class="cardItem__text">
          Original&nbspTitle<span class="cardItem__title">${original_title}</span>
        </p>
        <div class="genres">
          <p class="cardItem__genre">Genre</p>
          <p class="cardItem__genreList">${genres
            .map(item => item.name)
            .join(', ')}</p>
        </div>
          <p class="cardItem__about">About</p>
          <p class="cardItem__description">${overview}
        </p>
       <div class="modal-btn__wrapper">
          <button class="modal-btn modal-btn__watched" data-action-modal-watched>add to watched</button>
          <button class="modal-btn modal-btn__queue" data-action-modal-queue>add to queue</button>
       </div>
    </div>   
  </div>
      `;
};
