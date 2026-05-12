import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}
  // https://restaurant.stepprojects.ge/api/Products/GetAll
  // https://restaurant.stepprojects.ge/api/Categories/GetAll

  baseUrl = 'https://restaurant.stepprojects.ge/api/';
  baseUrl2 = 'https://restaurantapi.stepacademy.ge/api/';
// auth/login
  apiKey = '14c34c99-91b6-41a8-ad96-f4d3dc43e35b';

  getAll(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  getAll2(url: string) {
    return this.http.get(this.baseUrl2 + url, {
      headers: {
        'X-API-KEY': this.apiKey,
      },
    });
  }



  postObj(url: string, obj: any){
    return this.http.post(this.baseUrl2+url,obj, {
        headers: {
        'X-API-KEY': this.apiKey,
      }
    } )
  }
}

// auth/login

// http client     --  fetch
