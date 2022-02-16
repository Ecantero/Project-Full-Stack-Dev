import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, useRoutes, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';


const App = () => {

 let element = useRoutes([
   {
     path: '/',
     element: <Homepage />,
   }
 ]);
 return element;
 
}

const AppWrapper = () =>{
  return(
    <Router>
      <App/>
    </Router>
  )
}



export default AppWrapper;
