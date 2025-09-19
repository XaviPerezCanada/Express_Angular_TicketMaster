import { Routes } from '@angular/router';
import { ConcertFormComponent } from '../pages/form/concert-form';
import { HomeComponent } from '../pages/home/home.component'; // importamos



export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'concerts',
    loadComponent: () =>
      import('../pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'concerts/new',
    loadComponent: () =>
      import('../pages/form/concert-form').then(c => c.ConcertFormComponent)
  },
  {
    path: 'concerts/edit/:id',
    loadComponent: () =>
      import('../pages/form/concert-form').then(c => c.ConcertFormComponent)
  }
];
