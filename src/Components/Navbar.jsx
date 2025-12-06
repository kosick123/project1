import React, { useState } from "react";
import logo from "../assets/logo.svg";
import watch from "../assets/icons8-heart-48.png";
import basket from "../assets/icons8-wicker-basket-24.png";
import dots from "../assets/icons8-three-dots-32.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center bg-gray-100 flex-wrap font-semibold p-2">

      {/* LEFT SIDE LOGO */}
      <div className="flex flex-row gap-5">
        <img src={logo} alt="logo" />
      </div>

      {/* HAMBURGER BUTTON FOR MOBILE */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden block text-3xl font-bold"
      >
        ☰
      </button>

      {/* RIGHT SIDE ICONS (HIDE IN MOBILE) */}
      <div className="hidden md:flex flex-row gap-7 items-center hover:cursor-pointer">

        {/* SIGN IN BUTTON */}
        <button
          onClick={() => setShowSignIn(true)}
          className="bg-purple-800 text-white w-40 h-12 rounded-sm hover:bg-gray-800"
        >
          SIGN UP / SIGN IN
        </button>

        {/* HEART */}
        <div className="flex flex-col items-center text-center group">
          <img src={watch} alt="watch" className="w-5 h-5" />
          <p className="text-sm">Favourites</p>
          <div className="h-1 w-6 bg-blue-500 mt-1 rounded hidden group-hover:block"></div>
        </div>

        {/* CART */}
        <div className="flex flex-col items-center text-center group">
          <img src={basket} alt="basket" className="w-5 h-5" />
          <p className="text-sm">Cart</p>
          <div className="h-1 w-6 bg-blue-500 mt-1 rounded hidden group-hover:block"></div>
        </div>

        {/* MORE MENU */}
        <div className="flex flex-col items-center text-center relative group">
          <img src={dots} alt="dots" className="w-5 h-5" />
          <p className="text-sm">More</p>
          <div className="absolute hidden group-hover:block top-12 right-0 bg-white shadow-lg p-4 rounded-md w-48 z-50">
            <p className="p-1 hover:bg-gray-200">Online Gift</p>
            <p className="p-1 hover:bg-gray-200">Offline Gift</p>
            <p className="p-1 hover:bg-gray-200">Blog</p>
            <p className="p-1 hover:bg-gray-200">Store Locator</p>
            <p className="p-1 hover:bg-gray-200">Furniture Exchange</p>
            <p className="p-1 hover:bg-gray-200">LandMark SBI Credit Card</p>
            <p className="p-1 hover:bg-gray-200">E-List</p>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE PANEL */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 p-5 flex flex-col gap-5">

          <button
            onClick={() => setMenuOpen(false)}
            className="text-right text-xl font-bold"
          >
            ✕
          </button>

          <button
            onClick={() => setShowSignIn(true)}
            className="bg-purple-800 text-white w-full h-12 rounded-sm hover:bg-gray-800"
          >
            SIGN UP / SIGN IN
          </button>

          <p className="p-1 hover:bg-gray-200">Favourites</p>
          <p className="p-1 hover:bg-gray-200">Cart</p>

          <p className="p-1 hover:bg-gray-200">Online Gift</p>
          <p className="p-1 hover:bg-gray-200">Offline Gift</p>
          <p className="p-1 hover:bg-gray-200">Blog</p>
          <p className="p-1 hover:bg-gray-200">Store Locator</p>
          <p className="p-1 hover:bg-gray-200">Furniture Exchange</p>
          <p className="p-1 hover:bg-gray-200">LandMark SBI Credit Card</p>
          <p className="p-1 hover:bg-gray-200">E-List</p>
        </div>
      )}

      {/* SIGN IN POPUP FORM */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-80 shadow-lg">

            <h3 className="text-xl font-semibold mb-3">Sign In</h3>

            <input type="text" placeholder="Email" className="w-full border p-2 rounded mb-2" />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-3" />

            <button className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-900 mb-2">
              Login
            </button>

            <button
              onClick={() => setShowSignIn(false)}
              className="w-full bg-gray-200 p-2 rounded"
            >
              Cancel
            </button>

            <p className="text-sm mt-2 text-gray-600">
              New user? <span className="text-purple-700 cursor-pointer">Create account</span>
            </p>

          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
