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
 
  
  const API_KEY = "f669645cad8fbe1526a40b2deee8a49e";
  const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedTerm}`;
  const PEOPLE_API = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchedTerm}`;
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

  }, [FEATURED_API, PEOPLE_API]);

  return (
    <section>
      <div className='title'>results for "{searchedTerm}" </div>
      
      <div className='moviesCollection'>
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
            <Link to={`/search/genres`}> want to search by genre?</Link>
      </div>
      

      </section>
  )
}

export default Search