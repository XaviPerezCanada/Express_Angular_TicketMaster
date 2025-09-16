import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConciertosComponent } from '../conciertos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [

    ConciertosComponent,

  ]
})
export class HomeComponent {}
