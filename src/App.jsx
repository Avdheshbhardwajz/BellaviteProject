import React from "react";
import Header from "./Component/Header";
import SimpleSlider from "./Component/Simpleslider";
import SimpleBanner from "./Component/SimpleBanner";
import Allprod from "./Component/Allprod";
import Category from "./Component/Category";
import Singleprodslider from "./Component/Singleprodslider";
import Imgwithhover from "./Component/Imgwithhover";
import Crazydeals from "./Component/Crazydeals";
import VideoBanner from "./Component/VideoBanner";
import Whyus from "./Component/Whyus";
import Marqquee from "./Component/Marqquee";
import Multiimgbanner from "./Component/Multiimgbanner";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="poppins">
      <Header />
      <SimpleSlider />
      <SimpleBanner
        url={
          "https://bellavitaorganic.com/cdn/shop/files/Instruction-Banner-Desktop_bogo.jpg?v=1716895062&width=1920"
        }
      />
      <Allprod />
      <SimpleBanner
        url={
          "https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2_0c5e6f28-423b-4dda-88be-6df859e2ccf6.jpg?v=1714633510&width=1920"
        }
      />
      <Category />
      <div className="flex flex-row justify-center gap-12 p-6 flex-wrap">
        <Imgwithhover />
        <Singleprodslider />
      </div>
      <Crazydeals />
      <VideoBanner />
      <Whyus />
      <SimpleBanner
        url={
          "https://bellavitaorganic.com/cdn/shop/files/download-the-app-banner-desktop.jpg?v=1715262335&width=1920"
        }
      />
      <SimpleBanner
        url={
          "https://bellavitaorganic.com/cdn/shop/files/desktop_banner.png?v=1715928058&width=1600"
        }
      />
      <Testimonial />
      <Multiimgbanner />
      <Marqquee />;
      <Footer />
    </div>
  );
};

export default App;
