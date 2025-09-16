import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcertsService } from '../core/services/concert.services';
import { Concert } from '../core/model/concert.model';

@Component({
  selector: 'app-conciertos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conciertos.html'
})
export class ConciertosComponent implements OnInit {
  concerts: Concert[] = [];
  loading = true;
  error: string | null = null;

  constructor(private concertsService: ConcertsService) {}

  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(): void {
    this.concertsService.getAll().subscribe({
      next: (data) => {
        this.concerts = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar conciertos', err);
        this.error = 'No se pudieron cargar los conciertos';
        this.loading = false;
      }
    });
  }

  deleteConcert(id: string): void {
    this.concertsService.delete(id).subscribe({
      next: () => {
        this.concerts = this.concerts.filter(c => c._id !== id);
        console.log('Concierto eliminado:', id);
      },
      error: (err) => {
        console.error('Error al eliminar concierto', err);
      }
    });
  }
}
