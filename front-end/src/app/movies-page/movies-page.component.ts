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
  queryString ='';
  tempData:any;
  genres=[
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ];

  constructor(private frontEndService: FrontEndService,) { 
    this.getMovies()
    
  }

  getMovies(){
    // console.log(this.pageNum)
    this.frontEndService.getMovieList(this.pageNum).subscribe(
      (movieData)=>{
        // console.log(movieData)
        this.movieList = movieData
        this.movieList = this.movieList.results
        // console.log(this.movieList)
      }
    )
  }

  searchMovies(){
    // console.log(this.queryString);
    this.genres.forEach(genre => {
      // console.log(genre)
      if(this.queryString.toLowerCase() == genre.name.toLowerCase()){
        this.frontEndService.getMovieByGenre(genre.id).subscribe(
          (movieData)=>{
            this.movieList = movieData;
            this.movieList = this.movieList.results
          }
        )
      }
      else{
        console.log("genre not found")
      }
    });

    console.log("regular search reached")

    this.frontEndService.getSearchedMovie(this.queryString).subscribe(
      (movieData)=>{
        this.tempData = movieData;
        this.tempData = this.tempData.results
      
        // console.log(this.tempData)
        if(this.tempData[0].media_type === "movie")
        {
          this.movieList = this.tempData
        }else if(this.tempData[0].media_type === "person"){
          this.setActorMovies();
        }
        
      }
    )
  }


  setActorMovies(){
    const actors:any[] = this.tempData;
    // console.log(actors)

    
    let dummyArray:any[] = [];
    actors.forEach((actor: any) => {
      // console.log(actor)

      if(actor.media_type === "movie"){
      }else if(actor.media_type ==='person'){
          const associatedMovies:any[] = actor.known_for
        associatedMovies.forEach((actorData:any) => {
            dummyArray.push(actorData)
          });
          
        
      }
    });
      // console.log(dummyArray)
      this.movieList = dummyArray
  }


  pageBack(){
    if(this.pageNum === 1){
      this.pageNum =1
      this.getMovies()
    }else{
      this.pageNum = this.pageNum - 1;
      this.getMovies()
    }
  }

  pageNext(){
    this.pageNum = this.pageNum+1;
    this.getMovies()
  }

  ngOnInit(): void {
    
    
  }


}
