import { Routes } from '@angular/router';

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
        path: 'release/:id',
        loadComponent: () => import('@pages/release/release.component')
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found/not-found.component')
  }
];
