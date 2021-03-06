import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {first, map} from 'rxjs/operators';

@Injectable()
export class ApiService {
  private headers: HttpHeaders;
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  public get(value: string): Observable<any> {
    return this.http.get(this.baseUrl + '/api/' + value, { headers: this.headers });
  }
}
