import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard.page';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from './home/home.module';
import { CreatePageModule } from './create/create.module';
import { DiscoverPageModule } from './discover/discover.module';
import { FavouritePageModule } from './favourite/favourite.module';
import { SettingsPageModule } from './settings/settings.module';

const routes: Routes = [
  {
    path: 'tab',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create/create.module').then((m) => m.CreatePageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'favourite',
        loadChildren: () =>
          import('./favourite/favourite.module').then(
            (m) => m.FavouritePageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/tab/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    HomePageModule,
    CreatePageModule,
    DiscoverPageModule,
    SettingsPageModule,
    FavouritePageModule,
  ],
})
export class DashboardModule {}
