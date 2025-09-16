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
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redirigir automáticamente a /concerts
    this.router.navigate(['/concerts']);
  }
}
