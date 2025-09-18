import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcertsService } from '../core/services/concerts.service';
import { Concert } from '../core/model/concert.model';

@Component({
  selector: 'app-conciertos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conciertos.html'
  ,  styleUrls: ['./conciertos.css']
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
        console.error('Error loading concerts', err);
        this.error = 'Failed to load concerts';
        this.loading = false;
      }
    });
  }
  editConcert(id: string): void {
    // Implement navigation to edit page or open edit modal
    console.log('Edit concert with id:', id);
  }

  deleteConcert(id: string): void {
    this.concertsService.delete(id).subscribe({
      next: () => {
        this.concerts = this.concerts.filter(c => c._id !== id);
      },
      error: (err) => {
        console.error('Error deleting concert', err);
      }
    });
  }
  trackById(index: number, concert: Concert) {
  return concert._id;
}
  
}
