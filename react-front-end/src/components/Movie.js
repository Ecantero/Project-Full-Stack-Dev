import React from "react";
import "../Homepage.css";
import { useNavigate, Link } from "react-router-dom";

var parameterID = "";
const IMG_API = "https://image.tmdb.org/t/p/w200/";

const Movie = ({ title, poster_path, overview, vote_average, id }) => {
  let navigate = useNavigate();
  const ToDetailsPage = (e) => {
    parameterID = e.currentTarget.id;
    let path = `/details/${parameterID}`;
    navigate(path);
  };
  return (
    <div className="movieCard" onClick={ToDetailsPage} id={id}>
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movieCardDescription">
        <div className="cardTitle">{title}</div>
        <div className="cardRating">{vote_average}</div>
      </div>
      {/* <Link to={{ pathname: "/details", state: { title: title } }}>
        My route
      </Link> */}
    </div>
  );
};

export default Movie;
