import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
