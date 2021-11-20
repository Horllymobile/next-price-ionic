import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string): object {
    return JSON.parse(localStorage.getItem(key));
  }

  add(key: string, data: object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
