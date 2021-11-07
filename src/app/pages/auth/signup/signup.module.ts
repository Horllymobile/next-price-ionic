import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterModule],
  declarations: [SignupPage],
})
export class SignupPageModule {}
