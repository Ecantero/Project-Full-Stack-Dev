import React from "react";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Navigation from "./Navigation";
import Details from "./components/Details";
import SignUp from "./signUp";
import Footer from "./Footer";
import "./App.css";

import Test from "./components/Test";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return element;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navigation />
      <App />
      <Footer />
    </Router>
  );
};

export default AppWrapper;
