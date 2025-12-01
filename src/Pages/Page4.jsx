import React from "react";
import reactImg from "../assets/reactjs.svg";
import dataImg from "../assets/database.svg";

function Page4() {
  const cards = [
    { image: reactImg, title: "Intermediate" },
    { image: dataImg, title: "Database" },
    { image: reactImg, title: "Frontend" },
    { image: dataImg, title: "Backend" },
    { image: reactImg, title: "React" },
    { image: dataImg, title: "SQL" },
    { image: reactImg, title: "JavaScript" },
    { image: dataImg, title: "MongoDB" },
    { image: reactImg, title: "APIs" },
  ];

  return (
    <div className="p-10 bg-gray-100 flex flex-col justify-center items-center ">

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-black text-center mb-10 p-10">
        Learn everything you need to know
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">

        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col 
                       justify-center items-center text-center 
                       w-60 h-60 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-lg font-semibold">{card.title}</h2>
          </div>
        ))}

      </div>

      {/* Button */}
      <button className="mt-10 bg-white shadow-md rounded-xl hover:bg-green-800
                         w-48 h-14 flex justify-center items-center
                         font-semibold text-black transition-transform duration-300 hover:scale-110">
        Explore Curriculum
      </button>

    </div>
  );
}

export default Page4;
