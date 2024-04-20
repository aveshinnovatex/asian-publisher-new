import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../common/header/HeaderOld";
import Footer from "../../common/footer/FooterOld";
import "./Shop.css";
import { fetchBooks } from "../../../redux/slices/bookSlice";
import { fetchAuthors } from "../../../redux/slices/authorSlice";
import { fetchCourses } from "../../../redux/slices/courseSlice";
import { fetchSemesters } from "../../../redux/slices/semesterSlice";
import { addTocart } from "../../../redux/slices/cartSlice";
import { REACT_APP_URL } from "../../../config/config";
// import MultiCheckGroup from "../../common/MultiCheckGroup";
import Spinner from "../../common/Spinner";
import Checkbox from "@mui/material/Checkbox";

function Shop() {
  const { loading, books } = useSelector((state) => state.book);
  const { loading: coursesLoading, courses } = useSelector(
    (state) => state.course
  );
  const { loading: semestersLoading, semesters } = useSelector(
    (state) => state.semester
  );
  const { loading: authorsLoading, authors } = useSelector(
    (state) => state.author
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const history = useLocation();
  const [allBooks, setAllBooks] = useState([]);
  const [filterLoading, setFilterLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [allAuthors, setAllAuthors] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allSemesters, setAllSemesters] = useState([]);
  const [filterAuthors, setFilterAuthors] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  const [filterSemesters, setFilterSemesters] = useState([]);
  const [orderFilter, setOrderFilter] = useState("");
  const author = history.state;
  useMemo(() => {
    if (author?.id !== undefined && author?.id !== "") {
      setFilterAuthors((prev) => [...prev, author?.id]);
    }
  }, [author?.id]);

  useEffect(() => {
    dispatch(
      fetchBooks({ filterAuthors, filterCourses, filterSemesters, orderFilter })
    );
  }, [
    dispatch,
    filterSemesters,
    filterCourses,
    filterAuthors,
    orderFilter,
    checked,
  ]);
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchSemesters());
  }, [dispatch]);

  useEffect(() => {
    if (loading === "fulfilled") {
      setAllBooks(books);
      setAllAuthors(authors);
      setAllCourses(courses);
      setAllSemesters(semesters);
    }
  }, [loading]);

  function handleCart(book) {
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
      addTocart({
        product: {
          id,
          quantity: 1,
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
        },
      })
    );
  }

  function handleSort(e) {
    setOrderFilter(e.target.value);
  }
  function coursesChangeHandler(e, newVal) {
    setChecked(e.target.checked);
    if (e.target.checked) {
      if (newVal.type === "Course") {
        setFilterCourses((prev) => [...prev, newVal?.id]);
      }
    } else {
      setFilterCourses((prev) => prev.filter((id) => id !== newVal.id));
    }
  }

  function semestersChangeHandler(e, newVal) {
    setChecked(e.target.checked);
    if (e.target.checked) {
      if (newVal.type === "Semester") {
        setFilterSemesters((prev) => [...prev, newVal?.id]);
      }
    } else {
      setFilterSemesters((prev) => prev.filter((id) => id !== newVal.id));
    }
  }

  function authorsChangeHandler(e, newVal) {
    setChecked(e.target.checked);
    if (e.target.checked) {
      if (newVal.type === "Author") {
        setFilterAuthors((prev) => [...prev, newVal?.id]);
      }
    } else {
      setFilterAuthors((prev) => prev.filter((id) => id !== newVal.id));
    }
  }

  return (
    <>
      {loading === "pending" || (filterLoading && <Spinner />)}
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
                <h1 className="breadcrumbs-title">Shop</h1>
              </div>
              <nav>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="/" title="Back to the home page">
                      Home
                    </a>
                  </li>
                  <li>Shop</li>
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
            className="shop-area pt-95 pb-100 section-padding-3"
            id="section-template--14595761406032__main"
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="sidebar-wrapper shop-sidebar storefront-filter icofont">
                    <form className="filter-form" name="testform" id="myform">
                      <div className="blog-sidebar sidebar-single selected-filter-value">
                        <ul className="blog-tags"></ul>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Authors</h5>
                        <div
                          className=""
                          style={{ maxHeight: "165px", overflow: "auto" }}
                        >
                          {/* <MultiCheckGroup
                            data={allAuthors}
                            type={"Author"}
                            setStateDispatch={setFilterAuthors}
                          /> */}
                          {
                            <div style={{ height: "100%" }}>
                              {allAuthors?.length > 0 &&
                                allAuthors.map((item) => (
                                  <>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "0 10px 0 10px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>
                                          <Checkbox
                                            onChange={(e) =>
                                              authorsChangeHandler(e, item)
                                            }
                                          />
                                        </div>
                                        <div>{item?.name} </div>
                                      </div>
                                    </div>
                                  </>
                                ))}
                            </div>
                          }
                        </div>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Semester</h5>
                        <div
                          className=""
                          style={{ maxHeight: "165px", overflow: "auto" }}
                        >
                          {/* <MultiCheckGroup
                            data={allSemesters}
                            setStateDispatch={setFilterSemesters}
                          /> */}
                          {
                            <div style={{ height: "100%" }}>
                              {allSemesters?.length > 0 &&
                                allSemesters.map((item) => (
                                  <>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "0 10px 0 10px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>
                                          <Checkbox
                                            onChange={(e) =>
                                              semestersChangeHandler(e, item)
                                            }
                                          />
                                        </div>
                                        <div>{item?.name} </div>
                                      </div>
                                    </div>
                                  </>
                                ))}
                            </div>
                          }
                        </div>
                      </div>
                      <div className="blog-sidebar sidebar-single widget-collapse sidebar-widget">
                        <h5 className="title">Categories</h5>
                        <div style={{ maxHeight: "165px", overflow: "auto" }}>
                          {/* <MultiCheckGroup
                            data={allCourses}
                            setStateDispatch={setFilterCourses}
                          /> */}
                          {
                            <div style={{ height: "100%" }}>
                              {allCourses?.length > 0 &&
                                allCourses.map((item) => (
                                  <>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "0 10px 0 10px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>
                                          <Checkbox
                                            onChange={(e) =>
                                              coursesChangeHandler(e, item)
                                            }
                                          />
                                        </div>
                                        <div>{item?.name} </div>
                                      </div>
                                    </div>
                                  </>
                                ))}
                            </div>
                          }
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="shop-top-bar">
                    <div className="select-shoing-wrap">
                      <div className="shop-select d-flex">
                        <label htmlFor="SortBy">Sort by :</label>
                        <select onChange={handleSort} name="SortBy" id="SortBy">
                          <option value="manual">Featured</option>
                          <option value="titleAscending">
                            Alphabetically, A-Z
                          </option>
                          <option value="titleDescending">
                            Alphabetically, Z-A
                          </option>
                          <option value="priceAscending">
                            Price, low to high
                          </option>
                          <option value="priceDescending">
                            Price, high to low
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="shop-bottom-area mt-35">
                    <div className="tab-content jump">
                      <div>
                        <div className="row theme-products ">
                          {allBooks &&
                            allBooks.length > 0 &&
                            allBooks.map((book, index) => (
                              <div
                                key={index}
                                className="col-xl-4 col-lg-4 
                                col-md-4 col-sm-6 
                                col-12"
                              >
                                <div
                                  className="40344367005776 theme-product theme-product-action-on-hover mb-30 
       theme-product-action-middle      
       theme-product-countdown-bottom
       product-wrapper-class"
                                >
                                  <div className="theme-product-inner icon_bg grid__style__2">
                                    <div className="theme-product-image-wrap product-color">
                                      <div className="theme-product-image">
                                        <div className="theme-product-cus-tab icon_bg_img">
                                          <a className="theme-product-image">
                                            <center>
                                              <img
                                                className="popup_cart_image"
                                                src={`${REACT_APP_URL}/Image/${book.image}`}
                                                alt="Chronicles of Celestial Realms"
                                                style={{
                                                  height: "60vh",
                                                  width: "100vw",
                                                }}
                                                onClick={() => {
                                                  navigate(
                                                    `/BookDetails/${book.id}`
                                                  );
                                                }}
                                              />
                                              <button
                                                onClick={() => handleCart(book)}
                                              >
                                                Add to Cart
                                              </button>
                                            </center>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="theme-product-content  content__center ">
                                      <div className="theme-product-content-inner ">
                                        <h4 className="theme-product-title popup_cart_title">
                                          <a href="../products/chronicles-of-celestial-realms.html">
                                            {book.name}{" "}
                                          </a>
                                        </h4>
                                        <div
                                          className="theme-product-categories "
                                          style={{ fontSize: "7px" }}
                                        >
                                          <a href="#" className="remove_href">
                                            {book.authors.map(
                                              (author, index) => (
                                                <span key={author.id}>
                                                  {author.name}
                                                  {index !==
                                                  book.authors.length - 1
                                                    ? ", "
                                                    : ""}
                                                </span>
                                              )
                                            )}{" "}
                                          </a>
                                        </div>
                                        <div className="theme-product-price ">
                                          <span className="new">
                                            Rs. {book.mRP}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="theme-product-action">
                                        <ul>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="quiqview('chronicles-of-celestial-realms')"
                                              data-toggle="modal"
                                              data-target="#exampleModal"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                />
                                                <circle
                                                  cx={256}
                                                  cy={256}
                                                  r={80}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeMiterlimit={10}
                                                  strokeWidth={32}
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
                                              href="javascript: void(0)"
                                              button-wishlist=""
                                              data-product-handle="chronicles-of-celestial-realms"
                                              data-toggle="tooltip"
                                              data-placement="left"
                                              title=""
                                            >
                                              <span className="add-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path
                                                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={32}
                                                  />
                                                </svg>
                                              </span>
                                              <span className="loading-wishlist">
                                                <svg
                                                  className="loader"
                                                  id="Layer_1"
                                                  enableBackground="new 0 0 24 24"
                                                  height={512}
                                                  viewBox="0 0 24 24"
                                                  width={512}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <g>
                                                    <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
                                                  </g>
                                                  <g>
                                                    <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
                                                  </g>
                                                  <g>
                                                    <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
                                                  </g>
                                                  <g>
                                                    <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
                                                  </g>
                                                </svg>
                                              </span>
                                              <span className="remove-wishlist">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="ionicon"
                                                  viewBox="0 0 512 512"
                                                >
                                                  <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
                                                </svg>
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="javascript:void(0);"
                                              onclick="Shopify.addItem(40344367005776, 1); return false;"
                                              className="theme-product-action-btn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ionicon"
                                                viewBox="0 0 512 512"
                                              >
                                                <path
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={32}
                                                  d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
