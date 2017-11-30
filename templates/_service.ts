import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://api.com');
  }

  create(param: any): Observable<any> {
    return this.http.post('https://api.com', { body: param });
  }

  delete(param: any): Observable<any> {
    return this.http.delete('https://api.com');
  }

}