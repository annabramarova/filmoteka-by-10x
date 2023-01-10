import { refs } from './refs';

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
let pageRemove_4 = page - 4;
let pageRemove_3 = page - 3;
let pageRemove_2 = page - 2;
let pageRemove_1 = page - 1;
let pageAdd_1 = page + 1;
let pageAdd_2 = page + 2;
let pageAdd_3 = page + 3;
let pageAdd_4 = page + 4;
let maxPage = 1;

refs.pagin_box.addEventListener('click', on_pagin_button);

function on_pagin_rander() {
  window.scrollTo(0, 0);
  paginBattonElRemoveClass(paginButtons, 'hidden');
  pagin_namber_button();
  paginButtonsAddNumbers();
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
    const paginButtonsHidden = [
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_0() {
  paginBattonElAddClass(paginButtons, 'hidden');
}

function pagin_rander_2() {
  const paginButtonsHiddenPage = [
    refs.paginButtonMinPage,
    refs.paginButtonElementLeft,
    refs.paginButtonPageRemove_4,
    refs.paginButtonPageRemove_3,
    refs.paginButtonPageRemove_2,
    refs.paginButtonPageAdd_2,
    refs.paginButtonPageAdd_3,
    refs.paginButtonPageAdd_4,
    refs.paginButtonElementRigth,
    refs.paginButtonMaxPage,
  ];
  paginBattonElAddClass(paginButtonsHiddenPage, 'hidden');
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_3() {
  const paginButtonsHiddenPage = [
    refs.paginButtonMinPage,
    refs.paginButtonElementLeft,
    refs.paginButtonPageRemove_4,
    refs.paginButtonPageRemove_3,
    refs.paginButtonPageAdd_3,
    refs.paginButtonPageAdd_4,
    refs.paginButtonElementRigth,
    refs.paginButtonMaxPage,
  ];
  paginBattonElAddClass(paginButtonsHiddenPage, 'hidden');
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageAdd_2,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 3) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonPageAdd_2,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_4() {
  const paginButtonsHiddenPage = [
    refs.paginButtonMinPage,
    refs.paginButtonElementLeft,
    refs.paginButtonPageRemove_4,
    refs.paginButtonPageAdd_4,
    refs.paginButtonElementRigth,
    refs.paginButtonMaxPage,
  ];
  paginBattonElAddClass(paginButtonsHiddenPage, 'hidden');
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageAdd_3,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 3) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 4) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_5() {
  const paginButtonsHiddenPage = [
    refs.paginButtonMinPage,
    refs.paginButtonElementLeft,
    refs.paginButtonPageAdd_4,
    refs.paginButtonElementRigth,
  ];
  paginBattonElAddClass(paginButtonsHiddenPage, 'hidden');
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageAdd_3,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 3) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 4) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 5) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonMaxPage,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_6() {
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageAdd_4,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 3) {
    const paginButtonsHidden = [
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 4) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 5) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === maxPage) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function pagin_rander_7() {
  if (page === 1) {
    const paginButtonsHidden = [
      refs.paginButtonLeft,
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageRemove_1,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 2) {
    const paginButtonsHidden = [
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageRemove_2,
      refs.paginButtonPageAdd_4,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === 3) {
    const paginButtonsHidden = [
      refs.paginButtonMinPage,
      refs.paginButtonElementLeft,
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page >= 4 && page <= maxPage - 3) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === maxPage - 2) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_4,
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === maxPage - 1) {
    const paginButtonsHidden = [
      refs.paginButtonPageRemove_3,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  } else if (page === maxPage) {
    const paginButtonsHidden = [
      refs.paginButtonPageAdd_1,
      refs.paginButtonPageAdd_2,
      refs.paginButtonPageAdd_3,
      refs.paginButtonPageAdd_4,
      refs.paginButtonElementRigth,
      refs.paginButtonMaxPage,
      refs.paginButtonRigth,
    ];
    paginBattonElAddClass(paginButtonsHidden, 'hidden');
  }
}

function on_pagin_button(evt) {
  if (evt.target.type === 'submit') {
    if (Number(page) === Number(evt.target.innerText)) {
      return evt.target.blur();
    }
    if (evt.target.classList.contains('paginButtonLeft')) {
      page--;

      pagin_namber_button();
      callback(page);
      on_pagin_rander();
      return evt.target.blur();
    }

    if (evt.target.classList.contains('paginButtonRigth')) {
      page++;

      pagin_namber_button();
      callback(page);
      on_pagin_rander();
      return evt.target.blur();
    }

    page = Number(evt.target.innerText);

    pagin_namber_button();
    callback(page);
    on_pagin_rander();
    return evt.target.blur();
  }
  evt.target.blur();
}

function pagin_namber_button() {
  pageRemove_4 = page - 4;
  pageRemove_3 = page - 3;
  pageRemove_2 = page - 2;
  pageRemove_1 = page - 1;
  pageAdd_1 = page + 1;
  pageAdd_2 = page + 2;
  pageAdd_3 = page + 3;
  pageAdd_4 = page + 4;
}

function paginButtonsAddNumbers() {
  refs.paginButtonMinPage.innerHTML = `${minPage}`;
  refs.paginButtonPageRemove_4.innerHTML = `${pageRemove_4}`;
  refs.paginButtonPageRemove_3.innerHTML = `${pageRemove_3}`;
  refs.paginButtonPageRemove_2.innerHTML = `${pageRemove_2}`;
  refs.paginButtonPageRemove_1.innerHTML = `${pageRemove_1}`;
  refs.paginButtonPage.innerHTML = `${page}`;
  refs.paginButtonPageAdd_1.innerHTML = `${pageAdd_1}`;
  refs.paginButtonPageAdd_2.innerHTML = `${pageAdd_2}`;
  refs.paginButtonPageAdd_3.innerHTML = `${pageAdd_3}`;
  refs.paginButtonPageAdd_4.innerHTML = `${pageAdd_4}`;
  refs.paginButtonMaxPage.innerHTML = `${maxPage}`;
}

const paginButtons = [
  refs.paginButtonLeft,
  refs.paginButtonMinPage,
  refs.paginButtonElementLeft,
  refs.paginButtonPageRemove_4,
  refs.paginButtonPageRemove_3,
  refs.paginButtonPageRemove_2,
  refs.paginButtonPageRemove_1,
  refs.paginButtonPage,
  refs.paginButtonPageAdd_1,
  refs.paginButtonPageAdd_2,
  refs.paginButtonPageAdd_3,
  refs.paginButtonPageAdd_4,
  refs.paginButtonElementRigth,
  refs.paginButtonMaxPage,
  refs.paginButtonRigth,
];

function paginBattonElRemoveClass(paginButtons, topicalClass) {
  for (const button of paginButtons) {
    if (button.classList.contains(topicalClass) === false) {
    } else {
      button.classList.remove(topicalClass);
    }
  }
}

function paginBattonElAddClass(paginButtons, topicalClass) {
  for (const button of paginButtons) {
    if (button.classList.contains(topicalClass)) {
    } else {
      button.classList.add(topicalClass);
    }
  }
}
