import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navContainer">
     
        <li>
            <Link to="/">Home</Link>
        </li>
    
  
        <li>
            <Link to="/login">Login</Link>
        </li>
    
    </div>
  )
}

export default Navigation