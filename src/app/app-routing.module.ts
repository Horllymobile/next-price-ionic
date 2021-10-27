import { ResetPage } from './pages/reset/reset.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage
  },
  {
    path: 'reset',
    component: ResetPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
