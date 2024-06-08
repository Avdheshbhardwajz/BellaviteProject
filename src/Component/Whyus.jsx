import React from "react";

import img37 from "../assets/svgexport-37.svg";
import img38 from "../assets/svgexport-38.svg";
import img39 from "../assets/svgexport-39.svg";
import img40 from "../assets/svgexport-40.svg";
const Whyus = () => {
  const data = [
    {
      img: img37,
      heading: "CRUELTY FREE",
      para: "Kindness in every bottle: Our commitment to cruelty-free Products.",
    },
    {
      img: img38,
      heading: "FRAGRANCE FORWARD",
      para: "Luxurious & imported perfume oils in every product.",
    },
    {
      img: img39,
      heading: "AFFORDABLE LUXURY",
      para: "Offering Premium Quality and Elegance at a Reasonable Price.",
    },
    {
      img: img40,
      heading: "GENDER NEUTRAL",
      para: "Elevate your self-care routine with bath, body and personal care for all.",
    },
  ];
  return (
    <>
      <div className=" text-center m-8">
        <h1 className="text-3xl font-poppins mb-5">Why Bellavita</h1>
        <div className="flex flex-row flex-wrap justify-center items-center content-center gap-5 ">
          {data.map((ele) => (
            <div className="text-center flex flex-col justify-center items-center p-0 ">
              <img src={ele.img} className="max-w-[100px] " />
              <h3 className="text-md font-medium">{ele.heading}</h3>
              <p className="text-sm font-light max-w-[70%]">{ele.para}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whyus;
