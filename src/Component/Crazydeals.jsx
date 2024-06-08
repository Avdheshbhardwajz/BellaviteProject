import React from "react";

const Crazydeals = () => {
  const CrazyDeals = [
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/678-548_1_214cd2a4-34fe-4555-84bb-2857bbcde128.jpg?v=1714633588&width=500",
      heading: "Self Love Kit",
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/678-548_f5175d6d-c4ef-4955-9e1b-1077d2c6fa95.jpg?v=1715240811&width=500",
      heading: "Hello Summer Combo",
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/678-548_1_65cd0c63-30d1-47aa-b005-e253057cab14.jpg?v=1714633614&width=500",
      heading: "Bade Miya Chote Miya",
    },
  ];
  return (
    <div className="m-10">
      <h3 className="font-poppins text-3xl font-medium mb-5 text-center">
        Crazy Deals
      </h3>
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        {CrazyDeals.map((ele) => (
          <div className="text-center ">
            <img className="min-w-[200px] max-w-[300px] mb-4" src={ele.img} />
            <h3 className="font-poppins text-lg">{ele.heading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crazydeals;
