import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PGDAServicesService {
  private baseUrl = 'http://localhost:8083/'; // adjust port to match server
  private url = this.baseUrl + 'api/pgdaScores'; // change 'todos' to your API path
  constructor(private http: HttpClient) { }
}

  