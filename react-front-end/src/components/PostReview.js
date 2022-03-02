import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_REVIEW = gql`
  mutation Mutation($input: ReviewInput) {
    addReview(input: $input)
  }
`;

function PostReview({movieTitle}) {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [addReivew, { data, loading, error }] = useMutation(ADD_REVIEW);
  if (loading) return "... loading";
  if (error) return error.message;

  const addReivewQL = (e) => {
    e.preventDefault();
    let tempReview = {
      username: username,
      title: title,
      rating: rating,
      review: review,
    };
    addReivew({ variables: { input: tempReview } });
  };

  return (
    <div>
      <form onSubmit={addReivewQL()}>
        <input
          placeholder=' add your review'
          onChange={(e) => setReview(e.target.value)}></input>
        <button>Add Review</button>
      </form>
    </div>
  );
}

export default PostReview;
