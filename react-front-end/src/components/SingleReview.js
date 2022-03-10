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
    console.log(data);
  };
  return (
    <>
      {reviewData.map((reviewData, index) => (
        <tr key={index} className='review_data'>
          <td>
            <button onClick={() => deleteReviewButton(reviewData._id)}>
              delete
            </button>
          </td>

          <td>{reviewData.username}</td>

          <td>{reviewData.title}</td>

          <td>{reviewData.review}</td>
        </tr>
      ))}
    </>
  );
}

export default SingleReview;
