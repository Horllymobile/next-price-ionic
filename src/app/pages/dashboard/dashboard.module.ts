import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class DashboardModule {}
