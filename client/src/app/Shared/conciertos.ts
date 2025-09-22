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
  router: any;

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
    // this.router.navigate(['/concerts/edit', id]);
 
    
    console.log('Edit concert with id:', id);
  }

  deleteConcert(slug: string): void {
    this.concertsService.delete(slug).subscribe({
      next: () => {
        this.concerts = this.concerts.filter(c => c.slug !== slug);
      },
      error: (err) => {
        console.error('Error deleting concert', err);
      }
    });
  }
  trackById(index: number, concert: Concert) {
  return concert.slug;
}
  
}
