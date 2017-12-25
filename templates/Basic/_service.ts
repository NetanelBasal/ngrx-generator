import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {

  constructor(private http: HttpClient) { }

  load{{ titleCase name }}(): Observable<any> {
    return this.http.get('https://api.com');
  }
}
