import React, { useRef, useContext } from "react";
import "../css/Header.css";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Img1 from "../Images/sfr.png";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="head">
        <img src={Img1} alt=""></img>
      </div>

      <div id="cantainer-background">
        <nav class="navbar navbar-expand" id="navbar-color">
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/booking">
                  Menu
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/chef">
                  Chef
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/offer">
                  Offers
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="Menubar nav_btns d-flex align-items-center gap-2">
                {user ? (
                  <>
                    <h5 className="mb-0" style={{ color: "red" }}>
                      {user.username}
                    </h5>

                    <button className="btn1" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn1">
                      <Link className="login" to="/login">
                        Login
                      </Link>
                    </button>
                    <button className="btn1">
                      <Link className="register" to="/register">
                        Register
                      </Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
