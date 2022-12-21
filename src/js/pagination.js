import { refs } from './refs';
// import from '../sass/components/_pagination.scss'
// пагінація

let page = 1;
let minPage = 1;
let pageBeforeFour = page - 4;
let pageBeforeThree = page - 3;
let pageBeforeTwo = page - 2;
let pageBefore = page - 1;
let pageAfter = page + 1;
let pageAfterTwo = page + 2;
let pageAfterThree = page + 3;
let pageAfterFour = page + 4;
let maxPage = 20;

function on_pagin_rander() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <button type="submit" class="pagin_button">${pageAfterFour}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-right"></use>
      </svg></button>
  `;
  } else if (page === 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-right"></use>
      </svg></button>
  `;
  } else if (page === 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-right"></use>
      </svg></button>
  `;
  } else if (page >= 4 && page <= 17) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-left"></use>
      </svg></button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-right"></use>
      </svg></button>
  `;
  } else if (page === 18) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-left"></use>
      </svg></button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
  `;
  } else if (page === 19) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left"></button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
  `;
  } else if (page === 20) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left"><svg class="pagin__icon" width="16" height="16">
        <use href="./images/sprite.svg#icon-arrow-left"></use>
      </svg></button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeFour}</button>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
  `;
  }
}

on_pagin_rander();

refs.pagin_box.addEventListener('click', on_pagin_button);

function on_pagin_button(evt) {
  if (evt.target.type === 'submit') {
    if (Number(page) === Number(evt.target.innerText)) {
      return;
    }

    if (evt.target.innerText === 'left') {
      // console.log(evt.target.innerText);
      page--;

      pageBeforeFour = page - 4;
      pageBeforeThree = page - 3;
      pageBeforeTwo = page - 2;
      pageBefore = page - 1;
      pageAfter = page + 1;
      pageAfterTwo = page + 2;
      pageAfterThree = page + 3;
      pageAfterFour = page + 4;

      console.log('page: ', page);

      return on_pagin_rander();
    }

    if (evt.target.innerText === 'rigth') {
      // console.log(evt.target.innerText);

      page++;

      pageBeforeFour = page - 4;
      pageBeforeThree = page - 3;
      pageBeforeTwo = page - 2;
      pageBefore = page - 1;
      pageAfter = page + 1;
      pageAfterTwo = page + 2;
      pageAfterThree = page + 3;
      pageAfterFour = page + 4;

      console.log('page: ', page);

      return on_pagin_rander();
    }

    page = Number(evt.target.innerText);

    pageBeforeFour = page - 4;
    pageBeforeThree = page - 3;
    pageBeforeTwo = page - 2;
    pageBefore = page - 1;
    pageAfter = page + 1;
    pageAfterTwo = page + 2;
    pageAfterThree = page + 3;
    pageAfterFour = page + 4;

    console.log('page: ', page);

    return on_pagin_rander();
    // onFetch() функція для створення розмітки
  }
}
