import React from 'react';
import '../Homepage.css';

const IMG_API = "https://image.tmdb.org/t/p/w200/";
function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
const Movie = ({ title, poster_path, overview, vote_average}) => 
    <div className='movieCard' onClick={handleSubmit}>
        <img src={IMG_API + poster_path} alt={title}/>
        <div className='movieCardDescription'>
            <div className='cardTitle'>{title}</div>
            <div className= 'cardRating'>{vote_average}</div>
        </div>
    </div>;

export default Movie;