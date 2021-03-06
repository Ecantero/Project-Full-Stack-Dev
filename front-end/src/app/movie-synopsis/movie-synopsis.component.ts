import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrontEndService } from '../services/front-end.service';


@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.component.html',
  styleUrls: ['./movie-synopsis.component.css']
})
export class MovieSynopsisComponent implements OnInit {
  queryID:any;
  movie:any;
  movieImageUrl='';
  movieBackDrop ='';
  actors:any;

  constructor(private route: ActivatedRoute,private frontEndService: FrontEndService ) { 
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.queryID = Number(routeParams.get('id'))

    
    this.frontEndService.getMovieData(this.queryID).subscribe(
      movieData =>{
        this.movie = movieData;
        this.movieImageUrl = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
        this.movieBackDrop = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
      }
    )

    this.frontEndService.getActors(this.queryID).subscribe(
      (movieActors)=>{
        this.actors = movieActors; 
      }
    )
    

    
  }

}
