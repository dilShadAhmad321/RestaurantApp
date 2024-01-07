import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Chef.css";
import img1 from "../Images/chef/c1.jpg";
import img2 from "../Images/chef/c2.jpg";
import img3 from "../Images/chef/c3.jpg";
import img4 from "../Images/chef/c4.jpg";
import img5 from "../Images/chef/c5.jpg";

function Chef() {
  return (
    <>
      <div className="content-chef">
      <h1
          class="text-center"
          style={{ fontWeight: "bold", paddingTop: "50px", color: "white" }}
        >
          Chefs
        </h1>
        <br></br>
        <br></br>

        <div className="comtainer-fluid">
          <div className="carousel slide" data-ride="carousel" id="raj">
            <div className="carousel-indicators">
              <li className="active" data-target="#raj" data-slide-to="0"></li>
              <li data-target="#raj" data-slide-to="1"></li>
              <li data-target="#raj" data-slide-to="2"></li>
              <li data-target="#raj" data-slide-to="3"></li>
              <li data-target="#raj" data-slide-to="4"></li>
            </div>
            <div
              className="carousel-inner"
              style={{ width: "100%", height: "100vh" }}
            >
              <div className="carousel-item active">
                <div className="cheif">
                  <div className="cheif-img">
                    <img src={img1} alt=""></img>
                  </div>
                  <div className="cheif-des">
                    <h2>Juhil Mendpara</h2>
                    <h4>Executive chef</h4>
                    <h6>
                      Executive chefs are at the top of the hierarchy as they're
                      in a managerial position. They don't normally have cooking
                      responsibilities. Instead, their duties are more
                      administrative, focusing on how the kitchen is operating.
                      They may design and plan menus, establish kitchen
                      standards, and prepare budgets. They ensure the restaurant
                      has minimal waste by monitoring kitchen stock levels and
                      ordering the correct supplies. Executive chefs typically
                      work closely with the restaurant manager to develop
                      effective business strategies and hire new employees for
                      the kitchen.
                    </h6>
                    <NavLink to="/booking">
                      <button className="btn2">Order Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="cheif">
                  <div className="cheif-img">
                    <img src={img2} alt=""></img>
                  </div>
                  <div className="cheif-des">
                    <h2>Jamie Oliver</h2>
                    <h4>Head chef</h4>
                    <h6>
                      Smaller restaurants may not have an executive chef.
                      Instead, they hire head chefs, also called chefs de
                      cuisine, who can complete administrative and cooking
                      tasks. When restaurants have both a head chef and an
                      executive chef, the head chef has a more hands-on role.
                      They work closely with the other chefs in the kitchen to
                      oversee and guide them. This helps them ensure the kitchen
                      is operating correctly and everyone is following the
                      restaurant's standards. Head chefs may also be responsible
                      for training the new kitchen employees the executive chef
                      hires.
                    </h6>
                    <NavLink to="/menu2">
                      <button className="btn2">Order Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="cheif">
                  <div className="cheif-img">
                    <img src={img3} alt=""></img>
                  </div>
                  <div className="cheif-des">
                    <h2>Gordon Ramsay</h2>
                    <h4>Sous chefs</h4>
                    <h6>
                      Sous chefs, also called deputy chefs or assistant chefs
                      may be second-in-command, depending on the kitchen's
                      hierarchy. This means they report directly to the head
                      chef or executive chef. Kitchens typically have multiple
                      sous chefs, such as one or two for each shift. A sous
                      chef's responsibilities may overlap with a head chef's as
                      they direct kitchen operations. They may also train new
                      employees, oversee the repair or maintenance of kitchen
                      equipment and appliances, and cook as necessary.
                    </h6>
                    <NavLink to="/booking">
                      <button className="btn2">Order Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="cheif">
                  <div className="cheif-img">
                    <img src={img4} alt=""></img>
                  </div>
                  <div className="cheif-des">
                    <h2>Bobby Flay</h2>
                    <h4>Station chef</h4>
                    <h6>
                      In large kitchens, there can be up to 10 stations that
                      each have its own chef, called a station chef or chef de
                      partie, with busier stations sometimes having two chefs.
                      Smaller kitchens may combine these stations, so one chef
                      has multiple roles.
                    </h6>
                    <NavLink to="/menu2">
                      <button className="btn2">Order Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="cheif">
                  <div className="cheif-img">
                    <img src={img5} alt=""></img>
                  </div>
                  <div className="cheif-des">
                    <h2>Tom Colicchio</h2>
                    <h4>Junior chef</h4>
                    <h6>
                      Junior chefs, or commis chefs, work with station chefs to
                      learn more about the kitchen environment. They're
                      typically still in school or are recent graduates new to
                      the culinary field. They may assist station chefs by
                      chopping, mixing, and measuring ingredients. When station
                      chefs don't need assistance, junior chefs may work with a
                      kitchen porter or food expeditor to unpack inventory,
                      ensuring the kitchen has the necessary supplies and
                      ingredients.
                    </h6>
                    <NavLink to="/booking">
                      <button className="btn2">Order Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chef;
