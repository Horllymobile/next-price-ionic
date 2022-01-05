import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  add(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(key: string) {
    localStorage.remove(key);
  }

  async clear() {
    localStorage.clear();
  }
}
