import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';
const movieDBURL = 'https://api.themoviedb.org'

@Injectable({
  providedIn: 'root',
})
export class FrontEndService {
  constructor(private http: HttpClient) {}
  testURL='https://api.themoviedb.org/3/movie/550?api_key=f669645cad8fbe1526a40b2deee8a49e'


  getTestData(){
    return this.http.get(this.testURL);
  }
  
  testCallback(){
    return this.http.get(baseUrl + "/test");
  }
}