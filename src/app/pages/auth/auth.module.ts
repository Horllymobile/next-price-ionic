import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageModule } from './signup/signup.module';
import { LoginPageModule } from './login/login.module';
import { ResetPageModule } from './reset/reset.module';
import { ResetPasswordPageModule } from './reset-password/reset-password.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupPageModule,
    LoginPageModule,
    ResetPageModule,
    ResetPasswordPageModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
