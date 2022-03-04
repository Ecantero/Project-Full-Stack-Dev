import React, { useState } from "react";

const rest_API = "http://localhost:3000/signUp";

// fname: "Hans";
// lname: "Clemons";
// street: "168 Wilder St";
// city: "Dyer Pond";
// state: "CT";
// zip_code: 33276;
// email: "hans.clemons@tbeatty.com";
// password: "$2a$10$ADCUVsHeU8QpVvacVyRODOk7FKzUSSyTzb2ZOex2Y4AMPt4ZJwG22";
// phone: "(400) 81-9738";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZipCode] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `fname: ${fname} \nlname: ${lname} \nstreet : ${street} \ncity: ${city} \nzip code: ${zip_code}`
    );
    const user = {
      fname: fname,
      lname: lname,
      street: street,
      city: city,
      zip_code: zip_code,
      email: email,
      password: password,
      phone: phone,
    };
    fetch(rest_API, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <h2>Sign up here</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="number"
            value={zip_code}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;
