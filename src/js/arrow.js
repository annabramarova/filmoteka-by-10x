import { refs } from './refs';
import throttle from 'lodash.throttle';

window.addEventListener('scroll', throttle(visibleArrow, 500));

function visibleArrow(e) {
  e.preventDefault();
  let area = document.scrollingElement.scrollTop;
  console.log(document.scrollingElement.scrollTop);
  if (area >= 300) {
    refs.arrow.classList.add('arrow-visible');
    return;
  }
  refs.arrow.classList.remove('arrow-visible');
}
