import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apikey:string = "051a3143c4342eaa4d0458a84bb40991";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private genresUrl:string= "https://api.themoviedb.org/3/genre/movie/list?api_key=";
  private singleMovie:string="https://api.themoviedb.org/3/movie/";

  initial_date:Date  = new Date();
  final_date:Date= new Date();



  constructor( private jsonp:Jsonp ) {
    this.initial_date.setDate(this.final_date.getDate() - 21);
  }

  getInTheaters(){

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ this.initial_date.getFullYear() }-${ this.initial_date.getMonth()+1 }-${ this.initial_date.getDate() }&primary_release_date.lte=${ this.final_date.getFullYear() }-${ this.final_date.getMonth()+1 }-${ this.final_date.getDate() }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getForKids(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getGenres(){
    let url = `${ this.genresUrl }${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res=> res.json());
  }
  getMovie(key:number){
    let url= `${ this.singleMovie }${ key }?&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url)
    return this.jsonp.get( url )
                .map( res=> res.json());
  }
}
