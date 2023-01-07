import { refs } from './refs';

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.HTML.classList.add('dark');
      refs.switcher.elements[1].checked = true;
    } else {
      refs.HTML.classList.remove('dark');
      refs.switcher.elements[0].checked = true;
    }
  } catch (err) {
    return;
  }
};

refs.switcher.addEventListener('change', e => {
  if (e.target.value === 'dark') {
    refs.HTML.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    refs.HTML.classList.remove('dark');
    localStorage.removeItem('theme');
  }
});

addDarkClassToHTML();
