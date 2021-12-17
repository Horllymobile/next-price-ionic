import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/shared/guards/session.guard';
import { LoginPage } from './login/login.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { ResetPage } from './reset/reset.page';
import { SignupPage } from './signup/signup.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    canActivate: [SessionGuard],
  },
  {
    path: 'signup',
    component: SignupPage,
    canActivate: [SessionGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage,
    canActivate: [SessionGuard],
  },
  {
    path: 'reset',
    component: ResetPage,
    canActivate: [SessionGuard],
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [LoginPage, SignupPage, ResetPage, ResetPasswordPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
})
export class AuthModule {}
