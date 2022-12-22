import { loader, loaderRemove } from './loading';
import { refs } from './refs';

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    loader();
    refs.modalTeam.classList.toggle('visually-hidden');
    loaderRemove();
    refs.body.classList.toggle('no-scroll');
  }
})();
