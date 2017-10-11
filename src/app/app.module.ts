import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import {APP_ROUTING} from './app.routes';
//Services
import {MoviesService} from './services/movies.service';
//pipes
import { ImagePipe } from './pipes/image.pipe';
import { GenresPipe } from './pipes/genres.pipe';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { SearchImgPipe } from './pipes/search-img.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent,
    ImagePipe,
    GenresPipe,
    GaleriaComponent,
    SearchImgPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
