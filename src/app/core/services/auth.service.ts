import { StorageService } from './storage.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IUserData, LoginRequest } from '../shared/models/user';
import { Constants } from '../shared/emuns/constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private _http: HttpClient,
    private _helper: JwtHelperService,
    private storageService: StorageService
  ) {
    this.userData.next(storageService.get(Constants.USER.USER_PROFILE));
  }

  get currentUser() {
    return this.userData.value;
  }

  isAutth() {
    let token = this.storageService.get(Constants.USER.USER_PROFILE);
    // console.log(token);
    return this._helper.isTokenExpired(token?.accessToken);
  }

  register(payload: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) {
    return this._http
      .post<any>(`${Constants.USER.AUTH_URL}/register`, payload)
      .pipe(
        map((res) => res),
        catchError((err) => throwError(err))
      );
  }

  login(payload: { email: string; password: string }): Observable<any> {
    return this._http.post(`${Constants.USER.AUTH_URL}/login`, payload).pipe(
      map((response) => response),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getUser(): LoginRequest {
    const data = JSON.parse(localStorage.getItem(Constants.USER.TOKEN));
    return new LoginRequest(data.email, data.password);
  }

  logout(): boolean {
    localStorage.removeItem(Constants.USER.USER_PROFILE);
    return true;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return {
      message: error.message,
      status: error.status,
      statusText: error.statusText,
    };
  }
}
