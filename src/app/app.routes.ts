import { Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import  { LayoutComponent } from '@components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/home/home.component')
      },
      {
        path: 'sign-in',
        loadComponent: () => import('@pages/sign-in/sign-in.component')
      },
      {
        path: 'sign-up',
        loadComponent: () => import('@pages/sign-up/sign-up.component')
      },
      {
        path: 'release/create',
        loadComponent: () => import('@pages/release-create/release-create.component'),
        ...canActivate(() => redirectUnauthorizedTo(['/sign-in']))
      },
      {
        path: 'release/edit/:id',
        loadComponent: () => import('@pages/release-edit/release-edit.component'),
        ...canActivate(() => redirectUnauthorizedTo(['/sign-in']))
      },
      {
        path: 'release/:id',
        loadComponent: () => import('@pages/release/release.component')
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found/not-found.component')
  }
];
