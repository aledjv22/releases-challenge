import { Routes } from '@angular/router';

import  { LayoutComponent } from '@components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      path: '',
      loadComponent: () => import('@pages/home/home.module')
    ],
    {
      path: 'sign-in',
      loadComponent: () => import('@pages/sign-in/sign-in.module')
    },
    {
      path: 'sign-up',
      loadComponent: () => import('@pages/sign-up/sign-up.module')
    },
    {
      path: 'release/:id',
      loadComponent: () => import('@pages/release/release.module')
    }
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found/not-found.module')
  }
];
