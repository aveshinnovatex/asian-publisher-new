import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../redux/slices/bookSlice";
import "./Home.css";
import { REACT_APP_URL } from "../../../config/config";
import LogoSlider from "../../common/slider/LogoSlider";
import BookSlider from "../../common/slider/BookSlider";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import AboutUs from "../../../Images/AboutUs.png";
import CivilEngineering from "../../../Images/CivilEngineering.png";
import ElectricalEngineering from "../../../Images/ElectricalEngineering.png";
import MechanicalEngineering from "../../../Images/MechanicalEngineering.png";
import Logo1 from "../../../Images/Logo/1.jpg";
import Logo2 from "../../../Images/Logo/11.png";
import Logo3 from "../../../Images/Logo/2.jpg";
import Logo4 from "../../../Images/Logo/22.png";
import Logo5 from "../../../Images/Logo/4.jpg";
import Logo6 from "../../../Images/Logo/44.png";
import Logo7 from "../../../Images/Logo/5.jpg";
import Logo8 from "../../../Images/Logo/55.png";
import Logo9 from "../../../Images/Logo/6.jpg";
import Logo10 from "../../../Images/Logo/66.png";
import Logo11 from "../../../Images/Logo/3.jpg";
import Logo12 from "../../../Images/Logo/33.png";

// import "../../../css/Style.css";
import "../../../css/bootstrap.min.css";

