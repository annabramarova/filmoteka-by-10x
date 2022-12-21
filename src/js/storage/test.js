import * as storage from './storage';

const testId = 10;

console.log('getWatchedIds', storage.getWatchedIds());
console.log('isWatched(testId)', storage.isWatched(testId));
console.log('addWatchedId(testId)');
storage.addWatchedId(testId);
console.log('isWatched(testId)', storage.isWatched(testId));
console.log('removeWatchedId(testId)');
storage.removeWatchedId(testId);
console.log('isWatched(testId)', storage.isWatched(testId));

for (let i = 1; i <= 41; i += 1) {
  storage.addWatchedId(i);
}

console.log(storage.getWatched(0));
console.log(storage.getWatched(1));
console.log(storage.getWatched(2));
console.log(storage.getWatched(3));
