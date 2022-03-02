import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { gql, useMutation } from "@apollo/client";

// CSS import
import "../styles/postReviews.css"


// graphql query
const ADD_REVIEW = gql`
  mutation Mutation($input: ReviewInput) {
    addReview(input: $input)
  }
`;

function PostReview({movieTitle,user}) {
  const [title, setTitle] = useState(movieTitle);
  const [username, setUsername] = useState(user);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [addReivew, { data, loading, error }] = useMutation(ADD_REVIEW);
  if (loading) return "... loading";
  if (error) return error.message;

  const addReivewQL = (event) => {
    event.preventDefault();
    let tempReview = {
      username: username,
      title: movieTitle,
      rating: rating,
      review: review,
    };
    addReivew({ variables: { input: tempReview } });
    setRating(0)
    setReview("")
  };
  console.log(rating);

  return (
    <div className="review_box">
      <form onSubmit={addReivewQL} className='review_form'>
        <textarea
        style={{marginBottom:'10px'}}
          rows={5}
          maxLength={200}
          placeholder='Write your review'
          onChange={(e) => setReview(e.target.value)}></textarea>
        <Rating
        className="review_stars"
          name='simple-controlled'
          size="large"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <button type='submit' className="review_button">Add Review</button>
      </form>
    </div>
  );
}

export default PostReview;
