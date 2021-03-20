import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string): Observable<Blog> {
    return this.http.get<Blog>(`${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${uri}`, payload);
  }
}
