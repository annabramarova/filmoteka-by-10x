import { refs } from './refs';

(() => {
  refs.openModalBtn.addEventListener('click', openModalTeam);

  function openModalTeam() {
    refs.modalTeam.classList.toggle('visually-team-hidden');

    refs.body.classList.add('no-scroll');
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
    refs.body.classList.remove('no-scroll');
    refs.modalTeam.removeEventListener('mousedown', offModal);
    document.removeEventListener('keydown', offModal);
  }
}
