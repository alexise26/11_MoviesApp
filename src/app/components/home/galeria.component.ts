import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor( public _router:Router) { }

  ngOnInit() {
  }

  getMovie(idx:any){
    this._router.navigate(['/movie', idx]);
  }

}
