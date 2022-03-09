import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_ONE_REVEIW = gql`
  query Query($title: String) {
    getReview(title: $title) {
      username
      title
      rating
      review
      _id
    }
  }
`;

function Reviews(props) {
  // get a reivew by id or by parameter
  console.log(`props.title: ${props.title}`);
  // const [reviews, setReview] = useState([]);
  let reviews = [];
  let getReviews;
  const getOneReview = useQuery(GET_ONE_REVEIW, {
    variables: {
      title: props.title,
    },
  });

  if (getOneReview.loading) return "...loading";
  if (getOneReview.error) {
    console.log(getOneReview.error.message);
  } else {
    // setReview(getOneReview);
    // console.log(getOneReview);
    for (let i = 0; i < getOneReview.data.getReview.length; i++) {
      const element = getOneReview.data.getReview[i];
      console.log(element);
      reviews.push(element);
    }
    // console.log(reviews);

    getReviews = reviews.map((review) => (
      <div key={review._id}>
        <p>Username: {review.username}</p>
        <p>Rating: {review.rating} stars</p>
        <p>Review: {review.review}</p>
        <br/>
      </div>
    ));
  }

  return (
    <div>
      <h2>{props.title} Reviews</h2>
      {getReviews}
    </div>
  );
}

export default Reviews;
