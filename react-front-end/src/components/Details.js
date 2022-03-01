import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import Movie from './Movie';
import axios from 'axios';
import useFetch from "./useFetch";
// import './Homepage.css';

const windowPathName = window.location.pathname;
const id = windowPathName.slice(9);
const API_KEY = 'f669645cad8fbe1526a40b2deee8a49e';
const FEATURED_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
const IMG_API = "https://image.tmdb.org/t/p/w200/";

function Details() {
   const { movies, isLoaded, error} = useFetch(FEATURED_API);

   if(isLoaded) return <h1>LOADING</h1>;
   if(error) console.log(error);
  
   return(
       <div className='movieDetails'>
            <div className='movieTitle'>{movies?.title}</div>
            <div className='movieGenres'>{movies?.genres[0].name} {movies?.genres[1].name} {movies?.genres[2].name} {movies?.genres[3].name}</div>
            <div className='movieTagline'>{movies?.tagline}</div>
            <img src={IMG_API + movies?.poster_path} alt={movies?.title}/>
            <div>{movies?.overview}</div>
            <div>Actors</div>
            <div>{movies?.actor}</div>
        </div>
   );

   
    
    // Note:  the empty array means the useEffect will run like componentDidMount()
          
    // useEffect(() =>{
    //     axios
    //     .get(FEATURED_API)
    //     .then(res => {
    //         console.log(res)
    //         setMovies(res.data)
    //         console.log(movies)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }, [])

    // useEffect(() =>{
       
    //     fetch(FEATURED_API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setMovies(data.results);
           
    //     });

    //     console.log(movies);
    // }, []);
    

    
        // return <div className='moviesList'>
            
        //         <div>hi</div>
            
        // </div>;
  
}
export default Details


