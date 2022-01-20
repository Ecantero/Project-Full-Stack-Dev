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
    console.log(this.queryID)
    
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params =>{
    //   console.log(params);
    //   this.queryID = params['id'];
    // })
    const routeParams = this.route.snapshot.paramMap;
    this.queryID = Number(routeParams.get('id'))
    console.log(this.queryID)

    
    this.frontEndService.getMovieData(this.queryID).subscribe(
      movieData =>{
        console.log(movieData);
        this.movie = movieData;
        this.movieImageUrl = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
        this.movieBackDrop = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
      }
    )

    this.frontEndService.getActors(this.queryID).subscribe(
      (movieActors)=>{
        console.log(movieActors)
        this.actors = movieActors; 
      }
    )
    

    
  }

}
