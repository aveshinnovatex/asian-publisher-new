import React, { useEffect, useState } from "react";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import { createOrderFrom } from "../../../redux/slices/orderFromSlice";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchBooks } from "../../../redux/slices/bookSlice";

function OrderForm() {
  const { loading } = useSelector((state) => state.orderFrom);
  const { books } = useSelector((state) => state.book);
  const topBooks = books?.map((book) => ({ label: book.name, id: book.id }));
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    book: "",
    quantity: 0,
    mobNumber: "",
    description: "",
  });
  useEffect(() => {
    dispatch(fetchBooks({}));
  }, [dispatch]);

  const { name, email, address, city, book, quantity, mobNumber, description } =
    formData;
  /**handle change  method implement here */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  /**handle submit  method implement here */
  function handleSubmit(event) {
    event.preventDefault();

    /** create instance of Form data here */
    let orderFrom = new FormData();

    orderFrom.append("name", name);
    orderFrom.append("email", email);
    orderFrom.append("address", address);
    orderFrom.append("city", city);
    orderFrom.append("bookId", book);
    orderFrom.append("quantity", Number(quantity));
    orderFrom.append("mobileNo", mobNumber);
    orderFrom.append("description", description);

    /** hitt the create order from api from  here */
    dispatch(createOrderFrom(orderFrom));
  }
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
                <h1
                  className="breadcrumbs-title"
                  style={{ textTransform: "unset" }}
                >
                  Order with Asian Publishers
                </h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li style={{ textTransform: "unset" }}>
                    Order with Asian Publishers
                  </li>
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
                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 0,
                          paddingRight: 5,
                        }}
                      >
                        <label>Name</label>
                        <input
                          id="ContactFormName"
                          type="text"
                          placeholder="Enter Your Name"
                          className=""
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 5,
                          paddingRight: 0,
                        }}
                      >
                        <label>Email</label>
                        <input
                          type="email"
                          id="ContactFormEmail"
                          placeholder="Enter Your Email"
                          className=""
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 0,
                          paddingRight: 5,
                        }}
                      >
                        <label>Address</label>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Enter Your Address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 5,
                          paddingRight: 0,
                        }}
                      >
                        <label>City</label>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Enter Your City"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <div
                        className="col-lg-12"
                        style={{
                          float: "left",
                          paddingLeft: 0,
                          paddingRight: 0,
                        }}
                      >
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={topBooks}
                          onChange={(event, value) => {
                            setFormData((prev) => ({
                              ...prev,
                              book: value?.id,
                            }));
                          }}
                          sx={{
                            width: 700,
                            ".MuiAutocomplete-inputRoot": {
                              "& .MuiAutocomplete-input": {
                                fontSize: "16px",
                              },
                            },
                          }}
                          renderInput={(params) => (
                            <TextField {...params} label="Books" />
                          )}
                        />
                      </div>

                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 0,
                          paddingRight: 5,
                        }}
                      >
                        <label>Quantity</label>
                        <input
                          type="number"
                          id="ContactFormSubject"
                          placeholder="Enter Your Quantity"
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <div
                        className="col-lg-6"
                        style={{
                          float: "left",
                          paddingLeft: 5,
                          paddingRight: 0,
                        }}
                      >
                        <label>Mobile No.</label>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Enter Your Mobile No."
                          name="mobNumber"
                          required
                          value={formData.mobNumber}
                          onChange={handleChange}
                          // defaultValue=""
                        />
                      </div>
                      <label>Description</label>
                      <textarea
                        style={{ height: "auto" }}
                        rows={5}
                        placeholder="Enter Your Message"
                        id="ContactFormMessage"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        // defaultValue={"\n"}
                      />
                      <center>
                        <button className="submit" type="submit">
                          Order Now
                        </button>
                      </center>
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

export default OrderForm;
