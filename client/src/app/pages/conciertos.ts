import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conciertos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conciertos.html'
})
export class ConciertosComponent {
  concerts = [
    { id: 1, title: 'Metallica', date: '2025-12-10', venue: 'Estadio Azteca' },
    { id: 2, title: 'Coldplay', date: '2025-12-15', venue: 'Palau Sant Jordi' },
    { id: 3, title: 'Zoo', date: '2025-12-15', venue: 'Palau Sant Jordi' }
  ];

  deleteConcert(id: number) {
    this.concerts = this.concerts.filter(c => c.id !== id);
    console.log('Concierto eliminado:', id);
  }
}
