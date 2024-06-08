import React from "react";

const VideoBanner = () => {
  return (
    <div className="relative  overflow-hidden object-cover max-w-[1200px]  text-center min-h-[350px] ml-auto mr-auto flex items-center content-center justify-center  ">
      <video
        autoPlay
        loop
        muted
        className="absolute overflow-hidden object-cover"
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4"
          type="video/mp4"
        />
        Your browser does not support video tag
      </video>
      <div className="relative  text-center font-poppins p-6 ">
        <h1 className="text-3xl mb-2 text-white">
          DISCOVER THE ART OF PERFUMERY
        </h1>
        <p className="text-md mb-2 text-white">
          {" "}
          Our formulations have proven efficacy, contain certified <br />{" "}
          ingredients only and are 100% cruelty free{" "}
        </p>
        <button className=" bg-white text-black pt-2 pb-2 pl-12 pr-12">
          {" "}
          Click Me
        </button>
      </div>
    </div>
  );
};

export default VideoBanner;
