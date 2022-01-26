import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movies-page-item',
  templateUrl: './movies-page-item.component.html',
  styleUrls: ['./movies-page-item.component.css']
})
export class MoviesPageItemComponent implements OnInit {
  @Input() movieDetails:any;

  movieImageUrl='' 
  movieID=''

  
  constructor() {

   }

  ngOnInit(): void {
    this.movieImageUrl = 'https://image.tmdb.org/t/p/w500' + this.movieDetails.poster_path;
    this.movieID = this.movieDetails.id
    
  }

}
