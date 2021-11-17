import { DashboardPage } from './pages/dashboard/dashboard.page';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/dashboard/home/home.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'discover',
        loadChildren: () =>
          import('./pages/dashboard/discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/dashboard/create/create.module').then(
            (m) => m.CreatePageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/dashboard/settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'favourite',
        loadChildren: () =>
          import('./pages/dashboard/favourite/favourite.module').then(
            (m) => m.FavouritePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
