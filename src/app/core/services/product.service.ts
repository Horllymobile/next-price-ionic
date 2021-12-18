import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/emuns/constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly url = '';

  constructor(private _http: HttpClient) {}

  getProducts(params: {
    page: number;
    size: number;
    start_date?: string;
    end_date?: string;
  }): Observable<any> {
    const param = {
      page: params.page,
      size: params.size,
    };

    return this._http
      .get<any>(`${Constants.PRODUCT.products}`, { params: param })
      .pipe(
        map((val) => val),
        catchError((err) => throwError(err))
      );
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
