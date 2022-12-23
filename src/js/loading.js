// import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function loader() {
  const loader = document.querySelector('#preloader');
  if (loader.classList.contains('done')) {
    loader.classList.remove('done');
    loader.style.backgroundColor = `#ffffff00`;
  }

  //notiflix
  // Loading.arrows({
  //   backgroundColor: 'rgba(0,0,0,0.2)',
  //   svgColor: '#ff6b01',
  // });
}

export function loaderRemove() {
  const loader = document.querySelector('#preloader');
  if (!loader.classList.contains('done')) {
    loader.classList.add('done');
  }

  //notiflix
  // Loading.remove();
}
