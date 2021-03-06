import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {MovieSynopsisComponent} from './movie-synopsis/movie-synopsis.component'
import { ReviewListAdminComponent } from './review-list-admin/review-list-admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path:'movies',component:MoviesPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'allReviews', component: ReviewListAdminComponent},
  {path:'movies/:id',component:MovieSynopsisComponent},
  {path:'admin', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
