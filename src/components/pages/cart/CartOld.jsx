import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_URL } from "../../../config/config";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import "./Cart.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import {
  removeTocart,
  resetCart,
  updateTocart,
} from "../../../redux/slices/cartSlice";
function Cart() {
  const { cartdata } = useSelector((state) => state.cart);
  const [cartItem, setCartItem] = useState([]);
  // console.log(" cart data loaded", cartdata);
  const dispatch = useDispatch();
  const deletecartItems = (book) => {
    const { id, ...rest } = book;
    // dispatch(resetCart());
    dispatch(removeTocart(id));
  };
  useEffect(() => {
    setCartItem(cartdata);
  }, [cartdata]);

  const updateOnChangeHandler = (newVal, currentObj) => {
    let updatedObj = { ...currentObj };
    updatedObj.quantity = newVal;

    const {
      id,
      authors,
      bookCode,
      courseSemesters,
      image,
      isFeatured,
      languageId,
      quantity,
      languageNav,
      mRP,
      numId,
      name,
      ...rest
    } = updatedObj;
    dispatch(
      updateTocart({
        product: {
          id,
          authors,
          bookCode,
          courseSemesters,
          image,
          isFeatured,
          languageId,
          languageNav,
          mRP,
          numId,
          name,
          quantity,
        },
      })
    );
  };

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
                  Cart
                </h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li style={{ textTransform: "unset" }}>Cart</li>
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
                  <table className="table table-spriped">
                    <tr>
                      <th style={{ fontSize: "18px", width: "20%" }}>
                        Product Description
                      </th>
                      <th></th>
                      <th style={{ fontSize: "18px" }}>Qty</th>
                      <th style={{ textAlign: "right", fontSize: "18px" }}>
                        Price
                      </th>
                      <th style={{ textAlign: "right", fontSize: "18px" }}>
                        Sub Total
                      </th>
                      <th style={{ textAlign: "center", fontSize: "18px" }}>
                        Action
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
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              name="quantity"
                              min={1}
                              max={1000}
                              value={book.quantity || null}
                              style={{ width: "100%" }}
                              onChange={(e) => {
                                updateOnChangeHandler(e.target.value, book);
                              }}
                            />
                          </td>
                          <td style={{ textAlign: "right" }}>Rs. {book.mRP}</td>
                          <td style={{ textAlign: "right" }}>
                            Rs.{book.quantity * book.mRP}
                          </td>
                          <td style={{ fontSize: "25px", textAlign: "center" }}>
                            <td
                              style={{ fontSize: "25px", textAlign: "center" }}
                            >
                              <MdOutlineRemoveShoppingCart
                                onClick={() => {
                                  deletecartItems(book);
                                }}
                              />
                            </td>
                          </td>
                        </tr>
                      ))}
                  </table>
                  <br></br>
                  <center>
                    <a className="ban_btn1 banner_style_2" href="/checkout">
                      Checkout Now
                    </a>
                  </center>
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

export default Cart;
