import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'swiperpage',
    loadComponent: () => import('./pages/swiperpage/swiperpage.page').then( m => m.SwiperpagePage)
  },
  
];
