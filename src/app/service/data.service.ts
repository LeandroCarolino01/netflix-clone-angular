import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getLatestMovie(): Observable<any>  {
    return this.http.get<any>(this.url+'/movie/latest?api_key='+environment.api_key);
  }

  getPopularMovies(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/movie/popular?api_key='+environment.api_key);
  }

  getNowPlayingMovies(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/movie/now_playing?api_key='+environment.api_key);
  }

  getTopRatedMovies(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/movie/top_rated?api_key='+environment.api_key);
  }

  getUpcomingMovies(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/movie/upcoming?api_key='+environment.api_key);
  }

  getTrendingMovies(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/trending/all/week?api_key='+environment.api_key);
  }

  getOriginals(): Observable<any>  {
    return this.http.get<Movie>(this.url+'/discover/tv?api_key='+environment.api_key);
  }
}
