import React from "react";
import Img1 from "../Images/sfr.png";

function About() {
  return (
    <>
      <div
        className="content-about"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.884)", color: "white" }}
      >
        <h1
          class="text-center"
          style={{ fontWeight: "bold", paddingTop: "50px", color: "white" }}
        >
          About Us
        </h1>
        <br></br>
        <div className="about-body">
          <div>
            <img
              src={Img1}
              alt=""
              style={{ height: "20vh", paddingLeft: "80vh" }}
            ></img>
          </div>

          <div style={{ padding: "10vh" }}>
            <p>
              We are excited to announce Fall San Francisco Restaurant Week
              November 3-16, 2023! Celebrate the flavors of San Francisco’s
              unique and diverse neighborhoods through special prix-fixe menus.
              Register now!{" "}
            </p>
            <p>
              Participating restaurants will offer special menus Friday,
              November 3rd – Thursday, November 16th at one or more the
              following price points:<br></br> Brunch or Lunch (2+ Items or
              Courses): $10, $15, $25, $30, $40 <br></br>Dinner (3+ Items or
              Courses): $30, $45, $65, $75, $90 <br></br>Restaurant sign ups are
              currently in progress. We expect to have a full list of
              participating restaurants available October 16th.<br></br> Stay
              tuned for updates on SF Restaurant Week, including a list of
              participating restaurants and menu details, by following us on
              Instagram and signing up for our newsletter here!
            </p>
            <p>
              During the pandemic, the Golden Gate Restaurant Association (GGRA)
              has been 100% focused on advocating for our restaurant community.
              From communicating detailed health directives and closure
              requirements as clearly as possible, to helping restaurants
              navigate the financial aid options, we’ve been focused on the many
              details and data.
            </p>
            <p>
              With this video we released in April 2021, we shifted our focus to
              share the San Francisco restaurant industry operators’ and chefs’
              stories and give them an opportunity to share what the pandemic
              has been like for them, as well as as a voice to where they saw
              things going moving forward. The San Francisco restaurant
              community is resilient, smart, hopeful, and incredibly inspiring.
              Enjoy this brief look into their world and please continue to
              support our restaurants!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
