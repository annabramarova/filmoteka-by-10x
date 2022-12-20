import { loader, loaderRemove } from './loading';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-modal-open]'),
    closeModalBtn: document.querySelector('[data-team-modal-close]'),
    modal: document.querySelector('[data-team-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    loader();
    refs.modal.classList.toggle('visually-hidden');
    loaderRemove();
    refs.body.classList.toggle('no-scroll');
  }
})();
