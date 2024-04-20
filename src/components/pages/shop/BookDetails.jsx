import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import contactusheaderimage from "../../../Images/contactusheaderimage.png";
import Book1 from "../../../Images/Book1.jpg";

function BookDetails() {
  return (
    <>
      <Header />
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${contactusheaderimage})`,
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
              Book Details
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
        <div
          className="container-fluid"
          style={{ padding: "0px", margin: "0px" }}
        >
          <div className="col-lg-2" style={{ float: "left" }}>
            &nbsp;
          </div>
          <div
            className="col-lg-8"
            style={{
              float: "left",
              "box-shadow": "2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
            }}
          >
            <div className="col-lg-6" style={{ float: "left", padding: "0px" }}>
              <img src={Book1} style={{ height: "100vh" }} />
            </div>
            <div
              className="col-lg-6"
              style={{ float: "left", padding: "50px" }}
            >
              <h4 style={{ "font-weight": "600" }}>Book Name Here</h4>
              <h6>ISBN No. : 0987654321</h6>
              <p style={{ color: "red", "font-weight": "600" }}>Rs. 3000</p>
              <table classname="table table-spriped">
                <tbody>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Category</th>
                  </tr>
                  <tr>
                    <td>1.</td>
                    <td>Test</td>
                  </tr>
                </tbody>
              </table>
              <center>
                <div classname="quantity" style={{ width: "50%" }}>
                  <button classname="minus" aria-label="Decrease">
                    −
                  </button>
                  <input
                    type="number"
                    classname="input-box"
                    defaultValue="{bookQuantity}"
                    min="{1}"
                    max="{10}"
                    style={{ width: "100%" }}
                  />
                  <button classname="plus" aria-label="Increase">
                    +
                  </button>
                </div>
              </center>
              <br />
              <br />
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
                  ADD TO CART
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "1vh" }} />
      <div classname="row" style={{ padding: "30px" }}>
        <div
          style={{
            "background-color": "#F6F2E7",
            padding: "20px",
            width: "100%",
            height: "12vh",
          }}
        >
          <h3>Shipping &amp; Refund</h3>
          <br />
          <br />
        </div>
        <div
          style={{
            background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
            padding: "50px 50px 5px 50px",
          }}
        >
          <b>Shipping policy</b>
          <p>
            We offer shipping services to all parts of India, even remote areas,
            and ship six days a week. Orders received after 12 p.m. IST on any
            given day are processed the next day. On Sundays and national
            holidays, we do not process orders. We also accept orders for
            supplies on demand. If you require a book immediately, we can
            deliver it to you within 24 hours for an additional fee. Our normal
            shipping time ranges between 6 and 8 days. When delivering to a
            remote location, delivery times may vary depending on the area or
            location of the order. If none of our shipping partners deliver to
            your area, we can send your order via the India Post package. Orders
            delivered by India Post cannot be tracked, and in some situations,
            the parcel may take up to 10-15 days to arrive.
          </p>
          <b>Track your order</b>
          <p>
            Visit our delivery partner's website to follow your order using the
            tracking number supplied in your order confirmation email. It could
            take up to 12-24 hours for your tracking number to be updated on our
            website.
          </p>
          <b>Return and Exchange policy</b>
          <p>
            All orders placed with us are guaranteed 7 Day Replacement. We use
            the best packaging and shipping methods to ensure that the orders
            reach their intended destination in good condition. We do not take
            any responsibility for the goods which are damaged during the
            transit. If you have received a damaged or defective book, please
            contact us within 14 days of your order date to get a replacement.
            You can also get your order replaced once without any additional
            charge. You can cancel your order online up to 12 hours before the
            book is shipped. In this case, the entire amount will be refunded.
            If the payment is made via a debit/credit card, the money will be
            refunded to the card itself. Once the order has been cancelled it
            will take 8-10 working days to process the refund. If you paid with
            a DD, then you can send us an e-mail or call us to notify us of your
            bank number. We will make sure that your refund reaches you ASAP
          </p>
        </div>
      </div>
      <div classname="row" style={{ padding: "30px" }}>
        <div
          style={{
            "background-color": "#F6F2E7",
            padding: "20px",
            width: "100%",
            height: "12vh",
          }}
        >
          <h3>Asian Publishers Benefits</h3>
          <br />
          <br />
        </div>
        <div
          style={{
            background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
            padding: "50px 50px 5px 50px",
          }}
        >
          <p>
            Asian publishers aim to help its students through all the regions
            with its simplistic and comprehensive study methods. Our books teach
            our students with the virtue of providing-
            <br />
            <br />
            <b>• VARIETY OF EXAMPLES :</b> Each chapter of our book is designed
            to house multiple examples from different perspectives so that
            everyone can understand in accordance with their style of learning.
            <br />
            <br />
            <b>• MULTIPLE LANGUAGES :</b> The content and difficult concepts are
            explained in multiple languages so that students can understand them
            with ease.
            <br />
            <br />
            <b>• SUMMARIES :</b> Authors have incorporated comprehensive
            summaries at the end of every chapter so that students can go over
            their syllabus quickly.
            <br />
            <br />
            <b>• STUDY RESOURCES :</b> Our books house the ever-precious banks
            of questions and resources for revision which help the students
            effectively prepare for exams.
            <br />
            <br />
            <b>• COMPETITIVE PRICES :</b> Our books are widely and easily
            accessible at competitive market prices so that each and every
            person can make effective use of them.
            <br />
            <br />
            <b>• COVERS ENTIRE SYLLABUS :</b> Our books are designed to cover
            the entire syllabus of the UP technical board so that our students
            need not look outside for additional resources.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetails;
