import React, { useState } from "react";
import api from "../../services/api";
import logosmall from "../../assets/logosmall.png";

import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      return alert("invalid or empty email entered");
    }

    const response = await api.post("/sessions", { email });
    const { _id } = response.data;

    localStorage.setItem("user", _id);
    localStorage.setItem("name", name);

    history.push("/"); 
  }

  return (
    
    <div className="login">
 <img src={logosmall} alt="" id="logo" />
      <div className="containerLogin">
     

        <div className="contentLogin">
          <p>Welcome to AirBNB Site Redesigned By AASTU Students</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">UserName *</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your UserName"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">E-mail *</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button becomeAHosttype="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

