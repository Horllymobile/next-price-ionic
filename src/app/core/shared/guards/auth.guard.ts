import { StorageService } from './../../services/storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Constants } from '../emuns/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.storageService.get(Constants.USER.USER_PROFILE);
    if (!user) {
      this.storageService.clear();
      this.router.navigate(['', 'auth', 'login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    return true;
  }
}
