import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtHelper: JwtHelperService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return ''
            }
          }
        })
      ],
      providers: [
        HttpClient,
        JwtHelperService,
        StorageService,
        HttpHandler
      ]
    });
    service = TestBed.inject(AuthService);
    // jwtHelper = TestBed.inject(JwtHelperService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
