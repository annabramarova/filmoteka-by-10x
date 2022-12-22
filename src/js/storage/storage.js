import Api from '../api-service';
import { getDatabase, ref, get, update, remove } from 'firebase/database';
import { firebaseApp, auth } from '../authentication';

const api = new Api();

const db = getDatabase(firebaseApp);

const ITEMS_PER_PAGE = 20;
const WATCHED_KEY = 'watched';
const QUEUED_KEY = 'queued';

// STORAGE CLASS

class Storage {
  #STORAGE_KEY;

  constructor(storage_key) {
    this.#STORAGE_KEY = storage_key;
    this.items = [];
    this.getIds();
  }

  includes(id) {
    console.log(this.#STORAGE_KEY, this.items);
    return this.items.includes(id);
  }
  getIds() {
    // if (this.items) {
    // return this.items;
    // }

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
    console.log('addId', id);
    if (this.items.includes(id)) return;

    this.items.push(id);
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.items));
  }

  removeId(id) {
    this.items = this.items.filter(itemId => itemId !== id);
    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(this.items));
  }

  async getItems(page) {
    const firstItem = (page - 1) * ITEMS_PER_PAGE;
    const lastItem = firstItem + ITEMS_PER_PAGE;
    const items = this.items.slice(firstItem, lastItem);
    console.log('this.iems', this.items);
    console.log('iems', items);
    return {
      page,
      total_pages: Math.ceil(this.items.length / ITEMS_PER_PAGE),
      total_results: this.items.length,
      results: (await api.getFilmMassiveById(items)).map(item => {
        item.genre_ids = item.genres.map(({ id }) => id);
        return item;
      }),
    };
  }
}

// STORAGE Database CLASS

class StorageDb {
  #STORAGE_KEY;

  constructor(storage_key) {
    this.#STORAGE_KEY = storage_key;
    this.getIds();
  }

  includes(id) {
    return this.items.includes(id);
  }

  async getIds() {
    console.log('currentUser', auth.currentUser);
    if (!auth.currentUser) {
      this.items = [];
      return this.items;
    }
    console.log('!logged');
    try {
      const snapshot = await get(
        ref(db, `/users/${auth.currentUser.uid}/${this.#STORAGE_KEY}`)
      );
      const data = snapshot.exists() ? snapshot.val() : [];
      console.log('!data', data);
      this.items = data;
    } catch (error) {
      console.log('!error', error);
      this.items = [];
    }

    return this.items;
  }

  async addId(id) {
    if (!auth.currentUser) return;
    if (this.includes(id)) return;

    try {
      await update(
        ref(db, `/users/${auth.currentUser.uid}/${this.#STORAGE_KEY}`),
        {
          [id]: id,
        }
      );
      this.items.push(id);
    } catch {}
  }

  async removeId(id) {
    try {
      await remove(
        ref(db, `/users/${auth.currentUser.uid}/${this.#STORAGE_KEY}/${id}`)
      );
      this.items = this.items.filter(itemId => itemId !== id);
    } catch {}
  }

  async getItems(page) {
    const firstItem = page * ITEMS_PER_PAGE;
    const lastItem = firstItem + ITEMS_PER_PAGE;
    const items = this.items.slice(firstItem, lastItem);
    return {
      page,
      totalPages: Math.ceil(this.items.length / ITEMS_PER_PAGE),
      totalItems: this.items.length,
      items: api.getFilmMassiveById(items),
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
