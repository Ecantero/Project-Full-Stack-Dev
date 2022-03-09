import React from "react";
import "./Homepage.css";
import Movies from "./Movies";
import logo from "./gameplanet.png";

const Homepage = () => {
  return (
    <section>
      <div className="title"> Welcome to Movie Planet!</div>
      <img
        className="logo"
        src={logo}
        alt="game planet logo - purple and green planet like saturn"
      />
      <div className="subtitle">
        {" "}
        our movie collection is <span>out of this world</span>
      </div>

      <div className="moviesCollectionTitle">Top 20 Most Popular Movies</div>

      <div className="moviesCollection">
        <Movies />
      </div>
    </section>
  );
};

export default Homepage;
