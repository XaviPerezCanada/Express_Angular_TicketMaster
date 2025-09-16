import { Component } from '@angular/core';
import { ConciertosComponent } from '../../Shared/conciertos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ConciertosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
