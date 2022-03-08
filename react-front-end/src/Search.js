import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

const Search = () => {

  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  const [params] = useSearchParams();
  const [searchedData, setSearchedData] = useState([]);
  let searchedTerm = params.get("term");
  console.log(searchedTerm);
  
  const API_KEY = "f669645cad8fbe1526a40b2deee8a49e";
  const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedTerm}`;
  const IMG_API = "https://image.tmdb.org/t/p/w200/";
 
  useEffect(() => {
    
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch(FEATURED_API);
    setSearchedData(data.data);
  };
  
  console.log(searchedData);

  return (
    <section>
      <div>results for "{searchedTerm}" </div>
      </section>
  )
}

export default Search