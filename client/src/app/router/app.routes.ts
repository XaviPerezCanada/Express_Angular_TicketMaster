import { Routes } from '@angular/router';
import { ConciertosComponent } from '../pages/conciertos';
import { ConciertosFormComponent } from '../pages/concert-form';
import { HomeComponent } from '../pages/home/home.component'; // importamos

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // <-- aquí reemplazamos el redirect
  { path: 'concerts', component: ConciertosComponent },
  { path: 'concerts/new', component: ConciertosFormComponent },
  { path: 'concerts/edit/:id', component: ConciertosFormComponent },
];
