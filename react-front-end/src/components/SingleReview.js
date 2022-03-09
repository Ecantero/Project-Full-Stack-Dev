import { gql, useMutation } from "@apollo/client";

const deleteReview = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;

function SingleReview({ reviewData }) {
  const [deleteReivewGQL, { data, loading, error }] = useMutation(deleteReview);

  const deleteReviewButton = (id) => {
    console.log(id);

    deleteReivewGQL({ variables: { deleteReviewId: id } });
  };
  return (
    <>
      {reviewData.map((reviewData, index) => (
        <div key={index} className='review_data'>
          <button onClick={() => deleteReviewButton(reviewData._id)}>
            delete
          </button>
          <p>{reviewData.username}</p>
          <p>{reviewData.title}</p>
          <p>{reviewData.review}</p>
        </div>
      ))}
    </>
  );
}

export default SingleReview;
