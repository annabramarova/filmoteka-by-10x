export const getCardTemplate = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) => {
  return `
        <div class="cardItem__image">
        <img
          class="image"
          src="https://image.tmdb.org/t/p/w500"${poster_path}"
          alt="${title}"
        />
      </div>

      <div class="cardItem__wrapper">
        <h2 class="cardItem__name">"${title}"</h2>
        <p class="cadrItem__vote cardItem_text">
          Vote / Votes<span class="cardItem__vote_average"
            >"${vote_average}"</span
          >/<span class="cardItem__vote_count">"${vote_count}"</span>
        </p>
        <p class="cardItem__popularity cardItem_text">
          Popularity<span class="cardItem___data">"${popularity}"</span>
        </p>
        <p class="cardItem-Title cardItem_text">
          Original Title<span class="cardItem__title_data"
            >"${original_title}"</span
          >
        </p>
        <div class="genres">
          <p class="cardItem__genre cardItem_text">Genre</p>
          <p class="cardItem__genreList">
            "${genres}"
          </p>
        </div>

        <p class="cardItem__about">About</p>
        <p class="cardItem__description">"${overview}"</p>
      `;
};
