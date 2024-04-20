import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "./Checkout.css";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_URL } from "../../../config/config";
import useOrder from "../../../hooks/useOrder";
import Book1 from "../../../Images/Book1.jpg";
import Book2 from "../../../Images/Book2.jpg";
import CartHeaderImage from "../../../Images/CartHeaderImage.png";

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
      <Header />
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${CartHeaderImage})`,
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
              Check Out
            </p>
            <p style={{ fontSize: 20 }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
            {}
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="contact-from contact-shadow"
                style={{ marginLeft: 0 }}
              >
                <form
                  method="post"
                  action=""
                  id="contact-form"
                  acceptcharset="UTF-8"
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    defaultvalue="contact"
                  />
                  <input type="hidden" name="utf8" defaultvalue="✓" />
                  <div className="col-lg-12">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-controlCustomized"
                      name="contact[name]"
                      id="ContactFormName"
                      defaultvalue=""
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-controlCustomized"
                      name="contact[email]"
                      id="ContactFormEmail"
                      defaultvalue=""
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="Mobile No."
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                  <div
                    className="col-lg-12"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="Address"
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="City"
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="State"
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="Country"
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ float: "left", marginTop: 20 }}
                  >
                    <input
                      type="text"
                      id="ContactFormSubject"
                      name="contact[subject]"
                      placeholder="Pin Code"
                      defaultvalue=""
                      className="form-controlCustomized"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <table className="table table-spriped">
                <tbody>
                  <tr>
                    <th style={{ fontSize: 18, width: "10%" }}>Product</th>
                    <th style={{ fontSize: 18, width: "30%" }}>Details</th>
                    <th style={{ fontSize: 16, width: "20%" }}>Qty</th>
                    <th
                      style={{ fontSize: 16, width: "20%", textAlign: "right" }}
                    >
                      Price
                    </th>
                    <th
                      style={{ fontSize: 16, width: "20%", textAlign: "right" }}
                    >
                      Sub Total
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={Book1}
                        alt="Best Sellers"
                        loading="lazy"
                        style={{ height: "12vh" }}
                      />
                    </td>
                    <td style={{ fontWeight: 600, fontSize: 18 }}>
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
                    <td style={{ textAlign: "right" }}>Rs. 300</td>
                    <td style={{ textAlign: "right" }}>Rs. 3000</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={Book2}
                        alt="Best Sellers"
                        loading="lazy"
                        style={{ height: "12vh" }}
                      />
                    </td>
                    <td style={{ fontWeight: 600, fontSize: 18 }}>
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
                    <td style={{ textAlign: "right" }}>Rs. 300</td>
                    <td style={{ textAlign: "right" }}>Rs. 3000</td>
                  </tr>
                </tbody>
              </table>
              <center>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#d82028",
                    color: "#fff",
                    padding: "10px 50px 10px 50px",
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                >
                  PLACE YOUR ORDER NOW
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          clear: "both",
          height: "10vh",
          background: "linear-gradient(to top, rgb(216, 32, 40, 0.1), #fff)",
        }}
      />
      <div
        className="row"
        style={{
          backgroundColor: "white",
          position: "relative",
          padding: "50px 30px 0px 30px",
          textAlign: "left",
          color: "black",
        }}
      ></div>
      <Footer />
    </>
  );
}

export default Checkout;
