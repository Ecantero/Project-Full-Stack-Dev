import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { gql, useMutation } from "@apollo/client";

// CSS import
import "../styles/postReviews.css";

// graphql query
const ADD_REVIEW = gql`
  mutation Mutation($input: ReviewInput) {
    addReview(input: $input)
  }
`;

function PostReview({ movieTitle }) {
  const [title, setTitle] = useState(movieTitle);
  const [userdata, setUser] = useState({});
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setUserData();
  }, []);

  const [addReivew, { data, loading, error }] = useMutation(ADD_REVIEW);
  if (loading) return "... loading";
  if (error) return error.message;

  const setUserData = () => {
    let user = JSON.parse(localStorage.getItem("login"));
    setUser(user);
  };

  const addReivewQL = (event) => {
    event.preventDefault();
    let name = userdata.username;
    console.log(name);

    if (userdata.status === "Success") {
      let tempReview = {
        username: name,
        title: movieTitle,
        rating: rating,
        review: review,
      };
      console.log(tempReview);
      addReivew({ variables: { input: tempReview } });
    } else {
      setMessage("User is not authenticated");
    }
    setRating(0);
    setReview("");
  };
  console.log(rating);

  return (
    <div className='review_box'>
      <form onSubmit={addReivewQL} className='review_form'>
        <textarea
          style={{ marginBottom: "10px" }}
          rows={5}
          maxLength={200}
          placeholder='Write your review'
          onChange={(e) => setReview(e.target.value)}></textarea>
        <Rating
          className='review_stars'
          name='simple-controlled'
          size='large'
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <button type='submit' className='review_button'>
          Add Review
        </button>
      </form>
      {message}
    </div>
  );
}

export default PostReview;
