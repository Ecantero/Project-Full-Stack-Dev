import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useFetch(url){
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
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
    }, [url]); 

    return{ movies, isLoaded, error}
}
export default useFetch