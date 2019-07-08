import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  content: Object = null;

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getDetails(id).subscribe(result => this.content = result);
  }

}
