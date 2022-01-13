import { Component, OnInit,Input } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-movies-page-item',
  templateUrl: './movies-page-item.component.html',
  styleUrls: ['./movies-page-item.component.css']
})
export class MoviesPageItemComponent implements OnInit {
  @Input() movieDetails:any;

  movieImageUrl=''

  
  constructor(frontEndService: FrontEndService) {
    console.log(this.movieDetails)
    this.movieImageUrl = "https://image.tmdb.org/t/p/w500" + this.movieDetails.poster_path
    
    // frontEndService.getImage(this.movieDetails.poster_path).subscribe(
    //   (url)=>{
    //     console.log(url)
    //   }
    // )
   }

  ngOnInit(): void {
  }

}
