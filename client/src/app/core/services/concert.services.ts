import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  private apiUrl = 'http://localhost:3000/concerts'; // JSON Server o API backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.apiUrl);
  }

  getById(id: number): Observable<Concert> {
    return this.http.get<Concert>(`${this.apiUrl}/${id}`);
  }

  create(concert: Concert): Observable<Concert> {
    return this.http.post<Concert>(this.apiUrl, concert);
  }

  update(id: number, concert: Concert): Observable<Concert> {
    return this.http.put<Concert>(`${this.apiUrl}/${id}`, concert);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
