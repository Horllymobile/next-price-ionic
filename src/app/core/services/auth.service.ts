import { Injectable } from '@angular/core';
import { LoginRequest } from '../shared/models/user';
import { STORAGE } from '../shared/emuns/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = '';

  constructor() {}

  login(payload: LoginRequest): boolean {
    const newUser = new LoginRequest(payload.email, payload.password);
    localStorage.setItem(STORAGE.USER_TOKEN, JSON.stringify(payload));
    return true;
  }

  getUser(): LoginRequest {
    const data = JSON.parse(localStorage.getItem(STORAGE.USER_TOKEN));
    return new LoginRequest(data.email, data.password);
  }

  logout(): boolean {
    localStorage.removeItem(STORAGE.USER_TOKEN);
    return true;
  }
}
