import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const searchedTerm = "";
  const [formValues, setFormValues] = useState(searchedTerm);
  const [searched, setSearched] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUser] = useState({});
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(formValues);
  };

  useEffect(() => {
    setUserData();
  }, [user]);

  const setUserData = () => {
    if (localStorage.getItem("login") == null) {
      console.log("no data");
      setUser({ admin: false });
    } else {
      setUser(JSON.parse(localStorage.getItem("login")));
    }
    
  };

  const signOut = () => {
    localStorage.removeItem("login");
    setUser({ admin: false });
  };

  return (
    <div className='navContainer'>
      <li>
        <Link to='/'>Home</Link>
      </li>

      {user.admin !== true ? (
        <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup' style={{ color: "white" }}>
              Sign Up
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li onClick={() => signOut()}>
            <a style={{ color: "#ffff", cursor:"pointer " }}>Sign Out</a>
          </li>
        </>
      )}

      <li>
        <div className='searchBar'>
          <form onSubmit={handleSubmit}>
            <input
              className='searchInput'
              type='text'
              placeholder='search...'
              name='searchedTerm'
              value={formValues.searchedTerm}
              onChange={handleChange}
            />

            <Link
              to={{ pathname: `/search?term=${formValues.searchedTerm}` }}
              className='submitButton'>
              submit
            </Link>
          </form>
        </div>
      </li>
    </div>
  );
};

export default Navigation;
