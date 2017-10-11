import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchImg'
})
export class SearchImgPipe implements PipeTransform {
  url:string = "https://image.tmdb.org/t/p/w500";

  transform(image:any): any {

      if (image) {
          return this.url + image;
      }else{
        return "assets/img/noimage.png"
      }
  }

}
