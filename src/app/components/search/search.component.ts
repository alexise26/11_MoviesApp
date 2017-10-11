import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  private movies:string[];
  private termino:string;

  constructor(public _ms:MoviesService, private activatedRoute:ActivatedRoute,private _router:Router) {
    this.activatedRoute.params
          .subscribe(params=>{
            this.termino = params['termino'];
            this.getMovies(this.termino);
          })
  }

  getMovies(texto:string){
    this._ms.buscarPelicula(texto)
        .subscribe(data=>{
          this.movies= data.results;
        })
  }

  // getMovie(idx:any){
  //   this._router.navigate(['/movie', idx]); Este era para mandarlo sin el [routerLink]
  // }
  ngOnInit() {
  }
}
