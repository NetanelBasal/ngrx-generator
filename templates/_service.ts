import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {
  
  constructor(private http: Http) { }

  get() : Observable<any> {
    return this.http.get('https://api.com');
  }


}