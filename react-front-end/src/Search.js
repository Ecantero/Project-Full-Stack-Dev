import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from "react-router-dom";
import Movie from "./components/Movie";

const Search = () => {

  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const [params] = useSearchParams();
  let searchedTerm = params.get("term");
  console.log(searchedTerm);

  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchedPeople, setSearchedPeople] = useState([]);
  const [searchedGenre, setSearchedGenre] = useState([]);
  const [genreID, setGenreID] = useState();
  const [genreList, setGenreList] = useState([
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
  ]);
 
  
  const API_KEY = "f669645cad8fbe1526a40b2deee8a49e";
  const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedTerm}`;
  const PEOPLE_API = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchedTerm}`;
  var GENRE_API = ``;
  
  const IMG_API = "https://image.tmdb.org/t/p/w200/";
 

  useEffect(() => {
    
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setSearchedMovie(data.results);
      });
      fetch(PEOPLE_API)
      .then((res) => res.json())
      .then((data) => {
        setSearchedPeople(data.results);
      });

      genreList.forEach(genre => {
        if(searchedTerm.toLowerCase() === genre.name.toLowerCase()){
          GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`;
          // setGenreID = this.genre.id;
          fetch(GENRE_API)
          .then((res) => res.json())
          .then((data) => {
            setSearchedGenre(data.results);
          });
        } else {
          GENRE_API = ``;
        }
      })


  }, [FEATURED_API, PEOPLE_API]);

  return (
    <section>
      <div className='title'>results for "{searchedTerm}" </div>
      
      <div className='moviesCollection' style={{height: "70vh"}}>
          {/* {searchedData.map((names, index) => (
            <div key={index}>{names.id}</div>
          ))} */}
        <div className='searchTitles'>Titles</div>  
        <div className='moviesList'>
          {searchedMovie.length > 0 &&
          searchedMovie.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <div className='searchTitles'>Names</div> 
          <div className='peopleList'>
            {searchedPeople.map((castMember, index) => {
              if(index < 8)
            return(
              
                  <div className='castCard'>
                    <img src={IMG_API + castMember.profile_path} alt={castMember.name} />

                    <div className='castCardTitle'style={{ fontSize: '12px', padding: '5px', color: 'white' }}>
                      {castMember.name}
                      
                    </div>
                    
                  </div>
              
            
              )
            })}
            </div> 

            <div className='searchTitles'>Genres</div> 
              <div className='moviesList'>
              {searchedGenre.length > 0 &&
              searchedGenre.map((movie) => <Movie key={movie.id} {...movie} />)}
              </div>
            <div style={{color:'white', padding:'10px', textAlign: 'center'}}> nothing here....</div>
      </div>
      

      </section>
  )
}

export default Search