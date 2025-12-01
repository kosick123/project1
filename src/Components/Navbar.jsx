import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="flex justify-between items-center p-4">

        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h2 className="text-black font-semibold">THE ODIN PROJECT</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-green-600">
          <li><Link to="/" className="hover:text-black ">All Paths</Link></li>
          <li><Link to="/about" className="hover:text-black">About</Link></li>
          <li><Link to="/community" className="hover:text-black">Community</Link></li>
          <li><Link to="/supportus" className="hover:text-black">Support Us</Link></li>
          <li><Link to="/signin" className="hover:text-black">Sign In</Link></li>

          <img src={logo2} alt="logo2" className="w-8 h-8 transition-transform duration-300 hover:scale-110 cursor-pointer" />

  < button className="bg-green-800 hover:bg-gray-800 text-white rounded-md h-10 w-28 transition-transform duration-300 hover:scale-110">
            Get Started
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-green-100">
          <li><Link to="/" onClick={() => setOpen(false)}>All Paths</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/community" onClick={() => setOpen(false)}>Community</Link></li>
          <li><Link to="/supportus" onClick={() => setOpen(false)}>Support Us</Link></li>
          <li><Link to="/signin" onClick={() => setOpen(false)}>Sign In</Link></li>

          <button className="bg-green-800 text-white rounded-md h-10 w-full ">
            Get Started
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
