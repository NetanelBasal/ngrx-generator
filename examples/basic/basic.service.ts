import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BasicService {

  constructor(private http: HttpClient) { }

  load(): Observable<any> {
    return this.http.get('https://api.com');
  }
}