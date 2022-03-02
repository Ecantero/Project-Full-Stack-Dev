import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import PostReview from "./PostReview";

const GET_ALL_USERS = gql`
  query Query {
    getUsers {
      _id
      fname
      lname
    }
  }
`;
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

const ADD_REVIEW = gql`
  mutation Mutation($input: ReviewInput) {
    addReview(input: $input)
  }
`;

function Test() {
  // get a all users
  //   const userData = useQuery(GET_ALL_USERS);
  //   if (userData.loading) return "Loading...";
  //   if (userData.error) return <pre>{userData.error.message}</pre>;
  //   console.log(userData.data);
  // --------------------------------------------------

  // get all review data
  //   const reviewData = useQuery(GET_ALL_USERS);
  //   if (reviewData.loading) return "Loading...";
  //   if (reviewData.error) return <pre>{reviewData.error.message}</pre>;
  //   console.log(reviewData.data);

  //   ---------------------------------------------
  //   // get a reivew by id or by parameter
  //   const getOneReview = useQuery(GET_ONE_REVEIW, {
  //     variables: {
  //       title: "Red Notice",
  //     },
  //   });
  //   if (getOneReview.loading) return "...loading";
  //   if (getOneReview.error) console.log(getOneReview.error.message);

  //   console.log(getOneReview.data);
  //   ----------------------------------------------------------

  // mutatioin to add a review
  //   const [addReivew, { data, loading, error }] = useMutation(ADD_REVIEW);
  //   if (loading) return "... loading";
  //   if (error) return error.message;
  //   addReivew({
  //     variables: {
  //       input: {
  //         username: "DYLAN ROBERTS THE THRID",
  //         title: "Red Notice",
  //         rating: 5,
  //         review: "THIS IS THE BEST MOVE EVERRRRRR",
  //       },
  //     },
  //   });

  //   console.log(data);

  return (
    <div>
      {/* test for getting all user data */}
      {/* <div>
        <h1> get back all users</h1>
        {userData.data.getUsers.map((data) => (
          <h1>{data.fname}</h1>
        ))}
      </div> */}
      <div>
        <h1>get all reviews back</h1>
      </div>
      <PostReview movieTitle={"123"}/>
    </div>
  );
}

export default Test;
