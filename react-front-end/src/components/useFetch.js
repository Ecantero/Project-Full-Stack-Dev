import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useFetch(url){
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
   
    
    const refetch = () => {
        setIsLoaded(true);
        axios.get(url)
        .then((response) => {
            setMovies(response.data);
            console.log(response.data);
            console.log(movies);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setIsLoaded(false);
        });
    }

    return{ movies, isLoaded, error, refetch}
}


export const fetch =(url) => {
    console.log(url)

    const promise = axios.get(url);

    const promiseData = promise.then((response)=>response)

    return promiseData   

}



export default useFetch