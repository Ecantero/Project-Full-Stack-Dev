import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  movieData:any;
  constructor(frontEndService: FrontEndService) { 
    frontEndService.getTestData().subscribe(
      (data)=>{
        console.log(data)
        this.movieData = data
      } 
    )
  }

  ngOnInit(): void {
  }

}
