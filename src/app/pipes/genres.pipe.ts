import { Pipe, PipeTransform } from '@angular/core';
import {MoviesService} from '../services/movies.service';


@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {
  genres:string[];
  genres_name:string[];


  constructor(public _ms:MoviesService){
  }
  transform(value: any[]): any {
    
        console.log(this.genres_name);
    return this.genres;
  }





}
