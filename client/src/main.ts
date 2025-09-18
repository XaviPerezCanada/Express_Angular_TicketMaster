import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { App } from './app/app';

import { appRoutes } from './app/router/app.routes';



bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient()  
  ]
}).catch(err => console.error(err));
