import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, useRoutes, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import  Login  from './Login';
import  Navigation  from './Navigation';
import Footer from './Footer';


const App = () => {

 let element = useRoutes([
   {
     path: '/',
     element: <Homepage />,
   },
   {
  
        path: "/login",
        element: <Login />
     
   }
  ]);
 return element;
 
}

const AppWrapper = () =>{
  return(
    <Router>
      <Navigation/>
      <App/>
      <Footer/>
    </Router>
  )
}



export default AppWrapper;
