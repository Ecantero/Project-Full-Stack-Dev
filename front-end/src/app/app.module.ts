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
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { ReviewComponentComponent } from './review-component/review-component.component';
import { StarComponent } from './star/star.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewListAdminComponent } from './review-list-admin/review-list-admin.component';

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
    ReviewComponentComponent,
    StarComponent,
    ReviewListComponent,
    ReviewListAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
