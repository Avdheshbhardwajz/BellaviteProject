import React from "react";
import Slider from "react-slick";

function Singleprodslider() {
  const topProd = [
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/2_e0b9be5c-f667-43bf-805a-3881fe628fdb.jpg?v=1714553667&width=500",
      subheading: "Eau De Parfum for Women",
      heading: "Hot Mess Perfume for Women - 100ml",
      rating: 4.8,
      reviews: "20 Reviews",
      price: 1099,
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/Ocean-01.jpg?v=1714554312&width=400",
      subheading: "Eau De Parfum for Men",
      heading: "Ocean Man - 100ml",
      rating: 4.9,
      reviews: "89 Reviews",
      price: 1099,
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/1_882dadd1-43e2-4c85-a8a6-0da791b34d8f.jpg?v=1714548090&width=400",
      subheading: "Eau De Parfum for Men",
      heading: "BLU Man - 100ml",
      rating: 4.6,
      reviews: "142 Reviews",
      price: 1099,
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container max-w-[400px]">
      <Slider {...settings}>
        {topProd.map((ele) => (
          <div className=" p-4 max-w-[400px] text-center">
            <img className="pb-4" src={ele.img} />
            <p className="font-poppins font-light text-sm">{ele.subheading}</p>
            <h5 className="font-poppins text-lg">{ele.heading}</h5>
            <div className="flex flex-row gap-3 font-poppins  justify-center">
              <p>{ele.rating}</p>
              <p>{ele.reviews}</p>
            </div>

            <p className="font-poppins font-bold">1099 Rs</p>
            <button className="bg-black text-white font-poppins pt-2 pb-2 pl-4 pr-4">
              Add To Cart
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Singleprodslider;
