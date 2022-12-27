import { refs } from './refs';
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
  window.scrollTo(0, 0);
  pagin_button_remove_accent();
  pagin_button_remove_hidden();
  pagin_button_remove_hidden();
  pagin_namer_button();
  if (maxPage === 0) {
    pagin_rander_0();
  } else if (maxPage === 1) {
    pagin_rander_0();
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
  } else if (maxPage > 6) {
    pagin_rander_7();
  }

  if (window.innerWidth < 480) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
  }
}

function pagin_rander_0() {
  pagin_button_el_1_add_hidden();
  pagin_button_el_2_add_hidden();
  pagin_button_el_3_add_hidden();
  pagin_button_el_4_add_hidden();
  pagin_button_el_5_add_hidden();
  pagin_button_el_6_add_hidden();
  pagin_button_el_7_add_hidden();
  pagin_button_el_8_add_hidden();
  pagin_button_el_9_add_hidden();
  pagin_button_el_10_add_hidden();
  pagin_button_el_11_add_hidden();
}

function pagin_rander_2() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_5_add_hidden();
    pagin_button_el_8_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_5_add_hidden();
    pagin_button_el_8_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_11_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
  }
}

function pagin_rander_3() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_5_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_5_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfter}`;
  } else if (page === 3) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_5_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_11_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
  }
}

function pagin_rander_4() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_5.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${page}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterThree}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
  } else if (page === 3) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfter}`;
  } else if (page === 4) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_4_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_11_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
  }
}

function pagin_rander_5() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_4.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${page}`;
    refs.pagin_button_el_5.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterThree}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterFour}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_5.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_5.innerHTML = `${page}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterThree}`;
  } else if (page === 3) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
  } else if (page === 4) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfter}`;
  } else if (page === 5) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_11_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${pageBeforeFour}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
  }
}

function pagin_rander_6() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_4.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${page}`;
    refs.pagin_button_el_5.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterThree}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterFour}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_5.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_5.innerHTML = `${page}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterThree}`;
  } else if (page === 3) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_5.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
  } else if (page === 4) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === 5) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeFour}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === maxPage) {
    pagin_button_el_3_add_hidden();
    pagin_button_el_9_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_11_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeFour}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
  }
}

function pagin_rander_7() {
  if (page === 1) {
    pagin_button_el_1_add_hidden();
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    refs.pagin_button_el_4.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${page}`;
    refs.pagin_button_el_5.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterThree}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterFour}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === 2) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    refs.pagin_button_el_5.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_5.innerHTML = `${page}`;
    refs.pagin_button_el_6.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterThree}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === 3) {
    pagin_button_el_2_add_hidden();
    pagin_button_el_3_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page >= 4 && page <= maxPage - 3) {
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_2.innerHTML = `${minPage}`;
    refs.pagin_button_el_4.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === maxPage - 2) {
    pagin_button_el_10_add_hidden();
    pagin_button_el_9_add_hidden();
    refs.pagin_button_el_6.classList.add('pagin_accent');
    refs.pagin_button_el_4.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_5.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_6.innerHTML = `${page}`;
    refs.pagin_button_el_7.innerHTML = `${pageAfter}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfterTwo}`;
    refs.pagin_button_el_10.innerHTML = `${maxPage}`;
  } else if (page === maxPage - 1) {
    pagin_button_el_10_add_hidden();
    pagin_button_el_9_add_hidden();
    refs.pagin_button_el_7.classList.add('pagin_accent');
    refs.pagin_button_el_2.innerHTML = `${minPage}`;
    refs.pagin_button_el_4.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_6.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_7.innerHTML = `${page}`;
    refs.pagin_button_el_8.innerHTML = `${pageAfter}`;
  } else if (page === maxPage) {
    pagin_button_el_11_add_hidden();
    pagin_button_el_10_add_hidden();
    pagin_button_el_9_add_hidden();
    refs.pagin_button_el_8.classList.add('pagin_accent');
    refs.pagin_button_el_2.innerHTML = `${minPage}`;
    refs.pagin_button_el_4.innerHTML = `${pageBeforeFour}`;
    refs.pagin_button_el_5.innerHTML = `${pageBeforeThree}`;
    refs.pagin_button_el_6.innerHTML = `${pageBeforeTwo}`;
    refs.pagin_button_el_7.innerHTML = `${pageBefore}`;
    refs.pagin_button_el_8.innerHTML = `${page}`;
  }
}

refs.pagin_box.addEventListener('click', on_pagin_button);

