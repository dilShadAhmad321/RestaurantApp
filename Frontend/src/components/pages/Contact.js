import React, { useState, useContext } from "react";
import "../css/Contact.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utilise/config";

const Contact = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [report, setReport] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName: "",
    phone: "",
    report: "",
  });

  const handleChange = (e) => {
    setReport((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(report);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/report`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(report),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="content-contact">
        <div>
          <h1
            class="text-center"
            style={{ fontWeight: "bold", paddingTop: "50px", color: "white" }}
          >
            Contact Us
          </h1>
        </div>
        <div>
          <form onSubmit={handleClick}>
            <div>
              <div class="form-group">
                <input 
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                  required
                  onChange={handleChange}
                  style={{width:"60vh",height:"7vh",marginLeft:"5vh"}}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Phone No.."
                  id="phone"
                  required
                  onChange={handleChange}
                  style={{width:"60vh",height:"7vh",marginLeft:"5vh"}}
                />
              </div>
            </div>
            <div style={{margin:"10vh 20vh 0vh 80vh"}}>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="report"
                  required
                  onChange={handleChange}
                  rows="8"
                  placeholder="Let's Communicate"
                ></textarea>
              </div>
            </div>
            <button className="btn2" onClick={handleClick}>
            Submit
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
