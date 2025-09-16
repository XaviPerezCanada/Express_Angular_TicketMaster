import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <- importa esto
import { App } from './app/app';
import { HomeComponent } from './app/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()  // <- esto da el provider para HttpClient
  ]
}).catch(err => console.error(err));
