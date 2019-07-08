import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';
import { IFilms } from 'src/app/models/IFilms.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  results: Observable<IFilms>;
  title: string='';
  type: string='';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }


  searchChanged(): void{
    this.results = this.filmService.searchMovies(this.title, this.type);
  }


}
