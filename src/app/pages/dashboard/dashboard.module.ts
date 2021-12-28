import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from './home/home.module';
import { CreatePageModule } from './create/create.module';
import { DiscoverPageModule } from './discover/discover.module';
import { FavouritePageModule } from './favourite/favourite.module';
import { SettingsPageModule } from './settings/settings.module';
import { CreateProductComponent } from 'src/app/core/modals/create-product/create-product.component';

const routes: Routes = [
  {
    path: 'tab',
    component: DashboardPage,
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
        component: CreateProductComponent
      },
      {
        path: 'edit/:productId',
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditPageModule),
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
