import { Component, OnInit, Output } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  @Output() movieList:any;
  pageNum = 1;
  constructor(frontEndService: FrontEndService) { 
    frontEndService.getMovieList(this.pageNum).subscribe(
      (movieData)=>{
        console.log(movieData)
        this.movieList = movieData
        this.movieList = this.movieList.results
        console.log(this.movieList)
      }
    )
    
  }

  ngOnInit(): void {
    
  }


}
