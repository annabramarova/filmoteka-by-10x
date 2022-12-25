const themeChange = document.querySelector('.theme-toggle');

themeChange.addEventListener('click', () => {
  console.log('CLICK!!!');
  if (localStorage.getItem('theme') === 'dark') {
    //? !==
    localStorage.removeItem('theme');
  } else {
    //? return
    localStorage.setItem('theme', 'dark');
  }
});

function addDarkToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
    }
  } catch (err) {
    console.log(err);
  }
}
