import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function loader() {
  Loading.arrows({
    backgroundColor: 'rgba(0,0,0,0.2)',
    svgColor: '#ff6b01',
  });
}

export function loaderRemove() {
  Loading.remove();
}