function Home() {
  const { loading, books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks({}));
  }, [dispatch]);
  useEffect(() => {
    if (loading === "fulfilled") {
      setAllBooks(books);
    }
  }, [loading]);
  return (
    <>
      <Header />
      <div className="Headerrow">
        <div className="video-background">
          <video autoPlay loop muted className="video homeheadervideo">
            <source src="Images/HomeVideo.mp4" type="video/mp4" />
          </video>
        </div>
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
              "padding-top": "200px",
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
              Asian Publishers
            </p>
            <p style={{ "font-size": "20px" }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
            <br />
            <a
              href="#"
              style={{
                color: "#fff",
                "background-color": "#d82028",
                padding: "10px 30px 10px 30px",
                "-webkit-text-decoration": "none",
                "text-decoration": "none",
                "border-radius": "5px",
                "box-shadow": "4px 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              SHOP NOW
            </a>
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
        <p
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "15px",
            "-webkit-text-transform": "uppercase",
            "text-transform": "uppercase",
            "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Story
          <br />
          <span
            style={{
              "-webkit-text-align": "center",
              "text-align": "center",
              "font-size": "40px",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "font-weight": "600",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Know About <span style={{ color: "red" }}>Asian Publisher</span>
          </span>
        </p>
        <br />
        <div className="col-lg-6" style={{ float: "left" }}>
          <img src={AboutUs} className="Knowmorestyle" />
        </div>
        <div className="col-lg-6" style={{ float: "left" }}>
          <div className="col-lg-1" style={{ float: "left" }} />
          <div className="col-lg-11 aboutcontent">
            <p
              style={{
                "font-size": "22px",
                "font-weight": "600",
                "-webkit-text-shadow": "2px 2px 10px rgba(0, 0, 0, 0.5)",
                "text-shadow": "2px 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              " Helping Teachers to Teach and Students to Learn "
            </p>
            <p style={{ "font-size": "18px" }}>
              Asian Publishers was established in 1981. Since then, it has grown
              to be the leading academic publisher of low-cost and high-quality
              Diploma Education in Uttar Pradesh. With the help and support of
              our experienced authors, Asian Publishers has worked to empower
              the growth of students, teachers and professionals.
              <br />
              <br />
              The name “Asian Publishers, Muzaffarnagar” has been echoed all
              over Uttar Pradesh and Uttarakhand for almost three generations in
              the field of Engineering and Polytechnic books.
              <br />
              <br />
              And as we are constantly strengthening our core foundations by
              introducing new and updated versions of our books every year, we
              are overwhelmed by the support shown by students and teachers
              throughout Uttar Pradesh which motivates us, even more, to
              influence as many students as we can by publishing top-grade study
              material.
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "5vh" }} />
      <div
        className="row"
        id="number-scroller"
        style={{
          clear: "both",
          "background-color": "#d82028",
          padding: "25px 10px 25px 10px",
        }}
      >
        <div className="col-lg-4" style={{ float: "left", padding: "25px" }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={35}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Years of Experience</div>
        </div>
        <div className="col-lg-4" style={{ float: "left", padding: "25px" }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={50}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Experienced Authors</div>
        </div>
        <div className="col-lg-4" style={{ float: "left", padding: "25px" }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={300}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Books Titles</div>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "5vh" }} />
      <div className="row featuredbookdiv">
        <p
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "15px",
            "-webkit-text-transform": "uppercase",
            "text-transform": "uppercase",
            "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Books
          <br />
          <span
            style={{
              "-webkit-text-align": "center",
              "text-align": "center",
              "font-size": "40px",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "font-weight": "600",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Top Selling <span style={{ color: "red" }}>Books</span>
          </span>
        </p>
        <br />
        <div className="container-fluid">
          {/* <div className="col-lg-3" style={{ float: "left" }}> */}
          {allBooks && allBooks.length > 0 && <BookSlider slider={allBooks} />}
          {/* </div> */}
        </div>
        {/* <div className="container-fluid">
          <div className="col-lg-3" style={{ float: "left" }}>
            <center>
              <div className="book">
                <div
                  className="book-cover"
                  style={{ backgroundImage: `url(${Book1})` }}
                >
                  <div className="effect"></div>
                  <div className="light"></div>
                </div>
                <div className="book-inside"></div>
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
          <div className="col-lg-3" style={{ float: "left" }}>
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
          <div className="col-lg-3" style={{ float: "left" }}>
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
          <div className="col-lg-3" style={{ float: "left" }}>
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
        </div> */}
      </div>
      <div
        className="row"
        style={{
          display: "block",
          margin: "0px",
          padding: "0px",
          clear: "both",
        }}
      >
        <br />
        <br />
        <p
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "15px",
            "-webkit-text-transform": "uppercase",
            "text-transform": "uppercase",
            "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Asian Books
          <br />
          <span
            style={{
              "-webkit-text-align": "center",
              "text-align": "center",
              "font-size": "40px",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "font-weight": "600",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Books <span style={{ color: "red" }}>Available for</span>
          </span>
        </p>
        <br />
        <div className="col-lg-4" style={{ float: "left" }}>
          <img src={CivilEngineering} className="homecoursesstyle" />
          <p
            style={{
              "font-size": "20px",
              "-webkit-text-align": "center",
              "text-align": "center",
              "margin-top": "15px",
              "font-weight": "600",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Civil <span style={{ color: "red" }}>Engineering</span>
            <br />
            <span
              style={{
                "font-size": "15px",
                "font-weight": "normal",
                "-webkit-text-transform": "none",
                "text-transform": "none",
                color: "#000",
                "-webkit-text-shadow": "none",
                "text-shadow": "none",
              }}
            >
              Our Civil Engineering books furnish the students with the
              knowledge to apply various principles of Mathematics and Science
              in solving real-life engineering problems through a range of
              private and public projects.
            </span>
          </p>
        </div>
        <div className="col-lg-4" style={{ float: "left" }}>
          <img src={ElectricalEngineering} className="homecoursesstyle" />
          <p
            style={{
              "font-size": "20px",
              "-webkit-text-align": "center",
              "text-align": "center",
              "margin-top": "15px",
              "font-weight": "600",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Electrical <span style={{ color: "red" }}>Engineering</span>
            <br />
            <span
              style={{
                "font-size": "15px",
                "font-weight": "normal",
                "-webkit-text-transform": "none",
                "text-transform": "none",
                color: "#000",
                "-webkit-text-shadow": "none",
                "text-shadow": "none",
              }}
            >
              Our Civil Engineering books furnish the students with the
              knowledge to apply various principles of Mathematics and Science
              in solving real-life engineering problems through a range of
              private and public projects.
            </span>
          </p>
        </div>
        <div className="col-lg-4" style={{ float: "left" }}>
          <img src={MechanicalEngineering} className="homecoursesstyle" />
          <p
            style={{
              "font-size": "20px",
              "-webkit-text-align": "center",
              "text-align": "center",
              "margin-top": "15px",
              "font-weight": "600",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Mechanical <span style={{ color: "red" }}>Engineering</span>
            <br />
            <span
              style={{
                "font-size": "15px",
                "font-weight": "normal",
                "-webkit-text-transform": "none",
                "text-transform": "none",
                color: "#000",
                "-webkit-text-shadow": "none",
                "text-shadow": "none",
              }}
            >
              Our Civil Engineering books furnish the students with the
              knowledge to apply various principles of Mathematics and Science
              in solving real-life engineering problems through a range of
              private and public projects.
            </span>
          </p>
          <br />
          <br />
        </div>
      </div>
      <div
        className="row"
        style={{
          display: "block",
          margin: "0px",
          padding: "0px 0px 20px 0px",
          clear: "both",
          background: "linear-gradient(to bottom, rgb(216, 32, 40, 0.1), #fff)",
        }}
      >
        <br />
        <br />
        <p
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "15px",
            "-webkit-text-transform": "uppercase",
            "text-transform": "uppercase",
            "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Books
          <br />
          <span
            style={{
              "-webkit-text-align": "center",
              "text-align": "center",
              "font-size": "40px",
              "-webkit-text-transform": "uppercase",
              "text-transform": "uppercase",
              "font-weight": "600",
              "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
              "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            How <span style={{ color: "red" }}>Our Books</span> Will Help You
          </span>
        </p>
        <br />
        <div className="col-lg-12 bookhelpstyle">
          <p>
            We guide our students throughout the path to unlock their highest
            potential. We understand the value of education and hence offer the
            finest content developed by highly qualified and experienced authors
            who spare no effort to make the books exceptional.
          </p>
          <br />
          <p>
            <b>• AICTE recognized - </b>The majority of our books have been
            awarded by the AICTE, Government of India.
          </p>
          <p>
            <b>• Language-Friendly - </b>We provide books in English as well as
            in Hindi for each subject such that English and Hindi medium
            students can study together in one class.
          </p>
          <p>
            <b>• Theoretical concepts explained vividly -</b>Our books offer
            theoretical concepts explained in an elaborate yet easy to
            understand manner with the help of diagrams and illustrations so
            that the students can have sound knowledge that goes beyond the
            reach of mainstream books in the market.
          </p>
          <p>
            <b>• Brimming with a wide range of practice questions - </b>Each
            chapter includes practice questions ranging from low to high level
            difficulty.
          </p>
          <p>
            <b>• Provide effective summaries - </b>The authors have included
            comprehensive summaries at the end of each chapter so that students
            can quickly review their syllabus.
          </p>
          <p>
            <b>• Affordable and easily available - </b>We make our books widely
            and easily available at affordable market prices so that everybody
            can benefit from them.
          </p>
          <p>
            <b>• Extensive syllabus coverage - </b>Our books are designed to
            cover the entire new syllabus for UP and UK Board of Technical
            Education, so that our students do not need to hunt for other
            resources.
          </p>
          <p>
            <b>• Design - </b>Our books are presented in such a beautiful and an
            organized way that the students can never get bored and rather enjoy
            studying the subject.
          </p>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "5vh" }} />
      <p
        style={{
          "-webkit-text-align": "center",
          "text-align": "center",
          "font-size": "15px",
          "-webkit-text-transform": "uppercase",
          "text-transform": "uppercase",
          "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Asian Publishers
        <br />
        <span
          style={{
            "-webkit-text-align": "center",
            "text-align": "center",
            "font-size": "40px",
            "-webkit-text-transform": "uppercase",
            "text-transform": "uppercase",
            "font-weight": "600",
            "-webkit-text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Extreme Colleges <span style={{ color: "red" }}>We Are Serving</span>
        </span>
      </p>
      <div
        className="row"
        id="slideshow"
        style={{
          "background-color": "#d82028",
          padding: "35px 100px 35px 100px",
          "box-shadow":
            "0px 5px 10px rgba(0, 0, 0, 0.5),          0px -5px 10px rgba(0, 0, 0, 0.5)",
          "-webkit-flex-wrap": "nowrap",
          "-ms-flex-wrap": "nowrap",
          "flex-wrap": "nowrap",
        }}
      >
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo9})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo10})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo11})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
        <div className="col-lg-2 col2column" style={{ float: "left" }}>
          <center>
            <div
              className="col-lg-11 col2column1"
              style={{
                backgroundImage: `url(${Logo12})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "18vh",
                width: "150px",
              }}
            />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
