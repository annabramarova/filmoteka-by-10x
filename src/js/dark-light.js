// //!  refs

const themeToggle = document.querySelector('.theme-toggle');
// themeToggle.checked = true;
const addDarkClassToHTML = () => {
  try {
    localStorage.getItem('theme') === 'dark'
      ? document.querySelector('html').classList.add('dark')
      : document.querySelector('html').classList.remove('dark');
  } catch (err) {
    console.log(err);
  }
};

const onThemeToggleClick = e => {
  localStorage.getItem('theme') === 'dark'
    ? localStorage.removeItem('theme')
    : localStorage.setItem('theme', 'dark');

  addDarkClassToHTML();
};

themeToggle.addEventListener('click', onThemeToggleClick);

addDarkClassToHTML();

// themeChange.addEventListener('click', () => {
//
//   localStorage.getItem('theme') === 'dark'
//     ? localStorage.removeItem('theme')
//     : localStorage.setItem('theme', 'dark');

//   addDarkClassToHTML();
// });

// function addDarkClassToHTML() {
//   try {
//      if (localStorage.getItem('theme') === 'dark') {
//        document.querySelector('html').classList.add('dark');
//        //!  change icon
//      } else {
//        document.querySelector('html').classList.remove('dark');
//        //!  change icon
//      }

//     localStorage.getItem('theme') === 'dark'
//       ? document.querySelector('html').classList.add('dark')
//       : document.querySelector('html').classList.remove('dark');
//   } catch (err) {
//     console.log(err);
//   }
// }