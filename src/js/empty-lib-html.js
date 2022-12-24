// import { galleryTemplate } from './templates/gallery';
import { refs } from './refs';

const lockString = `
<div class="spider-thumb spyder-hidden">
  <img
    class="lib-modal-imghtml"
    src="./images/lib-modal/freaking-out-tweek-tweak.gif"
    alt="spider-gif"
  />
  <p class="lib-modal-content__text">
    Nothing to see here<br />Add a movie please
  </p>
</div>
`;

refs.galleryContainer.insertAdjacentHTML('afterbegin', lockString);

const spiderThumb = document.querySelector(`.spider-thumb`);
spiderThumb.classList.remove('spyder-hidden');

// import Api from './api-service';
// const apiService = new Api();
// import { genres } from './data/genres';

// const spiderThumb = document.querySelector(`.spider-thumb`);

// let inLibStorage = `[]`;
// let inLibParsed = [];
// let lehghtLibSt = 0;
// let libraryOpenBefor = false;

// let inWatchedStorage = `[]`;
// let inWatchedStorageParsed = [];
// let lehghtSt = 0;

// refs.myLibraryLink.addEventListener(`click`, onLibraryOpenAndEmpty);

// export function onLibraryOpenAndEmpty() {
//   inLibStorage = localStorage.getItem('queued');
//   if (!inLibStorage) {
//     inLibStorage = `[]`;
//   }
//   inLibParsed = JSON.parse(inLibStorage);
//   lehghtLibSt = inLibParsed.length;

//   inWatchedStorage = localStorage.getItem('watched');
//   if (!inWatchedStorage) {
//     inWatchedStorage = `[]`;
//   }
//   inWatchedStorageParsed = JSON.parse(inWatchedStorage);
//   lehghtSt = inWatchedStorageParsed.length;

//   if (!libraryOpenBefor && lehghtLibSt === 0 && lehghtSt === 0) {
//     let testString = `
//      <div class="spider-thumb">
//       <p class="lib-modal-content__text">
//       Nothing to see here<br />Add a movie please
//       </p>
//      </div>`;
//     refs.galleryContainer.insertAdjacentHTML('beforeend', testString);
//     console.log(spiderThumb);

//     libraryOpenBefor = true;
//   }
// }
