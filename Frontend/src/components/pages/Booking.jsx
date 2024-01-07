import React, { useState, useContext } from "react";
import "../css/Booking.css";

import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utilise/config";

import img1 from "../Images/menu/idli.jpeg";
import img2 from "../Images/menu/chai.jpeg";
import img3 from "../Images/menu/chow.jpg";
import img4 from "../Images/menu/biryani.jpeg";
import img5 from "../Images/menu/cg.jpeg";
import img6 from "../Images/menu/rd.jpg";

import img7 from "../Images/menu/ck.webp";
import img8 from "../Images/menu/malai.jpeg";
import img9 from "../Images/menu/butterchickenb.jpg";
import img10 from "../Images/menu/vc.jpg";
import img11 from "../Images/menu/blue.jpg";
import img12 from "../Images/menu/sf.jpg";

const Booking = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [order, setOrder] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",

    Rava_Upma: "",
    Semiya_Upma: "",
    Rava_Idli: "",
    Coconut_Idli: "",
    Rava_Dosa: "",
    Coconut_Dosa: "",
    Onion_Dosa: "",
    Dadpe_Pohe: "",
    Gujarati_Methi_Thepla: "",
    Chicken_Sandwitch: "",
    Chai_Biscuit: "",
    Samosa: "",
    Veg_Pasta: "",
    Chicken_Pasta: "",
    Veg_Chowmin: "",
    Chicken_Chowmin: "",
    Aloo_Paratha: "",
    Jalebi: "",
    Lassi: "",

    Chicken_biryani: "",
    Mutton_biryani: "",
    Veg_Pulao: "",
    Egg_Rice: "",
    Chicken_Rice: "",
    Chicken_Leg_Gravy: "",
    Butter_Chicken: "",
    Mutton_Chap: "",
    Chicken_Chap: "",
    Fried_Rice_Baby_Corn_Manchurian: "",
    Fried_Rice_Gobi_65: "",
    Rice_Dal: "",
    Salad: "",

    Naan: "",
    Buttrer_Naan: "",
    Chicken_Curry: "",
    Chicken_Khorma: "",
    Handi_Chicken: "",
    Chilli_Paneer: "",
    Paneer_Butter_Masala: "",
    Paneer_Curry: "",
    Handi_Chicken_with_Egg: "",
    Egg_Curry: "",
    Malai_Chicken: "",
    Tawa_Chicken: "",
    Tawa_Paneer: "",
    Chicken_Lababdaar: "",
    Paneer_Lababdar: "",
    Butter_Chicken_Breast: "",
    Chicken_Thai: "",
    Mughlai_Chicken: "",
    Mughlai_Paneer: "",

    Vanilla_Cake: "",
    Chocolate_Cake: "",
    White_Forest: "",
    Black_Forest_Cake: "",
    Red_Velvet_Cake: "",
    Blue_Berry_Cake: "",
    Hot_Chocolate_Drink: "",
    Butterscotch_Milkshake: "",
    Kitkat_Shake: "",
    Oreo_Shake: "",
    Mango_Milkshake: "",
    Sf_Special_Moktail: "",
    Soft_Drink: "",
  });

  const handleChange = (e) => {
    setOrder((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(order);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/order`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(order),
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
    <div className="order">
      <div className="order_form">
        <h1>Information</h1>
        <Form className="order_info-form" onSubmit={handleClick}>
          <FormGroup style={{borderRadius:"5vh"}}>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              min={0}
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="menu-body">
        <div className="menu">
          <div className="menu-title">
            <h1>MENU</h1>
          </div>
          <div className="menu-list">
            <div className="menu-rl">
              <p>
                ---------------------------------------------------------------------
              </p>
              <h2>BREAKFAST</h2>
              <p>
                ---------------------------------------------------------------------
              </p>

              <ul>
                <li>
                  <div className="menu-list-1">
                    <h3>Rava Upma</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Rava_Upma"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Semiya Upma</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Semiya_Upma"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Rava Idli</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs30</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Rava_Idli"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Coconut Idli</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Coconut_Idli"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img1} alt="" style={{ width: "100%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Rava Dosa</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Rava_Dosa"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Coconut Dosa</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs60</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Coconut_Dosa"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Onion Dosa</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Onion_Dosa"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Dadpe Pohe</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Dadpe_Pohe"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Gujarati Methi Thepla</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Gujarati_Methi_Thepla"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Sandwitch</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs60</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Sandwitch"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chai & Biscuit</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs30</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chai_Biscuit"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img
                    src={img2}
                    alt=""
                    style={{ width: "80%", marginLeft: "5vh" }}
                  ></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Samosa</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs10</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Samosa"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Veg Pasta</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs45</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Veg_Pasta"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Pasta</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs65</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Pasta"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Veg Chowmin</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs60</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Veg_Chowmin"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Chowmin</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs80</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Chowmin"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img
                    src={img3}
                    alt=""
                    style={{
                      height: "60vh",
                      width: "80%",
                      marginLeft: "5vh",
                    }}
                  ></img>
                </li>
              </ul>
            </div>

            <div className="menu-rl">
              <ul>
                <li>
                  <div className="menu-list-1">
                    <h3>Aloo Paratha</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs25</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Aloo_Paratha"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Jalebi</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs20</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Jalebi"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Lassi</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Lassi"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
              </ul>

              <p style={{ paddingTop: "9vh" }}>
                ---------------------------------------------------------------------
              </p>
              <h2>LUNCH</h2>
              <p>
                ---------------------------------------------------------------------
              </p>

              <ul>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken biryani</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs230</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_biryani"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img4} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Mutton biryani</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs340</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Mutton_biryani"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Veg Pulao</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Veg_Pulao"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Egg Rice</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs170</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Egg_Rice"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Rice</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs190</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Rice"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Leg Gravy</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Leg_Gravy"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img5} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Butter Chicken</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs200</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Butter_Chicken"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Mutton Chap</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs250</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Mutton_Chap"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Chap</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Chap"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Fried Rice, Baby Corn Manchurian</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs250</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Fried_Rice_Baby_Corn_Manchurian"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Fried Rice, Gobi 65</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs160</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Fried_Rice_Gobi_65"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Rice & Dal</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Rice_Dal"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img6} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Salad</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Salad"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <br></br>
      <br></br>
      <hr></hr>

      <div className="menu-body" style={{ paddingTop: "10vh" }}>
        <div className="menu">
          <div className="menu-list">
            <div className="menu-rl">
              <p>
                ---------------------------------------------------------------------
              </p>
              <h2>DINNER</h2>
              <p>
                ---------------------------------------------------------------------
              </p>

              <ul>
                <li>
                  <div className="menu-list-1">
                    <h3>Naan</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 40</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Naan"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Buttrer Naan</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Buttrer_Naan"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Curry</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 180</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Curry"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Khorma </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 190</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Khorma"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img7} alt="" style={{ width: "100%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Handi Chicken</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 190</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Handi_Chicken"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chilli Paneer</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 160</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chilli_Paneer"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Paneer Butter Masala</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 170</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Paneer_Butter_Masala"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Paneer Curry</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 160</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Paneer_Curry"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Handi Chicken with Egg </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 240</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Handi_Chicken_with_Egg"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Egg Curry</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Egg_Curry"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Malai Chicken</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 175</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Malai_Chicken"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img
                    src={img8}
                    alt=""
                    style={{ width: "90%", marginLeft: "5vh" }}
                  ></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Tawa Chicken</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 180</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Tawa_Chicken"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Tawa Paneer</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Tawa_Paneer"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Chicken Lababdaar</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 190</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Lababdaar"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Paneer Lababdar</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Paneer_Lababdar"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Butter Chicken(Breast) </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 210</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Butter_Chicken_Breast"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img
                    src={img9}
                    alt=""
                    style={{ height: "60vh", width: "90%", marginLeft: "5vh" }}
                  ></img>
                </li>
                <li >
                  <div className="menu-list-1">
                    <h3> Chicken Thai</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 190</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chicken_Thai"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Mughlai Chicken</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 200</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Mughlai_Chicken"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className="menu-rl">
              <ul>

                <li style={{ paddingTop: "16vh" }}>
                  <div className="menu-list-1">
                    <h3>Mughlai Paneer</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 180</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Mughlai_Paneer"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
              </ul>

              <p style={{ paddingTop: "9vh" }}>
                ---------------------------------------------------------------------
              </p>
              <h2>Deserts And Drinks</h2>
              <p>
                ---------------------------------------------------------------------
              </p>

              <ul>
                <li>
                  <div className="menu-list-1">
                    <h3> Vanilla Cake </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 100</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Vanilla_Cake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img10} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Chocolate Cake </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 120</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Chocolate_Cake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>White Forest</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 120</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="White_Forest"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Black Forest Cake </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 120</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Black_Forest_Cake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Red Velvet Cake</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 120</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Red_Velvet_Cake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3> Blue Berry Cake </h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 120</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Blue_Berry_Cake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img11} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3> Hot Chocolate Drink</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Hot_Chocolate_Drink"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3> Butterscotch Milkshake</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Butterscotch_Milkshake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Kitkat Shake</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Kitkat_Shake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Oreo Shake</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 160</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Oreo_Shake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Mango Milkshake</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 150</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Mango_Milkshake"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="menu-list-1">
                    <h3>Sf Special Moktail</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 180</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Sf_Special_Moktail"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>

                <li>
                  <img src={img12} alt="" style={{ width: "95%" }}></img>
                </li>

                <li>
                  <div className="menu-list-1">
                    <h3>Soft Drink</h3>
                  </div>
                  <div className="menu-list-2">
                    <h5>Rs 50</h5>
                  </div>
                  <div className="menu-list-3">
                    <input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      id="Soft_Drink"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button className="btn2" onClick={handleClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
