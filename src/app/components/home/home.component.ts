import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populars:any;
  theaters:any;
  kids:any;

  constructor(public _ms:MoviesService){

      this._ms.getInTheaters()
          .subscribe(data=>{
            this.theaters= data.results;
          });

      this._ms.getPopulares()
          .subscribe(data=>{
            this.populars= data.results;
          });
      this._ms.getForKids()
          .subscribe(data=>{
            this.kids= data.results;
          });
    }


    ngOnInit() {
    }

}
