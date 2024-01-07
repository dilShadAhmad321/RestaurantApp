import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <>
      <div className="content-home">
        <div class="section-title">
          <h1>
            <strong>Welcome to</strong> Hunger Hunt
          </h1>
          <h3>get the freshest from hunger hunt</h3>
        </div>
        <div>
          <NavLink to="/booking">
            <button className="btn2">Order Online</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
