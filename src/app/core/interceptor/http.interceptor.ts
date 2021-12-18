import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Constants } from '../shared/emuns/constants';
import { StorageService } from 'src/app/core/services/storage.service';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.storageService.get(Constants.USER.USER_PROFILE);
    if (token) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + token.accessToken
        ),
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse) {
        //   //  console.log('event--->>>', event);
        // }
        return event;
      })
    );
  }
}
