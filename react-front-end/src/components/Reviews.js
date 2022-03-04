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
  const getOneReview = useQuery(GET_ONE_REVEIW, {
    variables: {
      title: props.title,
    },
  });

  if (getOneReview.loading) return "...loading";
  if (getOneReview.error) {
    console.log(getOneReview.error.message);
  }

  // setReview(getOneReview.data)
  reviews.push(getOneReview.data);
  console.log(reviews[0].getReview[0]._id);
  // console.log(getOneReview.data);
  let i = 0;
  const getReviews = reviews.map(
    (review) => (
      console.log(review.getReview[0]),
      (
        <div key={review.getReview[i]._id}>
          <p>Username: {review.getReview[i].username}</p>
          <p>Rating: {review.getReview[i].rating} stars</p>
          <p>Review: {review.getReview[i].review}</p>
        </div>
      )
    )
  );

  return (
    <div>
      <p>{props.title} Reviews</p>
      {getReviews}
    </div>
  );
}

export default Reviews;
