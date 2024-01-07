import React from "react";
import "../css/ThankYou.css";

import { Link } from "react-router-dom";

import { RiShieldCheckFill } from "react-icons/ri";

const ThankYou = () => {
  return (
    <div className="content-thank">
      <div className="thank_you">
        <span>
          <i class="ri-checkbox">
            <RiShieldCheckFill />
          </i>
        </span>
        <h1 className="mb-3">Thank You</h1>

        <button className="btnt">
          <Link className="Back" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
