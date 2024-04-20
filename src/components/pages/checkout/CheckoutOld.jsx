import React, { useEffect, useState } from "react";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import "./Checkout.css";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_URL } from "../../../config/config";
import useOrder from "../../../hooks/useOrder";

function Checkout() {
  const { cartdata } = useSelector((state) => state.cart);
  const { loading, submitData } = useOrder();
  const [cartItem, setCartItem] = useState([]);
  const [totalQnt, setTotalQnt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const cartdataitem = cartdata.map((cart) => ({
    bookId: cart.id,
    quantity: cart.quantity,
    price: cart.mRP,
  }));
  // const { name, email, mobileNo, address, city, state, country, pincode } =
  //   formData;

  /**handle change  method implement here */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  /**handle submit  method implement here */
  function handleSubmit(event) {
    event.preventDefault();
    /** create instance of Form data here */
    // let orderData = new FormData();
    // orderData.append("name", name);
    // orderData.append("email", email);
    // orderData.append("mobileNo", mobNumber);
    // orderData.append("address", address);
    // orderData.append("city", city);
    // orderData.append("state", state);
    // orderData.append("country", country);
    // orderData.append("pincode", pincode);
    // orderData.append("orderMetas", cartdataitem);

    /** hitt the create order from api from  here */
    submitData({ ...formData, orderMetas: cartdataitem });
  }
  useEffect(() => {
    setCartItem(cartdata);
  }, [cartdata]);

  useEffect(() => {
    if (cartItem.length > 0) {
      let tempTotalQnt = 0;
      let tempTotalPrice = 0;
      let tempTotalAmmount = 0;
      cartItem?.map((book) => {
        tempTotalQnt += parseInt(book.quantity);
        tempTotalPrice += parseInt(book.mRP);
        tempTotalAmmount += parseInt(book.quantity) * parseInt(book.mRP);
      });
      setTotalQnt(tempTotalQnt);
      setTotalPrice(tempTotalPrice);
      setTotalAmmount(tempTotalAmmount);
    }
  }, [cartItem]);

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
                  Check Out
                </h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li style={{ textTransform: "unset" }}>Check Out</li>
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="contact-from contact-shadow"
                    style={{ marginLeft: "0px" }}
                  >
                    <form
                      method="post"
                      onSubmit={handleSubmit}
                      id="contact-form"
                      action=""
                      acceptCharset="UTF-8"
                      className="contact-form"
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        defaultValue="contact"
                      />
                      <input type="hidden" name="utf8" defaultValue="✓" />
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="ContactFormName"
                          placeholder="Name"
                          className=""
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="email"
                          id="ContactFormEmail"
                          placeholder="Email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Mobile No."
                          name="mobileNo"
                          required
                          value={formData.mobileNo}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-12" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="City"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="State"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6" style={{ float: "left" }}>
                        <input
                          type="text"
                          id="ContactFormSubject"
                          placeholder="Pin Code"
                          name="pincode"
                          required
                          value={formData.pincode}
                          onChange={handleChange}
                        />
                      </div>
                      <center>
                        <button
                          className="ban_btn1 banner_style_2"
                          type="submit"
                        >
                          Place Your Order Now
                        </button>
                      </center>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <table className="table table-spriped">
                    <tr>
                      <th style={{ fontSize: "18px", width: "20%" }}>
                        Product
                      </th>
                      <th>Description</th>
                      <th style={{ textAlign: "right", fontSize: "18px" }}>
                        Qty
                      </th>
                      <th style={{ textAlign: "right", fontSize: "18px" }}>
                        Price
                      </th>
                      <th style={{ textAlign: "right", fontSize: "18px" }}>
                        Amount
                      </th>
                    </tr>
                    {cartItem &&
                      cartItem.length > 0 &&
                      cartItem.map((book, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              src={`${REACT_APP_URL}/Image/${book.image}`}
                              alt="Best Sellers"
                              loading="lazy"
                              style={{ height: "10vh" }}
                            />
                          </td>
                          <td style={{ fontWeight: "600", fontSize: "18px" }}>
                            {book.name}
                          </td>
                          <td style={{ textAlign: "right" }}>
                            {" "}
                            {book.quantity}
                          </td>
                          <td style={{ textAlign: "right" }}>Rs. {book.mRP}</td>
                          <td style={{ textAlign: "right" }}>
                            Rs. {book.quantity * book.mRP}
                          </td>
                        </tr>
                      ))}

                    <tr>
                      <th>Total</th>
                      <th></th>
                      <th style={{ textAlign: "right" }}>{totalQnt}</th>
                      <th style={{ textAlign: "right" }}>Rs. {totalPrice}</th>
                      <th style={{ textAlign: "right" }}>Rs. {totalAmmount}</th>
                    </tr>
                  </table>
                  <br></br>
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

export default Checkout;
