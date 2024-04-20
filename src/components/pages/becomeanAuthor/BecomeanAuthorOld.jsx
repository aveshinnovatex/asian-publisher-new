import React, { useEffect, useState } from "react";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import { createBecomeAuthor } from "../../../redux/slices/becomeAuthorSlice";
import { useDispatch, useSelector } from "react-redux";

function BecomeanAuthor() {
  const { loading, becomeAuthors } = useSelector((state) => state.becomeAuthor);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = formData;

  /**handle change method here  */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  /**handle submit method here  */
  function handleSubmit(event) {
    event.preventDefault();

    let becomeAuthorsData = new FormData();
    becomeAuthorsData.append("name", name);
    becomeAuthorsData.append("email", email);
    becomeAuthorsData.append("subject", subject);
    becomeAuthorsData.append("message", message);

    /** hitt the create become author api from  here */
    dispatch(createBecomeAuthor(becomeAuthorsData));
  }
  useEffect(() => {
    if (loading === "fulfilled") {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  }, [loading]);

  return (
    <>
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
      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      <script src="../../Assets/shop/t/9/assets/theme08ca.js?v=58729172318499673551698938089"></script>
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
                <h1
                  className="breadcrumbs-title"
                  style={{ textTransform: "unset" }}
                >
                  Become an Author
                </h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li style={{ textTransform: "unset" }}>Become an Author</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <br />
        <div
          id="shopify-section-template--14595761635408__main"
          className="shopify-section"
        >
          <div className="contact-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-6">
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
                        // className=""
                        name="name"
                        value={formData.name}
                        required
                        onChange={handleChange}
                        // defaultValue=""
                      />
                      <input
                        id="ContactFormEmail"
                        type="email"
                        placeholder="Email"
                        className=""
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleChange}

                        // defaultValue=""
                      />
                      <input
                        id="ContactFormSubject"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        required
                        // defaultValue=""
                        onChange={handleChange}
                      />
                      <textarea
                        style={{ height: "auto" }}
                        rows={2}
                        id="ContactFormMessage"
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        required
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
    </>
  );
}

export default BecomeanAuthor;
