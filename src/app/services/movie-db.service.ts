import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  key: string ="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2Q0YmRkOTFlNzBlMWM2OTFiYzI2NTcyNmViYjQ4OSIsInN1YiI6IjYwZTVjNTc4ZDdjZDA2MDA1ZGU5NGU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7t2cjEQpcms_SnbG6UXeVxumeBkeAvrBkXJdfgRZjA"
  
  baseURL: string = 'https://api.themoviedb.org/3'
  constructor(
    private _httpClient : HttpClient
  ) { }

  getTrending() :Observable<any> {

    let headers =new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/trending/all/week', {
      headers
    })
  }

  getMovies() :Observable<any> {

    let headers =new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/movie/popular', {
      headers
    })
  }

  getSeries() :Observable<any> {

    let headers =new HttpHeaders().set('Authorization', this.key);

    return this._httpClient.get(this.baseURL + '/tv/popular', {
      headers
    })
  }
}
