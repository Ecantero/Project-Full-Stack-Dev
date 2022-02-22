import React from 'react'
import './Login.css';
import logo from './gameplanet.png';

export const Login = () => {
  return (
    <section>
    <div className='title'> Welcome Back - Login</div>
    <img className='logoSmall' src={logo} alt="game planet logo - purple and green planet like saturn" />
    </section>
  )
}

export default Login;
