import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { REACT_APP_URL } from "../../../config/config";
const BookSlider = ({ slider, type = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <Slider {...settings}>
          {slider.map((item, index) => (
            <CarousalItem key={index} {...item} type={type} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CarousalItem = ({ image, name, iSBN, authors, mRP, type }) => {
  // const img = `${REACT_APP_URL}/Image/${image}`;
  return (
    <>
      <center>
        <div className="book">
          <div
            className="book-cover"
            //  style={{ backgroundImage: `url(${img})` }}
            style={{
              // backgroundImage: `url(${img})`,
              backgroundImage: `url('https://api.asianpublisher.in/Image/2331. Workshop Technology Hindi K.K. Gupta (EV).jpg')`,
            }}
          >
            {/* <img
              className="book-cover"
              src={`${REACT_APP_URL}/Image/${book.image}`}
              alt="Book Cover"
              style={{
                width: "100px",
                height: "300px",
              }}
            /> */}
            <div className="effect"></div>
            <div className="light"></div>
          </div>
          <div className="book-inside"></div>
        </div>
      </center>

      <p
        style={{
          "font-size": "15px",
          "-webkit-text-align": "center",
          "text-align": "center",
          "margin-top": "15px",
          "font-weight": "700",
        }}
      >
        <span style={{ "font-size": "12px", "font-weight": "500" }}>
          {/* ISBN No. 0987654321 */}
          ISBN No. {iSBN}
        </span>
        <br />
        {/* Computer Programming using Python */}
        {name}
        <br />
        {authors && authors.length > 0 && (
          <a href="#" className="remove_href">
            {authors.map((author, index) => (
              <span
                key={author.id}
                style={{ "font-size": "12px", "font-weight": "500" }}
              >
                {author.name}
                {index !== authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </a>
        )}
        <br />
        <span
          style={{
            color: "red",
            "font-size": "16px",
            "font-weight": "600",
          }}
        >
          Rs. {mRP}
        </span>
      </p>
    </>
    // </div>
    // </div>
    // <div class="arrivals-wrap item-wrapper">
    //   <div
    //     class="theme-products  feature-product-slider-active carsoule_arrow_style row"
    //     data-slick='{
    //                              "infinite": true,
    //                              "slidesToShow": 5,
    //                              "slidesToScroll": 1,
    //                              "rows":1,
    //                              "arrows": false,
    //                              "responsive": [
    //                              {
    //                              "breakpoint": 1800,
    //                              "settings": {
    //                              "slidesToShow": 5,
    //                              "slidesToScroll": 1
    //                              }
    //                              },
    //                              {
    //                              "breakpoint": 1200,
    //                              "settings": {
    //                              "slidesToShow": 4,
    //                              "slidesToScroll": 1
    //                              }
    //                              },
    //                              {
    //                              "breakpoint": 991,
    //                              "settings": {
    //                              "slidesToShow": 3,
    //                              "slidesToScroll": 1
    //                              }
    //                              },
    //                              {
    //                              "breakpoint": 767,
    //                              "settings": {
    //                              "slidesToShow": 2,
    //                              "slidesToScroll": 1
    //                              }
    //                              },
    //                              {
    //                              "breakpoint": 450,
    //                              "settings": {
    //                              "slidesToShow": 1,
    //                              "slidesToScroll": 1
    //                              }
    //                              }
    //                              ]
    //                              }'
    //   >
    //     <center>
    //       <div class="col-md-12" style={{ float: "left" }}>
    //         <div
    //           class="40344359665744 theme-product theme-product-action-on-hover mb-30
    //                                    theme-product-action-middle
    //                                    theme-product-countdown-bottom
    //                                    product-wrapper-class"
    //         >
    //           <div class="theme-product-inner icon_bg grid__style__2">
    //             <div class="theme-product-image-wrap product-color">
    //               <div class="theme-product-image">
    //                 <div class="theme-product-cus-tab icon_bg_img">
    //                   <a
    //                     href="products/first-love-shadows-of-nebula.html"
    //                     class="theme-product-image"
    //                     style={{ display: "block" }}
    //                   >
    //                     <img
    //                       class="popup_cart_image"
    //                       src={`${REACT_APP_URL}/Image/${image}`}
    //                       alt="First Love Shadows of Nebula"
    //                       style={{ height: "50vh" }}
    //                     />
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="theme-product-content  content__center ">
    //               <div class="theme-product-content-inner ">
    //                 <h4 class="theme-product-title popup_cart_title">
    //                   <a href="products/first-love-shadows-of-nebula.html">
    //                     {name}
    //                   </a>
    //                 </h4>
    //                 <div
    //                   class="theme-product-categories"
    //                   style={{ fontSize: "7px" }}
    //                 >
    //                   {authors && authors.length > 0 && (
    //                     <a href="#" className="remove_href">
    //                       {authors.map((author, index) => (
    //                         <span key={author.id}>
    //                           {author.name}
    //                           {index !== authors.length - 1 ? ", " : ""}
    //                         </span>
    //                       ))}
    //                     </a>
    //                   )}
    //                   {/* <a href="#" class="remove_href">John Grisham</a> */}
    //                 </div>

    //                 <div class="theme-product-price ">
    //                   <span class="new">Rs. {mRP}</span>
    //                 </div>
    //                 <div class="theme-product-ratting-wrap ">
    //                   <span class="theme-product-ratting spr-badge-caption-none">
    //                     <span
    //                       class="shopify-product-reviews-badge"
    //                       data-id="6885543608400"
    //                     ></span>
    //                   </span>
    //                 </div>
    //               </div>
    //               <div class="theme-product-action">
    //                 <ul>
    //                   <li>
    //                     <a
    //                       href="javascript:void(0);"
    //                       onclick="quiqview('first-love-shadows-of-nebula')"
    //                       data-toggle="modal"
    //                       data-target="#exampleModal"
    //                     >
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         class="ionicon"
    //                         viewBox="0 0 512 512"
    //                       >
    //                         <path
    //                           d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
    //                           fill="none"
    //                           stroke="currentColor"
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           stroke-width="32"
    //                         />
    //                         <circle
    //                           cx="256"
    //                           cy="256"
    //                           r="80"
    //                           fill="none"
    //                           stroke="currentColor"
    //                           stroke-miterlimit="10"
    //                           stroke-width="32"
    //                         />
    //                       </svg>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       class="action-wishlist tile-actions--btn flex wishlist-btn wishlist"
    //                       href="javascript: void(0)"
    //                       button-wishlist
    //                       data-product-handle="first-love-shadows-of-nebula"
    //                       data-toggle="tooltip"
    //                       data-placement="left"
    //                       title=""
    //                     >
    //                       <span class="add-wishlist">
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           class="ionicon"
    //                           viewBox="0 0 512 512"
    //                         >
    //                           <path
    //                             d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
    //                             fill="none"
    //                             stroke="currentColor"
    //                             stroke-linecap="round"
    //                             stroke-linejoin="round"
    //                             stroke-width="32"
    //                           />
    //                         </svg>
    //                       </span>
    //                       <span class="loading-wishlist">
    //                         <svg
    //                           class="loader"
    //                           id="Layer_1"
    //                           enable-background="new 0 0 24 24"
    //                           height="512"
    //                           viewBox="0 0 24 24"
    //                           width="512"
    //                           xmlns="http://www.w3.org/2000/svg"
    //                         >
    //                           <g>
    //                             <path d="m12 7c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
    //                           </g>
    //                           <g>
    //                             <path d="m16.3 8.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.2-2.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.2 2.1c-.2.2-.5.3-.7.3z" />
    //                           </g>
    //                           <g>
    //                             <path d="m21 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
    //                           </g>
    //                           <g>
    //                             <path d="m18.4 19.4c-.3 0-.5-.1-.7-.3l-2.2-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2z" />
    //                           </g>
    //                           <g>
    //                             <path d="m12 22c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z" />
    //                           </g>
    //                           <g>
    //                             <path d="m5.6 19.4c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.1-2.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.1 2.2c-.2.2-.4.3-.7.3z" />
    //                           </g>
    //                           <g>
    //                             <path d="m6 13h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z" />
    //                           </g>
    //                           <g>
    //                             <path d="m7.8 8.8c-.3 0-.6-.1-.8-.3l-2.1-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.2 2.1c.4.4.4 1 0 1.4-.2.3-.5.4-.7.4z" />
    //                           </g>
    //                         </svg>
    //                       </span>
    //                       <span class="remove-wishlist">
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           class="ionicon"
    //                           viewBox="0 0 512 512"
    //                         >
    //                           <path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" />
    //                         </svg>
    //                       </span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="javascript:void(0);"
    //                       onclick="Shopify.addItem(40344359665744, 1); return false;"
    //                       class="theme-product-action-btn"
    //                     >
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         class="ionicon"
    //                         viewBox="0 0 512 512"
    //                       >
    //                         <path
    //                           fill="none"
    //                           stroke="currentColor"
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           stroke-width="32"
    //                           d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
    //                         />
    //                       </svg>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </center>
    //   </div>
    // </div>
  );
};

export default BookSlider;
