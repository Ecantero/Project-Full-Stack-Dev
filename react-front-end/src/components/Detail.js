import React from 'react';
import '../Homepage.css';



const IMG_API = "https://image.tmdb.org/t/p/w200/";

//trying to display data
const Detail = ({ title, poster_path, overview, vote_average, id}) => {

   
    return(
        <div className='movieCard' id={id}>
            <img src={IMG_API + poster_path} alt={title}/>
            <div className='movieCardDescription'>
                <div className='cardTitle'>{title}</div>
                <div className= 'cardRating'>{vote_average}</div>
            </div>
        </div>)};

export default Detail;