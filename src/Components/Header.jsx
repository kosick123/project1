import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-5 md:grid-cols-10 gap-3 p-5 justify-around shadow-sm hover:cursor-pointer bg-gray-50 min-w-fit">

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/living-room")}
      >
        <img
          src={img1}
          alt="Living Room"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Living Room</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/bedroom")}
      >
        <img
          src={img2}
          alt="Bedroom"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Bedroom</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/dining-room")}
      >
        <img
          src={img3}
          alt="Dining Room"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Dining Room</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/organisers")}
      >
        <img
          src={img4}
          alt="Organisers"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Organisers</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/decor")}
      >
        <img
          src={img5}
          alt="Decor"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Decor</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/furnishings")}
      >
        <img
          src={img6}
          alt="Furnishings"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Furnishings</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/kitchen")}
      >
        <img
          src={img7}
          alt="Kitchen"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Kitchen</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/tableware")}
      >
        <img
          src={img8}
          alt="Tableware"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Tableware</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/bath-laundry")}
      >
        <img
          src={img9}
          alt="Bath & Laundry"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Bath & Laundry</p>
      </div>

      <div
        className="flex flex-col justify-center items-center w-full"
        onClick={() => navigate("/gifting")}
      >
        <img
          src={img10}
          alt="Gifting"
          className="w-14 h-15 transition-transform duration-300 hover:scale-125"
        />
        <p className="text-black font-semibold text-center whitespace-nowrap">Gifting</p>
      </div>

    </div>
  );
}

export default Header;
