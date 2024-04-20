import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../redux/slices/bookSlice";
import "./Home.css";
import { REACT_APP_URL } from "../../../config/config";
import HomeHeader from "../../common/header/Home/HomeHeader";
import Footer from "../../common/footer/FooterOld";
import LogoSlider from "../../common/slider/LogoSlider";
import BookSlider from "../../common/slider/BookSlider";
function Home() {
  const slider = [
    "Images/Logo/1.jpg",
    "Images/Logo/11.png",
    "Images/Logo/2.jpg",
    "Images/Logo/22.png",
    "Images/Logo/3.jpg",
    "Images/Logo/4.jpg",
    "Images/Logo/44.png",
    "Images/Logo/5.jpg",
    "Images/Logo/55.png",
    "Images/Logo/6.jpg",
    "Images/Logo/66.png",
  ];

  const { loading, books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  useEffect(() => {
    if (loading === "fulfilled") {
      setAllBooks(books);
    }
  }, [loading]);

  return (
    <>
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
      <div id="shopify-section-header" className="shopify-section"></div>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <HomeHeader />
        <div className="mobile-off-canvas-active">
          <a className="mobile-aside-close">
            <i className="sli sli-close" />
          </a>
          <div className="header-mobile-aside-wrap">
            <div className="mobile-search">
              <form
                className="search-form"
                action="#"
                method="get"
                role="search"
              >
                <input
                  type="search"
                  name="q"
                  defaultValue=""
                  placeholder="I'm looking for…"
                />
                <button className="button-search" type="submit">
                  <i className="sli sli-magnifier" />
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap">
              <div className="mobile-navigation">
                <nav>
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children">
                      <a href="/">Home</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index501f.html?preview_theme_id=122477707344">
                            Home Demo v1
                          </a>
                        </li>
                        <li>
                          <a href="index2c6b.html?preview_theme_id=122478461008">
                            Home Demo v2
                          </a>
                        </li>
                        <li>
                          <a href="index712d.html?preview_theme_id=122478493776">
                            Home Demo v3
                          </a>
                        </li>
                        <li>
                          <a href="index3b70.html?preview_theme_id=122479902800">
                            Home Demo v4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/shop">Shop</a>
                      <ul className="dropdown">
                        <li className="mobile_img_menu">
                          <a href="collections/featured-books.html">
                            <img
                              src="../../Assets/shop/collections/p3f10c.png?v=1698470305"
                              alt="Featured Books"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/featured-books.html" title="">
                              Featured Books
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="collections/best-sellers.html">
                            <img
                              src="Assets/shop/collections/2d8ec.png?v=1698470765"
                              alt="Best Sellers"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/best-sellers.html" title="">
                              Best Sellers
                            </a>{" "}
                          </span>
                        </li>
                        <li className="mobile_img_menu">
                          <a href="collections/most-viewed.html">
                            <img
                              src="Assets/shop/collections/p880c1.png?v=1698470737"
                              alt="Most Viewed"
                              loading="lazy"
                            />
                          </a>
                          <span>
                            <a href="collections/most-viewed.html" title="">
                              Most Viewed
                            </a>{" "}
                          </span>
                        </li>
                        <li className="m_mega-menu-li">
                          <a href="collections.html">All Collections</a>
                          <ul className="dropdown">
                            <li>
                              <a href="collections/featured-books.html">
                                Romance
                              </a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">
                                History
                              </a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">Comedy</a>
                            </li>
                            <li>
                              <a href="collections/most-viewed.html">Fiction</a>
                            </li>
                            <li>
                              <a href="collections/best-sellers.html">
                                Adventure
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blogs/news.html">Blog</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/author">Author</a>
                        </li>
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact us</a>
                        </li>
                        <li>
                          <a href="pages/faq.html">Faq Page</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mobile-curr-lang-wrap">
              <div className="single-mobile-curr-lang">
                <a className="mobile-account-active remove_href" href="#">
                  Account <i className="sli sli-arrow-down" />
                </a>
                <div className="lang-curr-dropdown account-dropdown-active">
                  <ul>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Create Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-overlay" />
        <video autoPlay="" muted="" loop="" style={{ width: "100%" }}>
          <source src="Images/HomeVideo.mp4" type="video/mp4" />
        </video>
        <center>
          <div className="welcome-text">
            <h1
              style={{
                color: "#fff",
                fontWeight: 600,
                letterSpacing: 10,
                textTransform: "uppercase",
                fontSize: 50,
              }}
            >
              Asian Publishers
            </h1>
            <p style={{ color: "#fff", letterSpacing: 2, fontSize: 20 }}>
              Asian Publishers is your life long Learning Partner. We have
              empowered the growth of Students,Teachers, &amp; Professionals
              since 1981.
            </p>
            {/* <div class="show-more-btn_title"> */}
            <a
              className="ban_btn1 banner_style_2"
              href="/shop"
              style={{ backgroundColor: "#DD321E !important" }}
            >
              Shop Now
            </a>
            {/* </div> */}
          </div>
        </center>
      </div>
      <main>
        <div
          id="shopify-section-template--14595761504336__a30e2f27-f19c-4ea6-9e6c-e0862c20c3dc"
          className="shopify-section"
        >
          <div
            className="feature-area"
            id="section-template--14595761504336__a30e2f27-f19c-4ea6-9e6c-e0862c20c3dc"
          >
            <div className="container default ">
              <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-credit-card"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Easy Payment</h4>
                      <p style={{ color: "#000000" }}>
                        Have 100% Secure Payments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-fast-delivery"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Free Delivery</h4>
                      <p style={{ color: "#000000" }}>Order over $300 More</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                  <div
                    className="single-feature mb-40"
                    style={{ background: "#eee" }}
                  >
                    <div className="feature-icon">
                      <i
                        style={{ color: "#000000" }}
                        className="icofont-read-book"
                      />
                    </div>
                    <div className="feature-content">
                      <h4 style={{ color: "#000000" }}>Availabley</h4>
                      <p style={{ color: "#000000" }}>
                        6 Million Books Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761569872__main"
          className="shopify-section"
          style={{ backgroundColor: "#FAF4EB" }}
        >
          <div
            className="about-story-area"
            id="section-template--14595761569872__main"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="story-img">
                    <div className="ab-wrapper-4 p-relative">
                      <div className="ab-right-img">
                        <img
                          src="../Assets/shop/files/libraryc279.png?v=1698129435"
                          alt=""
                        />
                      </div>
                      <div className="tm-deg-left-meta">
                        <h3>
                          Good Experience <br /> In Last{" "}
                        </h3>
                        <h4>10</h4>
                        <h5>Years</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="story-details">
                    <div className="story-details-top">
                      <h2>
                        Since 1987, We have established ourselves with a strong
                        reputation.
                      </h2>
                    </div>
                    <div className="story-details-bottom">
                      <h4>Win best Book Shop Award At 2023.</h4>
                      <p>
                        Accepting the award visionary founder expressed
                        gratitude for the team's dedication and the patronage of
                        discerning clients who appreciate the finer things in
                        life. This win marks a milestone in journey, solidifying
                        its position as a trailblazer in the realm of exquisite
                        adornments.
                      </p>
                    </div>
                    <a className="ban_btn1 banner_style_2" href="index.html">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
          className="shopify-section"
          style={{ paddingTop: "20px" }}
        >
          <div
            className="product-area pb-50 pt-30 feature_deal_collection common_slick_slider"
            id="section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
            data-section="Feature_Collection"
          >
            <div className="container default " style={{ maxWidth: "1300px" }}>
              <div className="section-title text-left pb-30  title_button_show ">
                <h2>Featured Books</h2>
                <div className="deal_count_area_wrap show-more-btn_title">
                  <a
                    className="ban_btn1 banner_style_2"
                    href="/shop"
                    style={{ backgroundColor: "#DD321E !important" }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div
                className=" container-fluid product-menu-banner-wrapper row "
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <div class="col-md-12">
                  {allBooks && allBooks.length > 0 && (
                    <BookSlider slider={allBooks} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__f23eabeb-498a-423f-9f12-647d250a1110"
          className="shopify-section"
        >
          <div
            className="custom-content"
            id="section-template--14595761504336__f23eabeb-498a-423f-9f12-647d250a1110"
          >
            <div className="container default ">
              <div className="row custom-content-align">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="html-content">
                    <div className="html-content-class">
                      <h4 className="text-1"> We Are</h4>
                      <h2>The largest Book Publisher on the planet</h2>
                      <span className="cstm_ul_li">
                        <ul className="trx_addons_list_dot text_link2">
                          <li style={{ color: "#000" }}>Civil Engineering</li>
                          <li style={{ color: "#000" }}>
                            Electrical Engineering
                          </li>
                          <li style={{ color: "#000" }}>
                            Mechanical Engineering
                          </li>
                        </ul>
                        <ul className="trx_addons_list_dot text_link2">
                          <li style={{ color: "#000" }}>
                            Electronics Engineering
                          </li>
                          <li style={{ color: "#000" }}>
                            Computer Science Engineering
                          </li>
                          <li style={{ color: "#000" }}>
                            Information Technology
                          </li>
                        </ul>
                      </span>
                      <a className="btn_main" href="collections/all.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="image-content">
                    <img
                      src="Assets/shop/files/sthm6c13.png?v=1697959738"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
          className="shopify-section"
        >
          <div
            className="product-area pb-50 pt-20 feature_deal_collection common_slick_slider"
            id="section-template--14595761504336__480bb6da-bf95-4066-9784-92e5f4a7ecb0"
            data-section="Feature_Collection"
          >
            <div className="container default " style={{ maxWidth: "1300px" }}>
              <div className="section-title text-left pb-30  title_button_show ">
                <h2>Our Books</h2>
                <div className="deal_count_area_wrap show-more-btn_title">
                  <a
                    className="ban_btn1 banner_style_2"
                    href="/shop"
                    style={{ backgroundColor: "#DD321E !important" }}
                  >
                    View All Books
                  </a>
                </div>
              </div>
              <div
                className=" container-fluid product-menu-banner-wrapper row "
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <div class="col-md-12">
                  {allBooks && allBooks.length > 0 && (
                    <BookSlider slider={allBooks} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="shopify-section-template--14595761504336__bc7a5bd5-6193-47a8-9a53-156c9db8ef14"
          className="shopify-section"
        >
          {/*====================  brand logo slider area ====================*/}
          <div
            className="brand-logo-slider-area mb-40 common_slick_slider"
            id="section-template--14595761504336__bc7a5bd5-6193-47a8-9a53-156c9db8ef14"
            data-section="BrandSlider"
          >
            <div className="container default ">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <LogoSlider slider={slider} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="shopify-section-template--14595761504336__16335890543c7ff7c6"
          className="shopify-section"
        >
          <div
            className="blog-area common_slick_slider"
            id="section-template--14595761504336__16335890543c7ff7c6"
            data-section="Latest_Blog"
          >
            <div className="container default ">
              <div className="section-title text-left  title_button_show   pb-40 pt-20">
                <h2>Our Catagories</h2>
                <div className="show-more-btn_title">
                  <a className="ban_btn1 banner_style_2" href="blogs/news.html">
                    Shop Now
                  </a>
                </div>
              </div>
              <div
                className=" blog-slider-active carsoule_arrow_style row"
                data-slick='{
                  "infinite": true,
                  "slidesToShow": 3,
                  "slidesToScroll": 1,
                  "arrows": false,
                  "responsive": [{
                  "breakpoint": 1600,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 1400,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 1367,
                  "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 767,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 458,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  },
                  {
                  "breakpoint": 349,
                  "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                  }
                  }
                  ]
                  }'
              >
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/miracle-morning-with-book-store-shopify.html">
                        <img
                          src="Images/CivilEngineering.png"
                          alt="Miracle morning with Book shopify"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                 <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                 <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                              </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Civil Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/best-book-store-shopify-theme-ever.html">
                        <img
                          src="Images/ElectricalEngineering.png"
                          alt="Best Book store shopify theme ever"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Electrical Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/top-5-book-for-world-summit-2023.html">
                        <img
                          src="Images/MechanicalEngineering.png"
                          alt="Top 5  Book  for World Summit 2023"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Mechanical Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/a-beautiful-morning-with-my-baby-book.html">
                        <img
                          src="Images/ElectronicsEngineering.png"
                          alt="A Beautiful Morning with my baby book"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Electronics Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/top-10-books-to-make-it-a-great-year.html">
                        <img
                          src="Images/ComputerScienceEngineering.png"
                          alt="Top 10 Books to Make It a Great Year"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Computer Science Engineering</a>
                        </h3>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="blog-wrap mb-40 text-center">
                    <div className="blog-img mb-25">
                      <a href="blogs/news/novels-changed-our-history.html">
                        <img
                          src="Images/InformationTechnology.png"
                          alt="Novels changed our history"
                        />
                      </a>
                    </div>
                    <div className="blog-content text-left">
                      <div className="blog-meta blog-mrg-border">
                        {/* <ul>
                                <li><a href="#" class="remove_href">28 October, 2023</a></li>
                                <li><a href="blogs/news/miracle-morning-with-book-store-shopify.html#comments">0 comments</a></li>
                             </ul> */}
                      </div>
                      <center>
                        <h3>
                          <a href="#">Information Technology</a>
                        </h3>
                      </center>
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
                      <form id="add-item-qv" action="#" method="post">
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
    </>
  );
}

export default Home;
