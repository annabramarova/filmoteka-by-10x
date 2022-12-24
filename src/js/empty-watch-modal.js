// import { refs } from './refs';

// let inWatchedStorage = `[]`;
// let inWatchedStorageParsed = [];
// let lehghtSt = 0;

// // refs.galleryWatchedBtn.addEventListener('click', onEmptyWatched);

// export function onEmptyWatched() {
//   inWatchedStorage = localStorage.getItem('watched');

//   if (!inWatchedStorage) {
//     inWatchedStorage = `[]`;
//   }

//   inWatchedStorageParsed = JSON.parse(inWatchedStorage);
//   lehghtSt = inWatchedStorageParsed.length;

//   if (lehghtSt !== 0) {
//     return;
//   }

//   refs.libMenu.classList.remove('lib-is-hidden');
//   refs.libMenuCloseBtn.addEventListener(`click`, onLibMenuCloseBtnClick);
//   window.addEventListener(`keydown`, handleEsc);
//   window.addEventListener(`click`, handleOutClick);
// }

// function onLibMenuCloseBtnClick() {
//   removeAllListn();
// }

// function handleEsc(event) {
//   console.log(event);
//   if (!(event.code === `Escape`)) {
//     return;
//   }
//   removeAllListn();
// }

// function handleOutClick(event) {
//   if (!event.target.classList.contains(`lib-backdrop`)) {
//     return;
//   }
//   removeAllListn();
// }

// function removeAllListn() {
//   refs.libMenu.classList.add('lib-is-hidden');
//   refs.libMenuCloseBtn.removeEventListener(`click`, onLibMenuCloseBtnClick);
//   window.removeEventListener(`keydown`, handleEsc);
//   window.removeEventListener(`click`, handleOutClick);
// }
