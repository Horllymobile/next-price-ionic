import { ResetPage } from './reset/reset.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { SignupPage } from './signup/signup.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    ResetPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
