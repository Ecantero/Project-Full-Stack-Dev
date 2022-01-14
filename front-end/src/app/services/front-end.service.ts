import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';
const movieDBURL = 'https://api.themoviedb.org'
const imagesURL = 'https://image.tmdb.org/t/p/w500'
const APIKEY = 'f669645cad8fbe1526a40b2deee8a49e'

@Injectable({
  providedIn: 'root',
})
export class FrontEndService {
  constructor(private http: HttpClient) {}
  testURL=`https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`


  getTestData(){
    return this.http.get(this.testURL);
  }
  
  testCallback(){
    return this.http.get(baseUrl + "/test");
  }
  
  // getImage(url:String){
  //   console.log(imagesURL+url)
  //   return this.http.get(imagesURL + url)
  // }

  getMovieList(pageNum:Number){
    return this.http.get(`${movieDBURL}/3/movie/popular?api_key=${APIKEY}&language=en-US&page=${pageNum}`)
  }
}