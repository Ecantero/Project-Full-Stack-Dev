import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_ONE_REVEIW = gql`
  uery Query($title: String) {
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
  const getOneReview = useQuery(GET_ONE_REVEIW, {
    variables: {
      title: "Red Notice",
    },
  });

  if (getOneReview.loading) return "...loading";
  if (getOneReview.error) console.log(getOneReview.error.message);

  console.log(getOneReview.data);

  return (
    <div>
      <p>{props.title} Reviews</p>
      {getOneReview.data.map((review) => (
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
