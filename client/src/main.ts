// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { HomeComponent } from './app/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Home por defecto
];

bootstrapApplication(App, {
  providers: [provideRouter(routes),
  provideHttpClient() ],
})  
  .catch((err) => console.error(err));