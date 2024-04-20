import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Aboutus.css";
import AsianLogo from "../../../Images/AsianLogo.jpeg";
import AboutHeaderImage from "../../../Images/AboutHeaderImage.png";
import AboutUsImage from "../../../Images/AboutUs.png";
import WhoWeAreImage from "../../../Images/WhoWeAreImage.png";
import WhyUsImage from "../../../Images/WhyUsImage.png";
import Director from "../../../Images/Director.jpg";
import AsianLogoText from "../../../Images/AsianLogoText.jpeg";

function AboutUs() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About Us - Asian Publishers</title>
      <link rel="icon" href="/Images/AsianLogo.jpeg" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/Style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <div className="col-lg-1" style={{ zIndex: 1 }}>
            <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
              <img
                src={AsianLogo}
                style={{ height: "10vh", borderRadius: 10 }}
              />
            </a>
          </div>
          <div className="col-lg-11">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <center>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      SHOP
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      AUTHORS
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      ORDER FORM
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      BECOME AN AUTHOR
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      OUR CATALOGUE
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-user" />
                    </a>
                  </li>
                </ul>
              </center>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${AboutHeaderImage})`, //`url(${ShopHeaderImage})`
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="gradient-overlay" />
        <div className="col-lg-2" style={{ float: "left" }}>
          &nbsp;
        </div>
        <div className="col-lg-8" style={{ float: "left" }}>
          <div
            className="video-content"
            style={{ textAlign: "center", paddingTop: 150 }}
          >
            <p
              className="text"
              style={{
                textTransform: "uppercase",
                fontSize: 50,
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              About Us
            </p>
            <p style={{ fontSize: 20 }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
            {/* <br />
    <a
      href="#"
      style="
        color: #fff;
        background-color: #d82028;
        padding: 10px 30px 10px 30px;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
      "
      >SHOP NOW</a
    > */}
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
        style={{ display: "block", margin: 0, padding: 0, clear: "both" }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Story
          <br />
          <span
            style={{
              textAlign: "center",
              fontSize: 40,
              textTransform: "uppercase",
              fontWeight: 600,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Know About <span style={{ color: "red" }}>Asian Publisher</span>
          </span>
        </p>
        <br />
        <div className="col-lg-6" style={{ float: "left" }}>
          <img src={AboutUsImage} className="Knowmorestyle" />
        </div>
        <div className="col-lg-6" style={{ float: "left" }}>
          <div className="col-lg-1" style={{ float: "left" }} />
          <div className="col-lg-11 aboutcontent">
            <p
              style={{
                fontSize: 22,
                fontWeight: 600,
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              " Helping Teachers to Teach and Students to Learn "
            </p>
            <p style={{ fontSize: 18 }}>
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
        style={{
          clear: "both",
          background:
            "linear-gradient(to bottom, rgb(238, 238, 238, 0.4), #fff)",
          padding: 40,
        }}
      >
        <div className="container">
          <div className="col-lg-7" style={{ float: "left" }}>
            <p
              style={{
                textAlign: "left",
                fontSize: 15,
                textTransform: "uppercase",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span
                style={{
                  textAlign: "left",
                  fontSize: 40,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Who <span style={{ color: "red" }}>We are ?</span>
              </span>
            </p>
            <p style={{ textAlign: "justify", width: "80%" }}>
              Asian Publishers, Muzaffarnagar is one of the largest and leading
              academic publishers in Uttar Pradesh.Low-cost and high-quality
              affordable texts of Asian Publishers, Muzaffarnagar have been the
              pioneer in learning states of UP and UK. We have, so far, release
              more than 250 titles encompassing various branches: Civil
              Engineering, Electrical Engineering, Mechanical Engineering,
              Electronics Engineering, Computer Science Engineering and
              Information Technology and so on.
            </p>
          </div>
          <div
            className="col-lg-5"
            style={{
              float: "left",
              backgroundImage: `url(${WhoWeAreImage})`,
              height: "50vh",
              borderTopLeftRadius: 100,
              borderBottomRightRadius: 100,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "2vh" }} />
      <div
        className="row"
        style={{
          clear: "both",
          background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
          padding: 40,
        }}
      >
        <div className="container">
          <div
            className="col-lg-5"
            style={{
              float: "left",
              backgroundImage: `url(${WhyUsImage})`,
              height: "70vh",
              borderTopLeftRadius: 100,
              borderBottomRightRadius: 100,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="col-lg-7" style={{ float: "left" }}>
            <div className="col-lg-2" style={{ float: "left" }}>
              &nbsp;
            </div>
            <div className="col-lg-10" style={{ float: "left" }}>
              <p
                style={{
                  textAlign: "right",
                  fontSize: 15,
                  textTransform: "uppercase",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span
                  style={{
                    textAlign: "right",
                    fontSize: 40,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Why <span style={{ color: "red" }}>Us ?</span>
                </span>
              </p>
              <p style={{ textAlign: "justify" }}>
                Our books are designed in a way to effectively cover the
                syllabus prescribed by the Board of Technical Education, Uttar
                Pradesh &amp; Uttarakhand. Our authors strive to provide the
                virtue of simple and sound learning through various effective
                methods in their books. We not only try to cover the syllabus
                prescribed by the Board of Technical Education but also go the
                extra mile to make sure that the students fully understand not
                just the theoretical but the practical aspects of the respective
                subject as well.
                <br />
                <br />
                You should choose Asian Publishers because we promise to
                continuously upgrade our standards to provide the best learning
                material and set the highest benchmarks for ourselves and
                everyone in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        id="number-scroller"
        style={{
          clear: "both",
          backgroundColor: "#d82028",
          padding: "25px 10px 25px 10px",
        }}
      >
        <div className="col-lg-4" style={{ float: "left", padding: 25 }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={35}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Years of Experience</div>
        </div>
        <div className="col-lg-4" style={{ float: "left", padding: 25 }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={50}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Experienced Authors</div>
        </div>
        <div className="col-lg-4" style={{ float: "left", padding: 25 }}>
          <div className="col-lg-7 numstyle1">
            <div className="number" data-count={300}>
              0
            </div>
          </div>
          <div className="col-lg-5 numstyle2">Books Titles</div>
        </div>
      </div>
      <div
        className="row"
        style={{
          clear: "both",
          background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
          padding: 40,
        }}
      >
        <div className="container-fluid">
          <div className="col-lg-7" style={{ float: "left" }}>
            <p
              style={{
                textAlign: "left",
                fontSize: 15,
                textTransform: "uppercase",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span
                style={{
                  textAlign: "left",
                  fontSize: 40,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                THE JOURNEY TO
                <span style={{ color: "red" }}>IMPACT LIVES…</span>
              </span>
            </p>
            <p style={{ textAlign: "justify", width: "90%" }}>
              Our founder, Shri Satya Prakash Mittal started his journey to
              impact the lives of millions of students with only a single title
              under his name.
              <br />
              <br />
              With consistent efforts to fully achieve his goal of spreading
              education and knowledge through simplistic learning methods, Asian
              publishers now have over 250 titles under its name. Sh. Satya
              Prakash Mittal has given Asian Publishers its true values of
              making our nation great through work on the grassroots level via
              education and learning.
              <br />
              <br />
              Through his efforts, Asian Publishers is one of the biggest names
              in the higher education industry in the Indian states of
              Uttarakhand and Uttar Pradesh!
            </p>
          </div>
          <div
            className="col-lg-5"
            style={{
              float: "left",
              backgroundImage: `url(${Director})`,
              height: "70vh",
              borderTopLeftRadius: 100,
              borderBottomRightRadius: 100,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "2vh" }} />
      <div
        className="row"
        style={{
          backgroundColor: "white",
          position: "relative",
          padding: "50px 30px 0px 30px",
          textAlign: "left",
          color: "black",
        }}
      >
        {/* <div class="row"> */}
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <img
            src={AsianLogoText}
            style={{ height: "10vh", borderRadius: 10 }}
          />
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Asian Publishers was established in 1981. Since then, it has grown
            to be the leading academic publisher of low-cost and high-quality
            Diploma Education in Uttar Pradesh. With the help and support of our
            experienced authors, Asian Publishers has worked to empower the
            growth of students, teachers and professionals.
            <a
              style={{ textDecoration: "none", color: "#d82028" }}
              href="index.html#AboutUsSection"
            >
              read more...
            </a>
          </p>
        </div>
        {}
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <h2 style={{ textAlign: "left", fontSize: 25 }}>Connect With Us</h2>
          <hr />
          <div style={{ marginTop: 5, marginBottom: 5 }}>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-map-marker" />
              </div>
              <div className="col-10 footercontact">
                <p>
                  46/20, Kambal Wala Bagh, Jansath Road, Opp. Punjab National
                  Bank, New Mandi, Muzaffarnagar - 251001
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-phone-square" />
              </div>
              <div className="col-10 footercontact">
                <p>
                  +91 9412639492 <br />
                  +91 98736 20572
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-envelope" />
              </div>
              <div className="col-10 footercontact">
                <p>
                  spmittal@asianpublishers.co.in, sales@asianpublishers.co.in
                </p>
              </div>
            </div>
            <span id="siteseal"></span>
          </div>
        </div>
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <h2 style={{ textAlign: "left", fontSize: 25 }}>Location</h2>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.58198434516!2d77.66765778469876!3d29.475194078566478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713521929069!5m2!1sen!2sin"
            width="100%"
            height={200}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* </div> */}
        <div
          className="row"
          style={{
            boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.2)",
            paddingTop: 10,
            width: "100vw",
          }}
        >
          <center>
            <p style={{ textAlign: "center", width: "100vw" }}>
              Designed &amp; Developed By Innovate X
            </p>
          </center>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
