import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const bannerdata = [
    "https://bellavitaorganic.com/cdn/shop/files/1920-720_405101b2-3658-43af-97de-13b9ce909108.jpg?v=1716894295&width=1920",
    "https://bellavitaorganic.com/cdn/shop/files/1920-720_405101b2-3658-43af-97de-13b9ce909108.jpg?v=1716894295&width=1920",
    "https://bellavitaorganic.com/cdn/shop/files/1920-720_c04553ad-5894-4b05-9dc9-1f42fa6a4b6e.jpg?v=1716894724&width=1920",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {bannerdata.map((ele) => (
          <div>
            <img src={ele} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
