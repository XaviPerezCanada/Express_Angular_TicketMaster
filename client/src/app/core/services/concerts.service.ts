import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root' // root-level singleton
})
export class ConcertsService {
  private apiUrl = 'http://localhost:3001/concerts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.apiUrl).pipe(map(data =>{console.log(data); return data || []}));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
