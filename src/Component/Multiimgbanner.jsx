import React from "react";

const Multiimgbanner = () => {
  const imgdata = [
    "https://bellavitaorganic.com/cdn/shop/files/1_e3a8356d-1e07-4f9e-b006-463aee598ee0.jpg?v=1698731698&width=300",
    "https://bellavitaorganic.com/cdn/shop/files/2_2453e5e3-fecb-46e3-ad9e-00bea4baa462.jpg?v=1698731719&width=300",
    "https://bellavitaorganic.com/cdn/shop/files/3_d271220e-4353-4fea-a475-33e62f47e1dc.jpg?v=1716359925&width=300",
    "https://bellavitaorganic.com/cdn/shop/files/4_68a3c022-75df-4304-8d47-6a1671886316.jpg?v=1698731754&width=300",
    "https://bellavitaorganic.com/cdn/shop/files/5_b43e7ec7-8e4b-464f-b5a4-78854aa116d8.jpg?v=1698731774&width=300",
  ];
  return (
    <div className="flex flex-row  justify-center w-[100vw]">
      {imgdata.map((ele) => (
        <img src={ele} />
      ))}
    </div>
  );
};

export default Multiimgbanner;
