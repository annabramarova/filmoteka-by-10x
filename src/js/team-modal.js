import { refs } from './refs';

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalTeam.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');

    refs.modalTeam.addEventListener('mousedown', offModal);
    document.addEventListener('keydown', offModal);
  }
})();

function offModal(e) {
  if (e.currentTarget === e.target || e.code === 'Escape') {
    refs.modalTeam.classList.add('visually-hidden');

    refs.modalTeam.removeEventListener('mousedown', offModal);
    document.removeEventListener('keydown', offModal);
  }
}
