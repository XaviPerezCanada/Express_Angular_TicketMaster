import { Routes } from '@angular/router';
import { ConcertFormComponent } from '../pages/form/concert-form';
import { HomeComponent } from '../pages/home/home.component'; // importamos

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'concerts', component: HomeComponent },
  { path: 'concerts/new', component: ConcertFormComponent },
  { path: 'concerts/edit/:id', component: ConcertFormComponent },
];
