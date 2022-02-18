import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';
const movieDBURL = 'https://api.themoviedb.org';
const imagesURL = 'https://image.tmdb.org/t/p/w500';
const APIKEY = 'f669645cad8fbe1526a40b2deee8a49e';

@Injectable({
  providedIn: 'root',
})
export class FrontEndService {
  constructor(private http: HttpClient) {}
  testURL = `https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`;

  getTestData() {
    return this.http.get(this.testURL);
  }

  testCallback() {
    return this.http.get(baseUrl + '/home');
  }

  getUsers() {
    return this.http.get(`${baseUrl}/users`);
  }

  getOneUser(data: any) {
    // console.log(`data being passed thru: ${data}`);
    return this.http.get(`${baseUrl}/user/${data}`);
  }

  userLogin(data: any) {
    return this.http.post(`${baseUrl}/login`, data);
  }

  userLogout() {
    return this.http.get(`${baseUrl}/logout`);
  }

  deleteUser(data: any) {
    return this.http.get(`${baseUrl}/deleteUser/${data}`)
  }

  postReview(data: any) {
    return this.http.post(`${baseUrl}/review`, data);
  }

  getReviews() {
    return this.http.get(`${baseUrl}/getReview`);
  }

  deleteReview(data: any) {
    return this.http.get(`${baseUrl}/deleteReview/${data}`);
  }

  getMovieData(id: String) {
    return this.http.get(`${movieDBURL}/3/movie/${id}?api_key=${APIKEY}`);
  }

  getMovieList(pageNum: Number) {
    return this.http.get(
      `${movieDBURL}/3/movie/popular?api_key=${APIKEY}&language=en-US&page=${pageNum}`
    );
  }

  getActors(movieID: Number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${APIKEY}&language=en-US`
    );
  }

  getActorImage(actorID: Number) {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${actorID}/images?api_key=${APIKEY}`
    );
  }

  getSearchedMovie(query:string){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=en-US&query=${query}&page=1`)
  }

  getMovieByGenre(query:number){
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${query}`)
  }
}
