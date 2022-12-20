import { refs } from './refs';

// пагінація

let minPage = 1;
let pageBeforeTwo = page - 2;
let pageBefore = page - 1;
let pageAfter = page + 1;
let pageAfterTwo = page + 2;
let maxPage = 20;

function on_pagin_rander() {
  refs.pagin_box.innerHTML = `
    <button id='1' type="submit" class="pagin_button">${minPage}</button>
    <p id='2' class="pagin_button pagin_nothing">...</p>
    <button id='3' type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button id='4' type="submit" class="pagin_button">${pageBefore}</button>
    <button id='5' type="submit" class="pagin_button pagin_accent">${page}</button>
    <button id='6' type="submit" class="pagin_button">${pageAfter}</button>
    <button id='7' type="submit" class="pagin_button">${pageAfterTwo}</button>
    <p id='8' class="pagin_button pagin_nothing">...</p>
    <button id='9' type="submit" class="pagin_button">${maxPage}</button>
  `;
}

on_pagin_rander();

refs.pagin_box.addEventListener('click', on_pagin_button);

function on_pagin_button(evt) {
  if (evt.target.type === 'submit') {
    page = Number(evt.target.innerText);

    pageBeforeTwo = page - 2;
    pageBefore = page - 1;
    pageAfter = page + 1;
    pageAfterTwo = page + 2;

    console.log('page: ', page);

    on_pagin_rander();
    // onFetch() функція для створення розмітки
  }
}
