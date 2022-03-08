import React, {useState} from "react";
import { Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const searchedTerm = '';
  const [formValues, setFormValues] = useState(searchedTerm);
  const [searched, setSearched] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  // const history = useHistory();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({formValues, [name]:value});
    console.log(formValues);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSubmit(true);
    console.log(formValues);
  };




  return (
    <div className="navContainer">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup" style={{ color: "white" }}>Sign Up</Link>
      </li>
      
      <li>
        <div className="searchBar">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search..." name="searchedTerm" value={formValues.searchedTerm} onChange={handleChange}/>
            {/* <button>submit</button>  */}
            {/* <Link to={`/details?movieID=${id}`} style={{ textDecoration: 'none' }}> */}
              <Link
                to={{
                pathname: `/search?term=${formValues.searchedTerm}`
                }}
              >submit</Link>
          </form> 
            
            {/* <div style={{ color: "white",backgroundColor:'green'}}>submit</div>         */}
        </div>
      </li>
    </div>
  );
};

export default Navigation;
