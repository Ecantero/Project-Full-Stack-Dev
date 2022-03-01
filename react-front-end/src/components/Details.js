import React from "react";
import Reviews from "./Reviews";
import PostReview from "./PostReview";

function Details(props) {
  const { title } = props.location.title;
  return (
    <section>
      <div className="title"> Details</div>
      title: {title}
      {/* <img className='logoSmall' src={logo} alt="game planet logo - purple and green planet like saturn" /> */}
      <PostReview />
      <Reviews />
    </section>
  );
}

export default Details;
