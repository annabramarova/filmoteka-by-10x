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
  return `
  <div class="movie-card" data-action=${id}>
       <div class="cardItem__image">
        <img class="image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" />
      </div>

      <div class="cardItem__wrapper">
        <h2 class="cardItem__name">${title}</h2>
        <p class="cardItem__text">
          Vote / Votes<span class="cardItem__averageVote">>${vote_average}</span>/<span
            class="cardItem__countVote"
            >${vote_count}</span
          >
        </p>
        <p class="cardItem__text">
          Popularity<span class="cardItem__data">${popularity}</span>
        </p>
        <p class="cardItem__text">
          Original Title<span class="cardItem__title">${original_title}</span>
        </p>
        <div class="genres">
          <p class="cardItem__text">Genre</p>
          <p class="cardItem__genreList">${genres}</p>
        </div>

        <p class="cardItem__about">About</p>
        <p class="cardItem__description">${overview}
        </p>
      </div>
      </div>
      `;
};