function on_pagin_button(evt) {
  if (evt.target.type === 'submit') {
    if (Number(page) === Number(evt.target.innerText)) {
      return evt.target.blur();
    }
    if (evt.target.classList.contains('pagin_button_left')) {
      page--;

      pagin_namer_button();
      callback(page);
      on_pagin_rander();
      return evt.target.blur();
    }

    if (evt.target.classList.contains('pagin_button_el_11')) {
      page++;

      pagin_namer_button();
      callback(page);
      on_pagin_rander();
      return evt.target.blur();
    }

    page = Number(evt.target.innerText);

    pagin_namer_button();
    callback(page);
    on_pagin_rander();
    return evt.target.blur();
  }
  evt.target.blur();
}

function pagin_namer_button() {
  pageBeforeFour = page - 4;
  pageBeforeThree = page - 3;
  pageBeforeTwo = page - 2;
  pageBefore = page - 1;
  pageAfter = page + 1;
  pageAfterTwo = page + 2;
  pageAfterThree = page + 3;
  pageAfterFour = page + 4;
}

function pagin_button_remove_hidden() {
  if (refs.pagin_button_el_1.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_1.classList.remove('hidden');
  }
  if (refs.pagin_button_el_2.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_2.classList.remove('hidden');
  }
  if (refs.pagin_button_el_3.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_3.classList.remove('hidden');
  }
  if (refs.pagin_button_el_4.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_4.classList.remove('hidden');
  }
  if (refs.pagin_button_el_5.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_5.classList.remove('hidden');
  }
  if (refs.pagin_button_el_6.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_6.classList.remove('hidden');
  }
  if (refs.pagin_button_el_7.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_7.classList.remove('hidden');
  }
  if (refs.pagin_button_el_8.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_8.classList.remove('hidden');
  }
  if (refs.pagin_button_el_9.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_9.classList.remove('hidden');
  }
  if (refs.pagin_button_el_10.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_10.classList.remove('hidden');
  }
  if (refs.pagin_button_el_11.classList.contains('hidden') === false) {
  } else {
    refs.pagin_button_el_11.classList.remove('hidden');
  }
}

function pagin_button_remove_accent() {
  if (refs.pagin_button_el_1.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_1.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_2.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_2.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_3.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_3.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_4.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_4.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_5.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_5.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_6.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_6.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_7.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_7.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_8.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_8.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_9.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_9.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_10.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_10.classList.remove('pagin_accent');
  }
  if (refs.pagin_button_el_11.classList.contains('pagin_accent') === false) {
  } else {
    refs.pagin_button_el_11.classList.remove('pagin_accent');
  }
}

function pagin_button_el_1_add_hidden() {
  if (refs.pagin_button_el_1.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_1.classList.add('hidden');
  }
}

function pagin_button_el_2_add_hidden() {
  if (refs.pagin_button_el_2.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_2.classList.add('hidden');
  }
}

function pagin_button_el_3_add_hidden() {
  if (refs.pagin_button_el_3.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_3.classList.add('hidden');
  }
}

function pagin_button_el_4_add_hidden() {
  if (refs.pagin_button_el_4.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_4.classList.add('hidden');
  }
}

function pagin_button_el_5_add_hidden() {
  if (refs.pagin_button_el_5.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_5.classList.add('hidden');
  }
}

function pagin_button_el_6_add_hidden() {
  if (refs.pagin_button_el_6.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_6.classList.add('hidden');
  }
}

function pagin_button_el_7_add_hidden() {
  if (refs.pagin_button_el_7.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_7.classList.add('hidden');
  }
}

function pagin_button_el_8_add_hidden() {
  if (refs.pagin_button_el_8.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_8.classList.add('hidden');
  }
}

function pagin_button_el_9_add_hidden() {
  if (refs.pagin_button_el_9.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_9.classList.add('hidden');
  }
}

function pagin_button_el_10_add_hidden() {
  if (refs.pagin_button_el_10.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_10.classList.add('hidden');
  }
}

function pagin_button_el_11_add_hidden() {
  if (refs.pagin_button_el_11.classList.contains('hidden')) {
  } else {
    refs.pagin_button_el_11.classList.add('hidden');
  }
}

const paginButtons = [
  refs.pagin_button_el_1,
  refs.pagin_button_el_2,
  refs.pagin_button_el_3,
  refs.pagin_button_el_4,
  refs.pagin_button_el_5,
  refs.pagin_button_el_6,
  refs.pagin_button_el_7,
  refs.pagin_button_el_8,
  refs.pagin_button_el_9,
  refs.pagin_button_el_10,
  refs.pagin_button_el_11,
];

function paginBattonElAddClass(paginButtons, AddClass) {
  for (const button of paginButtons) {
    // button.classList.add(AddClass);
    // console.log(button.classList.add(AddClass));
    // console.log(button.classList);
  }
}

paginBattonElAddClass(paginButtons, 'hidden');
