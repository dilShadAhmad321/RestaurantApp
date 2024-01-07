import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Offer.css'

function Offer() {
  const offer = [
    {
      id: 1,
      name: "Chicken Biryani",
      prize: 230,
      discount: "40%",
      dprize: 120,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      prize: 340,
      discount: "40%",
      dprize: 270,
    },
    {
      id: 3,
      name: "Rava Dosa",
      prize: 40,
      discount: "25%",
      dprize: 30,
    },
    {
      id: 4,
      name: "Butter Chicken",
      prize: 200,
      discount: "40%",
      dprize: 80,
    },
    {
      id: 5,
      name: "Chicken Chowmin",
      prize: 80,
      discount: "50%",
      dprize: 40,
    },
  ];

  return (
    <>
      <div className="content-offer">
        <h1
          class="text-center"
          style={{ fontWeight: "bold", paddingTop: "50px",color:"white" }}
        >
          OFFERS
        </h1>
        <br></br>
        <div className="row" style={{ padding: "5vh" }}>
          <table
            className="table table-border table-dark"
            style={{ textAlign: "center" }}
          >
            <tr>
              <th>ID</th>
              <th>ITEMS</th>
              <th>PRIZE</th>
              <th>DISCOUNT</th>
              <th>DISCOUNT PRIZE</th>
              <th>ORDER NOW</th>
            </tr>
            {offer.map((offer, index) => (
              <tr data-index={index}>
                <td>{offer.id}</td>
                <td>{offer.name}</td>
                <td>{offer.prize}</td>
                <td>{offer.discount}</td>
                <td>{offer.dprize}</td>
                <td>
                  {
                    <button
                      className="btn3"
                      style={{
                        color: "white",
                        backgroundColor: "rgba(255,166,0)",
                      }}
                    >
                      <NavLink to="/booking">Order Now</NavLink>
                    </button>
                  }
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Offer;
