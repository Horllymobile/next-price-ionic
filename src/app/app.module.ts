import { IUserData } from './core/shared/models/user';
import { Constants } from './core/shared/emuns/constants';
import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/interceptor/http.interceptor';

export function jwtFactory() {
  return {
    tokenGetter: () => {
      const user: IUserData = JSON.stringify(
        localStorage.getItem(Constants.USER.USER_PROFILE)
      ) as unknown as IUserData;
      return user.accessToken;
    },
    allowedDomains: [],
    disallowedRoutes: [],
  };
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AuthModule,
    DashboardModule,
    AppRoutingModule,
    SwiperModule,
    // IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtFactory,
        // deps: [Storage],
      },
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
