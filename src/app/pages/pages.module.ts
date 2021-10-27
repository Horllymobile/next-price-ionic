import { RouterModule } from '@angular/router';
import { ResetPasswordPageModule } from './reset-password/reset-password.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageModule } from './signup/signup.module';
import { LoginPageModule } from './login/login.module';
import { ResetPageModule } from './reset/reset.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SignupPageModule,
    LoginPageModule,
    ResetPageModule,
    ResetPasswordPageModule,
    RouterModule,
  ]
})
export class PagesModule { }
