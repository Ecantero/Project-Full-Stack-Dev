import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";

function handleReviewSumbit(e) {
  console.log("data passed");
}

function PostReview() {
  //
  return (
    <section>
      <textarea placeholder="Enter your review" maxLength={300}></textarea>
      <div>
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          half={false}
        />
      </div>
      {/* <button type="submit" onClick={}>Submit Review</button> */}
    </section>
  );
}

export default PostReview;
