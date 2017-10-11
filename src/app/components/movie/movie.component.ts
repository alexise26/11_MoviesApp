import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  private movie:object;
  private regresarA:string="";

  constructor(public _ms:MoviesService, public _router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params
          .subscribe(params=>{

              this.regresarA = params['pag'];

              this._ms.getMovie(params['id'])
                .subscribe(data=>{
                  this.movie= data;
              })

          })
   }

  ngOnInit() {
  }

}
