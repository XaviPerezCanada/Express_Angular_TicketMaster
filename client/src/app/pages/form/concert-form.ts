import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConcertsService } from '../../core/services/concerts.service';
import { Concert } from '../../core/model/concert.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-concert-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './concert-form.html'
  ,styleUrls: ['./concert-form.css']
})
export class ConcertFormComponent implements OnInit {
  concertId?: string;
  form!: FormGroup; // 

  constructor(
    private fb: FormBuilder, 
    private concertService: ConcertsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      artista: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
    });

    this.concertId = this.route.snapshot.paramMap.get('id') || undefined;

    if (this.concertId) {
      this.concertService.getConcertById(this.concertId).subscribe(concert => {
        this.form.patchValue(concert);
      });
    }
  }

onSubmit(): void {
  if (this.form.valid) {
    if (this.concertId) {
      this.concertService
        .updateConcert(this.concertId, this.form.value as Concert)
        .subscribe({
          next: () => {
            Swal.fire({
              title: 'Actualizado!',
              text: 'El concierto se ha actualizado correctamente.',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigateByUrl('/concerts');
            });
          },
          error: (err) => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo actualizar el concierto.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
            console.error(err);
          }
        });
    } else {
      this.concertService
        .createConcert(this.form.value as Concert)
        .subscribe({
          next: () => {
            Swal.fire({
              title: 'Creado!',
              text: 'El concierto se ha creado correctamente.',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigateByUrl('/concerts');
            });
          },
          error: (err) => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo crear el concierto.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
            console.error(err);
          }
        });
    }
  }
}

}
