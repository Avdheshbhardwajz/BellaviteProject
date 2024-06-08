import React from "react";

const Category = () => {
  const categories = [
    {
      img: " https://bellavitaorganic.com/cdn/shop/files/Group_364.png?v=1716894864&width=300",
      name: "Luxury Perfume",
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/Group_366_1.png?v=1716921196&width=300",
      name: "Body Washes",
    },
    {
      img: " https://bellavitaorganic.com/cdn/shop/files/Group_366_1.png?v=1716921196&width=300",
      name: "Body Lotion",
    },
    {
      img: " https://bellavitaorganic.com/cdn/shop/files/Group_364.png?v=1716894864&width=300",
      name: "Body Deos",
    },
    {
      img: "https://bellavitaorganic.com/cdn/shop/files/Group_362.png?v=1716921196&width=300",
      name: "Gift Sets",
    },
  ];
  return (
    <div className="flex flex-row gap-3 justify-center m-4 text-xl font-poppins text-center">
      {categories.map((ele) => (
        <div>
          <img src={ele.img} /> <h3>{ele.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
