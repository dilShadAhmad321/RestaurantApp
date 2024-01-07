import React, { useContext, useState } from "react";
import "../css/Login.css";

import {  Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import userIcon from "../Images/icon/user.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
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

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section className="content-login">
          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Login</h2>

            <Form onSubmit={handleClick} style={{marginLeft:"2vh"}}>
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
                Login
              </button>
            </Form>
            <p>
              Don't have an account? <Link to="/register">Create</Link>
            </p>
          </div>
    </section>
  );
};

export default Login;
