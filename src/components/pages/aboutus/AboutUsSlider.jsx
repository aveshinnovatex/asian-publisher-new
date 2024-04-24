import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "../../../Images/AboutUs.png";

const AboutUsSlider = ({ slider, type = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <Slider {...settings}>
          {slider.map((item, index) => {
            return <CarousalItem key={index} image={item} type={type} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

const CarousalItem = ({ image }) => {
  return (
    <>
      <img src={image} className="Knowmorestyle" />
    </>
  );
};

export default AboutUsSlider;
