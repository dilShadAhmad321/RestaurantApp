import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <>
      <div className="header-foot">
        <NavLink to="https://www.facebook.com/events/san-francisco-california/sf-restaurant-week-2020/207992230367888/">
          <i className="fab fa-facebook-f"></i>
        </NavLink>
        <NavLink to="https://twitter.com/eatersf/status/1645512099181875201">
          <i className="fab fa-twitter"></i>
        </NavLink>
        <NavLink to="https://www.sfrestaurantweek.com/">
          <i className="fab fa-google"></i>
        </NavLink>
        <NavLink to="https://www.instagram.com/sfrestaurantwk/">
          <i className="fab fa-instagram"></i>
        </NavLink>
        <NavLink to="https://www.linkedin.com/posts/advance-sf_eat-drink-sf-returns-with-sf-restaurant-week-activity-6988606796579975168-MgXQ">
          <i className="fab fa-linkedin-in"></i>
        </NavLink>
        <NavLink to="https://github.com/login">
          <i className="fab fa-github"></i>
        </NavLink>
      </div>
      <div className="footer">
        <div className="footer-foot">
          <h5>© 2020 Copyright: SFResturants.com</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
