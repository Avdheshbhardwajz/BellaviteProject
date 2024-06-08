import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {
  var settings = {
    dots: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };

  const links = [
    "BUY 1 GET 1 FREE",
    "CRAZY DEALS",
    "SHOP ALL",
    "BESTSELLERS",
    "PERFUMES",
    "BATH & BODY ",
    "NEW ARRIVALS ",
    "SKINCARE",
    "GIFTING",
    "LOG IN",
  ];
  return (
    <nav>
      <Slider
        className="text-md bg-black text-white text-center p-2 "
        {...settings}
      >
        <div>
          <h3>BellaVita's Birthday is here! Buy 1 Get 1 FREE SITEWIDE* </h3>
        </div>
        <div>
          <h3>Buy 1 Get 1 FREE SITEWIDE*</h3>
        </div>
        <div>
          <h3>🎁 FREE Gift on all PREPAID Orders</h3>
        </div>
        <div>
          <h3>Get any 3 100ml PERFUMES for just ₹1298</h3>
        </div>
        <div>
          <h3>Any 3 100ml PERFUMES for ₹1298</h3>
        </div>
        <div>
          <h3>Get any 2 100ml PERFUMES for just ₹949</h3>
        </div>
        <div>
          <h3>Any 2 100ml PERFUMES for ₹949</h3>
        </div>
      </Slider>
      <div className="flex flex-row  justify-around p-4 items-center align-middle font-poppins">
        <div className="flex flex-row gap-2 border-b-white border-b-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="text-sm bg-transparent text-black focus:border-none focus:outline-none "
          />
        </div>
        <h1 className="text-3xl font-poppins font-medium">Bellavita</h1>
        <div className="flex flex-row gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      {/* upper header side will end here  */}

      {/* FOR ROUTING  */}
      <div className="flex flex-row gap-7 justify-center font-poppins p-4 text-lg">
        {links.map((link) => (
          <a>{link}</a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
