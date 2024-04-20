import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_URL } from "../../../config/config";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Book1 from "../../../Images/Book1.jpg";
import Book2 from "../../../Images/Book2.jpg";
import AsianLogoText from "../../../Images/AsianLogoText.jpeg";
import CartHeaderImage from "../../../Images/CartHeaderImage.png";
function Cart() {
  return (
    <>
      <Header />
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${CartHeaderImage})`,
          "background-size": "cover",
          "background-position": "center",
        }}
      >
        <div className="gradient-overlay" />
        <div className="col-lg-2" style={{ float: "left" }}>
          &nbsp;
        </div>
        <div className="col-lg-8" style={{ float: "left" }}>
          <div
            className="video-content"
            style={{
              "-webkit-text-align": "center",
              "text-align": "center",
              "padding-top": "150px",
            }}
          >
            <p
              className="text"
              style={{
                "-webkit-text-transform": "uppercase",
                "text-transform": "uppercase",
                "font-size": "50px",
                "font-weight": "600",
                "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
                "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Cart
            </p>
            <p style={{ "font-size": "20px" }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
          </div>
        </div>
        <div className="col-lg-2" style={{ float: "left" }}>
          &nbsp;
        </div>
      </div>
      <br />
      <div
        className="row"
        id="AboutUsSection"
        style={{
          display: "block",
          margin: "0px",
          padding: "0px",
          clear: "both",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <table className="table table-spriped">
                <tbody>
                  <tr>
                    <th style={{ "font-size": "18px", width: "20%" }}>
                      Product Details
                    </th>
                    <th />
                    <th style={{ "font-size": "18px" }}>Qty</th>
                    <th
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                        "font-size": "18px",
                      }}
                    >
                      Price
                    </th>
                    <th
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                        "font-size": "18px",
                      }}
                    >
                      Sub Total
                    </th>
                    <th
                      style={{
                        "-webkit-text-align": "center",
                        "text-align": "center",
                        "font-size": "18px",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="Images/Book1.jpg"
                        alt="Best Sellers"
                        loading="lazy"
                        style={{ height: "12vh" }}
                      />
                    </td>
                    <td style={{ "font-weight": "600", "font-size": "18px" }}>
                      Book Name Here
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        defaultValue={10}
                        style={{ width: "60%" }}
                      />
                    </td>
                    <td
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      Rs. 300
                    </td>
                    <td
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      Rs. 3000
                    </td>
                    <td
                      style={{
                        "font-size": "25px",
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        style={{ "font-size": "20px", color: "#d82028" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="Images/Book2.jpg"
                        alt="Best Sellers"
                        loading="lazy"
                        style={{ height: "12vh" }}
                      />
                    </td>
                    <td style={{ "font-weight": "600", "font-size": "18px" }}>
                      Book Name Here
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        defaultValue={10}
                        style={{ width: "60%" }}
                      />
                    </td>
                    <td
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      Rs. 300
                    </td>
                    <td
                      style={{
                        "-webkit-text-align": "right",
                        "text-align": "right",
                      }}
                    >
                      Rs. 3000
                    </td>
                    <td
                      style={{
                        "font-size": "25px",
                        "-webkit-text-align": "center",
                        "text-align": "center",
                      }}
                    >
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        style={{ "font-size": "20px", color: "#d82028" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <center>
                <a
                  href="#"
                  style={{
                    "-webkit-text-decoration": "none",
                    "text-decoration": "none",
                    "background-color": "#d82028",
                    color: "#fff",
                    padding: "10px 50px 10px 50px",
                    "margin-top": "20px",
                    "border-radius": "10px",
                  }}
                >
                  CHECK OUT NOW
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
