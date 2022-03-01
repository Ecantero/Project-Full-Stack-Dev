import React, { useState, useEffect } from "react";

const NODE_API = "http://localhost:3000";

function Reviews(props) {
  const [reviews, setReviews] = useState([]);
  const reviewByMovie = [];
  useEffect(() => {
    fetch(`${NODE_API}/getReview`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i].title == props.title) {
            reviewByMovie.push(data[i]);
          }
        }
        setReviews(reviewByMovie);
      });
  }, []);

  return (
    <div>
      <p>{props.title} Reviews</p>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.username}</p>
            <p>{review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))}
    </div>
  );
}

export default Reviews;
