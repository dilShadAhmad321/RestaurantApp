import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";
import "../css/Login.css";

import { Link, useNavigate } from "react-router-dom";
import userIcon from "../Images/icon/user.png";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/api/v1/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="content-login">
      <div className="login__form">
        <div className="user">
          <img src={userIcon} alt="" />
        </div>
        <h2>Register</h2>

        <Form onSubmit={handleClick} style={{marginLeft:"2vh"}}>
          <FormGroup>
            <input
              type="text"
              placeholder="Username"
              style={{marginLeft:"7%"}}
              id="username"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              style={{marginLeft:"7%"}}
              id="email"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              placeholder="Password"
              style={{marginLeft:"7%"}}
              id="password"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <button className="btnl" type="submit">
            Create Account
          </button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
