import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root' // singleton a nivel de app
})
export class ConcertsService {
  private apiUrl = 'http://localhost:3001/concerts';

  constructor(private http: HttpClient) {}

  /** Obtener todos los conciertos */
  getAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.apiUrl).pipe(
      map(data => {
        console.log('Conciertos obtenidos:', data);
        return data || [];
      })
    );
  }

  /** Obtener un concierto por ID */
  getConcertById(slug: string): Observable<Concert> {
    return this.http.get<Concert>(`${this.apiUrl}/${slug}`);
  }

  /** Crear un nuevo concierto */
  createConcert(concert: Concert): Observable<Concert> {
    return this.http.post<Concert>(this.apiUrl, concert);
  }

  /** Actualizar un concierto existente */
  updateConcert(slug: string, concert: Concert): Observable<Concert> {
    return this.http.put<Concert>(`${this.apiUrl}/${slug}`, concert);
  }

  /** Eliminar un concierto */
  delete(slug: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${slug}`);
  }
}
