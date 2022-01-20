import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesPageItemComponent } from './movies-page-item/movies-page-item.component';
import { MovieSynopsisComponent } from './movie-synopsis/movie-synopsis.component';
import { ActorItemComponent } from './actor-item/actor-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviesPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    NavBarComponent,
    MoviesPageItemComponent,
    MovieSynopsisComponent,
    ActorItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
