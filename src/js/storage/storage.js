// import { getMoviesById } from 'api';
function getMoviesById(movies) {
  return movies;
}

const ITEMS_PER_PAGE = 20;
const WATCHED_KEY = 'watched';
const QUEUED_KEY = 'queued';

// STORAGE CLASS

class Storage {
  #STORAGE_KEY;

  constructor(storage_key) {
    this.#STORAGE_KEY = storage_key;
    this.getIds();
  }

  includes(id) {
    return this.items.includes(id);
  }
  getIds() {
    if (this.items) {
      return this.items;
    }

    try {
      this.items = JSON.parse(localStorage.getItem(this.#STORAGE_KEY));
      if (!(this.items instanceof Array)) {
        this.items = [];
      }
    } catch {
      this.items = [];
    }

    return this.items;
  }

  addId(id) {
    if (this.includes(id)) return;

    this.items.push(id);
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.items));
  }

  removeId(id) {
    this.items = this.items.filter(qeueudId => qeueudId !== id);
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.items));
  }

  getItems(page) {
    const firstItem = page * ITEMS_PER_PAGE;
    const lastItem = firstItem + ITEMS_PER_PAGE;
    const items = this.items.slice(firstItem, lastItem);
    return {
      page,
      totalPages: Math.ceil(this.items.length / ITEMS_PER_PAGE),
      totalItems: this.items.length,
      items: getMoviesById(items),
    };
  }
}

const watched = new Storage(WATCHED_KEY);
const queued = new Storage(QUEUED_KEY);

// ALIAS
export const getWatched = watched.getItems.bind(watched);
export const getWatchedIds = watched.getIds.bind(watched);
export const isWatched = watched.includes.bind(watched);
export const addWatchedId = watched.addId.bind(watched);
export const removeWatchedId = watched.removeId.bind(watched);

export const getQueued = queued.getItems.bind(queued);
export const getQueuedIds = queued.getIds.bind(queued);
export const isQueued = queued.includes.bind(queued);
export const addQueuedId = queued.addId.bind(queued);
export const removeQueuedId = queued.removeId.bind(queued);
