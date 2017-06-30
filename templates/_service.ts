import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class {{ properCase name }}Service {
  
  constructor(private http: Http) { }

  get() {
    return this.http.get('https://api.com');
  }


}