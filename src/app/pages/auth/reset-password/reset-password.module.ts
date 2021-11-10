import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPage } from './reset-password.page';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [ResetPasswordPage],
})
export class ResetPasswordPageModule {}
