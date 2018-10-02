import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../app/environment';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
