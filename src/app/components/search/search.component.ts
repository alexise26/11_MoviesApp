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
   movies:string[]=null;
   cargando:boolean=true;
   termino:string;

  constructor(public _ms:MoviesService, private activatedRoute:ActivatedRoute,private _router:Router) {

    setTimeout(()=>{
      this.activatedRoute.params
            .subscribe(params=>{
              this.termino = params['termino'];
              this.getMovies(this.termino);
              this.cargando=false;
            })
    },1000);

  }

  getMovies(texto:string){
    this._ms.buscarPelicula(texto)
        .subscribe(data=>{
          this.movies= data.results;
          console.log(this.movies)
        })
  }

  // getMovie(idx:any){
  //   this._router.navigate(['/movie', idx]); Este era para mandarlo sin el [routerLink]
  // }
  ngOnInit() {
  }
}
