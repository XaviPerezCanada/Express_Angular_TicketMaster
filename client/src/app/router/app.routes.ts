import { Routes } from '@angular/router';
import { ConciertosComponent } from '../Shared/conciertos';
import { ConciertosFormComponent } from '../Shared/concert-form';
import { HomeComponent } from '../pages/home/home.component'; // importamos

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'concerts', component: ConciertosComponent },
  { path: 'concerts/new', component: ConciertosFormComponent },
  { path: 'concerts/edit/:id', component: ConciertosFormComponent },
];
