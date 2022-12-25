import { refs } from './refs';

(() => {
  refs.openModalBtn.addEventListener('click', openModalTeam);

  function openModalTeam() {
    refs.modalTeam.classList.toggle('visually-team-hidden');
    document.body.classList.add('modal-open-team');
    refs.openModalBtn.setAttribute('disabled', '');
    refs.closeModalBtn.addEventListener('click', offModalTeam);
    refs.modalTeam.addEventListener('mousedown', offModalTeam);
    document.addEventListener('keydown', offModalTeam);
  }
})();

function offModalTeam(e) {
  if (
    e.currentTarget === refs.closeModalBtn ||
    e.currentTarget === e.target ||
    e.code === 'Escape'
  ) {
    refs.modalTeam.classList.add('visually-team-hidden');
    document.body.classList.remove('modal-open-team');
    refs.openModalBtn.removeAttribute('disabled', '');
    refs.modalTeam.removeEventListener('mousedown', offModalTeam);
    document.removeEventListener('keydown', offModalTeam);
  }
}
