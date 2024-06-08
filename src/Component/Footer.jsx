import { info } from "autoprefixer";
import React from "react";

const Footer = () => {
  const keywords = [
    "Perfume",
    "Best perfume for men",
    "Perfume for men",
    "Vitamin C Face Wash",
    "Perfume for women",
    "Best perfume for women",
    "Perfume set for women",
    "Gift for Men",
    "Face wash for oily skin",
    "Body scrub",
    "Dark circle",
    "Perfume for girls",
    "Dark circles removal cream",
    "Acne face wash",
    "Under eye cream",
    "Gift sets for women",
    "Body wash for women",
    "Pocket perfume for men",
    "De tan face pack",
    "Pimple removal cream",
    "Lip scrub",
    "Tan removal face pack",
    "Face wash for acne",
    "Exfoliate scrub",
    "Gift set for men",
    "Coffee Body Scrub",
    "Best long lasting perfume for men",
    "Perfumes for men under 500",
    "Perfumes for women under 500",
    "Perfume gift sets",
    "Oud perfume",
    "Ceo perfume",
    "Under eye cream for dark circles",
    "Acne cream",
    "Vitamin c cream for face",
    "Body lotion for women",
    "Long lasting perfume for women",
    "Perfume gift pack for her",
    "Perfume gift pack for him",
    "Charcoal face wash",
    "Body wash for men",
    "Best shower gel for women",
    "Shower Gel for men and Women",
    "Body lotion for dry skin",
    "Body Lotion for men",
    "Body Lotion for women",
    "Shower Gel and Perfume Combo",
    "Shower Travel Kit",
    "Travel Mini Kit",
    "Birthday Gift for Women/Girls",
    "Wedding Gifts for Couples",
    "Gifts for Men Under 500",
    "Gifts for Women Under 500",
    "Birthday Gift for Men/ Boys",
    "Corporate Gifts",
  ];

  const bestseller = [
    "Ultimate Perfume Box",
    "Perfume Gift Set For Men",
    "Perfume Gift Set For Women",
    "Under Eye Cream for Dark Circles",
    "Perfume For Men",
    "Perfume For Women",
    "Unisex Perfume",
  ];
  const information = [
    "Blogs",
    "Newsroom",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund and Return",
    "Shipping Policy",
    "Bulk Order - GST Invoice",
  ];
  const support = [
    "About Us",
    "Contact Us",
    "Order Tracking",
    "All Products",
    "FAQ",
    "Sitemap",
  ];
  const contactUs = [
    "Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India",
    "shop@bellavitaorganic.com",
    "+91-9311732440",
    "Timing: 10:00 AM to 7:00 PM, Monday to Sunday",
  ];

  return (
    <div className=" bg-slate-400 text-white font-poppins pt-5 pb-5 pl-5 pr-5">
      <div className="  flex flex-row justify-center gap-5 items-center content-center flex-wrap mb-5 ">
        <div className="flex flex-col gap-5 justify-center ">
          <h3>Best Seller</h3>
          {bestseller.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
        <div className="flex flex-col gap-5 justify-center ">
          <h3>Information</h3>
          {information.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
        <div className="flex flex-col gap-5 justify-center ">
          <h3>Support</h3>
          {support.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
        <div className="flex flex-col gap-5 justify-center ">
          <h3>Contact Us</h3>
          {contactUs.map((ele) => (
            <p>{ele}</p>
          ))}
        </div>
        <div className="flex flex-col gap-5 justify-center ">
          <h3>Exclusive</h3>
          {}
        </div>
      </div>
      {/* footer block will be here */}
      <div>
        <h3>MOST SEARCHED KEYWORDS</h3>
        <div className="flex flex-row flex-wrap gap-5 ">
          {keywords.map((ele) => (
            <p>{ele} |</p>
          ))}
        </div>
      </div>
      {/* all links will be here */}
      <p>© 2024, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</p>
    </div>
  );
};

export default Footer;
