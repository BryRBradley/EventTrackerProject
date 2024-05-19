import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PGDAScore } from '../pgda-score.model';

@Injectable({
  providedIn: 'root'
})
export class PgdaService {
  private baseUrl = 'http://localhost:8083/api/pgdaScores';  

  constructor(private http: HttpClient) { }

  getScores(): Observable<PGDAScore[]> {
    return this.http.get<PGDAScore[]>(this.baseUrl);
  }

  getScore(id: number): Observable<PGDAScore> {
    return this.http.get<PGDAScore>(`${this.baseUrl}/${id}`);
  }

  createScore(score: PGDAScore): Observable<PGDAScore> {
    return this.http.post<PGDAScore>(this.baseUrl, score);
  }

  updateScore(id: number, score: PGDAScore): Observable<PGDAScore> {
    return this.http.put<PGDAScore>(`${this.baseUrl}/${id}`, score);
  }

  deleteScore(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  findByPlayerName(name: string): Observable<PGDAScore[]> {
    return this.http.get<PGDAScore[]>(`${this.baseUrl}/playerName/${name}`);
  }

  findByLeague(league: string): Observable<PGDAScore[]> {
    return this.http.get<PGDAScore[]>(`${this.baseUrl}/league/${league}`);
  }
}
