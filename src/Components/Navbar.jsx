import React from "react";
import logo from "../assets/logo.svg";
import watch from "../assets/icons8-heart-48.png";
import basket from "../assets/icons8-wicker-basket-24.png";
import dots from "../assets/icons8-three-dots-32.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-100 flex-wrap font-semibold p-2">
      
      {/* LEFT SIDE LOGO + SEARCH */}
      <div className="flex flex-row gap-5">
        <img src={logo} alt="logo" />

        <input
          type="text"
          placeholder="What Are You Looking For?"
          className="w-96 h-12 bg-gray-200 shadow-sm text-gray-700 border rounded-sm p-2"
        />
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="flex flex-row gap-7 items-center hover:cursor-pointer">

        {/* SIGN IN DROPDOWN */}
        <div className="relative group">
          <button className="bg-purple-800 text-white w-40 h-12 rounded-sm hover:bg-gray-800">
            SIGN UP / SIGN IN
          </button>

          <div className="absolute hidden group-hover:block top-14 right-0 bg-white shadow-lg rounded-md p-4 w-64 transition-all duration-200 z-50">
            <h3 className="text-lg font-semibold mb-2">Sign In</h3>

            <input type="text" placeholder="Email" className="w-full border p-2 rounded mb-2" />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-3" />

            <button className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-900">
              Login
            </button>

            <p className="text-sm mt-2 text-gray-600">
              New user? <span className="text-purple-700 cursor-pointer">Create account</span>
            </p>
          </div>
        </div>

        {/* HEART ICON WITH BLUE UNDERLINE */}
        <div className="flex flex-col items-center text-center group">
          <img src={watch} alt="watch" className="w-5 h-5" />
          <p className="text-sm">Favourites</p>

          {/* Underline on hover */}
          <div className="h-1 w-6 bg-blue-500 mt-1 rounded hidden group-hover:block"></div>
        </div>

        {/* BASKET ICON WITH BLUE UNDERLINE */}
        <div className="flex flex-col items-center text-center group">
          <img src={basket} alt="basket" className="w-5 h-5" />
          <p className="text-sm">Cart</p>

          <div className="h-1 w-6 bg-blue-500 mt-1 rounded hidden group-hover:block"></div>
        </div>

        {/* 3 DOTS MORE MENU */}
        <div className="flex flex-col items-center text-center relative group">
          <img src={dots} alt="dots" className="w-5 h-5" />
          <p className="text-sm">More</p>

          {/* DROPDOWN WHITE BOX */}
          <div className="absolute hidden group-hover:block top-12 right-0 bg-white shadow-lg p-4 rounded-md w-48 z-50">
            <p className="p-1 hover:bg-gray-200 cursor-pointer">Online Gift</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">Offline Gift</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">Blog</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">Store Locator</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">Furniture Exchange</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">LandMark SBI Credit Card</p>
            <p className="p-1 hover:bg-gray-200 cursor-pointer">E-List</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
