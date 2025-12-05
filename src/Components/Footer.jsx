import React from "react";
import logo from "../assets/logo.svg"
import face from "../assets/icons8-facebook-30.png";
import twit from "../assets/icons8-twitter-30.png";
import inst from "../assets/icons8-instagram-logo-32.png";

function Footer(){
    return(
        <div>

            {/*footer part1 */}
            <div className="flex flex-col flex-wrap">
              <div className="grid grid-cols-2 md:grid-cols-5 justify-between p-5 gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Living room</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Kitchen</h1>
                    <p className="text-gray-500">Cookware</p>
                    <p className="text-gray-500">Kitchenware</p>
                    <p className="text-gray-500">Kitchenware</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Tableware</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Decor</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Furnishing</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 justify-between p-5 gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Bath & Laundry</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Explore</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">About</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Great Features</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-black font-bold text-xl">Help</h1>
                    <p className="text-gray-500">Living Room Furniture</p>
                    <p className="text-gray-500">Bedroom Furniture</p>
                    <p className="text-gray-500">Dining Room Furniture</p>
                    <p className="text-gray-500">Accent Chairs</p>
                </div>
            </div>
        </div>

   <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>




     {/* Footer part2 */}
     <div className="flex flex-col md:flex-row justify-between p-5 gap-10 ">
        <div className="flex flex-row flex-wrap gap-10">
            <img src={logo}
            alt="logo"
            className="w-1/3"
            />
            <p className="text-gray-500 text-sm">© 2025 RNA Intellectual Property Limited.<br /> Terms & Conditions - Privacy Policy</p>
        </div>
        <div className="flex flex-row mr-10 gap-10">
            <img 
            src={face}
            alt="face"
            className="w-7 h-7"
            />
            <img 
            src={twit}
            alt="twit"
            className="w-7 h-7"
            />
            <img 
            src={inst}
            alt="inst"
            className="w-7 h-7"
            />
        </div>

     </div>





     </div>
    )
}
export default Footer