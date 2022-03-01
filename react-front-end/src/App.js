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
import Footer from "./Footer";

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
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/test",
      element: <Test />,
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
