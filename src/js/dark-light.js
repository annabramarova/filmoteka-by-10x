import { refs } from './refs';

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.HTML.classList.add('dark');
      refs.themeToggle.checked = true;
    } else {
      refs.HTML.classList.remove('dark');
    }
  } catch (err) {
    return;
  }
};

const onThemeToggleClick = e => {
  localStorage.getItem('theme') === 'dark'
    ? localStorage.removeItem('theme')
    : localStorage.setItem('theme', 'dark');

  addDarkClassToHTML();
};

refs.themeToggle.addEventListener('click', onThemeToggleClick);

addDarkClassToHTML();
