import React from "react";
import AdminUsers from "./AdminUsers";
import AdminReviews from "./AdminReviews";
import "../styles/admin.css"

function Admin() {
  return (
    <div className="adminPage">
      <AdminUsers></AdminUsers>
      <AdminReviews></AdminReviews>
    </div>
  );
}

export default Admin;
