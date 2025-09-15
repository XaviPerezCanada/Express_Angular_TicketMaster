import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '' // no necesita template
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redirigir automáticamente a /concerts
    this.router.navigate(['/concerts']);
  }
}
