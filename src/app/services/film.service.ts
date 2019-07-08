import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFilms } from '../models/IFilms.interface';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private url: string = '';
  private apiKey: string = 'aa313c56';

  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    //console.log(this.url);
    return this.http.get<IFilms>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string){
    return this.http.get<IFilms>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
