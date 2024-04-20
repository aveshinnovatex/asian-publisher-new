import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import ShopHeaderImage from "../../../Images/ShopHeaderImage.png";
import Book1 from "../../../Images/Book1.jpg";
import Book2 from "../../../Images/Book2.jpg";
import Book3 from "../../../Images/Book3.jpg";
import Book4 from "../../../Images/Book4.jpg";
import "../../../css/Style.css";
import "../../../css/bootstrap.min.css";

function Shop() {
  return (
    <>
      <Header />
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${ShopHeaderImage})`,
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
              Shop
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
        <div className="col-lg-3" style={{ float: "left" }}>
          <div className="col-lg-12">
            <h4>Authors</h4>
            <hr />
            <div
              className="col-lg-12"
              style={{ height: "20vh", "overflow-y": "scroll" }}
            >
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
            </div>
          </div>
          <br />
          <div className="col-lg-12">
            <h4>Courses</h4>
            <hr />
            <div
              className="col-lg-12"
              style={{ height: "20vh", "overflow-y": "scroll" }}
            >
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
            </div>
          </div>
          <br />
          <div className="col-lg-12">
            <h4>Semester</h4>
            <hr />
            <div
              className="col-lg-12"
              style={{ height: "20vh", "overflow-y": "scroll" }}
            >
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
              <br />
              <input type="checkbox" id="authorCheckbox" /> &nbsp;&nbsp;
              <label htmlFor="authorCheckbox">Your Text Here</label>
            </div>
          </div>
        </div>
        <div className="col-lg-9" style={{ float: "left" }}>
          <div className="col-lg-12 aboutcontent">
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book1})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book1})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book3})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book4})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book2})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
            <div className="col-lg-4" style={{ float: "left" }}>
              <center>
                <div className="book">
                  <div
                    className="book-cover"
                    style={{ backgroundImage: `url(${Book1})` }}
                  >
                    <div className="effect" />
                    <div className="light" />
                  </div>
                  <div className="book-inside" />
                </div>
              </center>
              <p
                style={{
                  "font-size": "15px",
                  "-webkit-text-align": "center",
                  "text-align": "center",
                  "margin-top": "15px",
                  "font-weight": "700",
                }}
              >
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  ISBN No. 0987654321
                </span>
                <br />
                Computer Programming using Python
                <br />
                <span style={{ "font-size": "12px", "font-weight": "500" }}>
                  Author Name Here
                </span>
                <br />
                <span
                  style={{
                    color: "red",
                    "font-size": "16px",
                    "font-weight": "600",
                  }}
                >
                  Rs. 300
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          clear: "both",
          height: "5vh",
          background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
        }}
      />
      <Footer />
    </>
  );
}

export default Shop;
