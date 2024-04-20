import React, { useEffect, useState } from "react";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import useContactUs from "../../../hooks/useContactUs";
import Spinner from "../../common/Spinner";

function ContactUs() {
  const { loading, submitData } = useContactUs();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    submitData(formData);
  }
  useEffect(() => {
    if (!loading) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  }, [loading]);

  return (
    <>
      {loading && <Spinner />}
      <title>Contact Us - Asian Publishers</title>
      {/* CSS */}
      <link
        href="../../Assets/shop/t/9/assets/bootstrap.min528d.css?v=19868337340211324411698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/stylea2a8.css?v=23287745902246098161698938060"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-custom0acb.css?v=63313606314167933051698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/skin-and-color85c1.css?v=64489753365287532231698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <link
        href="../../Assets/shop/t/9/assets/icons.min4e41.css?v=144771626144460745771698938059"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icofont.minba8d.css?v=49818375117710154861698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      <script src="../../Assets/shop/t/9/assets/theme08ca.js?v=58729172318499673551698938089"></script>
      <div id="preloader_active">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
        </div>
      </div>
      <div id="shopify-section-header" className="shopify-section">
        <div style={{ height: "16vh" }}>
          <Header />
        </div>
      </div>
      <div className="breadcrumb-area breadcrumbs-section">
        <div className="breadcrumbs overlay-bg">
          <div className="container">
            <div className="breadcrumb-content text-center breadcrumbs-inner">
              <div className="page-title">
                <h1 className="breadcrumbs-title">Contact us</h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li>Contact us</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <div
          id="shopify-section-template--14595761635408__1633605873cf309896"
          className="shopify-section"
        >
          <div className="contact-area pb-100">
            <div className="container">
              <div className="contact-map">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.58198434516!2d77.66765778469876!3d29.475194078566478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712662812454!5m2!1sen!2sin"
                    width="100%"
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761635408__main"
          className="shopify-section"
        >
          <div className="contact-area pt-100 pb-100">
            <div className="container">
              <div className="section-title text-center pb-60">
                <h2>Let's get in touch</h2>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="contact-info-area">
                    <div className="contact-info-wrap">
                      <div className="single-contact-info">
                        <div className="contact-info-icon">
                          <i
                            className="sli sli-location-pin"
                            style={{ color: "#dd321e" }}
                          />
                        </div>
                        <div className="contact-info-content">
                          <h6>Address:</h6>
                          <p>Muzaffarnagar, Uttar Pradesh</p>
                        </div>
                      </div>
                      <div className="single-contact-info">
                        <div className="contact-info-icon">
                          <i
                            className="sli sli-sli sli-envelope"
                            style={{ color: "#dd321e" }}
                          />
                        </div>
                        <div className="contact-info-content">
                          <h6>Email:</h6>
                          <p>info@asianpublisher.in</p>
                        </div>
                      </div>
                      <div className="single-contact-info">
                        <div className="contact-info-icon">
                          <i
                            className="sli sli-sli sli-screen-smartphone"
                            style={{ color: "#dd321e" }}
                          />
                        </div>
                        <div className="contact-info-content">
                          <h6>Call Us:</h6>
                          <p>+91 0987654321</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="contact-from contact-shadow">
                    <form
                      method="post"
                      onSubmit={handleSubmit}
                      action=""
                      id="contact-form"
                      acceptCharset="UTF-8"
                      className="contact-form"
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        defaultValue="contact"
                      />
                      <input type="hidden" name="utf8" defaultValue="✓" />
                      <input
                        id="ContactFormName"
                        type="text"
                        placeholder="Name"
                        className=""
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        // defaultValue=""
                      />
                      <input
                        type="email"
                        id="ContactFormEmail"
                        placeholder="Email"
                        className=""
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        // defaultValue=""
                      />
                      <input
                        type="text"
                        id="ContactFormSubject"
                        placeholder="Subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}

                        // defaultValue=""
                      />
                      <textarea
                        style={{ height: "auto" }}
                        rows={2}
                        id="ContactFormMessage"
                        placeholder="Your Message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <button className="submit" type="submit">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* Some styles to get you started. */}
    </>
  );
}

export default ContactUs;
