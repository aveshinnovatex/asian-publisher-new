import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import "./Shop.css";
import { fetchBookDetails } from "../../../redux/slices/bookSlice";
import { REACT_APP_URL } from "../../../config/config";
import { useParams } from "react-router-dom";
import { updateTocart } from "../../../redux/slices/cartSlice";

function Shop() {
  const { loading, bookDetails } = useSelector((state) => state.book);
  const { cartdata } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let { id } = useParams();

  const [bookDetail, setBookDetail] = useState({});
  const [bookQuantity, setQuantity] = useState(1);
  const bookQnty = cartdata.find((item) => item.id === id);
  console.log("bookQuantity", bookQnty?.quantity);
  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id]);
  useEffect(() => {
    if (loading === "fulfilled") {
      setBookDetail(bookDetails);
      setQuantity(bookQnty?.quantity ?? 1);
    }
  }, [loading]);

  function handleUpdateCart(book) {
    const {
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
      ...rest
    } = book;
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
          quantity: bookQuantity,
        },
      })
    );
  }
  // function handleCart(book) {
  //   const {
  //     id,
  //     authors,
  //     bookCode,
  //     courseSemesters,
  //     image,
  //     isFeatured,
  //     languageId,

  //     languageNav,
  //     mRP,
  //     numId,
  //     name,
  //     ...rest
  //   } = book;

  //   dispatch(
  //     addTocart({
  //       product: {
  //         id,
  //         quantity: 1,
  //         authors,
  //         bookCode,
  //         courseSemesters,
  //         image,
  //         isFeatured,
  //         languageId,
  //         languageNav,
  //         mRP,
  //         numId,
  //         name,
  //       },
  //     })
  //   );
  // }
  return (
    <>
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
        href="../../Assets/shop/t/9/assets/theme-default8cb8.css?v=87801545591066565141698938089"
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
                <h1 className="breadcrumbs-title">Book Details</h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li>Book Details</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="shopify-section-breadcrumb" className="shopify-section"></div>
      <main>
        <div
          id="shopify-section-template--14595761406032__main"
          className="shopify-section"
        >
          <div
            className="shop-area pt-20 pb-20 section-padding-3"
            id="section-template--14595761406032__main"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="shop-bottom-area">
                    <div className="tab-content jump">
                      <div
                        style={{
                          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        <div className="row theme-products">
                          <div
                            className="col-lg-1"
                            style={{
                              float: "left",
                            }}
                          ></div>
                          <div
                            className="col-lg-10"
                            style={{
                              float: "left",
                            }}
                          >
                            <img
                              className="col-lg-6"
                              src={`${REACT_APP_URL}/Image/${bookDetail.image}`}
                              style={{
                                float: "left",
                                height: "100vh",
                                objectFit: "cover",
                              }}
                              alt="Book Cover"
                            />

                            <div
                              className="col-lg-1"
                              style={{
                                float: "left",
                                paddingTop: "10px 10px 10px 10px",
                              }}
                            ></div>
                            <div
                              className="col-lg-5"
                              style={{
                                float: "left",
                                padding: "50px 10px 10px 10px",
                              }}
                            >
                              <h3 style={{ fontWeight: "600" }}>
                                {bookDetail.name}
                              </h3>
                              <h6>ISBN: {bookDetail.iSBN}</h6>
                              <p style={{ color: "red", fontWeight: "600" }}>
                                Rs. {bookDetail.mRP}
                              </p>
                              <table className="table table-spriped">
                                <tr>
                                  <th>Sr. No.</th>
                                  <th>Category</th>
                                </tr>
                                <tr>
                                  <td>1.</td>
                                  <td>Test</td>
                                </tr>
                              </table>

                              <center>
                                <div
                                  className="quantity"
                                  style={{ width: "50%" }}
                                >
                                  {/* Button to decrease quantity */}
                                  <button
                                    className="minus"
                                    aria-label="Decrease"
                                    onClick={() =>
                                      setQuantity((prevQuantity) =>
                                        Math.max(parseInt(prevQuantity) - 1, 1)
                                      )
                                    }
                                  >
                                    −
                                  </button>
                                  {/* Input for quantity */}
                                  <input
                                    type="number"
                                    className="input-box"
                                    value={bookQuantity}
                                    min={1}
                                    max={1000}
                                    onChange={(e) => {
                                      const value = parseInt(e.target.value);
                                      setQuantity(isNaN(value) ? null : value);
                                    }}
                                    style={{ width: "100%" }}
                                  />
                                  {/* Button to increase quantity */}
                                  <button
                                    className="plus"
                                    aria-label="Increase"
                                    onClick={() =>
                                      setQuantity((prevQuantity) =>
                                        Math.min(
                                          parseInt(prevQuantity) + 1,
                                          1000
                                        )
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </center>

                              <br></br>
                              <center>
                                <a
                                  className="ban_btn1 banner_style_2"
                                  // href="index.html"
                                  onClick={() => handleUpdateCart(bookDetail)}
                                >
                                  Add To Cart
                                </a>
                              </center>
                            </div>
                          </div>
                          <div
                            className="col-lg-1"
                            style={{
                              float: "left",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ padding: "30px" }}>
            <div
              style={{
                backgroundColor: "#F6F2E7",
                padding: "20px",
                width: "100%",
                height: "12vh",
              }}
            >
              <h3>Shipping & Refund</h3>
              <br></br>
            </div>
            <div
              style={{ backgroundColor: "#fff", padding: "50px 50px 5px 50px" }}
            >
              <b>Shipping policy</b>

              <p>
                We offer shipping services to all parts of India, even remote
                areas, and ship six days a week. Orders received after 12 p.m.
                IST on any given day are processed the next day. On Sundays and
                national holidays, we do not process orders. We also accept
                orders for supplies on demand. If you require a book
                immediately, we can deliver it to you within 24 hours for an
                additional fee. Our normal shipping time ranges between 6 and 8
                days. When delivering to a remote location, delivery times may
                vary depending on the area or location of the order. If none of
                our shipping partners deliver to your area, we can send your
                order via the India Post package. Orders delivered by India Post
                cannot be tracked, and in some situations, the parcel may take
                up to 10-15 days to arrive.
              </p>

              <b>Track your order</b>
              <p>
                Visit our delivery partner's website to follow your order using
                the tracking number supplied in your order confirmation email.
                It could take up to 12-24 hours for your tracking number to be
                updated on our website.
              </p>
              <b>Return and Exchange policy</b>

              <p>
                All orders placed with us are guaranteed 7 Day Replacement. We
                use the best packaging and shipping methods to ensure that the
                orders reach their intended destination in good condition. We do
                not take any responsibility for the goods which are damaged
                during the transit. If you have received a damaged or defective
                book, please contact us within 14 days of your order date to get
                a replacement. You can also get your order replaced once without
                any additional charge. You can cancel your order online up to 12
                hours before the book is shipped. In this case, the entire
                amount will be refunded. If the payment is made via a
                debit/credit card, the money will be refunded to the card
                itself. Once the order has been cancelled it will take 8-10
                working days to process the refund. If you paid with a DD, then
                you can send us an e-mail or call us to notify us of your bank
                number. We will make sure that your refund reaches you ASAP
              </p>
            </div>
          </div>

          <div className="row" style={{ padding: "30px" }}>
            <div
              style={{
                backgroundColor: "#F6F2E7",
                padding: "20px",
                width: "100%",
                height: "12vh",
              }}
            >
              <h3>Asian Publishers Benefits</h3>
              <br></br>
            </div>
            <div
              style={{ backgroundColor: "#fff", padding: "50px 50px 5px 50px" }}
            >
              <p>
                Asian publishers aim to help its students through all the
                regions with its simplistic and comprehensive study methods. Our
                books teach our students with the virtue of providing-
                <br></br>
                <b>• VARIETY OF EXAMPLES :</b> Each chapter of our book is
                designed to house multiple examples from different perspectives
                so that everyone can understand in accordance with their style
                of learning.
                <br></br>
                <b>• MULTIPLE LANGUAGES :</b> The content and difficult concepts
                are explained in multiple languages so that students can
                understand them with ease.
                <br></br>
                <b>• SUMMARIES :</b> Authors have incorporated comprehensive
                summaries at the end of every chapter so that students can go
                over their syllabus quickly.
                <br></br>
                <b>• STUDY RESOURCES :</b> Our books house the ever-precious
                banks of questions and resources for revision which help the
                students effectively prepare for exams.
                <br></br>
                <b>• COMPETITIVE PRICES :</b> Our books are widely and easily
                accessible at competitive market prices so that each and every
                person can make effective use of them.
                <br></br>
                <b>• COVERS ENTIRE SYLLABUS :</b> Our books are designed to
                cover the entire syllabus of the UP technical board so that our
                students need not look outside for additional resources.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <div
        className="modal fade productModal"
        id="quickViewModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="qwick-view-left">
                    <div className="quick-view-learg-img">
                      <div className="quick-view-tab-content tab-content">
                        <div className="product-main-image__item">
                          <div className="img_box_1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="qwick-view-right product-details-content quickview-content">
                    <div className="qwick-view-content">
                      <h2 className="product_title">FROM_JS</h2>
                      <div className="product-price product-info__price price-part product-details-price">
                        <span className="price-box__new">jsprice</span>
                        <span className="main">jsprice</span>
                      </div>
                      <div className="product-rating pro-details-rating-wrap">
                        <div className="quick-view-rating rating pro-details-rating">
                          FROM_JS
                        </div>
                      </div>
                      <div className="short-description product-des">
                        FROM_JS
                      </div>
                      <form id="add-item-qv" action="" method="post">
                        <div className="quick-view-select variants select-option-part" />
                        <div className="quickview-plus-minus">
                          <div className="cart-plus-minus">
                            <input
                              type="text"
                              defaultValue={0o1}
                              name="quantity"
                              className="cart-plus-minus-box"
                            />
                          </div>
                          <div className="quickview-btn-cart">
                            <button
                              type="submit"
                              className="addtocartqv theme-default-button"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="sli sli-close" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="quickViewModal_info" style={{ display: "none" }}>
        <div className="button">Add to cart</div>
        <div className="button_added">Added</div>
        <div className="button_error">Limit Products</div>
        <div className="button_wait">Wait..</div>
      </div>
    </>
  );
}

export default Shop;
