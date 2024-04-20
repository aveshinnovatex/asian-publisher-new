import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { createOrderFrom } from "../../../redux/slices/orderFromSlice";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchBooks } from "../../../redux/slices/bookSlice";
import AsianLogo from "../../../Images/AsianLogo.jpeg";
import AsianLogoText from "../../../Images/AsianLogoText.jpeg";
import orderformimage from "../../../Images/orderformimage.png";

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
      <Header />
      <div
        className="Headerrowabout"
        style={{
          backgroundImage: `url(${orderformimage})`,
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
              Order Form
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
        <div className="container">
          <div className="col-lg-6" style={{ float: "left" }}>
            <label style={{ fontWeight: 600 }}>Name</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Name"
            />
          </div>
          <div className="col-lg-6" style={{ float: "left" }}>
            <label style={{ fontWeight: 600 }}>Email</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Email"
            />
          </div>
          <div className="col-lg-6" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>Address</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Address"
            />
          </div>
          <div className="col-lg-6" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>City</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="City"
            />
          </div>
          <div className="col-lg-12" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>Book</label>
            <select className="form-control">
              <option value="Book Name">Book Name</option>
              <option value="Book Name">Book Name</option>
              <option value="Book Name">Book Name</option>
            </select>
          </div>
          <div className="col-lg-6" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>Quantity</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Quantity"
            />
          </div>
          <div className="col-lg-6" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>Mobile No.</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Mobile No."
            />
          </div>
          <div className="col-lg-12" style={{ float: "left", marginTop: 20 }}>
            <label style={{ fontWeight: 600 }}>Description</label>
            <textarea rows={5} className="form-control" defaultValue={""} />
          </div>
          <div className="col-lg-12" style={{ float: "left", marginTop: 40 }}>
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
                Order Now
              </a>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderForm;
