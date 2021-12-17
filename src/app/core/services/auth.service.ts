import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../shared/models/user';
import { Constants } from '../shared/emuns/constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = '';

  constructor(private _http: HttpClient) {}

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
    localStorage.removeItem(Constants.USER.TOKEN);
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
