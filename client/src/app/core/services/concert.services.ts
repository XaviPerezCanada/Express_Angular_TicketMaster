import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  private apiUrl = 'http://localhost:8080/concerts'; // Tu backend Express + Mongo

  constructor(private http: HttpClient) {}

  getAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.apiUrl);
  }

  getById(id: string): Observable<Concert> {
    return this.http.get<Concert>(`${this.apiUrl}/${id}`);
  }

  create(concert: Concert): Observable<Concert> {
    return this.http.post<Concert>(this.apiUrl, concert);
  }

  update(id: string, concert: Concert): Observable<Concert> {
    return this.http.put<Concert>(`${this.apiUrl}/${id}`, concert);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
