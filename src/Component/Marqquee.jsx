import React from "react";
import Marqueecomp from "./Marqueecomp";
import Marquee from "react-fast-marquee";

const Marqquee = () => {
  const logo = [
    "https://bellavitaorganic.com/cdn/shop/files/BW_460x460_dcd6c999-6863-4ea2-ae4a-5621f5a51507.png?height=160&v=1717310549",
    "https://bellavitaorganic.com/cdn/shop/files/HT_4a741228-3740-4f84-97bc-3c093ceec75a.jpg?height=160&v=1716360141",
    "https://bellavitaorganic.com/cdn/shop/files/Elle_480x_db18e8ef-2f25-4299-9c39-73af4c300969.jpg?height=160&v=1716878217",
    "https://bellavitaorganic.com/cdn/shop/files/Ani_480x_14446b4e-c91a-46df-a133-a95092fe484e.jpg?height=160&v=1716878217",
    "https://bellavitaorganic.com/cdn/shop/files/IDiva_480x_1617c636-c0ed-4ed2-bb06-36e1906728ff.jpg?height=160&v=1716878216",
    "https://bellavitaorganic.com/cdn/shop/files/Pinkvilla_480x_a664ac7e-bd4f-45ae-b43a-b5ce25e0b530.jpg?height=160&v=1716878216",
  ];
  return (
    <Marquee pauseOnHover={true}>
      {logo.map((ele) => (
        <Marqueecomp link={ele} />
      ))}
    </Marquee>
  );
};

export default Marqquee;
