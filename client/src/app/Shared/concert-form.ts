import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conciertos-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './concert-form.html'
})
export class ConciertosFormComponent {
  concert = { id: 0, title: '', date: '', venue: '' };
  isEdit = false; // <-- faltaba

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      // aquí cargarías el concierto desde el servicio usando el id
    }
  }

  saveConcert() {
    if (this.isEdit) {
      console.log('Actualizando concierto:', this.concert);
    } else {
      console.log('Creando concierto:', this.concert);
    }
  }
}
