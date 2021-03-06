import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import Movie from "./Movie";
import axios from "axios";
import useFetch, { fetch } from "./useFetch";
import { useSearchParams } from "react-router-dom";
import PostReview from "./PostReview";
import Reviews from "./Reviews";

function Details() {
  const [movies, setMovieDetails] = useState(null);
  const [cast, setCastDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [user, setUser] = useState({});
  const [params] = useSearchParams();
  let id = params.get("movieID");
  // console.log(id);

  const API_KEY = "f669645cad8fbe1526a40b2deee8a49e";
  const FEATURED_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const CAST_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const IMG_API = "https://image.tmdb.org/t/p/w200/";

  useEffect(() => {
    getData();
  }, []);

  const setUserData = () => {
    let user = JSON.parse(localStorage.getItem("login"));
    setUser(user);
  };
  // console.log(user);

  const getData = async () => {
    let data = await fetch(FEATURED_API);
    let cast_data = await fetch(CAST_API);

    setCastDetails(cast_data.data.cast);
    setGenres(data.data.genres);
    setMovieDetails(data.data);
  };
  // console.log(cast);
  // console.log(movies);

  return (
    <div className='movieDetails'>
      <div className='movieDetailsContainer'>
        <div className='movieTitle'>{movies?.title}</div>
        <div className='movieGenres'>
          {genres.map((names, index) => (
            <div key={index}>{names.name}</div>
          ))}
        </div>
        <div className='movieTagline'>"{movies?.tagline}"</div>
        <div className='movieOverview'>
          <img src={IMG_API + movies?.poster_path} alt={movies?.title} />
          <div>{movies?.overview}</div>
        </div>

        <div className='movieCastTitle'>Top Cast</div>

        <div className='castList'>
          {cast.map((castMember, index) => {
            if (index < 8)
              return (
                <div key={index} className='castCard'>
                  <img
                    src={IMG_API + castMember.profile_path}
                    alt={castMember.name}
                  />

                  <div
                    className='castCardTitle'
                    style={{ fontSize: "12px", padding: "5px" }}>
                    {castMember.name}
                    <div>as</div>
                    <div style={{ fontStyle: "italic" }}>
                      "{castMember.character}"
                    </div>
                  </div>
                </div>
              );
          })}
        </div>

        {/* <div>
          <Reviews title={movies?.title} />
        </div> */}
        <div className='movieCastTitle'>Reviews</div>
        <div
          style={{
            backgroundColor: "#9c88b3",
            width: "50%",
            margin: "15px",
            padding: "10px",
            margin: "5px",
            borderRadius: "15px",
          }}>
          <PostReview movieTitle={movies?.title} user={user} />
        </div>
      </div>
      <div>
        <Reviews title={movies?.title} />
      </div>
    </div>
  );
}
export default Details;
