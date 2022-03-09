import React, { useState } from "react";
import {
  useQuery,
  gql,
  useMutation,
} from "@apollo/client";

import SingleReview from "./SingleReview";

const GET_ALL_REVIEWS = gql`
  query Query {
    getAllReviews {
      _id
      username
      title
      rating
      review
    }
  }
`;

function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  //   get all review data
  const reviewData = useQuery(GET_ALL_REVIEWS);
  if (reviewData.loading) return "Loading...";
  if (reviewData.error) return <pre>{reviewData.error.message}</pre>;
  console.log(reviewData.data.getAllReviews);

  //   setReviews(reviewData.data.getAllReviews);
  return (
    <div className='admin_container'>
      <div className='admin_header'>
        <h1>All Reivews</h1>
      </div>
      <div>
        <SingleReview reviewData={reviewData.data.getAllReviews} />
      </div>
    </div>
  );
}

export default AdminReviews;


