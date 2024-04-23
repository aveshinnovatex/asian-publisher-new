import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOld from "./components/pages/home/HomeOld";
import Home from "./components/pages/home/Home";
import AboutUsOld from "./components/pages/aboutus/AboutUsOld";
import AboutUs from "./components/pages/aboutus/AboutUs";
import ContactUsOld from "./components/pages/contactus/ContactUsOld";
import ContactUs from "./components/pages/contactus/ContactUs";
import AuthorOld from "./components/pages/author/AuthorOld";
import Author from "./components/pages/author/Author";
import BecomeanAuthorOld from "./components/pages/becomeanAuthor/BecomeanAuthorOld";
import BecomeanAuthor from "./components/pages/becomeanAuthor/BecomeanAuthor";
import LoginOld from "./components/common/login/LoginOld";
import Login from "./components/common/login/Login";
import OrderFormOld from "./components/pages/orderForm/OrderFormOld";
import OrderForm from "./components/pages/orderForm/OrderForm";
import RegisterOld from "./components/common/register/RegisterOld";
import Register from "./components/common/register/Register";
import Shop from "./components/pages/shop/ShopOld";
import ShopNew from "./components/pages/shop/Shop";
import CartOld from "./components/pages/cart/CartOld";
import Cart from "./components/pages/cart/Cart";
import CheckoutOld from "./components/pages/checkout/CheckoutOld";
import Checkout from "./components/pages/checkout/Checkout";
import BookDetailsOld from "./components/pages/shop/BookDetailsOld";
import BookDetails from "./components/pages/shop/BookDetails";
// import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopNew />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/orderForm" element={<OrderForm />} />
        <Route path="/becomean-author" element={<BecomeanAuthor />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author" element={<Author />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />

        {/**old routing */}
        {/* <Route path="/" element={<HomeOld />} />
        <Route path="/about-us" element={<AboutUsOld />} />
        <Route path="/author" element={<AuthorOld />} />
        <Route path="/becomean-author" element={<BecomeanAuthorOld />} />
        <Route path="/contact-us" element={<ContactUsOld />} />
        <Route path="/login" element={<LoginOld />} />
        <Route path="/orderForm" element={<OrderFormOld />} />
        <Route path="/register" element={<RegisterOld />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartOld />} />
        <Route path="/checkout" element={<CheckoutOld />} />
        <Route path="/bookdetails/:id" element={<BookDetailsOld />} /> */}
      </Routes>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
