import { refs } from './refs';
// import from '../sass/components/_pagination.scss'
// пагінація

let callback = page => {};

export function tune(totalPages, newCallback) {
  page = 1;
  maxPage = totalPages;
  on_pagin_rander();

  if (callback instanceof Function) {
    callback = newCallback;
  }
}

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
let maxPage = 1;

function on_pagin_rander() {
  if (maxPage === 1) {
    pagin_rander_1();
  } else if (maxPage === 2) {
    pagin_rander_2();
  } else if (maxPage === 3) {
    pagin_rander_3();
  } else if (maxPage === 4) {
    pagin_rander_4();
  } else if (maxPage === 5) {
    pagin_rander_5();
  } else if (maxPage === 6) {
    pagin_rander_6();
  } else {
    pagin_rander_7();
  }
}

function pagin_rander_1() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>`;
  }
}

function pagin_rander_2() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>`;
  } else {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>`;
  }
}

function pagin_rander_3() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>`;
  } else if (page === 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>`;
  } else if (page === 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>`;
  }
}

function pagin_rander_4() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>`;
  } else if (page === 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>`;
  } else if (page === 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>`;
  } else if (page === 4) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>`;
  }
}

function pagin_rander_5() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <button type="submit" class="pagin_button">${pageAfterFour}</button>`;
  } else if (page === 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>`;
  } else if (page === 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>`;
  } else if (page === 4) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button" pagin_accent>${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>`;
  } else if (page === 5) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeFour}</button>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button" pagin_accent>${pageBefore}</button>
    <button type="submit" class="pagin_button">${page}</button>`;
  }
}

function pagin_rander_6() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <button type="submit" class="pagin_button">${pageAfterFour}</button>
    <button type="submit" class="pagin_button">${maxPage}</button>`;
  } else if (page === 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <button type="submit" class="pagin_button">${pageAfterFour}</button>`;
  } else if (page === 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>`;
  } else if (page === 4) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button" pagin_accent>${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>`;
  } else if (page === 5) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${pageBeforeFour}</button>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button" pagin_accent>${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>`;
  } else if (page === 6) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button">${minPage}</button>
    <button type="submit" class="pagin_button">${pageBeforeFour}</button>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button" pagin_accent>${page}</button>`;
  }
}

function pagin_rander_7() {
  if (page === 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <button type="submit" class="pagin_button">${pageAfterThree}</button>
    <button type="submit" class="pagin_button">${pageAfterFour}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>
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
    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>
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
    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>
  `;
  } else if (page >= 4 && page <= maxPage - 3) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left">left</button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${maxPage}</button>
    <button type="submit" class="pagin_button pagin_button_rigth">rigth</button>
  `;
  } else if (page === maxPage - 2) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left">left</button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
    <button type="submit" class="pagin_button">${pageAfterTwo}</button>
  `;
  } else if (page === maxPage - 1) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left">left</button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>
    <button type="submit" class="pagin_button">${pageAfter}</button>
  `;
  } else if (page === maxPage) {
    refs.pagin_box.innerHTML = `
    <button type="submit" class="pagin_button pagin_button_left">left</button>
    <button type="submit" class="pagin_button">${minPage}</button>
    <p class="pagin_button pagin_nothing">...</p>
    <button type="submit" class="pagin_button">${pageBeforeFour}</button>
    <button type="submit" class="pagin_button">${pageBeforeThree}</button>
    <button type="submit" class="pagin_button">${pageBeforeTwo}</button>
    <button type="submit" class="pagin_button">${pageBefore}</button>
    <button type="submit" class="pagin_button pagin_accent">${page}</button>`;
  }
}

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

      callback(page);

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

      callback(page);

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

    callback(page);

    return on_pagin_rander();
    // onFetch() функція для створення розмітки
  }
}
