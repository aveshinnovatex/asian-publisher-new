import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/home/Home";
import AboutUs from "../src/components/pages/aboutus/AboutUs";
import Author from "../src/components/pages/author/Author";
import Login from "../src/components/common/login/Login";
import Register from "../src/components/common/register/Register";
import Shop from "../src/components/pages/shop/Shop";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import BookDetails from "./components/pages/shop/BookDetails";
import OrderForm from "./components/pages/orderForm/OrderForm";
import ContactUs from "./components/pages/contactUs/ContactUs";
import BecomeAuthor from "./components/pages/becomeauthor/BecomeAuthor";
// import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/author" element={<Author />} />
        <Route path="/becomean-author" element={<BecomeAuthor />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderForm" element={<OrderForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
