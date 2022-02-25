import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import Movie from './Movie';

const windowPathName = window.location.pathname;
const id = windowPathName.slice(9);
const API_KEY = 'f669645cad8fbe1526a40b2deee8a49e';
const FEATURED_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

function Details() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    // Note:  the empty array means the useEffect will run like componentDidMount()
    useEffect(() =>{
       
        fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
            
            console.log(movies);
        });
    }, []);

    
        return <div className='moviesList'>
            hi
        </div>;
  
}

// const API_KEY = 'f669645cad8fbe1526a40b2deee8a49e';
// const windowPathName = window.location.pathname;
// const id = windowPathName.slice(9);
// //const FEATURED_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
// function Details() {
  

//   const [details, setDetails] = useState([]);

//     // Note:  the empty array means the useEffect will run like componentDidMount()
//     useEffect(() =>{
       
//         async function getData(){
//             await fetch(FEATURED_API)
//             .then((res) => res.json())
//             .then((data) => setDetails(data));
//             }
//         getData();
//         console.log(details);
//     },[]);
//         // fetch(FEATURED_API)
//         // .then((res) => res.json())
//         // .then((data) => {
//         //     console.log(data);
           
//         //     setDetails(data);
//         //     console.log(details);
//         // });
 

    
//         return <div className='moviesList'>
//             {details.length > 0 && details.map((movie) =>
//                 //  <Detail key={movie.id} {...movie}/>
//                 <div>hi</div>
//               )}
//               {/* HELLO */}
//         </div>;
// }


export default Details
//window.location.pathname