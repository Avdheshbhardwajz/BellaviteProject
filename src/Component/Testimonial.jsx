import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const Testimonial = () => {
  const testimonialData = [
    {
      profile:
        "https://bellavitaorganic.com/cdn/shop/files/t-3.jpg?v=1693986128&width=300",
      rating: "5 Star",
      review:
        "Bought it cause it was so affordable but I never thought the fragrance would be this good as well.",
      name: "pulkit bangla",
    },
    {
      profile:
        "https://bellavitaorganic.com/cdn/shop/files/t-4.jpg?v=1693986143&width=300",
      rating: "5 Star",
      review:
        "I have a very different taste when it comes to fragrance, I tried BELLAVITA  and Oh My God I have only been using CEO Women now.",
      name: "Avantika",
    },
    {
      profile:
        "https://bellavitaorganic.com/cdn/shop/files/t-5.jpg?v=1693986173&width=300",
      rating: "5 Star",
      review:
        "I always buy perfumes based on notes and BELLAVITA explain how different notes make you feel so well!",
      name: "Gunveet",
    },
    {
      profile:
        "https://bellavitaorganic.com/cdn/shop/files/t-1.jpg?v=1693986080&width=300",
      rating: "4 Star",
      review:
        "BELLAVITA has raised the bar for the perfume industry, Such good quality at very affordable price",
      name: "Sanna Thakur",
    },
    {
      profile:
        "https://bellavitaorganic.com/cdn/shop/files/t-2.jpg?v=1693986111&width=300",
      rating: "4 Star",
      review:
        "One of the best luxury perfumes and that too at an affordable price",
      name: "Simran Narang",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {testimonialData.map((ele, index) => (
        <SwiperSlide>
          <div
            key={index}
            className="font-poppins text-center flex flex-col items-center m-10 leading-10"
          >
            <img src={ele.profile} className="max-w-[200px]" />
            <p className="text-md mb-3">{ele.rating}</p>
            <h3 className="text-xl mb-3">{ele.review}</h3>
            <h2 className="text-lg mb-3">{ele.name}</h2>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
export default Testimonial;
