import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  url:string = "https://image.tmdb.org/t/p/w500";

  transform(pelicula:any): any {
    
    if (pelicula.backdrop_path) {
        return this.url + pelicula.backdrop_path;
    }else{
      if (pelicula.poster_path) {
          return this.url + pelicula.poster_path;
      }else{
        return "assets/img/noimage.png"
      }
    }
  }

}
