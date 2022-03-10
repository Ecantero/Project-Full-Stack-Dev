import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_ALL_USERS = gql`
  query Query {
    getUsers {
      _id
      fname
      lname
    }
  }
`;

const deletUser = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;

function AdminUsers() {
  //   get a all users
  const userData = useQuery(GET_ALL_USERS);
  if (userData.loading) return "Loading...";
  if (userData.error) return <pre>{userData.error.message}</pre>;
  console.log(userData.data);

  return (
    <div className='admin_container'>
      <div className='admin_header'>
        <h1>All Users</h1>
      </div>
      <div>
        <table className="admin_table">
          <SingleUser userData={userData.data.getUsers} />
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;

function SingleUser({ userData }) {
  const [deletUserGQL, { data, loading, erro }] = useMutation(deletUser);
  const deleteUserData = (id) => {
    console.log(id);
    deletUserGQL({ variables: { deleteUserId: id } });
  };

  return (
    <>
      {userData.map((userData, index) => (
        <tr key={index} className='review_data'>
          <td>

          <button onClick={() => deleteUserData(userData._id)}>delete</button>
          </td>
          <td>{userData.__typename}</td>
          <td>{`${userData.fname} ${userData.lname}`}</td>
        </tr>
      ))}
    </>
  );
}
