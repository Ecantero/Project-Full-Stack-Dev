import React, { useState } from "react";
import "./Login.css";
import logo from "./gameplanet.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    let data = {
      email: email,
      password: password,
    };

    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json)
    //   .then((response) => console.log(response));

    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response) {
          let resData = {
            status: response.data.status,
            username: response.data.username,
          };
          localStorage.setItem("login", JSON.stringify(resData));
        }
      })
      .then(() => {
        let storage = localStorage.getItem("login");
        console.log(storage);
        if (storage) {
          navigate("/", { replace: true });
        }
      });
  };

  return (
    <section>
      <div className='title'> Welcome Back - Login</div>
      <img
        className='logoSmall'
        src={logo}
        alt='game planet logo - purple and green planet like saturn'
      />
      <div className='login_form'>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={login}>
          <TextField
            sx={{
              margin: "0 auto",
              // marginTop: "5px",
              // marginBottom: "5px",
            }}
            className='textInput'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{
              margin: "0 auto",
              // marginTop: "5px",
              // marginBottom: "5px",
            }}
            className='textInput'
            id='outlined-basic'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            sx={{
              backgroundColor: "#9958e2",
            }}
            type='submit'
            variant='contained'>
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
